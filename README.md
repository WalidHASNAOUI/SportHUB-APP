SportHUB-APP Setup Guide

Welcome to the SportHUB-APP project! This guide will walk you through setting up the project for both backend and frontend environments. Follow the steps carefully to get everything running smoothly.

🚀 Backend Setup

Prerequisites

Ensure that Node.js is installed on your system.

Installation Steps

Navigate to the backend folder:

cd C:\Users\samis\Desktop\SportHUB-APP-main\backend

Install all backend dependencies:

npm install bcrypt body-parser cors dotenv express express-validator jsonwebtoken mongoose multer

Verify that the node_modules folder has been created.

Start the backend server:

node server.js

🌐 Frontend Setup

Prerequisites

Node.js must be installed.

Angular CLI installed globally. If not, install it with:

npm install -g @angular/cli

Installation Steps

Navigate to the frontend folder:

cd C:\Users\samis\Desktop\SportHUB-APP-main\frontend

Install all frontend development dependencies:

npm install @angular-devkit/build-angular @angular/cli @angular/compiler-cli @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter typescript --save-dev

Verify that the node_modules folder has been created.

Serve the Angular application:

ng serve

📌 Notes

Ensure that both backend and frontend dependencies are installed before attempting to run the application.

If you encounter issues, try these steps:

Delete the node_modules folder and package-lock.json file.

Re-run the installation commands.

For detailed troubleshooting, refer to the documentation of the respective frameworks (Node.js, Express, Angular).

🎉 Enjoy Coding!

Feel free to contribute, raise issues, or suggest improvements for the SportHUB-APP project!
