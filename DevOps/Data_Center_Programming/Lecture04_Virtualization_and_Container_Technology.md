# Lecture 04 - Virtualization and Container Technology

## Quick Review of Reading Articles

## Today's Reading Articles
- Why is it important to use virtualization?
- Why is it important to use container technology?
- What are the limitations of using container technology? 
What would you suggest to overcome the limitations?

## Course
### Virtualization
virtualization refers to the act of creating a virtual version of something,
including virtual computer hardware platforms, storage devices, and computer network resources.

실제 하드웨어가 아닌, 하드웨어 위에 가상화 계층 위에서 동작하는 가상의 컴퓨터(컴퓨터, 스토리지, 네트워크 등 포함)

#### Types of virtualization
- software
- memory
- storage
- data
- network

#### Roloe of virtualization
- 하나의 컴퓨터 위에서 가상화 계층을 통해 물리적으로 여러개의 컴퓨터가 있는것처럼 동작시킬수 있다.
- 하드웨어와 위에 올라가는 OS, 애플리케이션을 분리할 수 있다.

#### Hypervisor
##### Hypervisor virtualization
가상화를 해주는 소프트웨어

- 여러개의 VM(virtual machines) 을 host machine 위에서 작동시킬 수 있다.
- 서로 다른 guests os 를 올려서 작동시킬 수 있다.
- type
    - type.1 Bare Metal
    
        hardware 바로 위에 hypervisor 가 올라가고 그 위에서 VM 을 작동시키는 방식
    - type.2 Hosted
    
        hardware 위에 Host OS 가 있고, 그 위헤 hypervisor 가 올라가고 
        그 위에서 VM 을 작동시키는 방식

> VM(virtual machines) 은 
> Guest OS 와 그 위에서 동작하는 애플리케이션까지 
> 하나의 컴퓨터인 것처럼 동작하는 가상의 기계를 의미한다. 

##### Hypervisor software
- virtual machine monitor
- host computer 가 여러개의 guest VM 을 동작할 수 있게 한다.   
(자원, 메모리, 프로세싱 등을 가상으로 공유함으로써)

##### Hosted Hypervisor Architecture
| | | |
|:---:|:---:|:---:|
| |APP|APP|
| |Guest OS|Guest OS|
|APP|Virtualization Layer| |
| |HostOS| |

##### Benefits of using hypervisors
- cost efficient (relatively)

각각의 물리적인 machine 을 여러개의 VM 으로 나누어 사용 가능하다.
ex) 굉장히 작은 크기의 machine 이 필요하더라고, 하나의 큰 machine 을 사용해야했던 반면,
하나의 큰 machine 을 필요한 만큼 나누어 사용할 수 있다.

- easy to scale

요청에 맞춰서 쉽게 scale 을 변경할 수 있다.
ex) 100대의 컴퓨터를 A 부서에서 90대 B 부서에서 10대를 사용하다가 
필요에 따라 A 부서에서 10대 B 부서에서 90 대를 사용하게 할 수 있다.

#### problem of virtual machine
- 각각의 VM 은 각자 하나의 full copy of OS 와 application(binaries and libraries 을 포함해서) 을 가지고 있기 때문에
용량이 매우 크다.
- VM 위에서 OS 가 부팅되게 까지 시간이 걸림 (slow to boot)

- linux(guest) over linux(host) 문제 발생

#### virtualization software
virtual machine 기법을 사용하고 있는 소프트웨어들

### Container
프로그램을 설치하고, 삭제할때 깔끔하게 삭제되지 않고, 
남는 문제를 해결하고 싶다는 생각에서 나온 아이디어

| | | |
|:---:|:---:|:---:|
|APP A|APP B|APP C|
| |Container Technology Software ex) Docker| |
| |Host Operating System| |
| |Infrastructure| | 

- 프로그램을 설치할때 그 프로그램과 프로그램에 필요한 OS 의 확장된 부분, 
기타 등등의 라이브러리를 하나의 컨테이너에 담는 abstraction at the app layer 이다.
- 설치 후 삭제 시 깔끔하게 삭제하고 이전상태로 돌아 올 수 있다.
- os kernel 을 공유하지만, 각각의 컨테이너들은 각자의 공간에서 독립적으로 실행된다.
- share the OS kernel, 자기자신의 os를 가지고 있지 않음
    - VM 에 비해 사이즈가 작음
    - 설치, 실행 시간도 빠름
    - 메모리 사용양도 작음
- 더 많은 애플리케이션을 다룰 수 있다.

### Container vs Virtual Machine
- execution time : VM >>> Docker
- memory usage : VM >>> Docker
- CPU utilization(user CPU) : VM <<< Docker

∴ container 가 더 많은 어플리케이션을 실행할 수 있다.

### Challenges of Container
- staff education : 재교육이 필요하다
- re-architecting applications : 구조가 완전히 달라짐
- platform issues

## Reading Articles
https://docs.docker.com/get-started/