# Reproduction steps

1. Run `pnpm install`
2. Run `pnpm dev`
3. Open http://localhost:5173
4. Click on CSR Route link
5. Inspect the DOM of the Title text
6. Notice there is no `aria-labelledby` attribute on the root element

7. Change the qwik version to 2.0.0-beta.16 in package.json and run `pnpm install`
8. Run `pnpm dev`
9. Open http://localhost:5173
10. Click on CSR Route link
11. Inspect the DOM of the Title text
12. Notice there is now an `aria-labelledby` attribute on the root element

It seems that cursors has changed the rendering in CSR mode, causing existing logic that would synchronoize with polymorphic components to break.
