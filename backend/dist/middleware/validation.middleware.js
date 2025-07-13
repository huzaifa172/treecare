"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateQuery = exports.validateSchema = void 0;
const zod_1 = require("zod");
const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            // Parse and validate request body
            req.body = schema.parse(req.body);
            return next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({
                    success: false,
                    message: 'Validation error',
                    errors: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message,
                        code: err.code
                    })),
                    timestamp: new Date().toISOString()
                });
            }
            return next(error);
        }
    };
};
exports.validateSchema = validateSchema;
const validateQuery = (schema) => {
    return (req, res, next) => {
        try {
            // Parse and validate query parameters
            req.query = schema.parse(req.query);
            return next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({
                    success: false,
                    message: 'Query validation error',
                    errors: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message,
                        code: err.code
                    })),
                    timestamp: new Date().toISOString()
                });
            }
            return next(error);
        }
    };
};
exports.validateQuery = validateQuery;
const validateParams = (schema) => {
    return (req, res, next) => {
        try {
            // Parse and validate route parameters
            req.params = schema.parse(req.params);
            return next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({
                    success: false,
                    message: 'Parameter validation error',
                    errors: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message,
                        code: err.code
                    })),
                    timestamp: new Date().toISOString()
                });
            }
            return next(error);
        }
    };
};
exports.validateParams = validateParams;
//# sourceMappingURL=validation.middleware.js.map