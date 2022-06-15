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

신입 사원의 경우도 특정 부서에 투입하므로써, 교육 범위와 비용이 줄고 빠른 현장 투입이 가능하다.

### Why Microservice Architecture?
### 운영 측면에서의 장점
- Scalability
1 에서 N으로 늘어 났을 때, microservice 는 잘개 쪼개져 있기 때문에,
어떤 것이 얼마나 늘어나야하는지 확인하고, 늘어나야하는 것만 독립적으로 늘릴 수 있다. (자원을 효율적으로 활용)

- Availability
one service 가 fail 된 경우, 구성요소 중 하나에 문제가 발생하는 경우, 
문제가 발생하지 않는 서비스들은 다운되지 않는다.
즉, 전체 적인 서비스가 마비되지 않고(약간의 불편은 있겠지만), 사용자들이 사용 가능하다. 

- Fault Tolerance   
장애에 얼마나 잘 대응할 수 있는가?
모든 서비스에 문제가 발생하는 것이 아니라, 작은 일부분에 발생하는 문제이기 때문에,
해당 부분만 수정한다면 빠른 대응 가능

### 개발, 유지보수 측면에서의 장점
- Agility
빠르게 시장의 반응을 보면서 그때 그때 개선하는 방법론

잘개 쪼개진 서비스에 대해서 각각 최적화 되게 시장에 대응 하고, 
각각 다른 release 날짜에 배포 가능

- Polyglot(multilingual) Persistence
각각 목적에 맞는 도구(오픈소스 프레임워크, 언어, DB...)를 최적화 하여 사용 가능

- Maintainability
잘개 쪼개진 microservice 각각에 대해서 유지보수가 이루어지기 때문에,
유지관리 할 코드의 양, 테스트하기 위한 부하가 줄어 든다.

- Software Stack agnostic
기술적인 관점에서 봤을 때, 독립적인 소프트웨어에 최적화 되어있는 언어, 운영체제, 프레임 워크, DB 등을 선택할 수 있다.
통일할 필요 없이 최적화 된 개발 도구와 방법론을 선택할 수 있다.

- Faster Development
각각의 microservice 간에 주고받는 api 들만 서로 합의를 본다면, 소프트웨어 설계 개발 시연 배포 등에 대해서는
각각의 microservice 가 본인의 역할에 맞게 수행하면 된다.
다른 팀에 구애 받지 않고 업데이트 가능

- Clear Separation of Business Concerns
각 마이크로서비스는 고유한 비즈니스 기능을 제공하므로 비즈니스 문제가 매우 명확하게 분리됩니다.
비즈니스 전략, 조건, 니즈 등을 각 microservice 에 따라 다르게 적용

각각의 마이크로서비스의 역할, 그들 간의 관계가 미리 잘 정의될 필요가 있다.

### Example of Polyglot Persistence

## Reading Articles
