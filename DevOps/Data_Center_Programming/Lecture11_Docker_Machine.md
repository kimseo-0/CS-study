# Lecture 11 - Docker Machine

## Today's Reading Articles

## Course
- What is Docker Machine
- Use cases of Docker Machine
- What is the difference between Docker Engine and Docker Machine?
- Practice

### Background
한대의 컴퓨터에서 돌아가던 docker container 를 
여러 대의 컴퓨터에서 돌아가도록 하자(하나의 서비스, 앱을 위해서)

### What is Docker Machine?
Docker Machine 을 통해
- 내 컴퓨터 위에 컨테이너를 띄우는 작업을 하는 것 처럼,
도커와 도커 머신이 설치되어있는 다른 컴퓨터에도 마치 내 컴퓨터처럼 원격으로 똑같은 작업이 가능하다.
- 가상 또는 물리적인 다른 컴퓨터에 도커를 설치할 수 있다.
- 어떠한 환경의 컴퓨터든 관계 없음 (ex_ AWS, Azure...)

docker-machine command 를 활용하여
- start, inspect, stop, restart a managed host, 원격의 호스트를 시작하고, 죽이고, 재시작하기
- upgrade the Docker client & daemon
- configure a Docker client to talk to your host

### Use cases of Docker Machine
지금까지는 한대의 컴퓨터에서 도커를 실행하는 작업을 했음,
이제는 Docker Mahine 을 활용하여 여러대의 컴퓨터를 
하나의 컴퓨터만으로 원격으로 manage 하고, 도커 작업을 할 것이다.

### Docker Engine again
Client: docker CLI - REST API - Server: docker daemon

docker CLI 에서 command 요쳥하면, 
REST API 통신을 통해 server 의 docker daemon 에 접속하여 해당 요청을 수행한다.

#### Docker Machine to Docker Engine
한 컴퓨터에 설치된 docker CLI 에서
REST API 통신을 통해
다른 컴퓨터에 설치된 server docker daemon 에 접속하여 해당 요청을 수행할 수 있다.

### Practice
#### Basic Docker Machine Commands
``` 
// help
docker-machine --help

// version check
docker-machine --version
docker-machine version

// list docekr machines
docekr-machine ls
```

#### Create & Start Docker Machine
``` 
// virtual box 를 드라이브로 하는 가상 호스트 생성
docker-machine create --driver virtualbox [myvm1]

// bios 비활성화 상태로 수행하는 방법
docker-machine create default --virtualbox-no-vtx-check
```

#### Stop & Remove Docker Machine
``` 
docker-machine stop [myvm1]
docker-machine restart [myvm1]
docker-machine rm [myvm1]
```

#### Re-create Docker Machine as default
``` 
docker-machine create --driver virtualbox [default]
docker-machine ip
docker-machine version
```

#### Inspect Docker Machine
``` 
docker-machine inspect [default]
```

#### Execute Job inside Docker Machine
``` 
// {machine ID} 컴퓨터에 접속하여 터미널에서 {job to do} 를 실행
docker-machin ssh {machine ID} {job to do}

// example 1
docker version                              // 로컬 호스트의 docker version
docker-machine ssh default docker version   // 가상 호스트 default 의 docker version

// example 2
docker run busybox echo hello world
docker container ls
docker image ls

docker machine ssh default docker run busybox echo hello world
docker machine ssh default docker container ls --all
docker machine ssh default docker image ls
docker machine ssh default docker ls -al
docker machine ssh default docker uname

// example 3
docker-machine ssh default docker run -d -p 4000:80 nginx

// docker hub 의 이미지가 다운로드 되지 않는 에러 발생
// https://stackoverflow.com/questions/47580528/error-response-from-daemon-get-https-registry-1-docker-io-v2-dial-tcp-look
// 버츄얼 박스 내 cmd로 들어가서 nameserver 를 추가함
```
> ssh : secular shell, 운영체제를 CLI 로 제어하는 프로그램

> busybox : 리눅스, 유닉스에서 사용하는 명령들을 설치하지 않고 하나로 모아놓은 프로그램   
> echo hello world : hello world 를 화면에 뿌리라는 리눅스 명령어

#### Connect local shell to Docker Machine
현재 내 컴퓨터의 cmd 에서 요청하는 명령을 
가상 호스트로 보내서 수행하게 하는 방법

docker-machine 타이핑 하는 모든 명령에 환경 자체를 default 로 
``` 
docker-machine env [default]

// 후 cmd 창의 Run this command to configure your shell: 후에 나오는 명령어 복붙 실행
@FOR /f "tokens=*" %i IN ('docker-machine env default') DO @%iO @%i
eval $(docker-machine env default)

// 아래 명령어를 쳤을때 ACTIVE 가 "*" 인 가상 호스트가 현재 디폴트로 모든 명령을 받고 있다
docker-machine ls
```

#### Disconnect local shell from Docker Machine
``` 
@FOR /f "tokens=*" %i IN ('docker-machine env -u') DO @%iO @%i
eval $(docker-machine env -u)
```

## Reading Articles
