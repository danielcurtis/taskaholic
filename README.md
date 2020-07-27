# Taskaholic

A to-do web app with categories and time-tracking built in for task oriented individuals.

## Local Development

You can use Kubernetes or Docker Compose for local development. Docker requires less set up, but Kubernetes reflects the production environment on Google Cloud.

### Initial Requirements

1. Install Docker Desktop
2. Clone the repo
3. Create a feature, bugfix, or hotfix branch

### Using Docker Compose

1. Create the following secrets in **/backend/config/config.env**

```
NODE_ENV=development
PORT=5000

MONGO_INITDB_DATABASE=
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=

JWT_SECRET=
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```

2. Run `docker-compose up` in the project root
3. Visit the running app at [http://localhost:3050](http://localhost:3050)

### Using Kubernetes

1. Ensure Kubernetes is running in Docker Desktop
2. Install kubectl `brew install kubectl`
3. Change the NODE_ENV value in **/k8s/backend-deployment.yaml** to development
4. Create the secrets that use a secretKeyRef:

The initial name is the key. The commented name is the secret name.

```yaml
MONGO_INITDB_ROOT_USERNAME # mongouser
MONGO_INITDB_ROOT_PASSWORD # mongopassword
MONGO_INITDB_DATABASE # mongodatabase

JWT_SECRET # jwtsecret
```

Create the above secrets with the command below, where value is the secret.

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

You should now be able to visit the app at [http://localhost](http://localhost)

**Access K8s local development dashboard:**

Run this command:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.3/aio/deploy/recommended.yaml
```

Then set up a local proxy `kubectl proxy`

The dashboard should be live at [http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/](http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/)

## Technologies

- React
- NodeJS
- Express
- Docker
- MongoDB
- Kubernetes

## Architecture

### CI/CD Pipeline

- GitHub: Hosts code
- Travis CI: Continuous Integration
- Docker Hub: Hosts Artifacts
- Kubernetes Cluster: Continuous Delivery
- MongoDB Atlas: Persistent Storage

### Codebase

- Dockerized backend API in Express and NodeJS
- Dockerized frontend UI in React and vanilla CSS
  - React components found in /frontend/src
  - CSS found in /frontend/src/index.css
- Hosted MongoDB Instance
  - Models found in /backend/models

## Security

- Sanitized data with `express-mongo-sanitize`
- Secured headers with `helmet`
- Cross-site scripting prevented with `xss`
- Rate limited to **50 per minute** with `express-rate-limit`
- Parameter pollution prevented with `hpp`
- Allow CORS (for development) with `cors`
- Cookies used for auth token with CSRF protection with `csurf`

## Project Management

Taskaholic uses the product itself, GitHub Projects, this README for an "agile-like" project management environment.

The following projects are planned to get to v1.0:

- [ ] UI API Integration
- [ ] Desktop UI
- [ ] Responsive UI
- [ ] Docker Pipeline
- [ ] Business (email, analytics, etc.)
- [ ] QA

### Roadmap v1.0

**Business Logic:**

- [ ] CRUD Users
- [ ] CRUD Habits, Tasks, and Tags
- [ ] CRUD Time tracking
- [ ] Helpful Dashboard
- [ ] Fully responsive

**Application Logic:**

- [ ] CI/CD Pipeline with Docker & Kubernetes
- [ ] Fast lighthouse score
- [ ] Robust security
