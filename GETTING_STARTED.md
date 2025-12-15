# 🚀 Getting Started

Welcome to your modern AI portfolio! This guide will help you get up and running in minutes.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git (for deployment)
- A code editor (VS Code recommended)

## Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 3. Customize Your Data

Open `lib/data.ts` and update:
- Personal information (name, email, bio)
- Education history
- Work experience
- Projects
- Skills
- Certifications

### 4. Add Your Resume

Place your resume PDF as `public/resume.pdf`

### 5. Configure Email (Optional)

For the contact form to work:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service and template
3. Create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Projects, etc.
│   ├── ui/                # Reusable UI components
│   └── three/             # 3D graphics components
├── lib/
│   ├── data.ts            # 👈 YOUR CONTENT HERE
│   ├── utils.ts           # Helper functions
│   └── email.ts           # Email service
├── public/
│   └── resume.pdf         # 👈 YOUR RESUME HERE
└── tailwind.config.ts     # Theme configuration
```

## Features Overview

### ✨ Interactive Hero Section
- 3D animated geometric shapes
- Particle background with mouse interaction
- Typing animation for roles
- Animated statistics

### 📊 Projects Showcase
- **Search**: Find projects by name or technology
- **Filter**: Category-based filtering (Agentic AI, RAG, etc.)
- **Featured**: Highlight your best projects
- **Links**: Direct links to GitHub and live demos

### 🎯 Skills Visualization
- Animated progress bars
- Circular progress indicators for domain expertise
- Categorized by languages, frameworks, tools, and domain

### 💼 Experience Timeline
- Interactive timeline layout
- Expandable cards with detailed descriptions
- Technology tags for each role

### 📬 Contact Form
- Form validation
- EmailJS integration
- Success/error feedback
- Social media links

### 🌓 Theme Toggle
- Dark mode (default)
- Light mode
- Persisted preference (localStorage)

### 📱 Fully Responsive
- Mobile-first design
- Tablet optimized
- Desktop enhanced

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit
```

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00d9ff",    // Your brand color
  secondary: "#a855f7",  // Accent color
  accent: "#f97316",     // CTA color
}
```

### Change Fonts

Edit `app/layout.tsx` to import different Google Fonts

### Modify Animations

Edit `components/sections/*.tsx` to adjust Framer Motion animations

### Customize 3D Scene

Edit `components/three/Scene3D.tsx` to change shapes, colors, and animations

## Content Guidelines

### Projects
- Include 3-4 featured projects
- Add metrics (accuracy, performance)
- Provide GitHub links
- Add live demo links when available

### Skills
- Be honest about skill levels
- Focus on relevant technologies
- Highlight your specialties
- Keep it updated

### Bio
- Keep it concise (2-3 paragraphs)
- Highlight your unique value
- Include your current focus
- Mention career goals

## Deployment Options

### Vercel (Recommended)
- One-click deployment
- Automatic CI/CD
- Free SSL certificate
- CDN included

### Other Options
- Netlify
- GitHub Pages
- AWS Amplify
- Your own server

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clean and reinstall
Remove-Item -Path node_modules -Recurse -Force
Remove-Item -Path .next -Recurse -Force
npm install --legacy-peer-deps
npm run build
```

### Contact form not working
- Verify EmailJS credentials in `.env.local`
- Check browser console for errors
- Test EmailJS template separately

### 3D scene not loading
- Normal during SSR (server-side rendering)
- Loads client-side only
- Check browser supports WebGL

## Performance

Your portfolio is optimized for:
- **Fast loading**: < 3 seconds on 3G
- **SEO**: Optimized metadata
- **Accessibility**: WCAG compliant
- **Mobile**: Responsive design

## Support & Resources

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **Three.js**: [threejs.org/docs](https://threejs.org/docs/)
- **EmailJS**: [emailjs.com/docs](https://www.emailjs.com/docs/)

## Next Steps

1. ✅ Run `npm run dev` and view your portfolio
2. ✅ Update `lib/data.ts` with your information
3. ✅ Add your `resume.pdf` to the public folder
4. ✅ Configure EmailJS for contact form
5. ✅ Customize colors and theme (optional)
6. ✅ Build and test: `npm run build`
7. ✅ Deploy to Vercel
8. ✅ Share your portfolio URL!

## Questions?

Check out:
- [README.md](README.md) - Full documentation
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Detailed customization guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment instructions
- [SETUP.md](SETUP.md) - Detailed setup guide

---

🎉 **You're all set!** Start building your impressive portfolio now!

Built with ❤️ using Next.js, React, TypeScript, Tailwind CSS, Three.js, and Framer Motion.

