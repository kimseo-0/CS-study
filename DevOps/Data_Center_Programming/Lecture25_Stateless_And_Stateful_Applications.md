# Lecture 24 - Scale and Rolling Updates

## Today's Reading Articles

## Course
- Stateless application
- Stateful application

### Stateless Application
- client 가 요청을 해왔을 때, 기존의 데이터를 바탕으로 판단하지 않음
- 과거의 memory 가 없음
- 현재 온 요청이 처음 온 요청인 것으로 판단하고, 동작

### Stateful application
- client 로부터 요청이 들어오면 해당 client data 를 저장하고, 다음 요청에 활용
- 과거의 memory 가 있음
- 과거에 발생했던 일, transaction 이 어떠한 상태로 남아서, 현재 요청에 대한 답, transaction 에 영향을 미침

> memory : volume, storage, computer memory

## Practice: Stateless Application Case1
Nginx > 대표적인 stateless application

stateless application 은 새로운 버전으로 업데이트하거나, rolling back 하거나 
과거의 정보, 과거의 요청과 전혀 관계 없이 지금 결정

### Creating a Nginx Deployment
- deployment.yaml
``` 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
            image: nginx:1.7.9
            ports:  
              - containerPort: 80
```

``` 
minikube start
kubectl apply -f https://k8s.io/exaples/application/deployment.yaml
kubectl describe deployment nginx-deployment
kubectl get pods -l app=nginx
kubectl describe pod <pod-name>
```

### Updating and Scaling the Deployment
- deployment-update.yaml
``` 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
            image: nginx:1.8    # Update
            ports:  
              - containerPort: 80
```

``` 
kubectl apply -f https://k8s.io/examples/application/deployment-update.yaml
kubectl get pods -l app=nginx
```

- deployment-scale.yaml
``` 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx-deployment
spec:
  replicas: 4   # Update
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
            image: nginx:1.8    
            ports:  
              - containerPort: 80
```

``` 
kubectl apply -f https://k8s.io/examples/application/deployment-scale.yaml
kubectl get pods -l app=nginx

kubectl delete deployment nginx-deployment
```

## Practice: Stateless Application Case2
### Run Five Instances
``` 
kubectl run hello-world --replicas=5 --labels="run=load-balancer-example" --image=gcr.io/google-samples/node-hello:1.0 --port=8080
kubectl get deployments hello-world
kubectl describe deployments hello-world
kubectl get replicasets
kubectl describe replicasets
```

### Create a Service Object with Exposed IP: LoadBalancer
```
kubectl expose deployment hello-world --type=LoadBalancer --name=my-service
kubectl get services my-service
kubectl describe services my-service
```

### Service Object for the Running Application
``` 
minikube service my-service     # Externel IP:Port
```

``` 
kubectl delete services my-service
kubectl delete deployment hello-world
```

### Creating 

## Reading Articles