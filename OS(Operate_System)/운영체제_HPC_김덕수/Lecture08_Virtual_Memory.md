# chapter 8. 가상 메모리

## Non-continuous allocation
- 사용자 프로그램을 여러 개의 block 으로 분할
- 실행 시, 필요한 block 들만 메모리에 적재
> 나머지 block 들은 swap device, disk 에 저장되어 있음

### paging system 과 segment system 의 공통 특징
- 필요한 block(page/segment) 만 메모리에 적재하여 사용 > 메모리의 효율적 활용
- 메모리 공간을 2번 접근(page/segment table, real address)하여 segment mapping overhead 발생
> 전용 HW 활용으로 해결 가능 (hybrid mapping)

## Address Mapping in non-continuous allocation
가상주소를 실제주소로 매핑하는 것
- virtual address = relative address (가상주소) : 연속된 메모리 할당을 가정한 주소
- real address = absolute(physical) address (실제주소) : 실제 메모리에 적재된 주소

address mapping 을 통해 사용자/프로세스는 실횅 프로그램 전체가 연속된 메모리에 적재되어 있다고 가정하고 실행한다.
하지만 실제로는 여러 개의 block 으로 분할되어 저장되어 있다.

### block mapping
#### virtual address: v = (b, d)
- b = block 의 번호
- d = block 의 시작지점으로 부터 얼마나 떨어져 있는가 (offset)

#### Block Map Table (BMT)
address mapping state 관리 테이블
> 커널 공간에 프로세스마다 각각 하나씩 가지고 있음

- block num
- residence bit : 해당 block 이 메모리에 적재되었는지 (0/1)
- real address

block mapping 과정
1. 프로세스의 BMT 에 접근
2. BMT 에서 block b 에 대한 엔트리를 찾는다.
3. 해당 block 의 residence bit 를 확인한다.
    - residence bit = 0 인 경우, swap device 에서 해당 block 을 메모리로 가져오고, BMT 를 업데이트한 뒤 다음 단계 수행
    - residence bit = 1 인 경우, 바로 다음 단계 수행
4. BMT 에서 block num 를 통해 block 의 real address 정보를 가져온다
5. block 의 시작 지점부터 offset 만큼 떨어져있기 때문에 real address 에 d 값을 더한다.

## Paging system
프로그램을 같은 크기의 블록(page)으로 분할
> 프로그램의 논리적 구조를 고려 하지 않는다.
> 이는 page sharing/protection 을 복잡하게 함
- page : 프로그램의 분할된 block
- page frame : page와 같은 크기로 분할된 메모리의 분할 영역

### 특징
- 논리적 분할이 아닌 크기에 따른 분할
> segmetation 이 쉽지만 page 공유 및 보호 과정이 복잡함
- 같은 크기로 분할했기 때문에, 간단하고 효율적이다
- No external fragmentation
> internal fragmentation 이 발생할 수 있을까?   
> 발생 가능, 프로그램을 일정한 크기로 분할할 때, 마지막에 page 크기보다 작은 부분이 남는다면, 
> 해당 부분을 메모리에 적재했을 때 내부 단편화가 발생한다.
 
### Address Mapping
- virtual address : v = (p, d)
- p : page 번호
- d : displacement(offset)

- Page Map Table(PMT) 사용
    - page num
    - residence bit
    - page frame num
    - secondary storage address : swap device 어디에 저장되어있는지

mapping 방법
- direct mapping (직접 사상)
- associative mapping (연관 사상)
- hybrid direct/associative mapping

#### Direct mapping (직접 사상)
block mapping 과 유사

> 가정
> - PMT 를 커널 안에 저장
> - PMT entry size = entrySize
> - page sige = pageSize

##### Direct mapping 과정
> - b : PMT base address
> - b + p * entrySize : 특정 page 에 대한 정보가 저장되어있는 PMT entry 주소
> - p' : page frame num
> - p' + pageSize + d : real address
1. 프로세스의 PMT 주소 b 접근
2. PMT 에서 해당 page p 에 대한 entry 찾기
3. entry 의 residence bit 확인
4. page frame num 인 p' 확인
    - residence bit = 0 인 경우 (page fault), swap device 에서 해당 page를 메모리로 적재한 뒤, PMT 를 갱신하고 다음 단계 수행
    - residence bit = 1 인 경우, 바로 다음 단계 수행
