# chapter 1: Introduction
## network structure
- network edge
  - applications and hosts ex) desktop
- network core
  - **routers** ⨂
- access networks : 네트워크 간의 연결
  - communication **links**

## network edge
- end systems (hosts) : <br> 
run application program ex) Web, email
- client/server model : <br>
client host requests, receives service from always-on server <br>
클라이언트가 항시 서버에게 서비스를 요청하거나 서버로부터 서비스를 받는다 
> client : 원할 때, 링크에 연곃라여 서버로 부터 정보를 가져오는 요소 <br>
> server : 항시 링크에 연결되어 client로 부터 요청을 기다리는 요소
- peer-peer model

### network edge : Data transfer
인터넷에서 제공하는 데이터 송신 서비스 <br>
Goal : data transfer between end systems

#### connection-oriented service : TCP(Transmission Control Protocol) service
- reliable, in-order byte-stream data transfer : <br> 
메세지가 유실되지 않고, 순서를 지켜 전송
- flow control : <br>
sender 가 전송하는 속도를 receiver 가 소화 할 수 있는 속도에 맞춰 전송
- congestion control : <br>
네트워크 상황에 맞춰서 전송

#### connectionless service : UDP(User Datagram Protocol) service
- connectionless
- unreliable data transfer
- no flow control
- no congestion control

> TCP 는 더 기능이 많은 만큼 UDP 보다 더 많은 자원을 사용(cost 가 높다) <br>
> UDP 는 TCP 에서 보장해주는 모든 것을 보장하지 않는 만큼 더 적은 자원 사용
>> UDP 는 reliable 할 필요 없는 경우 사용 ex) real-time voice 통화

> Protocol
> 암묵적인 rule, 약속

## network core
### Data transfer
how is data transferred thorough net?
#### circuit switching
출발지로부터 목적지로 가는 유일한 경로(link)를 미리 예약 <br>
그 경로를 통해 데이터를 전송

#### packet switching : statistical multiplexing
사용자가 보내는 데이터를 packet 단위로 그때 그때 목적지를 향해 전송 <br>
인터넷에서 사용 중인 방법

#### packet switching 의 장점
circuit switching 은 정해진 사용자 수가 있음 <br>
packet switching 의 동시 사용자 수의 제약이 없지만, 일정 이상 동시에 사용한다면 문제 발생

##### four resource of packet delay
1. nodal processing → (개선법) 좋은 라우터로 변경 <br>
 패킷 검사
    - check bit errors
    - determine output link : header 의 목적지 확인

2. queue delay → user 들의 패턴이므로 개선이 어렵다 <br> 
 먼저 큐에 들어온 다른 패킷들이 모두 처리 될때 까지 대기
> queue 가 가득 차있는 상태에서 새로운 packet 이 들어오면 packet loss 가 발생
> 유실된 packet 은 재전송이 필요하다

3. Transmission delay → (개선법) 대역폭이 큰 링크로 변경 <br>
 첫번째 비트부터 마지막 비트까지 모두 전송되는데 까지 걸리는 시간 <br>
 = link bandwidth(bps) / packet length(bits)

4. propagation delay <br>
 링크를 통해 전송되는 시간 <br>
 = length of physical link / propagation speed in medium

## layer outline
> |layers Model|TCP/IP Protocol|Data|
> |---|---|---|
> |Application|HTTP, Web Socket|message|
> | |ex) HTTP|
> |Transport|Transport|segment|
> | |ex) TCP, UDP|
> |Network|Internet|packet|
> | |ex) IP|
> |Link|ex) WiFi, LTE, Ethernet|frame|
> |Physical| | |

