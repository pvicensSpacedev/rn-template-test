#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the project name from the command line arguments
const projectName = process.argv[2];

// Assuming the script is run from a directory containing the newly created project directory
const projectPath = path.join(process.cwd(), projectName); // Path to the newly created project directory
const packageJsonPath = path.join(projectPath, 'package.json'); // Path to the package.json in the newly created project

fs.readFile(packageJsonJsonPath, 'utf-8', (err, data) => {
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
