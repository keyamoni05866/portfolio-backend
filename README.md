## Introduction

This is Portfolio backend api creation project, which is using Mongoose for MongoDB interaction and Node.js for server, also used TypeScript.

## Features

-CRUD Operation <br>
-Authentication with Jwt <br>
-Data Validation with Zod <br>
-Error Handling <br>
-Configurable via environment variables. <br>

## Steps

1. Clone the Repository --- https://github.com/keyamoni05866/portfolio-backend<br>
2. Install Dependencies. --- npm install <br>
3. Set up the Env variables:<br>

- Create a .env file in the root directory.
- Add the following environment variables:<br>
  PORT=5000<br>
  DATABASE_URL= The connection string for your MongoDB database.<br>
  BCRYPT_SALT_ROUND=use round for password bcrypt<br>
  JWT_ACCESS_SECRET=use your secret<br>
  JWT_ACCESS_EXPIRES_IN= use expiration time<br>
  JWT_REFRESH_SECRET=use refresh secret<br>
  JWT_REFRESH_EXPIRES_IN=use expire time<br>

## Running the server

-in package.json file there is 2 scripts for run the server.example:<br>

- start:prod(this is for javascript file ).<br>
- start:dev(this is for typescript file).<br>

## Live Link-

https://portfolio-server-rosy-pi.vercel.app/
