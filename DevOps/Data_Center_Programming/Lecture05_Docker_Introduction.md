# Lecture 05 - Docker Introduction

## Quick Review of Reading Articles

## Today's Reading Articles

## Course
### Docker
Container Technologies 중 하나이며,
다양한 OS 를 지원한다.

#### What is Docker?
- open platform : 거의 대부분의 플랫폼 위에서 사용 가능
- separate your applications from your infrastructure
    - deliver software quickly
    - os, cpu 등 infra 에 관계 없이 애플리케이션을 짤 수 있다.
- infrastructure as code : 애플리케이션에 필요한 OS, 필요한 모듈들을 
프로그래밍 하듯이 코드로 짜면 빠른시간 안에 자동화된 방법으로 동작
∴ 프로그램의 개발, 시험, 운영에 있어서 지연을 최소화 하고, 그 과정을 빠르게 하는 것을 목표로 한다.
(a.k.a DevOps)

#### Why user Docker
immutable infrastructure using 'Dockerfile'

Dockerfile >(build)> Docker Image >(run)> Docker Container

- Flexible : 매우 복잡한 애플리케이션 환경이라도 구축하고 실행 가능하다.
- Lightweight : host kernel 을 공유하기 때문에 가볍다.
- Interchangeable : deploy upgrade and downgrade 가 쉽다.

#### Docker terms
##### Docker Image
image is an executable package 
including everything needed to run an application

애플리케이션을 실행하기 위해서 필요한 모든 운영체제 확장, 라이브러리 등의 묶음

- code : 소프트웨어의 코드
- runtime
- environment variable : 환경 변수
- libraries
- configuration files

##### Docker Container
- container is a runtime instance of an image

이미지의 실제 실행 시켰을 때 개체, instance

- the image becomes a container in memory when executed

image 가 실행되면 container 가 되면서 실제 메모리를 점유한다.

- you can see a list of your running containers with the command, 
docker ps, just as you would in Linux.

리눅스 command 를 이용해서 실해중인 container 리스트를 확인할 수 있다.
즉, 리눅스 프로그래밍을 이용해서 docker 를 다룰 수 있다.

##### Dockerfile, Image, Container & CLIs

#### Sharing Immutable Infrastructures
많은 기업들, public cloud 를 지원하는 곳부터 on-premises 를 사용하는 곳까지
다양한 static image 를 만들어 registry 에 저장해 둠.

해당 image 를 다른 사용자들도 사용 가능하다.

- docker hub

#### Birds-Eye-View of Docker
`그림`

#### Install Ubuntu & Python3
docker run -it ubuntu bash

1. docker pull ubuntu
2. docker container run -it -d --rm --name ubuntuos ubuntu:latest
3. docker exec -it ubuntuos /bin/bash

- docker container ls
- docker image ls

- docker container stop ubuntuos
- docker image rm -f [Image Id]

### Trouble Shooting
- docker community forums
- docker github issues
- 한국 도커 사용자 그룹

## Reading Articles
- https://docs.docker.com/get-started/02_our_app/
- https://docs.docker.com/get-started/overview/