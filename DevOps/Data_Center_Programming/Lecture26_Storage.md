# Lecture 24 - Scale and Rolling Updates

## Today's Reading Articles

## Course
- What is a Volume?
- Why is it important to use a Volume?
- Types of Volumes
- Use cases of a Volume
- Practice
    - Stateful applications
    - Rolling update

### Why Storage?
- container 안에 있는 On-disk files 들은 container 의 수명이 끝나면 같이 사라짐(emphemeral)
- container 가 예상치 못하게 죽고 다시 새로 생기는 등의 일이 발생시,
 내부에 있던 files 들이 사라지는 일이 발생 > 데이터는 분리되어 저장되어야 한다
- pod 안의 container 들이 데이터를 공유 할 필요가 있을 때도 있음

1. Data persistency : can we keep data if a container dies?
2. Shared resources : can we share data between multiple containers?

### What is a Volume?
- volume is just a directory(container 에 접근 가능한)
- volume 의 타입을 결정 요소: directory, medium, contents
- Volumes serve the same purposes in both cases of Docker and Kubernetes 도커와 동일한 목적

> docker
> - volume
> - bind mount

### Types of Volumes
- azureDisk
- fiber channel
> SAN : storage 를 연결하는 네트워크

#### emptyDir
- pod 이 node 에 배정되어 creation 될 때 만들어지는 임시 저장공간,
- container 하나가 문제 생겨서 없어지더라도, pod 전체가 node 에서 없어지거나 흔들리지는 않는다. 
따라서, container 하나가 죽더라도 pod 안의 volume 인 emptyDir volume 은 살아있다.

- pod 가 생성되어 node 에 배정될 때 생성됨
- pod 과 수명이 동일
- empty 초기화
- pod 안의 모든 container 들이 동일한 file 에 대해서 read/write 가능
- pod 이 사라지면 함꼐 사라짐 

> - merge sort
> - crash 복구 계산
> - fetch webserver container serves the data

``` 
apiVersion: v1
kind: Pod
metadata:
    name: test-pd
spec:
    containers:
    - image: k8s.gcr.io/test-webserver
        name: test-container
        volumeMounts:
        - mountPath: /cache
            name: chache-volume
    volumes:
    - name: cache-volume
        emptyDir: {}
```

## Practice
### Deploy MySQL
``` 
kubectl create -f https://k8s.io/examples/application/mysql/mysql-pv.yaml
kubectl create -f https://k8s.io/examples/application/mysql/mysql-deployment.yaml
kubectl describe deployment mysql

kubectl get pods -l app=mysql
kubectl describe pvc mysql-pv-claim
```

### Accessing the MySQL Instance
``` 
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword
mysql> exit
kubectl delete deployment,svc mysql
kubectl get pods
kubectl delete pvc mysql-pv-claim
kubectl delete pv mysql-pv-volume 
```

### WordPress/MySQL with Persistent Volumes
``` 
kubectl create secret generic mysql-pass --from-literal=password=YOUR_PASSWORD
kubectl get secrets
```

``` 
kubectl create -f https://k8s.io/examples/application/wordpress/mysql-deployment.yaml
kubectl get pvc
kubectl get pods
```

``` 
kubectl create -f https://k8s.io/examples/application/wordpress/wordpress-deployment.yaml
kubectl get pvc
kubectl get services wordpress
minikube service wordpress --url
```

``` 
kubectl delete secret mysql-pass
kubectl delete deployment -l app=wordpress
kubectl delete service -l app=wordpress
kubectl delete pvc -l app=wordpress
```

## Reading Articles