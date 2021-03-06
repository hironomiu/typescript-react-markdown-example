# typescript-react-markdown-example

## react-router-dom

```
yarn add react-router-dom @types/react-router-dom
```

## react-markdown

```
yarn add react-markdown react-syntax-highlighter
yarn add --dev @types/react-syntax-highlighter
yarn add remark-gfm
```

---

Typescript + Webpack + Babel + ESLint + Jest + React(+Redux Toolkit) + TailwindCSS

## Operation

### Run

```
yarn start
```

### Build

```
yarn run build
```

### Testing

```
yarn test
```

## SetUp

```
yarn install
```

## Sample Code

`./src/*`

```
.
├── __tests__
│   ├── counterSlice.spec.ts
│   └── dummy.spec.ts
├── html
│   └── index.html
└── ts
    ├── app
    │   └── store.ts
    ├── app.css
    ├── app.tsx
    ├── components
    │   └── Home.tsx
    └── feature
        └── counter
            ├── Counter.tsx
            └── counterSlice.tsx
```

## Environment Build Memo

パッケージ管理は`yarn (v1)`を利用

### Initialize

```
yarn
```

### Webpack

```
yarn add --dev webpack webpack-cli webpack-merge clean-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack-dev-server
```

### TypeScript

```
yarn add --dev typescript ts-node
```

Initialize

```
npx tsc --init
```

### Babel

```
yarn add --dev babel-loader @babel/core @babel/preset-env @babel/preset-typescript
```

### ESlint

```
yarn add --dev eslint eslint-webpack-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-reactyar
```

### Jest

```
yarn add --dev jest jsdom eslint-plugin-jest @types/jest @types/jsdom ts-jest
```

Initialize

```
npx jest --init
```

### React + Redux

```
yarn add react react-dom @types/react @types/react-dom react-redux @types/react-redux
```

```
yarn add --dev @babel/preset-react
```

```
yarn add @reduxjs/toolkit @types/node redux @types/redux
```

### Tailwind

```
yarn add tailwindcss@latest @types/tailwindcss
yarn add --dev postcss-loader postcss autoprefixer css-loader mini-css-extract-plugin
```

Initialize

```
npx tailwindcss init -p
```

Modify tailwind.config.js

```
- purge: []
+ purge: {
+    enabled: true,
+    content: ['./src/**/*.tsx', './public/index.html'],
+  },
```

`src/app.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
