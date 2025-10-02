# Driftwell - Tina CMS Website

A modern, content-managed website built with Next.js and Tina CMS.

## Features

- 🎨 **Modern Design**: Clean, responsive design with Tailwind CSS
- 📝 **Content Management**: Edit content with Tina CMS admin interface
- 🚀 **Fast Performance**: Built with Next.js for optimal performance
- 📱 **Mobile Responsive**: Looks great on all devices
- 🔧 **Developer Friendly**: Full TypeScript support and Git-based content

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/braincandydan/Driftwell.git
cd Driftwell
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
# Tina CMS Configuration
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-token-here

# For local development
TINA_PUBLIC_IS_LOCAL=true
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

### Accessing the CMS

- Visit `/admin` to access the Tina CMS admin interface
- Or click "Edit Site" in the navigation

### Content Types

- **Posts**: Blog posts with title, excerpt, date, author, tags, and rich content
- **Pages**: Static pages with hero sections and content
- **Site Settings**: Global site configuration including title, description, and social links

### Creating Content

1. Go to `/admin`
2. Select the content type you want to create
3. Fill in the required fields
4. Save your changes
5. Your content will be automatically committed to Git

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### GitHub Pages

1. Run `npm run build` to generate static files
2. Push the `out` folder to your `gh-pages` branch
3. Enable GitHub Pages in your repository settings

## Project Structure

```
Driftwell/
├── content/           # Content files (Markdown)
│   ├── posts/        # Blog posts
│   ├── pages/        # Static pages
│   └── site/         # Site settings
├── pages/            # Next.js pages
│   ├── api/          # API routes
│   ├── admin/        # Tina CMS admin
│   └── blog/         # Blog pages
├── styles/           # Global styles
├── tina/             # Tina CMS configuration
└── public/           # Static assets
```

## Customization

### Styling

- Modify `styles/globals.css` for global styles
- Update `tailwind.config.js` for Tailwind customization
- Edit component files for specific styling

### Content Schema

- Modify `tina/config.ts` to change content types and fields
- Add new collections or modify existing ones

### Components

- Update page components in the `pages/` directory
- Create reusable components in a `components/` directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

- [Tina CMS Documentation](https://tina.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)