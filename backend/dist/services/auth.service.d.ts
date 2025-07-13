interface RegisterData {
    name: string;
    email: string;
    password: string;
}
interface LoginData {
    email: string;
    password: string;
}
export declare class AuthService {
    register(data: RegisterData): Promise<{
        user: {
            name: string;
            email: string;
            id: string;
            greenPoints: number;
            createdAt: Date;
        };
        token: string;
        message: "User registered successfully";
    }>;
    login(data: LoginData): Promise<{
        user: {
            name: string;
            email: string;
            isProfilePublic: boolean;
            id: string;
            greenPoints: number;
            lastLoginAt: Date | null;
        };
        token: string;
        message: "Login successful";
    }>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    verifyUserToken(userId: string): Promise<{
        user: {
            name: string;
            email: string;
            isProfilePublic: boolean;
            id: string;
            profilePicture: string | null;
            greenPoints: number;
        };
        valid: boolean;
    }>;
    getUserStats(userId: string): Promise<{
        greenPoints: number;
        _count: {
            trees: number;
            adoptions: number;
            updates: number;
            badges: number;
        };
    } | null>;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=auth.service.d.ts.map