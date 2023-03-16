<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Phoenix</h3>
  <p align="center">
    An app here to help you stay on top of your job search and never miss another opportunity!
    <br />
    <a href="https://github.com/JuliaGrandury/phoenix-app-pern">View Demo</a>
    ·
    <a href="https://github.com/JuliaGrandury/phoenix-app-pern/issues">Report Bug</a>
    ·
    <a href="https://github.com/JuliaGrandury/phoenix-app-pern/issues">Request Feature</a>
  </p>
</div>


## About The Project & Demo

[In the process of being deployed and hosted on AWS Amplify]()

<br/>

https://user-images.githubusercontent.com/46718089/211704287-f8b23186-e7a5-4c33-b174-2096b57f1fbe.mov

<br/>

**TLDR**; Phoenix allows users to keep track of their current job applications, networking progress and job search statistics all in one with summary emails every week and daily job progress statistics. Features include:
- Allowing job seekers to give mentors, parents, accountability buddies - called "believers" - access to their progress by choosing which pages they have access to
- Editable kanban board of the week's tasks by both the user and selected "believers"
- Weekly summary emails to the job seeker and selected "believers"
- Notifications when a job is created, a job status is updated or a job posting is closed
- Leaderboards of the most involved job seekers based on application and networking ratios
- Increasingly better job suggestions
- Import and export of the data through CSV files
- And more in development...

<a>Design document</a> coming soon for more details on the product.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Installing Phoenix

#### Prerequisites
1. You will need to have Node.js and npm package manager installed. Verify that you do with the commands `node -v` and `npm -v`.
If you do not, visit [Node.js](https://nodejs.org/en/) and download the version labeled LTS. To install the latest version of npm run `npm install npm@latest -g`. Finally, verify that both are correctly installed using `node -v` and `npm -v`.
2. You will also need to have PostgreSQL installed. Verify that you do with the command `psql --version`. If you do not, visit [PostgreSQL](https://www.postgresql.org/download/) to download it and [Install PostgreSQL macOS](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/) or [Install PostgreSQL on Windows](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/) for help. Ensure that you checked "PostgreSQL Server" and "Command Line Tools" during the installation. (Note: Take note of your postgres password and keep it private as you will need it later!)

#### Installation Steps
1. Download the ZIP: At the top right of the web version of Github, click on the green button "<> Code" > Download Zip > Double-click on the ZIP folder to uncompress it OR clone the repo with:
   ```sh
   git clone https://github.com/JuliaGrandury/phoenix-app-pern.git
   ```
2. Install dependencies
   ```sh
   npm i
   ```
3. Create your own postgreSQL database and tables with the commands in db.sql.
4. Create a .env file in your server folder with the following variables:
  ```
  PORT = 5000
  NODE_ENV = development // Note: you will change this to "production" in production
  CLIENT_URL = "http://localhost:3000"
  PGUSER=postgres
  PGPASSWORD="your postgres password"
  PGHOST=localhost
  PGPORT=5432
  PGDATABASE="your database name"
  ```
5. Create a config.js file in client/src with the following:
  ```
  const localConfig = {
      apiUrl: "http://localhost:5000"
  }
  const prodConfig = {
      apiUrl: "your production URL here"
  }
  export const config = process.env.NODE_ENV === "production" ? prodConfig : localConfig
  ```
6. Run the frontend of the application using `npm run start` and the backend using `nodemon server.js`
7. Run the test suite using `npm test` or a specific file using `npm test <filepath>`

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Built With
#### Front-end
- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux w/ hooks](https://redux.js.org/) - State management library
- [Redux Toolkit](https://redux-toolkit.js.org/) - Toolset for efficient Redux development
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Middleware which allows action creators to return a function
- [React Router](https://reactrouter.com/) - Library for general routing & navigation
- [React Hook Form](https://react-hook-form.com/) - Library for flexible & extensible forms
- [date-fns](https://date-fns.org/) - Library for manipulating/formatting of timestamps
#### Back-end
- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [PostgreSQL](https://www.postgresql.org/) - Opens-source SQL database to store data
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file
<p align="right">(<a href="#readme-top">back to top</a>)</p>



## License
Distributed under the MIT License. See `LICENSE.txt` for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contact
Julia Grandury - booleanjules@gmail.com

Project Link: [https://github.com/JuliaGrandury/phoenix-app-pern](https://github.com/JuliaGrandury/phoenix-app-pern)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

