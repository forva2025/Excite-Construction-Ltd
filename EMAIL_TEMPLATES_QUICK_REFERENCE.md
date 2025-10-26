# Email Templates Quick Reference

## 📋 Template Configuration Checklist

### Template 1: Owner Notification (template_gvr08ld)
- **To Email**: `exciteconstruction@gmail.com`
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{reply_to}}`

### Template 2: Customer Auto-Reply (template_customer_reply)
- **To Email**: `{{from_email}}`
- **From Name**: `Excite Construction Ltd`
- **From Email**: `exciteconstruction@gmail.com`
- **Reply To**: `exciteconstruction@gmail.com`

## 🚨 Critical Setup Steps

1. **Create Customer Template** with ID: `template_customer_reply`
2. **Set Recipients Correctly**:
   - Owner template → Your email
   - Customer template → Customer's email (`{{from_email}}`)
3. **Test Both Templates** from EmailJS dashboard
4. **Update HTML** if customer template ID is different

## 📧 Template Variables Available

```
{{from_name}}     - Customer's name
{{from_email}}    - Customer's email  
{{phone}}         - Customer's phone
{{project_type}}  - Selected project type
{{message}}       - Customer's message
{{reply_to}}      - Customer's email (for replies)
{{current_date}}  - Current date
{{current_time}}  - Current time
```

## ✅ Success Indicators

- Owner receives inquiry email immediately
- Customer receives auto-reply confirmation
- Both emails have proper formatting
- No 422 or other EmailJS errors
- Form shows "Message Sent!" success message

## 🔧 Current Configuration

```html
data-service-id="service_iad66pb"
data-owner-template-id="template_gvr08ld" 
data-customer-template-id="template_customer_reply"
data-public-key="0ZrxaQXfLixTAkLBy"
```

**Action Required**: Create the customer template with ID `template_customer_reply`