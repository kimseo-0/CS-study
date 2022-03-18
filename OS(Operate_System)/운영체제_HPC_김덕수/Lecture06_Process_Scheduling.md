# chapter 6. 프로세스 스케줄링

## 스케줄링
여러개의 프로세스가 시스템 내 존재하는 '다중 프로그래밍'에서
자원을 할당 할 프로세스를 선택 해야 하는 것

- 시간 분할 관리 :   
하나의 자원을 여러 스레드들이 번갈아 가며 사용 ex) 프로세서

- 공간 분할 관리 :   
하나의 자원을 분할하여 동시에 사용 ex) 메모리

프로세서 사용시간을 프로세스들에게 분배

## 스케줄링의 목적
시스템의 성능 향상
> 시스템 성능을 측정하는 구체적인 지표가 필요하다.

### 대표적 시스템 성능 지표
- 응답 시간 : 작업 요청으로부터 응답을 받을 때까지의 시간
- 작업 처리량 : 단위 시간 동안 완료된 작업의 수
- 자원 활용도 : 주어진 시간(Tc)동안 자원이 활용된 시간(Tr) = Tr / Tc

다양한 스케줄링 기법 중 시스템의 목적에 맞춰서 스케줄링 기법을 선택해야한다.
> 시스템의 종류에 따른 중요 시스템 성능 지표   
> - interactive system, real-time system > 응답시간   
> - batch system > 작업 처리량   
> - high cost > 자원 활용도   

### 추가적인 중요 성능 지표
- 대기 시간(waiting time) : 프로세스가 도착하고 실행 시작까지 걸리는 시간
- 응답 시간(response time) : 프로세스가 도착해서 첫번째 응답까지 걸리는 시간
- 반환 시간(turn-around time) : 프로세스가 도착해서 실행 종료까지 걸리는 시간
- 실행 시간(burst time) : 프로세스가 실행 시작부터 실행 종료까지 걸리는 시간
- 정규화 반환 시간(normalized turn-around time) : 반환 시간 / 실행 시간

## 스케줄링 기준 및 단계
### 스케줄링 기준
스케줄링 기법이 고려하는 항목들

- 프로셋의 특성 : I/O bounded or compute-bounded
- 시스템 특성 : Batch system vs interactive system
- 프로세스의 긴급성 : Hard real time system vs soft real time system vs non real time systems
- 프로세스 우선순위
- 프로세스 총 실행 시간

> CPU burst vs I/O burst   
> 프로세스 수행 = CPU 사용 + I/O 대기(사용)
> - CPU burst time : CPU 사용 시간
> - I/O burst time : I/O 대기 시간

> compute-bounded vs I/O bounded   
> - CPU burst > I/O burst : compute-bounded process
> - I/O burst > CPU burst : I/O-bounded process

### 스케줄링의 단계
발생하는 빈도 및 할당 자원에 따른 구분

- long-term scheduling
- mid-term scheduling
- short-term scheduling

#### Long-term Scheduling : Job scheduling
- 시스템에 제출 할 작업(kernel 에 등록 할 작업) 결정
- 시스템 내에 프로세스 수 조절을 통해 다중프로그래밍 정도 조절

> compute-bounded 와 I/O bounded 프로세스 중 어떤 프로세스를 우선적으로 선택해야할까?   
> 적절히 잘 섞어서 선택해야 한다.   
> why?
> CPU 와 I/O 모두 노는 시간을 최소화 하고 효율적으로 작업을 처리하게 하기 위해서

> 시분할 시스템의 경우 모든 작업을 일정 시간마다 돌아가면서 처리하기 때문에
> job scheduling 이 상대적으로 덜 중요하다. 
> 너무 많은 양의 시스템을 한 번에 돌리는 것이 아닌 이상 CPU 와 I/O 가 효율적으로 작업을 처리할 확률이 높다.

