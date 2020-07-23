# Taskaholic

A to-do web app with categories and time-tracking built in for task oriented individuals.

_For local development, refer to the backend and frontend READMEs._

## Technologies

- React
- NodeJS
- Express
- MongoDB
- Kubernetes
- Docker
- AWS

## Architecture

**_Add with docs update._**

## Security

**_Update with docs update._**

- Sanitized data with `express-mongo-sanitize`
- Secured headers with `helmet`
- Cross-site scripting prevented with `xss`
- Rate limited to **20 per minute** with `express-rate-limit`
- Parameter pollution prevented with `hpp`
- Allow CORS (for development) with `cors`

## Project Management

Taskaholic uses the product itself, GitHub Projects, this README for an "agile-like" project management environment.

The following sprints are planned to get to v1.0:

- [ ] UI API Integration: Inegrate frontend to backend
- [ ] Big Sur UI: Update UI to match Big Sur UI
- [ ] Responsive UI: Implement responsive UI
- [ ] Docker Pipeline: Dockerize services and set up pipeline
- [ ] QA: Set up tests and dev environement. Update docs.

### Roadmap v1.0

- [x] Create monorepo
- [ ] Update documentation

#### Frontend Specific

- [ ] Dashboard showing snapshots of time, tasks, and habits
- [ ] CRUD Tasks
- [ ] CRUD Tags
- [ ] CRUD Habits
- [ ] CRUD Timesheet
- [ ] Authentication
- [ ] Fully-responsive
- [ ] Cypress Testing

#### Backend Specific

- [ ] CRUD Tasks
- [ ] CRUD Tags
- [ ] CRUD Habits
- [ ] CRUD Timesheet
- [ ] CRUD Users
- [ ] Dockerized services: server, mongodb, frontend
- [ ] Pipeline using Travis CI, AWS, and Kubernetes
- [ ] Security testing
