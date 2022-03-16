# Lecture 03 - Infrastructure and Virtualization

## Quick Review of Reading Articles

## Course
### Learning Objective
- On-Premises vs cloud computing
- IT infrastructure
- How to make infrastructure
- Mutable and immutable infrastructure

#### On-Premises(On-prem)
- 특정 기업이나 조직이 본인의 컴퓨터, 서버를 직접 운영하는 것 (private cloud)
- 사용자 입장에서는 private cloud 나 public cloud 나 
컴퓨터 자원을 빌려서 쓴다는 개념에서 비슷하다고 볼 수 있다.

 On-premises vs Cloud Computing
- On-premises > CPU, Network 자원에 대한 전문가가 있고, 다룰 필요가 있는 경우
- Cloud Computing > IT를 도구로 삼아 서비스를 하고하는 경우

#### On-Premises vs cloud computing
- On-Premises > pets model
- Cloud Computing > cattle model

##### Pets Model
- given a nice name > 만약 서버가 100만개가 된다면??
- unique
- 문제가 발생했을때 고치려고 함

##### Cattle Model
- given names as incremental numbers and identifies with tags or id ex) server001, server002
- not unique = identical each other
- identified by tags
- 문제가 발생했을 때 새로운 것으로 대체

##### Cloud Model Comparison
`그림`
파란색 : 직접 관리해야하는 것

Amount of control over resources : on-premises > IaaS > PaaS > SaaS
Ease of set up / manageability : on-premises < IaaS < PaaS < SaaS

### Infrastructure
- Hardware & Network
- Operation System
- Middleware

#### IT Infrastructure Evolution

#### Hardware & Network : Server
- CPU : 소프트웨어가 돌아가기 위한 하드웨어
- Memory : 운영체제와 소프트웨어가 돌아가거나, 빠르게 처리할 데이터를 저장
- Storage : 보조기억장치

##### Web Server
- client and server communication
- using the Hypertext Transfer Protocol (HTTP)
- delivered most frequently HTML document

##### Database Server
- 대규모의 데이터를 관리하는 전용 소프트웨어

- SQL(structured query language) server
    - stored in tables (columns and row)
    - ex) MySQL
- NoSQL server
    - 비정형 데이터
    - ex) mongoDB
    > 최근에는 SQL 과 SQL 이 아닌것을 모두 포함하는 것으로 정의
    
#### Operation System : Linux
- Kernel : application 의 요구에 따라 하드웨어를 제어
- shell : interface between user and kernel

#### Middleware
- application 과 operating system 의 가운데 존재
- application 이 요구하지만 os 에서 제공하지 않는 기능들을 제공, os 를 보완
- ex) 라이브러리, 프레임워크 등등

#### Architecture
| | |
|---|---|
|Application|service and built in functionality|
|Platform|development tools|
| |basic middleware <br> (database services, application server)|
|Infrastructure| - virtualized resources (compute, networking, storage) <br> - virtualized images (image metadata, image)|
| |software kernel(OS, VM manager)|
| |hardware|

### Deploying at Scale
내가 만든 서비스를 대규모로 도입하고 싶다면?

`on premise` or `cloud computing` ?

IF, on premise...
#### How to set up Infrastructure?
1. physically rack and stack servers
2. configure hardware manually
3. deploy applications to the hardware

#### Drawbacks to this Process
- 요구조건에 딱 맞는 필요한 하드웨어를 구입하는 것은 많은 시간이 걸림 
    - 특별히 필요한 요구조건이 있다면 맞춤 제작이 필요할 수도 있음
- server 를 구축하는데 많은 사람이 필요함
    - 물리적으로 네트워크, 스토리지 등을 구축할 전문가
    - 하드웨어 유지 보수를 위한 많은 사람들
- 하드웨어들을 관리, 보관, 운용하기 위한 공간, 건물이 필요함
    - 건물 자체의 비용 및 추가적인 유지 비용
- 하드웨어를 설치하고 서비스를 구축할때까지 많은 시간이 든다
    - 모든 구축이 완료 될때까지 지연상태 발생
  
  
- 모든 하드웨어들이 동일한 환경 및 설정으로 구축되어야 함
    - 여러가지 다양한 application 에 대해서 서로 다른 설정을하는 것은 비효율적이므로 매뉴얼에 따라 deploying 하기를 위함
> HOW? → IaC

#### Maintain Infrastructure in Cloud Computing
##### Infrastructure as Code (IaC)
> Infrastructure as code is an approach to
> managing IT infrastructure for 
> the age of cloud, 'microservices' and 'continuous delivery'

- 소스 코드를 사용해서 IT infrastructure 를 요구하고 제공 받음(사람의 개입 x > automation 자동화)
- server, databases, network 와 다른 infrastructure 를 마치 하나의 software 처럼, 코드를 통해 요청했을 때 그에 대한 응답처럼 제공받음
- 코드를 통해 사용자는 빠르고, 일관되게 infrastructure 를 configure 하고, deploy 할수 있음 

##### Benefits of IaC
- speed and simplicity : 함수 라이브러리 호출하듯 간단하게
- configuration consistency : 운영체제가 무엇이든 일반화시켜 환경이 바뀌어도 쉽게 가능
- minimization of risk : 위험 최소화, 요청기능을 반드시 제공, 에러가 나더라도 숨기는 기능 제공
- increased efficiency in software development : 소프트웨어 개발에 효율 증대
- cost savings : 비용 절감

### Mutable and immutable infrastructure
#### Mutable infrastructure > pets model
- 목적에 띠라 업데이트, 패치가 가능하다.
- 계속 업데이트와 패치가 이루어지면 다양하고 unique 한 버전과 형태의 서비스가 존재함
- 다양한 버전들로 인해 문제 진단 및 해결이 어려움

#### Immutable infrastructure > cattle model
- 일부 변경이 아닌 전체 대체가 이루어짐
- 기존의 것을 destroy 하고 새로운 버전은 전체에 적용하여 재배포함
- 어떠한 변경이 발생해도 모든 서비스가 동시에 재배포됨

#### Mutable vs Immutable
- mutable :
여러 버전이 혼재함
- Immutable :
App 을 새로운 버전으로 업그레이드 하고싶다면,
현재 버전을 완전히 종료하고,
새로운 버전을 배포함

#### Benefits of Immutable infrastructure
- lower IT complexity and failures : 복잡도 실수를 줄일 수 있음
- easier troubleshooting than on mutable infrastructure : 문제 해결이 쉬움
- there is no need to track changes : 관리가 쉬워짐, 한 서비스에 대해서는 
하나의 이미지, 소스코드만 유지하면 되기 때문에, 여러 버전이 꼬이고 문제가 발생하는 것을 미연에 방지 가능

### Reading Articles
- What is a container? : 
https://www.docker.com/resources/what-container
- Docker: a Software as a service, Operating System-level virtualization framework
https://journal.code4lib.org/articles/9669?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+c4lj+
