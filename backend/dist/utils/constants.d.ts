export declare const POINTS: {
    readonly TREE_REGISTRATION: 50;
    readonly MONTHLY_UPDATE: 20;
    readonly TREE_ADOPTION: 100;
    readonly YEARLY_CARE: 300;
    readonly FRIEND_REFERRAL: 50;
    readonly CAMPAIGN_PARTICIPATION: 75;
};
export declare const BADGE_REQUIREMENTS: {
    readonly SEED_STARTER: {
        readonly trees_planted: 1;
    };
    readonly FOREST_BUILDER: {
        readonly trees_planted: 10;
    };
    readonly CAREGIVER: {
        readonly months_of_updates: 6;
    };
    readonly GUARDIAN_ANGEL: {
        readonly trees_adopted: 3;
    };
    readonly CLIMATE_WARRIOR: {
        readonly rank_percentage: 5;
    };
};
export declare const TREE_SPECIES: readonly ["Mango", "Neem", "Banyan", "Peepal", "Coconut", "Papaya", "Guava", "Lemon", "Orange", "Apple", "Jackfruit", "Drumstick", "Curry Leaf", "Teak", "Eucalyptus", "Bamboo", "Rose", "Jasmine", "Bougainvillea", "Tulsi"];
export declare const HEALTH_STATUS_SCORE: {
    readonly EXCELLENT: 100;
    readonly HEALTHY: 85;
    readonly GOOD: 70;
    readonly FAIR: 55;
    readonly POOR: 40;
    readonly CRITICAL: 25;
    readonly DEAD: 0;
};
export declare const CO2_ABSORPTION_RATES: {
    readonly Mango: 22;
    readonly Neem: 48;
    readonly Banyan: 50;
    readonly Peepal: 35;
    readonly Coconut: 15;
    readonly Papaya: 8;
    readonly Guava: 12;
    readonly Lemon: 10;
    readonly Orange: 10;
    readonly Apple: 18;
    readonly Jackfruit: 25;
    readonly Drumstick: 7;
    readonly 'Curry Leaf': 5;
    readonly Teak: 35;
    readonly Eucalyptus: 22;
    readonly Bamboo: 12;
    readonly Rose: 3;
    readonly Jasmine: 2;
    readonly Bougainvillea: 4;
    readonly Tulsi: 1;
    readonly default: 20;
};
export declare const UPLOAD_LIMITS: {
    readonly MAX_FILE_SIZE: number;
    readonly ALLOWED_IMAGE_TYPES: readonly ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    readonly ALLOWED_PDF_TYPES: readonly ["application/pdf"];
};
export declare const NOTIFICATION_TEMPLATES: {
    readonly TREE_UPDATE_REMINDER: {
        readonly title: "Time to check on your {species} tree!";
        readonly message: "It's been {days} days since your last update. Your tree misses you! 🌱";
    };
    readonly ADOPTION_REQUEST: {
        readonly title: "Someone wants to adopt your tree!";
        readonly message: "A tree lover wants to adopt your {species} tree. Review the request.";
    };
    readonly BADGE_EARNED: {
        readonly title: "New badge earned! 🏆";
        readonly message: "Congratulations! You've earned the '{badgeName}' badge for {description}.";
    };
    readonly POINT_MILESTONE: {
        readonly title: "Green Points milestone reached! 🌟";
        readonly message: "Amazing! You've reached {points} Green Points. Keep making an impact!";
    };
};
export declare const ERROR_MESSAGES: {
    readonly UNAUTHORIZED: "Authentication required";
    readonly FORBIDDEN: "Access denied";
    readonly NOT_FOUND: "Resource not found";
    readonly VALIDATION_ERROR: "Validation failed";
    readonly TREE_NOT_OWNED: "You do not own this tree";
    readonly INSUFFICIENT_POINTS: "Insufficient Green Points";
    readonly ALREADY_ADOPTED: "Tree has already been adopted";
    readonly TREE_NOT_ADOPTABLE: "Tree is not available for adoption";
    readonly EMAIL_ALREADY_EXISTS: "Email already registered";
    readonly INVALID_CREDENTIALS: "Invalid email or password";
    readonly RATE_LIMIT_EXCEEDED: "Too many requests, please try again later";
};
export declare const SUCCESS_MESSAGES: {
    readonly USER_REGISTERED: "User registered successfully";
    readonly LOGIN_SUCCESSFUL: "Login successful";
    readonly TREE_REGISTERED: "Tree registered successfully";
    readonly TREE_UPDATED: "Tree updated successfully";
    readonly TREE_ADOPTED: "Tree adopted successfully";
    readonly PROFILE_UPDATED: "Profile updated successfully";
    readonly REWARD_REDEEMED: "Reward redeemed successfully";
    readonly NOTIFICATION_READ: "Notification marked as read";
};
export declare const API_RESPONSE: {
    readonly SUCCESS: (message: string, data?: any) => {
        success: boolean;
        message: string;
        data: any;
        timestamp: string;
    };
    readonly ERROR: (message: string, error?: string, statusCode?: number) => {
        success: boolean;
        message: string;
        error: string | undefined;
        statusCode: number | undefined;
        timestamp: string;
    };
};
//# sourceMappingURL=constants.d.ts.map