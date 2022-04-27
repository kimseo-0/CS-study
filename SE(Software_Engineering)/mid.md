# chapter00_OT
## part1.

왜 소공을 배우는가를 역사적 사건

순수 소프트웨어로 인한 사건
소프트웨어가 포함된 사건

공학이 어떻게 사회적 이슈를 만드는가
> 소프트웨어를 짠다는 것이 그에 따른 책임과 안전성 위험 성능 등
더 체계적이고 책임감 있게 해야한다는 필요성에 대해서

(1) 유튜브 서비스 중단
사고 원인이나 피해 원인 묵묵 부답
1시간 40분 전세계적으로 중단

각종 온라인 라이브 행사, 뉴스등이 중단

10450원을 내는 유료 가입자의 경우 실질적 손해

트위터 사과문 > 원인 x

부가통신사업자의 경우 서비스 중단 고지 의무 '4시간 이상 중단'만 해당'

유료 가입자의 피해에 대한 약관 규정 x

(2) 구글 서비스 중단

한 시간 뒤 문제해결 공지 > 피해보상 x

구글 약관에 피해 보상에 대한 약관 규정 x

(3) NASA Challenger
정확한 사고 원인이 존재하긴 했지만
근본적으로는 나사 조직적인 문제가 있었다.
> 해당 조직의 담당자들은 승진을 하거나, 
추가 계약이 진행되는 등 해당 부분에 대해서 문제로 인식하지 않은 듯 보임 
> 추후 비슷한 사고가 발생했고, 위 문제가 해결되지 않은것으로 보임

(4)  Tesla autopilot
 

이런 사건이 발생하지 않게 하려면 어떤걸 더 신경써야할까?

## part2.
내가 해당 소프트웨어를 개발하는 개발자라면 어떻게 했어야 했을까?

(1) 카카오톡 서비스 장애

(2) 삼풍 백화점 붕괴

(3) KT 아현 지사 화재 사고 2018.11.24

> KT 국가 재난 망 사업 수주 2018.10.17

(4) 전남 영광 한빛 원전 1호기 사고


1. 주어진 비용과 여건 내에서 소프트웨어를 제작하는 것
2. 소프트웨어 개발에 대한 유의 의식, 책임감

# chapter01_intro
1) 소프트웨어 공학의 의미

2) 소프트웨어 공학 윤리 의식
소프트웨어를 만들거나 건물을 짓거나 공학을 하는 
사람들이 본인이 만든것들이 운영되는 것에 대한 책임 의식

3) case studies
공통적으로 챕터에서 사용할 examples 설명

part1.

p.3
소프트웨어의 중요성 
- 거의 모든 나라들은 경제 대부분의 것을 소프트웨어에 의존
ex) 네이버 - 검색 서비스 다양한 정보 제공 / 배민 - 점포, 음식 정보, 배달 인프라

피지컬한것들 > 로봇 > 인공지능 등
사람이 하는 일들도 모두 소프트웨어로 대체되어가고 있음

소프트웨어 공학에서 말하는 소프트웨어는 > 프로페셔널한 소프트웨어를 의미
실제 상용, 사용자간의 상호작용, 비즈니스가 있는 소프트웨어

소프트웨어 공학이란 프로페셔널한 소프트웨어를 잘 만들기 위한 이론, 방법, 도구등

소프트웨어 비즈니스에 대해서 국가적으로 사용하는 비용이 높아지고 있다.

p.4 software costs
소프트웨어에 대한 비용이 점점 늘어나고 있다.

소프트웨어 비용 > 소프트웨어 공학에서의 중요한 목표가 될 수 있다.

두가지
- 소프트웨어를 구동하기 위한 환경 
  > 소프트웨어 운영 개발할때에 대한 비용
  > 컴퓨터 보다 소프트웨어에 대한 가격이 더 높고 늘고 있다.
- 유지 보수 비용(maintain) : 시간이 지나도 문제 없이 잘 구동되게 하는 비용

경영적인 측면
- 소프트웨어 개발 구동 비용 줄이고
- 적은 비용으로 유지 보수 하는 것

p.5 software project failure
- 소프트웨어, 프로젝트를 개발하면 실패x
- 한번 개발 된 소프트웨어는 지속가능하게 유지보수되면서 지속 되어야 함 
// 소프트웨어를 개발하는 비용이 점점 증가함 그만큼 리스크가 크다는 의미

왜 소프트웨어 프로젝트는 실패하는가?
1) 시스템의 복잡도의 증가
문제의 증가 및 복잡성
시간의 변화로 인한 복잡성
예측 불가능

2) 소프트웨어 공학 방법론 사용에 실패
소프트웨어 공학 방법론을 생각하지 않고, 즉 사업화, 대규모화 등을 
고려하지 않고 만든 소프트웨어는
불안정한 소프트웨어가 될 수 있다.

p.6-7  
professional software development

소프트웨어? 
program + 프로그램을 짜기 위해서 평가하기 위한 documentation 
may be develope   particular customer or general market

좋은 소프트웨어란?
-필요한 기능을
-높은 수준, 성능으로 제공
-이 것들이 유지보수, 유지,안정적으로 제공되어야 한다.

소프트웨어 공학이란?
-소프트웨어가 태어나서 죽을때까지 all aspect 모든 측면
-다양한 원칙 이론 방법론 도구들

소프트웨어 엔지니어링이 하는일은?
-필요한 기능을 정의 > 명세서
-소프트웨어 제작
-테스트
-지속가능하게 유지보수, 발전

소프트웨어 엔지니어링과 컴퓨터 사이언스의 차이점?
좋은 소프트웨어를 정의 개발 테스트 유지보수
CS :소프트웨어의 기본적인, 근원적인 이론, 기술

시스템 엔지니어와의 차이점?
시스템 프로그래머 : 운영체제 밑 운영체제 운영체제와 소프트웨어의 연결부를 개발
시스템 엔지니어 : 하드웨어 + 소프트웨어 + 제반 인프라

p.8 Frequently asked questions about software engineering Question Answer What are the key challenges fac
하드웨어, 소프트웨어의 다양화 > 시간, 돈이 부족 > 소프트웨어는 신뢰할 만하게 개발되어야 함

소프트웨어 엔지니어링의 비용 cost?
제작 60%
테스트 40%
evolutionable, maintainable 유지보수 비용은 더 많은 비용

최고의 소프트웨어 엔지니어링 테크닉 방법론은?
최고의 방법은 없다.

웹에서는 소프트웨어 엔지니어링이 다를까?
다양한 기술들이 발전하고 시간이 지나면서 웹에 해당하는
소프트웨어 엔지니어링 기법들이 있다.

p.10 Product specification
불특정 다수에게 제공 (generic products) - 팔기위해 만든다
기능 명세를 개발하는 사람들이 만든다 

특정 고객을 위해서 만든
 ex_ emvedded control systems
기능 명세, 요구사항을 고객이 만든다

p.11
좋은 소프트웨어의 필수적인 특징

acceptability(usable)
사용자가 프로그램을 사용 가능한가

efficiency
잘 만들어 졌는가, 성능 > 메모리 사용, 응답시간

dpendability and security
안정적, 보안

maintainablility
유지보수

p.12
소프트웨어가 탄생하기 전에 필요한 지원
소프트웨어 개발 이후 유지보수

 조직화, 경영까지 반영 > 이론화, 문제 해결

소프트웨어에 대한 모든 부분

p.13
점점더 소프트웨어가 산업 사회에서 중요

다른 많은 사람들의 경험을 기반으로 나온 이론들 
> 비용을 줄여보자

p.14 software process activities
specification
development - 디자인 + 프로그래밍
validation - check ensure customer requires
evolution - maintainous, debuging, upgrading, patch

p.15 general issues that  affect software
heterogeneity - 다양하고 다른 타입의 컴퓨터 기기들이 생기면서 시스템이 복잡화 다양화

business and social change - 비즈니스, 사회적 트렌드의 변화

p.16 General issues that affect software
security and trust
보안, 안전성 강조

scale
스케일의 증가

p.17 software engineering diversity
절대 불명의 법칙 x > 하나의 경험적으로 정리된 방법론 제시

p.18 application types
stand-alone application

interactive transaction-based applications

embedded control systems

p.19
batch processing systems

entertainment systems

systems for modeling and simulation

p.20
data collection systems

systems of systems
기존의 각각의 시스템을 한단계 위해서 매니징

p.21 software engineering fundamentals
수많은 어플리케이션 타입에 사용할 수 있는 원칙들이 있다

정형, 체계화된 개발 프로세스 존재
성능 기능 보장 신뢰성 존재
요구해야할 기능이 있고 그것을 구현하는 것
reuse = 재사용 > 이미 만들어진 소프트웨어를 이용하는 것


p.22 internet software engineering

p.23 Web-based software engineering
서버는 다양한 역할을 하는 시스템이 
기존에 있는 기능들을 깔고 추가로 올리는 방식

p.24 Web software engineering
- reuse
- incremental agile development : 잘게 쪼개서 피드백을 받고 적용하는 기법
p.25
- service-oriented systems : 단순한 서비스를 제공하는 여러개의 서버들
- rich interface : uiux

p.26 
software engineering ethics

p.35 
case study

p.36 
insulin pump - embedded
mental health case patien management - database search
weather station - data collection, sensor, embeded, system of system

iLearn - learning system

p.37
피안의 정보를 센서를 통해 가져옴
인슐린 계산(과당/저당)
인슐린 투입

주기적으로 당뇨에 대한 데이터를 가져올것
실제로 인슐린 투입 
> 인간의 생명과 직결됨, 안정성 중요

p.38-40
insulin pump hardware architecture
activity model of the insulin pump
essential high-level requirement : relibly, correctable

p.41-46
mentcate
환자에 대한 동일한 정보를 의사가 확인 가능해야함

centralized database of patient information

secure network acess
download

management information
health service manager

lndividual care management - 환자의 대한 정보 생성 저장 수정 등
patient monitoring - 특정 환자에 대한 모니터링, 디텍팅
administrative reporting

privacy, safety

p.47-50
weather station
several hundred weather station, sesor
collect data
24-hour
read periodically and manage the data

weather station system
data management and archiving system
the station maintenance system

monitor the instruments
manage the system power
system failure > backup instruments

p.51-55
iLearn
digital learning environment
general, special purpose tool
suit their specific need - teachers or learners

