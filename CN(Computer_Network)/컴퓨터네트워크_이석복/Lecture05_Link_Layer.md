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





