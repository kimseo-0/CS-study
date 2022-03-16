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
- demand for a service varies with time : 서비스 자체의 변화가 시시 때때로 발생할 때
- demand is unknown in advance : 시장의 반응을 예측하기 어려운 때
- organization that perform batch analytics can user the "cost associativity" of cloud computing to finish computations faster
많은 양의 클라우드를 활용하여 한번에 많은 것을 단기간에 처리할 때

### Components of Cloud Computing
- Five Essential Characteristics of Cloud Computing
- Three service models
- Four deployment models

#### Five Essential Characteristics of Cloud Computing
클라우드 컴퓨팅의 5가지 특징
- on-demand self-service : 필요할 때 필요한 만큼 사용 가능
- Broad network access : 언제 어디서든 접근 가능
- Resource pooling : 한정된 자원을 효율적으로 활용
- Rapidly elasticity : 최대한 빠르게, 즉각적으로 활용
- Measured service : 정확한 계산

##### on-demand self-service
'사람의 개입 없이' 자동화 되어있는 인터페이스를 통해서 
필요한 자원 요청, 요청한 자원에 대해서 자동적으로 제공

##### Broad network access
빠른 네트워크, 데이터 센터 밖과 안의 네트워크, 데이터 센터 내부의 네트워크

##### Resource pooling
- resources are pooled together 
to serve multiple customers using a multi-tenant model   
여러명의 사용자에게 자원 풀에서 multiple 하게 자원 제공
- virtual and physical resources are 'dynamically' 
assigned and reassigned based on 'need and customers' demands'   
사용자의 수요에 따라 다이나믹하게 제공되는 자원의 양이 변화할 수 있음

##### Rapidly elasticity
'resources and capabilities' can be 'quickly and automatically'
deployed and scaled 'at any quantity and at any time'.   
어떤 양이든 어떤 시간이든 빠르고 자동적이고, 즉각적으로 자원 제공이 이루어져야함 

> over provisioning for peak load / under provisioning 그래프 `그림`   
> 자원이 낭비되거나, 예상치보다 더 많은 양의 자원이 필요해서 시스템이 마비되는 상황   
> ex) 수강신청 기간
> *peak load : 가장 많은 자원을 쓸때 필요한 자원의 양

##### Measured service
customer usages of resources and service
'automatically monitored, controlled and reported'   
사용자들이 사용한 자원 및 서비스에 대해서 자동적으로 모니터링하고, 금액을 계산한다.

#### Service Models
- Software as a Service (SaaS)
- Platform as a Service (PaaS)
- Infrastructure as a Service (IaaS)

##### Software as a Service (SaaS)
- ready to user application ex) G-mail, google docs, youtube...   
cloud infrastructure 위에서 돌아가는 application 서비스를 사용자들에게 제공한다.

- accessible from various client devices   
다양한 사용자 디바이스(인터페이스, 웹 브라우저, 프로그램)등을 통해 접근 사용 가능하다.
- consumer does not manage or control the underlying 'cloud infrastructure'
network, server, operating system, storage > 
기본 컴퓨팅 자원들을 포함한 , 밑바닥에서 어떤식으로 작동하는지 관심을 가질 필요가 없다.

##### Platform as a Service (PaaS)
- ready to use tools ex) Google apps engine
- 개발에 필요한 서비스를 제공 받는다.
- programming languages, libraries, tools

- consumer does not manage or control the underlying 'cloud infrastructure'
network, server, operating system, storage > 
기본 컴퓨팅 자원들을 포함한 , 밑바닥에서 어떤식으로 작동하는지 관심을 가질 필요가 없다.
- consumer has control over the deployed application and
possibly configuration setting for the application-hosting environment > 
개발자가 개발하는 본인의 서비스에 대한 개발 환경 등에 대해서 알 필요가 있다.

