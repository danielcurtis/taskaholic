# Taskaholic Backend

Backend API built with NodeJS, Express, and MongoDB.

## Local Development

To access the Wiki, run `npm run dev` and visit it at [http://localhost:5000](http://localhost:5000)

It's recommended to use the development instructions for the entire repo. However, if you need to run just the backend, the following scripts are available:

- `npm run start`
- `npm run dev`

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

1. Create a feature branch off of main named "feature/describe-feature"
2. Make changes
3. Dynamically test changes
4. Update documentation if needed
5. Create a Pull Request to main
6. Changes will be reviewed, statically tested, and merged into main
