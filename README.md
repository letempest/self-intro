# Yet Another Demo Site

This is a SPA developed with next.js framework and tailwindcss to showcase my frontend development skill.

demo address: [https://jldev.vercel.app](https://jldev.vercel.app)

---

## Features

1. Responsive first, looks decent (at least to me) on different devices with mainstream breakpoints.
2. TypeScript codebase from the beginning, let's type them all!
3. Tailwind utilities is the best - less than 10 lines of custom css applied.
4. Dark mode loved by everyone, easy job using next-themes and tailwind.
5. Just a little bit animation to feel modern.

## Deployment

Currently deployed on vercel with one click.

## Todos

- [ ] Hydrate the `/techstack` route with real content, skills table sorting animation with framer-motion
- [x] CI/CD preparation - setup github actions to build and push image to docker hub on commit
  - [ ] setup nginx reverse proxy and caching for next app, in case I need custom deployment later (out of scope of this repo tho)
- [ ] Un-sticky header in mobile landscape mode for better user experience
- [ ] Animation - route links and scrollToTop / dark mode buttons animation with framer-motion
- [ ] CSP and security headers for higher lighthouse score
- [ ] Custom favicon, google web font
- [x] Animation - blinking caret right after varying name
- [ ] Some test cases maybe? But I want to wire up a CMS first😝, and this list is getting too long already.
