# Lecture 08 - Docker Build and Push Image

## Today's Reading Articles

## Course
### Nginx 실습
- Dockerfile
``` 
FROM ubuntu:14.04
MAINTAINER kimseo-0 "rosa99kim@gmail.com"
RUN apt-get update
RUN apt-get install -y nginx
RUN echo "this is a ubuntu container"
WORKDIR /etc/nginx
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
```
> - FROM : initializes a new build stage and sets the Base Image for subsequent instructions.
> - RUN : execute any commands in a new layer on top of ther current image and commit the results
> - WORKDIR : sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, ADD instruction that follow it in the Dockerfile.
> - CMD : only one, provide defaults for an executing container.
> - EXPOSE : instruction informs Docker that the container listens on the specified network ports at runtime.

- Command
``` 
docker build --tag myubuntu:1.0 .   // . : 현재 디렉토리에 있는 Dockerfile 로 image build
docker image ls
docker run --name myubuntu-nginx -d -p 4000:80 myubuntu:1.0
docker container ls
docker stats
execute web-browser & access to http://localhost:4000
# 작업중인 컴퓨터에서 웹브라우저를 열고, http://localhost:4000 접속함
```

## Reading Articles
- Docker Composer :
https://docs.docker.com/compose/
- YAML Ain't Markup Language
https://yaml.org/spec/1.2.2/