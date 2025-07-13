import { z } from 'zod';
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const resetPasswordSchema: z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    token: string;
}, {
    password: string;
    token: string;
}>;
export declare const createTreeSchema: z.ZodObject<{
    species: z.ZodString;
    source: z.ZodEnum<["NURSERY", "HOMEGROWN", "GRAFTED", "WILD_SEEDLING"]>;
    commitmentDuration: z.ZodNumber;
    initialHealthStatus: z.ZodEnum<["EXCELLENT", "HEALTHY", "GOOD", "FAIR", "POOR", "CRITICAL", "DEAD"]>;
    location: z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
        address: string;
    }, {
        latitude: number;
        longitude: number;
        address: string;
    }>;
}, "strip", z.ZodTypeAny, {
    species: string;
    source: "NURSERY" | "HOMEGROWN" | "GRAFTED" | "WILD_SEEDLING";
    commitmentDuration: number;
    initialHealthStatus: "EXCELLENT" | "HEALTHY" | "GOOD" | "FAIR" | "POOR" | "CRITICAL" | "DEAD";
    location: {
        latitude: number;
        longitude: number;
        address: string;
    };
}, {
    species: string;
    source: "NURSERY" | "HOMEGROWN" | "GRAFTED" | "WILD_SEEDLING";
    commitmentDuration: number;
    initialHealthStatus: "EXCELLENT" | "HEALTHY" | "GOOD" | "FAIR" | "POOR" | "CRITICAL" | "DEAD";
    location: {
        latitude: number;
        longitude: number;
        address: string;
    };
}>;
export declare const updateTreeSchema: z.ZodObject<{
    healthStatus: z.ZodEnum<["EXCELLENT", "HEALTHY", "GOOD", "FAIR", "POOR", "CRITICAL", "DEAD"]>;
    notes: z.ZodOptional<z.ZodString>;
    growthMeasurements: z.ZodOptional<z.ZodObject<{
        height: z.ZodOptional<z.ZodString>;
        trunk_diameter: z.ZodOptional<z.ZodString>;
        canopy_width: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        height?: string | undefined;
        trunk_diameter?: string | undefined;
        canopy_width?: string | undefined;
    }, {
        height?: string | undefined;
        trunk_diameter?: string | undefined;
        canopy_width?: string | undefined;
    }>>;
    gpsLocation: z.ZodOptional<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
    }, {
        latitude: number;
        longitude: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    healthStatus: "EXCELLENT" | "HEALTHY" | "GOOD" | "FAIR" | "POOR" | "CRITICAL" | "DEAD";
    notes?: string | undefined;
    growthMeasurements?: {
        height?: string | undefined;
        trunk_diameter?: string | undefined;
        canopy_width?: string | undefined;
    } | undefined;
    gpsLocation?: {
        latitude: number;
        longitude: number;
    } | undefined;
}, {
    healthStatus: "EXCELLENT" | "HEALTHY" | "GOOD" | "FAIR" | "POOR" | "CRITICAL" | "DEAD";
    notes?: string | undefined;
    growthMeasurements?: {
        height?: string | undefined;
        trunk_diameter?: string | undefined;
        canopy_width?: string | undefined;
    } | undefined;
    gpsLocation?: {
        latitude: number;
        longitude: number;
    } | undefined;
}>;
export declare const transferTreeSchema: z.ZodObject<{
    transferReason: z.ZodString;
    makePublic: z.ZodBoolean;
    newOwnerId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    transferReason: string;
    makePublic: boolean;
    newOwnerId?: string | undefined;
}, {
    transferReason: string;
    makePublic: boolean;
    newOwnerId?: string | undefined;
}>;
export declare const adoptTreeSchema: z.ZodObject<{
    commitmentMessage: z.ZodString;
    commitmentDuration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    commitmentDuration: number;
    commitmentMessage: string;
}, {
    commitmentDuration: number;
    commitmentMessage: string;
}>;
export declare const updateProfileSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    isProfilePublic: z.ZodOptional<z.ZodBoolean>;
    emailNotifications: z.ZodOptional<z.ZodBoolean>;
    city: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    isProfilePublic?: boolean | undefined;
    emailNotifications?: boolean | undefined;
    city?: string | undefined;
    country?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    isProfilePublic?: boolean | undefined;
    emailNotifications?: boolean | undefined;
    city?: string | undefined;
    country?: string | undefined;
}>;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const treeQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
} & {
    status: z.ZodOptional<z.ZodEnum<["active", "transferred", "needs_attention"]>>;
    species: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    status?: "active" | "transferred" | "needs_attention" | undefined;
    species?: string | undefined;
}, {
    status?: "active" | "transferred" | "needs_attention" | undefined;
    species?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const mapQuerySchema: z.ZodObject<{
    bounds: z.ZodString;
    zoom: z.ZodNumber;
    filter: z.ZodDefault<z.ZodEnum<["all", "my_trees", "adoptable"]>>;
}, "strip", z.ZodTypeAny, {
    filter: "all" | "my_trees" | "adoptable";
    bounds: string;
    zoom: number;
}, {
    bounds: string;
    zoom: number;
    filter?: "all" | "my_trees" | "adoptable" | undefined;
}>;
export declare const adoptableTreesSchema: z.ZodObject<{
    latitude: z.ZodOptional<z.ZodNumber>;
    longitude: z.ZodOptional<z.ZodNumber>;
    radius: z.ZodDefault<z.ZodNumber>;
    species: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    radius: number;
    species?: string | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
}, {
    species?: string | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    radius?: number | undefined;
}>;
export declare const redeemRewardSchema: z.ZodObject<{
    shippingAddress: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        city: string;
        country: string;
        street: string;
        state: string;
        postalCode: string;
    }, {
        city: string;
        country: string;
        street: string;
        state: string;
        postalCode: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    shippingAddress?: {
        city: string;
        country: string;
        street: string;
        state: string;
        postalCode: string;
    } | undefined;
}, {
    shippingAddress?: {
        city: string;
        country: string;
        street: string;
        state: string;
        postalCode: string;
    } | undefined;
}>;
export declare const notificationQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
} & {
    type: z.ZodDefault<z.ZodEnum<["all", "tree_update_reminder", "adoption_request", "badge_earned", "point_milestone", "system_update", "community_news"]>>;
}, "strip", z.ZodTypeAny, {
    type: "all" | "tree_update_reminder" | "adoption_request" | "badge_earned" | "point_milestone" | "system_update" | "community_news";
    page: number;
    limit: number;
}, {
    type?: "all" | "tree_update_reminder" | "adoption_request" | "badge_earned" | "point_milestone" | "system_update" | "community_news" | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const leaderboardQuerySchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["points", "trees_planted", "co2_offset"]>>;
    period: z.ZodDefault<z.ZodEnum<["weekly", "monthly", "all_time"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "points" | "trees_planted" | "co2_offset";
    limit: number;
    period: "weekly" | "monthly" | "all_time";
}, {
    type?: "points" | "trees_planted" | "co2_offset" | undefined;
    limit?: number | undefined;
    period?: "weekly" | "monthly" | "all_time" | undefined;
}>;
//# sourceMappingURL=validation.d.ts.map