- 특정 분야에 대한 기술을 가진 회사가 해당 기술을 서비스로 제공하는 경우가 많다.
    - container as a service : docker, kubernetes
    - function as a service : AWS Lambda, google cloud platform
    - bigdata processing : spark, hadoop

##### Infrastructure as a Service (IaaS)
- fundamental computing resources : cpu, disk, network 등 밑바닥이 되는 기본 자원들
ex) Amazon EC2, S3, Window Azure
- 본인의 서비스를 running 하기위한 cloud infrastructure 를 제공 받는다.
- to user the provider's applications running on a cloud infrastructure.

- consumer does not manage or control the underlying 'cloud infrastructure' > 
밑바닥에서 어떤식으로 작동하는지, 가상 컴퓨터에서 어떤식으로 자원을 빌려주는지에 대해서 관심을 가질 필요가 없다.
- consumer has control over operating systems, storage, deployed application

#### Deployment Models
- private cloud : 조직 내부에서 사용하기 위한 cloud
- community cloud 
- public cloud : 외부에 빌려주기 위한 cloud
- hybrid cloud 

##### private vs public
서로의 장점이 단점이 될 수 있다.
- private cloud
    - most secure : 조직, 회사 내부에서만 이용하기 때문에 보안에 좋다.
    - good performance : 조직, 회사에서 필요한 맞춘 서비스를 제공할 수 있다.
    - high relability : 조직 내부에서 관리하기 때문에 신뢰도가 높다
- public cloud
    - pay as you go : 사용한만큼만 돈을 낼 수 있음
    - high scalability : 많은 컴퓨터 자원, 큰 규모

##### private cloud
- 하나의 조직, 기관만 사용할 수 있도록 제한
- 조직이 관리하고, 소유한 cloud 서비스
> 작은 조직의 경우 감당하기 어려울 가능성이 높다.

##### community cloud
private cloud + public cloud
- 자신의 private cloud 가 있고,
특정한 커뮤니티, 조직들의 모임 내에서 각자의 cloud 를
public cloud 로 공유하여 사용

##### public cloud
- 돈을 대가로 또는 무료로 누구나 사용 가능한 cloud
- 정부나, 큰 회사 조직 등에서 관리 > 자체 보유 전산실 서버 운영 및 관리

##### hybrid cloud
private cloud / public cloud 의 중간
- 기본적으로 private cloud 를 사용하다가, 일시적으로 많은 컴퓨터 자원이 필요할 때,
public cloud 를 빌려서 사용 

### Obstacles & Opportunities
클라우드 컴퓨팅의 위험요소와 해결 방안
1. availability : 하나의 public cloud 를 믿을 수 있는가?(만약 그 회사가 망한다면?)
2. data lock-in : 하나의 public cloud 에 종속되어서 다른 cloud 서비스로 이동하는 것이 어려움
3. data confidentiality and auditability : cloud 회사의 보안을 믿을 수 있는가?
4. data transfer bottlenecks : 통신이 원활한가? 통신 bottleneck 으로 인해 너무 많은 지연이 발생한다면?
5. performance unpredictability : 일정 수준 이상의 좋은 성능을 보장하는가?
6. scalable storage : 저장공간을 필요할때 즉각적으로 늘릴 수 있는가?
7. bugs in large distributed systems : 버그, 에러 없이 잘 실행되는가?
8. scaling quickly : 저장 공간의 빠른 확장 축소 
9. reputation fate sharing : 공유해서 자원을 사용하는 것을 신뢰할 수 있는가?
10. software licensing : 비용과 라이센스에 대한 문제는 없는가?

### Issues in cloud computing
- security
- reliability
- privacy
- legal
- migration from legacy systems
- disaster recovery

## Reading Articles : virtualization
- virtualization by VMWare : https://www.vmware.com/solutions/virtualization.html
- Xen and the Art of virtualization : https://cse.buffalo.edu/~stevko/courses/cse704/fall10/papers/2003-xensosp.pdf