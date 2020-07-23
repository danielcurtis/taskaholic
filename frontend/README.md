# Taskaholic Frontend

User interface built with React and vanilla CSS.

## Prerequisites

- Node
- Docker Desktop

## Quick Start

1. Clone the entire monorepo: `git clone https://github.com/danielcurtis/taskaholic.git`
2. Change to the frontend directory: `cd frontend`
3. Install dependancies: `npm install`
4. Run the app at localhost:3000: `npm run dev`
5. Build the app `npm run build`
6. Test the app `npm run test`
7. _For app to fully function, follow backend local dev instructions._

## Contributing

#### File structure

The frontend is laid out in four main folders:

1. Assests - static files such as images
2. Components - functional components such as dashboard or timesheet
3. Context - context states for app such as user authentication
4. Pages - main pages for app such as home or landing

**_Update for styles on docs update._**

#### Coding Conventions

- Include the following in JS files to type check variables and use JS strict mode

```
// @ts-check
'use strict';
```

- Use single quotes except for JSX
- Follow ES6 practices
- Use tabs or two spaces
- Use classic functions for React components
- Use arrow functions for util functions inside of React components
- Export functions at the bottom of the file instead of inline
- Components should have 1 file and a children directory for child components
- Use camelcase naming conventions

#### GitHub Workflow

1. Create a feature branch off of dev named "feature/describe-feature"
2. Make changes
3. Dynamically test changes
4. Update documentation if needed
5. Create a Pull Request to dev
6. Changes will be reviewed, statically tested, and merged into dev
7. Changes will be live on the dev server
8. Changes will be merged into main (production) with the next release
