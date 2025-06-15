# 🚛 Fleet / Transport Management System (Frontend)

A comprehensive, user-friendly web interface built with **React**, **Vite**, **TypeScript**, and **shadcn/ui**, connecting to a **Django** backend. Designed for logistics companies to manage client cargo shipping  and many more to add later [vehicles, drivers, routes, maintenance, tracking, expenses, reporting—and more.]

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Installation & Setup](#installation--setup)  
5. [Environment Variables](#environment-variables)  
6. [Project Structure](#project-structure)  
7. [Available Scripts](#available-scripts)  
8. [Core Features](#core-features)  
9. [API Integration](#api-integration)  
10. [Styling & Component Library](#styling--component-library)  
11. [Forms & Validation](#forms--validation)  
12. [Testing Strategy](#testing-strategy)  
13. [✅ To-Do List](#✅-to-do-list)  
14. [Contribution Guidelines](#contribution-guidelines)  
15. [Code Style & Conventions](#code-style--conventions)  
16. [Deployment](#deployment)  
17. [Roadmap & Future Enhancements](#roadmap--future-enhancements)  
18. [License](#license)  
19. [Contact & Support](#contact--support)  

---

## 1. Project Overview

Frontend app for a full-featured Fleet/Transport Management System:

- Manage **vehicles**, **drivers**, **routes**, **trips**, **maintenance**, **fuel**, **expenses**, **live tracking**, **analytics**, **reports**, **alerts**, and **user/role settings**.
- Built with modular, reusable components and optimized for speed and scalability.

---

## 2. Tech Stack

- **Framework & Bundler**: React 18+, Vite, TypeScript  
- **UI Library**: shadcn/ui + Tailwind CSS  
- **State & Data**: React Query, Axios, (Zustand or Context for local state)  
- **Routing**: React Router v6+  
- **Maps & Geolocation**: Leaflet or Google Maps API  
- **Charts**: Chart.js or Recharts  
- **Forms**: React Hook Form + Zod  
- **Auth**: JWT against Django REST endpoints + token management  
- **Linting / Formatting**: ESLint, Prettier, Husky  
- **Testing**: Jest + React Testing Library, potentially Cypress/Playwright  
- **CI/CD**: GitHub Actions or GitLab CI

---

## 3. Prerequisites

- Node.js LTS (>=16) and npm/yarn  
- Django backend API accessible (local or remote)  
- Required env vars (see below)  
- Git installed

---

## 4. Installation & Setup

```bash
git clone https://github.com/your-org/fleet-frontend.git
cd fleet-frontend
npm install       # or yarn install
cp .env.example .env
# Populate .env with API URLs, map keys, etc.
npm run dev       # Start dev server
```

---

## 5. Environment Variables

```bash
VITE_API_BASE_URL=...         # e.g. http://localhost:8000/api/
VITE_GOOGLE_MAPS_API_KEY=...  # Maps integration
VITE_MAPBOX_TOKEN=...         # If using Mapbox
VITE_SOCKET_URL=...           # WebSocket for live tracking (optional)
VITE_SENTRY_DSN=...           # Error monitoring (optional)
```

---

## 6. Project Structure

```
src/
├── api/                 # Axios client & endpoint modules
├── components/          # Shared UI components (modals, buttons, etc.)
├── features/            # Domain modules (auth, vehicles, drivers, etc.)
├── hooks/               # Custom hooks (useAuth, useSocket, etc.)
├── contexts/            # React Context providers
├── routes/              # Route definitions
├── styles/              # Tailwind & UI theme configs
├── utils/               # Helpers (date, validation, formatters)
├── assets/              # Static files
├── tests/               # Unit & E2E tests
├── App.tsx              # App entry / layout
└── main.tsx             # Vite start
vite.config.ts
tailwind.config.ts
.eslintrc.cjs
.prettierrc
tsconfig.json
.env.example
```

---

## 7. Available Scripts

| Script              | Description                                 |
|---------------------|---------------------------------------------|
| `npm run dev`       | Start Vite dev server                       |
| `npm run build`     | Build production bundle                     |
| `npm run preview`   | Preview production build locally            |
| `npm run lint`      | Run ESLint and auto-fix                     |
| `npm run format`    | Run Prettier                                |
| `npm run test`      | Run Jest unit/integration tests             |
| `npm run test:watch`| Run Jest in watch mode                      |
| `npm run cypress`   | Run Cypress E2E tests (if configured)       |
| `npm run type-check`| Run TypeScript type-check                   |

---

## 8. Core Features

- ✅ Authentication & Role Management  
- ✅ Dashboard with KPIs and charts  
- ✅ Vehicle & driver CRUD  
- ✅ Route planning & assignment  
- ✅ Trip management & delivery logging  
- ✅ Live tracking (WebSocket/polling)  
- ✅ Maintenance scheduling & reminders  
- ✅ Fuel & expense tracking  
- ✅ Reporting & analytics with CSV/PDF export  
- ✅ Notifications & real-time alerts  
- ✅ Company/user settings & permissions  
- ✅ Responsive, accessible UI (mobile support)

---

## 9. API Integration

- Centralized Axios client with interceptors  
- React Query for data fetching & caching  
- Token authentication and protected routes  
- WebSocket fallback for live tracking  
- File uploads for documents and proof of delivery

---

## 10. Styling & Component Library

- Tailwind CSS for utility-first styling  
- shadcn/ui components: buttons, modals, forms, tables  
- Theme support: light/dark mode via Context and Tailwind's `dark:` classes

---

## 11. Forms & Validation

- React Hook Form for fields & management  
- Zod for schema-based validation  
- Clear inline error display via shadcn/ui form elements

---

## 12. Testing Strategy

- **Unit/Integration tests** with Jest + RTL + MSW mocks  
- **End-to-end** tests with Cypress or Playwright  
- **CI** runs type-check, lint, unit, and (if available) E2E tests

---

## 13. ✅ To-Do List

### Initial Setup
- [x] Vite + React + TypeScript project  
- [x] Tailwind CSS + shadcn/ui setup  
- [x] ESLint, Prettier, Husky pre-commit config  

### Authentication
- [ ] `AuthContext`, login/logout pages  
- [ ] JWT token storage & axios interceptor  
- [ ] Route protection by user role  

### Vehicle Management
- [ ] API endpoints & React Query hooks  
- [ ] `VehicleList`, `VehicleForm`, document uploads  
- [ ] Detail view with maintenance summary  

### Driver Management
- [ ] API endpoints & hooks  
- [ ] CRUD, certification tracking, assignments  

### Route Planning & Mapping
- [ ] Map integration, route drawing  
- [ ] Route assignment, historical route view  

### Live Tracking
- [ ] WebSocket hook, real-time markers, polling fallback  

### Maintenance
- [ ] Calendar, scheduling form, alerts for due tasks  

### Fuel & Expenses
- [ ] Log forms, summary charts, CSV export  

### Trips & Deliveries
- [ ] Trip creation, status updates, proof uploads  

### Reporting & Analytics
- [ ] Dashboard charts, custom builder, exports  

### Notifications
- [ ] Notification center, toast system  

### Settings & Admin
- [ ] User/role management, toggle theme, preferences  

### Testing
- [ ] Unit/integration tests, MSW mocks  
- [ ] E2E for major flows  
- [ ] CI integration  

### Deployment
- [ ] Production build optimization  
- [ ] Static hosting or Django integration  
- [ ] CI/CD pipeline for automated deploys  

### Documentation
- [ ] Screenshots, examples in README  
- [ ] Storybook for components  
- [ ] API reference link  
- [ ] Developer setup guide  

### Future Enhancements
- [ ] Mobile UI & offline support  
- [ ] OCR for receipts/doc scan  
- [ ] Multi-tenant architecture  
- [ ] Telemetry/AI integration  
- [ ] Real-time dispatcher-driver chat  

---

## 14. Contribution Guidelines

- Branch from `main` using `feature/…` or `bugfix/…`  
- Commits follow Conventional Commits (`feat:`, `fix:`, etc.)  
- PRs must pass CI checks and include tests  
- Use GitHub Issues for tracking bugs/features  

---

## 15. Code Style & Conventions

- Strict TypeScript, minimal use of `any`  
- Functional components + hooks + React Query  
- Tailwind + shadcn/ui for consistent styling  
- Semantic HTML, ARIA, keyboard accessibility  
- Centralized error handling & user-friendly messaging  

---

## 16. Deployment

1. Run `npm run build` → produces `/dist`  
2. Deploy to Vercel/Netlify or via Django’s `collectstatic`  
3. CI pipeline: build → test → deploy  
4. Configure environment variables and (optional) error reporting  

---

## 17. Roadmap & Future Enhancements

- **Short-term**: Complete all core modules and testing  
- **Mid-term**: Refine live tracking, analytics, notifications  
- **Long-term**: Mobile support, offline mode, OCR, multi-tenant, telemetry, chat  

---

## 18. License

This project is MIT licensed – see [LICENSE](LICENSE).

---

## 19. Contact & Support

- **Backend API Docs**: [Link to Django REST API documentation]  
- **Issue Tracking**: Create GitHub Issues for bugs/enhancements  
- **Communication**: Slack (channel: `#fleet-frontend`)  
- **Maintainers**: @team-frontend  

---
