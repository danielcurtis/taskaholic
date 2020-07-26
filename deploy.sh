docker build -t curtiscodes/taskaholic-frontend:latest -t curtiscodes/taskaholic-frontend:$SHA -f ./frontend/Dockerfile ./frontend
docker build -t curtiscodes/taskaholic-backend:latest -t curtiscodes/taskaholic-backend:$SHA -f ./backend/Dockerfile ./backend

docker push curtiscodes/frontend:latest
docker push curtiscodes/backend:latest
docker push curtiscodes/frontend:$SHA
docker push curtiscodes/backend:$SHA

kubectl apply -f k8s
kubectl set image deployments/backend-deployment backend=curtiscodes/taskaholic-backend:$SHA
kubectl set image deployments/frontend-deployment frontend=curtiscodes/taskaholic-frontend:$SHA