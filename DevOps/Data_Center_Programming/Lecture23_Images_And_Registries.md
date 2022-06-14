# Lecture 23 - Images and Registries

## Today's Reading Articles

## Course
- Images
    - imagePullPolicy
    - :latest tag
- Private registries: Google, Amazon, Microsoft, IBM

### Images
- Same as a Docker image
- registry 에 push 한 image 들을 Kubernetes pod 에 사용 가능
- image 를 다루는 command 가 docker 와 비슷함
- private registries and tags 에 있는 image 도 사용 가능

#### Updating Images
docker 와 마찬가지로 IfNotPresent(현재 없는 image 일 경우 registry 에서 다운) 규칙을 따른다

> imagePullPolicy   
> imagePullPolicy: IfNotPresent - local 에 없는 image 만 pull
> imagePullPolicy: Always - 항상 pull
> imagePullPolicy: Never - 무조건 local 에서만 찾음, pull x

#### Why You Should Avoid :latest tag
- latest 코드의 버전이 변경될 수 있어, version tracking 에 문제가 생길 수 있다.
- 여러 버전이 혼용될 가능성 있음
- 현재 정확히 어떤 버전을 사용 중인지 추가로 알아 내야함 
- immutable 하게 고정된 version 의 image 를 사용 권장

### Private Registries
#### Amazon Elastic Container Registry (ECR)
#### Microsoft Azure Container Registry
#### IBM Cloud Container Registry
#### Google Container Registry
#### Google Cloud Platform (GCP Repository)
#### Google Kubernetes Engine (GKE)

## Practice
### Create and run a particular image from a private registry
``` 
minikube start
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
kubectl get pods
kubectl describe pods
```

### Execute commands directly on the container once the Pod is up and running
``` 
kubectl logs {Pod ID}
kubectl exec {Pod ID} env       # 환경 정보 출력
kubectl exec -it {Pod ID} bash
cat server.js
curl http://localhost:8080
exit
```

### Expose Kubernetes applications outside the cluster
``` 
kubectl get services
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
kubectl get services
kubectl describe service/kubernetes-bootcamp
kubectl get all
kubectl cluster-info
curl {Kubernetes master IP}:{NodePort Port}
```

### View and Apply Labels to Objects
``` 
kubectl label pod {Pod ID} Release=v1
kubectl describe pods {Pod ID}
kubectl get pods -l Release=v1
kubectl get pods -l Release=v2

kubectl delete deployment kubernetes-bootcamp
```

## Reading Articles

