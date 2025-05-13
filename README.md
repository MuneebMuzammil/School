# Galaxy School Website

Welcome to the **Galaxy School** website project! This is a modern, responsive website built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It showcases the school's information, facilities, achievements, and more.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile).
- **Dynamic Pages**: Includes pages for About, Facilities, Admission, Achievements, Staff, Gallery, and Contact.
- **Animations**: Smooth animations using **Framer Motion**.
- **Theme Support**: Light and dark mode support using **next-themes**.
- **Interactive Components**: Buttons, forms, and navigation menus for a seamless user experience.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A typed superset of JavaScript for better development experience.
- **Framer Motion**: A library for animations in React.
- **React Icons**: Icons from **Lucide React** for UI elements.
- **Next Themes**: For theme management (light/dark mode).

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher).
- **PNPM**: Install PNPM globally (optional but recommended).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/galaxy-school.git
   cd galaxy-school
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   pnpm run dev
   ```

4. **Open the project**:

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the project for production, run:

```bash
pnpm run build
```

Then, start the production server:

```bash
pnpm run start
```

## Project Structure

Here's an overview of the project structure:

```
galaxy-school/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── admission/        # Admission page
│   ├── achievements/     # Achievements page
│   ├── contact/          # Contact page
│   ├── facilities/       # Facilities page
│   ├── gallery/          # Gallery page
│   ├── staff/            # Staff page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── about.tsx         # About component
│   ├── admission.tsx     # Admission component
│   ├── achievements.tsx  # Achievements component
│   ├── contact.tsx       # Contact component
│   ├── facilities.tsx    # Facilities component
│   ├── footer.tsx        # Footer component
│   ├── gallery.tsx       # Gallery component
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── staff.tsx         # Staff component
│   ├── theme-provider.tsx# Theme provider
│   └── theme-toggle.tsx  # Theme toggle
├── hooks/                # Custom hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
├── styles/               # Additional styles
│   └── globals.css       # Global styles
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Next.js** for the framework.
- **Tailwind CSS** for the styling.
- **Framer Motion** for animations.
- **Lucide React** for icons.

Thank you for visiting the Galaxy School website project! 🚀

### Step 5: Build for Production (Optional)

To build the project for production, run:

```bash
pnpm run build
```

Then, start the production server:

```bash
pnpm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the production build.

## Project Structure

Here's an overview of the project structure:
