# chapter 8. 가상 메모리

## Non-continuous allocation
- 사용자 프로그램을 여러 개의 block 으로 분할
- 실행 시, 필요한 block 들만 메모리에 적재
> 나머지 block 들은 swap device, disk 에 저장되어 있음

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

## paging system
프로그램을 같은 크기의 블록(page)으로 분할
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
