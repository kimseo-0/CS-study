# chapter 7. 메모리 관리

# Backgrounds
## 메모리의 종류
속도/가격, 용량 사이의 tradeoff 관계가 있음

- HW 가 관리(CPU) : 레지스터, 캐시
- SW 가 관리(OS) : 메인메모리, 보조기억장치

## 메모리 계층구조
보조기억 장치 <=> 메인 메모리 <=> 레지스터
- block: 보조기억장치(disk - HDD, SDD)와 주기억장치 사이의 데이터 전송 단위
- word: 주기억장치와 레지스터 사이의 데이터 전송 단위

## Address Binding
프로그램의 논리 주소를 실제 메모리의 물리 주소로 매핑하는 작업

- binding 시점에 따른 구분
  - compile time: 컴파일 시점에
  - load time: 프로그램을 메모리에 올릴 때
  - run time: 실행중에

> User Program Processing Steps
> 1. source code > compier > object module : 소스코드를 컴파일러가 object 모듈로 만드는 작업
> 2. object modules > Linker > load module(ex_ exe 파일) : 여러 object 모듈을 Linker 가 linking 하여 load 모듈로 만드는 작업
> 3. load module > Loader > In-memory binary image : load module 을 실행하면 Loader 가 프로그램을 메모리에 올림

### compile time binding
- 프로세스가 메모리에 적재될 위치를 컴파일러가 알 수 있어야 한다.
- 적재될 위치가 변하지 않음
- 프로그램 전체가 메모리에 올라가야 함

### load time binding
- 메모리 적재 위치를 상대 주소로 생성
- 적재 시점에 시작 주소를 반영하여 사용자 코드 상의 주소를 재설정
- 프로그램 전체가 메모리에 올라가야 함

ex) 
- 프로그램 시작이 0이라고 가정하고, 상대적으로 나머지 코드에 대한 상대 주소를 설정한다.
- 실제로 프로그램이 적재되었을 때, 프로그램의 시작 위치가 적재된 위치를 상대주소에 더하여 절대주소를 재설정한다.

### run time binding
- 프로세스가 run 상태가 될때, address binding 을 함
- 프로세스가 수행 도중 다른 메모리 위치로 이동할 수 있음
> 프로세스 수행 중에 run, block, ready 상태를 반복하는데 이때, run 상태가 될 때마다 주소값이 변경될 수 있음을 의미

- HW 의 도움이 필요 (MMU - Memory Management Unit)
- 대부분의 OS 가 사용

## Dynamic Loading
프로그램 전체를 메모리에 올리는 것이 아니라, 현재 필요한 부분만 메모리에 올리는 것
- 모든 루틴(일종의 function)을 교체 가능한 형태로 디스크에 저장
- 메인 프로그램만 메모리에 적재하여 수행
- 실제 호출 전까지는 루틴을 적재하지 않았다가, 루틴의 호출되었을 때 address binding 수행


장점
- 메모리 공간의 효율적 사용

## Swapping
- Swap-out : 프로세서 할당이 끝나고 수행완료된 프로세스, 메모리를 뺏긴 프로세스를 swap-device 로 보냄
- Swap-in : 새롭게 시작하는 프로세스, 메모리를 할당 받은 프로세스를 메모리에 적재

# Memory Allocation
-  Continuous Memory Allocation (연속 할당)
  - Uni-programming
  - Multi-programming
    - fixed partition (FPM)
    - variable partition (VPM)
-  Non-continuos Memory Allocation (비연속 할당)

## Continuous Memory Allocation (연속 할당)
프로세스를 하나의 연속된 메모리 공간에 할당하는 정책

고려해야하는 점
- 메모리에 동시에 올라갈 수 있는 프로세스 수 (multiprogramming degree)

### Uni-Programming
하나의 프로세스만 메모리 상에 존재

- Low system resource utilization : 메모리 낭비, 자원의 활용도 낮음
- Low system performance : 낮은 시스템 성능

#### Q. 프로그램의 크기가 메모리 크기보다 큰 경우? A. Overlay structure
- 공통으로 필요한 부분은 항상 적재
- 나머지 프로그램에 대해서 메모리에 현재 필요한 영역을 번갈아 가면서 적재
- 사용자가 직접 공통 루틴과, 번갈아 가며 적재할 패스를 설정해주어야한다.
> 즉, 사용자가 프로그램의 흐름과 자료구조에 대한 이해가 필요하다

#### Q. 프로그램이 커널을 침범한다면? A. 경계 레지스터(boundary register) 사용
Kernel 과 User program 사이의 주소값인 boundary address 를 적어두고, 
Kernel 을 침범하지 않도록 한다.

### Multi-Programming
#### Fixed Partition
- 메모리 공간을 고정된 크기로 미리 분할
- 각 프로세스를 하나의 partition 에 적재 > 하나의 partition 에는 하나의 프로세스만 할당 가능
> partition 의 수 = multiprogramming degree(메모리에 동시에 올라갈 수 있는 프로세스 수)

- 커널 및 사용자 영역 보호   
프로그램이 커널 및 다른 partition 을 침범하는 것을 막기위해서 커널과 partition, partition 과 partition 사이의 주소값을 boundary address 로 저장하여 침범하지 않도록 한다.

##### Fragmentation (단편화)
- Internal fragmentation   
partition 의 크기 > process 의 크기 일 때, 메모리 낭비 발생

- External fragmentation
전체적으로 남은 메모리의 양 > 할당되지 않은 process 크기 이지만,   
해당 process 에 메모리를 할당 할 수 없어 메모리 낭비 발생
> 각 partition 에 남은 메모리들이 연속된 공간이 아니기 때문에

##### 장/단점
- 장점 : 메모리 관리가 편함
- 시스템 자원이 낭비될 수 있음

#### Variabl partition
- 초기에는 전체가 하나의 영역
- 프로세스를 처리하는 과정에서 동적으로 메모리 분할

프로세스가 동적으로 메모리에 할당되고, 할당이 풀리면서 메모리에 남는 다양한 경우의 수가 존재
이때 새로 들어온 프로세스를 어디에 할당할지 선택하는 알고리즘이 다양한데 이를 배치 전략이라고 한다

##### Placement Strategies (배치 전략)
- First-fit(최초 적합)
프로세스에 할당할 수 있는 충분한 크기를 가진 최초의 partition 을 선택
> 오버헤드가 적지만, 최초로 적합한 메모리의 크기가 얼마인지에 따라 공간 활용률이 좋을 수도 나쁠수도 있음

- Best-fit(최적 적합)
프로세스가 들어갈 수 있는 partition 중 가장 작은 곳을 선택
> - 모든 메모리 공간을 탐색해야하므로 탐색시간이 길어 오버헤드가 크다.
> - 크기가 큰 partition 을 유지 할 수 있지만, 너무 작은 크기의 patition 이 발생 할 수 있다.

## Non-continuos Memory Allocation (비연속 할당)

