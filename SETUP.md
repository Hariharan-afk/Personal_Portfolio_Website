# Portfolio Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Add Your Resume

Place your resume PDF in `public/resume.pdf`

### 4. Customize Your Data

Edit `lib/data.ts` to update all your personal information, projects, skills, etc.

### 5. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## EmailJS Setup (Required for Contact Form)

### Step 1: Create Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account

### Step 2: Add Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow authentication steps
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Copy your **Template ID**

### Step 4: Get Public Key
1. Go to Account → General
2. Copy your **Public Key**

### Step 5: Update .env.local
Add all three values to your `.env.local` file

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Build for Production

Test production build locally:

```bash
npm run build
npm start
```

## Customization Guide

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#00d9ff",    // Change to your preferred color
  secondary: "#a855f7",
  accent: "#f97316",
}
```

### Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont, AnotherFont } from "next/font/google";
```

### Content
All content is in `lib/data.ts`:
- `personalInfo` - Name, bio, contact
- `education` - Your degrees
- `experience` - Work history
- `projects` - Project showcase
- `skills` - Technical skills
- `certifications` - Certificates
- `achievements` - Awards & recognition

## Troubleshooting

### Contact Form Not Working
- Check `.env.local` has correct EmailJS credentials
- Verify EmailJS template variables match
- Check browser console for errors

### 3D Scene Not Loading
- This is normal during SSR
- Scene loads client-side only
- Check browser console for Three.js errors

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues
- Ensure all environment variables are set in Vercel
- Check build logs for specific errors
- Verify all imports are correct

## Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Load**: Heavy components already lazy loaded
3. **Reduce Bundle Size**: Remove unused dependencies
4. **Cache Assets**: Vercel handles this automatically

## Support

For issues or questions:
- Check the [README.md](README.md)
- Review Next.js [documentation](https://nextjs.org/docs)
- Open an issue on GitHub

---

Happy coding! 🚀

