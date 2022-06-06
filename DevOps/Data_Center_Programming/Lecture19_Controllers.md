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

### ReplicaSet

### Set-based Requirement
### Equality-based Requirement

### Label based Selection Example
### ReplicaSet Example

### Service Distribution in ReplicaSet
#### Blue/Green
#### Rolling

### Service Distribution in Deployment (FFS)

### Practice

## Reading Articles

