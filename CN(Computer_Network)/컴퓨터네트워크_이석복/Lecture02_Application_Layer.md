# chapter 2: Application layer

## Intro
> | Host (client) |  |  |  | Host (server) |
> |:---:|:---:|:---:|:---:|:---:|
> |App (Process)| --- |--request--| --→ |(Process) App|
> |             |  | HTTP |  |            |
> |             | ←-- |--response--| --- |            |
> |Trans| | Segment | |Trans|
> |Net| | | |Net|
> |Link| | | |Link|
> |Physic|-----|--⨂--|-----|Physic|

## Client-server architecture
- server
    - always-on host
    - permanent IP address (고정 IP 주소)
- client
    - communicate with server
    - may have dynamic IP addresses

## What transport service dose an app need?
> 기본적으로 상위 layer 은 하위 layer 의 서비스를 이용함

application layer 에서 요구하는 transport layer 서비스
    - Data integrity : 데이터가 유실되지 않고 목적지까지 도착 보장 > TCP 에서 제공
    - timing : 데이터가 일정 시간 이후에 도착
    - throughput : 데이터가 일정 속도 이상으로 전송
    - security : 데이터에 대한 보안

> Use TCP service   
> transport layer 에서 TCP 가 위와 같은 서비스를 보장함

## HTTP (Hypertext Transfer Protocol)
### 특징
- message : request/response
- client-server model

- HTTP is 'stateless' : 상태가 없다.   
과거의 요청에 대해서 기억하지 않는다.(past client request)

### HTTP connections
- non-persistent HTTP : request/response 가 끝나고 TCP 연결 끊기
- persistent HTTP(default) : TCP 연결 유지

## Socket
> | Host or server |  |  |  | Host or server |
> |:---:|:---:|:---:|:---:|:---:|
> |App (Process)|  |  |  |(Process) App|
> |socket       |  |  |  |socket       |
> |TCP          |←|network|→|TCP         |
- interface between application and network
- socket type 에 따라 communication 스타일(TCP or UDP)이 다름 

### 두가지 종류
- SOCK_STREAM > TCP
- SOCK_DGRAM > UDP

### Socket API
#### Socket Function : TCP case
- TCP server
    1. socket() : 소켓을 연다.   
    2. bind() :  특정 포트에 연결   
    3. listen() : 
    4. accept() : request 를 받을 준비가 됨   
    5. block : client 에서 요청이 올 때 까지
    
    연결이 된 후
    - write() : data reply
    - read()
    - close()

- TCP client
    1. socket()
    2. connect() : 원하는 서버의 프로세스와 연결 (TCP three-way handshaking)

    연결이 된 후
    - write() : data request 
    - read() 
    - close()  

#### Socket creation and setup
- `Create` a socket
```
int socket (int domain, int type, int protocol);

* Input
- type : style of TCP
* Return : socket id
```

- `Bind` a socket to a local IP address and port number 
```
int bind (int sockfd, struct sockaddr* myaddr, int addrlen);
```
client 의 경우 정해진 특정 포트에 연결할 필요가 없기 때문에
bind 를 할 필요가 없다.

- `Listen`
put socket into passive state (wait for connection)
```
int listem (int sockfd, int backlog);
* Input
backlog : bound on length of unaccepted connection queue,
동시에 여러개의 request가 들어왔을때 최대 backlog 만큼 큐에 담아서 처리
```

- `Accept` a new connection
accept 실행시 block,
client 로 부터 요청이 오기를 기다림
```
int accept (int sockfd, struct sockaddr* cliaddr, int* addrlen);
* Return
- cliaddr: IP address and port number of client, 
요청이 들어온 client IP 주소를 리턴함
```

#### Sending and Receiving Data

