# chapter 5: Link layer
## 5.1 Intro
> | |  |  |  | |
> |:---:|:---:|:---:|:---:|:---:|
> |App| | Message | | HTTP |
> |Trans| | Segment | | TCP |
> |Net| | Packet | | IP |
> |Link| | Frame | | Ethernet |
> |Physic|||||

- nodes : hosts and routers
- link : communication channels that connect adjacent nodes along communication path
    - wired links
    - wireless links
    - LANs
- one node to physically adjacent node, 한 노드로부터 바로 이웃 노드까지
- datagram : frame 
데이터를 전달하는 것에 대한 protocol 이다.
- NIC(network interface card)에 구현되어 있음
> transport, network layer 는 OS에 구현되어 있음

## 5.2
넘어감

## 5.3 Multiple access protocols
- two types of links
    - point-to-point
    - broadcast medium : 전체에게 전달하게 되는 매체 ex) 소리를 전달하는 `공기`

### Ideal multiple access protocol
given : broadcast channel of rate R bps
1. 한 노드가 데이터를 전송할 때 rate R로 전송
2. M개의 노드가 데이터를 전송한다면 평균적으로 rate R/M
3. 분산처리
4. 단순

### MAC(Medium Access Control) protocols : taxonomy
- channel partitioning
- random access
- taking turns

### Channel partitioning MAC protocols
#### Channel partitioning : TDMA(Time Division Multiple Access)
각 사람별로 전송할 수 있는 time slot 을 정해서
해당 time slot 에서만 전송하는 방식

단점 : 
6명의 사용자가 있을 때, 6개의 slot 그 중에 1, 3, 4 번만 데이터를 전송한다면
2, 5, 6 time slot 일 때, 자원 낭비 발생

#### Channel partitioning : FDMA(Frequency Division Multiple Access)
각 사람별로 다른 주파수를 정해서 데이터 전송하는 방식
TDMA 와 동일한 아이디어로 동일한 단점이 발생한다. MAC

### Random Access MAC protocol
데이터를 보내고자 할때 보내는 방식
- collision 발생
- ex. MAC protocols
    - slotted ALOHA
    - ALOHA
    - CSMA, CSMA/CD, CSMA/CA

#### CSMA(Carrier Sense Multiple Access)
collision 을 막는 방법을 고안
- listen before transmit : 말하기 전에 듣는다
> but, 동시에(실질적으로 동시는 아니지만) 말하게 되는 경우 충돌 가능

##### CSMA collisions
- propagation delay 로 인해 충돌이 발생한다.
- 두 frame 이 충돌하는 동안 노이즈가 발생하고, 해당 시간동안 채널을 사용할 수 없다. 
즉, 채널 낭비가 발생한다.
> A B C D node 가 있을 때,   
> A에서 frame 전송 시작 후, broadcast 되어 D까지 전송되기 까지 걸리는 delay 가 있는데,
> 그 frame 전송되기 전에 D에서 본인의 frame 을 전송하기 시작한다면,
> A 와 D에서 전송하는 두 frame 이 충돌한다.

그렇다면 propagation delay 를 0으로 만든다면 해당 문제를 해결할 수 있다.
하지만, propagation delay 는 물리적은 distance 와 빛의 속도로 인해 발생하는 문제이므로
해결이 불가능이다.

결과적으로 충돌이 발생하는 것을 인정하고, 대신 충돌로 인한 추가적인 자원 낭비를 최소화 하는 방법에 대해서 고민한다.

#### CSMA/CD (Collisions Detection) used in Ethernet
충돌을 감지한 즉시 멈춘다.

그렇다면, 충돌을 감지하여 전송을 중단한 뒤 어떤 frame 부터 다시 전송을 할 것인지 정할 필요가 있다.

##### binary backoff 
m 번의 충돌이 발생했을 때, {0, 1, 2, ...., 2^m-1} 중 랜덤하게 숫자를 선택해서
그만큼 기다린 후 재전송한다.
> 충돌이 많이 발생했을 수록 기다리는 시간이 길어질 확률이 높아진다.

처음 충돌이 발생 했을 때, 각각의 충돌이 발생한 곳에서 {0, 1} 의 
대기 시간중 랜덤하게 선택하여 각각 서로 다른 대기 시간을 선택할 것을 기대한다.
만약, 기대한 대로 선택하지 못한 경우 또다시 충돌이 발생한다. 
그경우 {0, 1, 2} 에서 대기 시간을 선택하므로 선택의 범위가 커지면서, 
각각 다른 대기 시간을 선택할 확률이 올라갈 것이다.
> 많은 사람들이 동시에 네트워크를 사용할때 delay 시간이 길어지는 이유가 된다.

### Taking Turn MAC protocol
- Channel partitioning
    - 적은 사용자가 사용한다면 channel 자원 낭비가 발생한다.
