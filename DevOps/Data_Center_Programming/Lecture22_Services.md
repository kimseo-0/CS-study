# Lecture 22 - Services

## Today's Reading Articles
abstract way to expose an application running on a set of Pods as a "network" service

## Course
- What are Services in Kubernetes?
- Why is it important to use Services?

### Pods
- mortal
- when they die, they are not resurrected
- while each Pod gets its own IP address, 
even those IP addresses cannot be relied upon to be stable over time, 
IP address 는 게속 변경될 수 있음

> How do those frontends find out and keep track of which backends are in that set?

### Services
- logical set of Pods(Pod 들의 논리적 집합) and 
Policy by which to access them(Pod 들에 접속 규칙)
- defined using YAML
- LabelSelector 를 사용 Service 에서 지정한 
특정한 Pod 들의 집합에 특정한 작업을 수행 한다

- Pod 들이 가지고 있는 unique IP address 들은 cluster 외부와 통신할 수 없다.
- Services 가 application 에 traffic 을 받도록 한다.
- different ways by specifying a type in the "ServiceSpec"

### ServiceSpec
- 네트워크, 여러개의 Pod 을 연결

- ClusterIP service (local)
    - default Kuberntetes service
    - cluster 내부에서 동작하는 service, cluster 내부에서만 접속 가능
    - external 외부 접속 불가

- NodePort service (lcal and VM)
    - way to get external traffic directly to your service, 
    외부에서 서비스에 접속 가능
    - 외부에서 접속할 port 설정
    - 외부에서 접속한 모든 traffic 은 해당 port 로 전송

- LoadBalancer service (not works in local env): 나중에 더 나옴
    - 받은 traffic 을 어떤 식으로 pod 들에 잘 나누어 줄 것인가
    - It is the standard way to expose a service to the internet
    - GKE

- Ingress: 나중에 더 나옴
    - service 는 아님
    - 여러 가지 서비스 제공
        - act as a "smart router"
        - entrypoint into your cluster

#### Services, Pods, Replicas
`그림`

### Practice
#### ReplicaSet Manifest
``` 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eva-west
  labels:
    app: eva
    release: west
spec:
  replicas: 2
  selector:
    matchLabels:
      app: eva
      release: west
  template:
    metadata:
      labels:
        app: eva
        release: west
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
        - name: redis
          image: redis
          volumemounts:
            - name: redis-storage
              mountPath: /data/redis
      volumes:
        - name: redis-storage
          emptyDir: {}
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eva-east
  labels:
    app: eva
    release: east
spec:
  replicas: 2
  selector:
    matchLabels:
      app: eva
      release: east
  template:
    metadata:
      labels:
        app: eva
        release: east
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
        - name: redis
          image: redis
          volumemounts:
            - name: redis-storage
              mountPath: /data/redis
      volumes:
        - name: redis-storage
          emptyDir: {}
```

#### Service Manifest
```
apiVersion: v1
kind: Service
metadata:
  name: eva
spec:
  type: NodePort
  selector:
    app: eva
    release: west
  ports:
    - name: http
      port: 80
```

#### Apply multiple ReplicaSet manifest
``` 
minikube start
kubectl apply -f two-replicas-with-label.yaml
kubectl get pod -l app=eva
kubectl get pod -l app=eva -l release=west
kubectl get pod -l app=eva -l release=east
kubectl get all
```

#### Apply simple Service (NodePort) manifest
```
kubectl apply -f simple-service.yaml
kubectl get service eva
kubectl get all
```

#### Access Nginx through NodePort
``` 
kubectl cluster-info    # check IP address of Kubernetes master
kubectl get all         # check Port mapping of eva's NodePort
curl http://{Master IP address}:{NodePort Number}
```

#### Access Nginx through temporal container
``` 
kubectl run -i --rm --tty debug \
--image=alpine:latest --restart=Never -- ash -il

apk add curl
curl http://eva/
```

#### Check Nginx log for labelled service
``` 
kubectl logs -f {Pod ID} nginx
```

#### Cleanup Kubernets
``` 
kubectl delete -f simple-service.yaml
kubectl delete -f two-replicas-with-label.yaml
kubectl delete pods, services --all=true
minikube stop
```

## Reading Articles

