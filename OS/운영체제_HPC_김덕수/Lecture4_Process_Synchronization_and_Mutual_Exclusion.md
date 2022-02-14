# chapter 4. 프로세스 동기화  & 상호배제

## Process Synchronization
- 다중 프로그래밍 시스템
    - 여러 개의 프로세스들이 존재
    - 프로세스들은 서로 독립적으로 동작
    - 공유 자원 또는 데이터가 있을 때, 문제 발생 가능
- 동시화
    - 프로세스 들이 서로 동작을 맞추는 것
    - 프로세스 들이 서로 정보를 공유하는 것

- 비동기적
    - 프로세스들이 서로에 대해 모름
- 병행적
        - 여러 개의 프로세스들이 동시에 시스템에 존재

`
병행 수행중인 비동기적 프로세스들이 공유 자원에 동시 접근할 때 문제가 발생 할 수 있음
`

> - shared data(critical data) : 여러 프로세스들이 공유하는 데이터
> - critical section : 공유 데이터를 접근하는 코드 영영(code segment)
> - mutual exclusion : 둘 이상의 프로세스가 동시에 critical section 에 진입하는 것을 막는 것

## Critical Section
`그림`

> 기계어 명령(machine instruction)의 특성
> - Atomicity(원자성), Indivisible(분리 불가능)
> - 한 기계어 명령의 실행 도중에 인터럽트를 받지 않음

`예시 그림`
→ Race condition : 실행 순서에 따라 결과값이 달라짐

## Mutual Exclusion
### Mutual Exclusion Methods
- mutual exclusion primitives
    - enterCS() primitive
        - critical section 진입 전 검사
        - 다른 프로세스가 critical section 안에 있는 검사
    - exitCS() primitive
        - critical section 을 벗어날 때의 후처리 과정
        - critical section 을 벗어남을 시스템이 알림
> primitive : 기본 연산

### Requirements for ME primitives (3)
- mutual exclusion (상호배제)
    - critical section(cs) 에 프로세스가 있으면, 다른 프로세스의 진입을 금지
- progress (진행)
    - cs 안에 있는 프로세스 외에는, 다른 프로세스가 cs에 진입하는 것을 방해 하면 안됨
- bounded waiting (한정대기)
    - 프로세스의 cs 진입은 유한시간 내에 허용되어야 함

### Two Process Mutual Exclusion
#### ver 1
- turn 사용
`그림`
- progress
    - P0이 critical section 에 진입 하지 않는 경우
    - 한 process 가 두번 연속 cs에 집입 불가

#### ver 2
- flag 사용
`그림`
- mutual exclusion
    - critical section 진입 직전에 다른 프로세스로 제어가 넘어가고,
    해당 프로세스가 critical section 에 진입하면,
    다시 원래 프로세스가 preemption 했을 때, critical section 에 진입하면서
    두 프로세스가 하나의 critical section 에 진입한 상태가 됨

#### ver 3
- 미리 flag 설정
`그림`
- progress, bounded waiting
    - 두 프로세스가 모두 flag 1인 상황이 발생한다면,
    어느 프로세스도 critical section 에 진입할 수 없음

## Mutual Exclusion Solutions
### SW solution
#### Dekker's Algorithm
Two process ME 을 보장하는 최초의 알고리즘
- flag, turn 사용
`그림`

#### Peterson's Algorithm
Dekker's algorithm 보다 간단하게 구현
- turn 양보
`그림`

#### Dijkstra's Algorithm
최초로 N-Process Mutual Exclusion 를 해결 

- flag
    - idle : 프로세스가 임계 지역 진입을 시도하고 있지 않을 때
    - want-in : 프로세스의 임계 지역 진입 시도 1단계 일 때
    - in-CS : 프로세스의 임계 지역 진입 시도 2단계 및 임계 지역 내에 있을 때

#### SW solution 들의 문제점
- 속도가 느림
- 구현 복잡한
- ME primitive 실행 중 preemption 될 수 있음
    - 공유 데이터 수정 중은 interrupt 를 억제 함으로서 해결 가능 > overhead 발생
- Busy waiting : 반복하면서 대기 > 비효율적

### HW solution
#### TestAndSet(TAS) instruction
##### 특징
- test 와 set 을 한번에 수행하는 기계어
- Machine instruction
    - atomicity, indivisible
    - 실행 중 interrupt 를 받지 않음 (preemption 되지 않음)
- Busy waiting

##### 세부 코드
`그림`
temp 와 target 변경이 한번에 수행

`그림`
- lock 사용
- Two process ME 보장
- N-Process ME
    - bounded waiting
        - 계속 특정 프로세스가 CS 로 진입하지 못하는 상황이 발생 할 수 있다.
 
`그림`
- lock, waiting list 사용
```
do {
    waiting
}
```

#### HW solution 장단점
- 장점
    - 구현이 간단
- 단점
    - busy waiting > inefficient

### OS supported SW solution
#### Spinlock
##### 특징
- 정수 변수(S)
- 초기화, P(S), V(S) 연산으로만 접근 가능
    - atomic, indivisible 연산
        - os support
        - 하나의 instruction cycle 에 수행

##### 세부 코드
```
P(S) {
    while (S <= 0)
}
V(S) {
    while (S <= 0)
}
```

##### mutual exclusion 
- active = 1 : 임계 지역을 실행중인 프로세스 없음
- active = 0 : 임계 지역을 실행중인 프로세스 있음
```
그림
```

##### 단점
- 멀티 프로세서 시스템에서만 사용 가능
    - 하나의 cpu 로는 P() 연산을 종료할 수 없음
 - busy waiting 