service-oriented systems
all system components to be replaceable 
updated incrementally

confiauration services
application services
utility services

Integrated services - ex. API 서비스를 위한 서비스
Independent service - 사용자를 위한 서비스

p.27
테크니칼 스킬을 넘어서 전문가로서 책임감을 가져야 한다.
honest and ehincally responsible > respected as professionals
morally correct

p.28-29
confidentiality - 본인의 지식에 대한 보안 의식
competence - 본인의 능력에 대해 정직해야함
Intellectual property right - 저작권
computer misuse

p.30-33
ACM/IEEE code of Ethics

소프트엔지니어링 일 > 존중받는 직업적 활동, 공공의 이익을 위해 원칙 준수
1) public 공공의 이익
2) client and employer 최선의 이익을 위해 일 > 공공의 이익과 부합
3) product 자신이 개발한 제품과 그 수정이 가능하도록 최고의 전문적 수준
4) judgment 정직성 독립성
5) management 소프트웨어 공학 관리자는 소프트웨어 개발 유지보수에 대하여 윤리적 방법을 따라야한다.
6) profession 공공의 이익과 부합되는 방식 > 청렴성, 명성을 발전
7) colleagues 동료들에 대해 언제나 공정하고 지원
8) self 전문성 발전을 위해 평생 배우고, 윤리적인 방법의 사용 장려

1. PUBLIC
– Software engineers shall act consistently with the public interest.
S/W Engineer는 공공의 이익에 조화되게 행동 해라
2. CLIENT AND EMPLOYER
– Software engineers shall act in a manner that is in the best interests of their client and employer, consistent with the public interest.
S/W Engineer는 공공의 이익에 조화되는 상황에서는 고객과 고용주의 이익을 극대화하는 방향으로 일하라.
3. PRODUCT
– Software engineers shall ensure that their products and related modifications meet the highest professional standards possible.
S/W Engineer는 자기가 만든 제품의 제작과 수정에 있어서 가능한 최고 수준의 직업 적 기준에 부합되도록 하라.
4. JUDGMENT
– Software engineers shall maintain integrity and independence in their professional judgment.
S/W Engineer는 직업적 판단에 있어서 성실성과 독립성을 유지하라.
5. MANAGEMENT
– Software engineering managers and leaders shall subscribe to and promote an ethical approach to the management of software development and maintenance.
관리자와 지도자급 S/W Engineer는 소프트웨어를 개발하고 유지하는데 있어서 윤리적으로 접근하여야 하며 또 이를 장려하여야 한다.
6. PROFESSION
– Software engineers shall advance the integrity and reputation of the profession consistent with the public interest.
S/W Engineer는 공공의 이익에 조화되는 한 S/W Engineer들이 전문집단으로서 성실성과 신망을 얻는데 노력하라.
7. COLLEAGUES
– Software engineers shall be fair to and supportive of their colleagues.
S/W Engineer는 동료들에게 공평하고 잘 도와 주어라.
8. SELF
– Software engineers shall participate in lifelong learning regarding the practice of their profession and shall promote an ethical approach to the practice of the profession.
S/W Engineer는 실무 전문지식의 획득을 위하여 평생교육에 참여하고 업무를 수행하는데 있어서 윤리적으로 접근하는 것을 장려하라


p.34 ethic dillema

code of conduct 

http://sigsoft.or.kr/
spri.kr

p35
소프트웨어를 개발하는 전반위적인 모든 것
소프트웨어 개발 > maintainability dependability security, efficiency acceptability
specification, development validation evolution
software > all types of system

p.36 
software engineers have responsibilities

# chapter02_softwareProcess
2
software process models
process activities
coping with change -변화에 적응
process improvement

3 software process
structerued set of activities - 소프트웨어 개발에 요구되는 acivities의 정형화
process : 
specification > design and implementation > validation > evolution

> 대표적인 소프트웨어 프로세스

4 software process descriptions
- products : output, outcomes of process activity
- roles : responsivilities of people
- pre- and post-conditions : ordering

5 pan-driven and agile processes
1) plan-driven processes - 챕터 2에 주로 이야기
미리 계획, 계획대로 움직임

2) agile - 챕터 3에 주로 이야기
요구사항을 미리 다 정하는 것은 어려움
incremental, reflect changing customer requirements
가장 중요하고 기본적인것 개발 
> 그다음 중요한 것(이전 단계의 변화에 따라 민감하게 변경) 
> 그 다음 중요한것

> there are no right or wrong software processes

6
plan-driven : strictly phased, planned in advance
공학에서 많이 사용하던 기법 > 소프트웨어에 적용
ex) 하드웨어를 포함한 플랜 베이스드 프로젝트 안에 들어간 소프트웨어 개발할 경우
원자력 발전소, 무인자동차 브레이크 시스템 등의 안정성이 중요한 시스템의 경우 - safety-critical system
많은 인력이 필요한 매우 큰 프로젝트 - large system

agile process : incremental & continual, reflect changes
100% 완벽한 구현보다는 제때 주요한 기능이 돌아가야하는 소프트웨어
ex) business system, web services system

7 
software process models
8
1) waterfall model : 단계별로, 순서대로, 계획대로 
ex_ plan-driven model
2) Incremental development : 구현을 하기위한 규격화 개발 검증 밀결합 
ex_ agile, plan driven(여러개의 버전을 이 방법으로 개발 > incremental 함)
3) Integration and configuration : 기존에 있는것을 합치고, 필요의 경우 configuration
ex_ plan-driven, agile

9 
waterfall model
requirement > design > Implementation, unit test > integration, system test > operation, maintenance
기본적으로 계획대로 순서대로 이루어짐
중간 단계에서 잘못된것이 있을경우 다시 앞으로 가서 수행 > 이는 많은 비용이 든다.


10-11
변화를 받아들이기 어렵다, 변화에 수긍하기 어렵다
ex_ 설계가 하는 동안 시간이 흐르고 시장이 변화했을 때 기획부터 변경 하기에 많은 비용이 든다.
> 이는 반대로 변화가 적은 거의 없는 시장, 산업(stable business)에서 효용성이 있다는 뜻
어떤 시장 산업에서?
1) embedded system
2) critical system(safety and security)
3) large systems engineering projects > 전체적으로 plan based, 부분적으로 agile

12 
Incremental development
outline description
> concurrent activities 동시 다발적으로 ( specification, developement, validation )
<> initial version
<> intermediate version
> final version


13 장점
- 시장의 요구의 변화에 반응하고 적용하는데 적은 비용이 든다.
- 실제 개발된것을 사용자가 사용해보는 등, 시장의 피드백을 받아들이기 쉽다.
- 빠른시간 안에 실제 서비스를 전달 운영할 수 있다.

14 단점
- 전체 프로세스가 잘 보이지 않는다. > 적극적인 개발자들이 필요, 매니징이 어려울 수 있다.
- 전체 그림을 보지 않기 때문에 소프트웨어의 확장성이 떨어지는 소프트웨어가 나올 수 있다.

15 
Integration and configuration
짜집기 & 환경설정
개발보다는 기존에 존재하는 컴포넌트나 있는 소프트웨어를 가져와서 사용
commercial-off-the-shelf : 개발하지 않고 돈주고 사오는 것
configured to adaptation - 실제 개발되는 부분
reuse - 기존 소프트웨어 재사용
	
16 type of reusable sofware
- COTS
- Library, package
- web service : api based programming, serverless

17
필요한 것을 잘 찾고
부족한 필요한 부분을 추가하는 정도의 개발

requirements wpecification 
> software discovery / software evaluation 
> requirement refinement
> configure / ( adapt components / develop new components ) > Integrate system


web based service, 오픈소스, 클라우드 API 등이 활성화 되면서 이러한 
software engineering을 중요한 방법론으로 추가한듯

18 key process stages
requirements specification
software discovery and evaluation
requirement refinement > 목표 일부 수정, 찾을것을 바탕으로 수정
application systme configuration
component adaptation and integration

19 Advantages and disadvantages
장점
기존에 만들어져있고 검증되어있는 것을 가져오기때문에 코스트 리스크 감소
안정성 등 보장으로 리스크 감소
더 빠른 시간 안에 시스템 개발 제공이 가능하다
단점
내가 정희한 요구사항이 제대로 만족이 되는것인지 검증이 필요
주요 기능은 직접 개발한것이 아니기 때문에 시스템을 진화 시키려고 하는 경우
요구사항에 맞지 않거나 진화에 맞추어 발전하지 않는다면 새로운 오픈소스를 가져오거나 새롭게 개발해야할 수 있다.

20 
process activities
21
어떤 프로세스를 사용하더라도
specification > development > validation > evolution
단계를 거친다

각각의 activity는 output, 누가 수행하는가 role, order이 정해져 있다. 

22 
requirements engineering process
requirements elicitation and analysis : 큰그림을 그려주는 것, 시스템 레벨에서 설명서
out > system description : 시스템 설명서

requirements specification : 사용자와 시스템 사이의 요구사항을 구체적으로 작성, 실제로 개발할 기능들에 대한 정의
out > user and system requirements

requirements validation : 디자인 개발팀에게 넘겨서 구현하기 위한 정의서
out > requirements document



누가 하는가? 회사마다 제품의 특성마다 다를 수 있다

23 software specification
어떠한 요구사항을 가지고 있는지
거시적으로 보았을때 어떤 기능을 개발, 제한사항 등에 대해서 정의

requirement elicitation and analysis : 이 시스템이 무엇인지 정의
requirement specification : 어떤 요구사항을 원하는지 구체적으로 정의
requirements validation : 요구사항의 검증단계

24 
software design and implementation
system specification into an executable system
요구사항 정의서에서 디자인, 개발에 대해서 구체적으로 항목화 

디자인과 개발을 따로 고려하기도, 함께 고려하기도 함

디자인 > 그림을 그리는 과정
개발 > 운영체제, 소프트웨어등을 통해 실제 구현

25 general model of the design process
input : 
requirement specification(요구사항 정의서), 
platform information(타겟, 목적어에 대한, 요구사항에 사용되는 플랫폼에 정보), 
data description

activities :
architectural design(큰 틀) > interface design(component 간의 소통) > component design(작은 단위)
database design

outputs :
system architecture - 거시적으로 보았을때 어떻게 만들어져야 하는지, 큰그림, 서브시스템들이 어떻게 돌아가야하는지에 대한 전체적인 설계
database sepecification - 
interface specification - 세부적인 시스템 간의 상호작용
component specification - 세부적인 시스템들에 대한 디자인

