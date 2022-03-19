# chapter 5. Deadlock Resolution

## Deadlock
프로세스가 발생할 가능성이 없는 이벤트를 기다리는 경우로,
프로세스가 특정 이벤트 또는 자원을 기다리는 상태인 asleep 상태에서 발생한다.

> Deadlock vs Starvation     
> Deadlock 은 asleep 상태의 프로세스가 
> 프로세서, CPU 가 아닌 다른 자원 또는 이벤트를 기다리는 경우에 발생하지만,
>
> Starvation 은 ready 상태의 프로세스가 CPU 를 기다리는 경우에 발생한다.

## Deadlock 과 자원의 종류
### 자원의 분류
- 일반적 분류
    - Hardware resources vs Software resources

- 다른 분류 법
    - 선점 가능 여부
    - 할당 단위
    - 동시 사용 가능
    - 재사용 가능

#### 선점 가능 여부에 따른 분류
- Preemptible resources (선점 가능 자원)   
선점 당한 후, 돌아와도 문제가 발생하지 않는 자원   
ex) processor(context switching), memory(swap-device)

- Non-preemptible resource (선점 불가능 자원)   
선점 당하면, 이후 진행에 문제가 발생하는 자원   
ex) disk drive

#### 할당 단위에 따른 분류
- Total allocation resource (전체 할당 자원)   
자원 전체를 프로세스에게 할당   
ex) processor, disk drive

- Partitioned allocation resource (부분 할당 자원)
하나의 자원을 여러 조각으로 나누어, 여러 프로세스들에게 할당   
ex) memory

#### 동시 사용 가능 여부에 따른 분류
- Exclusive allocation resources (상호 배제 할당 자원)   
한 순간에 한 프로세스만 사용 가능한 자원   
ex) processor, memory, disk drive

- shared allocation resource (공유 할당 자원)   
여러 프로세스가 동시에 사용 가능한 자원   
ex) program(sw), shared data

#### 재사용 가능 여부에 따른 분류
- SR(Serially-reusable resource, 계속 사용 가능한 자원)   
시스템 내에 항상 존재하는 자원으로, 사용이 끝나면 다른 프로세스가 사용 가능   
ex) processor, memory, disk drive, program

- CR(Consumable resource, 일회성 자원)   
한 프로세스가 사용한 후에 사라지는 자원   
ex) signal, message

### deadlock 을 발생시킬 수 있는 자원의 형태
- Non-preemptible resource (선점 불가능 자원)  
- Exclusive allocation resources (상호 배제 할당 자원)
- SR(Serially-reusable resource, 계속 사용 가능한 자원)  

> 할당 단위는 영향 없음  

> CR(Consumable resource, 일회성 자원) 도 deadlock 을 발생시킬 수 있지만,
> 복잡하기 때문에 Deadlock model 에서는 고려하지 않는다. 
>

## Deadlock Model (표현법)
- Graph Model
- State Transition Model

### Graph Model
- Node : 프로세스 노드(P), 자원 노드(R)
- Edge : 
    - P → R : 프로세스 P 가 자원 R 요청(대기 중)
    - R → P : 자원 R이 프로세스 P에 할당 됨

[예시]
1) R2 → P1 : P1 에 R2 할당
2) R1 → P2 : P2 에 R1 할당
3) P1 → R1 : P1 이 R1 요청
4) P2 → R2 : P2 가 R2 요청   
∴ Deadlock 발생   
P1 → R1 → P2 → R2 → P1 다음과 같은 사이클이 있음

### State Transition Model
- 프로세스가 2개, 자원 2개 일 때, state 표

|state| # of R units allocated | Request |
|:---:|:---:|:---:|
|0|0|X|
|1|0|O|
|2|1|X|
|3|1|O|
|4|2|X|

S33 일 때,deadlock 발생

> S[P1 state][P2 state] 로 현재 상태를 표현

## Deadlock 발생 필요 조건
- 자원의 특성
    - Exclusive use of resources : 상호 배제 자원
    - Non-preemptible resources : 비선점 자원
- 프로세스의 특성
    - Hold and wait : 자원을 하나 hold 하고 다른 자원을 요청한 상태
    - circular wait : 자원과 프로세스들 간의 관계에서 cycle 이 발생한 상태

위 네가지 조건이 모두 만족되었을 때, deadlock 이 발생한다.

## Deadlock 해결 방법
- Deadlock prevention methods (교착상태 예방)
- Deadlock avoidance methods (교착상태 회피)
- Deadlock detection and deadlock recovery methods (교착상태 탐지 및 복구)

### Deadlock prevention methods (교착상태 예방)
> 절대 deadlock 을 발생하지 않게 하기 위한 방법

4가지 deadlock 발생 필요 조건 중 하나를 제거한다.

#### Exclusive use of resources 제거 : 모든 자원 공유 허용
모든 자원을 공유 자원으로 하는 것은 현실적으로 불가능 하다.

#### Non-preemptible resources 제거 : 모든 자원에 대해 선점 허용
모든 자원을 선점 허용하는 것도 현실적으로 불가능 하다.

