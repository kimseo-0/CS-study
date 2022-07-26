# chapter 10. 파일 시스템
## Disk System
### Disk pack
데이터 영구 저장 장치 (비활성화)
- 구성
  - Sector : 데이터 저장/판독의 물리적 단위 (0, 1 을 저장)
  - Track : Platter 한 면에서 중심으로 같은 거리에 있는 sector 들의 집합
  - Clinder : 같은 반지를을 갖는 track 의 집합
  - Platter : 양면에 자성 물질을 입힌 원형 금속판(0, 1 기록을 위해), 데이터의 기록/판톡이 가능한 기록 매체\
  - Surface : Platter 의 윗면과 아랫면

### Disk drive
Disk pack에 데이터를 기록하거나 판톡할 수 있도록 구성된 장치
- 구성
  - Head : 디스크 표면에 데이터를 기록/판독
  - Arm : Head 를 고정/지탱 (각 Platter 마다 하나씩 있음
  - Positioner (boom) : 
    - Arm 을 지탱
    - Head 를 원하는 track 으로 이동
  - Spindle
    - Disk pack 을 고정 (회전 축)
    - 분당 회전 수 (RPM, Revolutions Per Minute)
 
### Disk Address
- Physical disk address : (cylinder num, surface num, sector num) 다음 세가지 정보를 알아야 원하는 sector 에 접근 가능
- Logical disk address (relative address)
  - Disk system 의 데이터 전체를 block 들의 나열로 취급
  - Block 에 번호를 부여
  - 임의의 block 에 접근 가능
  > OS 에서 모든 종류의 disck 의 기계적인 특징을 알 수 없기 때문에, 추상화된 형태인 block 의 집합으로 취급
  - block 번호를 통해 physical address 에 접근하기 위해서, physical address 모듈인 disk driver 가 필요하다.

### Disk Address Mapping
OS 에서 전달한 Block num 을 Disk driver 가 physical address 로 mapping,
mapping 된 physical address 를 전달 받은 Disk controller 가 작업을 수행

## File System
사용자들이 사용하는 파일들을 관리하는 운영체제의 한 부분
- Files : 연관된 정보의 집합
- Directory structure : 시스템 내 파일들의 정보를 구성 및 제공
- Partitions : Directory 들의 집합을 논리적/물리적으로 구분

### File Concept
보조 기억 장치에 저장된 연관된 정보들의 집합
- 보조 기억 장치 할당의 회소 단위
- Sequence of bytes, byte 들의 집합 - 물리적 정의

- 내용에 따른 분류
  - Program file
  - Data file
- 형태에 따른 분류
  - Text file
  - Binary file (0, 1로 이루어진 파일)
 
- File atributes (속성)
  - name
  - Identifiler
  - Type
  - Location
  - ...

- File operations
  - create
  - write
  - read
  - delete
  - ...
  
  > OS 는 file operation 들을 수행할 수 있는 system call 을 제공해야 함

### File Access Metods
- Sequetial access (순차 접근) : file 을 record 단위로 순서대로 접근
- Directed access (직접 접근) : 원하는 block 을 직접 접근
- Indexed access : index 를 참조하여, 원하는 block 을 찾은 후 데이터에 접근

#### File System Organization
- Partitions(volumes, minidisks) : virtual disk, 논리적인 disk
- Directory : file 들을 분류, 보관하기 위한 개념
  - operations of direcotry : search file, create file, delete file, list directory ...   
  > OS 가 system call 을 통해 제공해야 함

> Mounting : 현재 File system 에 다른 File system 을 붙이는 것

## Directory Structure
### Logical direcoty structure
#### Flat (single-level) directory
File system 내에 하나의 directory 만 존재

문제점
- File naming : 파일 충돌, 중복되는 파일 명이 생기기 쉽다
- File protection : 파일이 덮어씌어지는 문제 발생
- File management  : 파일 관리 어렵
- 다중 사용자 환경에서 문제가 더 커짐

#### 2-Level Directory Strucure
사용자 마다 하나의 directory 배정

- 구조
  - MFD (Master File Directory) : root
  - UFD (User File Directory) : 사용자 별 파일

문제점
- sub directory 생성불가 > single-level 에서 발생하는 file 관련 문제 발생
- 사용자간 파일 공유 불가 
> 만약 다른 사용자에게 자신의 파일을 공유하려고 한다면 전체 폴더에 액세스 하게 해야함 > 보안 문제 발생

#### Hierarchical Directory Structure
Tree 형태의 계층적 directory
- 사용자 하부 directory 생성/관리 가능
  - system call 제공 (OS)

> 대부분의 OS 가 사용

용어
- Home directory : 접근 가능한 가장 상위의 directory
- Current directory : 현재 탐색중인 directory
- Absolute pathname : 절대 경로, root directory 로부터 나타낸 경로
- Relative pathname : 상대 경로, Current directory 로부터 나타낸 경로

#### Acyclic Graph Directory Structure
> Acyclic : 원형이 될 수 없는, cyclic 할 수 없는
Hierachical directory structure 의 확장
- directory 안에 shared directory, shared file 을 담을 수 있다.
> Link 개념 사용 ex) 바로가기

