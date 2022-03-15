# Lecture 02 - Cloud Computing and Infrastructure

## Quick Review of Reading Articles
- What is cloud computing
- What are the concepts of utility clouding & cloud computing economics?
- What are the components & service models of cloud computing?
- What are the obstacles to and opportunities for growth of cloud computing?
- What are the issues of cloud computing?


## Course
### Google Global Datacenters
### Cloud Computing Concept
- Infrastructure : compute, block storage, network
- Platform : 소프트웨어들, 주로 개발자가 사용하는 시스템 ex) object storage, database
- Application : end-user 들이 사용하는 시스템

> 클라우드 컴퓨팅 : 필요할 때 언제 어디서든 사용할 수 있는 컴퓨팅 자원들

### What is Cloud Computing?
- ubiquitous : 눈에는 보이지만 어딘가 존재하는 것
- convenient : 노트북만 있으면 편리하게 사용 가능
- on-demand and rapidly provisioned : 소프트웨어에 필요한 cpu, 네트워크를 필요할때 즉각 요청하여 사용 가능
- shared pool : 혼자 사용하는 것이 아님, 공유하여 한 사람이 사용하지 않을 때 다른 사람이 사용하여 효율적
- minimal management : 비교적 쉬운 인터페이스로 적은 노력으로 쉽게 필요한 서비스를 요청

> You do not own computing infrastructure, but you rent it.   
> 필요한 사람이 소유하는 것이 아니라, 빌려 쓰는 것이다. 

### Defining Cloud Computing
#### cloud computing 이 제공하는(빌려주는) 것
1. 인터넷을 통해 서비스로 제공되는 application (end-user 입장)
2. 데이터 센터에 있는 하드웨어나 소프트웨어 자원 (developer 입장)
 
> `Data center = cloud`   
> Data center 는 cloud computing 이 가능하게 하는 하드웨어 인프라와 소프트웨어들을 의미한다.

#### cloud computing 의 장점
- 자원을 빌려쓴다는 관점에서
1. 충분히 필요한 만큼의 자원을 요청해도 문제 없음, 사실상 무한
2. up-front 없음
3. 사용한 자원에 대한 사용한 시간만큼의 비용만 지불
4. 대량의 자원 시스템으로 서비스를 제공하기 때문에 더 싼 가격에 제공 가능
5. 서로 다른 조직에서 서로 필요할 때 사용하는, 다중화하여 더 적은 자원으로 활용도 증가
6. 리소스 가상화를 통해 운영을 단순화하고 활용도를 증가, 서비스의 요구사항에 맞춰서 자원을 구매할 필요 없음 

> - 1 - 클라우드 컴퓨팅을 제공하는 곳에서 가지고 있는 클라우드 자원 이상을 요청하는 경우는 없기 때문이다.
> - 2 - up-front : 최소한의 지불 비용 없음, 3번에 따라 비용 지불
> - 5 - multiplexing
> - 6 - virtualization 

> 무조건 빌려 쓰는 것이 좋은 것은 아니므로 고민할 필요가 있다.

#### public clouds vs private datacenters
> public clouds 에 대한 점만 언급하심, 위 내용과 동일

### Classes of Utility Computing (= cloud computing)
필요할 때마다 "어떤" 서비스를 제공하는가?
- 각각의 회사마다 다른 차별화된 서비스를 제공한다. 
물리적인 하드웨어, 운영체제부터 해당 회사에서 개발한 라이브러리까지 다양한 자원을 제공한다.
> ex) Amazon EC2, Google AppEngine

### Cloud Computing Economics
기존 전용 컴퓨터를 활용한 호스팅보다 cloud computing 을 활용했을 때 더 효율 적인 상황
- demand for a service varies with time
- demand is unknown in advance
- organization that perform batch analytics can user the "cost associativity" of cloud computing to finish computations faster

### Components of Cloud Computing
- Five Essential Characteristics of Cloud Computing
- Three service models
- Four deployment models

#### Five Essential Characteristics of Cloud Computing
- on-demand self-service
- Broad network access
- Resource pooling
- Rapidly elasticity
- Measured service
##### on-demand self-service
##### Broad network access
##### Resource pooling
##### Rapidly elasticity
##### Measured service

#### Service Models
- Software as a Service (SaaS)
- Platform as a Service (PaaS)
- Infrastructure as a Service (IaaS)

##### Software as a Service (SaaS)
##### Platform as a Service (PaaS)
##### Infrastructure as a Service (IaaS)

#### Deployment Models
- private cloud
- community cloud
- public cloud
- hybrid cloud

##### private cloud
##### community cloud
##### public cloud
##### hybrid cloud

## Reading Articles :