#### Semaphore
- Dijkstra 가 제안
- busy waiting 문제 해결

##### Semaphore 로 해결 가능한 동기화 문제
- 상호 배제 문제
- 프로세스 동기화 문제
- 생산자-소비자 문제
- reader-writer 문제
- dining philosopher problem

##### 특징
- 음이 아닌 정수형 변수(S)
- 초기화 연산, P(S), V(S) 로만 접근 가능
- 임의의 s 변수 하나에 ready queue 하나가 할당 됨

##### semaphore 종류
- binary semaphore
- counting semaphore

##### 세부 코드
- busy waiting 문제 해결
```
P(S) {

}
V(S) {

}
```

##### mutual exclusion 
- active = 1 : 임계 지역을 실행중인 프로세스 없음
- active = 0 : 임계 지역을 실행중인 프로세스 있음
```
그림
```

##### process synchronization
- sync : semaphore 변수
- process 들의 실행 순서 맞추기
    - 프로세스들은 병행적, 비동기적으로 수행

`그림`

##### producer-consumer problem : single buffer
- producer : semaphore 변수
- consumer : semaphore 변수

`그림`

##### producer-consumer problem : N-buffer
- counting semaphore
- nrfull : semaphore 변수, 채워진 buffer 수
- nrempty : semaphore 변수, 비어있는 buffer 수
- mutexP : semaphore 변수
- mutexC : semaphore 변수

`그림`

##### reader-writer problem
- reader : 데이터에 대해 읽기 연산만 수행
- writer : 데이터에 대해 갱신 연산을 구행
- 데이터 무결성 보장 필요
    - reader 들은 동시에 데이터 접근 가능
    - writer 들 또는 (reader 와 writer) 동시 데이터 접근 시, 상호배제(동기화) 필요
- solution : reader / writer 에 대한 우선권 부여
    - reader preference solution
    - writer preference solution

`그림`
- nreaders : 읽는 사람의 수
``` 
// reader preference solution

```
``` 
// writer preference solution

```

##### 해결점/문제점
- 해결점 : no busy waiting
    - 기다려야 하는 프로세스는 block(asleep) 상태가 됨
- 문제점 : starvation problem
    - semaphore queue 에 대한 wake-up 순서는 비결정적

#### eventcount/sequencer
- semaphore 의 starvation problem 을 해결하기 위한 방법
- 은행 대기표

##### 특징
- sequencer
    - 정수형 변수
    - 생성시 0으로 초기화, 감소하지 않음
    - 발생 사건들의 순서 유지
    - ticket() 연산으로만 접근 가능
- ticket(S)
    - 현재까지 ticket() 연산이 호출 된 횟수를 반환
    - indivisible operation
- eventcount
    - 정수형 변수
    - 생성시 0으로 초기화, 감소하지 않음
    - 특정 사건의 발생 횟수를 기록
    - read(E), advance(E), await(E, v) 연산으로만 접근 가능
- read(E) : 현재 eventcount 값 반환
- advance(E)
    - E <- E + 1
    - E를 기다리고 있는 프로세스를 깨움(wake-up)
- await(E, v)
    - v는 정수형 변수
    - if (E < v) 이면 E에 연결된 Q에 프로세스 전달(push) 및 CPU scheduler 호출

##### mutual exclusion
```
그림
```

##### producer-consumer problem : N-buffer
- buffer : circular buffer
`그림`
```
// 생산할 공간이 있는지 확인, 
// 공간 있음 : Out >= t - N + 1
// 공간 없음 : Out < t - N + 1
await(Out, t - N + 1) 

// 가져갈 물건이 있는지 확인, 
// 물건 있음 : In >= u + 1
// 물건 없음 : In < u + 1
await(In, u + 1) 
```

##### 해결점
- no busy waiting
- no starvation : FIFO scheduling for Q
- semaphore 보다 더 low-level control 이 가능 : order control

### Language-Level solution : high-level mechanism

#### Monitor
- language-level constructs
- object-oriented concept 과 유사
- 사용이 쉬움

##### 특징
- 공유 데이터와 critical section 의 집합
- mutual exclusion : 모니터 내에는 항상 하나의 프로세스만 진입 가능 ← language 가 보장
- information hiding : 공유 데이터는 모니터 내의 프로세스만 접근 가능

##### 구조
- entry queue(진입 큐)
     - 모니터 내의 procedure 수 만큼 존재
- condition queue(조건 큐) - 대기실
    - 모니터 내의 특정 이벤트를 기다리는 프로세스가 대기
- signaler queue(신호제공자 큐)
    - 모니터에 항상 하나의 신호제공자 큐가 존재
    - signal() 명령을 실행할 프로세스가 임시 대기

##### 자원 할당 문제
##### producer-consumer problem : N-buffer
- buffer : circular buffer
`그림`
```
validBufs : 물건 수
```
##### reader-writer problem : N-buffer
``` 
// reader preference solution

```
``` 
// writer preference solution

```

##### dining philosopher problem
- 철학자 : 생각하는일 or 스파게티 먹는 일 반복
- 공유 자원 : 스파게티, 포크
- 스파게티를 먹기 위해서는 포크 2개를 모두 들어야 함

##### 장단점
- 장점
    - 사용이 쉽다
    - Deadlock 등 error 발생 가능성이 낮음
- 단점
    - 지원하는 언어에서만 사용 가능
    - 컴파일러가 OS를 이해하고 있어야 함 > critical section 접근을 위한 코드 생성