#!/usr/bin/env node

// script.js
const fs = require('fs');
const path = require('path');

// Replace placeholder with the project name
const projectName = process.argv[2]; // Get the project name from the command line arguments
const templatePath = path.join(__dirname, 'template');

const packageJsonPath = path.join(templatePath, 'package.json');

fs.readFile(packageJsonPath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  // Replace "__PROJECT_NAME__" with the actual project name
  const updatedPackageJson = data.replace(/"__PROJECT_NAME__"/g, `"${projectName}"`);

  fs.writeFile(packageJsonPath, updatedPackageJson, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing package.json:', err);
    } else {
      console.log('Project name replaced in package.json');
    }
  });
});
