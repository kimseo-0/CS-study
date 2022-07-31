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
#### Poling (Programmed I/O)
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
4. 데이터 전송을 완료하면 디스크 제어기는 DMA 제어기에 완료 메세지를 전달한다
5. DMA 제어기가 프로세서에 인터럽트 신호를 보낸다.

## I/O Services of OS
OS supports for better I/O performance
> OS 가 I/O 의 효율성을 어떻게 높이는가

커널 아래 '커널 입출력 서브 시스템'이 I/O service 를 제공 한다.

제공 서비스
- I/O Scheduling : 입출력 요청에 대한 처리 순서 결정
    - 시스템의 전반적 성능 향상
    - process 의 요구에 대한 공평한 처리
- Error handling : 입출력 중 발생 하는 오류 처리 ex) disk access fail, network communication error
- I/O device information managements

> Buffering
> - I/O 장치와 program 사이에 전송되는 데이터를 Buffer 에 임시 저장
> - 전송 속도 (or 처리 단위) 차이 문제 해결
>
> Caching
> - 자주 사용하는 데이터를 미리 복사해 둠
> - Cache hit 시 I/O 를 생략 할 수 있음
> 
> Spooling
> - 한 I/O 장치에 여러 Program 이 요청을 보낼 시, 출력이 섞이지 않도록 하는 기법
> - 각 Program 에 대응 하는 disk file 에 기록 (spooling)
> - Spooling 이 완료 되면, spool 을 한번에 하나씩 I/O 장치로 전송
> - ex) printer

## Disk Scheduling
- Disk access 요청들의 처리 순서를 결정
- Disk system 의 성능을 향상

- 평가 기준
    - Throughput : 단위 시간당 처리량
    - Mean response time : 평균 응답 시간
    - Predictability
        - 응답 시간의 예측성
        - 요청이 무기한 연기 (starvation) 되지 않도록 방지

## RAID Architecture