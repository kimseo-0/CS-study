# chapter 2: Application layer

## Intro
> | Host (client) |  |  |  | Host (server) |
> |:---:|:---:|:---:|:---:|:---:|
> |App (Process)| --- |--request--| --→ |(Process) App|
> |             | ←-- |--response--| --- |            |
> |Trans| | | |Trans|
> |Net| | | |Net|
> |Link| | | |Link|
> |Physic|-----|--⨂--|-----|Physic|

## Client-server architecture
- server
- client


## HTTP (Hypertext Transfer Protocol)
- request/response

- Use TCP service
    - Data integrity : 데이터가 유실되지 않고 목적지까지 도착 보장 > TCP 에서 제공
    - timing : 
    - throughput
    - security
> 기본적으로 상위 layer 은 하위 layer 의 서비스를 이용함
- HTTP is 'stateless'

- non-persistent HTTP
- persistent HTTP(default)
