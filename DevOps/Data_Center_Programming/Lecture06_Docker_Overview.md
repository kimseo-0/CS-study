# Lecture 05 - Docker Introduction

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

#### Underlying Technologies
#### Namespaces
#### Control Groups

### Docker Commands

### Docker Practice
#### Installation
#### Test-Drive : Hello World
#### Test-Drive : install Ubuntu

## Reading Articles