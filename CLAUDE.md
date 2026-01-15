# CLAUDE.md - Project Context for Claude Code

## Project Overview
Personal portfolio website for Raghav Narang - Senior Software Engineer with 10+ years of experience.

**Live URL:** https://raghavnarang.dev
**GitHub:** https://github.com/raghavnarang/portfolio

## Tech Stack
- **Framework:** Next.js 16.1.1 with App Router
- **UI:** shadcn/ui v2 (Lyra style, amber theme, gray base)
- **Styling:** Tailwind CSS v4
- **Icons:** Phosphor Icons React (`@phosphor-icons/react/dist/ssr`)
- **Fonts:** JetBrains Mono (primary), Geist Sans/Mono
- **Theme:** Dark mode only (permanent, via `dark` class on html)
- **Deployment:** Vercel (free tier, static export)

## Key Architecture Decisions

### Static Export
- Uses `output: "export"` in next.config.ts for fully static site
- No serverless functions - pure HTML/CSS/JS from CDN
- Route handlers (robots.ts, sitemap.ts) use `export const dynamic = "force-static"`

### Data Separation
- All portfolio content in `/lib/data.ts` for easy editing
- Exports: PROFILE, SKILLS, HIGHLIGHTED_SKILLS, FEATURED_PROJECT, WORK_EXPERIENCE, EDUCATION, OPEN_SOURCE, SEO

### SEO Implementation
- OpenGraph and Twitter card meta tags in layout.tsx
- JSON-LD structured data (Person, WebSite, ProfilePage schemas)
- robots.ts and sitemap.ts for search engine crawling
- Canonical URL: https://raghavnarang.dev

### PDF Resume
- Source: `/public/resume.html`
- Generated: `/public/resume.pdf`
- Generate command: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/resume.pdf public/resume.html`
- **Privacy:** PDF contains phone number (+91-8437661855), location (Amritsar), and JioHotstar name - NOT on public website

## Privacy Considerations
- **Public website:** Shows "India's largest OTT platform" (not JioHotstar name)
- **PDF resume only:** Contains phone number, Amritsar location, JioHotstar client name
- **Reason:** Proximity Works NDA doesn't allow public disclosure of client name

## File Structure
```
/app
  layout.tsx      - Root layout with SEO metadata and JSON-LD
  page.tsx        - Main portfolio page
  globals.css     - Tailwind CSS imports
  robots.ts       - robots.txt generation
  sitemap.ts      - sitemap.xml generation
/lib
  data.ts         - All portfolio content (edit this to update content)
  utils.ts        - Utility functions (cn helper)
/components/ui    - shadcn/ui components
/public
  avatar.jpg      - Profile photo
  resume.html     - PDF source
  resume.pdf      - Downloadable resume
```

## Common Tasks

### Update portfolio content
Edit `/lib/data.ts` - all text content is centralized there.

### Regenerate PDF resume
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/resume.pdf public/resume.html
```

### Build and test locally
```bash
npm run dev      # Development server
npm run build    # Production build (outputs to /out for static)
```

### Deploy
Push to main branch - Vercel auto-deploys via GitHub integration.

## Design Notes
- Minimalist, clean design with good whitespace
- Resume badge has border (`border-foreground/30`) to distinguish it from other badges
- Highlighted skills use ring effect (`ring-1 ring-primary/50`) not background color
- Arrow icons always visible on external links (Open Source, Resume)
- Mobile responsive with `sm:` breakpoints

## Things NOT to Add
- "Built with Claude Code" on public website (only in README)
- Portfolio website as a project (circular/meta)
- Phone number or exact location on public website
- Client names (JioHotstar) on public website
