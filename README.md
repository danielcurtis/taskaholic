# Taskaholic

A to-do web app with categories and time-tracking built in for task oriented individuals.

_For local development, refer to the backend and frontend READMEs. **Not applicable to k8s!**_

## Local Development

**_Add with docs update._**

#### K8s Secrets

**Secret Type**

- generic: key value
- docker registry: private registry (not used)
- tls: https

**Secret Name**

Add the following generic secret key value pairs.

The initial name is the key. The commented name is the secret name.

```yaml
# MongoDB
MONGO_INITDB_ROOT_USERNAME # mongouser
MONGO_INITDB_ROOT_PASSWORD # mongopassword
MONGO_INITDB_DATABASE # mongodatabase
# JWT
JWT_SECRET # jwtsecret
# Email Service
SMTP_HOST
SMTP_PORT
SMTP_EMAIL
SMTP_PASSWORD
```

```bash
kubectl create secret <secret type> <secret name> --from-literal <key=value>
```

Example (note, hash is not real):

```bash
kubectl create secret generic jwtsecret --from-literal JWT_SECRET=somehashvaluef80h103fuu
```

**Create Docker registry secret:**

The build results are stored in a private repo on Docker hub. To give kubectl the secret to login, run the following command:

```bash
kubectl create secret docker-registry regsecret --docker-username=<your username> --docker-password=<your pwd> --docker-email=<your email>
```

**Access K8s local development dashboard:**

Run this command:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.3/aio/deploy/recommended.yaml
```

Set up a local proxy:

```bash
kubectl proxy
```

The dashboard should be live at the following link:

[http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/)

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
