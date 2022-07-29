# chapter 10. 입출력 시스템
## I/O Mechanisms
How to send data between procesor and I/O devices
> 프로세서와 장치들이 어떻게 데이터를 주고 받는가

- I/O, 입출력 장치 : 프로세서의 요청에 따라 데이터를 읽거나 데이터를 내보냄
> 필요한 데이터는 메인 메모리에 올려서 사용하기 때문에
> 프로세서는 메인 메모리에서 데이터를 입출력 장치를 통해서 내보내거나, 
> 입출력 장치를 통해 메인메모리에 저장된 데이터를 가져다 쓴다.

- Processor controlled memory access : cpu 가 제어하는 메모리 접근 방법
- Direct Memory Access (DMA)

### Process Controlld Memory Access
#### Pooling (Programmed I/O)
process 가 주기적으로 I/O 장치의 상태를 확인
- 모든 I/O 장치를 순환하며 확인
- 전송 준비 및 전송 상태 등

장점
- 간단함, process 가 모든 I/O 장치를 돌면서 작업이 필요한 경우 수행
- I/O 장치가 빠르고, 데이터 전송이 잦은 경우 효울적

단점
- Processor 의 부담이 큼 > I/O device 가 느린 경우 pooling overhead 발생

#### Interrupt
I/O 장치가 작업을 완료한 후, 자신의 상태를 Processor 에게 전달
- interrupt 발생 시, Processor 는 데이터 전송 수행


장점
- polling 대비 low overhead
- 불규칙적인 요청 처이에 적합

단점
- interrup handling overhead

메모리에서 데이터를 보내는 작업만 해도 되는 경우에도 프로세서가 항상 지켜보면서 관리해야함.
즉, 프로세서가 모든 데이터 전송을 처리해야 함
> high overhead for the processor

### Direct Memory Access (DMA)
I/O 장치와 Memory 사이의 데이터 전송을 Processor 개입 없이 수행

1. 프로세서는 DMA 제어기에 전송 방향, 전송 바이트 수, 데이터 블로긔 메모리 주소 등을 보냄
2. DMA 제어기는 디스크 제어기에 데이터를 메인 메모리로 전송하라고 요청한다.
3. 디스크 제어기가 메인 메모리에 데이터를 전송한다
4. 데이터 전송을 완료하면 디스크 제어기는 DMA 제어기에 완룟 메세지를 전달한다
5. DMA 제어기가 프로세서에 인터럽트 신호를 보낸다.

## I/O Services of OS
OS supports for better I/O performance
> OS 가 I/O 의 효율성을 어떻게 높이는가

## Disk Scheduling

평가 기준
- Throughput : 단위 시간당 처리량
- Mean response time : 평균 응답 시간
- Predictability : 으압 시간의 예측성, 요청이 무기한 연기(starvation)되지 않는지

Data access time
1) Seek time : 디스크 head 를 필요한 cylinder 로 이동하는 시간
2) Rotational delay : disk 를 돌려 필요한 sector 가 head 위치로 도착하는 시간
3) Data transmission time : 해당 sector 를 읽어서 전송하는 시간

- optimaizing seek time
  - FCFS (First Come First Service)
  - SSRF (Shortest Seek Time First)
  - Scan
  - C-Scan (Circular Scan)
  - Look
- optimizing rotational delay
  - Sector queueing(SLTF, Shortest Latency Time First) 
- SPTF (Shortest Positioning Time First)

### optimaizing seek time
#### FCFS (First Come First Service)
요청이 도착한 순서에 따라 처리

장점
- 간단함 > low scheduling overhead
- 공평한 처리 기법, 무한 대기 방지

단점
- 최적 성능 달성에 대한 고려가 없음

> Disk access 부하가 적은 경우 적합

#### SSRF (Shortest Seek Time First)
현재 head 위치에서 가장 가까운 요청 먼저 처리

장점
- Throughput : 단위 시간당 처리량이 늘어남
- 평균 응답 시간 감소

단점
- Predictability 낮음
- Starvation 현상 발생 가능
> 현재 head 위치에서 멀리 있는 요청의 경우 무기한 기다리게 될 확률이 높기 때문

