# Lecture 08 - Docker Compose

## Today's Reading Articles

## Course
### Docker Services 
- different pieces of the app are called "services", in a distributed application
- 애플리케이션을 구성하는 다양한 요소 각각을 service 라고 함
- service 는 containers in production 이다
    - only run one image : 하나의 서비스는 하나의 이미지와 매핑된다.
    - codifies the way that image runs : image run 을 코드화한다.
        ex)
        - what port it should use
        - how many replicas 같은 service 를 하는 container 를 얼마나 띄울 것인지
    - scaling a service change the number of container : 
    container 를 필요한 만큼 늘리고 줄일 수 있다.

### What is Docker Compose?
- tool for defining and running multi-container docker applications

container base 데이터 센터 환경은 많고 다양한 서비스들이 많은 container 로 구현될거라는 가정하에
docker compose 라는 명령 한 번을 통해 해당 애플리케이션에 들어있는 서비스들과 그 서비스에 해당하는 
container 들을 손쉽게 다룰 수 있도록 한다.

- use YAML file to configure application services

dockerfile 처럼 yaml file 을 사용하여 어떤 애플리케이션에 어떤 서비스들이 구축되는지 등을 기술한다.

### Docker Compose Features
- Start all services : docker-compose up
- Stop all services : docker-compose down
- Scale up selected services when required : docker-compose scale

### Installation of Docker Compose
docker-compose version
docker-compose --help

### How to use docker compose
#### How to create docker compose files
- TAB is not allowed!!
- docker-compose.yml 예시
``` 
version: '3.7'
services:
  web:
    image: nginx
  database:
    image: redis
```

#### How to create services
- [working directory] name 가져와서 
container name 으로 사용하기 때문에 신경써서 짓는 것이 좋다!!
```
docker-compose up -d
docker-compose config
docker container ls & docker image ls
docker stats
```

#### How to stop services
- docker-compose 로 서비스를 를 생성한 [working directory] 에서 수행한다.
``` 
docker-compose down
```

#### Create modified services using Mapping
- docker-compose.yml 예시
``` 
version: '3.7'
services:
  web:
    image: nginx
    ports:
      - "8000:80"
  database:
    image: redis
```
> curl http://localhost:8000

##### NAT/PAT
- NAT : Network Address Translation
- PAT : Port Address Translation

### YAML: YAML Ain't Markup Language
- data serialization language designed to be human-friendly
데이터의 모양을 정의하는 언어 ex) Json
- Indentation(=space)-based scoping
    - Facilitate easy inspection of the data's structure   
    데이터의 구조를 쉽게 검사할 수 있다.

> 참고 : yaml.org

#### Use Cases
- configuration files
- log files
- cross-language data sharing - 언어와 상관 없이 사용 가능 ex) PyYAML
- debugging of complex data structure
> 최근 많은 프로젝트에서 프로젝트 제어용 파일로 yaml file 을 많이 사용

### Practice
#### Manager & Workers (Ubuntu)
- docker-compose.yml
``` 
version: '3.7'
services:
  manager:
    image: ubuntu:latest // alpine:latest
    tty: true
  worker1:
    image: nginx
    ports:
      - "8001:80"
  worker2:
    image: nginx
    ports:
      - "8002:80"
```
> alpine 이 ubuntu 보다 가볍다

- terminal : up and down
``` 
docker-compose up -d
docker container ls
curl http://localhost:8001
curl http://localhost:8002

docker container exec -it [master container ID] /bin/bash
// worker container 내부 cmd 실행
apt-get update
apt-get upgrade
apt-get -y install curl // alpine : apk add curl
curl http://worker1:80
curl http://worker2:80
docker-compose down
```

> DNS(Domain Name Service)   
> - 앞에서 동일한 docker-compose file 로 만든 container 들 끼리 접속을 할때, 
> 이름을 사용 (ex_ worker1, worker2) 했다.
> - docker-compose file 로 만든 container 들은 docker compose 에 의해서
> 자동으로 이름을 가지고 서로 연결 가능(IP address 대신)

> curl(Client URL)   
> - library and command line tool for transferring data using various protocol
> - supports a range of common network protocols : HTTP, HTTPS, FTP ...
> - ex) cmd 에서 웹 개발이 가능하다

- terminal : scale up
```
docker-compose up -d --scale manager=4
docker container ls -a
docker-compose ps
docker-compose logs
docker-compose down
```

> `docker-compose run -p 9998:80 -d worker1`
> 해당 명령어로 port 매핑이 가능하다.

#### Shared Filesystems
localhost 와 localhost 에 떠있는 가상머신인 container 안과 연결하고싶다면?
> 즉, container 를 띄우고 그 안에서 localhost 에 저장된 file 을 사용할 수 없을까?
- docker-compose.yml
``` 
version: '3.7'
services:
  manager:
    image: alpine:latest
    tty: true
    volumes:
      - .:/code
  worker1:
    image: nginx
    ports:
      - "8001:80"
  worker2:
    image: nginx
    ports:
      - "8002:80"
```
> volumes   
> - . : localhost 의 current working directory
> - /code : alpine 을 기반으로 하는 manager container 내부의 /code 와 연결

- terminal
``` 
docker-compose up -d
docker container ls
docker container exec -it [master container ID] /bin/sh
apk add nano
cd code
ls -al
nano docker-compose.yml
Add"# test" at the end of docker-compose.yml
exit
check"# test" in the docker-compose.yml
```

### Docker Compose Examples

## Reading Articles
