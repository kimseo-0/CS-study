# Lecture 13 - Docker Swarm

## Today's Reading Articles

## Course
- Swarm
- Docker Swarm
- Orchestration
- Container Orchestration
- Docker Swarm Installation
- Practice

- Scale service up & down
- Update service

### Swarm
> 사전적 정의 : 떼, 군단 많은 구성 요소들이 하나로 무리 지어 있는 것 ex) 새 떼, 물고기 떼

### Docker Swarm (Swarm v2, Swarm mode)
도커 컨테이너 들을 하나로 유기적으로 관리할 수 있는 방법

하나의 애플리케이션에는 여러 서비스들이 있고, 
해당 서비스들에 대응하는 이미지와
그 이미지에 대응하는 많은 컨테이너들이 있다.

Swarm v2, Swarm mode 를 통해서,
복수의 머신, 복수의 컨테이너가 있더라도 하나의 컴퓨터에서 모두 통제가 가능하다는 점은 그대로 유지채,
많은 서비스, 이미지, 컨테이너 들을 편하게 관리할 수 있다.

#### Docker makes a Single Virtual System
docker-compose 를 통해 yml 파일을 CLI 를 통해 나의 컴퓨터에서 뿌리면,
swarm 을 통해 서비스와 컨테이너로 분화 되어 퍼져나감.

docker-machine 을 통해서 원격의 컴퓨터까지 관리하며,
swarm 은 원격의 컴퓨터, 노드 이상으로 그 위에서 돌아가는 서비스와 컨테이너를 관리하리할 수 있게 한다.

### Orchestrator
docker-machine 으로 확보한 노드들 위에 원하는 서비스, 컨테이너를 쉽고 자동화된 방법으로 구성할 수 있게 한다.

#### Container Orchestration basic
- automate, 자동화하는 것이다. 
yml 파일을 통해서 수천 수만개의 컴퓨터에서 수천 수만개의 컨테이너를 띄우고,
노드들 간의 로드 밸런싱 관계, 용량이 부족하면 키워주는것, 죽은 컨테이너를 살리는 것, 네트워킹을 관리하는 것 등을
자동화 한다.

- simplifies workloads
    - users don't have to deal with mechanical tasks anymore
    - interacts with more containers' groups at the same time
    - plans and implements a container register
    - provides network, storage, security and other services

service
- Khubernetes
- Docker Swarm
- Apache Mesos

#### Container Orchestration basic
2009   
Mesos 가 나왔지만 컨테이너가 활성화 되어있지 않았음 

이후 Docker 가 나오면서 컨테이너 시장이 활발화

2015   
구글에서 도커 오케스트레이션 소프트웨어 Khubernetes 를 개발

한편 도커측에서도 오케스트레이션 소프트웨어인 Docker Swarm 을 개발

하지만 구글이 사용 소프트웨어를 위해 개발한 Khubernetes 에 비해
Docker Swarm 에 자동화 기능이 부족했음

2017   
도커에서 Khubernetes, Docker Swarm 모두 지원함

프러덕트, 사용서비스는 대부분 쿠버네티스 사용

#### Swarm Basic
- 복수, 여러대의 컴퓨터, 노드 위에서 컨테이너(as a single service)를 띄우는 것
- group of machines 위에서 docker swarm 으로 컨테이너를 동작시키고, 관리
- multiple Docker hosts
    - manager : yml 파일을 확보하고 그에 따라 이미지 별로 컨테이너를 띄우는 worker 을 제어
    - workers (nodes) : run swarm services

#### Service over Docker Swarm
- 3 nginx 를 띄우라는 명령을 받은 swarm manager
- 명령에 따라 각 노드에 컨테이너를 띄우도록 workers 에게 명령을 내림

- Task : running container which is part of a swarm service and managed by a swarm manager
- Node : an instance of the Docker engine participating in the swarm
    - Manager nodes: dispatches units of work called tasks to worker nodes
    - Worker nodes: receive & execute tasks dispatched from manager nodes

1. 노드 확보
2. 실제 서비스를 돌림

### Practice
- node 들을 swarm 으로 묶고, leader 와 worker 의 관계로 만들었음
- swarm 을 통해서 YAML file(Stack file) 로 서비스 관리 즉, 컨테이너들 관리

#### Create Docker Machines
``` 
docker-machine create --driver virtualbox manager
docker-machine create --driver virtualbox worker1
docker-machine create --driver virtualbox worker2
```

