# Quick Reference Guide

## 🚀 Essential Commands

### Development
```bash
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Run production server
```

### Testing
```bash
npx tsc --noEmit        # Check TypeScript errors
npm run build           # Test production build
```

### Deployment
```bash
git add .
git commit -m "Your message"
git push
# Then deploy via Vercel dashboard
```

---

## 📝 Quick Edit Guide

### 1. Update Your Info
**File**: `lib/data.ts`

```typescript
// Change these sections:
export const personalInfo = { ... }      // Name, email, bio
export const education = [ ... ]         // Your degrees
export const experience = [ ... ]        // Your jobs
export const projects = [ ... ]          // Your projects
export const skills = { ... }            // Your skills
export const certifications = [ ... ]    // Your certs
export const achievements = [ ... ]      // Your awards
```

### 2. Add Resume
```bash
# Place your resume here:
public/resume.pdf
```

### 3. Setup Email
**File**: Create `.env.local`

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get credentials from: https://www.emailjs.com/

---

## 🎨 Quick Customization

### Change Colors
**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: "#00d9ff",      // Change main color
  secondary: "#a855f7",    // Change accent
  accent: "#f97316",       // Change CTA color
}
```

### Change Fonts
**File**: `app/layout.tsx`

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

---

## 🗂️ File Locations

### Content Files
- **All your data**: `lib/data.ts`
- **Resume PDF**: `public/resume.pdf`
- **Email config**: `.env.local`

### Component Files
- **Hero section**: `components/sections/Hero.tsx`
- **Projects**: `components/sections/Projects.tsx`
- **Skills**: `components/sections/Skills.tsx`
- **Contact**: `components/sections/Contact.tsx`

### Configuration Files
- **Next.js**: `next.config.mjs`
- **Tailwind**: `tailwind.config.ts`
- **TypeScript**: `tsconfig.json`
- **Dependencies**: `package.json`

---

## 🐛 Quick Fixes

### Dev server won't start
```bash
Remove-Item -Path node_modules -Recurse -Force
Remove-Item -Path .next -Recurse -Force
npm install --legacy-peer-deps
npm run dev
```

### Build fails
```bash
npm run build
# Read the error message
# Fix the file mentioned
# Try again
```

### Contact form doesn't work
1. Check `.env.local` exists
2. Verify EmailJS credentials
3. Check browser console for errors

### 3D scene not visible
- Normal! It loads client-side only
- Wait a few seconds after page load
- Check browser supports WebGL

---

## 📚 Documentation Files

1. **README.md** - Full documentation
2. **GETTING_STARTED.md** - Beginner guide (start here!)
3. **CUSTOMIZATION.md** - Detailed customization
4. **DEPLOYMENT.md** - How to deploy
5. **SETUP.md** - Detailed setup
6. **PROJECT_SUMMARY.md** - What's built
7. **QUICK_REFERENCE.md** - This file!

---

## 🚀 Deployment Checklist

- [ ] Updated `lib/data.ts`
- [ ] Added `public/resume.pdf`
- [ ] Created `.env.local` (if using email)
- [ ] Tested locally: `npm run dev`
- [ ] Built successfully: `npm run build`
- [ ] Pushed to GitHub
- [ ] Connected to Vercel
- [ ] Added env vars in Vercel
- [ ] Deployed!
- [ ] Tested live site

---

## 📞 Quick Links

- **EmailJS**: https://www.emailjs.com/
- **Vercel**: https://vercel.com/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Icons**: https://react-icons.github.io/react-icons/

---

## 💡 Quick Tips

1. **Always test locally first**: `npm run dev`
2. **Build before deploying**: `npm run build`
3. **Keep content in data.ts**: Don't hardcode in components
4. **Compress images**: Keep under 500KB
5. **Test on mobile**: Use browser dev tools
6. **Update resume regularly**: Replace PDF in public folder
7. **Keep projects current**: Update data.ts when you have new projects
8. **Backup your .env.local**: Don't commit it to git!

---

## 🎯 Current Status

- ✅ **Dev Server**: Running on http://localhost:3000
- ✅ **Build**: Successful (155 KB optimized)
- ✅ **Type Check**: No errors
- ⏳ **Next Step**: Update your content in `lib/data.ts`

---

## 📊 Project Stats

- **Components**: 21 files
- **Sections**: 8 main sections
- **Features**: 10+ interactive features
- **Lines of Code**: ~3,500+
- **Build Time**: < 30 seconds
- **Bundle Size**: 155 KB (optimized)

---

Need more help? Check the other documentation files!

**Current Dev Server**: Running in background (Terminal 2)
**Access at**: http://localhost:3000

---

🎉 **Happy building!**

