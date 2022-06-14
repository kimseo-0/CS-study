# Lecture 24 - Scale and Rolling Updates

## Today's Reading Articles

## Course
- Scaling and application
- Rolling updates

### Scaling an Application
- 사용자의 요구 traffic 이 증가/감소 했을 때, 소프트웨어의 Pod의 갯수를 증가/감소
- 요구되는 number of replicas 에 따라 Pod 의 갯수를 증가/감소

### Rolling Updates
- service 의 IP address 는 변경 되지 않지만, 
내부의 각 Pod 의 IP address 는 각각 죽고 새로운 것이 생성 되므로, IP address 도 달라짐
- 한번에 모든 pod 이 변경 되는 것이 아니라, 하나씩 점진적으로 변경 되는 Update 방식

## Practice
### Setup Default State
``` 
minikube start
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
kubectl get deployments
```

### Scale-up Deployment to 4 Replicas
``` 
kubectl scale deployments/kubernetes-bootcamp --replicas=4
```

### Check Current State
```
kubectl get deployments
kubectl get all  
kubectl get pods -o wide
kubectl describe deployments/kubernetes-bootcam
kubectl describe pod/{Pod ID}

minikube ip # kubectl cluster-info
```

## Reading Articles

