# Wild West Tech Website

A modern, responsive website for Wild West Tech, featuring computer repair and tech services across Southern Oregon.

## Features

- 🎨 Modern UI with dark theme and blue accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🖼️ Optimized image loading
- 🎯 Service-focused layout with grid system
- 💫 Interactive hover effects

## Tech Stack

- Next.js 14.1.0
- React
- Tailwind CSS
- CSS Modules
- Next.js Image Optimization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/aycher2000/wildwest.git
cd wildwest
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Features

### Responsive Design
- Mobile: Single column layout, compact spacing
- Tablet: Two column grid for services
- Desktop: Optimized reading width with elegant spacing

### Theme
- Dark background (#2D2D2D)
- Blue accent colors (#4A9EFF)
- Orange highlights (#FF8E3C)
- Light text for contrast (#E6E6E6)

### Animations
- Title glow effect on page load
- Smooth hover transitions on buttons
- Service card hover effects
- Responsive image scaling

## Project Structure

```
wildwesttech/
├── public/
│   └── images/
│       └── wildwesttech-logo.png
├── src/
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   └── index.js
│   └── styles/
│       └── globals.css
└── next.config.mjs
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2025 Wild West Tech. All rights reserved.

---

## Project Initialization

The project was initialized with the following command:

```bash
npx create-next-app@latest wildwesttech --tailwind --src-dir

	•	No TypeScript
	•	ESLint enabled
	•	TailwindCSS configured during setup
	•	Pages Router selected (App Router intentionally not used)
	•	Turbopack not used
	•	Import aliases (@/*) available if needed

⸻

Directory Structure Overview

Directory	Description
/src/pages	Main application pages (index.js)
/src/styles	Global stylesheet (globals.css)
/public/images	Static assets, including logos
/tailwind.config.js	TailwindCSS customizations
/postcss.config.mjs	PostCSS configuration



⸻

Running the Project Locally

Install dependencies:

npm install

Run the development server:

npm run dev

The application will be available at:

http://localhost:3000



⸻

Tailwind Customization Notes
	•	Custom colors defined in tailwind.config.js (wildwest-gray, wildwest-dust, etc.)
	•	All styling is expected to use Tailwind utility classes.
	•	Global styles (globals.css) import Tailwind layers (@tailwind base; @tailwind components; @tailwind utilities).
	•	No custom fonts installed (system defaults currently used).

⸻

Known Considerations
	•	No dynamic routing implemented yet.
	•	No external APIs or databases connected.
	•	No form handling (planned future enhancement for contact forms).
	•	Basic metadata provided; no advanced SEO or OpenGraph integration at this stage.
	•	No e-commerce functionality.

⸻

Development Tips
	•	If Tailwind classes are not recognized after configuration changes, restart the dev server.
	•	Static assets (images) must be placed under /public and referenced via root-relative paths (e.g., /images/logo.png).
	•	Follow Tailwind and Next.js best practices for component structure and responsiveness.

⸻

Build and Deployment

Build for production:

npm run build

Start production server:

npm start

This project is optimized for static export and serverless deployment (e.g., Vercel).

⸻

License

Internal project for Wild West Tech.
All rights reserved.

⸻



---


