# Ali Khaled - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Optimized for all device sizes
- **Dark Theme**: Beautiful dark theme with smooth transitions
- **Performance**: Fast loading with Next.js optimization
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

2. **Deploy**
   - Vercel will automatically deploy on every push to your main branch
   - Custom domains can be added in the Vercel dashboard

### Netlify

1. **Connect your repository to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

2. **Environment Variables** (if needed)
   - Add any environment variables in the Netlify dashboard

### Railway

1. **Connect your repository to Railway**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will automatically detect Next.js

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. **Set environment variables** (if needed)
   ```bash
   export NODE_ENV=production
   ```

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── public/               # Static assets
│   └── images/           # Image assets
├── lib/                  # Utility functions
└── styles/               # Additional styles
```

## 🎨 Customization

### Colors
The project uses a custom color scheme. You can modify colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Content
- Update personal information in the page components
- Replace images in the `public/images/` directory
- Modify the navigation links in `components/navigation.tsx`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Theme configuration is in `components/theme-provider.tsx`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ali Khaled**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Made with ❤️ using Next.js and Tailwind CSS