#### Mid-term Scheduling : 메모리 할당
suspended ready 상태의 프로세스들 중 어떤 프로세스에게 메모리를 할당할지 결정

#### Short-term Scheduling : Process scheduling
프로세서를 할당할 프로세스를 결정
- 매우 빈번하게 발생하기 때문에 매우 빠르게 이루어저야 한다.

## 스케줄링 정책
### 선점(preemptive) vs 비전점(non-preemptive)
- 비전점 : 할당 받을 자원을 스스로 반납할 때까지 사용, 다른 프로세스가 자원을 뺏을 수 없음
    - 장점 : context switch overhead 가 적음
    - 단점 : 잦은 우선순위 역전(우선순위가 높은 일을 먼저 처리 불가), 평균 응답 시간 증가

- 선점 : 타의에 의해 자원을 빼앗길 스 있음, 다른 프로세스가 자원을 뺏을 수 있음 ex) 할당 시간 종료, 우선순위가 높은 프로세스 등장
    - 장점 : 응답성이 높음(time sharing, real-time system 에 적합)
    - 단점 : context switch overhead 가 큼

### 우선순위(priority)
프로세스의 중요도

- static priority(정적 우선순위) : 프로세스 생성시 결정되 우선순위가 유지
    - 장점 : 구현이 쉬움, overhead 가 적음
    - 단점 : 시스템 환경 변화에 대한 대응 어려움
- dynamic priority(동적 우선순위) : 프로세스의 상태 변화에 따라 우선순위 변경
    - 장점 : 시스템 환경 변화에 유연한 대응 가능
    - 단점 : 구현이 복잡, 우선순위 재계산 overhead 가 큼

## 기본 스케줄링 알고리즘들

|알고리즘|설명|
|---|---|
|FCFS| fairness |
|RR| (공평성) |
|______|____________|
|SPN| Efficiency |
|SRTN| Performance |
|HRRN| (효율성, 성능) |
|______|____________|
|MLQ| 실행 시간 예측 |
|MFQ| 부하 문제 해결 |


### FCFS( First-Come-First-Service )
#### 특징
선착순, 먼저 오는 프로세스에게 먼저 프로세서를 할당
- 비선점
- 스케줄링 기준 : 도착 시간(ready queue 기준)

#### 장/단점
- 장점
    - 자원을 효율적으로 사용 가능 : 프로세스 스케줄링에 대한 overhead 가 적고, 프로세서는 쉬지 않고 일을 할 수 있음
- 단점
    - convoy effect : 하나의 수행시간이 긴 프로세스에 의해 다른 프로세스들이 긴 대기시간을 갖게 되는 현상(대기시간 >> 실행시간)
    - 긴 평균 응답시간

- batch system 에 적합
- interactive system 에 부적합

### RR( Round-Robin )
#### 특징
먼저 도착한 프로세스에게 먼저 자원을 할당하지만,
자원 사용 '제한 시간(time quantum)'이 있어, 프로세스는 할당된 시간이 지나면(timer-runout) 자원을 반납함
- 선점
- 스케줄링 기준 : 도착 시간(ready queue 기준)

#### 장/단점
- 장점
    - 특정 프로세스의 자원 독점 방지
- 단점
    - context switch overhead 가 큼

- interactive system, time sharing system 에 적합

#### Time quantum
- time quantum 이 infinite 일때 > FCFS
- time quantum 이 매우 작을 때
    - 사용자는 모든 프로세스가 각각의 프로세서 위에서 실행되는 것처럼 느낌
        - 체감 프로세서 속도 = 실제 프로세서 성능의 1/n
    - but, high context switch overhead


ㅊ### SPN (Shortest-Process-Next)
= SJF (shortest-Job-First)

#### 특징
실행 시간(burst time)이 작은 프로세스일수록 먼저 처리한다.
- 비선점
- 스케줄링 기준 : 실행시간(burst time)

