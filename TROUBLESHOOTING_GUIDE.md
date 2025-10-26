# Troubleshooting Guide - Excite Construction Ltd

## 🚨 Current Issues & Solutions

### 1. EmailJS 422 Error: "The recipients address is empty"

**Problem**: EmailJS template doesn't have a recipient email configured.

**Solution**:
1. Go to your EmailJS dashboard
2. Navigate to **Email Templates**
3. Edit your template (`template_gvr08ld`)
4. In the template settings, find the **"To Email"** field
5. Set it to: `exciteconstruction@gmail.com`
6. Save the template

**Alternative Solution**:
If the above doesn't work, try creating a new template with these settings:
- **To Email**: `exciteconstruction@gmail.com`
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{reply_to}}`

### 2. Google Maps 403 Error

**Problem**: Google Maps API restrictions or billing issues.

**Solutions**:

**Option A: Fix Current Embed**
1. The current embed should work without API key
2. If still getting 403, try this updated embed URL:

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.6341042336503!2d32.621401108659605!3d0.33086289966449944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbe0eadf4a6d%3A0x5389353f3062e22c!2sExcite%20Construction%20Limited!5e1!3m2!1sen!2sug!4v1760093491272!5m2!1sen!2sug" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

**Option B: Replace with Static Map**
Replace the iframe with a static map image:

```html
<div class="contact__map" data-aos="fade-up">
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=0.33086289966449944,32.621401108659605&zoom=15&size=800x450&markers=color:red%7C0.33086289966449944,32.621401108659605&key=YOUR_API_KEY" alt="Excite Construction Ltd Location" style="width: 100%; height: 450px; border: 0;">
    <p style="text-align: center; margin-top: 10px;">
        <a href="https://www.google.com/maps/place/Excite+Construction+Limited" target="_blank" style="color: #FF6B35; text-decoration: none;">
            View on Google Maps
        </a>
    </p>
</div>
```

### 3. CSP (Content Security Policy) Issues

**Problem**: Browser blocking certain resources.

**Solution**: Add these meta tags to the HTML head (if not already present):

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com https://maps.googleapis.com;">
```

## 🔧 Debugging Steps

### Step 1: Check EmailJS Configuration
Open browser console and look for:
```
EmailJS Configuration: {
  serviceId: "service_iad66pb",
  templateId: "template_gvr08ld", 
  publicKey: "0ZrxaQXfL..."
}
```

### Step 2: Test EmailJS Template
1. Go to EmailJS dashboard
2. Navigate to **Email Templates**
3. Click **Test** on your template
4. Send a test email to verify it works

### Step 3: Check Email Service
1. Go to **Email Services** in EmailJS dashboard
2. Verify your email service is active
3. Test the connection

## 📧 EmailJS Template Configuration

**Required Template Variables**:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone
- `{{project_type}}` - Selected project type
- `{{message}}` - Customer's message
- `{{reply_to}}` - Reply-to email (customer's email)

**Template Settings**:
- **To Email**: `exciteconstruction@gmail.com` (MUST be set)
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{reply_to}}`

## 🚀 Quick Fix Checklist

- [ ] EmailJS template has recipient email set to `exciteconstruction@gmail.com`
- [ ] EmailJS service is active and connected
- [ ] All template variables are properly configured
- [ ] Test email from EmailJS dashboard works
- [ ] Google Maps embed URL is correct
- [ ] No ad blockers interfering with requests

## 📞 Support Contacts

- **EmailJS Support**: https://www.emailjs.com/docs/support/
- **Google Maps Support**: https://developers.google.com/maps/support

---

**Note**: After making changes, clear your browser cache and test the form again.