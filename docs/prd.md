graph TD
    %% 1단계: 홈 화면 (진입 및 인지)
    Home["🏠 메인 페이지 (홈)"]
    
    %% 2단계: 핵심 영역 (팝업존 및 제어)
    subgraph PopUpZone [팝업존: 정보 제어 영역]
        BannerContent["🖼️ 배너 이미지 (큰 글씨/고대비)"]
        
        subgraph Controller [컨트롤러: 기능적 분리 배치]
            PrevBtn["◀ 이전 (18px)"]
            StopPlayBtn["Ⅱ 넘김 멈추기 (24px/Point Color)"]
            NextBtn["▶ 다음 (18px)"]
            Indicator["🔢 현재 페이지 (1 / 16)"]
        end
    end

    %% 3단계: 주요 서비스 메뉴 (큼직한 카드형)
    subgraph CoreMenus [핵심 서비스 메뉴]
        Notice["📰 도서관 소식"]
        Lecture["✍️ 강좌 신청"]
        LibraryInfo["📚 이용 안내"]
        Location["📍 도서관 위치"]
    end

    %% 4단계: 상세 페이지 및 과업 완료
    DetailView["📄 소식/강좌 상세 내역"]
    ApplyForm["📝 신청 정보 입력 (큰 입력창)"]
    SuccessPage["✅ 신청 완료 (확인 문구)"]

    %% 연결 구조
    Home --> PopUpZone
    Home --> CoreMenus
    
    %% 태스크 플로우 연결
    BannerContent --> DetailView
    Notice --> DetailView
    Lecture --> DetailView
    
    DetailView --> ApplyForm
    ApplyForm --> SuccessPage

    %% 스타일 정의
    style Home fill:#f9f9f9,stroke:#333,stroke-width:2px
    style StopPlayBtn fill:#004595,color:#fff,stroke-width:2px
    style SuccessPage fill:#e8f5e9,stroke:#2e7d32
    style PopUpZone fill:#fff,stroke:#004595,stroke-dasharray: 5 5