# My Portfolio – Next.js

This is a personal portfolio website built with [Next.js](https://nextjs.org), showcasing my projects, skills, and contact information.

---

## 🚀 Live Demo

View the deployed site here:  
[https://my-porfolio-five-lac.vercel.app/](https://my-porfolio-five-lac.vercel.app/)

---

## 🛠️ Features

- **Modern UI:** Built with Next.js App Router and Tailwind CSS for a sleek, responsive design.
- **Animated Effects:** Uses Framer Motion and custom components for interactive and animated UI.
- **Project Showcase:** Displays featured projects with images, descriptions, and links.
- **Skills Section:** Highlights technologies and tools I use.
- **Contact Form:** Lets visitors get in touch.
- **Custom Components:** Includes reusable UI elements like Skeleton loaders, circular navigation, and more.

---

## 🏁 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd my-porfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

- `app/` – Main app directory (pages, layouts, sections)
- `components/` – Reusable UI and section components
- `public/` – Static assets (images, favicon, etc.)
- `styles/` – Global and component styles (if any)
- `lib/` – Utility functions

---

## 🖼️ Adding Projects

Project images should be placed in the `public/project-images/` folder.  
Reference them in your project data like this:

```js
image: "/project-images/my-project.png"
```

---

## 🧩 Using Skeleton Loader

To show a loading placeholder, use:

```tsx
import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-6 w-32" />
```

---

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com/).  
To deploy your own version, push to GitHub and connect your repo to Vercel.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🙋‍♂️ Author

**Mayank Gupta**  
[GitHub](https://github.com/Manny2706) | [LinkedIn](https://linkedin.com/in/mayank-gupta-869a94327)

---