# SportHUB-APP Setup Guide

Welcome to the **SportHUB-APP** project! This guide will help you set up the project for both backend and frontend environments. Follow these steps to get everything running smoothly. If you encounter any issues, refer to the troubleshooting section or documentation links provided.

---

## 🚀 Backend Setup

### Prerequisites
- Ensure that **Node.js** is installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).

### Installation Steps

1. Navigate to the backend folder:
   ```bash
   cd C:\Users\samis\Desktop\SportHUB-APP-main\backend
   ```

2. Install all backend dependencies:
   ```bash
   npm install bcrypt body-parser cors dotenv express express-validator jsonwebtoken mongoose multer
   ```

3. Verify that the `node_modules` folder has been created.

4. Start the backend server:
   ```bash
   node server.js
   ```

---

## 🌐 Frontend Setup

### Prerequisites
- **Node.js** must be installed.
- **Angular CLI** installed globally. If it’s not installed, run:
  ```bash
  npm install -g @angular/cli
  ```

### Installation Steps

1. Navigate to the frontend folder:
   ```bash
   cd C:\Users\samis\Desktop\SportHUB-APP-main\frontend
   ```

2. Install all frontend development dependencies:
   ```bash
   npm install @angular-devkit/build-angular @angular/cli @angular/compiler-cli @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter typescript --save-dev
   ```

3. Verify that the `node_modules` folder has been created.

4. Serve the Angular application:
   ```bash
   ng serve
   ```

---

## 📌 Notes

- Ensure both backend and frontend dependencies are installed before attempting to run the application.
- If you encounter issues:
  1. Delete the `node_modules` folder and `package-lock.json` file.
  2. Re-run the installation commands for both backend and frontend.

- For detailed troubleshooting, refer to the official documentation of:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Angular](https://angular.io/)

---

## 🤝 Contributing
We’re always open to contributions! Feel free to:
- Fork the repository
- Create a pull request with your changes
- Raise issues or suggest improvements

---

## 🎉 Enjoy Coding!
We hope you have a great experience working with SportHUB-APP. If you have any questions or need further assistance, don’t hesitate to reach out!

