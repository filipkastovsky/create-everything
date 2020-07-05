# Create Everything

Create your own create- template to publish to npm containing anything and everything with `create-everything`!

`create-everything` is a minimalistic and highly configurable template factory builder.

---

## Quick start

### npm

```
npx create-react-embeddable app
cd app
npm i
```

### yarn

```
yarn create react-embeddable app
cd app
yarn install
```

-   Add all your templates to the `templates` directory, these can be later accessed through the cli
-   Feel free to explore and edit the template generator to your liking, basic config can be done through `GLOBALS.js`, but the entire codebase is to be tweaked to your liking
-   When you're done, publish your package to `npm`
-   `npx` like hell from your freshly created create- app, by default this can be done via `npx <your-package-name> <target-directory> <template-name>`
-   **PROFIT**

---

## CLI

`create-everything` by default provides a easy to use CLI similar to that of [CRA](https://github.com/facebook/create-react-app)

Arguments will be resolved in the following order:

```
npx <your-package-name> <path> <template>
```

Either can be specified via the option tag:

```
npx <your-package-name> --template <template> --path <path>
```

This behavior is fully customizable to fit your use-case.

## Dependency

`create-everything` can also be installed as a dependency, exposing a `handleCreate` method, which can be used to trigger the creation of a `create-everything` project programmatically.

Although, why would you ever do that.

`create-everything` works on macOS, Windows, and Linux.
If something doesn’t work, please file an issue.

---

All PR's are welcome!
