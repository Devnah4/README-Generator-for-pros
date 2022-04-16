// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
img.shields.io/badge/License-[license name]-lightgrey

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
choosealicense.com/licenses/[license name]/

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title} 
    # ${Name}

    ## Description

    ## Table of Contents
     
    ## Installation

    ## Usage

    ## Credits

    ## License
    >license


`;
}

module.exports = generateMarkdown;
