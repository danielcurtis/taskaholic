# Taskaholic Backend

Backend API built with NodeJS, Express, and MongoDB.

## Prerequisites

- Node
- Docker Desktop

## Quick Start

1. Clone the entire monorepo: `git clone https://github.com/danielcurtis/taskaholic.git`
2. Change to the frontend directory: `cd backend`
3. Install dependancies: `npm install`
4. Create env in config directory: `cd config; touch config.env`
5. Add the following environment variables:

```
NODE_ENV= development or production
PORT= 5000 is default

MONGO_URI= get from mongodb

JWT_SECRET= generate hash using SHA256
JWT_EXPIRE= 30 days is default
JWT_COOKIE_EXPIRE= 30 days is default

SMTP_HOST= get from mailtrap
SMTP_PORT= get from mailtrap
SMTP_EMAIL= get from mailtrap
SMTP_PASSWORD= get from mailtrap
FROM_EMAIL= hello@taskaholic.com
FROM_NAME= name at Taskaholic
```

6. Run the dev server at localhost:specified port `npm run dev`
7. Run the production server at localhost:specified port `npm run start`
8. Visit the documentation at _locahost:specified port_
9. Test an API endpoint at _localhost:specified port/api/v1/auth/login/_

## Contributing

#### File structure

The backend is laid out in 8 directories and the server.js file.

1. Config - configuration for env variables and database
2. Controllers - controllers for routes
3. Middleware - middleware functions for routes
4. Models - database structures for MongoDB
5. Public - API documentation
6. Routes - Routes for API, see documentation
7. Utils - Utility functions such as sendMail
8. Components - functional components such as dashboard or timesheet

#### Coding Conventions

- Include the following in JS files to type check variables (with VSCode) and use JS strict mode

```
// @ts-check
'use strict';
```

- Use single quotes and template literals
- Follow ES6 practices
- Use tabs or two spaces
- Place functions in their respective directories
- Use camelcase, descriptive naming conventions

#### GitHub Workflow

1. Create a feature branch off of dev named "feature/describe-feature"
2. Make changes
3. Dynamically test changes
4. Update documentation if needed
5. Create a Pull Request to dev
6. Changes will be reviewed, statically tested, and merged into dev
7. Changes will be live on the dev server
8. Changes will be merged into main (production) with the next release
