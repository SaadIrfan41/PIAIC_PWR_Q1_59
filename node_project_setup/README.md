Here are the steps to set up a new Node.js project with the latest features, including the necessary configurations:

### Steps:

1. **Initialize Node.js Project:**

   ```bash
   npm init -y
   ```

2. **Initialize TypeScript Configuration:**

   ```bash
   tsc --init
   ```

3. **Install Required Packages:**

   ```bash
   npm install inquirer
   npm install @types/inquirer --save-dev
   ```

4. **Update `tsconfig.json` File:**

   - Open `tsconfig.json`.
   - Update the following properties:
     ```json
     "target": "ES2022",
     "module": "NodeNext",
     "rootDir": "./src",
     "moduleResolution": "NodeNext",
     "outDir": "./dist",
     ```

5. **Update `package.json` File:**
   - Open `package.json`.
   - Add the following line:
     ```json
     "type": "module",
     ```

These steps will configure your Node.js project to use the latest features and enable TypeScript with the specified settings.