26 design activities

27 system implementation
컴퓨터에서 실제로 구동하도록 개발하는 것

디자인과 개발이 맞물려 같이 진행될 수도 있고 아닐수도 있고 케바케이다

프로그래밍은 개발자 역량, 회사의 고유의 영역

테스트, 디버깅 단계도 포함

28 
software validation 
시험 검증
시험 veritication - 제대로 동작하는지, 요구사항에 맞게 구현했는지, 미시적 관점
검증 validation - 처음에 원래 계획한대로 원하는대로 나왔는지, 맞는 소프트웨어가 개발되었는지 

기능에 대해서 맞게 개발되었는지 체크, 리뷰
시스템이 만들어질때 요구사항에 있는 모든 기능에 대한 test case로 시험 

일반적으로 V&V activities

29 stages of testing
component testing > system testing > acceptance testing
모듈 단위 테스트 - 독립적으로 
전체 테스트 - 통합한 하나의 시스템에 대한 테스트
적합성 테스트 - 고객이 원하는 소프트웨어인지 체크

30 testing phases in a plan-driven software process (v-model)
요구되어지는 명세서와 그에 따른 테스트가 동시에 만들어진다
requirements specification / system specification > acceptance test placn > acceptance test
system specification / system design > system integration test plan > system integration test
system design / detailed design > sub system integration test plan > sub system integration test


31 
software evolution
소프트웨어는 flexible and change
소프트웨어는 비즈니스, 트렌드에 민감하기에 변화에 민감해야한다.

32 software system evolution

34-35 
coping with change 
>변화에 어떻게 대응?

- 비즈니스 환경, 트렌드의 변화에 따라 소프트웨어도 변경되어야 한다.
- 새로운 기술들과 가능성들이 열림에 따라 맞추어 변화되어야한다.
- 변화하는 플랫폼들이 요구하는 소프트웨어들이 변화한다.
 
> 리스크가 있지만 변화는 필수불가결하다.

36 reducing the costs of rework
어떻게 변화를 효율적으로 받아들일것인가
효율적 - 적은 비용 적은 인력 적은 개발상의 변화

- change anticipation 변화를 예측한다
 ex) prototype system : 진짜를 대충 빠르게 만드는 방법
 > 고객에게 말로 썼던 것들을 실제로 빠르게 보여주는 방법

- change tolerance 변화를 받아들인다.
 > incremental : 가장 중요하고 핵심적인 것들을 먼저 만들어서 피드백을 받는다.

37
system prototyping : 
빠른시간에 만든다
애매모호할 수 있는 요구사항에 대해서 확실히 맞는것인지 확인 > feasibility

Incremental delivery : 중요한 feture를 먼저 개발하는 방식

38 
prototyping 
빠른 시간 안에 initial version of a system, 데모 버전
모호할 수 있는 requirement, 불분명할 때 정말 맞는건지 확인
디자인 단계, UI 개발 단계에서 리스크를 줄이기 위해서 사용
본격 개발 전 필요한 부분에 대해서 프로토타이핑 할수도 있음

39
미리 모호한것을 가짜로 만들어봄으로써 구체화 할 수 있다
정확하게 요구사항을 이해할 수 있다
디자인이 제대로, 명확하게 이해 가능
진화 과정, 유지보수 과정에 적합한지 미리 확인해볼 수 있듬
개발 노력을 줄일 수 있다 > 모호한것들로 인해 발생하는 리스크를 줄일 수 있다.  

40 process of prototype development
명확한 기능, 디자인 등이 output으로 나와야한다.


41 prototype development
- rapid prototyping > 빨리 개발할 수 있는 언어, 툴을 사용한다.
- functionality
모호한것을 명확하게 하는 것
집중된 기능들을 중심으로 개발
성능이나 보안보다는 기능 중심으로 개발

42 throw-away prototypes
제대로된 요구사항 디자인x
성능x
진화, 유지보수x

43 
Incremental delivery
요구사항의 우선순위를 정하고
우선순위가 높은것을 먼저 구현한다

44
Incremental development
- 핵심 기능 개발
- 일반적으로 agile방법 사용
- customer에세 피드백, 평가를 받는다

Incremental delivery
- realistic 진짜 시스템
- 기존의 시스템에서 새로운 시스템으로 옮기는 것은 혼란을 줄 수 있으므로 그것에 대한 
대책이 필요하다.

45 Incremental delivery
개발은 Incremental하게
각각의 단계는 plan based 할 수 있다


46 Incremental delivery advantages
- 최종적으로 만들어지기전 미리 사용자에게 제공하여 빠르게 피드백을 받고
수정할 수 있다,
- 우선순위 높은 핵심기능들에 대해서 미리 디버깅, 안정화 가능
- 프로젝트 실패 확률 감소

47 Incremental delivery problems
- 프로젝트 규모에 따라서 여러 부서가 유기적으로 이루어져 있다면
 단계별로 딱딱 나누기 어려울 수 있다

- 개발 외적으로 매니징하는 입장에서 licence 등의 문제가 함께 해결되어야 한다.

48 
process Improvement
더 발전된 개발 프로세스

49
적은 시간에 적은 비용으로 고객이 원하는 소프트웨어를 개발하는 방법을 찾는 것

50
process maturity approach : 절차적, 행정적으로 단계별로 document 작성, 검증
agile approach : 행정 부담 줄이기 , document를 줄임

51
measure > analyze > change	

52 Process improvement activities
정량적으로 문제점을 찾는 단계
분석하여 프로세스의 개선점을 찾는다
개선

53 
process measurement
quantitative data를 찾아야해!
ex) n시간 걸리는 것을 n/2 시간 걸리게 할 수 있는 요소

54 process metrics
사람이 얼마나 적게 
더 적은 시간
더 적은 버그

55 capability maturity level 
CMMI > 국제 공인

56 SEI capability maturity model
initial - 초기상태, 아무것도 없다
repeatable - 프로덕트 매니징을 위한 프로세스
defined - 프로세스 위한 매니징을 위한 프로세스 
managed - 품질 매니징
optimising - improvement 프로세스

> but 오버헤드가 크다 - 단계가 높아질수록 작성되는 문서나 절차들이 많다

57
* 책 추천! software engineering at google

58-59 요약

# chapter03_Agile_SW_Development
agile을 하는 사람의 입장에서의 waterfall 방식에 대한 서술과 문제점 제기

3 Ice-break
past : software
plan based를 기반으로 agile을 섞는 형태의 산업 
소프트웨어 자체를 돈을 받고 파는 경우

today : service
agile이 유용한 산업 ex_ web bussiness, 유행에 민감한 서비스
소프트웨어를 비즈니스, 서비스에 도구적으로 사용

4
개발하는 관점에서
Past: Software
l Long plan (Years – Windows 9x, Office 2xxx) - 긴 개발 기간
l Huge man and money - 많은 인력과 비용
l Expected HARD deadline - 명확한 데드라인, 정확한 데드라인을 지켜야만함
(긴 개발기간과 많은 인력 비용이 들기 때문에)

Today: Service
l As Soon As Possible (Daily, Weekly, Monthly Release) - 가능한 빠른 개발기간
(서비스 경쟁 관계가 많기 때문에 먼저 개발해서 내놓는것이 중요하다)
l Limited man and money - 제한된 인력과 돈
l Meets market requirements - 사용자들, 시장의 변화, 요구에 즉각 반응

5 class
Past: Waterfall

6
Past: Waterfall Example
gantt chart를 통한 waterfall 스케쥴

7
Past: Waterfall (benefits)
요구사항 분석, 설계 시간을 심도있고 길게 많은 사람들이 고민을 한다
> 많은 문서와 공인이 이루어짐
> 앞 단계에서 다음 단계 대해서 구체적인 계획과 방안을 제시해줌
> 실제로 다음 단계의 담당자들은 앞 단계에서 제작한 문서들을 바탕으로 수행가능
> 앞 단계 사람들과 미팅 없이 문서를 통해 이해 가능
> 새로운 팀원이 왔을 때 해당 문서를 통해 작업 이해 가능
> 단계별로 해야할 일과 결과물이 규정되어있기 때문에 오해, 경험부족, 미스 커뮤니케이션 등으로 문제 발생할 확률이 적다
> 명확하고 구체적인 마일스톤이 제공된다
> 일관적이고 절차적으로 개발이 가능하다

8
Past: Waterfall (criticism) 
> agile을 지지하는 입장에서의 비판
- 절차와 문서를 중요시하다가 결국 제일 중요한 소프트웨어가 뒷전이 되는 경우가 발생
- 요구사항 분석이 100프로 신뢰할 수 있는가, 
과거에 정의한 요구사항 분석이 현재 상황에서 유효한가,
과거에 정했던 개발도구과 환경이 현재 구식은 아닌가

아무 문제가 생기지 않는 요구사항 분석 자체가 현실적으로 불가능하다

9
Past: Waterfall (criticism) > agile을 지지하는 입장에서의 비판
- 고객의 요구사항이 변경될 수 있다.
> 많은 변화와 개선작업이 이루어졌지만, 
소프트웨어에서 서비스가 더 중요해 지면서 적용이 어려워짐

10-12
What is Agile
공정과 도구보다 > 개인과 상호작용
포괄적인 문서보다 > 작동하는 소프트웨어
계약 협상보다 > 고객과의 협력
계획을 따르기보다 > 변화에 대응하기

13
https://www.youtube.com/watch?v=Z9QbYZh1YXY

14-15
Agile Manifesto

- Individuals and Interactions
개개인의 개발자가 self motivation, learning (자가발전)
서로 상호작용

- working software
서비스에 대한 설명을 문서로 하는 것이 아니라
실제 작동하는 소프트웨어로 보여주자

- customer collaborative
고객과의 대화를 통해 
고객에게 진정 필요한 소프웨어가 무엇인지 개발자 스스로 고민하고
고객과 collaborative가 중요하다

- respining to change
변화에 적응하고 변화할 수 있어야함

16 
12 Principles of Agile Development
1) satisfy the customer 고객 만족
2) welcome change 변화를 환경
3) deliver frequently 빠르게 서비스 내놓기
4) collaborate daily 매일 협력
5) support & trust motivated team 서로 돕고 신뢰하는 팀
6) promote face-to-face communication 면대면 대화 추구
7) delivery working software 작동하는 소프트웨어를 내놓기
8) promote sustainable pace 지속가능한, 유지가능성을 추구
9) promote technical excellence 기술적인 excellence를 추구
10) simplicity is essential 심플한게 좋다
11) have self-organize team 스스로 조직한 팀
12) reflect and adapt regularly 