#### General Graph Directory Structure
 Acyclic Graph Directory Structure 에서 cycle 을 허용한 형태
 
 문제점
 - file 탐색 시, Infinite loop 를 
  
## File Protection
File 에 대한 부적절한 접근 방지
> 다중 사용자 시스템에서 더욱 필요

접근 제어가 필요한 연산들
- Read
- Write
- Execute
- Append

### File Protection mechanism
파일 보호 기법은 system size 및 응용 분야에 따라 다를 수 있음
- password 기법
  - 각 file 들에 PW 부여
  - 비현실적
    > - 사용자들이 파일 가각에 대한 PW 를 기억해야 함
    > - 접근 권한 별로 서로 다른 PW 를 부여 해야 함

- Access Matrix 기법

#### Access Matrix
범위(domain)와 개체(object) 사이의 접근 권한을 명시

- Object : 접근 대상(file, directory, HW/SW)
- Domain : 접근 권한의 집합, 같은 권한을 가지는 그룹 (사용자, 프로세스)
- Access right : 접근 권한 <object name, rights set>

#### Implementation of Access Matrix
##### Global Table
시스템 전체 file 들에 대한 권한을 Table 로 유지
ex) <domain name, object name, rights set>

- 단점 : large table size > 필요 없는 빈 공간들까지 함께 저장해야 함
> 최대한 빈 공간이 생기지 않는 방법을 고안해보자

##### Access list
파일 별로 해당 각 도메인이 가지고 있는 권한을 저장
- Access matirix 의 열을 list 로 표현
- A list(F) = {<D1, R1>, <D2, R2> ......}
- Object 생성 시, 각 domain 에 대한 권한 부여
- Object 접근 시 권한을 검사
> 실제 OS 에서 많이 사용됨


- 단점 : 파일에 엑세스 할 때마다, 권한 확인 작업이 필요 > 파일에 접근했다, 나갔다 반복할 경우 overhead 발생 
 
##### Capability list
도메인 별로 가지고 있는 파일에 대한 권한 저장
- Access matirix 의 행을 list 로 표현
- C list = {<F1, R1>, <F2, R2> ......}
- 도메인이 Object 접근 시, capability 를 가짐을 제시 후, 검증 승인

- 단점 : 
    - capability 의 보호를 잘 하지 않으면, 보안에 문제가 생길 수 있다.
    > 시스템(OS)이 capability list 자체를 보호해야함 > overhead 발생
    > - 일반적으로 kernel 안에 저장
    - object 별 권한 관리가 어려움 : 
    > 만약 특정 object 에 대한 모든 domain 의 권한을 수정하고 싶은 경우 모든 리스트에 접근하여 수정작업이 이루어져야함

##### Lock-key mechanism
- Access list 와 Capability list 를 혼합
- Object 는 Lock 을 Domain 은 Key 를 가짐 (Lock/Key 는 unique bit patters)
- Domain 내 프로세스가 object 접근 시, key 와 lock 의 짝이 맞는지 확인

- 단점 : 시스템이 key list 를 관리해야한다는 overhead 발생

##### Comparison
|이름|특징|
|---|---|
|Global table|간단함, 용량이 큼|
|Access list|Object 별 권한 관리 용이, Object 접근 시마다 검사 > overhead|
|Capability list|list 내 object 들에 대한 접근에 유리(빠름)|

##### Access list + Capability list
1. Object 에 처음 접근할 경우 > Access lsit 탐색
  - 접근 허용시, Capability 생성 후 해당 프로세스에 전달
  - 이후 접근시, 권한 겁사 없이 접근 가능
2. 마지막 접근 후 > Capability 삭제