#### 장/단점
- 장점
    - 평균 대기 시간 최소화
    - 시스템 내 프로세스 수 최소화
        - 스케줄링 부하 감소, 메모리 절약 > 시스템 효율 향상
    - 많은 프로세스들에게 빠른 응답 시간 제공
- 단점
    - starvation(무한 대기) 현상 발생 : 실행 시간이 긴 프로세스는 자원을 할당 받지 못하고 계속 기다림
    - 실행 시간 예측 기법이 필요 (overhead) : 정확한 실행시간을 알수 없음

### SRTN (Shortest-Remaining-Time-Next)
SPN 의 변형

#### 특징
잔여 실행 시간이 더 적은 프로세스가 ready 상태가 되면 해당 프로세스가 자원을 선점한다.
- 선점

#### 장/단점
- 장점
    - SPN 의 장점을 극대화
- 단점
    - SPN 의 단점( starvation, 실행 시간 예측 overhead)
    - 잔여 실행을 계속 추적해야하는 overhead 발생
    - context switching overhead 발생

### HRRN (High-Response-Ratio-Next)
SPN 의 변형, SPN + Aging concepts

#### 특징
Aging concept 을 활용하여 프로세스의 기아 상태를 방지한다.
- 비선점
- 스케줄링 기준 : response ratio 가 높은 프로세스 우선
- Aging concept : 프로세스의 대기 시간을 고려하여 기회를 제공
- response ratio(응답률) =  waiting time (대기 시간) + burst time (실행 시간) / burst time (실행 시간)

#### 장/단점
- 장점
    - SPN 의 장점
    - starvation 문제 해결
- 단점
    - 실행 시간 예측 기법 필요 (overhead)

> SPN 과 SRTN, HRRN 의 경우 실행 시간 예측이 어렵기 때문에, 구현 및 사용이 비현실적이다.


### MLQ (Multi-level Queue)
#### 특징
- 작업 (or 우선순위)별 별도의 ready queue 를 가짐
- 각 작업은 최초 배정된 queue 를 벗어날 수 없음
- 각각의 queue 는 자신만의 스케줄링 기법 사용
- queue 사이에는 우선순위 기반의 스케줄링 사용

#### 장/단점
- 장점
    - 우선순위가 높은 중요한 작업들의 경우 빠른 응답시간을 보장한다.
- 단점
    - 여러 개의 queue 관리 등 스케줄링 overhead
    - 우선순위가 낮은 queue 는 starvation 현상 발생 가능

### MFQ
MLQ 에서 각 작업은 최초 배정된 queue 를 벗어날 수 없기 때문에,
시스템 환경 변화에 유연한 대처가 어렵다. 

MFQ 는 이를 보완하기 위한 알고리즘으로 프로세스의 queue 간 이동이 허용된 MLQ 다.

#### 특징
- 각 작업은 Feedback 을 통해 우선순위 조정 (동적인 우선순위)
- 선점

- Favor short burst-time processes
- Favor I/O bounded processes
- Improve adaptability

#### 장/단점
- 장점
    - 프로세스에 대한 사전 정보(실행 시간) 없이 SPN, SRTN, HRRN 기법의 효과를 볼 수 있음
- 단점
    - 설계 및 구현이 복잡, queue 간 이동으로 스케줄링 overhead 가 큼
    - 우선순위가 낮은 경우 starvation 문제
    
#### 변형
- 각 준비 큐마다 시간 할당량을 다르게 배정

- I/O bounded (입출력 위주) 프로세스들을 상위 단계의 큐로 이동, 우선 순위 높임
    - I/O bounded process 의 경우 프로세서를 사용하는 시간이 짧기 때문에 우선순위를 높여 빠르게 처리, 
    시스템 전체의 평균 응답 시간 줄임, 입출력 작업 분산 시킴

- 대기 시간이 지정된 시간을 초과한 프로세스들을 상위 큐로 이동 (에이징 기법)
