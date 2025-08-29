# Gemini Context: KZVT-Try Project

## Project Overview

This project is a modern, single-page landing page for "Kevin Trading," an educational service focused on Forex and Binary Options trading. The page is designed to attract and inform potential clients, featuring sections for services, results, testimonials, FAQs, and lead capture forms.

The application is built using a modern web stack and follows the latest best practices for React development.

*   **Core Framework**: [Next.js](https://nextjs.org/) (using App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI Library**: [React](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library**: [Shadcn/UI](https://ui.shadcn.com/). Components are managed via `components.json` and are located in the `src/components/ui` directory.
*   **Package Manager**: [pnpm](https://pnpm.io/)

The project is configured for automated deployment to GitHub Pages whenever changes are pushed to the `main` branch, using a predefined GitHub Actions workflow.

## Building and Running

All commands should be run from the root of the project.

### Development

To run the local development server with hot-reloading:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production-ready static build of the application:

```bash
pnpm build
```

This command generates a static export in the `out/` directory, which is suitable for static hosting providers.

### Linting

To run the linter and check for code quality issues:

```bash
pnpm lint
```

## Development Conventions

*   **Code Style**: The project adheres to a strict TypeScript style, favoring small, pure functions with early returns. Complex logic should be kept out of JSX.
*   **Formatting**: Code formatting is handled by Prettier and ESLint, following a style similar to Airbnb's guidelines, with automatic import ordering.
*   **Components**: The project uses Shadcn/UI for its base components. When adding new UI elements, prefer using the Shadcn/UI CLI: `pnpm dlx shadcn-ui@latest add [component-name]`.
*   **Deployment**: All pushes to the `main` branch will automatically trigger a new deployment to GitHub Pages. The live test deployment can be viewed at [https://ervinj1998.github.io/KZVT-Try/](https://ervinj1998.github.io/KZVT-Try/).
