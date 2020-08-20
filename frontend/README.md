# Taskaholic Frontend

User interface built with React and vanilla CSS.

## Local Development

It's recommended to use the development instructions for the entire repo. However, if you need to run just the frontend, the following scripts are available:

- `npm run start`
- `npm run build`
- `npm run test`

## Contributing

#### File structure

The frontend is laid out in four main folders:

1. Assests - static files such as images
2. Components - functional components such as dashboard or timesheet
3. Context - context states for app such as user authentication
4. Pages - main pages for app such as home or landing

**All CSS is located in index.css**

#### Coding Conventions

- Include the following in JS files to type check variables (VS Code only)

```
// @ts-check
```

- Follow ES6 practices
- Use tabs or two spaces
- Use functions for React components
- Use arrow functions for functions inside of React components
- Export functions at the bottom of the file instead of inline
- Components should have 1 file and a children directory for child components
- Use camelCase naming conventions

#### GitHub Workflow

1. Create a feature branch off of main named "feature/describe-feature"
2. Make changes
3. Dynamically test changes
4. Update documentation if needed
5. Create a Pull Request to main
6. Changes will be reviewed, statically tested, and merged into main
