# Customization Guide

## Quick Customization

All your personal data is centralized in one file for easy editing!

### Step 1: Update Personal Information

Edit `lib/data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  email: "your.email@example.com",
  phone: {
    us: "+1 (XXX) XXX-XXXX",
    india: "+91 XXXXXXXXXX" // Optional
  },
  links: {
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
  },
  bio: "Your bio here...",
  stats: [
    { label: "Projects", value: "10+" },
    { label: "Accuracy", value: "95%" },
    // Add more stats
  ]
};
```

### Step 2: Add Your Education

```typescript
export const education = [
  {
    institution: "Your University",
    location: "City, Country",
    degree: "Your Degree",
    duration: "Year - Year",
    gpa: "X.XX / 4.0",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  },
  // Add more education entries
];
```

### Step 3: Add Work Experience

```typescript
export const experience = [
  {
    company: "Company Name",
    role: "Your Role",
    location: "City, State",
    duration: "Month Year – Month Year",
    type: "Internship", // or "Full-time", "Contract"
    description: "Brief description",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  },
];
```

### Step 4: Showcase Your Projects

```typescript
export const projects = [
  {
    title: "Project Name",
    category: "Agentic AI", // or "RAG", "Computer Vision", "MLOps"
    duration: "Month Year – Month Year",
    description: "Short description",
    longDescription: "Detailed description",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com", // or null if no demo
    featured: true // Set to true for featured projects
  },
];
```

### Step 5: Update Skills

```typescript
export const skills = {
  languages: [
    { name: "Python", level: 95, icon: "SiPython" },
    // Add more languages
  ],
  frameworks: [
    { name: "PyTorch", level: 90, icon: "SiPytorch" },
    // Add more frameworks
  ],
  tools: [
    { name: "Docker", level: 85, icon: "SiDocker" },
    // Add more tools
  ],
  domain: [
    { name: "Agentic AI", level: 95, highlight: true },
    // Add more domain skills
  ]
};
```

## Advanced Customization

### Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#00d9ff",    // Neon cyan - Change to your preference
  secondary: "#a855f7",  // Purple
  accent: "#f97316",     // Orange
  background: {
    DEFAULT: "#0a0a0f",  // Dark background
    surface: "#1a1a2e",  // Card background
  },
}
```

### Typography

Change fonts in `app/layout.tsx`:

```typescript
import { YourFont, AnotherFont } from "next/font/google";

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["var(--font-your-font)", "sans-serif"],
}
```

### Animations

Modify animation speeds in `tailwind.config.ts`:

```typescript
animation: {
  "fade-in": "fadeIn 0.5s ease-in-out", // Change duration
}
```

### 3D Scene

Customize the 3D hero in `components/three/Scene3D.tsx`:

- Change shapes (sphere, cube, torus)
- Modify colors
- Adjust rotation speeds
- Add new 3D objects

### Particles

Customize particles in `components/three/ParticleField.tsx`:

- Change particle count
- Modify colors
- Adjust interaction modes
- Change link distances

## Content Tips

### Writing Project Descriptions

1. **Start with the problem**: What challenge did you solve?
2. **Highlight technical approach**: What technologies did you use?
3. **Show results**: Include metrics (accuracy, performance, etc.)
4. **Keep it concise**: 2-3 sentences for short description

### Skills Level Guidelines

- **90-100%**: Expert level, production experience
- **80-89%**: Advanced, can work independently
- **70-79%**: Intermediate, comfortable with common tasks
- **60-69%**: Beginner, learning phase

### Choosing Featured Projects

Mark 2-4 projects as `featured: true` for:
- Most technically impressive
- Best results/impact
- Most relevant to your goals
- Production deployments

## Adding New Sections

### Create a New Section Component

1. Create file: `components/sections/YourSection.tsx`
2. Follow existing section structure
3. Add to `app/page.tsx`:

```typescript
import YourSection from "@/components/sections/YourSection";

// Add to return statement
<YourSection />
```

4. Add to navigation in `components/layout/Navbar.tsx`

## Icon Reference

Available icon libraries:
- **Fi** (Feather Icons): Simple, clean icons
- **Si** (Simple Icons): Brand logos
- Check available icons: [react-icons.github.io](https://react-icons.github.io/react-icons/)

## SEO Optimization

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your optimized description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
};
```

## Resume PDF

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place in `public/resume.pdf`
4. Keep file size < 2MB for fast downloads

## Testing Your Changes

```bash
# Development server
npm run dev

# Production build
npm run build
npm start

# Type checking
npx tsc --noEmit
```

## Common Mistakes to Avoid

❌ **Don't** hardcode data in components
✅ **Do** use `lib/data.ts` for all content

❌ **Don't** use large images without optimization
✅ **Do** compress images and use Next.js Image component

❌ **Don't** forget to test mobile responsiveness
✅ **Do** check on multiple screen sizes

❌ **Don't** skip EmailJS setup
✅ **Do** configure email service before deploying

## Need Help?

- Review existing components for examples
- Check the README.md for setup instructions
- Look at data.ts for data structure examples
- Test changes locally before deploying

---

Happy customizing! 🎨