17
1) satisfy the customer : 고객을 만족시켜라
2) welcome change : 변하는 요구사항과 상황에 긍정적으로 
3) deliver frequently : 소프트웨어를 주기적으로 내보내라

18
4) collaborate daily : 기획, 개발 서로 협력하라
5) support & trust motivated team : 좋은 팀을, 믿을 수 있는 팀
6) promote face-to-face communication : 얼굴보고 대화

19
7) delivery working software : 작동하는 소프트웨어가 프로젝트의 경과를 측정, 소프트웨어로 과정과 결과를 보여줘라
8) promote sustainable pace : 스폰서, 개발자, 사용자가 유기적으로 연결되어야하고, 유지되어야한다.
9) promote technical excellence : 좋은 소프트웨어를 만들기 위해서 끊임없이 자가발전해야함

20
10) simplicity is essential : 중요한것 중심으로 단순하게
11) have self-organize team : 스스로 팀을 조직화해라
12) reflect and adapt regularly : 주기적으로 재검토하는 시간이 필요하다

21 
Scrum : agile framework
애자일의 체계화된 형식, 방법론 중 하나

3-9명의 소규모 팀에서 하는 것을 권장
2-4주 단위로 소프트웨어 릴리즈
소프트웨어가 잘 만들어지고 있는지 트래킹하기 위한 스탠드업 미팅을 매일 15분

22
Scrum : Overview
product backlog > sprint planning meeting > sprint backlog
sprint 1-4 weeks
daily scrum
> finished work(sprint review + sprint retrospective

*sprint : 프로젝트를 기능단위로 쪼갠것
sprint backlog : sprint 버전업

23
Scrum : Components

24
"Learn Scrum Agile in 3 Simple Steps" 
l Youtube video clip (4m:59s)
l https://www.youtube.com/watch?v=niVbODz4Dn

25
"Introduction to Scrum - 7 Minutes" 
l Youtube video clip (7m:51s)
l https://www.youtube.com/watch?v=9TycLR0TqFA

26
3 roles
5 events
3 artifacts

27
개발 관점에서 만들어진 애자일과 스크럼

결국 소프트웨어를 만드는것에서 끝이 아닌
시장에서 운용하는 것이 중요
개발과 운용은 밀결합
> devops

28
Agile tool
https://thedigitalprojectmanager.com/agile-tools/

29
Reference: https://opensource.com/article/18/2/agile-project-management-tools

30
Reference: https://opensource.com/article/17/11/how-install-and-use-openproject

31
DevOps ("development" and "operations")
소프트웨어 서비스를 만들었을때
개발팀이 만든 소프트웨어를 실제로 운영하는 것은 운영팀

두 팀의 목적은 다르다
개발팀 : 빠른시간 안에 개발 
운영팀 : 사용자에게 안정적으로 제공

고객에게 도움이 되는 안정적인 제대로 된 소프트웨어를 개발해야한다.
결국 두팀은 좋은 소프트웨어를 만드는 것이 공통목적
밀접한 관계가 있으며 같이 가야함

32
automation : 소프트웨어가 빌드, 테스트, 릴리즈를 자동화한다
> 개발된 소프트웨어를 자동으로 빌드 테스트 릴리즈 하여 운영팀에게 전달
# 두 팀의 간격을 줄임

33
DevOps Concept
development : 개발
QA : 소프트웨어의 요구사항을 제대로 만족하는지 확인, 검증
operations : 서버에 올려서 제대로 동작

34
DevOps Process
dev 와 ops가 꼬리의 꼬리를 무는 형태

35
DevOps Tools

36
DevOps Tools in Detail

37 
DevOps Engineer Salary

38 
DevOps Engineer Experience & Salary

39 Summary

40 Reference
Agile software development – WiKipedia
https://en.wikipedia.org/wiki/Agile_software_development
Scrum - WiKipedia
https://en.wikipedia.org/wiki/Scrum_(software_development)
DevOps - WiKipedia
https://en.wikipedia.org/wiki/DevOps

# chapter04_Requirement_Engineering
1 Reqirements Engineering

2
- Functional and non-functional requirements
fun 소프트웨어의 기능
non-fun 추상적인 요구사항 > 개발 프로세스나 기능등에 영향을 줄 수 있는 부분
- Requirements engineering processes
요구사항을 뽑아내는 과정
- Requirements elicitation
요구사항 추출
- Requirements specification
요구사항 명세
- Requirements validation
요구사항 평가
- Requirements change
변화에 대해서 요구사항에 어떻게 반영할 것인가

3 Requirements engineering
두가지 측면
1) customer requirements 고객이 원하는 사항/제한 사항 : 고객의 요구사항을 흡수 
> 소프트웨어에 적용
2) system requirements 구현할 소프트웨어에 대한 디테일한 내용 > 고객

4 What is a requirement?
다소 추상적인 내용부터
디테일하게 정량적인 기능정의까지 기술될 수 있다.

- 다양한 요구사항을 고객에게 듣고 > 실제로 구현할 수 있도록 요구사항에 적는 것이 중요하다

요구사항이 할 수 있는 두가지 기능
1) 요구사항에서 도출된 내용을 통해 회사 계약을 하는 경우가 있다
2) 이 자체가 계약서가 될 수 있다 > 반드시 디테일하게 명시해야한다

5 Requirements abstraction (Davis)
a large software development
it must define its needs in a sufficiently abstract way
contract, offering(규약)
different ways of meeting the client organization’s needs 
> 기타 등등의 후속작업을 위한 기초가 된다, 사실상 계약서

Once a contract has been awarded > the contractor must write a system definition for the 
client in more detail > 계약이 체결되면 더 자세한 시스템 정의를 작성해야한다
client understands > 고객이 소프트웨어에 대해 이해할 수 있는 기초 자료
software will do > 개발자가 개발해야하는 소프웨어의 기능
validate > 검증의 기술적 배경

6 Types of requirement
User requirements
실제로 소프트웨어를 사용할 사람이 어떤것이 필요하다고 적는 내용
본인이 편한 언어로 쓰여지는 경우가 많다(natural language, 서로 다른 의미로 이해할 수 있으므로
> diagrams 같이 사용

System requirements
user requirements를 기반으로 소프트웨어이 구현하기 위해 어떤 기능, 어떤 규칙이 필요한지에 대한 내용
> 어느정도 구조화, 디테일함, 시스템 기능, 서비스의 제한사항
> 고객이나 계약자와의 약속이 된다

7 example) User and system requirements in the Mentcare system
멘탈케어 시스템 예시
user requirement
1. 매달 진료서 별로 처방한 약의 가격을 알고 싶다

system requirement
1.1 매월 마지막 날 정산 > function
1.2 5:30 리포트를 만든다 > function
1.3 처방약, 갯수, 가겨 등의 내용을 담고 있어야 함 > function
1.4 투입량이 다른 경우 추가 내용이 있어야함 > constraint
1.5 관련된 사람만 볼 수 있어야함 > constraint

8 Readers of different types of requirements specification
User requirements > 사용자, 시스템에 대한 이해 당사자들이 관심이 많을것이다, 시스템의 큰 구조를 관리하는 사람
System requirements >구체적인 개발에 관련이 있는 사람들

9 System stakeholders = 시스템 이해 관계자
Any person or organization who is affected by the system in some way and so who has a legitimate interest
요구사항을 만족 시켜야 하는 사람? > 소프트웨어와 관계 있는 모든 사람들

Stakeholder types
- End users : 실 사용자
- System managers : 관리자
- System owners : 관리자의 고용인
- External stakeholders : 법, 제재 등과 관련있는 사람

10-11 example) Stakeholders in the Mentcare system
- 관리 대상인 환자
- 관리 하는 의사
- 환자와 의사를 연결하는 간호사
- 상담 센터 담당자
- 하드웨어 소프트웨어를 유지 관리 운영하는 IT staff 
- 윤리, 법 등에 대해서 관리해 주시는 담당자
- 의사 외적인 치료 목적의 단체
- 의료 기록 관리자

12 Agile methods and requirements
incremental requirements 
> 애자일 방법론은 요구사항을 쉽게 변경할 수 있는 방법을 주로 사용

> 애자일보다는 plan based 측면에서 설명

13 
Functional and non-functional requirements

14 Functional and non-functional requirements
Functional requirements
- 시스템이 제공해야할 기능들, 특정 input, 시스템이 어떻게 동작하는지
- 제약 사항도 포함

 Non-functional requirements
- 어떠한 표준을 따라야함 > 그에 따라 구현해야할 것들
- 시간 제약
- 개발 프로세스

Domain requirements
- 묵시적으로 해당 분야에서 관행되고 있는 것들

15 
Functional requirements
-Describe functionality or system services.
우리 시스템이 제공해야 될 기능이나 서비스들
- Depend on the type of software, expected users and the type of system where the software is used.
우리 고객이 원하는 기능을 구현 > 그때그때 다름
- Functional user requirements may be high-level statements of what the system should do
 user requirement은 하이레벨, natural language로 써질 수 있다
- Functional system requirements should describe the system services in detail.
 system requirements는 user requirement를 바탕으로 
매우 디테일하게 시스템을 정의, 설명한다.
(계약서가 될 수도 있으므로 추후 법적인 문제까지 연결될 수 있다.)

16 example) Mentcare system: functional requirements
user requirement
A user shall be able to search the appointments lists for all clinics.
모든 진료소의 예약 정보를 보고 싶다.

The system shall generate each day, for each clinic, a 
list of patients who are expected to attend appointments 
that day. - 시스템은 날짜별로 진료소 예약 정보를 저장한다
Each staff member using the system shall be uniquely 
identified by his or her 8-digit employee numbe
시스템 사용자들은 8자리의 유니크한 사원번호로 확인할 수 있다.

17 Requirements imprecision = 부정확
가능한 디테일 해야함 > 그렇지 않으면 애매한 요구사항에 대해서 다른 이해를 할 수 있다

ex)
'search' 에 대한 구체적인 내용을 제시해야함
user - 이름 검색했을 때 해당리스트 나오는 것
developer - 클리닉을 선택하고 이름 검색

