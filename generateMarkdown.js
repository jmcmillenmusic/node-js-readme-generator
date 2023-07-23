// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = data.license;
  let licenseBadge = "";
  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case 'MIT License':
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
      break;
    case 'BSD 3-Clause "New/Revised" License':
      licenseBadge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      break;
    case 'Boost Software License 1.0':
      licenseBadge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
      break;
    case 'Eclipse Public License 1.0':
      licenseBadge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
      break;
    case 'GNU General Public License v2.0':
      licenseBadge = "https://img.shields.io/badge/License-GPL_v2-blue.svg";
      break;
    case 'GNU Lesser General Public License v3.0':
      licenseBadge = "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
      break;
    case 'The Unlicense':
      licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const license = data.license;
  let licenseLink = "";
  switch (license) {
    case 'Apache License 2.0':
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case 'GNU General Public License v3.0':
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case 'MIT License':
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case 'BSD 3-Clause "New/Revised" License':
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case 'Boost Software License 1.0':
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case 'Eclipse Public License 1.0':
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case 'GNU Affero General Public License v3.0':
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case 'GNU General Public License v2.0':
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case 'GNU Lesser General Public License v3.0':
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case 'The Unlicense':
      licenseLink = "http://unlicense.org/";
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![License: ${data.license}](${licenseBadge})](${licenseLink})

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}
  
  ## License

  This application uses the following license: 
  ${data.license}
  ${licenseLink}

  ## Contributing

  ## Tests

  ## Questions
`;
}

module.exports = generateMarkdown;
