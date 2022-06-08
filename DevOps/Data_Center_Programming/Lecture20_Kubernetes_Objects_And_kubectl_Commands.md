# Lecture 19 - Kubernetes Objects And kubectl Commands

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
- object that can represent an application running on your cluster


#### Describing a Kubernetes Object
#### ReplicaSt to Deployment
#### Deployment & Access from External

## Reading Articles

