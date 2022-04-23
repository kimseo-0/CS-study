# Lecture 12 - Docker in Docker (DinD)

## Today's Reading Articles

## Course
- what is Docker in Docker
- How to use DinD
- Practice

### What is Docker in Docker
- Docker in Docker 를 위해 Docker hub 에서 Docker image 를 제공하고 있음
- 일반적으로 권장하지 않는 방식임
    - 개발 환경이 좋지 못한 상황에서 multi docker 를 띄워야하는 어쩔수 없는 경우
- Docker 안에서 Docker 를 띄울 수 있게 함

### How to use DinD
`그림`

### Practice
#### Write docker-compose.yml
``` 
version: "3.7"
service:
  manager:
    container_name: manager
    image: docker:18.05.0-ce-dind
    privileged: true
    tty: true
    ports:
      - 8000:80
      - 9000:9000
```

``` 
docker-compose up -d
```

#### Execute docker command inside manager
``` 
docker container exec -it manager docker container ls
docker container exec -it manager docker system df
```

#### Install nginx container inside manager container
``` 
docker container exec -it manager docker run -d -p 8080:80 nginx
docker container exec -it manager docker container ls
```

#### Install curl and check nginx in manager container
``` 
docker container exec -it manager apk add curl
docker container exec -it manager curl http://localhost:8080
```

## Reading Articles
