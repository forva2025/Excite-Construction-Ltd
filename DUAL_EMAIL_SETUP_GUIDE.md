# Dual Email System Setup Guide - Excite Construction Ltd

## 🎯 System Overview

This system sends **TWO emails** automatically when a customer submits the contact form:

1. **Owner Notification Email** → Sent to `exciteconstruction@gmail.com` (you receive the inquiry)
2. **Customer Auto-Reply Email** → Sent to the customer (confirmation message)

## 🔧 Setup Instructions

### Step 1: Create Owner Notification Template

1. Go to your EmailJS dashboard → **Email Templates**
2. Click **Create New Template**
3. **Template Name**: `Owner Notification`
4. **Template ID**: `template_gvr08ld` (already configured)

**Template Settings**:
- **To Email**: `exciteconstruction@gmail.com`
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{reply_to}}`

**Template Content**:
```
Subject: New Contact Form Inquiry - {{from_name}} ({{project_type}})

NEW INQUIRY RECEIVED

Customer Details:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}

Message:
{{message}}

---
Inquiry Details:
Date: {{current_date}}
Time: {{current_time}}
Source: Excite Construction Ltd Website

Reply directly to this email to respond to the customer.
```

### Step 2: Create Customer Auto-Reply Template

1. Go to **Email Templates** → **Create New Template**
2. **Template Name**: `Customer Auto-Reply`
3. **Template ID**: `template_customer_reply` (you need to create this)

**Template Settings**:
- **To Email**: `{{from_email}}` (customer's email)
- **From Name**: `Excite Construction Ltd`
- **From Email**: `exciteconstruction@gmail.com`
- **Reply To**: `exciteconstruction@gmail.com`

**Template Content**:
```
Subject: Thank You for Your Inquiry - Excite Construction Ltd

Dear {{from_name}},

Thank you for contacting Excite Construction Ltd!

We have received your inquiry regarding {{project_type}} and appreciate your interest in our services.

Your Message:
"{{message}}"

What Happens Next:
✅ We have received your inquiry ({{current_date}} at {{current_time}})
✅ Our team will review your project requirements
✅ We will contact you within 24 hours to discuss your project
✅ We will provide a detailed proposal and timeline

Contact Information:
📧 Email: exciteconstruction@gmail.com
📞 Phone: +256 701 084 131
📍 Address: Plot 19, Robert Mugabe Road, Kampala, Uganda

Our Services:
🏠 Residential Construction
🏢 Commercial Construction
🏗️ Civil Engineering
📐 Architectural Planning & Design
💼 Construction Consultancy

We look forward to working with you on your construction project!

Best regards,
The Excite Construction Ltd Team

---
This is an automated confirmation. Please do not reply to this email.
For immediate assistance, call us at +256 701 084 131.
```

### Step 3: Update HTML Configuration

The HTML is already configured with both template IDs:
```html
<form class="form" id="contact-form" 
      data-service-id="service_iad66pb" 
      data-owner-template-id="template_gvr08ld" 
      data-customer-template-id="template_customer_reply" 
      data-public-key="0ZrxaQXfLixTAkLBy">
```

**You need to**:
1. Create the customer template with ID: `template_customer_reply`
2. Copy the template ID and update the HTML if different

### Step 4: Test the System

1. **Test Owner Email**: Send a test from EmailJS dashboard
2. **Test Customer Email**: Send a test from EmailJS dashboard  
3. **Test Full System**: Submit the contact form on your website
4. **Verify Both Emails**: Check that both emails are received

## 📧 Email Flow

```
Customer Submits Form
         ↓
    JavaScript Processes
         ↓
    ┌─────────────────┐
    │  Send Both      │
    │  Emails         │
    └─────────────────┘
         ↓
    ┌─────────┐    ┌─────────────┐
    │ Owner   │    │ Customer    │
    │ Email   │    │ Auto-Reply  │
    │ (You)   │    │ Email       │
    └─────────┘    └─────────────┘
```

## 🔍 Troubleshooting

### If Only One Email Sends:
1. Check both template IDs are correct
2. Verify both templates have proper recipient emails
3. Check browser console for specific error messages

### If No Emails Send:
1. Verify EmailJS service is active
2. Check public key is correct
3. Ensure templates are published (not draft)

### If Customer Doesn't Receive Auto-Reply:
1. Check customer email template has `{{from_email}}` as recipient
2. Verify customer's email address is valid
3. Check spam/junk folder

## 📊 Available Template Variables

Both templates can use these variables:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone
- `{{project_type}}` - Selected project type
- `{{message}}` - Customer's message
- `{{reply_to}}` - Customer's email (for replies)
- `{{current_date}}` - Current date
- `{{current_time}}` - Current time

## 🚀 Benefits

✅ **Automatic Notifications** - You get notified immediately
✅ **Professional Response** - Customers get instant confirmation
✅ **No Manual Work** - Completely automated
✅ **Better Customer Experience** - Immediate acknowledgment
✅ **Reduced Response Time** - Faster customer service

---

**Note**: Make sure to test both templates thoroughly before going live!