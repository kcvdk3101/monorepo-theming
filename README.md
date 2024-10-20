# Theming Solution with Lerna and Emotion CSS
Build a monorepo project Theming/Styling solution for framework agnostic by using CSS-in-JS

## Prerequisites
- Lerna ([learn more](https://lerna.js.org/))
- Emotion CSS ([learn more](https://emotion.sh/docs/introduction))
- NextJS ([learn more](https://nextjs.org/))

## Project Structure
```bash
emotion/
├── packages/
│		├── theming/                # Contains theme tokens and logic to apply theme CSS styles
│		│   ├── src/
│		│   │   ├── colors.json     # Defines color tokens
│		│   │   ├── applyTheme.js   # Method to define root variables from tokens
│		│   └── package.json
│		│
│		├── ui-components/          # Framework-agnostic components
│		│   ├── src/
│		│   │   └── index.js        # Export all Pure JS components
│		│   │   └── components
│		│   │   │   ├── Button.js   # Pure JS Button component
│		│   └── package.json
│		│
│		├── react-app/              # NextJS application
│		│   ├── src/
│		│   │   ├── app/
│		│   │   │   ├── page.tsx    # Import Button component from ui-components
│		│   └── package.json
├── package.json                # Monorepo package configuration
└── lerna.json                  # Lerna for managing the monorepo
```

## Installation

### Clone this repository

```bash
git clone https://gitlab.com/cheshire-datasystems/designops/playground/nash-tech/ui-kit-theme-poc.git
```

### Install npm packages
```bash
cd ui-kit-theme-poc

cd css-in-js

npm install
```

### Run lerna to start a React App
```bash
npm install lerna -g

npx lerna run dev --scope=react-app
```