18 Requirements completeness and consistency
- Complete : 완벽한, 디테일하게 애매한 것 없게

- Consistent : 모순이 발생하면 안됨, 내용들끼리 충돌이 발생하면 안된다.

19 
Non-functional requirements
- constraints, reliability, response time, storage requirements
- particular IDE, programming language or development 
method
- more critical than functional requirements
 > 지켜지지 않았을 경우 프로젝트 자체가 무용지물이 될 수 있다

20 Types of nonfunctional requirement
다양한 종류 도표

21 Non-functional requirements implementation
- 소프트웨어의 전반적인 구조에 영향을 줄 수 있다
- such as a security requirement > 법적 확인, 인증 등이 필요할 수 있다

22 Non-functional classifications
- Product requirements
 execution speed, reliability 속도, 안정성
- Organisational requirements
 process standards used, implementation requirements
사용된 프로세스 표준, 구현 요구 사항
- External requirements
 interoperability requirements, legislative requirements(법적 요구사항)

23 example) Examples of nonfunctional requirements in the Mentcare system
- Product requirement
The Mentcare system shall be available to all clinics during normal 
working hours (Mon–Fri, 08:30–17:30). 
Downtime(오류 시간) within normal working hours shall not exceed five seconds in any one day.
- Organizational requirement
Users of the Mentcare system shall authenticate themselves using 
their health authority identity card. > id카드를 사용해야 시스템 사용 가능
- External requirement
The system shall implement patient privacy provisions as set out in 
HStan-03-2006-priv > 개인정보 보호

24 Goals and requirements
Goal > Verifiable non-functional requirement
추상적으로 제시된 목표 > 객관적으로 검증 가능하고 테스트가 가능하도록 도출 

25 example) Usability requirements
- The system should be easy to use by medical staff and should be organized 
in such a way that user errors are minimized. (Goal)
- Medical staff shall be able to use all the system functions after four hours of training. 
After this training, the average number of errors made by experienced users 
shall not exceed two per hour of system use. (Testable non-functional requirement)

26 Metrics for specifying nonfunctional requirements
Property > Property
Speed > Processed transactions/second, User/event response time, Screen refresh time
Size
Ease of use 
Reliability
Robustness
Portability

27-28 
Requirements engineering processes
§ Requirements elicitation;
§ Requirements analysis;
§ Requirements validation;
§ Requirements management

29 A spiral view of the requirements engineering process


30 
Requirements elicitation

31 Requirements elicitation and analysis
Requirements elicitation = requirements discovery

해야할 것 하면 안되는 것들을 정의하는 것

많은 이해 관계자들의 의견, 생각을 반영

32 
Requirements elicitation
1) Requirements discovery : 요구사항 찾기
2) Requirements classification and organization : 군 작업
여러사람들이 이야기 한것들을 유사한 것들끼리 분류하여 군을 만드는 작업
3)Requirements prioritization and negotiation :  우선순위 정하기, 협상
서로 conflict 할 수 있는 것들에 대해서 협상을 통해 우선순위를 정한다
4) Requirements specification : 요구사항 명세서 작성, 문서 

33 The requirements elicitation and analysis process
1 > 2 > 3 > 4 > 1 이 과정을 반복(spiral)

34 Process activities
32-33에 나온 내용

35 
Problems of requirements elicitation
- Stakeholders don’t know what they really want.
이해 관계자들이 실제로 본인들이 정말 원하는게 무엇인지 알지못하는 경우, 정확히 표현하지 못하는 경우가 많다
- Stakeholders express requirements in their own terms.
그들의 언어로 요구사항을 표현 > 모호한 표현들
- Different stakeholders may have conflicting requirements.
충돌되는 요구사항
- Organisational and political factors may influence the 
system requirements.
조직적인 이유, 정치적인 이유가 요구사항에 영향을 미치는 경우
- The requirements change during the analysis process. 
New stakeholders may emerge and the business environment may change.
분석 과정 동안 요구사항들이 계속 변경되고, 새로운 이해 관계자들이 등장한다

36 
Requirements elicitation
Interaction is with system stakeholders from managers to external regulators
관리자에서 외부 규제 기관까지 시스템 이해 관계자들과 상호 작용을 한다
> 이때 발생하는 문제는 줄이고 명확한 요구사항을 도출할 수 있는 방법론들을 앞으로 배울것임

37 
Interviewing
Types of interview
- Closed interviews based on pre-determined list of questions
미리 정해진 질문을 통해 인터뷰 진행 > 구체적인 기능이나, 핵심적인 것들에 대해서 
- Open interviews where various issues are explored with stakeholders.
주제를 미리 정하지 않고 다양한 것들을 편하게 이야기 하는 것 > 큰틀을 이해하고 싶을때

Effective interviewing
- open-minded, listen to stakeholders > 설득x 경청o
- discussions(springboard question, a requirements proposal, working together on a prototype system)

38 Interviews in practice
- mix of closed and open-ended interviewing
- stakeholders들이 어떻게 시스템을 사용하는지, 어떻게 인터랙션이 이루어지는지 이해하는 것이 중요
- open-minded without pre-conceived ideas
- 단순히 질문x 
> 미리 준비한 질문이나, 이전에 논의한 내용을 바탕으로 작성된 요구사항 제안서를 바탕으로 인터뷰 진행시 더 효율적

39 
Problems with interviews
- 전문가 인터뷰에서는 전문용어들을 이해하는것에 어려움이 있을 수 있다.
- 전문가 인터뷰에서는 domain에서 당연하게 여겨지는 requirements들의 경우 언급하지 않는 경우가 있다
> 인터뷰 전 사전에 관련 domain과 term에 대한 study가 필요하다

40 
Ethnography
말로 인터뷰, 의사전달을 하기 때문에 문제가 발생할 수 있다
> 말로 하는 대신 직접 관찰하는 방식을 사용한다

41 Scope of ethnography

사람들이 실제로 일하는 모습을 관찰함으로써 객관적인 요구사항 도출
실제로 작업하는 것 상호작용하는 것을 이해함

단점
현재의 시스템에 대한 모습을 관찰하는 것이므로 새로운 시스템에 대해서 어떻게 할지는 적용이 되지 않을 수도 있다.

모든 방법이 장단점을 가지고 있기 때문에 적절히 여러가지 기법을 사용해보고 맞는 것을 통해 요구사항을 도출해낸다

42 Focused ethnography
- 프로토타입 기법과 같이 사용하기도 함
- 프로토타입을 사용자에게 사용하게 하고 개선점을 찾는 방법

- 문제는 더 이상 관련이 없는 역사적 근거가 있을 수 있는 기존 관행을 연구한다

43 
Ethnography and prototyping for requirements analysis
Ethnography and prototyping 을 사용해서 requirements를 도출하는 방법 도표

44 
Stories and scenarios
Scenarios and user stories are real-life examples of how a system can be used
a description of how a system may be used for a particular task
구체적인 실생활 활용 예, 시스템이 어떤 특정 상황에 사용되는지

> 이해 관계자들이 실제로 그들과 관계 있는 상황이 제시 되기 때문에 더 구체적인 
의견을 이야기 할 수 있다.

45 Scenarios
user story를 산문으로 작성
Scenarios should include
- A description of the starting situation;
- A description of the normal flow of events;
- A description of what can go wrong;
- Information about other concurrent activities;
- A description of the state when the scenario finishes.

46-48 example) Photo sharing in the classroom (iLearn)

49-50 
Requirements specification
User requirements
최종 사용자들이 이해할 수 있어야 한다. 기술적 배경은 최대한 뺀다
System requirements
기술적 정보 포함

> 계약서의 내용이 될 수 있다

51 Ways of writing a system requirements specification
Natural language : 문장에 번호를 단것
Structured natural language : 템플릿 형태를 통해서 문장으로 표현(ex 표)
Design description languages : a language like a programming language, 수도 코드처럼 단어,문장으로 표현
Graphical notations : UML use case, sequence diagram > 시나리오를 바탕으로 '그림'
Mathematical specifications : 계산, 알고리즘 등에 대해서 공식을 적음 > user, 전문가가 아닌경우 어려워 할 수 있음

52 Requirements and design
requirements 
1) what the system should do
2) the design should describe how it does this > 요구사항 다음이 디자인 단계이기 때문에 디자인에 대해서 언급

requirements and design are inseparable 왜 같이 고려해야하는가?
- 기능적이지 않은 요구사항을 만족하기 위해서 특정한 시스템 구조가 고려되는 경우
- regulatory(규제) requirement 들에 의해서 고려되는 경우
- inter-operate :  각 단계들이 연결되어있기 때문에

53 
Natural language specification
- 넘버링 되어있음
- diagrams and tables 등을 통해 표현을 명확하게

54 Guidelines for writing requirements

- standard format 을 정해 둘 것
- 컴퓨터 전문 용어는 피해라
- 왜 필요한지에 대한 설명을 추가해라 

55 Problems with natural language
- 명확성, 정확도이 떨어진다
- 복잡해진다. functional and non-functional requirement들이 복잡하게 섞인다
- 여러가지 다른 요구사항들이 하나로 같이 표현된다

56 example) Example requirements for the insulin pump software system

57 
Structured specifications
- 명확성을 위해 > 구조화된 정형화된 구조가 필요함 (제한됨)

- embedded control system 즉 plan based 에 적합하다

58 example) Form-based specifications
반드시 명시되어야 하는 것들을 제시한 form을 제공

59-60 example) A structured specification of a requirement for an insulin pump

61 
Tabular specification
- 더 간단하고 명확하게 표현하기 위해 > 표 이용
- Particularly useful when you have to define a number of possible alternative courses of action.

62 example) Tabular specification of computation for an insulin pump

63 
Use cases
- a kind of scenario that are included in the UML
시나리오를 그림, 표등으로 표현되는 UML로 나타냄
- actors(이해관계자들, 사용자들)를 표현
actores와 system 사이의 관계가 나타남

64 example) Use cases for the Mentcare system

65 The software requirements document
- what is required of the system developers 
 > 시스템이 무엇을 하는지 사용자들에게 보여주는 것에 집중할것
- user requirement + system requirement
- 전문적인 어떻게 시스템이 동작하는지에 대해서는 최대한 배제할것 

66 Users of a requirements document
각 user들이 요구사항 문서를 통해 하는 작업, 생각에 대한 도표

