"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.refreshToken = exports.resetPassword = exports.forgotPassword = exports.login = exports.register = void 0;
const auth_service_1 = require("../services/auth.service");
const jwt_1 = require("../utils/jwt");
const constants_1 = require("../utils/constants");
const register = async (req, res, next) => {
    try {
        const result = await auth_service_1.authService.register(req.body);
        res.status(201).json(constants_1.API_RESPONSE.SUCCESS(result.message, {
            user: result.user,
            token: result.token
        }));
    }
    catch (error) {
        next(error);
    }
};
exports.register = register;
const login = async (req, res, next) => {
    try {
        const result = await auth_service_1.authService.login(req.body);
        res.json(constants_1.API_RESPONSE.SUCCESS(result.message, {
            user: result.user,
            token: result.token
        }));
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const result = await auth_service_1.authService.forgotPassword(email);
        res.json(constants_1.API_RESPONSE.SUCCESS(result.message));
    }
    catch (error) {
        next(error);
    }
};
exports.forgotPassword = forgotPassword;
const resetPassword = async (req, res, next) => {
    try {
        const { token, password } = req.body;
        const result = await auth_service_1.authService.resetPassword(token, password);
        res.json(constants_1.API_RESPONSE.SUCCESS(result.message));
    }
    catch (error) {
        next(error);
    }
};
exports.resetPassword = resetPassword;
const refreshToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json(constants_1.API_RESPONSE.ERROR('No token provided', 'UNAUTHORIZED'));
        }
        const decoded = (0, jwt_1.verifyToken)(token);
        const result = await auth_service_1.authService.verifyUserToken(decoded.userId);
        return res.json(constants_1.API_RESPONSE.SUCCESS('Token is valid', result));
    }
    catch (error) {
        return next(error);
    }
};
exports.refreshToken = refreshToken;
const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json(constants_1.API_RESPONSE.ERROR('No token provided', 'UNAUTHORIZED'));
        }
        const decoded = (0, jwt_1.verifyToken)(token);
        const result = await auth_service_1.authService.verifyUserToken(decoded.userId);
        return res.json(constants_1.API_RESPONSE.SUCCESS('Token verified successfully', result));
    }
    catch (error) {
        return next(error);
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.controller.js.map