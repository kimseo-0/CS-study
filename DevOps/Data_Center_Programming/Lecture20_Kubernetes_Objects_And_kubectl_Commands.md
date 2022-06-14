# Lecture 20 - Kubernetes Objects And kubectl Commands

## Today's Reading Articles

## Course
- What are Kubernetes objects?
- Use cases of Kubertnetes objects
- Spec & Status
- kubectl commands

### Kubernetes Objects
- Pods
- Namespaces
- ReplicationController
- DeploymentController
- StatefulSets
- DaemonSets
- Services
- ConfigMaps
- Volumes

### Record of Intent
- 요청된 desired state 를 만들고 유지 한다
- all objects have common metadata
- 각각의 object 들은 다양한 resource 들이 있고, 그 resource 들을 바탕으로 본인의 역할에 따라
create, update, delete, get 등의 작업을 수행한다.

### Why Kubernetes Objects?
- 실행할 container 베이스 애플리케이션 
- 필요한 resource
- 정책
Kubernetes 는 위 제공된 정보를 반영하여 요청한 것을 수행한다

### Why Kubernetes API?
To work with Kubernetes object
- use kubectl command-line interface
- user Kubernetes API: using one of the Client Libraries    
> https://kubernetes.io/docs/reference/using-api/client-libraries/

### Nested Object Fields
- Spec
    - Describes the "desired state" for the object
    - "Characteristics" that you want the object to have
- Status
    - Describes the "actual state" of the object
    - Supplied & updated by the Kubernetes system
    - "manages an object's actual state to match the desired state" you supplied

### Use Case of Spec & Status: Deployment
- object that can represent an application running on your cluster, 
클러스터 안에서 애플리케이션이 실행되는 것을 표현
- deployment 는 replicasets 을 가지고 있는 오브젝트(replicaset 보다 상위 개념)

- Use Cases
    - replicaset 으로 애플리케이션이 실행되는 것
    - N 개의 갯수를 유지하는 것
    - replicaset 자체를 업데이트, replicaset 안의 pod 업데이트
    - deployment 자체 제어 관리
    - 일부 서비스가 죽었을 때 다시 서비스를 실행하는 것 (replicaset 에서 했던 것)

- replicaset 대신 deployment 사용을 권장

#### Describing a Kubernetes Object
- yalm 파일을 통해 kubernetes 에 desired state 를 요청
- 동적으로 상황을 모니터링하면서 작업, 또는 주기적으로 특정 작업 수행
- yaml 파일을 통해 작업을 요청하는 것 기본

#### ReplicaSet to Deployment
- Kind: what kind of object you want to create (필수 수정 replicaset > deployment)
- Metadata: Data that helps uniquely identify the object, 
including a name string, UID, optional namespace

## Practice
### Deployment & Access from External
``` 
minikube start
kubectl apply -f simple-deployment.yaml --record

kubectl get deployments my-deployment
kubectl get deployments
kubectl describe deployments

# my-deployment 인 Pod 에 NodePort 로 구멍을 뚫어, 외부와의 통신
kubectl expose deployment my-deployment --type=NodePort --name=my-nodeport
kubectl get service my-nodeport # check Port number of NodePort(Port-X)
kubectl cluster-info            # check IP address of Kubernetes master (IP-X)
curl http://{IP-X}:{port-X}

kubectl get pods --output=wide
kubectl delete services my-nodeport
kubectl delete deployment my-deployment
kubectl get all

minikube stop
```

### Command Compare
- run
- ps
- attach
- exec
- logs
- rm
- version
- info
- More Commands   
https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands

## Reading Articles

