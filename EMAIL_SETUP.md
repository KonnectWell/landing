# Email Configuration Setup

To enable the newsletter functionality, you need to create a `.env.local` file in the root of your project with the following environment variables:

```bash
# Email Configuration for Newsletter
SMTP_EMAIL=your-gmail@gmail.com
SMTP_PASSWORD=your-app-password
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Use the credentials**:
   - `SMTP_EMAIL`: konnectwell00@gmail.com (or your preferred sender email)
   - `SMTP_PASSWORD`: The 16-character app password from step 2

## Alternative Email Providers

If you prefer not to use Gmail, you can configure other providers:

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_EMAIL=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### Custom SMTP
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_EMAIL=your-email@domain.com
SMTP_PASSWORD=your-password
```

Then update the transporter configuration in `src/app/api/newsletter/route.ts` accordingly.
