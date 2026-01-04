
import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY;

if (!resendApiKey) {
    console.warn('RESEND_API_KEY missing in .env');
}

export const resend = new Resend(resendApiKey || 're_123456789');