> 유사한 방법으로, 프로세스가 할당 받을 수 없는 자원을 요청한 경우, 
> 기존에 가지고 있던 자원을 모두 반납하고 작업을 취소한 뒤,
> 이후 처음 또는 check-point 부터 다시 작업을 시작한다.
>
> 작업 취소 전까지 이루어진 작업이 모두 취소되기 때문에    
> 심각한 '자원 낭비'가 발생한다.

#### Hold and wait 제거 : 필요 자원 한번에 모두 할당(Total allocation)
하나의 프로세스가 작업을 하는데 필요한 모든 자원을 한번에 할당 받아서 작업하고, 반납한다.

- 자원 낭비 발생   
해당 자원이 필요하지 않은 순간에도 계속 hold 하고 있기 때문
- 무한 대기 현상 발생 가능   
하나의 프로세스가 많은 자원은 선점하고 있기 때문에, 
해당 자원이 필요한 프로세스는 계속 대기해야할 수 있다.

#### circular wait 제거
프로세스와 자원들 사이의 cycle 이 발생하지 않도록 한다.

자원들에게 순서를 부여하고,   
프로세스는 순서의 증가 방향으로만 자원 요청 가능하게 한다.

- 자원 낭비 발생

[예시]   
P1 이 필요한 자원 : R1, R2, R3, R4
P2 가 필요한 자원 : R1, R3
사용 가능한 자원 : R1, R2, R3, R3, R4

P1 부터 R1 → R2 → R3  → R4 자원에 부여한 순서대로 할당 받는다.

P2 도 R1 부터 요청을 하지만 P1 이 hold 하고 있으므로 다른 자원을 요청하지 않고 대기한다.

위와 같은 예시에서는 P2 가 R3 자원이 필요하고, 사용할 수 있음에도 불구하고, 요청할 수 없는 
자원 낭비가 발생한다.

#### 정리
Deadlock 이 절대 발생하지 않게 할 수 있지만,

- 심각한 자원 낭비 발생
- 비현실적

이라는 문제가 있다.

### Deadlock avoidance methods (교착상태 회피)
> deadlock 이 발생할 것 같으면, 피해가는 방법

1. 시스템의 상태를 계속 감시한다.
2. 시스템이 deadlcok 상태가 될 가능성이 있으면 자원 할당 요청 보류
> 시스템을 항상 safe state 로 유지

> - safe state : 모든 프로세스가 정상적 종료 가능한 상태 = safe sequence 가 존재   
> - unsafe state : deadlock 상태가 될 '가능성'이 있음, 반드시 발생 x   
>> unsafe state 라고 해서 반드시 deadlock 상태가 되는 것은 아니다.

#### 가정, 전제 조건
- 프로세스의 수가 고정됨
- 자원의 종류와 수가 고정됨
- 프로세스가 요구하는 자원 및 최대 수량을 알고 있음
- 프로세스는 자원을 사용 후 반드시 반납

> 위 네가지 조건 중 위에서 부터 세가지의 경우 
> 현실적인 상황과 거리가 멀기 때문에 실용적이지 못하다.

#### Dijkstra's banker's algorithm
- 가정 : 한 종류의 자원이 여러개

[예시]

| 프로세스 ID | 최대 필요수 | 현재 할당 | 최대 앞으로 필요한 수 |
|:---:|:---:|:---:|:---:|
|P1|3|1|2|
|P2|9|5|4|
|P3|5|2|3|

어떠한 요청이 들어왔을 때, 해당 요청대로 할당을 했다고 가정 후,   
해당 상태에서 safe sequence 가 존재하면 safe state   
safe sequence 가 없으면 unsafe state 이다.

safe state 일 경우만 실제로 요청에 대한 할당이 이루어지고,
unsafe state 일 경우 요청을 보류한다.

#### Habermann's algorithm (Example)
Dijkstra's banker's algorithm 의 확장으로 기존에서 한 종류의 자원을 고려했다면,   
여러 종류의 자원을 고려하는 것으로 확장한 알고리즘이다.

[예시]

| 프로세스 ID | 최대 필요수 (Ra Rb Rc) | 현재 할당  (Ra Rb Rc) | 최대 앞으로 필요한 수  (Ra Rb Rc) |
|:---:|:---:|:---:|:---:|
|P1|7 5 3|0 1 0|7 4 3|
|P2|3 2 2|2 0 0|1 2 2|
|P3|9 0 2|3 0 2|6 0 0|

Dijkstra's banker's algorithm 보다 자원의 종류만 많은 뿐 동일하다.

어떠한 요청이 들어왔을 때, 해당 요청대로 할당을 했다고 가정 후,   
해당 상태에서 safe sequence 가 존재하면 safe state   
safe sequence 가 없으면 unsafe state 이다.

safe state 일 경우만 실제로 요청에 대한 할당이 이루어지고,
unsafe state 일 경우 요청을 보류한다.

