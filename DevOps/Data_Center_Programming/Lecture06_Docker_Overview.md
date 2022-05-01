# Lecture 06 - Docker Overview

## Quick Review of Reading Articles

## Today's Reading Articles

## Course
- Docker Overview
- Basic Command
- Practice

### Docker Overview
#### Docker Editions
- Community Edition

Individual developers & small teams

- Enterprise Edition

for enterprise development & IT teams, run business critical application

#### Docker Engine
- core work of Docker : 
    - Building, running, distributing containers
- manage container 
    - container 의 lifecycle managing
- running as a background service of daemon on the host

`그림`
- container/image
- network : 여러 container 간의 통신
- data volumes : container 에서 사용하는 데이터

- server - docker daemon : 
background server
    - build image
    - run container
    - etc...
- client - docker CLI : 
command 를 통해서 docker daemon 에게 REST API 를 통해 요청

#### Docker Daemon
- listen for Docker API request and manages Docker objects   
    - 다른 daemon 이나 cli 에서 API 를 통해 들어오는 요청을 듣고 있는다
    - image, container, network, volume 를 다루는 작업
- communicate with other daemons to manage Docker services   
    - 다른 daemon 과 통신이 가능
    
#### Docker Client
- Docker engine 에 instructions 을 주기 위해 command line interface(CLI) 를 사용한다.
- Docker engine 에게 container 작업을 수행하기 위한 요청을 한다.
- docker command uses the Docker API : docker command 와 API 가 mapping 됨
- Docker client 는 하나 이상의 Docker daemon 과 토신 가능하다

> web 의 client-server architecture 와 유사하다

#### Docker Architecture

#### Docker Registries
- Docker image 저장

- public registry
    - 누구나 사용 가능 : 공개
    - Docker Hub & Docker Cloud : 외부에서 image 저장, 가져오기
- private registry
    - 비공개
    - 내부 registry
    - Docker Trusted Registry (DTR) ?

- Docker 에서 기본적으로 image 를 Docker Hub 에서 찾는다
> 설정을 통해 다른 외부 register 에서도 image 를 가져올 수도 있다.

- 요청된 image 를 configured registry 에서 pull 한다
    - docker pull
    - docker run
- image 를 configured registry 에 push 한다
    - docker push

#### Docker Ecosystem
##### Development
##### Production

> VM 기법을 사용할 경우 CPU 코어를 사용해야 하기 때문에 코어의 갯수보다 많은 VM 을 띄울 수 없지만,
> 컨테이너는 현재 cpu 가 견디고 컨테이너가 요구하는 부하가 현재 컴퓨터의 남은 영역으로 충분할 경우
> cpu 의 갯수와 관계 없이 컨테이너를 쌓을 수 있다.

#### Underlying Technologies
- written in Go language
- take advantages of features of the Linux kernel
    - Namespaces
    - Control groups
    - union file systems
    - container format

##### Namespaces
멀티유저가 동시에 사용할 수 있는 운영체제 한대의 컴퓨터를 여러명이 동시에 사용하기 때문에,
동시에 사용하는 사람들끼리 침범하지 않도록 하는 기술

- 컨테이너에 독립적인 workspace 를 제공하기 위해 사용한다
- 각각의 컨테이너는 분리된 namespace 안에서 실행되고, 
해당 namespace 안에서만 접근할 수 있도록 제한되어있다.

##### Control Groups
- resource management
- 하나의 하드웨어를 여러개의 container 가 공유하기 때문에,
컴퓨터 자원을 할당해서 할당한 만큼만 사용하도록 관리한다.
ex) 각각의 메모리를 얼마나 사용할 것인지 나눌 수 있다. 

### Docker Commands
#### Get started 1
```
## List Docker CLI commands
docker
docker container --help # container 에 대한 설명들만

## Display Docker version 
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all # 멈춰있는 container 들 까지 보여줌
docker container ls -aq
```

#### Get started 2
```
docker build -t friendlyhello .                # create image using this direcctory's Dockerfile
docker run -p 4000:80 friendlyhello
docker run -d -p 4000:80 friendlyhello         # -d : in detacked mode

docker container stop <hash>
docker container kill <hash>
docker container rm <hash>
docker container rm $(docker image ls -a -q)    # 모든 container 삭제

docker image rm <image id>
docker image rm $(docker image ls -a -q)        # 모든 image 삭제

docker login                                    # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag      # Tag <image> for upload to registry
docker push username/repository:tag             # Upload tagged image to registry
docker run username/repository:tag

```

### Docker Practice
#### Installation
#### Test-Drive : Hello World
```
docker run hello-world
```

#### Test-Drive : install Ubuntu
```commandline
docker pull ubuntu
docker container run -it -d -rm --name ubuntuos ubuntu:latest
docker exec -it ubuntuos /bin/bash
```

#### Test-Drive : install alpine
```commandline
docker pull alpine
docker container runt -it -d --rm --name alpineos apline:latest
docker exec -it alpineos /bin/bash
```

> lecture 5 에서 이미 수행함

## Reading Articles
- Docker Hub
- Best practices for writing Dockerfiles
