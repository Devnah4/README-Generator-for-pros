const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Boost Software License 1.0":
      return "[![License: Boost 1.0](https://img.shields.io/badge/License-Boost1.0-orange.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blueviolet.svg)](http://unlicense.org/)";
    default:
      return "";
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "Boost Software License 1.0":
      return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    case "Unlicense":
      return "[The Unlicense](http://unlicense.org/)";
    default:
      return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.project}
    
    ${renderLicenseBadge(data.license)}

    ## Description
    
    ${data.description}

    ## Table of Contents
    
    ${data.contents}

    ## Installation
    
    To use program please run:
    ${data.installation}
     
    ## Usage
    
    ${data.usage}

    ## Credits
    
    Made with support from: 
    ${data.credits}

    ## License
    
    Licensed for use by:
    ${data.license}

    ## Contact

    View my other work:
    [${data.github}](https://github.com/${data.github}/)

    Message me at:
    ${data.contact}
`;
}

module.exports = generateMarkdown;