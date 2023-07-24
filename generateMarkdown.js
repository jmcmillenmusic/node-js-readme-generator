// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = "";
  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      return licenseBadge;
    case 'GNU General Public License v3.0':
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      return licenseBadge;
    case 'MIT License':
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      return licenseBadge;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
      return licenseBadge;
    case 'BSD 3-Clause "New/Revised" License':
      licenseBadge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      return licenseBadge;
    case 'Boost Software License 1.0':
      licenseBadge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      return licenseBadge;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
      return licenseBadge;
    case 'Eclipse Public License 1.0':
      licenseBadge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
      return licenseBadge;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
      return licenseBadge;
    case 'GNU General Public License v2.0':
      licenseBadge = "https://img.shields.io/badge/License-GPL_v2-blue.svg";
      return licenseBadge;
    case 'GNU Lesser General Public License v3.0':
      licenseBadge = "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
      return licenseBadge;
    case 'Mozilla Public License 2.0':
      licenseBadge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
      return licenseBadge;
    case 'The Unlicense':
      licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      return licenseBadge;
    default:
      return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  switch (license) {
    case 'Apache License 2.0':
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      return licenseLink;
    case 'GNU General Public License v3.0':
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      return licenseLink;
    case 'MIT License':
      licenseLink = "https://opensource.org/licenses/MIT";
      return licenseLink;
    case 'BSD 2-Clause "Simplified" License':
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      return licenseLink;
    case 'BSD 3-Clause "New/Revised" License':
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      return licenseLink;
    case 'Boost Software License 1.0':
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      return licenseLink;
    case 'Creative Commons Zero v1.0 Universal':
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      return licenseLink;
    case 'Eclipse Public License 1.0':
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      return licenseLink;
    case 'GNU Affero General Public License v3.0':
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
      return licenseLink;
    case 'GNU General Public License v2.0':
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      return licenseLink;
    case 'GNU Lesser General Public License v3.0':
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
      return licenseLink;
    case 'Mozilla Public License 2.0':
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      return licenseLink;
    case 'The Unlicense':
      licenseLink = "http://unlicense.org/";
      return licenseLink;
    default:
      return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

renderLicenseBadge();
renderLicenseLink();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![License](${data.licenseBadge})](${data.licenseLink})

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}
  
  ## License

  - This application uses the following license:
  - ${data.license}
  - ${data.licenseLink}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  - GitHub Username: ${data.GitHub}
  - GitHub Profile: https://www.github.com/${data.GitHub}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
