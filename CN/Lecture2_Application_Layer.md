# chapter 2: Application layer

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

- persistent HTTP

---
# chapter 3: Transport layer
Transport layer 에서 기본 기능
- multiplexing
- error checking

## Reliable Data Transfer Protocol
### 1
- underlying 에 패킷 에러 없음
- 그냥 보내면 됨
### 2.0 packet error
- underlying 에 패킷 에러 있음

- Error detection
    - add checksum bits
- Feedback
    - Acknowledge
    - Negative feedback

- FSM
---
### 2.1
- feedback ACK 에 에러가 발생
- Duplicate packets 발생

- handling duplicate packet
패킷에 번호(seq#)를 붙인다

패킷
헤더 | 데이터
헤더에 seq#을 추가한다
헤더의 정보는 최소화 해야한다
sequence 정보도 최소화 한다

패킷을 하나씩 보내는 상황에서는 seq# 를 0, 1로 표현 가능

---
### 2.2 a NAK-free
ACK(seq#)을 보냄
이때 seq#은 마지막으로 제대로 받은 패킷의 seq#

### 3.0 channel loss & packet error
- Timer
: 일정 timer 동안 feedback 이 없으면 재전송 
> 일정 시간 : 'reasonable' amount
> 타이머의 시간이 너무 짧을 경우 : 필요 없는 재전송이 늘어남 > overhead 발생
> 타이머의 시간이 너무 길 경우 : 실제 loss 를 잡아내지 못할 수 있음

> TCP 가 제공하는 기능들에 필요한 데이터 > 패킷 헤더에 저장하여 전송

> stop-and-wait operation
> 신뢰성은 매우 높지만 성능이 좋지 않다

## pipelined protocols : increased utilization
### GBN (Go-Back-N)
> window size : 한번에 보낼 패킷 사이즈
> ACK N : N 번 packet 까지 완벽하게 잘 받았다는 의미

#### GBN : sender extended FSM
#### GBN : receiver extended FSM
receiver 는 현재 기다리는 패킷 번호가 제대로 도착할 때까지 기다림
> 데이터 유실 발생시 window 안의 N개의 패킷만큼 돌아와서 다시 send
> N이 클수록 유실 발생시 재전송할 패킷의 양이 늘어남

### Selective Repeat
> ACK N : N 번 packet 을 완벽하게 잘 받았다는 의미

> 순서에 맞지 않는 패킷이라도 에러가 없다면 저장함 <br>
> 유실된 패킷만 재전송

#### Selective Repeat dilemma
- seq# 을 얼마나 할것인가 > window size * 2

> sender 에서 모든 패킷에 timer 를 다는 것이 이론적으로는 좋은 방법이지만
> 실질적으로는 오버헤드 발생