5. 실제 주소 계산 
    > page fault 발생시 io 작업으로 인해 프로세스가 runnig 에서 asleep/block 상태가 되는데, 이는 context switching 이 발생한다는 의미다.
    > context switching 은 오버헤드가 크기 때문에, page fault 또한 오버헤드가 크다.
6. r 로 메모리 접근

##### 문제점과 해결방안
1. 메모리 접근횟수가 2배(커널에 있는 PMT 접근, 실제 주소 접근) > 성능 저하 발생
    - Associative mapping(TLB)   
2. PMT 를 위한 메모리 공간 필요
    - PMT 를 위한 전용 기억 장치 사용

#### Associative mapping (연관 사상)
Translation Look-aside Buffer(TLB) 에 PMT 적재
- Associative high-spped memory 라고 하며, PMT 를 탐색하기위한 전용 H.W 라고 할 수 있음
- PMT 를 병렬 탐색
> - 오버헤드가 적고, 속도가 빠르다
> - 하지만 비쌈, 큰 PMT 다루기 어려움

#### Hybrid Direct/Associative Mapping
두 기법을 혼합
- 작은 크기의 TLB 사용
    - PMT 는 메모리에 저장
    - TLB 는 PMT 중 일부 entry 들을 적재 (최근에 사용된 page들에 대한 entry 적재)
> 어떤 entry 를 적재할까? > Locality   
> 프로그램에서 한번 접근한 영역 또는 인접 영역을 다시 접근할 가능성이 높음

과정
1. TLB 에 적재되어있는 경우, 
    - residenc bit 을 검사하고 page frame 번호 확인
2. TLB 에 적재되어 있지 않은 경우
    - direct mapping 으로 page frame 번호 확인
    - 해당 PMT entry 를 TLB 에 적재

### Memory Management
메모리를 page 와 같은 크기로 미리 분할(page frame)하여 관리/사용

#### frame table
page frame 을 관리 하기 위한 테이블로, page frame 당 하나의 entry
- Allocated/available field : page frame 에 할당된 page 가 있는지
- PID field : 어떤 page 가 올라와 있는지
- Link field : for free list (사용 가능한 fp 들을 연결)
- AV : Free list header (free list 의 시작점)
> Link field, AV 는 사용 가능한, 비어 있는 page frame 을 관리 하기 위한 field 
> - Link field : 비어 있는 page frame entry 를 링크드 리스트로 만드는 field
> - AV : 비어 있는 page frame entry 중 가장 처음 entry

### Page Sharing
여러 프로세스가 특정 page 를 공유하는 것
- Procedure pages : pure code (ex_ 코드의 특정 함수)
- Data page
    - Read-Only data
    - Read-write data  
    > mutual exclusion 문제가 발생할 수 있기 때문에, 
    >  병행성(concurrency) 제어 기법 관리하에서만 가능

#### Data Sharing
각각의 프로세스가 가지고 있는 PMT 테이블에 
동일한 데이터에 대해서 동일한 Page frame num 을 저장해 두고 사용 가능

#### Procedure Page Sharing
프로세스 P1 과 프로세스 P2 가 있을 때,
data sharing 과 마찬가지로 PMT 테이블에 동일한 page fram num 을 저장하여 공유가 가능하다.

- 문제점
virtual address : v = (p, d) 에서
p 는 page num, d 는 offset 인데,
프로세스 P1 에서는 page num k1, 프로세스 P2 에서는 page num 이 k2 라면,

메인 메모리 안에서 두 프로세스가 가르키는 해당 page frame 의 가상 메모리가
(k1, d), (k2, d) 로 달라 문제가 발생할 수 있다.

- 해결방법
프로세스들이 shared page 에 대한 정보를 PMT의 같은 entry(동일 page num) 에 저장

#### Page Protection
여러 프로세스가 page 를 공유할 때, 보안 문제가 발생하므로, Page Protection 이 필요하다.   
👉 protecton bit 를 사용한다.

페이지 테이블에 protection bit 를 활용하여 해당 페이지 테이블에 대한 접근 권한을 관리할 수 있다.

## Segmentation system
프로그램을 논리적 block(segment)으로 분할

