# Yet Another Demo Site

This is a SPA developed with next.js framework and tailwindcss to showcase my frontend development skill.

demo address: [https://jldev.vercel.app](https://jldev.vercel.app)  
Alterntive: [Backup deployment if demo is inaccessible](https://leplus.co) (in progress)

---

## Features

1. Responsive first, looks decent (at least to me) on different devices with mainstream breakpoints.
2. TypeScript codebase from the beginning, let's type them all!
3. Tailwind utilities is the best - less than 10 lines of custom css applied.
4. Dark mode loved by everyone, easy job using next-themes and tailwind.

## Deployment

Currently deployed on vercel with one click.

## Todos

- [ ] Hydrate the `/techstack` route with real content and styling
- [x] CI/CD preparation - setup github actions to build and push image to docker hub on commit
  - [ ] setup nginx reverse proxy and caching for next app, in case I need custom deployment later (out of scope of this repo tho)
- [ ] Un-sticky header in mobile landscape mode for better user experience
- [ ] Custom favicon, google web font
- [ ] Animation - blinking caret right after varying name (framer-motion or react-spring)
- [x] Chores: purge redundent import, configuration and comments
- [x] ~~Clear all timeoutIds and intervalIds when tab is inactive or component is out of viewport (currently resuming tab after inactive for awhile the varyingName component state is mess up due to browser throttling setTimeout in the background). Lowest priority since too much work for incommensurate gain.~~ (solved in another way, by simply promisifying setTimeout and running them in async/await manner, so no undeterministic setTimeout callback overlapping, feels easier than using page visibility api)
- [ ] Some test cases maybe? But I want to wire up a CMS first😝, and this list is getting too long already.
