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

### File System Organization
- Partitions(volumes, minidisks) : virtual disk, 논리적인 disk
- Directory : file 들을 분류, 보관하기 위한 개념
  - operations of direcotry : search file, create file, delete file, list directory ...   
  > OS 가 system call 을 통해 제공해야 함

> Mounting : 현재 File system 에 다른 File system 을 붙이는 것

## Directory Structure