### 특징
- block의 크기가 서로 다를 수 있음
- 메모리를 미리 분할 해 둘 수 없음
- Segment sharing/protection 이 용이하다.
- Address mapping 및 메모리 관리가 (paging system 대비) overhead 가 크다.
- No internal fragmentation
> external fragmentation 발생 가능

### Address Mapping
- virtual address: v = (s, d)
- s: segment number
- d: displacement in a segment(offset)

- Segment Map Table (SMT)
    - segment num
    - residence bit
    - secondary storage address
    - segment length : segment 크기
    - protection bits : 프로세스의 segment 접근 권한
    > Paging 기법에서는 일정한 크기로 block 을 나눴기 때문에, 
    - segment address in memory
> Addressing mapping mechanism 은 paging system 과 유사

#### Direct mapping
- b: SMT base address
- s: segment num
- d : displacement
- a_s: segment address

##### Direct mapping 과정
- b + s * entrySize: SMP 에서 해당 segment field 가 저장된 entry 의 주소
- a_s + d : real address

1. 프로세스의 SMT가 저장되어 있는 주소 b에 접근
2. SMT 에서 segment s의 entry 찾음
3. 찾아진 entry 에 대해 다음 단계들을 순차 적으로 실행
    1. 존재 비트가 0인 경우(segment fault) > swap device 에서 해당 segment 를 메모리로 적재하고 SMT 갱신
    2. d 와 segment length 비교, d > l_s 변위가 segment 길이 보다 큰 경우 > segment overflow exception 처리 모둘 호출
    3. protection bit field 검사시, 허가 되지 않은 연산일 경우 > segment protection exception 처리 모듈 호출
4. 실제 주소 r 계산
5. r 로 메모리 접근

#### Memory management
segment 적재 시, 크기에 맞추어 분할 후 적재
> VPM 과 유사
 
- Partition table (State table)
    - start address
    - size
    - current process ID
    - segment number
    - storage protection key

#### Segment sharing/protection
논리적으로 분할되어 있어, 공유 및 보호가 용이함

> Paging system 의 page sharing 중 procedure page sharing 에서 나타난 문제점?   
> 해당 문제는 하나의 코드, function 이 여러 개의 block 으로 나누 어져 있을 수 있기 때문에,
> 코드 내부에서 jump 하는 경우 virtual memory 를 적어 두었을 때, 
> 각 프로세스 마다 다른 위치를 가리킬 수 있기 때문에 발생하는 문제이다.
> segment sharing 에서는 논리적으로 분할 되어 있어, jump 를 했을 때 동일한 block 내에서 이루어 지므로,\
> 내부에서 얼마만큼 jump 하면 되는지 적어 두면 되므로 문제가 발생하지 않는다.

## Hybrid Paging/Segmentation
paging 과 segmentation 의 장점 결합

프로그램 분할 방법
1. 논리 단위의 segment 로 분할
2. 각 segment 를 고정된 크기의 page 들로 분할
> page 단위로 메모리에 적재

### SMT 와 PMT
- 각 프로세스 마다 하나의 SMT
- 각 SMT 마다 하나의 PMT

-  SMT in hybrid mechanism
> 기존 SMP 와 겅의 유사,
> residence bit 가 없고 대신 PMT address 가 있다는 점이 다르다

-  PMT for a segment k in hybrid mechanism
> 기존 PMT 와 유사

### Address Mapping
- virtual adress : v = (s, p, d)
- s : segment num
- p : page num
- d : offset

#### Direct mapping
1. b + s * SMTentrySize, SMT 의 해당 segment 에 대한 정보가 저장된 entry 를 찾는다.
2. b_s + p * PMTentrySize, entry 에 적힌 PMT address 를 통해 PMT 의 해당 entry 를 찾는다.
3. r = p * pageSize + d, 실제 주소 값을 찾는다.
> memory access 가 세번, 즉 세배로 성능이 저하될 수 있다.

### 정리
- 논리적 분할과 고정 크기 분할의 결합
    - page sharing/protection 이 쉬움 > segment 의 장점
    - 메모리 할당/관리 overhead 가 작음 > page의 장점
    - No external fragmentation
- 전체 테이블의 수 증가
    - 메모리 소모가 큼
    - Address mapping 과정이 복잡
- Direct mapping 의 경우, 메모리 접근이 3배로 성능 저하