``` 
docker-machine create manager --virtualbox-no-vtx-check
docker-machine create worker1 --virtualbox-no-vtx-check
docker-machine create worker2 --virtualbox-no-vtx-check
```

#### Check Docker Machines
``` 
docker-machine ls
docker-machine ip manager
docker-machine ip worker1
docker-machine ip worker2
docker-machine ssh manager
docker-machine ssh worker1
docker-machine ssh worker2
```

#### Define Manager Node
- Docker Swarm initialization at Manger Machine
``` 
docker-machine ssh {manager name} \
docker swarm init --advertise-addr {manager ip}

// initialize a swarm
// Docker engine targeted by this command becomes a manager in the newly created single-node swarm
```
- save printed command (with token)
화면에 나오는 토큰 전체 저장
> docker swarm join --token {token}

>> docker swarm join --token SWMTKN-1-3gjf7rzagffqhqupjokutuama2e6tknk9hybdaogpng4urk3jk-9fu7wvx6mkhybl6rko46g6aiu 192.168.99.107:2377

#### docker Node Management by Manager
docker node 는 swarm node 들을 관리하기 위한 명령어
``` 
docker-machine ssh manager \
docker node --help

docker-machine ssh manager \
docker node ls
// 매니저가 관리하는 swarm 의 swarm node 들을 보여주는 명령어 
```

#### Define Worker Node
``` 
docker-machine ssh {worker name} \
docker swarm join --token <token> <manager ip>:2377 // 매니저 생성시 저장했던 토큰 정보 사용
```

#### Docker Stack
- swarm 은 자동적으로 소프트웨어가 실행되도록 컨테이너의 생애와 상태를 관리한다.
- 모든 image 와 container 에 대한 정보가 들어 있는 docker compose YAML file 을 stack file 이라고 부른다.

#### Task Deployment
> 아래 코드들이 터미널, cmd 에서는 에러가 나는 경우가 있음 git bash 로 진행할 것
- step 1: Create docker-compose.yml
```
version: "3.7"
services:
  webserver:
    image: nginx:latest
    deploy:
      replicas: 4
      placement:
        constraints: [node.role != manager]
      ports:
        - 8080:80
```

- step2: Copy docker-compose.yml into manager
> 반드시 git bash 로 진행할 것
``` 
docker-machine scp docker-compose.yml manager:~
```

> scp : local 에서 machine 으로 machine 에서 machine 으로 파일들을 복사할 수 있다.

- lost connection 에러가 난다. > VM 의 포트포워딩을 해줘야한다.   

> Virtual Box의 manager 설정 > 네트워크 > 고급 > 포트 포워딩
> 
> |name|Host IP|Host Port|Guest IP|Guest Port|
> |---|---|---|---|---|
> |scp| 127.0.0.1 | 22 |    | 22|
> |ssh| 127.0.0.1 |    |    | 22|

> - https://tamguan.tistory.com/17
> - https://www.leafcats.com/189

> scp password : tcuser

- step3: Deploy application stack through manager
``` 
docker-machine ssh manager \
docker stack deploy -c docker-compose.yml helloswarm
```
- step4: Check stack deployment status
``` 
docker-machine ssh manager \
docker stack ls
```

#### Task Monitoring (through manager)
``` 
// 돌리고 있는 서비스 리스트
docker service ls

// helloswarm에서 파생된 서비스의 프로세스 상태
docker service ps helloswarm_webserver
```
> 여러 개의 노드에 하나의 서비스를 여러 컨테이너로 띄울때,
> 자동으로 균등하게 분배되는, 로드 밸런싱 되는 것이 기본 옵션이다.

#### Task Release 
``` 
docker-macine ssh manager \
docker stack rm helloswarm
```

#### Release Worker Nodes
``` 
docker-machine ssh {worker name} \
docker swarm leave
```

#### Release Manager Node
``` 
docker-machine ssh {manager name} \
docker swarm leave --force
```

#### Remove Docker Machines
``` 
docker-machine stop
docker-machine rm
```

### Replicas with Auto-Load-Balancing
### Manual Scale Up & Down
``` 
docker service create --replicas 3 -p 80:80 --name web-1 nginx
docker service ls
docker service ps web-1
docker-machine ls

docker service scale web-1 = 4
docker service ls
docker service ps web-1
docker ps
docker service scale web-1=5
docker ps
docker sebice scale web-1=2
```
### Service Update
``` 
docker service update --image nginx:1.14.0 web-1
```

## Reading Articles