#### 정리
Deadlock 을 발생시키지 않는다.

- high overhead : 항상 시스템을 감시해야 함
- low resource utilization : safe state 유지를 위해, 사용되지 않는 자원이 존재
- not practical : 가정(프로세스 수/자원 수 고정, 필요한 최대 자원수 알고 있음)으로 인해 비현실적

### Deadlock detection and deadlock recovery methods (교착상태 탐지 및 복구)
Deadlock 방지를 위한 사전 작업을 하지 않는다.

#### Deadlock detection 
주기적으로 deadlock 발생을 확인한다.
- 시스템이 deadlock 인가?
- 어떤 프로세스가 deadlock 인가?

##### Resource Allocation Graph (RAG)
deadlock 검출을 위해 사용

- directed (방향성 존재)
- bipartite graph (두개의 부분으로 나눔) : 프로세스 그룹과 자원 그룹
- RAG 요소 설명
    - G = (N, E)
    - Node : N(Np, Nr)
        - Np : 프로세스 집합
        - Nr : 자원 집합
    - Edge : Np 와 Nr 사이에만 존재
        - (Pi, Rj) : 자원 요청
        - (Rj, Pi) : 자원 할당
    - Rk : k type 의 자원
    - tk : Rk 의 단위 자원 수
    - |(a, b)| : (a, b) edge 수

##### Graph reduction
주어진 RAG 에서 edge 를 하나씩 지워가는 방법   

1. unblocked process 에 연결된 모든 edge 제거
2. 더 이상 unblocked process 가 없을 때까지 1 반복

최종 graph 에서
- completely reduced > 현재 상태에서 deadlock 없음
- irreducible > 현재 deadlock 존재

> completely reduced vs Irreducible   
> - completely reduced : 모든 edge 가 제거됨
> - Irreducible : 지울 수 없는 edge 가 존재

> Unblocked process   
> 필요한 자원을 할당 받을 수 있는 프로세스
> 
> ∀j(|(Pi, Rj)| <= tj - ∑(all k)|(Rj, Pk)|)   
> 모든 j 에 대해서, 
> Pi 가 요청하는 Rj 의 수가 
> 모든 Rj 의 수에서 Rj 가 모든 Pk 에 할당되어 있는 수를 뺀 것 보다 작거나 같은 경우
>
> 다시말해서,   
> 모든 남은 Rj 의 수가 Pi 가 필요한 Rj 의 수보다 많은 경우

- 검사 주기가 짧을 수록
- Node 의 수가 많을 수록
high overhead 가 발생한다.

> low overhead deadlock detection methods    
> 특별한 case 에서 사용 가능한 방법들로, overhead 가 작다
> - single-unit resource
> - single-unit request in expedient state

#### Deadlock recovery 
deadlock 을 검출 한 후 해결하는 과정

- methods
    - Process termination :    
    deadlock 상태에 있는 프로세스를 강제 종료
    - Resource preemption :    
    deadlock 상태 해결을 위해 선점할 자원 선택 후, 
    선정된 자원을 가지고 있는 프로세스에서 자원을 빼앗음 (자원을 빼앗긴 프로세스는 강제 종료)

> 강제 종료된 프로세스는 이후에 재시작

##### Process termination
- deadlock 상태인 프로세스 중 일부 종료
- termination cost model 필요

> termination cost model   
> 우선순위, 프로세스 종류, 총 수행 시간, 남은 수행 시간, 종료 비용 등을 통해
> 종료 시킬 deadlock 상태의 프로세스 중 어떤 프로세스를 종료시킬지 선택하기 위한
> cost model 을 만들 수 있다

##### 종료 프로세스 선택 방법 예
- lowest-termination cost process first : 종료비용이 낮은 프로세스부터 종료
    - 구현이 간단, low overhead : 계산이 적음
    - 최선의 방법이 아닐 수 있어, 불필요한 프로세스들이 종료 될 가능성이 높음
- minimum cost recovery
    - 최소 비용으로 deadlock 상태를 해소할 수 있는 프로세스 선택
    - 구현이 복잡, high overhead : 모든 경우의 수를 고려하기 때문
    - O(2^k) : K 개의 프로세스에 대해서 종료, 비종료 두가지 상태 중 하나를 선택하는 경우의 수 

##### Resource preemption
- deadlock 상태 해결을 위해 선점할 자원 선택
- 자원을 빼앗긴 프로세스 종료 > deadlock 상태가 아닌 프로세스가 종료될 수 있음
- preemption cost model 필요

###### 선점 자원 선택 방법 예
- minimum cost recovery method
    - 모든 자원 각각을 선점 했을 때 가장 적은 cost 가 드는 자원 선택
    - O(r) : r 개의 자원에 대해서 cost 계산

##### Checkpoint restart method
- 프로세스의 수행 중 특정 지점(checkpoint) 마다 context 저장
- 프로세스 강제 종료 후 rollback 하기 위해 사용
- 프로세스 강제 종료 후, 재 수행시 가장 최근의 checkpoint 에서 재시작