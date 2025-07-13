export declare class EmailService {
    private fromEmail;
    sendWelcomeEmail(to: string, name: string): Promise<void>;
    sendPasswordResetEmail(to: string, name: string, resetToken: string): Promise<void>;
    sendTreeUpdateReminder(to: string, name: string, treeName: string, treeId: string, daysSinceUpdate: number): Promise<void>;
    sendBadgeEarnedEmail(to: string, name: string, badgeName: string, badgeIcon: string, description: string): Promise<void>;
}
export declare const emailService: EmailService;
//# sourceMappingURL=email.service.d.ts.map