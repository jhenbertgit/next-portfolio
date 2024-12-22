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
git clone [repository-url]
cd [project-directory]
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
├── app/                # Next.js 13+ App Router
│   ├── api/           # API routes
│   ├── components/    # Shared components
│   ├── lib/          # Utility functions
│   └── [routes]/     # Application routes
├── public/           # Static files
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

### Key Technologies

- Next.js 13+
- TypeScript
- Tailwind CSS
- [Other major dependencies]

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

## 🤝 Contributing

Please read [CONTRIBUTING.md](link-to-contributing) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the [LICENSE TYPE] - see the [LICENSE.md](link-to-license) file for details.
