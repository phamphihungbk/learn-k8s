up:
	kubectl apply -f nginx-deployment.yaml

check-deployment:
	kubectl get deployment

check-pods:
	kubectl get pods