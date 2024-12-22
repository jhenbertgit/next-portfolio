# Portfolio Website

This is my portfolio website.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm
- Git

### Environment Setup

1. Clone the repository

```bash
git clone https://github.com/jhenbertgit/next-portfolio.git
cd next-portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration values.

4. Start development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🛠 Development Guide

### Project Structure

```
├── public/              # Static files
├── src/
│   ├── app/             # Next.js 13+ App Router
│   │   ├── api/         # API routes
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Layout component
│   │   ├── page.tsx     # Page component
│   ├── components/      # Shared components
│   ├── lib/             # Utility functions
```

### Key Technologies

- Next.js 13+
- TypeScript
- Tailwind CSS

### Coding Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Follow component naming convention: `PascalCase.tsx`

### Common Commands

```bash
# Development
npm run dev         # Start development server

# Testing
npm run test       # Run tests
npm run test:watch # Run tests in watch mode

# Linting
npm run lint       # Run ESLint
npm run format     # Run Prettier

# Building
npm run build      # Create production build
npm start         # Start production server
```

### Git Workflow

1. Create feature branch from `main`

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit using conventional commits

```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve bug issue"
```

3. Push changes and create Pull Request

```bash
git push origin feature/your-feature-name
```

## 🔧 Configuration

### Environment Variables

Required environment variables:

```
RESEND_API_KEY=
NEXT_PUBLIC_FROM_EMAIL=
NEXT_PUBLIC_TO_EMAIL=
```

### API Integration

- API documentation available at [resend](https://resend.com/docs/introduction)

## 🐛 Troubleshooting

Common issues and solutions:

1. **Port 3000 already in use**

```bash
kill -9 $(lsof -t -i:3000)
# or
npm run dev -- -p 3001
```

2. **Node modules issues**

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE.md) file for details.