> 일괄처리 시스템에 적합
> - 들어온 모든 요청을 처리하여 한번에 응답을 주는 시스템이기 때문에 각 요청에 대한 응답시간이 중요한 시스템이 아니다.
> - 빠르게 모든 요청을 처리하는 것이 중요하다. (throughput)

#### Scan
- 현재 head 의 진행 방향에서, head 와 가장 가까운 요청 먼저 처리
- 진행 방향을 기준으로 마지막 cylinder 도착 후, 반대 방향으로 진행

장점
- SSTF 의 starvation 문제 해결
- Throughput 및 평균 응답시간이 우수

단점
- 진행 방향 반대쪽 끝의 요청들의 응답시간이 상대적으로 오래 걸림

#### C-Scan
Head 가 미리 정해진 방향으로만 이동
- 마지막 cylinder 도착 후, 시작 cylinder 로 이동 후 재시작

장점
- Scan 대비 모든 요청들에 균등한 기회 제공

단점
- head 를 끝에서 끝으로 움직이는 불필요한 이동으로 인해, total seek distance 가 커짐

#### Look (Elevator algorithm)
Scan 에서 현재 진행 방향에 요청이 없으면 방향 전환
- 마지막 cylinder 까지 이동하지 않음

장점
- Scan의 불필요한 head 이동 제거

### optimizing rotational delay
#### SLTF (Shortest Latency Time First)
- Fixed head disk 시스템에서 사용
  > Fixed head disk : 각 track 마다 head 를 가진 disk
  - Head 의 이동이 없음
  - Sector queuing algorithm
    - 각 track sector 별(같은 cylinder 에 있는 sector 들) queue 유지
    - Head 아래 도착한 sector 의 queue 에 있는 요청을 먼저 처리 함

> Moving head disk 의 경우
>  - 같은 cylinder 또는 track 에 여러 개의 요청 처리를 위해 사용 가능
>  - Head 가 특정 cylinder 에 도착하면, 고정 후 해당 cylinder 의 요청 모두 처리

### SPTF (Shortest Positioning Time Frist)
> Positioning Time = Seek time + rotation delay
Positioning time 이 가장 작은 요청 먼저 처리

장점
- throughput 증가, 평균 응답 시간 감소

단점
- 가장 안쪽 과 바깥쪽 cylinder 의 요청에 대해 starvation 문제 발생 가능

#### Eschenbach scheduling
> positioning time 최적화 시도
disk가 1회전 하는 동안 요청을 처리할 수 있도록 요청을 정렬
- 한 cylinder 내 track, sector 들에 대한 다수의 요청이 있는 경우, 다음 회전에 처리

## RAID Architecture
> Redundant Array of Indexpensive Disks
여러 개의 물리 disk 를 하나의 논리 disk 로 사용
> 여러 개의 싼 disk 를 하나로 묶어서 높은 성능을 내는 것을 목표로 함 

- disk systemdml 서응 향상
  - performance (access speed)
  - Reliability 

### RAID 0
Disk striping : 논리적인 한 block 을 일정한 크기로 나누어 각 disk 에 나누어 저장

- 모든 disk 에 입출력 부하 균등 분배
  - parraller access, 병렬적으로 disk 에 접근하여 data 에 더 빨리 접근 가능 > performance 향상
- 한 disk 에서 장애 발생 시, 데이터 손실 발생 > low reliability

### RAID 1
Disk mirroring : 동일한 데이터를 mirroring disk 에 중복 저장
- 최소 2개의 disk 로 구성 > 입출력은 모든 disk 에서 가능

- 한 disk 에 장에가 생겨도 데이터 손실 없음 > high reliability
- 가용 disk 용량이 전체 disk 용량의 1/2

### RAID 3
RAID 0 + parity disk
  - Byte 단위 분할 저장 > RAID 0 와 차이점
  - 모든 disk 에 입출력 부하 균등 분배 > Parallel access, performance 향상

- 한 disk 에 장애 발생 시 parity 정보를 이용하여 복구
- write 시 parity 게산이 필요
  - overhead 발생
  - wtire 가 몰릴 경우 parity disk 에서 병목 현상 발생 가능 

### RAID 4
RAID 3 변형
  - block 단위 분산 저장 > RAID 3 와 차이점
  - 

