# chapter 3: Network layer
## Intro
> | |  |  |  | |
> |:---:|:---:|:---:|:---:|:---:|
> |App| | Message | | HTTP |
> |Trans| | Segment | | TCP |
> |Net| | Packet | | IP |
> |Link| | Frame | | |
> |Physic|||||

- transport segment from sending to receiving
- network layer protocols in every host, router

### Two key network-layer function
- forwarding : forwarding table 을 확인해서 목적지를 향해 전달
- routing : forwarding table 을 만드는 작업

### Datagram forwarding table
#### Longest prefix matching
가장 많이, 길게 match 하는 entry 선택

## IP : Internet Protocol
### IP datagram format
- source IP address : 출발 IP 주소
- destination IP address : 목적지 IP 주소
- time to live : 라우터를 거칠 때 마다 -1, 0이 되면 패킷을 폐기
- upper layer : TCP 인지 UDP 인지 명시

> overhead   
> IP header = 20byte
> TCP header = 20 byte
> 40 byte(IP + TCP overhead) + app layer overhead

### IP Address (IPv4)
#### 정의
- 32bit
- Identifies an interface(on a host, on a router) : network interface 를 지칭하는 주소
> 하나의 컴퓨터에 여러개의 IP 주소를 가지고 있는 컴퓨터는?   
> 라우터

#### scalability challenge
모든 라우터에 대해서 무작위로 ip 주소 할당
∴ forwarding table 이 너무 커짐 > 검색 어려움...

#### Hierarchical Addressing : IP Prefixes
IP address = Network(prefix, subnet) + Host
ex) 12.34.158.0/24 =    
00001100/00100010/10011110/00000101   
11111111/11111111/11111111/00000000 - subnet mask  
> subnet mask : 어디까지 network id 인지 알려줌

##### 장점
- forwarding table 이 단순해짐
- Easy to Add New Hosts
같은 네트워크에 속한 host 의 경우 forwarding table 수정 없이 host 주소만 설정해서 추가할 수 있다.

#### History of IP Address Allocation
##### Classful Addressing
class A : /8  - 2^8 기관 + 2^24 host
class B : /16 - 2^16 기관 + 2^16 host
class C : /24 - 2^24 기관 + 2^8 host
> 유동적이지 않음, 호스트가 너무 부족하거나 남는 호스트가 너무 많은 문제 발생

##### Classless Inter-Domain Routing ( CIDR )
유동적으로 prefix 와 host 를 나누어 사용
ed) /22, /17  

#### Longest prefix match forwarding
forward table 에서 일치하는 entry 들 중 prefix 가 가장 긴 것 선택

#### Subnets
- 같은 subnet id, prefix를 가진 interface device 들의 집합
- 라우터를 거치지 않고 접근할 수 있는 host 들의 집합

#### Network Address Translation
> 과거s > 1996s  > 현재?   
> IPv4  > IPv6   > IPv4   
> 32bit > 128bit > 32bit   
> 어떻게?   
> 같은 ip address 를 여러사람이 공유   
> IP 주소의 재사용

같은 네트워크 안에 있는 사용자들은 각자 고유의 IP 주소를 배정 받음    
다른 네트워크 안에서 동일한 IP 주소를 사용할 수 있음

네트워크 내부에서 외부로 패킷을 전송할 때,
gateway router 에서 IP 주소를 자기 자신의 router IP 주소로 변경 (rewrite the src IP)

> NAT translation table 
> 
> | | |
> |:---:|:---:|
> | WAN side addr | LAN side addr |
> | 138.76.29.7, 5001 | 10.0.0.1, 3345 |

##### scenario
1. S : host 10.0.0.1, D : send 128.119.40.186, 80
2. NAT router chages datagram source addr
S : gate router 138.76.29.7, 5001, D : send 128.119.40.186, 80
3. reply arrives
S : 128.119.40.186, 80, D : 138.76.29.7, 5001
4. NAT router changes datagram
S : 128.119.40.186, 80, D : 10.0.0.1, 3345

#### Dynamic Host Configuration Protocol ( DHCP )
IP, mask, router, DNS 등에 대한 정보를 동적으로 가져와서 configuration 하는 protocol 

##### DHCP client-server scenario
1. DHCP discover
broadcast 전송, 
67번 포트를 열고 있는 DHCP 만 해당 메세지를 받음
transaction ID : 임의의 숫자
2. DHCP offer
broadcast 전송
68번 포트를 열고 있는 host만
yiaddr : 할당할 주소 
life time 해당 주소를 사용할 수 있는 시간
3. DHCP request
broadcast 전송
transaction ID + 1
4. DHCP ACK

> GateWayRouter 
> `NS` `DHCP` `NAT`   
> 여러가지 기능 포함

### IP fragmentation, reassembly
- length : 전체 길이
- id : 패킷 id
- fragflag : 뒤에 연결될 패킷이 있는가 없는가
- offset : 기존 데이터에서 어느 위치에 해당하는가( 앞의 데이터 길이 / 8)