- Random Access
    - 많은 사용자가 사용한다면 충돌이 많이 발생하여 비효율적이다.

- Taking Turn : Channel partitioning 와 Random Access 의 혼합

#### polling
- master node 를 활용하여 slave node 들의 데이터 전송에 대한 control 을 한다.
- master node 에 문제가 생기면, 전체 데이터 전송에 문제에 치명적인 문제가 발생한다.

#### token passing
- token 을 가지고 있는 host, node 만이 데이터를 전송할 수 있다.
- 만약 token 데이터를 잃어버린다면, 전체 데이터 전송에 문제에 치명적인 문제가 발생한다.

## 5.4 LANs ( Local Area Network )
라우터를 거치지 않고 통신이 가능한, 호스트들의 집합

### Ethernet : physical topology
- bus : 과거에 많이 사용하던 구조
- star : 최근에 많이 사용하는 구조
    - 가운데 switch 가 있고
    - host 들이 switch 에 연결되어 있음

#### Ethernet frame structure
|||||||
|---|---|---|---|---|---|
|preamble|destination address|source address|type|data (payload)|CRC|

- destination/source address : MAC address
- type : 상위 계층의 프로토콜이 무엇인지? > 일반적으로 IP protocol
- CRC : 에러 체킹을 위한 정보

#### Ethernet uses CSMA/CD

CD가 발생하지 않았다면 99.9% 제대로 데이터가 전송되었다고 할 수 있음.
그러므로 데이터를 잘 받았다는 피드백을 보낼 필요 없이 
CD가 발생했는가 안했는가만을 가지고 재전송 여부를 결정할 수 있다.   
> *CD : collision detection

Is it possible that :   
A collision happens in Ethernet But is not detected at the MAC layer?   
충돌이 발생했지만 발견되지 않는다면?    

발생해서는 안된다. 
하지만, 위와 같은 상황이 발생할 수 있다.
   
A - B - C - D - E , 5개의 호스트가 있을 때,   
A 에서 데이터를 전송하면 A > B > C > D 를 지나 E 로 향하는데 E 에 도달하기 직전,      
E 에서는 아직 아무것도 듣지 못했기 때문에 데이터 전송이 가능하다.
 
E 에서 그 순간 데이터를 전송하고, 직후 A 에서 전송한 데이터가 E에 다다르면 collision detection 으로
E 에서 바로 데이터 전송을 중단한다.

E 에서 데이터 전송을 중단해도, 이미 전송된 데이터는 C > B 를 지나 A 로 향하는데 A 에 도달하기 직전,   
A 에서 전송할 데이터가 더이상 없다면, E 에서 보낸 데이터가 A 에 도달했을 때,   
collision detection 이 이루어지지 않는다.   

하지만, A 에서 전송한 데이터는 E 에서 보낸 데이터와 충돌로 인해 사용할 수 없는 데이터이며,
재전송이 필요하다.
  
위와 같은 상황이 발생할 수 있기 때문에 해결방법이 필요함

근본적으로 propagation delay 로 인한 문제이지만, 전송 속도를 변경하는 것은 불가능(빛의 속도이므로)   
A 의 전송 데이터를 길게 만드는 방법을 선택

minimum frame size 를 64 bit 로 강제한다. 만약 실질적으로 보낼 데이터가 1 bit 라면
나머지 63 bit 에 패딩을 주어 64 bit 로 사이즈를 맞춰서 전달한다. 

### Addressing ARP
#### MAC addresses and ARP
MAC addresses
- link layer 에서 사용하는 address
- 48 bit
- 24 bit(제조 회사) + 24 bit(해당 인터페이스의 고유번호)
- 고정 값/고유 값으로 변경되지 않는다

#### LAN addresses and ARP
frame 을 목적지 IP 로 전송하기 위해서 Gate Way Router 로 먼저 전송되어야 한다.   
GWR IP address 는 네트워크 계층에서 DHCP 로 이미 알고 있는 정보지만,
링크 계층에서는 MAC address 가 필요하다. 이때 사용되는 프로토콜이 ARP 이다.

##### ARP (Address Resolution Protocol) table
- IP address 와 매칭하는 Mac address 을 나열한 테이블

|IP add|MAC add|TTL|
|:---:|:---:|:---:|
|GWR IP|GWR MAC|2|
> *TTL : 유효 시간

##### ARP (Address Resolution Protocol) 
- ARP table 을 채우는 프로토콜
- gate way router 의 IP 를 담은 ARP request 를 broadcast 하면,
해당 IP 주소와 동일한 host 에 도달하면, 자신의 MAC address 담아서 response 를 돌려 보낸다.