67 Requirements document variability
각 회사마다 requirement document 양식이 존재하기도 함
IEEE에서 제공하는 국제 표준도 있음

68-69 The structure of a requirements document
IEEE 제공 국제 표준

70-71 
Requirements validation	
- customer really wants > 고객이 정말 원하는 내용으로 작성되었는지 확인
- 요구사항 에러는 매우 높은 비용이 들수 있으므로, 평가과정이 매우 중요

72 Requirements checking
- Validity : best support the customer's need 
타당성, 고객의 요구사항을 최대한 잘 반영했는지 확인
- Consistency : Are there any requirements conflicts? 
일관성, 충돌이 없는지 확인
- Completeness : Are all functions required by the customer included?
완벽한, 부족함 없는 설명
- Realism : 현실성, available budget and technology
- Verifiability : Can the requirements be checked?
검증 가능성, 요구사항이 제대로 구현되었는지 확인할 방법이 있는가?

73 Requirements validation techniques
- Requirements reviews
- prototyping : Using an executable model of the system to check requirements
- test-case generation : Developing tests for requirements to check testability, 가상으로 시뮬레이션

74 
Requirements reviews
- client and contractor staff 모두가 리뷰에 참여
- formal or informal

75 
Review checks
- Verifiability
Is the requirement realistically testable?
현실적으로 요구사항 테스트 가능
- Comprehensibility
Is the requirement properly understood?
문서만으로 시스템에 대해 이해 가능
- Traceability
Is the origin of the requirement clearly stated?
추적 가능
- Adaptability
Can the requirement be changed without a large impact on other requirements?
변화 가능

76-78 
Requirements change
- The business and technical environment of the system always changes after installation.
비즈니스나 테크니컬한 환경이 변화할 수 있다
법규나 규정이 변경될 수 있다

- The people who pay for a system and the users of that 
system are rarely the same people.
시스템의 이해 관계자들, 투자자들, 유저들이 쉽게 변경될 수 있다

- Large systems usually have a diverse user community, 
with many users having different requirements and 
priorities that may be conflicting or contradictory
여러 유저들이 서로 다른 요구사항을 가지고 있고 그 사이 충돌이 발생하기도 함
> 유저의 요구사항이 변경되는 상황 발생

79 Requirements evolution
Initial
understanding of problem > Initial requirements >>
Changed understanding of problem > Changed requirements

80 Requirements management
- 요구사항을 작성하는 과정에서 변화를 받아들이고 적용하고 관리하는 것을 의미

- 요구사항을 개별적으로 관리하고, 각 요구사항들간의 관계를 관리
새로운 요구사항이 추가되었을 때 기존 요구사항에 무슨 영향이 있는지 확인할 수 있어야한다

81 
Requirements management planning
- Requirements identification 
Each requirement must be uniquely identified so that it can be cross-referenced with other requirements. 
각각의 요구사항을 확인, 식별할 수 있어야한다.
- A change management process 
This is the set of activities that assess the impact and cost of changes. 
I discuss this process in more detail in the following section.
구체적인 변경 관리프로세스가 있어야한다.
- Traceability policies 
These policies define the relationships between each requirement 
and between the requirements and the system design that should be recorded. 
추적 가능해야함
- Tool support 
Tools that may be used range from specialist requirements management systems 
to spreadsheets and simple database systems.
여러가지 지원 툴들이 있음

82-83 
Requirements change management
Identified problem >
step 1) Problem analysis and change specification
문제를 분석하고, 문제에 대해서 규격화한다
step 2) Change analysis and costing
변경으로 인한 영향과 비용들에 대해서 분석
step 3) Change implementation
변경을 적용
> Revised requirements

# chapter05_System_modeling
1 
System Modeling
요구사항을 반영해서 시스템에 대한 정의
시스템과 상호작용하는 환경/사용자들간의 인터렉션 정의
시스템 내부적으로 어떤 기능들에 대한 정의

2
- Context models : 어떤 시스템인가?
- Interaction models : 사용자, 환경과 시스템 간의 인터랙션
- Structural models : 시스템 내부의 여러 클래스들 간의 상호작용
- Behavioral models : 세부적인 시스템의 기능
- Model-driven engineering

3 System Modeling
- 시스템을 다양한 관점에서 표현하는 여러가지 모델들
- graphical notation, 대체적으로 애매한 말보다는 구체적인 그림을 이용해서 나타냄
ex) UML(unified modeling language) 

4 
Existing and planned system models
- 기존에 이미 존재하는 시스템 모델링 
> 이걸 기반으로 현재 시스템의 문제, 새로운 시스템에 필요한 것들을 확인
- 새로운 시스템 모델링
> 새로운 시스템에 대한 설명 도구, 디자이너/개발자가 명확히 시스템 이해 가능

사용
> discuss requirement, design proposals 
요구사항과 설계에 대한 디스커션을 위한 도구
> document the system for implementation
시스템 구현을 위해 시스템을 이해하기 위한 문서

- model-driven engineering process
it is possible to generate a complete or partial system implementation from the system model.

5 
System perspectives
- external perspective
where you model the context or environment of the system.
외부에서 관점
시스템의 외부적인 환경이나 상황
- An interaction perspective
where you model the interactions between a system and its environment, or between the components of a system.
시스템과 사용자, 시스템과 환경과의 상호작용
- A structural perspective
where you model the organization of a system or the structure of the data that is processed by the system.
시스템 내부의 기능, 클래스, 오브젝트
- A behavioral perspective
where you model the dynamic behavior of the system and how it responds to events. 
시스템 내부의 이벤트, 어떤 일을 하는지

6 
UML diagram types
- Activity diagrams
action, 데이터 처리 과정, 기능 처리 과정
- Use case diagrams
각각의 시나리오 중심
- Sequence diagrams	
누가 누구에게 무엇을 > 결과 표현
- Class diagrams
객체 정의, class 중심, class 간의 상호작용
- State diagrams
시스템의 현재 상태와 이벤트에 따른 시스템의 반응

7
Use of graphical models
- discussion about an existing or proposed system
기존에 있는 시스템을 표현, 새로운 시스템 제안

- As a detailed system description that can be used to generate a system implementation
시스템을 설계하거나, 실제로 시스템을 구현하기 위한 코드를 뽑아내는 과정까지 사용될 수 있다

8-9 
Context model
- they show what lies outside the system boundaries
시스템과 시스템 밖 사이의 경계선에 대한 정의
- Social and organisational concerns
사회나 조직까지도 영향을 줄 수 있다
- Relationship with other system
시스템과 다른 시스템 간의 관계

10 
System boundaries
- 시스템 내부적인 것과 외부적인 것들을 정의
- 사용자와 환경 속에서 시스템의 위치
- Defining a system boundary is a political judgment

11example) The context of the Mentcare system

 
12 
Process perspective
context model
- 시스템과 관련된 외부 시스템들에 대해서 단순히 나타내고 관계만 나타내도 된다

Process model
- borader business process에서 시스템이 어떤 역할을 하고 다른 시스템들과 상호작용을 하는지구체적으로 나타낸다

13 example) Process model of involuntary detention


14-15 
Interaction models
- help to identify user requirement
사용자들이 시스템을 이용해서 어떤 것을 할 수 있는지를 명확히 할 수 있다
- 시스템과 외부 시스템간의 상호작용
- 시스템이 외부 시스템에 성능, 신뢰도, 보안 등에 미치는 영향에 대해서 나타냄
- use case diagram and sequence diagram으로 많이 나타낸다

16 
Use case modeling
- 특정 시나리오에 대해서 어떻게 작동하는지에 대해서 그림으로 나타냄 > UML
- 각각의 시나리오 대해서 그림을 그리고, 각각의 시나리오에 국한된 외부 시스템들에 대해 정의
- 시나리오의 사용자와 외부 시스템들을 actors로 나타낸다

17 example) Transfer-data use case


18 example) Tabular description of the ‘Transfer data’ use-case
> 표를 활용해서 조금 더 디테일한 정보 나타냄

19 example) Use cases in the Mentcare system involving the role ‘Medical Receptionist'
> 특정 actor의 role을 나타내는 그림

20 
Sequence diagrams
- actors와 시스템간의 상호작용을 나타냄
- 각각의 시나리오에 대해서 그림

21 example) Sequence diagram for Transfer Data
UML 보다 더 쪼개진 단계들에 따른 상호작용을 나타냄
각 단계에 대한 Input과 output들도 나타냄

22 example) Sequence diagram for View patient information


23-24 
Structural models
- 시스템 내부의 컴포넌트들이 어떻게 조직화 되어있는지

25 class diagrams
- object-oriented system을 개발할 때 사용된다
시스템 내부의 클래스들과 클래스들 간의 상호작용을 나타낸다

26 example) UML classes and association

27 example) Classes and associations in the MHC-PMS

28 example) The Consultation class


29-30 
Generalization
- 복잡한 것을 관리할때 사용하는 기법
- 구체적인 대상의 특징 x > 일반적인 특징 = 일반화
- 서로다른 대상이 하나의 클래스로 표현됨

* 재사용성!

- 변화가 있을 때, 모든 클래스를 확인할 필요 없이 
변화의 영향을 받은 특정 클래스만 수정하면 된다

- higher-level class : 추상적, sub class들에 중복되는 부분, 공통 부분
- lower-level class : 특화된, 구체적인 부분

31 example) A generalization hierarchy
32 example) A generalization hierarchy with added detail


33 Object class aggregation models
- 객체안의 has 객체들 > part-of relationship, has relation
aggregation model
class 안의 멤버로 다른 class를 가지고 있는 것이다
자동차는 바퀴 네개, 핸들, 엔진을 포함하고 있다

코드 재사용, 데이터 중복 제거( 정보는 한 곳에 있어야한다 )


34 example) The aggregation association

35-36 
Behavioral models
- 실제로 실행해야하는 dynamic behavior, 
what happens when system response to stimulus from environment
주변 환경으로 오는 자극에 대한 시스템의 응답

these stimuli as being of two types
- Data : 처리해야 할 데이터
- Events : ex) 마우스, 키보드, 센서 등

37 
Data-driven modeling
- data-processing systems > 데이터를 처리 중심 시스템
- input data >(이 과정이 복잡) > associated output 
- end-to-end processing : 입력에서 출력까지 명확

38  example) An activity model of the insulin pump’s operation

39 example) Order processing

