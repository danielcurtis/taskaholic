echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin

docker build -t curtiscodes/taskaholic-frontend:latest -t curtiscodes/taskaholic-frontend:$SHA -f ./frontend/Dockerfile ./frontend
docker build -t curtiscodes/taskaholic-backend:latest -t curtiscodes/taskaholic-backend:$SHA -f ./backend/Dockerfile ./backend

docker push curtiscodes/taskaholic-frontend:latest
docker push curtiscodes/taskaholic-backend:latest
docker push curtiscodes/taskaholic-frontend:$SHA
docker push curtiscodes/taskaholic-backend:$SHA

kubectl apply -f k8s
kubectl set image deployments/taskaholic-backend-deployment backend=curtiscodes/taskaholic-backend:$SHA
kubectl set image deployments/taskaholic-frontend-deployment frontend=curtiscodes/taskaholic-frontend:$SHA