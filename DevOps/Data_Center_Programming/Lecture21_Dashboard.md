# Lecture 21 - Dashboard

## Today's Reading Articles

## Course
- Monitoring and Management using Dashboard 

## Practice
### Activate Katacoda & Start Minikube
- Activate Katacoda
- Launch Minikube (minikube start)
- Open nano editor on Katacoda (sudo nano)
- Copy and Paste simple-deployment.yaml source code into nano editor
- Save as simple-deployment.yaml over Katacoda (cntl + O)

### Activate Dashboard
- Activate Dashboard over Katacoda
- Access Dashboard
- Select namespace as 'default'

### Apply Deployment
- Apply simple-deployment.yaml over Katacoda
- Refresh Dashboard

### Menu
#### Deployment
#### Pod
#### ReplicaSet
#### Workload
#### Cluster

### Expose IP address
- Execute through terminal
    - kubectl expose deployment my-deployment --port=80 --type=NodePort --name=my-services
    - kubectl get services my-services  # check mapped port number

- 내부 IP address : my-services
    - my-services 의 endpoint > IP address of Host
    - expose 한 port num > port num
    - Execute through terminal: curl http://{IP Address of Host}:80
- 외부 IP address : kubernetes
    - kubernetes 의 endpoint (cmd: kubectl cluster-info) > IP address of Host
    - my-services 에서 mapping 된 port > Mapped Port Number
    - Execute through terminal: curl http://{IP Address of Host}:{Mapped Port Number}

## Reading Articles

