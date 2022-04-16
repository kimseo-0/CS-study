# Lecture 10 - Docker Storage

## Today's Reading Articles

## Course
- Issues when storing files inside a container
- Storing files in the host machine
- Options for containers to store files in the host machines
    - volumes
    - bind mounts
    - tmpfs mount (for Docker on Linux)
    - named pipe (for Docker on Windows)
- Practice

### Issues when storing files inside a container
- data doesn't persist when that container no longer exists, 
difficult to get the data out of the container
container 는 필요할 때 띄우고 필요하지 않으면 사라지기 때문에 그 안의 
데이터는 영구적이지 않다. 따라서, 그 데이터를 다른 container 에서 사용하거나, 
지속적으로 사용하는 것은 어렵다.

- host OS 와 관계 없이 docker storage 로 데이터를 저장하고,
가장 일반적으로 사용하는 storage 기법은 volume 과 bind mount 기법이다.
(각 운영체제 별로 filesystem 에 대한 전문적인 지식 없이 사용 가능)

#### Storing files in the host machine
- Volumes : host 의 filesystem 의 한 부분에 Docker 의 매니징에 의해서
 데이터를 저장하는 것
- Bind mounts : host system 의 어디든 bind 된 곳이라면 데이터를 저장 가능
- tmpfs mounts 

##### Volumes
- stored in a part of the host filesystem which is managed by Docker
    - non-docker processes should not modify this part of the filesystem
    - Volumes are the best way to persist data in Docker

- a new directory is created within Docker's storage directory on the host machine
    - Docker manages that directory's contents
    - may be named or anonymous

- Volume Characteristics
    - a given volume can be mounted into multiple containers simultaneously
    - when no running container is using a volume, the volume is still available to Docker and dis not removed automatically
    - possible to store your data on remote hosts or cloud providers using volume drivers
    - created through command or Docker can create a volume during container or service creation
- Commands
``` 
docker volume create
docker volume prune
```

##### Bind Mount
- May be stored anywhere on the host system
    - may even be important system files or directories
    - Non-Docker processes on the Docker host or a Docker container can modify them at any time
- File or directory on the host machine is mounted into container
    - does not need to exist on the Docker host already
    - created on demand if it does not yet exist
- Can't use Docker CLI commands to directly manage bind mounts
- Bind mounts may be stored anywhere on th host system
- Limited functionality compared to volumes
    - when you use a bind mount, a file or directory on the host machine is mounted into a container
    - the file or directory is referenced by its full or relative path on the host machine
- Bind mounts allow access to sensitive files
    - you can change the host filesystem via processes running in a container

##### tmpfs (for Docker on Linux)
- Stored in the host system's memory only
    - never written to the host system's filesystem
- When the container stops, the tmpfs mount is removed, and files written there won't be persisted
- Unlike volumes and bind mounts
    - tmpfs mount is temporary, and only persisted in the host memory
    - you can't share tmpfs mounts between containers

##### named pipe (for Docker on Window)
- npipe mout can be used for communication between the Docker host and a container
- Common use case is to run a third-party tool inside of a container and connect to the Docker Engine API using a named pipe

### Practice

### Docker Compose Examples

## Reading Articles
