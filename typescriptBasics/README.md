# Node.js Project Setup Guide

This guide provides instructions for setting up a new Node.js project with the latest features.

## Initial Setup

1. **Initialize npm Project**: Create a new npm project with default settings.

   ```bash
   npm init -y
   ```

2. **TypeScript Configuration**: Generate a TypeScript configuration file.
   ```bash
   tsc --init
   ```

## TypeScript Configuration

Make the following changes in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "rootDir": "./src", // Optional
    "moduleResolution": "NodeNext",
    "outDir": "./dist", // Optional
    "noEmitOnError": true // Optional
  }
}
```

## Package.json Configuration

1. Update your package.json file to enable ECMAScript module support:

```json
{
  "type": "module"
}
```

## Installing Packages

1. Install the required packages using npm:

```bash
npm i inquirer
npm i @types/inquirer -D
```
