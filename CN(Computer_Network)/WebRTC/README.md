
1. P2P 통신

P2P 통신은 클라이언트/서버 관계가 아닌 동등한 권한을 갖는 관계간의 통신의 의미한다. 
중앙집중 관리용 서버 없이 즉시 네트워크 구축이 가능하다. 
흔히 채팅, 음악/동영상 파일 공유, 온라인 게임 등에서 사용된다.

2. Web RTC
    1. NAT(Network Address Translation)

        P2P 통신, 임의의 두 브라우저가 직접 통신을 하기위해서는 public IP 주소를 알아내야한다. 
        하지만 일반적인 개인 컴퓨터에는 public IP 가 할당되어 있지 않다. 
        NAT가 여러 대의 컴퓨터가 하나의 public IP를 공유하게 하고, 
        각 컴퓨터는 DHCP를 통해 유휴 상태의 IP를 일시적으로 임대 받아 사용하기 때문이다. 
        일반적으로 NAT 역할을 하는 라우터가 외부에서 접근하는 공인 IP와 port 번호를 확인하여 
        현재 네트워크 내의 사설 IP들을 매핑시켜주는 역할을 한다. 
        하지만 어떤 라우터들은 특정 주소나 포트와의 연결을 차단하는 방화벽이 설정되어 있을 수 있다. 
        이런 경우 라우터를 통과하여 연결할 방법을 찾는 과정(NAT traversal)이 필요하다.
        
    2. STUN(Session Traversal Utilities for NAT) server
        
        STUN server에서 NAT traversal 작업이 이루어진다. 
        STUN 방식은 클라이언트가 자신을 식별할 수 있는 유일한 public IP와 port 번호를 확인하는 프로토콜이다. 
        클라이언트는 STUN server에 자신의 public IP와 NAT 뒤에 있는 다른 클라이언트가 접근 가능한지에 대한 답변을 요청한다. 
        만약 NAT 역할을 하는 라우터에 엄격한 보안 정책(symmetric NAT)으로 인해 다른 클라이언트의 접근이 불가능한 경우, 대안이 필요하다.
        
    3. TURN(Traversal Using Relays around NAT) server
        
        TURN server를 통해 symmetric NAT 를 우회한다. TURN 방식은 네트워크 미디어를 중개하는 서버를 이용한다. 
        중간에 서버를 한 번 거치기 때문에 오버헤드가 발생한다. 
        하지만 보안 정책이 엄격한 개인 NAT 내부의 브라우저와 P2P 통신을 하기 위해서는 TURN 방식이 유일한 방법이기 때문에, 
        다른 대안이 없을 경우 최후의 수단으로 선택해야한다.
        
    4. ICE(Interactive Connectivity Establishment) and candidate
        
        candidate는 STUN, TURN 서버를 이용해 획득한 IP address, 프로토콜, port 조합으로 구성된 연결 가능한 네트워크 주소 후보이다. 
        
        ICE는 두 개의 단말이 P2P 연결을 가능하게 하도록 최적의 경로를 찾아주는 프레임워크이다. 
        ICE 프레임워크는 STUN, 또는 TURN 서버를 이용해 상대방과 연결 가능한 candidate를 가지고 있다.
        
    5. SDP(Session Description Protocol)
        
        SDP는 WebRTC에서 스트리밍하기 위한 미디어의 해상도, 형식, 코덱 등의 초기 설정을 위해 채택한 프로토콜이다.
        
    6. Signaling
        
        Signaling은 WebRTC 연결 전 두 단말이 P2P 통신을 위한 제어 정보를 교환하는 과정이다.