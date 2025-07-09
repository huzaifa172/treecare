import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailService {
  private fromEmail = process.env.FROM_EMAIL || 'hello@greenguardian.com';

  async sendWelcomeEmail(to: string, name: string) {
    try {
      await resend.emails.send({
        from: this.fromEmail,
        to,
        subject: '🌱 Welcome to GreenGuardian!',
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: 'Arial', sans-serif;">
            <header style="text-align: center; padding: 20px; background: linear-gradient(135deg, #228B22, #3BB273);">
              <h1 style="color: white; margin: 0;">🌿 GreenGuardian</h1>
              <p style="color: #E8F5E8; margin: 5px 0;">Own. Nurture. Impact.</p>
            </header>
            
            <main style="padding: 30px 20px; background: #F9FDF9;">
              <h2 style="color: #228B22;">Welcome, ${name}! 🌱</h2>
              
              <p style="color: #2D5A2D; line-height: 1.6;">
                Thank you for joining GreenGuardian! You're now part of a growing community 
                dedicated to fighting climate change one tree at a time.
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #228B22;">
                <h3 style="color: #228B22; margin-top: 0;">🚀 Get Started:</h3>
                <ul style="color: #2D5A2D;">
                  <li>📱 Plant your first tree and earn 50 Green Points</li>
                  <li>📸 Upload a photo and register it in our system</li>
                  <li>🗺️ See your tree on our global map</li>
                  <li>🏆 Earn badges and climb the leaderboard</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_URL}/dashboard" 
                   style="background: #228B22; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                   Start Your Green Journey
                </a>
              </div>
              
              <p style="color: #666; font-size: 14px; text-align: center;">
                Together, we're growing a greener future! 🌍
              </p>
            </main>
            
            <footer style="text-align: center; padding: 20px; background: #E8F5E8; color: #666; font-size: 12px;">
              <p>GreenGuardian - Fighting climate change, one tree at a time</p>
              <p>If you didn't sign up for this account, please ignore this email.</p>
            </footer>
          </div>
        `
      });
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      // Don't throw error - email failure shouldn't block registration
    }
  }

  async sendPasswordResetEmail(to: string, name: string, resetToken: string) {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    
    try {
      await resend.emails.send({
        from: this.fromEmail,
        to,
        subject: '🔐 Reset Your GreenGuardian Password',
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: 'Arial', sans-serif;">
            <header style="text-align: center; padding: 20px; background: linear-gradient(135deg, #228B22, #3BB273);">
              <h1 style="color: white; margin: 0;">🌿 GreenGuardian</h1>
            </header>
            
            <main style="padding: 30px 20px; background: #F9FDF9;">
              <h2 style="color: #228B22;">Password Reset Request</h2>
              
              <p style="color: #2D5A2D;">Hi ${name},</p>
              
              <p style="color: #2D5A2D; line-height: 1.6;">
                We received a request to reset your password. Click the button below to create a new password:
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${resetUrl}" 
                   style="background: #228B22; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                   Reset Password
                </a>
              </div>
              
              <div style="background: #FFF3CD; padding: 15px; border-radius: 6px; border-left: 4px solid #F6C453;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  ⚠️ This link will expire in 15 minutes for security reasons.
                </p>
              </div>
              
              <p style="color: #666; font-size: 14px; margin-top: 20px;">
                If you didn't request this password reset, please ignore this email. Your password will remain unchanged.
              </p>
            </main>
            
            <footer style="text-align: center; padding: 20px; background: #E8F5E8; color: #666; font-size: 12px;">
              <p>GreenGuardian - Fighting climate change, one tree at a time</p>
            </footer>
          </div>
        `
      });
    } catch (error) {
      console.error('Failed to send password reset email:', error);
      throw new Error('Failed to send password reset email');
    }
  }

  async sendTreeUpdateReminder(to: string, name: string, treeName: string, treeId: string, daysSinceUpdate: number) {
    try {
      await resend.emails.send({
        from: this.fromEmail,
        to,
        subject: `🌱 Time to check on your ${treeName} tree!`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: 'Arial', sans-serif;">
            <header style="text-align: center; padding: 20px; background: linear-gradient(135deg, #228B22, #3BB273);">
              <h1 style="color: white; margin: 0;">🌿 GreenGuardian</h1>
            </header>
            
            <main style="padding: 30px 20px; background: #F9FDF9;">
              <h2 style="color: #228B22;">Your tree misses you! 🌱</h2>
              
              <p style="color: #2D5A2D;">Hi ${name},</p>
              
              <p style="color: #2D5A2D; line-height: 1.6;">
                It's been ${daysSinceUpdate} days since you last updated your ${treeName} tree. 
                Time to check in and see how it's growing!
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #228B22;">
                <h3 style="color: #228B22; margin-top: 0;">📸 Quick Update Ideas:</h3>
                <ul style="color: #2D5A2D;">
                  <li>Take a new photo of your tree</li>
                  <li>Measure its growth (height, trunk diameter)</li>
                  <li>Check its health status</li>
                  <li>Add notes about any care you've provided</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_URL}/trees/${treeId}" 
                   style="background: #228B22; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                   Update My Tree
                </a>
              </div>
              
              <p style="color: #666; font-size: 14px; text-align: center;">
                Regular updates help track your environmental impact! 🌍
              </p>
            </main>
            
            <footer style="text-align: center; padding: 20px; background: #E8F5E8; color: #666; font-size: 12px;">
              <p>GreenGuardian - Fighting climate change, one tree at a time</p>
              <p><a href="${process.env.FRONTEND_URL}/profile/settings">Manage email preferences</a></p>
            </footer>
          </div>
        `
      });
    } catch (error) {
      console.error('Failed to send tree update reminder:', error);
    }
  }

  async sendBadgeEarnedEmail(to: string, name: string, badgeName: string, badgeIcon: string, description: string) {
    try {
      await resend.emails.send({
        from: this.fromEmail,
        to,
        subject: `🏆 New Badge Earned: ${badgeName}!`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: 'Arial', sans-serif;">
            <header style="text-align: center; padding: 20px; background: linear-gradient(135deg, #228B22, #3BB273);">
              <h1 style="color: white; margin: 0;">🌿 GreenGuardian</h1>
            </header>
            
            <main style="padding: 30px 20px; background: #F9FDF9;">
              <div style="text-align: center;">
                <h2 style="color: #228B22;">Congratulations! 🎉</h2>
                <div style="font-size: 48px; margin: 20px 0;">${badgeIcon}</div>
                <h3 style="color: #228B22;">${badgeName}</h3>
              </div>
              
              <p style="color: #2D5A2D;">Hi ${name},</p>
              
              <p style="color: #2D5A2D; line-height: 1.6;">
                Amazing work! You've earned the "${badgeName}" badge for ${description}.
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F6C453;">
                <p style="margin: 0; color: #856404;">
                  🌟 Keep up the fantastic work! Every action you take helps fight climate change.
                </p>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.FRONTEND_URL}/profile" 
                   style="background: #228B22; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                   View My Profile
                </a>
              </div>
            </main>
            
            <footer style="text-align: center; padding: 20px; background: #E8F5E8; color: #666; font-size: 12px;">
              <p>GreenGuardian - Fighting climate change, one tree at a time</p>
            </footer>
          </div>
        `
      });
    } catch (error) {
      console.error('Failed to send badge earned email:', error);
    }
  }
}

export const emailService = new EmailService();