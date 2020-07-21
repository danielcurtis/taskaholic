# Taskaholic Backend

Taskaholic is a personal time and task management web application _under active development_. The backend is a proprietary, private API built using an express server.

## MVP Functional Requirements v1.0

- CRUD Tasks (Children of Tags)
- CRUD Tags (Parents of Tasks)
- CRUD Habits
- Authentication

## Technologies v1.0

- NodeJS
- Express
- Docker
- Kubernetes
- AWS

## Security v1.0

- Sanitized data with `express-mongo-sanitize`
- Secured headers with `helmet`
- Cross-site scripting prevented with `xss`
- Rate limited to **20 per minute** with `express-rate-limit`
- Parameter pollution prevented with `hpp`
- Allow CORS (for development) with `cors`

## Roadmap

- [x] Meet v1.0 functional and security requirements
- [ ] Dockerize backend API to interact with React frontend
- [ ] Setup CI/CD pipeline with Travis CI and GitHub
- [ ] Deploy to AWS with Kubernetes for container management

## Local Development

### Environment Setup

Clone the repo:

```
git clone https://github.com/danielcurtis/taskaholic-backend.git
```

Change into the project directory and install dependancies:

```
npm install
```

Create a `confing.env` file in the config directory:

```
cd config; touch config.env
```

There are a handful of environment variables that need to be added to the `config.env` file:

```
NODE_ENV
PORT
MONGO_URI
JWT_SECRET
JWT_EXPIRE
JWT_COOKIE_EXPIRE
SMTP_HOST
SMTP_PORT
SMTP_EMAIL
SMTP_PASSWORD
FROM_EMAIL
FROM_NAME
```

### Available Scripts

After setting up the environment, the following scripts can be ran.

**Run development server:**

```
npm run dev
```

**Run production server:**

```
npm run start
```