#### scenario : routing to another LAN
1. IP packet  = [source address, distance address]   
forwarding table 에서 distance address IP 주소로 데이터를 전송하기 위한 next IP 주소를 가져옴
2. IP packet 을 frame 으로 감싼다. 
3. MAC frame = [IP pkt, MAC source address, MAC distance address]
next IP 주소를 가지고, ARP 프로토콜을 통해 ARP table 에서 해당 IP 주소에 대한 MAC 주소를 가져와서
MAC distance address 에 기입한다.
4. MAC distance address 로 전송
5. 도착 후 MAC frame 을 IP packet 으로 열고 IP distance address 에 도착할때까지 다시 1번부터 시작

> ※ 주의!   
> 3 번에서 MAC distance address 다음 루프의 MAC source address 는 동일할까?   
> NO,
> 같은 라우터라도, 데이터가 들어오는 인터페이스와 데이터가 나가는 인터페이스가 다르기 때문에,
> 두 address 는 다르다.

### switch
- collision domain : domain 을 분리 시켜 교통정리 해주는 역할을 한다.
- 네트워크 관점에서 switch 는 없다고 생각한다.

|A|1↘| |↙2|B|
|---|---|---|---|---|
|C|3→|switch|←4|A'|
|B'|5↗| |↖6|C'|
- A-to-A' 과 B-to-B' 로 충돌 없이 데이터를 동시에 전송할 수 있다.
- A-to-A' 과 B-to-A' 로 데이터를 전송하는 경우 스위치 내부에서 교통정리를 통해
A 에서 전송하는 데이터와, B 에서 전송하는 데이터를 충돌 없이 A' 으로 전송한다.

그렇다면, A-to-A' 데이터 전송을 한다고 할때, A' 이 switch 의 어떤 포트(구멍)인지 알아야 한다.
> switch table 을 통해 알 수 있다.

#### switch table
|destination MAC|output|TTL|
|:---:|:---:|:---:|
|A'|4|2|
> *TTL : 유효 시간

그렇다면, switch table 은 어떻게 채울까?/
> self-learning 을 통해 할 수 있다.

#### self-learning
A-to-A' 으로 데이터를 전송할 때
1. switch table 이 비어 있으면 flooding
2. A 의 포트 정보를 switch table 에 저장
> flooding : 스위치에 연결된 모든 링크로 데이터 전송

- 시간이 지나면서 switch table 이 채어짐

#### Interconnecting switches
- 스위치에 스위치를 연결할 수 있다.

##### multi self-learning example
|A|1 ↘| | | |↙ |D|
|---|---|---|---|---|---|---|
|C|2 →|switch1|0 ↔ 0|switch2|←|E|
|B'|3 ↗| | | |↖|F|

- Q1 : A-to-F

> switch 1 table
> 
> |destination MAC|output|TTL|
> |:---:|:---:|:---:|

switch 1 에서 데이터를 받으면,   
switch 1 table 이 비어 있으므로 flood,   
switch 1 table 에 A 에 대한 포트 정보 입력

> switch 1 table
>
> |destination MAC|output|TTL|
> |:---:|:---:|:---:|
> |A|1|60|

B, C 로 간 데이터는 drop,   
switch2 에서 데이터를 받으면,  

> switch 2 table
>
> |destination MAC|output|TTL|
> |:---:|:---:|:---:|

switch 2 table 도 비어 있으므로 flood,   
switch 2 table 에 A 에 대한 포트 정보 입력

> switch 2 table
>
> |destination MAC|output|TTL|
> |:---:|:---:|:---:|
> |A|0|60|

D, E 로 간 데이터는 drop,   
F 로 데이터 도착

- Q1 : F-to-A

switch2 에서 데이터를 받으면,
> switch 2 table
>
> |destination MAC|output|TTL|
> |:---:|:---:|:---:|
> |A|0|60|

A 에 대한 정보가 table 에 있으므로   
포트 0 으로 데이터 전송

switch 1 에서 데이터를 받으면,

> switch 1 table
>
> |destination MAC|output|TTL|
> |:---:|:---:|:---:|
> |A|1|60|

A 에 대한 정보가 table 에 있으므로   
포트 1 으로 데이터 전송   
A 에 데이터 도착

#### Institutional network

##### switch vs router   
- switch 
    - link-layer device
    - 여러개의 host 들의 데이터 전송에 대한 교통정리를 해주는 역할만을 가지고 있다.
    - 네트워크의 관점에서는 없는 취급한다.
    - flooding(self-learning) 을 통해 MAC address table 을 작성한다. 

- router
    - network-layer device
    - 라우팅 알고리즘을 통해 IP Address table 을 계산한다.
    - IP 주소를 가지고 있다.

> 공유기   
> 공유기는 하나의 컴퓨터로
> Application, transport, network, link layer 에서 발생하는 여러가지 프로토콜 및 작업을 수행한다.   
> 즉, 라우팅을 하는 하나의 router 로 IP 주소를 가지고 있다.

## 5.6 data center networking
엄청나게 많은 서버들을을 쌓고 가장 위에 스위치로 연결 하고 상위 스위치에 연결...연결 계층화 하여 관리
