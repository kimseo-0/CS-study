# Lecture 17 - Microservices and Katakoda

## Today's Reading Articles

## Course
- what are Microservice
- why is it important to use Microservice
- how can we utilize Katakoda

### Monolithic & Microservice
#### monolithic
하나에 모든 것을 다 집어 넣는 것
여러개가 묶여서 하나로 되어있음

#### microservice
여러개의 서비스가 각각 독립적인 마이크로 서비스로 취급하고, 실행하며
서로 네트워크를 통해 연결

### example of monolithic architecture
e-commerce application

### deploying a single Monolithic application
- application becomes large 프로그램이 커질때
- the team grows in size 그러인해 개발팀 인원이 증가하고 여러 팀이 될때

컴퓨터는 결국 용량의 한계가 있을 수 밖에 없다.
결국, traditional approach 에서는 여러 개의 서비스를 운영하기 위해서는
여러 대의 컴퓨터를 설치하는 것만이 해결법이었다.

> 반드시 마이크로 서비스 아키텍쳐가 좋은 것은 아니다.
> 퍼블릭 클라우드를 빌려 돈을 내는 시점에서는 
> 컴퓨터 한대를 구매하여 서버를 운영하는 것과 비슷하거나 더 많은 비용이 나올 수도 있다.
> 왜냐하면, 기존의 전통적인 소프트웨어 구조로 이미 프로그램을 구현한 경우
> 성능이 더 떨어질 가능성, 더 많은 비용이 들 가능성등이 있다.

### deploying a Microservice application
하나의 애플리케이션을 구성하는 
여러 기능을 각각 따로 운영한다.

#### 프로그램이 커질때, 즉, 용량이 더 필요할 때

결국 Monolithic 에서 문제는 많은 용량이 필요한 상황이다.
실제 용량이 더 필요한 상황에서는 서비스 내 각 기능별로 요구량이 다를 수 있다.
하지만, Monolithic 에서는 단순히 전체 서비스를 복제하므로, 필요 없는 N배가 발생할 수 있다.

Microservice 에서는 필요한 기능, 필요한 하나의 마이크로 서비스에 대해서
각각 다르게 용량을 증설 할 수 있다. > 효율적

#### 팀이 커졌을 때
Monolithic, 거대한 하나의 프로그램을 각각 기능에 대한 모듈화 작업이 추가로 필요함,
하나의 기능, 모듈에서 문제가 발생할 경우 다른 기능의 개발이 어려운 상황 발생
배포 시 하나의 기능에서 문제가 발생할 경우 전체 서비스를 다시 버전 다운 해야할 수 있다. 

Microservice, 이미 거대한 프로그램을 각각 기능에 따라 각각의 작은 서비스처럼 개발된 상태,
각각의 서비스는 API를 통한 네트워킹을 통해 통신을하기 때문에,
각각의 서비스가, 서로에게 영향일 미치지 않는다.

각 서비스를 개발하는 각 부서들 간의 기술적인 회의의 필요성이 낮아지며,
각 서비스에 대한 배포 날짜가 각각 달라도 된다.
만약 하나의 서비스에서 문제가 발생한 경우, 다른 서비스에 구애받지 않고, 
해당 서비스에 대해서만 업데이트가 진행하면 된다.

신입 사원의 경우도 특정 부서에 투입하므로써, 교육 범위가 줄고 빠른 현장 투입이 가능하다.

### Why Microservice Architecture?
41분 부터

### Example of Polyglot Persistence

## Reading Articles
