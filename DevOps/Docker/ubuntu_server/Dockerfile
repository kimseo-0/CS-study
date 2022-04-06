FROM ubuntu:14.04
MAINTAINER kimseo-0 "rosa99kim@gmail.com"
RUN apt-get update
RUN apt-get install -y nginx
RUN echo "this is a ubuntu container"
WORKDIR /etc/nginx
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80