# Lecture 18 - Nodes And Pods

## Today's Reading Articles
- Nodes : docker machine 과 같은 역할
- Pods : container 보다 상위의 개념

## Course
- Basic Objects in k8s
    - Node
    - Cluster
    - Container
    - Pod
    - Deployment
    - Ingress

### Container
프로그램, 프로그램에 필요한 데이터베이스, 환경 변수 들을 하나의 container 로 묶어
image 로 만들어 사용 

### Pod
container 보다 상위의 개념, container 들의 묶음 (의미적, 개념적 묶음)

ex) 웹 프로그램을 프론트, 백, 데이터 크게 세 가지로 나눈다면 
실제로 각각을 더 작게 쪼개 여러 개의 컨테이너로 만든다.
개념적으로 같은 의미(프론트, 백, 데이터)를 가지고 있는 컨테이너를 묶음을 하나의 pod 로 칭한다.

- Kubernetes 에서 가장 기본적인 단위, the smallest and simplest unit
- Pod 들은 Cluster 위에서 실행된다.
- Pod 안에는 container, storage, unique network IP 포함 된다.

### Pods Networking
- 각각의 pod 은 unique IP address 를 가진다.
한 pod 안의 container 은 하나의 네트워크 namespace(IP and network port 포함) 를 공유한다.
- 하나의 pod 안의 container 들은 locahost 를 통해 통신이 가능
(각각의 container 들에 각각 localhost 의 port num 을 주어 서로 통신 )
- 하나의 pod 안의 container 들은 IP address 를

### Node
service 를 실행하는 machine
- Kubernetes 에서의 worker machine 으로 VM 또는 physical machine
- 각각의 node 위에서 service(pod 들의 집합) 를 실행

### Cluster
Node 들의 집합
- 컨테이너화 된 애플리케이션을 띄울 기반이 된다.
- 일반적으로 pod 이나 node 가 직접적으로 public inernet 에 접속하는 것은 일반적이지 않다
- cluster master 는 모든 cluster 내부의 nodes 들의 실행에 대한 결정을 내린다
    - scheduling workloads
    - managing the workloads' lifecycle, scaling, and upgrades

### Deployment
docker compose 역할
- desired state : 희망하는(요청하는, 명령 x) 인프라 상태
- Kubernetes 는 해당 상태를 만들고, 유지 한다.
- 프로그래머는 Deployment 로 Kubernetes 에 desired state 를 전달 한다.
- Deployment Controller 는 Kubernetes 가 
actual state 에서 desired state 로 도달 하고, 유지 하게 한다. 

### Ingress
- manage external access to the services in a cluster(외부와 통신)
    - load balancing
    - SSL(security 를 지원 하는 계층, 암호화/복호화 통신) termination(입구),
    - name-based virtual hosting

### Practice
#### Quick View on Katacoda Virtual Machine
``` 
lshw                // Linux에서 상세한 하드웨어 정보 출력해주는 명령어
df -h               // 파일시스템 별로 전체공간, 사용중인 공간  그리고 여유공간 정보
                    // -h : human readable
cat /etc/os-release // 리눅스에서 OS 정보 확인
hostnamectl         // 시스템의 호스트명, 샤시, Machine ID, Boot ID, 가상화, 커널 버전 등의 정보를 출력
uname               // displays the information about the system.
uname --help        //
uname --all         //
```

#### Activate Minikube over Katacoda
``` 
minikube version
minikube start --wait=false
kubectl version
kubectl cluster-info
kubectl get nodes
kubectl get all
```

#### Create Example HTTP Service Deployment
```
kubectl create deployment first-deployment --image=katacoda/docker-http-server

kubectl get pods
kubectl get events
kubectl config view
kubectl get all
```

#### Expose HTTP Service to External Network
```
kubectl expose deployment first-deployment --port=80 --type=NodePort -- name=my-services
```

#### Verify Expose HTTP Service Port Number
``` 
kubectl get services my-services

export PORT=$(kubectl get svc first-deplyment -ogo-template='{{range.spec.ports}}{{if .nodePort}}{{,nodePort}}{{"\n"}}{{end}}{{end}}')
echo "Accessing host01:$PORT"
curl host01:$PORT

kubectl get all
```

#### Access HTTP Service Deployment
1. Press '+'
2. Press "Select port to view on Host 1"
3. Type port number at $PORT
4. Press "Display Port"

#### Activate Dashboard
1. Press '+'
2. Press "Open New Terminal"
``` 
minikube addons enable dashboard
kubectl apply -f /opt/kubernetes-dashboard.yaml
kubectl get pods -n kube-system -w
```

#### Access Dashboard
Select tap "Dashboard" or 
https://{CHECK-YOUR-DOMAIN at Step 4}.environments.katacoda.com/

#### Remove All
check status through dashboard
```
kubectl delete service my-services
kubectl delete service first-deployment
kubectl delete deployment first-deployment
kubectl delete -f /opt/kubernetes-dashboard.yaml
kubectl get all
minikube stop
```

#### Kubernetes Installation
``` 
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.4.0/aio/deploy/recommended.yaml
kubectl proxy
```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
접속

## Reading Articles

