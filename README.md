# Rafail I. Simitos — Insurance Advisor Portfolio

A single-page portfolio website for Rafail I. Simitos, Insurance Advisor at Interamerican. Built with React and Tailwind CSS, featuring dedicated pages for each insurance product category.

---

## 🚀 Tech Stack

| Technology                                  | Purpose                     |
| ------------------------------------------- | --------------------------- |
| [React 19](https://react.dev/)              | UI framework                |
| [Vite 8](https://vitejs.dev/)               | Build tool & dev server     |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling                     |
| [React Router v6](https://reactrouter.com/) | Client-side routing         |
| [EmailJS](https://www.emailjs.com/)         | Contact form email delivery |

---

## 📁 Project Structure

```
src/
├── assets/              # SVG icons and images
│   └── services/        # Service-specific icons
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/               # Insurance product pages
│   ├── LifeInsurance.jsx
│   ├── HomeInsurance.jsx
│   ├── HealthInsurance.jsx
│   └── VehicleInsurance.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📄 Pages & Routes

| Route      | Page                                                  |
| ---------- | ----------------------------------------------------- |
| `/`        | Home (Navbar, Hero, About, Services, Contact, Footer) |
| `/zoi`     | Life Insurance                                        |
| `/katikia` | Home Insurance                                        |
| `/ygeia`   | Health Insurance                                      |
| `/oxima`   | Vehicle Insurance                                     |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tzarhs/rafail-simitos-portfolio.git

# Navigate into the project
cd rafail-simitos-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get your credentials from [emailjs.com](https://www.emailjs.com). Never commit your `.env` file.

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## ✉️ Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the browser without a backend. The EmailJS template expects the following variables:

- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email (set as Reply-To)
- `{{subject}}` — message subject
- `{{message}}` — message body

---

## 🎨 Design

- **Typography** — Playfair Display (serif headings), Lato (body)
- **Color palette** — Deep red (`#c8141e`), neutral dark backgrounds, white/light sections
- **Section alternation** — Dark hero → Light about → Dark services → Light contact
- **Animations** — Scroll-triggered fade-ins via Intersection Observer API

---

## 📦 Dependencies

```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^6.x",
  "@emailjs/browser": "^4.x"
},
"devDependencies": {
  "vite": "^8.x",
  "@vitejs/plugin-react": "^6.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x"
}
```

---

## 📝 License

This project is proprietary. All rights reserved © 2025 Rafail I. Simitos.

---

_Designed & Developed by [Giannis Tzaris](https://github.com/tzarhs)_
