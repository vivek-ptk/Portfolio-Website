# Vivek Pathak - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and LeetCode integration.

## 🚀 Features

- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Clean, professional design with Tailwind CSS
- **LeetCode Integration**: Live coding statistics
- **Interactive Navigation**: Smooth scrolling between sections
- **Project Showcase**: Detailed project cards with live links
- **Contact Integration**: Multiple ways to get in touch

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Font**: Geist Sans & Geist Mono

## 📂 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # React components
│   ├── About.tsx      # About section with education & skills
│   ├── Contact.tsx    # Contact information
│   ├── Experience.tsx # Professional experience
│   ├── Hero.tsx       # Hero section
│   ├── LeetCode.tsx   # LeetCode statistics
│   ├── Navigation.tsx # Navigation bar
│   └── Projects.tsx   # Project showcase
├── data/              # Static data
│   └── resume.ts      # Resume information
└── lib/               # Utility functions
    └── leetcode.ts    # LeetCode API integration
```

## 🎨 Sections

1. **Hero**: Introduction with profile picture and contact links
2. **About**: Education background and technical skills
3. **Experience**: Professional internship details
4. **Projects**: Featured projects with GitHub and live links
5. **LeetCode**: Coding statistics and achievements
6. **Contact**: Multiple contact methods and availability

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/vivek-ptk/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📱 Customization

To customize this portfolio for yourself:

1. **Update personal information** in `src/data/resume.ts`
2. **Replace profile picture** in `src/components/Hero.tsx`
3. **Modify colors** in Tailwind classes throughout components
4. **Add/remove sections** by editing `src/app/page.tsx`
5. **Update LeetCode username** in `src/data/resume.ts`

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Or deploy directly:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vivek-ptk/portfolio-website)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vivek Pathak**
- Email: vivekpathak2083@gmail.com
- LinkedIn: [linkedin.com/in/vivek-pathak-in/](https://linkedin.com/in/vivek-pathak-in/)
- GitHub: [github.com/vivek-ptk](https://github.com/vivek-ptk)
- LeetCode: [leetcode.com/u/vivekpathak04/](https://leetcode.com/u/vivekpathak04/)

---
 
Built with ❤️ using Next.js and TypeScript

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
