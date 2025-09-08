# Repository Guidelines

## Project Structure & Modules
- App root: `apps/web` (Vite + React + TS).
- Source: `src/`
  - Pages: `src/pages/{courses,lessons,dashboard}/...Page.tsx`
  - Components: `src/components/{courses,lessons,dashboard}/*.tsx`
  - Services (API/Supabase): `src/services/*.ts`
  - Styles: `src/index.css`, Tailwind utility classes in JSX
- Public assets: `public/`
- Config: `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`, `tsconfig*.json`
- Build output: `dist/`

## Build, Test, and Development
- `npm run dev` — Start Vite dev server with HMR.
- `npm run build` — Type-check (`tsc -b`) and build to `dist/`.
- `npm run preview` — Serve the production build locally.
- `npm run lint` — Run ESLint across the project.

## Coding Style & Naming Conventions
- Language: TypeScript + React function components.
- Files: Components in `PascalCase` (e.g., `LessonCard.tsx`), hooks/utilities in `camelCase`.
- Pages end with `Page.tsx` (e.g., `CourseDetailsPage.tsx`).
- Exports: prefer named exports from component files.
- Styling: Tailwind classes in JSX; keep component-scoped styles near the component; avoid deep global CSS.
- Linting: follow rules from `eslint.config.js` (ESLint, TS, React Hooks, React Refresh). Fix warnings before PRs.

## Testing Guidelines
- No test runner is configured yet. If adding tests, use Vitest + React Testing Library.
- Place tests as `*.test.ts(x)` next to sources or under `__tests__/`.
- Mock network/Supabase in unit tests; aim to cover components, pages, and service logic.

## Commit & Pull Request Guidelines
- Commits: use Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`).
- PRs must include:
  - Clear description and scope; link issues.
  - Screenshots/GIFs for UI changes.
  - Checklist: `npm run lint` and `npm run build` pass.
- Keep PRs small and focused; avoid unrelated formatting.

## Security & Configuration
- Env vars (create `.env.local`):
  - `VITE_SUPABASE_URL=...`
  - `VITE_SUPABASE_ANON_KEY=...`
- Never commit secrets; prefer `.env.local` which Vite loads automatically.
- Supabase client disables session persistence; avoid storing tokens in local storage.
