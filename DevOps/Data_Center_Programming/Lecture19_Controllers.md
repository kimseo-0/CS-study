# Lecture 19 - Controllers

## Today's Reading Articles

## Course
- What is the Controller?
- What are Labels & Selectors?

### Controllers
- 상용 서비스에서 사용하려고 만들어 졌으며
- 사람의 개입을 최소화 하고 자동화 한다
- 내부의 많은 응용 프로그램을 통해 운영자가 요구한 환경을 최대한 제공 하고,
그러한 기능들을 운영자가 입력하지 않아도 알아서 자동으로 해준다

- desired state = observed state 를 보장하기 위해 routine task 를 수행한다.

### Pod Concept
의미 있는 한 덩이, container 들의 묶음

### Label
Labels are key/value pairs that are attached to objects, such as pods

- to organize and to select subsets of objects(명령을 내리고 싶은 특정 집합 선택) 
- object 가 생성될 때, 또는 언제든 label 을 추가 하고 수정 가능 in Kubernetes
- key/value 로 정의
- key 는 unique

#### simple-pod.ymal
``` 
apiVersion: v1
kind: Pod
metadata:
    name: my-little-pod
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

#### Pods Selection using Label in Service
- Kubernetes Pods are mortal(수명이 존재), pods 들은 죽을 수 있다.
    - replica : 3 > 3개의 pod 은 유지, 하지만 각각의 pod 은 죽고 새로 생기는 등 다른 pod 으로 바뀔 수 있음
    - pod 이 죽고 새로운 pod 이 생겨 바뀐다는 것은 각각의 pod 가지고 있는 IP address 도 바뀐다는 것 
        - 특정 pod 을 지칭할 때, IP address  가 아닌 label 을 사용해야함   

### ReplicaSet
- Purpose of ReplicaSet
    - to maintain stable set of replica Pods running at any given time
    - to guarantee the availability of a specified number of identical Pods
        - creation, monitoring 을 통해 특정 pod 을 특정 갯수 만큼 실행 되도록 유지 한다.
- ReplicaSet is defined with fields
    - "selector specifying" how to identify Pods(요청이 없을 경우 랜덤으로)
    - "number of replicas" indicating how many pods it should be maintaining(desired number)
    - "pod template" specifying the data of new Pods it should create to meet the number of replicas criteria (추가로 필요한 조건들)zzz

#### Label
##### Set-based Requirement
- filtering keys according to a set of values
- selector is general form of equality
- example
``` 
key in (value)
environment in (production, qa)
tier notin (frontend, backend)
partition
!partition
```

##### Equality-based Requirement
- filtering by label keys and values
- =, ==, !=
- example
``` 
environment = production
tier != frontend
```

##### Label based Selection Example
``` 
kubectl get pods -l environment=production, tier=frontend
kubectl get pods -l 'environment in (production), tier in (frontend)'
kubectl get pods -l 'environment in (production, qa)'
kubectl get pods -l 'environment, environment notin (frontend)'
```

#### ReplicaSet Example : simple-replicaset.yaml
``` 
apiVersion: apps/v1
kind: ReplicaSet
metadata:
    name: my-replicaset
    labels:
        app: my-replicaset
spec:
    replicas: 3
    selector:
        matchLabels:
            app: my-little-pod
    template:
        metadata:
            labels:
                app: my-little-pod
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

### Service Distribution in ReplicaSet
#### Blue/Green
한번에 모든 pods 를 변경
`그림`

#### Rolling
점진적으로 pod 하나씩 변경
`그림`

### Service Distribution in Deployment (FFS)
`그림`

### Practice
#### Apply my-little-pod
``` 
minikube start
kubectl get all
kubectl apply -f simple-pod.yaml
kubectl get all
kubectl exec -it my-little-pod sh -c nginx 
// 명령을 하나 실행할때, 여기서는 sh 하나
// -c <name> 특정 name 의 container
kubectl exec -it my-little-pod -c redis -- redis-server --version   
/ 명령을 여러개 실행할때, 여기서는 -- 뒤에 redis-server --version
kubectl delete -f simple-pod.yaml
kubectl get all
minikube stop
```

#### Apply my-replicaset
```
minikube start
kubectl get all
kubectl apply -f simple-replicaset.yaml
kubectl get all

kubectl get rs // Get the current ReplicaSets deployed
kubectl describe rs/my-replicaset // Check on the state of the ReplicaSet

kubectl get pods // Get Pod information
kubectl get pods my-replicaset-{OBJECT ID} -o yaml // Get the yaml of a Pod

kubectl exec -it my-replicaset-{OBJECT ID} sh -c nginx
kubectl exec -it my-replicaset-{OBJECT ID} -c redis -- redis-server --version 

kubectl delete pod my-replicaset-{OBJECT ID}
kubectl get all

kubectl get pod,replicaset,deployment --selector app=my-little-pod
kubectl get pod,replicaset,deployment --selector app=my-replicaset
kubectl delete -f simple-replicaset.yaml
kubectl get all
minikube stop
```


## Reading Articles

