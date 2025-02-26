const fs = require('fs');
const path = require('path');

// Function to recursively traverse folders and group files
function buildJsonStructure(dir) {
  const result = {};

  // Read the contents of the directory
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // Recursively process subdirectories
      result[item] = buildJsonStructure(fullPath);
    } else {
      // Process files and group by prefix (part before the first hyphen)
      const fileName = path.basename(item);
      const prefix = fileName.split('-')[0].toLowerCase(); // Convert prefix to lowercase

      // Check if there is a hyphen in the filename
      if (fileName.includes('-')) {
        // If there is a hyphen, group by the prefix (part before the hyphen)
        if (!result[prefix]) {
          result[prefix] = [];
        }
        result[prefix].push(fileName);
      } else {
        // If there is no hyphen, use the lowercase filename as the key
        const key = fileName.split('.')[0].toLowerCase(); // Get the file name without extension
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(fileName);
      }
    }
  });

  return result;
}

// Set the directory to the current working directory
const rootDir = process.cwd(); // This sets the rootDir to the current path

// Build the JSON structure
const jsonStructure = buildJsonStructure(rootDir);

// Write the JSON structure to a file
fs.writeFileSync('output.json', JSON.stringify(jsonStructure, null, 2), 'utf-8');

console.log('JSON structure has been generated and saved to output.json');