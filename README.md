# Hariharan Chandrasekar - AI Engineer Portfolio

A modern, interactive portfolio website built with Next.js 14, featuring 3D animations, particle effects, and a beautiful dark theme.

## 🚀 Features

- **3D Hero Section**: Interactive Three.js scene with animated geometric shapes
- **Particle Background**: Dynamic particle field with mouse interactions
- **Smooth Animations**: Framer Motion scroll-triggered animations
- **Interactive Projects**: Filterable and searchable project showcase
- **Skills Visualization**: Animated progress bars and circular indicators
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Contact Section**: Direct contact links (email, LinkedIn, GitHub)
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **Modern UI**: Glassmorphism effects and gradient accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Particles**: tsParticles
- **Icons**: React Icons
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Hariharan-afk/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your resume PDF to the `public` folder as `resume.pdf`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information

Edit `lib/data.ts` to update:
- Personal details (name, email, location, etc.)
- Education history
- Work experience
- Projects
- Skills
- Certifications
- Achievements

### Theme Colors

Modify `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: "#00d9ff",    // Neon cyan
  secondary: "#a855f7",  // Purple
  accent: "#f97316",     // Orange
}
```

### Fonts

Change fonts in `app/layout.tsx`:
```typescript
import { Inter, Space_Grotesk } from "next/font/google";
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page combining all sections
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation with theme toggle
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # 3D hero with typing effect
│   │   ├── About.tsx       # Bio and achievements
│   │   ├── Experience.tsx  # Timeline of work history
│   │   ├── Projects.tsx    # Filterable project showcase
│   │   ├── Skills.tsx      # Animated skill visualizations
│   │   ├── Education.tsx   # Education cards
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx     # Contact form with validation
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Card.tsx        # Glassmorphic card
│   │   ├── AnimatedText.tsx
│   │   └── ThemeToggle.tsx # Dark/light mode toggle
│   └── three/
│       ├── Scene3D.tsx     # Three.js animated scene
│       └── ParticleField.tsx # Particle background
├── lib/
│   ├── data.ts             # All content data
│   ├── utils.ts            # Helper functions
│   └── email.ts            # Email service & validation
└── public/
    └── resume.pdf          # Your resume PDF
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy! (No environment variables needed)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (full layouts)

## ⚡ Performance

- Lazy loading for Three.js components (client-side only)
- Next.js Image optimization
- Code splitting for heavy libraries
- Font optimization with next/font
- Target Lighthouse score: 90+

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📞 Contact

- **Email**: hariharanchandrasekar2003@gmail.com
- **LinkedIn**: [linkedin.com/in/hariharan-chandrasekar](https://linkedin.com/in/hariharan-chandrasekar)
- **GitHub**: [github.com/Hariharan-afk](https://github.com/Hariharan-afk)

---

Built with ❤️ by Hariharan Chandrasekar

