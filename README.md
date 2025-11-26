# IGACMUN Session III Website

A modern, responsive website for the International Global Affairs Council Model United Nations Session III conference. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Elegant UI with forest green and accent gold theme
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with image optimization and lazy loading
- **Config-Driven**: Easy to customize through configuration files
- **Countdown System**: Configurable countdowns for reveals
- **Form Integration**: Google Forms integration for registrations
- **SEO Optimized**: Proper meta tags and social media integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About IGAC page
│   ├── session-3/         # Session III related pages
│   │   ├── committees/    # Committees page
│   │   ├── schedule/      # Schedule page
│   │   ├── venue/         # Venue page
│   │   └── register/      # Registration page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── ui/               # UI components
├── lib/                  # Utilities and configuration
│   ├── config.ts         # Main configuration file
│   └── utils.ts          # Utility functions
└── styles/               # Global styles
```

## ⚙️ Configuration Guide

### 🔧 Main Configuration (`src/lib/config.ts`)

This is the central configuration file where you can customize most aspects of the website:

#### Event Information
```typescript
event: {
  title: "IGACMUN Session III",
  subtitle: "", // Main subtitle (currently empty)
  tagline: "Where Diplomacy Meets Destiny",
  dates: "TBA",
  expectedDelegates: "1700+",
  description: "Conference description..."
}
```

#### Countdown Reveals
Control when different sections are revealed:
```typescript
reveals: {
  committees: { 
    mode: "countdown", // or "revealed"
    revealAt: "2025-12-25T10:00:00Z", // ISO date string
    enableCountdown: true // Show countdown component
  },
  schedule: { 
    mode: "countdown",
    revealAt: "2025-12-15T10:00:00Z",
    enableCountdown: true
  },
  // ... other sections
}
```

#### Forms Configuration
Update these with your actual Google Form URLs:
```typescript
forms: {
  earlyBird: { 
    enabled: true, 
    link: "https://forms.gle/your-early-bird-form-id",
    title: "Early Bird Registration",
    description: "Secure your spot with discounted rates",
    deadline: "2025-10-31T23:59:59Z",
    price: "$25"
  },
  // ... other forms
}
```

#### Social Media Links
```typescript
social: {
  instagram: "https://instagram.com/igacmun",
  facebook: "https://facebook.com/igacmun", 
  twitter: "https://twitter.com/igacmun",
  linkedin: "https://linkedin.com/company/igacmun",
  email: "intlglobalaffairscouncil@gmail.com
",
  phone: "+880-1XXX-XXXXXX"
}
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd igacmun-session-3

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Vercel Deployment (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a git repository (GitHub, GitLab, BitBucket).
2.  Import your project into Vercel.
3.  **Important**: Configure the Environment Variables in the Vercel Project Settings.

### Environment Variables

You must set the following environment variables in your Vercel project settings for the application to work correctly:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase Service Role Key (Required for admin functions)

## 🌐 Netlify Deployment

### Quick Deploy
1. **Connect Repository**: Connect your GitHub repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy**: Netlify will automatically deploy on every push

### Configuration
The project includes `netlify.toml` with optimized settings for:
- Build configuration
- Security headers
- Asset caching
- SPA routing

## 📝 Content Management

### Quick Updates

#### 1. Update Forms
Edit `src/lib/config.ts` and replace placeholder URLs:
```typescript
forms: {
  earlyBird: { 
    link: "https://forms.gle/YOUR_ACTUAL_FORM_ID",
    // ... other properties
  }
}
```

#### 2. Change Countdown Dates
```typescript
reveals: {
  committees: { 
    revealAt: "2025-12-25T10:00:00Z", // Change this date
    enableCountdown: true // Set to false to disable
  }
}
```

#### 3. Update Social Media
```typescript
social: {
  instagram: "https://instagram.com/YOUR_HANDLE",
  facebook: "https://facebook.com/YOUR_PAGE",
  // ... other links
}
```

#### 4. Change Event Details
```typescript
event: {
  title: "IGACMUN Session III",
  tagline: "Your Custom Tagline",
  expectedDelegates: "2000+", // Update numbers
  // ... other details
}
```

## 🎨 Customization

### Colors & Branding
- Edit `src/app/globals.css` for color scheme
- Replace logo files in `/public/` directory
- Update favicon: `/public/favicon.ico`

### Images
- Leadership photos: `/public/Joint secretaries/`
- Event images: `/public/events/`
- Venue images: `/public/` (aiub.jpg, etc.)

## 🔍 SEO & Performance

- Automatic image optimization
- Mobile-first responsive design
- Optimized loading with lazy loading
- Security headers configured
- Social media meta tags

## 🆘 Quick Fixes

### Common Issues
1. **Images not loading**: Check file paths in `/public/`
2. **Forms not working**: Update Google Form URLs in config
3. **Countdown not showing**: Check date format and enableCountdown setting
4. **Build errors**: Run `npm run build` to check for issues

### Getting Help
- Review this README
- Check the configuration file comments
- Contact developer: Osayeed Jaber

---

**Crafted with passion by Osayeed Jaber**
