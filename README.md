# Portfolio website

Built with Next.js, Sanity.io and Typescript.

## Live URL: <https://www.dfweb.no>

<br />

## Features

### General

-   Next.js 13 with Typescript
-   Sanity.io for fetching project information and frontpage text
-   Storybook for component documentation
-   Chromatic for visual testing of Storybook components
-   Animations with Framer Motion
-   React testing library for unit testing
-   Cypress for E2E testing
-   Filter project display
-   Contact form with Email.js
-   Display CV with React-PDF
-   Automatic sitemap generation (see /api/siteMapGenerator.ts)
-   Google rich results for each individual page
-   100% score in Google Lighthouse

### Design

-   Fully responsive design tested on all devices
-   React Icons for project icons
-   Tailwind CSS for styling
-   Google fonts with Lato (optimized with @next/font for Next.js)

### Accessibility

-   WCAG accessibility tested
-   Accessibility testing with Cypress Axe
-   Accessibility testing with Axe in Storybook for each component

### Devops / Code quality

-   Continuous Integration with CircleCI
-   CircleCI will warn before deploy if tests fail (setup for React testing library, Cypress and Chromatic)
-   Code quality analysis with Codacy, Sonarcloud, LGTM and Codeclimate
-   E2E testing with Cypress integrated with CircleCI
-   E2E testing with Playwright integrated with Github actions
-   Unit testing with Jest and React Testing Library integrated with CircleCI
-   Test coverage setup with Codecov

## TODO

-   React Hook Form
