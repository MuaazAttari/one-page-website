# Email Delivery Troubleshooting Guide

## Quick Tests

### 1. Check Configuration
```bash
# Start your dev server
npm run dev

# Then visit in browser:
http://localhost:3000/api/test-email
```

This will show if your API key is configured.

### 2. Send Test Email
```bash
# Using curl (terminal):
curl -X POST http://localhost:3000/api/test-email

# Or use Postman/Thunder Client to POST to /api/test-email
```

### 3. Check Console Logs
```bash
# In your terminal where npm run dev is running
# Look for:
✅ Email sent successfully via Resend
❌ Resend API error
⚠️ RESEND_API_KEY not configured
```

## Common Issues & Solutions

### Issue 1: API Key Not Configured
**Symptom:** Console shows "⚠️ RESEND_API_KEY not configured"

**Solution:**
1. Go to https://resend.com/api-keys
2. Create a new API key
3. Copy it (starts with `re_`)
4. Open `.env.local`
5. Replace `re_paste_your_actual_api_key_here` with your real key
6. **Restart your dev server** (Ctrl+C, then `npm run dev`)

### Issue 2: Email in Spam Folder
**Symptom:** API says success but email not in inbox

**Solution:**
1. Check your Spam/Junk folder
2. Mark as "Not Spam" if found
3. Add Resend's sending domain to contacts

### Issue 3: Invalid API Key
**Symptom:** "Unauthorized" or "Invalid API key" error

**Solution:**
1. Make sure you copied the entire key (no spaces)
2. Key should look like: `re_xxxxxxxxxxxxxxxx`
3. Regenerate key in Resend dashboard if needed

### Issue 4: Using Unverified Domain
**Symptom:** Email fails when using custom from address

**Solution:**
1. Use default: `Portfolio <onboarding@resend.dev>`
2. OR verify your domain in Resend dashboard first
3. Add required DNS records

### Issue 5: Rate Limiting
**Symptom:** "Too many requests" error

**Solution:**
1. Wait 1 minute between test emails
2. Rate limit: 3 requests per minute

## Resend Sandbox Mode

By default, Resend uses a test domain (`onboarding@resend.dev`).
Emails will be delivered but may have "via resend.dev" branding.

For production:
1. Verify your domain in Resend
2. Update FROM_EMAIL in `.env.local`
3. Add DNS records to your domain

## Quick Verification Commands

```bash
# Check if .env.local is loaded (in dev server output)
# You should see: "Environments: .env.local"

# Test the API directly
curl http://localhost:3000/api/test-email

# Should return:
# {"status":"ok","config":{"hasApiKey":true,...}}
```

## Still Not Working?

1. **Check Resend Dashboard**: https://resend.com/emails
   - See if emails are being sent but bouncing

2. **Check Gmail Filters**: 
   - Settings → Filters and Blocked Addresses
   - Make sure you're not blocking Resend

3. **Try Different Email**:
   - Update CONTACT_EMAIL to a different address
   - Test with Outlook, Yahoo, etc.

4. **Regenerate API Key**:
   - Delete old key in Resend
   - Create new one
   - Update `.env.local`
   - Restart server

## Expected Flow

```
User submits form
    ↓
/api/contact receives POST
    ↓
Validates input
    ↓
Calls Resend API
    ↓
Resend sends email
    ↓
You receive email at CONTACT_EMAIL
    ↓
Success toast shown to user
```

## Success Indicators

✅ Console shows: "Email sent successfully via Resend: { id: '...' }"
✅ User sees: "Thank you! Your message has been sent successfully."
✅ You receive: Email in inbox (check spam if not in inbox)