40 
Event-driven modeling
- Real-time system이 대부분 event driven
ex) landline phone
- external and internal event 들에 대해서 시스템이 어떻게 응답하는지
- 시스템을 정교하게 나뉜 많은 상태로 표현, 
event(stimuli)로 인해 시스템이 하나의 상태에서 다른 상태로 변화

41 State machine models
- state들을 정의
- event에 따른 state 간의 변동을 표현

42 State diagram of a microwave oven

43 Microwave oven operation
44 States and stimuli for the microwave oven (a)
45 States and stimuli for the microwave oven (b)

46-47 
Model-driven engineering(MDE)
- MDE : 프로그래밍 대신 모델을 이용해 소프트웨어 개발 단계까지 가져가는 것
모델링 > 자동으로 프로그램으로 나옴

48 Usage of model-driven engineering
찬성
- higher levels of abstraction, 추상적으로 표현으로 시스템 개발이 가능
- 자동으로 코드를 생성함 > cheaper to adapt system to new platform

반대
- 추상적인 모델로 시스템 구현을 해도 되는것인가?

49 Model driven architecture(MDA)
- 소프트웨어 개발자들도 모델 중심으로 구현 하는 방법론
- software design and implementation that uses a subset of UML models to describe a system
 
50 Types of model
- CIM(computation independent model)
- PIM(platform independent model)
- PSM(platform specific models)

51 example) MDA transformations

52 example) Multiple platform-specific models

53 Agile methods and MDA
- 문서 작성을 기피하는 애자일 방법론에서는
문서 작성을 통해 개발을 하는 MDA 방법과 맞지 않는 부분이 있다

54-56 Adoption of MDA
- 제한적인 tool > 제한적으로 해당 툴이 갖추어진 분야, 기업에서 사용 가능하다

# chapter06_Architectural_design
1  Architectural Design

2 Topics covered
- Architectural design decisions : 시스템 전체 골격 디자인
- Architectural views : 다양한 관점
- Architectural patterns : 다양한 방법, 다양한 소프트웨어에 맞는 골격을 패턴화
- Application architectures

3 
Architectural design
- 소프트웨어 시스템의 내부적으로 클래스, 객체들을 어떻게 조직화 할것인가
- requirement engineering 의 후속단계, 디테일한 디자인을 하기 전 중간 단계
소프트웨어 구성 요소 main structureal components 구조화, 디자인
- output : component, communicating component(컴포넌트 간의 상호작용)

4 Agility and architecture
- 소프트웨어의 큰 골격을 세우는 것은 
어떠한 개발 방법론 이론을 사용하더라도 중요한 단계이다
- refactoring, 큰 골격을 다시 수정하는 것은 많은 비용이 든다
> 많은 컴포넌트에 영향을 주기 때문에

5 example) The architecture of a packing robot control system

6 Architectural abstraction
- 규모가 작은 경우 > 하나의 컴퓨터와 몇가지의 실행파일
- 규모가 큰 경우 > 여러대의 컴퓨터와 많은 프로그램들

7 
Advantages of explicit architecture
- Stakeholder communication
이해관계자들과의 커뮤니케이션 도구
- System analysis   
시스템 분석 
요구사항에 맞는 컴포넌트와 상호작용
non-functional requirement(보안 정책 안정성)
- System analysis
시스템 구조가 비슷한 시스템이 있다면 재사용할 수 있다

8 Architectural representations
- 간단하고, 정형화 되지 않은 diagram들을 사용해도 충분히 설명 가능
- 디테일한 부분이 많이 부족할 수 있지만, 
이 단계에서는 굳이 디테일한 설명까지 할 필요가 없다
서로 이해할 수 있을 정도로 심플하게 시스템 구조를 표현해주면 충분하다
(이후 디테일 디자이너들이 할 것임)

9 Box and line diagrams
- very abstract
- useful for communication with stakeholders and for project planning

10 Use of architectural models
- 앞으로 세부적으로 디자인할 시스템에 대한 내용
- 이미 만들어진 시스템에 대한 설명하기 위한 목적
> 기존 시스템에 대한 문서, 설명서가 없어서
> 새로운 시스템을 만들기 전 현재 상황에 대한 파악을 위해서

11-12 
Architectural design decisions
- 개발된 시스템에 따라 Architectural design 프로세스가 creative, differ하다
- 많은 공통 decisions들이 있다. system의 비기능적 특징에 영향을 준다

13 
Architectural design decisions
Architectural design decisions을 할때 스스로 질문할 것 중 8가지를 제시함

1) Is there a generic application architecture that can act as a 
template for the system that is being designed?
디자인할 시스템에 적용할만한, 참고할만한 정형화 된 템플릿이 있을까?
2) What architectural patterns or styles might be used?
사용할 수 있는 패턴이나 스타일?
3) What will be the fundamental approach used to structure the system
시스템을 structure하는데 사용할 수 있는 정형화된 접근법?
4) How will the structural 
components in the system be decomposed into sub-components?
시스템에 들어갈 sub-components?
5) What architectural organization is best for delivering the 
non-functional requirements of the system?
비기능적 요구사항에 대해서 어떻게 구현할 것인가?
6) How should the architecture of the system be documented?
어떤식으로 문서화 할것인가?
7) What strategy will be used to control the operation of the components in the system?
각 컴포넌트의 기능과 제어?
8) How will the system be distributed across hardware cores or processors?
시스템이 얼마나 많은 하드웨어가 필요한지? 또는 AWS와 google같은 외부 클라우드를 사용할 것인가?
 
14 
Architecture reuse
- 비슷한 domain의 시스템은 비슷한 구조를 가지고 있다
- core architecture는 그대로 사용하고, 
만족해야하는 particular custorme 요구사항만 추가적으로 디자인하는 방식

15 Architecture and system characteristics
- Performance 성능
Localise : 한 곳으로 모음
minimise communications : 통신 부하 최소화
use large rather components : 높은 성능
- Security 보안성
a layered architecture > 중요한 critical asset을 안쪽 layers에 넣어둠
- Safety 안정성
a small number of sub-systems
- Availability 가용성(멈추지 않는 것)
redundant components and mechanisms
ex) 여러대의 컴퓨터로 하나의 시스템을 구동시켜서 
하나의 컴퓨터가 고장이 나도 나머지 하나의 컴퓨터로 구동할 수 있게 하는 것
- Maintainability 유지보수
use fine-grain(정제된), replaceable(갈아끼울 수 있는) components

16-18 
Architectural views(관점)
어떤 관점으로 디자인 할 것인가?
- 디자이너에 따라 다를 수 있다
- 가장 시스템에서 문제가 되는 부분, 풀어야 하는 것이 무엇이냐에 따라서 달라질 수 있다
> 여러가지 관점 중 필요한 관점들을 취해서 디자인을 한다

- Logical view : 객체와 객체 클래스로 시스템의 key abstraction, 핵심을 보여준다
- Physical view : 실제 실행될때, 시스템에서 컴포넌트들이 
어떤 프로세스에 따라 어떻게 interacting 상호작용하는지 보여준다
- Development view : 소프트웨어가 개발 관점에서 어떤식으로 쪼개지는지(컴포넌트화)
- Process view : 사용되는 시스템 하드웨어와, 어떤식으로 분산처리되는지

19 4 + 1 view model of software architecture 
Related using use cases or scenarios (+1) 
더 구체적으로는 특정한 use case에 맞춰서 디자인 수행

20 Representing architectural views
- UML
- UML보다 더 심플하게, 간단한 도형등을 사용해서
- Architectural description languages (ADLs) 
> 다양한 방법들이 있어서 상황에 맞게 선택하여 사용하면 됨

21-22 
Architectural patterns
위키피디아에 검색해보면 좋을 듯
- sharing and reusing knowledge
- has been tried and tested in different environments.
- include information about when they are and when the are not useful
- represented using tabular and graphical descriptions

23 
The Model-View-Controller (MVC) pattern                                		
presentation(보여지는 것), interaction(상호작용), data 를 분리
Model : data
view : data가 어떻게 보여질지
controller : user interaction과 model, view의 interaction

Example
web-based application system 

When used
데이터를 multiple 한 방법으로 보여주고자 할때
향후에 data를 interaction, presentation하기위한 요구사항이 어떻게 변경될지 모를때

Advantages
각각의 컴포넌트들끼리 서로 분리되어, 영향을 주지 않고 수정, 발전 가능

Disadvantages
간단한 시스템에서는 additional code and code complexity해야 한다.
간단한 시스템에서는 오히려 더 복잡하다

24 The organization of the Model-View-Controller
Model-View-Controller 상호작용 도표

25 example) Web application architecture using the MVC pattern

26 
Layered architecture
- Organises the system into a set of layers
계층적
- When a layer interface changes, only the adjacent layer is affected
인접한 레이어만 영향을 받는다

27 A generic layered architecture
읽어보기

28 A generic layered architecture

User interface

User interface management
Authentication and authorization

Core business logic
/application functionality System utilities

System support (OS, database etc.)

> ex) OSI


29 example) The architecture of the iLearn system

30 
Repository architecture
ex) github

- When large amounts of data are to be shared
> passive한 시스템에서 잘 사용할 수 있다
알고리즘이 돌아가지 않는 시스템, 버저닝 시스템등.. 

31 The Repository pattern
읽어보기

32 example) A repository architecture for an IDE


33 
Client-server architecture
- Distributed system mode

34 The Client–server pattern
Description
client : 작업 요청
server : 작업 처리

When used
정보/기능이 서버안에 있고 그 것을 원격으로 접속할때

Advantage
- servers can be distributed across a network
서버들이 네트워크를 통해서 분산되어 있다.
- 인터넷 통신을 기반으로 해서 원격으로 컴퓨터에 접속

Disadvantage
- 관리해야하는 서버, 컴퓨터가 너무 많아짐

35 example) A client–server architecture for a film library


36 Pipe and filter architecture
- process의 input, ouput의 관점
- sequential model과 비슷함

37 The pipe and filter pattern
읽어보기

38 An example) of the pipe and filter architecture used in a payments system


39-40 
Application architectures
- have a common architecture
- create a system that meets specific requirements.

41 Use of application architectures
-  a starting point for architectural design
-  a design checklist 
-  a way of organising the work of the development team
- a means of assessing components for reuse
- a vocabulary for talking about application types

42 Examples of application types
- Data processing applications
- Transaction processing applications
- Event processing systems
- Language processing systems

