## Immersive Display

### human information processing
사람의 인지적인 performance 가 display 를 만드는데 있어 중요한 정보임,
사람이 인지할 수 없는 수준의 display 를 만드는 것은 비효율적이기 때문이다.

#### Perception
- senses
    - stimuli : 자극, 외부의 물리 신호
    - receptors : 센서, 외부의 자극을 센싱
    - short term sensory memory : 각 센서들이 짧은 기억 저장 시스템, 
    중요한 데이터와 중요하지 않은 데이터 등 필터링 과정이 이루어짐(ex) 빨간색을 중요한 데이터로 인식)
- perception : 필터링 되어서 넘어오 인식, 입력된 정보를 working memory 로 보냄

#### Cognition
- memory
    - working memory : 어떤 메모리는 long term memory 에 저장됨
    - long-term memory : 장기 저장소, 여기 저장된 데이터를 바로 decision making 하는데 
    사용할 수 없음, working memory 를 거침
    > recall : 장기 저장소에서 working memory 로 정보를 보냄 ex) 옛날 기억을 기억해 내는 과정
- intention
    - decision making and response selection

> attention : 집중력의 총량이 있음, perception/memory/intention 에 나누어 사용함
ex) 티비에 집중하고 있으면 주변 상황 인식이 잘 안됨

> simulation 및 예측이 어려움

#### Ergonomics
- action
    - response execution (motion or behaviour)

> 각각의 감각 기관에 따라 다른 장치를 활용

### How do we perceive reality?
sight, hearing, touch, taste, smell

> balance(평형감각) : touch 로 분류하기도 하지만, 별도의 감각으로 하기도함

> multi modal(channel) : 다중 감각기관 몰입형 디스플레이

### How does human interact with world?
`그림`

지각 > 인지 > 행동 > 세상 > 지각 > 인지 > ...

#### Role of Immersive Interaction device
- 디지털 세계 > 지각 : 몰입형 출력장치
- 행동 > 디지털 세계 : 몰입형 입력장치
> - 지각 : 컴퓨터가 만들어 낸 신호를 실제 신호로 지각
> - 인지 : 디지털 세계가 실제 세계인 것 처럼 이해
> - 행동 : 실제 세계처럼 디지털 세계와 상호작용

#### Creating the illusion of reality
`예시 이미지`

#### Immersive Interaction device 의 과제
- 어떻게 상업성, 범용성 있게 만들 수 있을까?
- 어떻게 효율적으로 싸게 만들 수 있을까?


### visual feedback
#### 시각 출력 프로세스
개념상의 게임 세계 > 그림으로 시각화 > 시각 디스플레이로 아날로그화 > 눈으로 인지

#### visual display : 가상현실 출력 장치
- 몰입형 : full immersive / 현실세계를 완전히 차단 > 장비, 공간이 필요함
    - HMD 기반
    - 다면 대형 화면 기반
- 반몰입형
    - 벽 프로젝션 기반
    - 모니터 기반
    - 테이블탑 기반 : 책상 위 표면이 스크린
- 미래기술
    - 뇌 자극형
    - 컨택트렌즈형

#### human vision system
- retina : sensor, 자극을 받으면 fire(전류 신호를 보냄)

- rods : 밝기 판단, 훨씬 더 수가 많음 > 더 민감함
- cones : 색상 판단

- resolution of eye : 해상도, ~576 megapixels
- temporal resolution : 어느정도 속도로 변화할때 다른 물체로 인식하는가 60Hz

##### 시야각
- 최대 135도까지 파악 가능
- 색상 판단은 최대 30도
- 실제 고해상도 인식 5도

##### Depth perception, 물체와의 거리 판단
- oculomotor cue : 근육으로 판단
    - vergence : 두 눈의 각도 - binocular
    - accommodation : 렌즈의 근육의 수축 이완 정도 - monocular
