<h1> Vite TS linters PWA </h1>

## Setup

```sh
$ yarn create vite-pwa vite-pwa-linters
$ cd vite-pwa-linters
$ yarn
```

## linters

```sh
$ npx eslint --init
# 3 opc > es6 > react> yes>browser>airbnb>json>no
$ yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^7.2.0 eslint-plugin-import@^2.22.1 esl
int-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest eslint-config-prettier prettier git-commit-msg-linter
```

- add `"exclude": ["node_modules"]` a tsconfig.json
- mod eslintrc.json, eslintignore, prettierrc
- add eslintcache a gitignore
- - instalar [lint-staged](https://github.com/okonet/lint-staged#installation-and-setup) `npx mrm@2 lint-staged`
- para que reconozca el git commit `npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"`
- agregar los scripts de package.json

## Powerful PWAs

This starter is only the beginning. [Learn more](https://web.dev/progressive-web-apps/) about how to take this codebase and improve the install experience, create an app-like user experience, make your [offline experience even better](https://web.dev/reliable/). Then, [make it powerful](https://chromeos.dev/en/web/powerful-pwas) by adding new web APIs to supercharge your user experience. You can even [build a checklist of capabilities](https://chromeos.dev/en/web/powerful-pwas#your-pwa-checklist) you want to add, or see checklists for different kinds of apps you may want to build.


## Fixes

-- Husky

```sh
$ chmod +x .husky/*
```
