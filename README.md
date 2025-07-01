# Grascope Industries Website

A beautiful, modern multi-page website for Grascope Industries built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-Page Architecture**: Separate pages for Home, About, Services, Story, and Contact
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Built with Vite for fast development and optimized builds
- **Routing**: React Router for seamless navigation
- **Animations**: Smooth page transitions and hover effects
- **Icons**: Iconsax React for beautiful, consistent icons
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Iconsax React** - Beautiful, customizable icons

## 📦 Installation

1. Navigate to the project directory:
```bash
cd grascope-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

### Colors
- **Primary**: #060417 (Dark navy)
- **Green**: #159b48 (Brand green)
- **Primary Light**: #caf8ca (Light green)
- **Light Blue**: #F6F7F8 (Background)
- **Gradient**: Linear gradient from #249D49 to #00742F to #13893C

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

## 📱 Pages

### 1. **Home** (`/`)
- Hero section with call-to-action
- Quick services preview
- Statistics and achievements
- Interactive floating elements

### 2. **About** (`/about`)
- Company identity and mission
- Our story and approach
- Core values and principles
- Team values and culture

### 3. **Services** (`/services`)
- Detailed service offerings
- Process methodology
- Industries served
- Service features and benefits

### 4. **Story** (`/story`)
- Company timeline and milestones
- Growth journey from 2020-2024
- Impact statistics
- Future vision

### 5. **Contact** (`/contact`)
- Contact form with validation
- Contact information cards
- FAQ section
- Location and business hours

## 🔧 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Site footer
├── pages/
│   ├── Home.tsx           # Homepage
│   ├── About.tsx          # About page
│   ├── Services.tsx       # Services page
│   ├── Story.tsx          # Company story
│   └── Contact.tsx        # Contact page
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles
```

## 🎯 Key Features

### Navigation
- Fixed header with scroll effects
- Active page highlighting
- Mobile-responsive menu
- Smooth page transitions

### Animations
- Fade-in animations on scroll
- Hover effects on cards
- Floating elements
- Page transition effects

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Colors
Update the color palette in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - CSS custom properties

### Adding Animations
The project uses custom CSS animations defined in `src/index.css`. You can add new animations or modify existing ones.

## 📄 Content Structure

### Company Information
- **Founded**: 2020 in Port Harcourt, Nigeria
- **Global Reach**: UK, USA, and beyond
- **Projects**: 100+ completed successfully
- **Industries**: Technology, Healthcare, Finance, Manufacturing, and more

### Services
1. **Innovative Solutions** - Advanced tools and strategies
2. **Industry Expertise** - Specialized knowledge across sectors
3. **Tailored Services** - Customized business solutions
4. **Operational Efficiency** - Process optimization
5. **Sustainable Growth** - Long-term success strategies

## 🤝 Contributing

This is a private project for Grascope Industries. For any changes or improvements, please contact the development team.

---

Built with ❤️ for Grascope Industries