- visual cue : 시각으로 판단
    - binocular disparity : 물체가 가까이 있을수록 양쪽 눈에서 보이는 물체의 위치의 차이가 큼
    - retinal blur : 멀리있을 수록 흐리게 보임

- motion parallax : 가까이 있는 물체는 빨리 움직이는 것처럼, 멀리 있는 것은 상대적으로 천천히 움직이는 것처럼 보임

- relative sizes, perspective : 상대적인 크기에 따라, 일반적으로 크기가 작은 물체가 크게 보인다면 가까이 있다고 판다.
만약 처음 보는 물체라면 해당 방법으로 거리 판단 불가

- atmospheric artifact(fog) : 매우 멀리 있는 경우 안개가 낀듯 흐리게 보임
- occlusion : 가려진 물체는 가린 물체보다 멀리 있음
- shadow : 물체의 사이즈가 더 작아도, 그림자의 위치다 더 앞에 있으면 해당 물체가 더 가까이 있어 보임

###### Depth perception distance
거리에 따라 의미 있는 cue 와 의미 없는 cue 에 대한 `그래프`

###### vergence-accommodation conflict
vergence 에 의해서 눈과 물체의 거리가 멀다고 인식하지만,   
focus cues 에 의해서는 눈과 실제 스크린과의 거리는 고정되어 있어   
서로 인식하는 거리가 다름 > 뇌에서 혼동 발생

왼쪽눈과 오른쪽눈에 보여주는 화면을 다르게 

##### IMPROVING DEPTH PERCEPTION IN VR

#### IMMERSIVE visual display
##### HMD basic principles
- 시야각을 넓히는 것
- 해상도를 높이는 것

핵심 부품
- lens
    - Field of view : 시야각
    - occularity, interpupillary distance : 사람마다 눈사이 거리가 다름, 그걸 조절할 수 있는가? (HW, SW )
    - eye relief, eye box : 기계가 흔들리더라도, 눈이 편안한 상태에서 화면을 선명하게 잘 볼 수 있는가
- display
    - 해상도
    - 전원, 밝기
- Ergonomics
    - size, weight
    - wearability
> 각각의 요소가 서로 trade off 관계를 가지기도 함 ex) eye box and size : eye box 가 크려면 렌즈 사이즈가 커야함

핵심 요소
- Field of view
    - 넓은 시야각은 HMD 몰입감의 핵심
    - 크고 높은 해상도의 LCD 디스플레이, 곡률이 큰 렌즈일수록 시야각이 넒어짐
    - trade off
        - LCD 와 큰 렌즈는 HMD 전체 크기를 크게 하여 사용성 저하
        - 곡률이 큰 렌즈는 무겁고 더 큰 광학 왜곡 발생
    - 측정법 : 수평, 수직, 대각선 으로 측정
        - Monocular FOV
        - Total FOV
        - Binocular(or stereoscopic) FOV

- Ocularity
    - Monocular : HMD image to only one eye.
    - Bioccular : Same HMD image to both eyes.
    - Binocular (stereoscopic) : Different but matched images to each eye
    
- Distortion in lens optics
HMD optics distort images shown in them

왜곡 함수를 만들어서 역함수를 구해서 컨텐츠 자체를 역함수에 넣은 화면을 띄운다.
실제로 사용자가 보기에는 찌그러지지 않은 원 컨텐츠 그대로 보인다.

> 6DOF : 앞/뒤, 위/아래, 왼쪽/오른쪽

- THREE TYPES OF GRAPHICS RENDERING MODULE IN HMD
- 별도의 컴퓨터에서 수행하고 HMD 는 컴퓨터와 붙어있는 형태
    - 렌더링 성능 높음
    - 움직임이 자유롭지 못함
    - 개발에 사용
- 뷰어 형태의 HMD 에 스마트폰을 끼워 렙더링 수행
    - 쉽게 사용 가능, 각격이 쌈 
    - 렌더링 성능이 핸드폰 성능에 따라 다름, 일반적으로 낮은 서능
    - 머리 회전만 트래킹 가능
    - 제자리에서 머리 회전만 사용하는 어플리케이션에 적합
