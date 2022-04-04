# Lecture 07 - Docker Hub and Dockerfile

## Today's Reading Articles

## Course
- Docker hub
- Dockerfiles
- Lifecycle of a container
- Basic commands
- Practice

### Docker hub
sharing immutable infrastructures

#### Features
- Repositories : push and pull container images
- Official Images : pull and user high-quality container images provided by Docker
- Teams & Organizations : manage access to private repositories of container images

### Dockerfile
- image 를 build 하기 위해서 작성하는 text file 로 모든 commands 들이 순서대로 작성되어 있다.
- docker 는 dockerfile 의 명령어들을 읽어 자동적으로 image 를 build 한다. 

#### Command
- FROM [docker image] : creates a layer form [docker image]
- COPY [copy dir] [paste dir] : adds files form [copy dir] to [paste dir]
- RUN [command] : run command
- CMD [command] : specifies what command to run within the container

> Example
> - FROM ubuntu:18.04 : creates a layer form the ubuntu:18.04 Docker image
> - COPY . /app : adds files form your Docker client's current directory
> - RUN make /app : run command builds your application with make
> - CMD python /app/app.py : specifies what command to run within the container

### Lifecycle of a container
`그림'

### Basic commands
```
docker pull
docer build                 # gettign started, part 3 참고
docker image ls
docekr container run
docker container ls
docker container ls -a (or --all)
docker container ls -a -q (or -aq)
docker container stop
docker container kill

docker --version
docekr system info
docker system df            # docker disk
docker ps                   # docker process
docker stats                # docker 의 container 들의 상태 리스트
docekr search [contents]    # docker hub [contents] 검색

docker image rm -f <hash>   # -f : force, 강제
docker contianer rm
docker system prune         # docker 모든 constiner, iamge, cache 등 모두 삭제
```

```
docker pull alpine
docker container runt -it -d --rm --name alpineos apline:latest
docker exec -it alpineos /bin/bash

# -it : 필요할 때 interactive 하게 CLI 사용
# -d : demon 으로 둥둥 띄우기
# --rm : 작업을 마치면 자동 삭제
# -- name : 별명
```


## Reading Articles