43 Application type examples
Transaction processing systems
- E-commerce systems;
- Reservation systems.
Language processing systems
- Compilers;
- Command interpreters.

44 
Transaction processing systems
45
46

47 
Information systems architecture
- layered architecture
48
49

50 
Web-based information systems
Information and resource management systems are now 
usually web-based systems

51 Server implementation
These systems are often implemented as multi-tier client 
server/architectures (discussed in Chapter 17)

52 
Language processing systems
Accept a natural or artificial language as input 
and generate some other representation of that language
53 The architecture of a language processing system

54-55 
Compiler components
56 A repository architecture for a language processing system
57 A pipe and filter compiler architecture




# Chapter07_Design_and_Implementation

1 Design and Implementation
2 Topics covered
- Object-oriented design using the UML
- Design patterns
- Implementation issues
- Open source development

3 Design and implementation
- 상세 설계 및 구현 단계
output > executable software system(실행 가능 한 시스템)

- 상세 설계와 구현은 밀결합 되어있다
구현 단계에서 수정사항이 있을 경우 바로 설계를 수정하고 구현에 적용

> 상세 설계와 구현을 하는 사람과 구현하는 사람이 다른 경우
둘의 인터랙션이 많이 필요
> 다른경우 > 애자일기법으로 디자인하는 부분이 최소화 될 확률이 높음

- identify software components and relationships
- based on a customer's requirement

4 Build or buy
- 직접 구현할 것인가? or 사올 것인가?

> 오픈소스를 조금만 수정해도 될 경우에도 사오는 것이 더 효율적일 수도 있다

5-6
Object-oriented design using the UML
소프트웨어 공학 > 다양한 시스템들을 만들면서 후대에 최대한 시행착오를 줄일 수 있는 도구들에 대해서 

프로젝트의 규모에 따라, 특성에 따라 object-oriented design process를 전체적으로 적용해도 되지만
맞는 부분에만 일부 적용하여 사용해도 된다

7 process stage
이미 존재하는 다양한 방법이 있음 > 맞는 것을 재사용

일반적으로 이 프로세스에서 포함하는 것들 :
- Define the context and modes of use of the system;
- Design the system architecture;
- Identify the principal system objects;
- Develop design models;
- Specify object interfaces.

8-9 System context and interactions
- Understanding the relationships between the software 
that is being designed and its external environment

- Understanding of the context also lets you establish the boundaries of the system

- A system context model is a structural model that 
demonstrates the other systems in the environment of 
the system being developed.
- An interaction model is a dynamic model that shows how 
the system interacts with its environment as it is used.

10 example) System context for the weather station
11 example) Weather station use cases
12 example) Use case description—Report weather

13 Architectural design
- interactions between the system and its environment
- identify the major components that make up the 
system and their interactions

14 example) High-level architecture of the weather station
15 example) Architecture of data collection system

16 Object class identification 세부설계
- Identifying object classes is often a difficult
- It relies on the skill, experience
- Object identification is an iterative process 반복적인 과정

17 Approaches to identification
클래스, 객체 어떻게 정의?
- Use a grammatical approach based on a natural language description of the system.
문법적인 접근법
주어 목적어에 해당 > class
동사 > method
- Base the identification on tangible things in the application domain.
하드웨어가 정해지고 그것에 기반된 시스템인 경우, tangible : 명백한
- Use a behavioural approach
행동 기반, 해당 객체가 어떤 행동, 액션을 취하는지
- Use a scenario-based analysis.
시나리오 기반

18-19 example) Weather station object classes
tangible things, 센서 추출 > 하나하나 해당하는 클래스 생성
user case

20 Design models
- Structural models describe the static structure of the system in 
terms of object classes and relationships.
-  Dynamic models describe the dynamic interactions between objects.

21 Examples of design models
- Subsystem models that 
show logical groupings of objects into coherent subsystems.
- Sequence models that 
show the sequence of object interactions.
- State machine models that 
show how individual objects change their state in response to events.
- Other models include 
use-case models, aggregation models, generalisation models, etc

22 
Subsystem models
system 안에 subsystem들이 있고 그 subsystem들도 class와 객체로 이루어져있음

23 
Sequence models
- Objects are arranged horizontally across the top; 
- Time is represented vertically so models are read top to bottom; > 시간의 흐름
- Interactions are represented by labelled arrows, Different styles 
of arrow represent different types of interaction; > 화살표로 인터랙션 표현
- A thin rectangle in an object lifeline represents the time when the 
object is the controlling object in the system. > 얇은 직사각형 > life cycle

24 example) Sequence diagram describing data collection

25 
State diagrams
하나의 클래스 오브젝트에 대한 상세 내용
하나의 오브젝트에 대한 상태를 나타냄
- State diagrams are useful high-level models of a system 
or an object’s run-time behavior. 실시간 인터랙션에 따른 시스템의 상태

26 example) Weather station state diagram

27 
Interface specification
인터페이스 자체

28 example) Weather station interfaces

29-30 
Design patterns
- a way of reusing abstract knowledge about a problem and its solution. 
설계의 재사용
- abstract to be reused in different settings. 
> 그대로 사용하는 것 x, 현재 세팅에 맞게 수정해서 사용
- use of object-oriented characteristics > UML
such as inheritance(유전) and polymorphism(다형성).

31 Patterns
it is possible for others to reuse this experience

32 Pattern elements
Name
- A meaningful pattern identifier.
Problem description.
Solution description.
- Not a concrete design but a template for a design solution that 
  can be instantiated in different ways. > 무조건적인것 x, 대부분 이렇다더라
Consequences
- The results and trade-offs of applying the pattern > 장단점

33-35 example) 
The Observer pattern
Name
- Observer. 제3자의 입장
Description
- Separates the display of object state from the object itself.
데이터 그 자체와 데이터를 보는 view, display를 분리한다
state가 변경되면 display에 바로 적용되어야 한다
Problem description
- Used when multiple displays of state are needed.
데이터가 다양하게(multiple) 보이지만, 데이터 자체는 동일(state)
Solution description
- See slide with UML description.
subject(state) and observer(display)
subject class에 observer class를 add and remove (has realationship)
Consequences
- Optimisations to enhance display performance are impractical.
observer가 state 정보를 담고 있지 않아도 된다
특정 디스플레이 performance 최적화optimise에 문제가 있을 수 있다
36 example) Multiple displays using the Observer pattern
37 example) A UML model of the Observer pattern

38 Design problems
- Tell several objects that the state of some other object has changed (Observer pattern).
- Tidy up the interfaces to a number of related objects that have often been developed incrementally (Façade pattern).
- Provide a standard way of accessing the elements in a collection, irrespective of how that collection is implemented 
(Iterator pattern).
- Allow for the possibility of extending the functionality of an existing class at run-time (Decorator pattern).
- 다른 개체의 상태가 변경되었음을 여러 개체에게 알립니다(관찰자 패턴).
- 자주 점진적으로 개발된 여러 관련 개체에 대한 인터페이스를 정리합니다(Façade 패턴).
- 컬렉션이 구현되는 방식에 관계없이 컬렉션의 요소에 액세스하는 표준 방법을 제공합니다.
(반복자 패턴).
- 런타임에 기존 클래스의 기능을 확장할 수 있는 가능성을 허용합니다(데코레이터 패턴).


39-40 
Implementation issues
개발시 권장 사항, 많이 겪는 이슈들
- Reuse
as much use as possible of existing code
- Configuration management 
different versions of each software component 
in a configuration management system(버전 관리)
- Host-target development 
위 두개의 경우 일반 범용 컴퓨터들, 서버 플랫폼에 적용되었다면
이것은 임베디드 시스템, 휴대폰 어플리케이션에도 적용가능

특정한 하드웨어, 운영환경을 쓰는데, 개발환경과 다른 경우 고민해야하는 문제

41 
Reuse
- 1900년 후반 인터넷 활발해지면서, 소프트웨어를 공유, 아카이빙하는 것이 용의해짐
- this approach became increasingly unviable, especially for commercial and Internet-based systems.

42 Reuse levels
- The abstraction level 
At this level, you don’t reuse software directly but use knowledge 
of successful abstractions in the design of your software. 
> 설계 reuse
- The object level 
At this level, you directly reuse objects from a library rather than 
writing the code yourself. 
> class, function reuse
- The component level 
Components are collections of objects and object classes that 
you reuse in application systems.
> class들의 모음 , component reuse 
- The system level 
At this level, you reuse entire application systems. 
> system 통째로 reuse

43 Software reuse
42페이지 도표

44 Reuse costs
- 자체개발 대비 비용 측면 고려
- 재사용한다고 했을때 requirement를 만족하는가, 수정하는데 드는 cost는 얼마인가
- integrating하는게 가능한가? cost는 얼마인가?

45 
Configuration management
-  managing a changing software system

46 Configuration management activities
- Version management
- System integration
define what versions of components are used to create each version of a system
각 컴포넌트들의 버전이 무엇인가?
- Problem tracking
각 버전별 버그 수정 및 적용

47 Configuration management tool interaction
도표

48-49 
Host-target development
- 개발환경과 운영환경의 차이
- 개발환경과 운영환경이 같아도 컴퓨터 메모리의 차이

50 
Development platform tools
- 개발을 위한 시스템
- 디버깅
- 에디터
- git

51 Integrated development environments (IDEs)
vscode가 많이 사용됨

52 Component/system deployment factors
x

53-54 
Open source development
- roots are in the Free Software Foundation
- extended this idea by using the Internet

55 Open source systems
- Linux
- Java, the Apache web server and the mySQL

56 Open source issues
소프트웨어 개발에 오픈소스를 사용할 것인
- RE-USE

소프트웨어 개발에 오픈소스 방식을 사용할것인가?
- OPEN DEVELOPMENT ENVIRONMENT

57 Open source business
selling support for that product

58 Open source licensing
-  the developer of the code (either a company or an individual) still owns the code

59 License models
- GPL
if you use open source  software that is licensed under the GPL license, then you 
must make that software open source
- LGPL
link to open source code without having to publish the source of these components
- BSD
This is a non-reciprocal license

60 License management
- 시스템에 사용되는 open source 
- license 추적
- 시간이 지났을때 유지보수 가능한지
- 오픈소스 교육
- 오픈소스 관련 검증 작업(ex_ 라이센스, 고지의무 수해여부 등)
- 오픈소스 커뮤니티 참여