- Stand-Alone 으로 HMD 내부에서 렌더링 수행
    - GPU 발전으로 성능 + 사용성 모두 잡았으나 가격이 비쌈

- PIXEL DENSITY COMPARISON
Pixel vs horizontal field of view   
시야각에 따른 적정 픽셀( 사용자가 픽셀을 느끼지 못할 정도의 해상도)

- PROBLEMS STILL EXIST
    - Confliction between Accommodation cue and Vergence cue
    ∴ Major cause of cyber/VR sicknes

    - 동시에 여러 사람이 HMD 를 사용한 프로그램을 사용할 때 렌더링이 동시에 잘 되고, 싱크가 맞아야함

##### CAVE
각 면과 면 사이이에 선이 보이면 몰입도가 깨짐
- 선이 보이는 상황
    - 각 면의 업데이터 싱크가 맞지 않을 때
    - 각 화멵이 연결되어야함
    
##### STEREO PROJECTION
- Active stereo   
왼쪽 오른쪽 그림을 반복, 안경을 왼쪽 화면이 보일때 오른 눈을 가림
    - 단점 
        - 한눈으로만 화면을 보기때문에 화면 밝기가 떨어져 어두움
        - 화면의 전환이 자주 이루어지기 때문에 디스플레이 성능이 맞아야함

- Passive stereo
각 눈에 각각 수직방향/수평방향 or 왼쪽 원형/오른쪽 원형 편광을 적용
    - 단점
        - 해상도가 반으로 준다
        - 편광 필터의 효율이 100%가 아니라 잔광이 발생
        
### HAPTIC FEEDBACK
#### HUMAN HAPTIC SYSTEM
손에 너무 많은 종류의 신호, 자극이 들어오기 때문에 몰힙형 디스플레이로 구현하는 것이 매우 어렵다.

#### Touch
- Mechanoreceptors: Detect pressure, vibrations & texture
- Thermoreceptors: Detect hot/cold
- Nocireceptors: Detect pain
- Proprioreceptors: Detect spatial awareness

- Two haptic information
    - Kinesthetic
        - position
        - orientation
        - force
    - Tactile
        - contact location
        - pressure
        - slip and shear
        - vibration
        - temperature

> 촉각 디스플레이를 만드는 것이 어려운 이유 
> - 두가지 정보를 모두 전달하는 장치를 만드는 것이 매우 어렵다
> - 촉각을 만드는 외부 신호가 매우 많고 복잡하다

#### Cutaneous System
- skin - heaviest organ in the body

6가지 종류의 감각
- four kinds mechanoreceptors - 기계적인 자극에 대한 센서
- 온도, 고통에 반응하는 센서

##### mechanoreceptors
- slow adapting
    - merkel discs : 느리게 꾸욱 누르는 감각 - edges, intensity
    - ruffini corpuscles : 늘어나는, 눌리는 감각 - static force, skin stretch

- rapid adapting
    - meissner corpuscles : 움직일 때 느껴지는 감각 - velocity, edges
    - pacinian corpuscles : 매우 빠르게 움직일 때 느껴지는 감각 - acceleration, vibration

> sensory adaptation
> - rapid adapting : 자극이 빠르게 변화할 때만
> - slow adapting : 자극이 있을 때만

> spatial resolution   
> 사람이 두가지 촉감을 구별할 수 있는 거리

> curves of equal sensation magnitudes   
> 진동 세기에 따른 민감 정도, threshold 가 낮을 수록 민감함

> mechanoreceptors in join capsule   
> 역감??


#### IMMERSIVE HAPTIC INTERFACE

##### BENEFITS OF HAPTICS

> 햅틱스의 경우 사용자의 움직임을 센싱해서 해당 정보를 이용한 response 를 계산하는 것이 중요하다

3/28 4-1 강의 다시 듣기


















