<div align='center'>
    <h1>Shortly Page</h1>
    <p><i>Designed by Frontend Mentor</i></p>
    <p><a href='https://shortly-page.vercel.app/'>DEMO</a></p>
    <div>
        <img src='https://img.shields.io/github/deployments/grzechu335/shortly-page/production?style=for-the-badge'/>
        <img src='https://img.shields.io/github/license/grzechu335/shortly-page?style=for-the-badge'/>
        <img src='https://img.shields.io/github/languages/top/grzechu335/shortly-page?style=for-the-badge'/>
    </div>
</div>

<!-- Table of contents  -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#project-screen-shot">Project Screen Shot</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#getting-started">Getting started</a></li>
  </ol>
  </details>

<!-- Content -->

<!-- ABOUT THE PROJECT -->

## About the Project

The Shortly page is a web application designed to take long URLs provided by the user and generate shortened versions. When a user submits a URL, the application sends a request to the address https://cutt.ly. The response from https://cutt.ly contains a shortened link. However, since this is the free version, there is a restriction of 3 requests per minute. If the user exceeds this limit, they will receive a notification informing them about the restriction.

<!-- PROJECT SCREEN SHOT -->

## Project Screen Shot

![ShortlyPageScreenShot]

<!--  TECHNOLOGIES -->

## Technologies

-   ![TypeScriptBadge]
-   ![ReactBadge]
-   ![NextJSBadge]
-   ![NodeJSBadge]
-   ![TailwindCSSBadge]

<!-- GETTING STARTED -->

## Getting Started

1. Clone repo by entering the command
    ```sh
    git clone https://github.com/Grzechu335/Shortly-page
    ```
2. Install NPM packages (You will need node and npm installed globally on your machine)
    ```sh
    npm install
    ```
3. Create file in root directory named `.env.local` and set environment variables:
    ```js
    CUTTLY_API_KEY = 'Enter your API key from https://cutt.ly'
    NEXT_PUBLIC_HOST_URL = 'Enter your host URL (eg. http://localhost:3000)'
    ```
    <br/>
4. Run command on local environment
    ```sh
    npm run dev
    ```
5. To visit app:
    ```
    http://localhost:3000
    ```

<!--   LICENCE   -->

## Licence

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- Links -->

[typescriptbadge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[reactbadge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[nextjsbadge]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[nodejsbadge]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[tailwindcssbadge]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[shortlypagescreenshot]: /public/assets/screenshot/screenshot.png
