# Noyra Monorepo

This is a monorepo containing a web application and Stellar smart contracts, managed with Turborepo.

## Structure

- `apps/web`: Next.js web application
- `apps/contracts`: Stellar smart contracts
- `packages/shared`: Shared utilities and types

## Prerequisites

- Node.js (v18 or later)
- Yarn (v1.22.19)
- Stellar SDK

## Getting Started

1. Install dependencies:
```bash
yarn install
```

2. Start development servers:
```bash
# Start all applications
yarn dev

# Start specific application
yarn workspace web dev
yarn workspace contracts dev
```

3. Build all packages:
```bash
yarn build
```

## Available Scripts

- `yarn dev`: Start all applications in development mode
- `yarn build`: Build all packages and applications
- `yarn lint`: Run linting for all packages
- `yarn format`: Format all files with Prettier

## Development

- Web application is available at `http://localhost:3000`
- Smart contracts are written in TypeScript and use the Stellar SDK
- Shared utilities and types are available in the `packages/shared` directory
