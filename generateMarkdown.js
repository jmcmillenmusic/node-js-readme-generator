// This function allows the user to pick a license from a list and sets its badge and link.
function renderLicenseBadgeLink(license) {
  var licenseBadgeLink = "";
  switch (license) {
    case 'Apache License 2.0':
      licenseBadgeLink = "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return licenseBadgeLink;
    case 'GNU General Public License v3.0':
      licenseBadgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return licenseBadgeLink;
    case 'MIT License':
      licenseBadgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return licenseBadgeLink;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadgeLink = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      return licenseBadgeLink;
    case 'BSD 3-Clause "New/Revised" License':
      licenseBadgeLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return licenseBadgeLink;
    case 'Boost Software License 1.0':
      licenseBadgeLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return licenseBadgeLink;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadgeLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      return licenseBadgeLink;
    case 'Eclipse Public License 1.0':
      licenseBadgeLink = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      return licenseBadgeLink;
    case 'GNU Affero General Public License v3.0':
      licenseBadgeLink = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      return licenseBadgeLink;
    case 'GNU General Public License v2.0':
      licenseBadgeLink = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      return licenseBadgeLink;
    case 'GNU Lesser General Public License v3.0':
      licenseBadgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return licenseBadgeLink;
    case 'Mozilla Public License 2.0':
      licenseBadgeLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      return licenseBadgeLink;
    case 'The Unlicense':
      licenseBadgeLink = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      return licenseBadgeLink;
    default:
      return licenseBadgeLink;
  }
}

// This calls the above-named function.
renderLicenseBadgeLink();

// This function generates the markdown for the README.
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadgeLink(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#Installation)
  [Usage](#Usage)
  [Credits](#Credits)
  [License](#License)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}
  
  ## License

  This application uses the following license:
  ${data.license} 
  ${renderLicenseBadgeLink(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  GitHub Username: ${data.GitHub}
  GitHub Profile: https://www.github.com/${data.GitHub}
  Email: ${data.email}
`;
}

// This shares the information with index.js.
module.exports = generateMarkdown;
