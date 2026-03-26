/*
  단어 데이터 파일입니다.
  추후 500개까지 확장할 때도 같은 형식을 그대로 유지하면 됩니다.
  각 항목 규칙:
  - id: 숫자, 중복 없이 순차적으로 사용
  - word: 영어 단어
  - meaning: 한국어 뜻
  - pronunciation: 쉬운 한국어식 발음 가이드
  - sentence: 짧고 자연스러운 오픽 스타일 예문
  - sentenceMeaning: 예문 뜻
  - sentencePronunciation: 문장 전체 발음 가이드
  - category: 주제 분류
  - examples: 선택 항목. 예문 3개를 직접 넣고 싶을 때 아래 형식으로 추가할 수 있습니다.
    examples: [
      { sentence: "", meaning: "", pronunciation: "" },
      { sentence: "", meaning: "", pronunciation: "" },
      { sentence: "", meaning: "", pronunciation: "" }
    ]
*/
var WORDS = [
  {
    id: 1,
    word: "routine",
    meaning: "일상, 루틴",
    pronunciation: "루틴",
    sentence: "I have a simple morning routine every day.",
    sentenceMeaning: "저는 매일 간단한 아침 루틴이 있어요.",
    sentencePronunciation: "아이 해브 어 심플 모닝 루틴 에브리 데이",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I have a simple morning routine every day.",
        meaning: "저는 매일 간단한 아침 루틴이 있어요.",
        pronunciation: "아이 해브 어 심플 모닝 루틴 에브리 데이"
      },
      {
        sentence: "I keep a simple routine even on busy weekdays.",
        meaning: "저는 바쁜 평일에도 간단한 루틴을 유지해요.",
        pronunciation: "아이 킵 어 심플 루틴 이븐 온 비지 위크데이즈"
      },
      {
        sentence: "My routine helps me manage my day better.",
        meaning: "제 루틴은 하루를 더 잘 보내게 도와줘요.",
        pronunciation: "마이 루틴 헬프스 미 매니지 마이 데이 베러"
      }
    ]
  },
  {
    id: 2,
    word: "breakfast",
    meaning: "아침 식사",
    pronunciation: "브렉퍼스트",
    sentence: "I usually eat breakfast at home before work.",
    sentenceMeaning: "저는 보통 출근 전에 집에서 아침을 먹어요.",
    sentencePronunciation: "아이 유주얼리 잇 브렉퍼스트 앳 홈 비포 워크",
    category: "음식",
    examples: [
      {
        sentence: "I usually eat breakfast at home before work.",
        meaning: "저는 보통 출근 전에 집에서 아침을 먹어요.",
        pronunciation: "아이 유주얼리 잇 브렉퍼스트 앳 홈 비포 워크"
      },
      {
        sentence: "I usually have breakfast at home with my family.",
        meaning: "저는 보통 가족과 집에서 아침 식사를 먹어요.",
        pronunciation: "아이 유주얼리 해브 브렉퍼스트 앳 홈 위드 마이 패밀리"
      },
      {
        sentence: "Breakfast is one of my favorite parts of the day.",
        meaning: "아침 식사는 제가 하루 중 좋아하는 시간 중 하나예요.",
        pronunciation: "브렉퍼스트 이즈 원 오브 마이 페이버릿 파츠 오브 더 데이"
      }
    ]
  },
  {
    id: 3,
    word: "apartment",
    meaning: "아파트, 집",
    pronunciation: "어파트먼트",
    sentence: "I live in a small apartment near the subway station.",
    sentenceMeaning: "저는 지하철역 근처의 작은 아파트에 살아요.",
    sentencePronunciation: "아이 리브 인 어 스몰 어파트먼트 니어 더 서브웨이 스테이션",
    category: "집/동네",
    examples: [
      {
        sentence: "I live in a small apartment near the subway station.",
        meaning: "저는 지하철역 근처의 작은 아파트에 살아요.",
        pronunciation: "아이 리브 인 어 스몰 어파트먼트 니어 더 서브웨이 스테이션"
      },
      {
        sentence: "My apartment feels comfortable after a long day.",
        meaning: "제 아파트는 긴 하루 뒤에 편하게 느껴져요.",
        pronunciation: "마이 어파트먼트 필즈 컴포터블 애프터 어 롱 데이"
      },
      {
        sentence: "I spend a lot of time in my apartment.",
        meaning: "저는 제 아파트에서 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 인 마이 어파트먼트"
      }
    ]
  },
  {
    id: 4,
    word: "neighborhood",
    meaning: "동네, 근처 지역",
    pronunciation: "네이버후드",
    sentence: "My neighborhood is quiet and nice.",
    sentenceMeaning: "제 동네는 조용하고 좋아요.",
    sentencePronunciation: "마이 네이버후드 이즈 콰이어트 앤 나이스",
    category: "집/동네",
    examples: [
      {
        sentence: "My neighborhood is quiet and nice, and I still like it.",
        meaning: "제 동네는 조용하고 좋아요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 네이버후드 이즈 콰이어트 앤 나이스 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I walk around my neighborhood after dinner sometimes.",
        meaning: "저는 가끔 저녁 후에 동네를 걸어요.",
        pronunciation: "아이 워크 어라운드 마이 네이버후드 애프터 디너 섬타임즈"
      },
      {
        sentence: "My neighborhood feels safe and quiet at night.",
        meaning: "제 동네는 밤에 안전하고 조용하게 느껴져요.",
        pronunciation: "마이 네이버후드 필즈 세이프 앤 콰이어트 앳 나이트"
      }
    ]
  },
  {
    id: 5,
    word: "family",
    meaning: "가족",
    pronunciation: "패밀리",
    sentence: "I spend a lot of time with my family on weekends.",
    sentenceMeaning: "저는 주말에 가족과 많은 시간을 보내요.",
    sentencePronunciation: "아이 스펜드 어 랏 오브 타임 위드 마이 패밀리 온 위켄즈",
    category: "가족/친구",
    examples: [
      {
        sentence: "I spend a lot of time with my family on weekends.",
        meaning: "저는 주말에 가족과 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 위드 마이 패밀리 온 위켄즈"
      },
      {
        sentence: "I often spend time with my family on weekends.",
        meaning: "저는 주말에 제 가족과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 패밀리 온 위켄즈"
      },
      {
        sentence: "Time with my family makes my week feel better.",
        meaning: "제 가족과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 패밀리 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 6,
    word: "friend",
    meaning: "친구",
    pronunciation: "프렌드",
    sentence: "I often meet my close friend for dinner.",
    sentenceMeaning: "저는 자주 친한 친구를 만나서 저녁을 먹어요.",
    sentencePronunciation: "아이 오픈 밋 마이 클로스 프렌드 포 디너",
    category: "가족/친구",
    examples: [
      {
        sentence: "I often meet my close friend for dinner.",
        meaning: "저는 자주 친한 친구를 만나서 저녁을 먹어요.",
        pronunciation: "아이 오픈 밋 마이 클로스 프렌드 포 디너"
      },
      {
        sentence: "I often spend time with my friend on weekends.",
        meaning: "저는 주말에 제 친구와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 프렌드 온 위켄즈"
      },
      {
        sentence: "Time with my friend makes my week feel better.",
        meaning: "제 친구와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 프렌드 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 7,
    word: "coffee",
    meaning: "커피",
    pronunciation: "커피",
    sentence: "I drink coffee when I feel sleepy in the afternoon.",
    sentenceMeaning: "저는 오후에 졸릴 때 커피를 마셔요.",
    sentencePronunciation: "아이 드링크 커피 웬 아이 필 슬리피 인 디 애프터눈",
    category: "카페",
    examples: [
      {
        sentence: "I drink coffee when I feel sleepy in the afternoon.",
        meaning: "저는 오후에 졸릴 때 커피를 마셔요.",
        pronunciation: "아이 드링크 커피 웬 아이 필 슬리피 인 디 애프터눈"
      },
      {
        sentence: "I usually order coffee when I visit a cafe.",
        meaning: "저는 카페에 가면 보통 커피를 주문해요.",
        pronunciation: "아이 유주얼리 오더 커피 웬 아이 비지트 어 카페"
      },
      {
        sentence: "Coffee tastes better when I sit by the window.",
        meaning: "커피는 창가에 앉아 있으면 더 맛있게 느껴져요.",
        pronunciation: "커피 테이스트 베러 웬 아이 싯 바이 더 윈도우"
      }
    ]
  },
  {
    id: 8,
    word: "menu",
    meaning: "메뉴",
    pronunciation: "메뉴",
    sentence: "I look at the menu for a few minutes before I order.",
    sentenceMeaning: "저는 주문하기 전에 몇 분 동안 메뉴를 봐요.",
    sentencePronunciation: "아이 룩 앳 더 메뉴 포 어 퓨 미닛츠 비포 아이 오더",
    category: "카페",
    examples: [
      {
        sentence: "I look at the menu for a few minutes before I order.",
        meaning: "저는 주문하기 전에 몇 분 동안 메뉴를 봐요.",
        pronunciation: "아이 룩 앳 더 메뉴 포 어 퓨 미닛츠 비포 아이 오더"
      },
      {
        sentence: "I check the menu before I choose a drink.",
        meaning: "저는 음료를 고르기 전에 메뉴를 확인해요.",
        pronunciation: "아이 체크 더 메뉴 비포 아이 추즈 어 드링크"
      },
      {
        sentence: "A simple menu helps me order faster at cafes.",
        meaning: "간단한 메뉴는 카페에서 더 빨리 주문하게 도와줘요.",
        pronunciation: "어 심플 메뉴 헬프스 미 오더 패스터 앳 카페즈"
      }
    ]
  },
  {
    id: 9,
    word: "discount",
    meaning: "할인",
    pronunciation: "디스카운트",
    sentence: "I buy clothes when there is a big discount.",
    sentenceMeaning: "저는 큰 할인이 있을 때 옷을 사요.",
    sentencePronunciation: "아이 바이 클로즈 웬 데어 이즈 어 빅 디스카운트",
    category: "쇼핑",
    examples: [
      {
        sentence: "I buy clothes when there is a big discount.",
        meaning: "저는 큰 할인이 있을 때 옷을 사요.",
        pronunciation: "아이 바이 클로즈 웬 데어 이즈 어 빅 디스카운트"
      },
      {
        sentence: "I look for a discount when I buy clothes.",
        meaning: "저는 옷을 살 때 할인을 찾아봐요.",
        pronunciation: "아이 룩 포 어 디스카운트 웬 아이 바이 클로즈"
      },
      {
        sentence: "A good discount helps me save money easily.",
        meaning: "좋은 할인은 돈을 쉽게 아끼게 도와줘요.",
        pronunciation: "어 굿 디스카운트 헬프스 미 세이브 머니 이지리"
      }
    ]
  },
  {
    id: 10,
    word: "cashier",
    meaning: "계산원",
    pronunciation: "캐시어",
    sentence: "The cashier was very kind to me at the store.",
    sentenceMeaning: "가게에서 계산원이 저에게 매우 친절했어요.",
    sentencePronunciation: "더 캐시어 워즈 베리 카인드 투 미 앳 더 스토어",
    category: "쇼핑",
    examples: [
      {
        sentence: "The cashier was very kind to me at the store.",
        meaning: "가게에서 계산원이 저에게 매우 친절했어요.",
        pronunciation: "더 캐시어 워즈 베리 카인드 투 미 앳 더 스토어"
      },
      {
        sentence: "I talk to the cashier before I pay.",
        meaning: "저는 계산하기 전에 계산원과 잠깐 이야기해요.",
        pronunciation: "아이 톡 투 더 캐시어 비포 아이 페이"
      },
      {
        sentence: "A kind cashier makes shopping feel easier.",
        meaning: "친절한 계산원은 쇼핑을 더 편하게 느끼게 해줘요.",
        pronunciation: "어 카인드 캐시어 메익스 쇼핑 필 이지어"
      }
    ]
  },
  {
    id: 11,
    word: "movie",
    meaning: "영화",
    pronunciation: "무비",
    sentence: "I watched a funny movie with my sister last night.",
    sentenceMeaning: "저는 어젯밤에 여동생과 재미있는 영화를 봤어요.",
    sentencePronunciation: "아이 와치드 어 퍼니 무비 위드 마이 시스터 라스트 나이트",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I watched a funny movie with my sister last night.",
        meaning: "저는 어젯밤에 여동생과 재미있는 영화를 봤어요.",
        pronunciation: "아이 와치드 어 퍼니 무비 위드 마이 시스터 라스트 나이트"
      },
      {
        sentence: "I enjoy movie after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 영화를 즐겨요.",
        pronunciation: "아이 인조이 무비 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good movie helps me relax after a busy day.",
        meaning: "좋은 영화는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 무비 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 12,
    word: "actor",
    meaning: "배우",
    pronunciation: "액터",
    sentence: "My favorite actor is in many funny movies.",
    sentenceMeaning: "제가 좋아하는 배우는 재미있는 영화에 많이 나와요.",
    sentencePronunciation: "마이 페이버릿 액터 이즈 인 매니 퍼니 무비즈",
    category: "영화/드라마",
    examples: [
      {
        sentence: "My favorite actor is in many funny movies.",
        meaning: "제가 좋아하는 배우는 재미있는 영화에 많이 나와요.",
        pronunciation: "마이 페이버릿 액터 이즈 인 매니 퍼니 무비즈"
      },
      {
        sentence: "I like this actor because the acting feels natural.",
        meaning: "저는 이 배우를 연기가 자연스러워서 좋아해요.",
        pronunciation: "아이 라이크 디스 액터 비커즈 더 액팅 필즈 내추럴"
      },
      {
        sentence: "A good actor can change the whole story.",
        meaning: "좋은 배우는 이야기 전체를 바꿀 수 있어요.",
        pronunciation: "어 굿 액터 캔 체인지 더 홀 스토리"
      }
    ]
  },
  {
    id: 13,
    word: "trip",
    meaning: "여행",
    pronunciation: "트립",
    sentence: "I want to take a short trip during the holiday.",
    sentenceMeaning: "저는 휴일 동안 짧은 여행을 가고 싶어요.",
    sentencePronunciation: "아이 원트 투 테이크 어 쇼트 트립 듀링 더 할러데이",
    category: "여행",
    examples: [
      {
        sentence: "I want to take a short trip during the holiday.",
        meaning: "저는 휴일 동안 짧은 여행을 가고 싶어요.",
        pronunciation: "아이 원트 투 테이크 어 쇼트 트립 듀링 더 할러데이"
      },
      {
        sentence: "I plan a short trip when I need a break.",
        meaning: "저는 쉬고 싶을 때 짧은 여행을 계획해요.",
        pronunciation: "아이 플랜 어 쇼트 트립 웬 아이 니드 어 브레이크"
      },
      {
        sentence: "A short trip helps me feel fresh again.",
        meaning: "짧은 여행은 저를 다시 상쾌하게 느끼게 해줘요.",
        pronunciation: "어 쇼트 트립 헬프스 미 필 프레시 어게인"
      }
    ]
  },
  {
    id: 14,
    word: "hotel",
    meaning: "호텔",
    pronunciation: "호텔",
    sentence: "The hotel was clean and close to the beach.",
    sentenceMeaning: "그 호텔은 깨끗했고 해변과 가까웠어요.",
    sentencePronunciation: "더 호텔 워즈 클린 앤 클로스 투 더 비치",
    category: "여행",
    examples: [
      {
        sentence: "The hotel was clean and close to the beach.",
        meaning: "그 호텔은 깨끗했고 해변과 가까웠어요.",
        pronunciation: "더 호텔 워즈 클린 앤 클로스 투 더 비치"
      },
      {
        sentence: "I like the hotel because the view feels calm.",
        meaning: "저는 호텔을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 호텔 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the hotel when I travel.",
        meaning: "저는 여행할 때 호텔 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 호텔 웬 아이 트래블"
      }
    ]
  },
  {
    id: 15,
    word: "exercise",
    meaning: "운동",
    pronunciation: "엑서사이즈",
    sentence: "I do light exercise after work three times a week.",
    sentenceMeaning: "저는 일주일에 세 번 퇴근 후 가벼운 운동을 해요.",
    sentencePronunciation: "아이 두 라이트 엑서사이즈 애프터 워크 쓰리 타임즈 어 위크",
    category: "운동",
    examples: [
      {
        sentence: "I do light exercise after work three times a week.",
        meaning: "저는 일주일에 세 번 퇴근 후 가벼운 운동을 해요.",
        pronunciation: "아이 두 라이트 엑서사이즈 애프터 워크 쓰리 타임즈 어 위크"
      },
      {
        sentence: "I enjoy exercise after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 운동을 즐겨요.",
        pronunciation: "아이 인조이 엑서사이즈 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Exercise helps me feel lighter and more active.",
        meaning: "운동은 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "엑서사이즈 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 16,
    word: "gym",
    meaning: "헬스장",
    pronunciation: "짐",
    sentence: "I go to the gym to stay healthy.",
    sentenceMeaning: "저는 건강을 위해 헬스장에 가요.",
    sentencePronunciation: "아이 고 투 더 짐 투 스테이 헬시",
    category: "운동",
    examples: [
      {
        sentence: "I go to the gym to stay healthy.",
        meaning: "저는 건강을 위해 헬스장에 가요.",
        pronunciation: "아이 고 투 더 짐 투 스테이 헬시"
      },
      {
        sentence: "I go to the gym when I need more energy.",
        meaning: "저는 더 활력이 필요할 때 헬스장에 가요.",
        pronunciation: "아이 고 투 더 짐 웬 아이 니드 모어 에너지"
      },
      {
        sentence: "The gym feels less crowded in the morning.",
        meaning: "헬스장은 아침에 덜 붐비는 느낌이에요.",
        pronunciation: "더 짐 필즈 레스 크라우디드 인 더 모닝"
      }
    ]
  },
  {
    id: 17,
    word: "bus",
    meaning: "버스",
    pronunciation: "버스",
    sentence: "I take the bus to work when it rains.",
    sentenceMeaning: "저는 비가 오면 버스를 타고 출근해요.",
    sentencePronunciation: "아이 테이크 더 버스 투 워크 웬 잇 레인즈",
    category: "교통",
    examples: [
      {
        sentence: "I take the bus to work when it rains.",
        meaning: "저는 비가 오면 버스를 타고 출근해요.",
        pronunciation: "아이 테이크 더 버스 투 워크 웬 잇 레인즈"
      },
      {
        sentence: "I use the bus when I do not drive.",
        meaning: "저는 운전하지 않을 때 버스를 이용해요.",
        pronunciation: "아이 유즈 더 버스 웬 아이 두 낫 드라이브"
      },
      {
        sentence: "The bus is useful on busy weekday mornings.",
        meaning: "버스는 바쁜 평일 아침에 유용해요.",
        pronunciation: "더 버스 이즈 유스풀 온 비지 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 18,
    word: "subway",
    meaning: "지하철",
    pronunciation: "서브웨이",
    sentence: "The subway is fast and easy to use in my city.",
    sentenceMeaning: "제 도시에서는 지하철이 빠르고 이용하기 쉬워요.",
    sentencePronunciation: "더 서브웨이 이즈 패스트 앤 이지 투 유즈 인 마이 시티",
    category: "교통",
    examples: [
      {
        sentence: "The subway is fast and easy to use in my city.",
        meaning: "제 도시에서는 지하철이 빠르고 이용하기 쉬워요.",
        pronunciation: "더 서브웨이 이즈 패스트 앤 이지 투 유즈 인 마이 시티"
      },
      {
        sentence: "I use the subway when I do not drive.",
        meaning: "저는 운전하지 않을 때 지하철을 이용해요.",
        pronunciation: "아이 유즈 더 서브웨이 웬 아이 두 낫 드라이브"
      },
      {
        sentence: "The subway is useful on busy weekday mornings.",
        meaning: "지하철은 바쁜 평일 아침에 유용해요.",
        pronunciation: "더 서브웨이 이즈 유스풀 온 비지 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 19,
    word: "weather",
    meaning: "날씨",
    pronunciation: "웨더",
    sentence: "The weather is nice today, so I want to go outside.",
    sentenceMeaning: "오늘 날씨가 좋아서 밖에 나가고 싶어요.",
    sentencePronunciation: "더 웨더 이즈 나이스 투데이 소 아이 원트 투 고 아웃사이드",
    category: "날씨",
    examples: [
      {
        sentence: "The weather is nice today, so I want to go outside.",
        meaning: "오늘 날씨가 좋아서 밖에 나가고 싶어요.",
        pronunciation: "더 웨더 이즈 나이스 투데이 소 아이 원트 투 고 아웃사이드"
      },
      {
        sentence: "I check the weather before I leave home daily.",
        meaning: "저는 매일 집을 나가기 전에 날씨를 확인해요.",
        pronunciation: "아이 체크 더 웨더 비포 아이 리브 홈 데일리"
      },
      {
        sentence: "Good weather makes me want to walk outside.",
        meaning: "좋은 날씨는 밖에서 걷고 싶게 만들어요.",
        pronunciation: "굿 웨더 메익스 미 원트 투 워크 아웃사이드"
      }
    ]
  },
  {
    id: 20,
    word: "jacket",
    meaning: "재킷, 겉옷",
    pronunciation: "재킷",
    sentence: "I wear a light jacket in spring.",
    sentenceMeaning: "저는 봄에 가벼운 재킷을 입어요.",
    sentencePronunciation: "아이 웨어 어 라이트 재킷 인 스프링",
    category: "날씨",
    examples: [
      {
        sentence: "I wear a light jacket in spring.",
        meaning: "저는 봄에 가벼운 재킷을 입어요.",
        pronunciation: "아이 웨어 어 라이트 재킷 인 스프링"
      },
      {
        sentence: "I wear my jacket when the air feels cool.",
        meaning: "저는 공기가 서늘하게 느껴질 때 재킷을 입어요.",
        pronunciation: "아이 웨어 마이 재킷 웬 더 에어 필즈 쿨"
      },
      {
        sentence: "My jacket is light and easy to carry.",
        meaning: "제 재킷은 가볍고 들고 다니기 쉬워요.",
        pronunciation: "마이 재킷 이즈 라이트 앤 이지 투 캐리"
      }
    ]
  },
  {
    id: 21,
    word: "hobby",
    meaning: "취미",
    pronunciation: "하비",
    sentence: "My hobby is taking pictures of everyday life.",
    sentenceMeaning: "제 취미는 일상의 사진을 찍는 거예요.",
    sentencePronunciation: "마이 하비 이즈 테이킹 픽처즈 오브 에브리데이 라이프",
    category: "취미",
    examples: [
      {
        sentence: "My hobby is taking pictures of everyday life.",
        meaning: "제 취미는 일상의 사진을 찍는 거예요.",
        pronunciation: "마이 하비 이즈 테이킹 픽처즈 오브 에브리데이 라이프"
      },
      {
        sentence: "I enjoy hobby in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 취미를 즐겨요.",
        pronunciation: "아이 인조이 하비 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Hobby helps me relax and forget stress.",
        meaning: "취미는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "하비 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 22,
    word: "guitar",
    meaning: "기타",
    pronunciation: "기타",
    sentence: "I practice the guitar for a short time at night.",
    sentenceMeaning: "저는 밤에 잠깐 기타를 연습해요.",
    sentencePronunciation: "아이 프랙티스 더 기타 포 어 쇼트 타임 앳 나이트",
    category: "취미",
    examples: [
      {
        sentence: "I practice the guitar for a short time at night.",
        meaning: "저는 밤에 잠깐 기타를 연습해요.",
        pronunciation: "아이 프랙티스 더 기타 포 어 쇼트 타임 앳 나이트"
      },
      {
        sentence: "I practice guitar for a short time at night.",
        meaning: "저는 밤에 잠깐 기타를 연습해요.",
        pronunciation: "아이 프랙티스 기타 포 어 쇼트 타임 앳 나이트"
      },
      {
        sentence: "The guitar helps me enjoy quiet time at home.",
        meaning: "기타는 집에서 조용한 시간을 즐기게 해줘요.",
        pronunciation: "더 기타 헬프스 미 인조이 콰이어트 타임 앳 홈"
      }
    ]
  },
  {
    id: 23,
    word: "vacation",
    meaning: "휴가",
    pronunciation: "베이케이션",
    sentence: "I usually plan my vacation with my family.",
    sentenceMeaning: "저는 보통 가족과 함께 휴가 계획을 세워요.",
    sentencePronunciation: "아이 유주얼리 플랜 마이 베이케이션 위드 마이 패밀리",
    category: "휴가",
    examples: [
      {
        sentence: "I usually plan my vacation with my family.",
        meaning: "저는 보통 가족과 함께 휴가 계획을 세워요.",
        pronunciation: "아이 유주얼리 플랜 마이 베이케이션 위드 마이 패밀리"
      },
      {
        sentence: "I plan my vacation with my family every summer.",
        meaning: "저는 매년 여름 가족과 휴가를 계획해요.",
        pronunciation: "아이 플랜 마이 베이케이션 위드 마이 패밀리 에브리 서머"
      },
      {
        sentence: "A short vacation helps me relax after busy weeks.",
        meaning: "짧은 휴가는 바쁜 몇 주 뒤에 쉬게 해줘요.",
        pronunciation: "어 쇼트 베이케이션 헬프스 미 릴랙스 애프터 비지 위크스"
      }
    ]
  },
  {
    id: 24,
    word: "beach",
    meaning: "해변",
    pronunciation: "비치",
    sentence: "I like walking on the beach in the evening.",
    sentenceMeaning: "저는 저녁에 해변을 걷는 것을 좋아해요.",
    sentencePronunciation: "아이 라이크 워킹 온 더 비치 인 디 이브닝",
    category: "휴가",
    examples: [
      {
        sentence: "I like walking on the beach in the evening.",
        meaning: "저는 저녁에 해변을 걷는 것을 좋아해요.",
        pronunciation: "아이 라이크 워킹 온 더 비치 인 디 이브닝"
      },
      {
        sentence: "I enjoy the beach when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 해변을 즐겨요.",
        pronunciation: "아이 인조이 더 비치 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The beach makes my vacation feel more special.",
        meaning: "해변은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 비치 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 25,
    word: "doctor",
    meaning: "의사",
    pronunciation: "닥터",
    sentence: "I went to the doctor because I had a bad cold.",
    sentenceMeaning: "저는 심한 감기에 걸려서 병원에 갔어요.",
    sentencePronunciation: "아이 웬트 투 더 닥터 비커즈 아이 해드 어 배드 콜드",
    category: "건강",
    examples: [
      {
        sentence: "I went to the doctor because I had a bad cold.",
        meaning: "저는 심한 감기에 걸려서 병원에 갔어요.",
        pronunciation: "아이 웬트 투 더 닥터 비커즈 아이 해드 어 배드 콜드"
      },
      {
        sentence: "I visit the doctor when I do not feel well.",
        meaning: "저는 몸이 좋지 않을 때 의사를 찾아가요.",
        pronunciation: "아이 비지트 더 닥터 웬 아이 두 낫 필 웰"
      },
      {
        sentence: "A good doctor explains things in a simple way.",
        meaning: "좋은 의사는 쉽게 설명해 줘요.",
        pronunciation: "어 굿 닥터 익스플레인즈 띵즈 인 어 심플 웨이"
      }
    ]
  },
  {
    id: 26,
    word: "medicine",
    meaning: "약",
    pronunciation: "메디슨",
    sentence: "I took some medicine and got better the next day.",
    sentenceMeaning: "저는 약을 먹고 다음 날 좋아졌어요.",
    sentencePronunciation: "아이 툭 섬 메디슨 앤 갓 베러 더 넥스트 데이",
    category: "건강",
    examples: [
      {
        sentence: "I took some medicine and got better the next day.",
        meaning: "저는 약을 먹고 다음 날 좋아졌어요.",
        pronunciation: "아이 툭 섬 메디슨 앤 갓 베러 더 넥스트 데이"
      },
      {
        sentence: "I take medicine after meals when I feel sick.",
        meaning: "저는 아플 때 식사 후에 약을 먹어요.",
        pronunciation: "아이 테이크 메디슨 애프터 밀즈 웬 아이 필 식"
      },
      {
        sentence: "Good medicine helps me feel better quickly.",
        meaning: "좋은 약은 빨리 나아지게 도와줘요.",
        pronunciation: "굿 메디슨 헬프스 미 필 베러 퀵클리"
      }
    ]
  },
  {
    id: 27,
    word: "kitchen",
    meaning: "주방",
    pronunciation: "키친",
    sentence: "The kitchen in my house is small but comfortable.",
    sentenceMeaning: "우리 집 주방은 작지만 편안해요.",
    sentencePronunciation: "더 키친 인 마이 하우스 이즈 스몰 벗 컴포터블",
    category: "집/동네",
    examples: [
      {
        sentence: "The kitchen in my house is small but comfortable.",
        meaning: "우리 집 주방은 작지만 편안해요.",
        pronunciation: "더 키친 인 마이 하우스 이즈 스몰 벗 컴포터블"
      },
      {
        sentence: "I spend time in the kitchen when I cook.",
        meaning: "저는 요리할 때 주방에서 시간을 보내요.",
        pronunciation: "아이 스펜드 타임 인 더 키친 웬 아이 쿡"
      },
      {
        sentence: "My kitchen stays clean and simple every day.",
        meaning: "제 주방은 매일 깔끔하고 단순하게 유지돼요.",
        pronunciation: "마이 키친 스테이즈 클린 앤 심플 에브리 데이"
      }
    ]
  },
  {
    id: 28,
    word: "dinner",
    meaning: "저녁 식사",
    pronunciation: "디너",
    sentence: "I usually have dinner with my family at home.",
    sentenceMeaning: "저는 보통 집에서 가족과 저녁을 먹어요.",
    sentencePronunciation: "아이 유주얼리 해브 디너 위드 마이 패밀리 앳 홈",
    category: "음식",
    examples: [
      {
        sentence: "I usually have dinner with my family at home.",
        meaning: "저는 보통 집에서 가족과 저녁을 먹어요.",
        pronunciation: "아이 유주얼리 해브 디너 위드 마이 패밀리 앳 홈"
      },
      {
        sentence: "I usually have dinner at home with my family.",
        meaning: "저는 보통 가족과 집에서 저녁 식사를 먹어요.",
        pronunciation: "아이 유주얼리 해브 디너 앳 홈 위드 마이 패밀리"
      },
      {
        sentence: "Dinner is one of my favorite parts of the day.",
        meaning: "저녁 식사는 제가 하루 중 좋아하는 시간 중 하나예요.",
        pronunciation: "디너 이즈 원 오브 마이 페이버릿 파츠 오브 더 데이"
      }
    ]
  },
  {
    id: 29,
    word: "traffic",
    meaning: "교통 상황, 차량 흐름",
    pronunciation: "트래픽",
    sentence: "There is heavy traffic near my house in the morning.",
    sentenceMeaning: "아침에는 우리 집 근처에 교통 체증이 심해요.",
    sentencePronunciation: "데어 이즈 헤비 트래픽 니어 마이 하우스 인 더 모닝",
    category: "교통",
    examples: [
      {
        sentence: "There is heavy traffic near my house in the morning.",
        meaning: "아침에는 우리 집 근처에 교통 체증이 심해요.",
        pronunciation: "데어 이즈 헤비 트래픽 니어 마이 하우스 인 더 모닝"
      },
      {
        sentence: "Heavy traffic makes my trip home much longer.",
        meaning: "심한 교통 체증은 집에 가는 시간을 더 길게 만들어요.",
        pronunciation: "헤비 트래픽 메익스 마이 트립 홈 머치 롱거"
      },
      {
        sentence: "I check traffic before I leave the office.",
        meaning: "저는 사무실을 나가기 전에 교통 상황을 확인해요.",
        pronunciation: "아이 체크 트래픽 비포 아이 리브 더 오피스"
      }
    ]
  },
  {
    id: 30,
    word: "weekend",
    meaning: "주말",
    pronunciation: "위켄드",
    sentence: "I like to rest at home and watch videos on the weekend.",
    sentenceMeaning: "저는 주말에 집에서 쉬고 영상을 보는 것을 좋아해요.",
    sentencePronunciation: "아이 라이크 투 레스트 앳 홈 앤 와치 비디오즈 온 더 위켄드",
    category: "자기소개",
    examples: [
      {
        sentence: "I like to rest at home and watch videos on the weekend.",
        meaning: "저는 주말에 집에서 쉬고 영상을 보는 것을 좋아해요.",
        pronunciation: "아이 라이크 투 레스트 앳 홈 앤 와치 비디오즈 온 더 위켄드"
      },
      {
        sentence: "My weekend feels better when I rest at home.",
        meaning: "저는 집에서 쉬면 주말이 더 좋게 느껴져요.",
        pronunciation: "마이 위켄드 필즈 베러 웬 아이 레스트 앳 홈"
      },
      {
        sentence: "I keep my weekend simple after a busy week.",
        meaning: "저는 바쁜 한 주 뒤에 주말을 단순하게 보내요.",
        pronunciation: "아이 킵 마이 위켄드 심플 애프터 어 비지 위크"
      }
    ]
  },
  {
    id: 31,
    word: "name",
    meaning: "이름",
    pronunciation: "네임",
    sentence: "I tell people my name first.",
    sentenceMeaning: "저는 먼저 제 이름을 말해요.",
    sentencePronunciation: "아이 텔 피플 마이 네임 퍼스트",
    category: "자기소개",
    examples: [
      {
        sentence: "I tell people my name first, and I still do that.",
        meaning: "저는 먼저 제 이름을 말해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 텔 피플 마이 네임 퍼스트 앤 아이 스틸 두 댓"
      },
      {
        sentence: "My name is easy for most people to remember.",
        meaning: "제 이름은 대부분의 사람들이 기억하기 쉬워요.",
        pronunciation: "마이 네임 이즈 이지 포 모스트 피플 투 리멤버"
      },
      {
        sentence: "I say my name clearly when I meet someone new.",
        meaning: "저는 새로운 사람을 만나면 이름을 또렷하게 말해요.",
        pronunciation: "아이 세이 마이 네임 클리얼리 웬 아이 밋 썸원 뉴"
      }
    ]
  },
  {
    id: 32,
    word: "age",
    meaning: "나이",
    pronunciation: "에이지",
    sentence: "I do not talk about my age much.",
    sentenceMeaning: "저는 제 나이를 많이 말하지 않아요.",
    sentencePronunciation: "아이 두 낫 톡 어바웃 마이 에이지 머치",
    category: "자기소개",
    examples: [
      {
        sentence: "I do not talk about my age much.",
        meaning: "저는 제 나이를 많이 말하지 않아요.",
        pronunciation: "아이 두 낫 톡 어바웃 마이 에이지 머치"
      },
      {
        sentence: "My age does not change how I live daily.",
        meaning: "제 나이는 매일 사는 방식에 큰 영향을 주지 않아요.",
        pronunciation: "마이 에이지 더즈 낫 체인지 하우 아이 리브 데일리"
      },
      {
        sentence: "I answer my age in a simple and direct way.",
        meaning: "저는 나이를 간단하고 바로 말해요.",
        pronunciation: "아이 앤서 마이 에이지 인 어 심플 앤 다이렉트 웨이"
      }
    ]
  },
  {
    id: 33,
    word: "hometown",
    meaning: "고향",
    pronunciation: "홈타운",
    sentence: "My hometown is a quiet city.",
    sentenceMeaning: "제 고향은 조용한 도시예요.",
    sentencePronunciation: "마이 홈타운 이즈 어 콰이어트 시티",
    category: "자기소개",
    examples: [
      {
        sentence: "My hometown is a quiet city, and I still like it.",
        meaning: "제 고향은 조용한 도시예요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 홈타운 이즈 어 콰이어트 시티 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I visit my hometown when I need a short break.",
        meaning: "저는 잠깐 쉬고 싶을 때 고향에 가요.",
        pronunciation: "아이 비지트 마이 홈타운 웬 아이 니드 어 쇼트 브레이크"
      },
      {
        sentence: "My hometown feels calm and familiar to me.",
        meaning: "제 고향은 저에게 차분하고 익숙하게 느껴져요.",
        pronunciation: "마이 홈타운 필즈 캄 앤 퍼밀리어 투 미"
      }
    ]
  },
  {
    id: 34,
    word: "birthday",
    meaning: "생일",
    pronunciation: "벌스데이",
    sentence: "My birthday is in May.",
    sentenceMeaning: "제 생일은 5월이에요.",
    sentencePronunciation: "마이 벌스데이 이즈 인 메이",
    category: "자기소개",
    examples: [
      {
        sentence: "My birthday is in May, and I still like it.",
        meaning: "제 생일은 5월이에요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 벌스데이 이즈 인 메이 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My birthday usually feels calm and simple now.",
        meaning: "제 생일은 요즘 보통 차분하고 단순하게 느껴져요.",
        pronunciation: "마이 벌스데이 유주얼리 필즈 캄 앤 심플 나우"
      },
      {
        sentence: "I spend my birthday with family or close friends.",
        meaning: "저는 생일을 가족이나 가까운 친구들과 보내요.",
        pronunciation: "아이 스펜드 마이 벌스데이 위드 패밀리 오어 클로즈 프렌즈"
      }
    ]
  },
  {
    id: 35,
    word: "job",
    meaning: "직업, 일",
    pronunciation: "잡",
    sentence: "I like talking about my job in English.",
    sentenceMeaning: "저는 제 일을 영어로 말하는 것을 좋아해요.",
    sentencePronunciation: "아이 라이크 토킹 어바웃 마이 잡 인 잉글리시",
    category: "자기소개",
    examples: [
      {
        sentence: "I like talking about my job in English.",
        meaning: "저는 제 일을 영어로 말하는 것을 좋아해요.",
        pronunciation: "아이 라이크 토킹 어바웃 마이 잡 인 잉글리시"
      },
      {
        sentence: "My job keeps me busy on most weekdays.",
        meaning: "제 일은 대부분의 평일에 저를 바쁘게 해요.",
        pronunciation: "마이 잡 킵스 미 비지 온 모스트 위크데이즈"
      },
      {
        sentence: "I try to do my job in a calm way.",
        meaning: "저는 일을 차분하게 하려고 해요.",
        pronunciation: "아이 트라이 투 두 마이 잡 인 어 캄 웨이"
      }
    ]
  },
  {
    id: 36,
    word: "company",
    meaning: "회사",
    pronunciation: "컴퍼니",
    sentence: "My company is close to my house.",
    sentenceMeaning: "제 회사는 집에서 가까워요.",
    sentencePronunciation: "마이 컴퍼니 이즈 클로스 투 마이 하우스",
    category: "자기소개",
    examples: [
      {
        sentence: "My company is close to my house.",
        meaning: "제 회사는 집에서 가까워요.",
        pronunciation: "마이 컴퍼니 이즈 클로스 투 마이 하우스"
      },
      {
        sentence: "My company is not far from my home.",
        meaning: "제 회사는 집에서 멀지 않아요.",
        pronunciation: "마이 컴퍼니 이즈 낫 파 프럼 마이 홈"
      },
      {
        sentence: "I feel comfortable with people at my company.",
        meaning: "저는 회사 사람들과 있을 때 편하게 느껴요.",
        pronunciation: "아이 필 컴포터블 위드 피플 앳 마이 컴퍼니"
      }
    ]
  },
  {
    id: 37,
    word: "office",
    meaning: "사무실",
    pronunciation: "오피스",
    sentence: "My office is not far from the station.",
    sentenceMeaning: "제 사무실은 역에서 멀지 않아요.",
    sentencePronunciation: "마이 오피스 이즈 낫 파 프럼 더 스테이션",
    category: "자기소개",
    examples: [
      {
        sentence: "My office is not far from the station.",
        meaning: "제 사무실은 역에서 멀지 않아요.",
        pronunciation: "마이 오피스 이즈 낫 파 프럼 더 스테이션"
      },
      {
        sentence: "My office gets quiet after most people leave.",
        meaning: "제 사무실은 대부분 사람들이 가고 나면 조용해져요.",
        pronunciation: "마이 오피스 겟츠 콰이어트 애프터 모스트 피플 리브"
      },
      {
        sentence: "I spend a lot of time in the office.",
        meaning: "저는 사무실에서 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 인 더 오피스"
      }
    ]
  },
  {
    id: 38,
    word: "student",
    meaning: "학생",
    pronunciation: "스튜던트",
    sentence: "I was a busy student in college.",
    sentenceMeaning: "저는 대학 때 바쁜 학생이었어요.",
    sentencePronunciation: "아이 워즈 어 비지 스튜던트 인 칼리지",
    category: "자기소개",
    examples: [
      {
        sentence: "I was a busy student in college.",
        meaning: "저는 대학 때 바쁜 학생이었어요.",
        pronunciation: "아이 워즈 어 비지 스튜던트 인 칼리지"
      },
      {
        sentence: "I am a student and I study every day.",
        meaning: "저는 학생이고 매일 공부해요.",
        pronunciation: "아이 앰 어 스튜던트 앤 아이 스터디 에브리 데이"
      },
      {
        sentence: "Being a student keeps my schedule quite regular.",
        meaning: "학생으로 지내는 것은 제 일정을 꽤 규칙적으로 만들어 줘요.",
        pronunciation: "비잉 어 스튜던트 킵스 마이 스케줄 콰이트 레귤러"
      }
    ]
  },
  {
    id: 39,
    word: "major",
    meaning: "전공",
    pronunciation: "메이저",
    sentence: "My major was business.",
    sentenceMeaning: "제 전공은 경영학이었어요.",
    sentencePronunciation: "마이 메이저 워즈 비즈니스",
    category: "자기소개",
    examples: [
      {
        sentence: "My major was business, and I still like it.",
        meaning: "제 전공은 경영학이었어요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 메이저 워즈 비즈니스 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My major helps me understand my classes better.",
        meaning: "제 전공은 수업을 더 잘 이해하게 도와줘요.",
        pronunciation: "마이 메이저 헬프스 미 언더스탠드 마이 클래시즈 베러"
      },
      {
        sentence: "I still talk about my major with close friends.",
        meaning: "저는 아직도 가까운 친구들과 전공 이야기를 해요.",
        pronunciation: "아이 스틸 톡 어바웃 마이 메이저 위드 클로즈 프렌즈"
      }
    ]
  },
  {
    id: 40,
    word: "class",
    meaning: "수업, 반",
    pronunciation: "클래스",
    sentence: "I enjoyed my English class in school.",
    sentenceMeaning: "저는 학교에서 영어 수업을 즐겼어요.",
    sentencePronunciation: "아이 인조이드 마이 잉글리시 클래스 인 스쿨",
    category: "자기소개",
    examples: [
      {
        sentence: "I enjoyed my English class in school.",
        meaning: "저는 학교에서 영어 수업을 즐겼어요.",
        pronunciation: "아이 인조이드 마이 잉글리시 클래스 인 스쿨"
      },
      {
        sentence: "I go to class with a notebook and pen.",
        meaning: "저는 노트와 펜을 가지고 수업에 가요.",
        pronunciation: "아이 고 투 클래스 위드 어 노트북 앤 펜"
      },
      {
        sentence: "My class feels better when the topic is clear.",
        meaning: "주제가 분명하면 수업이 더 좋게 느껴져요.",
        pronunciation: "마이 클래스 필즈 베러 웬 더 토픽 이즈 클리어"
      }
    ]
  },
  {
    id: 41,
    word: "dream",
    meaning: "꿈",
    pronunciation: "드림",
    sentence: "My dream is to travel more.",
    sentenceMeaning: "제 꿈은 더 많이 여행하는 거예요.",
    sentencePronunciation: "마이 드림 이즈 투 트래블 모어",
    category: "자기소개",
    examples: [
      {
        sentence: "My dream is to travel more, and I still like it.",
        meaning: "제 꿈은 더 많이 여행하는 거예요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 드림 이즈 투 트래블 모어 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My dream feels clearer when I write it down.",
        meaning: "제 꿈은 적어 두면 더 분명해져요.",
        pronunciation: "마이 드림 필즈 클리어러 웬 아이 라이트 잇 다운"
      },
      {
        sentence: "I think about my dream during quiet weekends.",
        meaning: "저는 조용한 주말에 제 꿈을 생각해요.",
        pronunciation: "아이 씽크 어바웃 마이 드림 듀링 콰이어트 위켄즈"
      }
    ]
  },
  {
    id: 42,
    word: "goal",
    meaning: "목표",
    pronunciation: "골",
    sentence: "My goal is to speak English better.",
    sentenceMeaning: "제 목표는 영어를 더 잘 말하는 거예요.",
    sentencePronunciation: "마이 골 이즈 투 스피크 잉글리시 베터",
    category: "자기소개",
    examples: [
      {
        sentence: "My goal is to speak English better.",
        meaning: "제 목표는 영어를 더 잘 말하는 거예요.",
        pronunciation: "마이 골 이즈 투 스피크 잉글리시 베터"
      },
      {
        sentence: "My goal feels clearer when I write it down.",
        meaning: "제 목표는 적어 두면 더 분명해져요.",
        pronunciation: "마이 골 필즈 클리어러 웬 아이 라이트 잇 다운"
      },
      {
        sentence: "I think about my goal during quiet weekends.",
        meaning: "저는 조용한 주말에 제 목표를 생각해요.",
        pronunciation: "아이 씽크 어바웃 마이 골 듀링 콰이어트 위켄즈"
      }
    ]
  },
  {
    id: 43,
    word: "plan",
    meaning: "계획",
    pronunciation: "플랜",
    sentence: "I have a simple plan for this year.",
    sentenceMeaning: "저는 올해를 위한 간단한 계획이 있어요.",
    sentencePronunciation: "아이 해브 어 심플 플랜 포 디스 이어",
    category: "자기소개",
    examples: [
      {
        sentence: "I have a simple plan for this year.",
        meaning: "저는 올해를 위한 간단한 계획이 있어요.",
        pronunciation: "아이 해브 어 심플 플랜 포 디스 이어"
      },
      {
        sentence: "My plan feels clearer when I write it down.",
        meaning: "제 계획은 적어 두면 더 분명해져요.",
        pronunciation: "마이 플랜 필즈 클리어러 웬 아이 라이트 잇 다운"
      },
      {
        sentence: "I think about my plan during quiet weekends.",
        meaning: "저는 조용한 주말에 제 계획을 생각해요.",
        pronunciation: "아이 씽크 어바웃 마이 플랜 듀링 콰이어트 위켄즈"
      }
    ]
  },
  {
    id: 44,
    word: "personality",
    meaning: "성격",
    pronunciation: "퍼스낼러티",
    sentence: "My personality is calm and friendly.",
    sentenceMeaning: "제 성격은 차분하고 친근해요.",
    sentencePronunciation: "마이 퍼스낼러티 이즈 캄 앤 프렌들리",
    category: "자기소개",
    examples: [
      {
        sentence: "My personality is calm and friendly, and I still like it.",
        meaning: "제 성격은 차분하고 친근해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 퍼스낼러티 이즈 캄 앤 프렌들리 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My personality is calm when I meet new people.",
        meaning: "제 성격은 새로운 사람을 만날 때 차분한 편이에요.",
        pronunciation: "마이 퍼스낼러티 이즈 캄 웬 아이 밋 뉴 피플"
      },
      {
        sentence: "My personality helps me work well with others.",
        meaning: "제 성격은 다른 사람들과 잘 일하게 도와줘요.",
        pronunciation: "마이 퍼스낼러티 헬프스 미 워크 웰 위드 어더즈"
      }
    ]
  },
  {
    id: 45,
    word: "nickname",
    meaning: "별명",
    pronunciation: "닉네임",
    sentence: "My nickname is easy to remember.",
    sentenceMeaning: "제 별명은 기억하기 쉬워요.",
    sentencePronunciation: "마이 닉네임 이즈 이지 투 리멤버",
    category: "자기소개",
    examples: [
      {
        sentence: "My nickname is easy to remember, and I still like it.",
        meaning: "제 별명은 기억하기 쉬워요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 닉네임 이즈 이지 투 리멤버 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My nickname is short and easy to remember.",
        meaning: "제 별명은 짧고 기억하기 쉬워요.",
        pronunciation: "마이 닉네임 이즈 쇼트 앤 이지 투 리멤버"
      },
      {
        sentence: "Close friends still use my nickname sometimes.",
        meaning: "가까운 친구들은 가끔 제 별명을 아직도 써요.",
        pronunciation: "클로즈 프렌즈 스틸 유즈 마이 닉네임 섬타임즈"
      }
    ]
  },
  {
    id: 46,
    word: "address",
    meaning: "주소",
    pronunciation: "어드레스",
    sentence: "My address is easy to find.",
    sentenceMeaning: "제 주소는 찾기 쉬워요.",
    sentencePronunciation: "마이 어드레스 이즈 이지 투 파인드",
    category: "자기소개",
    examples: [
      {
        sentence: "My address is easy to find, and I still like it.",
        meaning: "제 주소는 찾기 쉬워요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 어드레스 이즈 이지 투 파인드 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My address is not far from my office.",
        meaning: "제 주소는 회사에서 멀지 않아요.",
        pronunciation: "마이 어드레스 이즈 낫 파 프럼 마이 오피스"
      },
      {
        sentence: "I write my address clearly on delivery forms.",
        meaning: "저는 배송 서류에 주소를 또렷하게 적어요.",
        pronunciation: "아이 라이트 마이 어드레스 클리얼리 온 딜리버리 폼즈"
      }
    ]
  },
  {
    id: 47,
    word: "married",
    meaning: "결혼한",
    pronunciation: "메리드",
    sentence: "I am married and live with my spouse.",
    sentenceMeaning: "저는 결혼했고 배우자와 살아요.",
    sentencePronunciation: "아이 앰 메리드 앤 리브 위드 마이 스파우스",
    category: "자기소개",
    examples: [
      {
        sentence: "I am married and live with my spouse.",
        meaning: "저는 결혼했고 배우자와 살아요.",
        pronunciation: "아이 앰 메리드 앤 리브 위드 마이 스파우스"
      },
      {
        sentence: "I answer that I am married in a simple way.",
        meaning: "저는 제가 결혼한라고 간단하게 말해요.",
        pronunciation: "아이 앤서 댓 아이 앰 메리드 인 어 심플 웨이"
      },
      {
        sentence: "Being married changes how I plan my weekends.",
        meaning: "결혼한인 것은 주말 계획을 세우는 방식에 영향을 줘요.",
        pronunciation: "비잉 메리드 체인지즈 하우 아이 플랜 마이 위켄즈"
      }
    ]
  },
  {
    id: 48,
    word: "single",
    meaning: "싱글, 미혼",
    pronunciation: "싱글",
    sentence: "I am single and enjoy my free time.",
    sentenceMeaning: "저는 싱글이고 자유 시간을 즐겨요.",
    sentencePronunciation: "아이 앰 싱글 앤 인조이 마이 프리 타임",
    category: "자기소개",
    examples: [
      {
        sentence: "I am single and enjoy my free time.",
        meaning: "저는 싱글이고 자유 시간을 즐겨요.",
        pronunciation: "아이 앰 싱글 앤 인조이 마이 프리 타임"
      },
      {
        sentence: "I answer that I am single in a simple way.",
        meaning: "저는 제가 싱글라고 간단하게 말해요.",
        pronunciation: "아이 앤서 댓 아이 앰 싱글 인 어 심플 웨이"
      },
      {
        sentence: "Being single changes how I plan my weekends.",
        meaning: "싱글인 것은 주말 계획을 세우는 방식에 영향을 줘요.",
        pronunciation: "비잉 싱글 체인지즈 하우 아이 플랜 마이 위켄즈"
      }
    ]
  },
  {
    id: 49,
    word: "career",
    meaning: "경력, 커리어",
    pronunciation: "커리어",
    sentence: "My career started at a small company.",
    sentenceMeaning: "제 커리어는 작은 회사에서 시작됐어요.",
    sentencePronunciation: "마이 커리어 스타티드 앳 어 스몰 컴퍼니",
    category: "자기소개",
    examples: [
      {
        sentence: "My career started at a small company.",
        meaning: "제 커리어는 작은 회사에서 시작됐어요.",
        pronunciation: "마이 커리어 스타티드 앳 어 스몰 컴퍼니"
      },
      {
        sentence: "My career grows slowly with steady daily work.",
        meaning: "제 경력은 꾸준한 일로 천천히 쌓여 가요.",
        pronunciation: "마이 커리어 그로우즈 슬로울리 위드 스테디 데일리 워크"
      },
      {
        sentence: "I think about my career when I make plans.",
        meaning: "저는 계획을 세울 때 제 경력을 생각해요.",
        pronunciation: "아이 씽크 어바웃 마이 커리어 웬 아이 메이크 플랜즈"
      }
    ]
  },
  {
    id: 50,
    word: "parents",
    meaning: "부모님",
    pronunciation: "페어런츠",
    sentence: "I visit my parents on weekends.",
    sentenceMeaning: "저는 주말마다 부모님을 뵈어요.",
    sentencePronunciation: "아이 비지트 마이 페어런츠 온 위켄즈",
    category: "가족/친구",
    examples: [
      {
        sentence: "I visit my parents on weekends, and I still do that.",
        meaning: "저는 주말마다 부모님을 뵈어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 비지트 마이 페어런츠 온 위켄즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my parents on weekends.",
        meaning: "저는 주말에 제 부모님과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 페어런츠 온 위켄즈"
      },
      {
        sentence: "Time with my parents makes my week feel better.",
        meaning: "제 부모님과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 페어런츠 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 51,
    word: "mother",
    meaning: "어머니",
    pronunciation: "마더",
    sentence: "I often cook with my mother.",
    sentenceMeaning: "저는 자주 어머니와 요리해요.",
    sentencePronunciation: "아이 오픈 쿡 위드 마이 마더",
    category: "가족/친구",
    examples: [
      {
        sentence: "I often cook with my mother, and I still do that.",
        meaning: "저는 자주 어머니와 요리해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 오픈 쿡 위드 마이 마더 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my mother on weekends.",
        meaning: "저는 주말에 제 어머니와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 마더 온 위켄즈"
      },
      {
        sentence: "Time with my mother makes my week feel better.",
        meaning: "제 어머니와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 마더 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 52,
    word: "father",
    meaning: "아버지",
    pronunciation: "파더",
    sentence: "I talk with my father after dinner.",
    sentenceMeaning: "저는 저녁 후에 아버지와 이야기해요.",
    sentencePronunciation: "아이 톡 위드 마이 파더 애프터 디너",
    category: "가족/친구",
    examples: [
      {
        sentence: "I talk with my father after dinner.",
        meaning: "저는 저녁 후에 아버지와 이야기해요.",
        pronunciation: "아이 톡 위드 마이 파더 애프터 디너"
      },
      {
        sentence: "I often spend time with my father on weekends.",
        meaning: "저는 주말에 제 아버지와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 파더 온 위켄즈"
      },
      {
        sentence: "Time with my father makes my week feel better.",
        meaning: "제 아버지와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 파더 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 53,
    word: "brother",
    meaning: "형제, 남자 형제",
    pronunciation: "브라더",
    sentence: "I watch movies with my brother.",
    sentenceMeaning: "저는 형제와 영화를 봐요.",
    sentencePronunciation: "아이 와치 무비즈 위드 마이 브라더",
    category: "가족/친구",
    examples: [
      {
        sentence: "I watch movies with my brother, and I still do that.",
        meaning: "저는 형제와 영화를 봐요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 와치 무비즈 위드 마이 브라더 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my brother on weekends.",
        meaning: "저는 주말에 제 형제와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 브라더 온 위켄즈"
      },
      {
        sentence: "Time with my brother makes my week feel better.",
        meaning: "제 형제와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 브라더 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 54,
    word: "sister",
    meaning: "자매, 여자 형제",
    pronunciation: "시스터",
    sentence: "I usually shop with my sister.",
    sentenceMeaning: "저는 보통 자매와 쇼핑해요.",
    sentencePronunciation: "아이 유주얼리 샵 위드 마이 시스터",
    category: "가족/친구",
    examples: [
      {
        sentence: "I usually shop with my sister, and I still do that.",
        meaning: "저는 보통 자매와 쇼핑해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 유주얼리 샵 위드 마이 시스터 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my sister on weekends.",
        meaning: "저는 주말에 제 자매와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 시스터 온 위켄즈"
      },
      {
        sentence: "Time with my sister makes my week feel better.",
        meaning: "제 자매와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 시스터 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 55,
    word: "cousin",
    meaning: "사촌",
    pronunciation: "커즌",
    sentence: "I met my cousin last month.",
    sentenceMeaning: "저는 지난달에 사촌을 만났어요.",
    sentencePronunciation: "아이 멧 마이 커즌 라스트 먼스",
    category: "가족/친구",
    examples: [
      {
        sentence: "I met my cousin last month, and I still do that.",
        meaning: "저는 지난달에 사촌을 만났어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 멧 마이 커즌 라스트 먼스 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my cousin on weekends.",
        meaning: "저는 주말에 제 사촌과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 커즌 온 위켄즈"
      },
      {
        sentence: "Time with my cousin makes my week feel better.",
        meaning: "제 사촌과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 커즌 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 56,
    word: "uncle",
    meaning: "삼촌, 외삼촌",
    pronunciation: "엉클",
    sentence: "I sometimes call my uncle on holidays.",
    sentenceMeaning: "저는 휴일에 가끔 삼촌께 전화해요.",
    sentencePronunciation: "아이 섬타임즈 콜 마이 엉클 온 할러데이즈",
    category: "가족/친구",
    examples: [
      {
        sentence: "I sometimes call my uncle on holidays.",
        meaning: "저는 휴일에 가끔 삼촌께 전화해요.",
        pronunciation: "아이 섬타임즈 콜 마이 엉클 온 할러데이즈"
      },
      {
        sentence: "I often spend time with my uncle on weekends.",
        meaning: "저는 주말에 제 삼촌과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 엉클 온 위켄즈"
      },
      {
        sentence: "Time with my uncle makes my week feel better.",
        meaning: "제 삼촌과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 엉클 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 57,
    word: "aunt",
    meaning: "이모, 고모, 숙모",
    pronunciation: "앤트",
    sentence: "My aunt makes delicious food.",
    sentenceMeaning: "우리 이모는 맛있는 음식을 만들어요.",
    sentencePronunciation: "마이 앤트 메익스 딜리셔스 푸드",
    category: "가족/친구",
    examples: [
      {
        sentence: "My aunt makes delicious food, and I still like it.",
        meaning: "우리 이모는 맛있는 음식을 만들어요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 앤트 메익스 딜리셔스 푸드 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I often spend time with my aunt on weekends.",
        meaning: "저는 주말에 제 이모와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 앤트 온 위켄즈"
      },
      {
        sentence: "Time with my aunt makes my week feel better.",
        meaning: "제 이모와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 앤트 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 58,
    word: "grandparents",
    meaning: "조부모님",
    pronunciation: "그랜드페어런츠",
    sentence: "I miss my grandparents a lot.",
    sentenceMeaning: "저는 조부모님이 많이 보고 싶어요.",
    sentencePronunciation: "아이 미스 마이 그랜드페어런츠 어 랏",
    category: "가족/친구",
    examples: [
      {
        sentence: "I miss my grandparents a lot, and I still do that.",
        meaning: "저는 조부모님이 많이 보고 싶어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 미스 마이 그랜드페어런츠 어 랏 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my grandparents on weekends.",
        meaning: "저는 주말에 제 조부모님과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 그랜드페어런츠 온 위켄즈"
      },
      {
        sentence: "Time with my grandparents makes my week feel better.",
        meaning: "제 조부모님과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 그랜드페어런츠 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 59,
    word: "husband",
    meaning: "남편",
    pronunciation: "허즈번드",
    sentence: "I drink coffee with my husband.",
    sentenceMeaning: "저는 남편과 커피를 마셔요.",
    sentencePronunciation: "아이 드링크 커피 위드 마이 허즈번드",
    category: "가족/친구",
    examples: [
      {
        sentence: "I drink coffee with my husband, and I still do that.",
        meaning: "저는 남편과 커피를 마셔요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 드링크 커피 위드 마이 허즈번드 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often spend time with my husband on weekends.",
        meaning: "저는 주말에 제 남편과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 허즈번드 온 위켄즈"
      },
      {
        sentence: "Time with my husband makes my week feel better.",
        meaning: "제 남편과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 허즈번드 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 60,
    word: "wife",
    meaning: "아내",
    pronunciation: "와이프",
    sentence: "I go for walks with my wife.",
    sentenceMeaning: "저는 아내와 산책해요.",
    sentencePronunciation: "아이 고 포 웍스 위드 마이 와이프",
    category: "가족/친구",
    examples: [
      {
        sentence: "I go for walks with my wife.",
        meaning: "저는 아내와 산책해요.",
        pronunciation: "아이 고 포 웍스 위드 마이 와이프"
      },
      {
        sentence: "I often spend time with my wife on weekends.",
        meaning: "저는 주말에 제 아내와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 와이프 온 위켄즈"
      },
      {
        sentence: "Time with my wife makes my week feel better.",
        meaning: "제 아내와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 와이프 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 61,
    word: "son",
    meaning: "아들",
    pronunciation: "선",
    sentence: "My son likes playing outside.",
    sentenceMeaning: "제 아들은 밖에서 노는 것을 좋아해요.",
    sentencePronunciation: "마이 선 라이크스 플레이잉 아웃사이드",
    category: "가족/친구",
    examples: [
      {
        sentence: "My son likes playing outside, and I still like it.",
        meaning: "제 아들은 밖에서 노는 것을 좋아해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 선 라이크스 플레이잉 아웃사이드 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I often spend time with my son on weekends.",
        meaning: "저는 주말에 제 아들과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 선 온 위켄즈"
      },
      {
        sentence: "Time with my son makes my week feel better.",
        meaning: "제 아들과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 선 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 62,
    word: "daughter",
    meaning: "딸",
    pronunciation: "도터",
    sentence: "My daughter loves reading books.",
    sentenceMeaning: "제 딸은 책 읽는 것을 좋아해요.",
    sentencePronunciation: "마이 도터 러브즈 리딩 북스",
    category: "가족/친구",
    examples: [
      {
        sentence: "My daughter loves reading books, and I still like it.",
        meaning: "제 딸은 책 읽는 것을 좋아해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 도터 러브즈 리딩 북스 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I often spend time with my daughter on weekends.",
        meaning: "저는 주말에 제 딸과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 도터 온 위켄즈"
      },
      {
        sentence: "Time with my daughter makes my week feel better.",
        meaning: "제 딸과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 도터 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 63,
    word: "classmate",
    meaning: "동창, 급우",
    pronunciation: "클래스메이트",
    sentence: "I still meet an old classmate sometimes.",
    sentenceMeaning: "저는 아직도 옛 동창을 가끔 만나요.",
    sentencePronunciation: "아이 스틸 밋 언 올드 클래스메이트 섬타임즈",
    category: "가족/친구",
    examples: [
      {
        sentence: "I still meet an old classmate sometimes.",
        meaning: "저는 아직도 옛 동창을 가끔 만나요.",
        pronunciation: "아이 스틸 밋 언 올드 클래스메이트 섬타임즈"
      },
      {
        sentence: "I often spend time with my classmate on weekends.",
        meaning: "저는 주말에 제 동창과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 클래스메이트 온 위켄즈"
      },
      {
        sentence: "Time with my classmate makes my week feel better.",
        meaning: "제 동창과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 클래스메이트 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 64,
    word: "roommate",
    meaning: "룸메이트",
    pronunciation: "룸메이트",
    sentence: "My roommate keeps the room clean.",
    sentenceMeaning: "제 룸메이트는 방을 깨끗하게 유지해요.",
    sentencePronunciation: "마이 룸메이트 킵스 더 룸 클린",
    category: "가족/친구",
    examples: [
      {
        sentence: "My roommate keeps the room clean, and I still like it.",
        meaning: "제 룸메이트는 방을 깨끗하게 유지해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 룸메이트 킵스 더 룸 클린 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I often spend time with my roommate on weekends.",
        meaning: "저는 주말에 제 룸메이트와 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 룸메이트 온 위켄즈"
      },
      {
        sentence: "Time with my roommate makes my week feel better.",
        meaning: "제 룸메이트와 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 룸메이트 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 65,
    word: "neighbor",
    meaning: "이웃",
    pronunciation: "네이버",
    sentence: "My neighbor is very friendly.",
    sentenceMeaning: "제 이웃은 아주 친절해요.",
    sentencePronunciation: "마이 네이버 이즈 베리 프렌들리",
    category: "가족/친구",
    examples: [
      {
        sentence: "My neighbor is very friendly, and I still like it.",
        meaning: "제 이웃은 아주 친절해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 네이버 이즈 베리 프렌들리 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I often spend time with my neighbor on weekends.",
        meaning: "저는 주말에 제 이웃과 자주 시간을 보내요.",
        pronunciation: "아이 오픈 스펜드 타임 위드 마이 네이버 온 위켄즈"
      },
      {
        sentence: "Time with my neighbor makes my week feel better.",
        meaning: "제 이웃과 함께하는 시간은 한 주를 더 좋게 느끼게 해줘요.",
        pronunciation: "타임 위드 마이 네이버 메익스 마이 위크 필 베러"
      }
    ]
  },
  {
    id: 66,
    word: "call",
    meaning: "전화, 전화하다",
    pronunciation: "콜",
    sentence: "I call my family every evening.",
    sentenceMeaning: "저는 매일 저녁 가족에게 전화해요.",
    sentencePronunciation: "아이 콜 마이 패밀리 에브리 이브닝",
    category: "가족/친구",
    examples: [
      {
        sentence: "I call my family every evening, and I still do that.",
        meaning: "저는 매일 저녁 가족에게 전화해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 콜 마이 패밀리 에브리 이브닝 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I make a quick call when I get home.",
        meaning: "저는 집에 오면 짧게 전화를 해요.",
        pronunciation: "아이 메이크 어 퀵 콜 웬 아이 겟 홈"
      },
      {
        sentence: "A short call helps me stay close to family.",
        meaning: "짧은 통화는 가족과 가깝게 지내는 데 도움이 돼요.",
        pronunciation: "어 쇼트 콜 헬프스 미 스테이 클로즈 투 패밀리"
      }
    ]
  },
  {
    id: 67,
    word: "message",
    meaning: "메시지",
    pronunciation: "메시지",
    sentence: "I send a message to my friend every day.",
    sentenceMeaning: "저는 매일 친구에게 메시지를 보내요.",
    sentencePronunciation: "아이 샌드 어 메시지 투 마이 프렌드 에브리 데이",
    category: "가족/친구",
    examples: [
      {
        sentence: "I send a message to my friend every day.",
        meaning: "저는 매일 친구에게 메시지를 보내요.",
        pronunciation: "아이 샌드 어 메시지 투 마이 프렌드 에브리 데이"
      },
      {
        sentence: "I send a short message before I go to bed.",
        meaning: "저는 잠자리에 들기 전에 짧은 메시지를 보내요.",
        pronunciation: "아이 센드 어 쇼트 메시지 비포 아이 고 투 베드"
      },
      {
        sentence: "A simple message helps me stay close to friends.",
        meaning: "간단한 메시지는 친구들과 가깝게 지내는 데 도움이 돼요.",
        pronunciation: "어 심플 메시지 헬프스 미 스테이 클로즈 투 프렌즈"
      }
    ]
  },
  {
    id: 68,
    word: "house",
    meaning: "집",
    pronunciation: "하우스",
    sentence: "My house is small but cozy.",
    sentenceMeaning: "우리 집은 작지만 아늑해요.",
    sentencePronunciation: "마이 하우스 이즈 스몰 벗 코지",
    category: "집/동네",
    examples: [
      {
        sentence: "My house is small but cozy, and I still like it.",
        meaning: "우리 집은 작지만 아늑해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 하우스 이즈 스몰 벗 코지 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My house feels comfortable after a long day.",
        meaning: "제 집은 긴 하루 뒤에 편하게 느껴져요.",
        pronunciation: "마이 하우스 필즈 컴포터블 애프터 어 롱 데이"
      },
      {
        sentence: "I spend a lot of time in my house.",
        meaning: "저는 제 집에서 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 인 마이 하우스"
      }
    ]
  },
  {
    id: 69,
    word: "room",
    meaning: "방",
    pronunciation: "룸",
    sentence: "I clean my room every weekend.",
    sentenceMeaning: "저는 주말마다 방을 청소해요.",
    sentencePronunciation: "아이 클린 마이 룸 에브리 위켄드",
    category: "집/동네",
    examples: [
      {
        sentence: "I clean my room every weekend, and I still do that.",
        meaning: "저는 주말마다 방을 청소해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 클린 마이 룸 에브리 위켄드 앤 아이 스틸 두 댓"
      },
      {
        sentence: "My room feels comfortable after a long day.",
        meaning: "제 방은 긴 하루 뒤에 편하게 느껴져요.",
        pronunciation: "마이 룸 필즈 컴포터블 애프터 어 롱 데이"
      },
      {
        sentence: "I spend a lot of time in my room.",
        meaning: "저는 제 방에서 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 인 마이 룸"
      }
    ]
  },
  {
    id: 70,
    word: "bedroom",
    meaning: "침실",
    pronunciation: "베드룸",
    sentence: "My bedroom is very quiet at night.",
    sentenceMeaning: "제 침실은 밤에 아주 조용해요.",
    sentencePronunciation: "마이 베드룸 이즈 베리 콰이어트 앳 나이트",
    category: "집/동네",
    examples: [
      {
        sentence: "My bedroom is very quiet at night.",
        meaning: "제 침실은 밤에 아주 조용해요.",
        pronunciation: "마이 베드룸 이즈 베리 콰이어트 앳 나이트"
      },
      {
        sentence: "My bedroom feels comfortable after a long day.",
        meaning: "제 침실은 긴 하루 뒤에 편하게 느껴져요.",
        pronunciation: "마이 베드룸 필즈 컴포터블 애프터 어 롱 데이"
      },
      {
        sentence: "I spend a lot of time in my bedroom.",
        meaning: "저는 제 침실에서 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 인 마이 베드룸"
      }
    ]
  },
  {
    id: 71,
    word: "bathroom",
    meaning: "욕실",
    pronunciation: "배스룸",
    sentence: "I keep my bathroom clean and dry.",
    sentenceMeaning: "저는 욕실을 깨끗하고 건조하게 유지해요.",
    sentencePronunciation: "아이 킵 마이 배스룸 클린 앤 드라이",
    category: "집/동네",
    examples: [
      {
        sentence: "I keep my bathroom clean and dry.",
        meaning: "저는 욕실을 깨끗하고 건조하게 유지해요.",
        pronunciation: "아이 킵 마이 배스룸 클린 앤 드라이"
      },
      {
        sentence: "I keep my bathroom clean every single day.",
        meaning: "저는 매일 욕실을 깨끗하게 유지해요.",
        pronunciation: "아이 킵 마이 배스룸 클린 에브리 싱글 데이"
      },
      {
        sentence: "The bathroom feels fresh after I clean it.",
        meaning: "욕실은 청소한 뒤 상쾌하게 느껴져요.",
        pronunciation: "더 배스룸 필즈 프레시 애프터 아이 클린 잇"
      }
    ]
  },
  {
    id: 72,
    word: "living room",
    meaning: "거실",
    pronunciation: "리빙 룸",
    sentence: "I relax in the living room after work.",
    sentenceMeaning: "저는 퇴근 후 거실에서 쉬어요.",
    sentencePronunciation: "아이 릴랙스 인 더 리빙 룸 애프터 워크",
    category: "집/동네",
    examples: [
      {
        sentence: "I relax in the living room after work.",
        meaning: "저는 퇴근 후 거실에서 쉬어요.",
        pronunciation: "아이 릴랙스 인 더 리빙 룸 애프터 워크"
      },
      {
        sentence: "My living room feels comfortable after a long day.",
        meaning: "제 거실은 긴 하루 뒤에 편하게 느껴져요.",
        pronunciation: "마이 리빙 룸 필즈 컴포터블 애프터 어 롱 데이"
      },
      {
        sentence: "I spend a lot of time in my living room.",
        meaning: "저는 제 거실에서 많은 시간을 보내요.",
        pronunciation: "아이 스펜드 어 랏 오브 타임 인 마이 리빙 룸"
      }
    ]
  },
  {
    id: 73,
    word: "sofa",
    meaning: "소파",
    pronunciation: "소파",
    sentence: "I usually sit on the sofa and watch TV.",
    sentenceMeaning: "저는 보통 소파에 앉아 TV를 봐요.",
    sentencePronunciation: "아이 유주얼리 싯 온 더 소파 앤 와치 티비",
    category: "집/동네",
    examples: [
      {
        sentence: "I usually sit on the sofa and watch TV.",
        meaning: "저는 보통 소파에 앉아 TV를 봐요.",
        pronunciation: "아이 유주얼리 싯 온 더 소파 앤 와치 티비"
      },
      {
        sentence: "I use my sofa a lot when I stay home.",
        meaning: "저는 집에 있을 때 제 소파를 많이 써요.",
        pronunciation: "아이 유즈 마이 소파 어 랏 웬 아이 스테이 홈"
      },
      {
        sentence: "My sofa makes my room feel more comfortable.",
        meaning: "제 소파는 방을 더 편하게 느끼게 해줘요.",
        pronunciation: "마이 소파 메익스 마이 룸 필 모어 컴포터블"
      }
    ]
  },
  {
    id: 74,
    word: "desk",
    meaning: "책상",
    pronunciation: "데스크",
    sentence: "I study English at my desk.",
    sentenceMeaning: "저는 책상에서 영어 공부를 해요.",
    sentencePronunciation: "아이 스터디 잉글리시 앳 마이 데스크",
    category: "집/동네",
    examples: [
      {
        sentence: "I study English at my desk, and I still do that.",
        meaning: "저는 책상에서 영어 공부를 해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 스터디 잉글리시 앳 마이 데스크 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I use my desk a lot when I stay home.",
        meaning: "저는 집에 있을 때 제 책상을 많이 써요.",
        pronunciation: "아이 유즈 마이 데스크 어 랏 웬 아이 스테이 홈"
      },
      {
        sentence: "My desk makes my room feel more comfortable.",
        meaning: "제 책상은 방을 더 편하게 느끼게 해줘요.",
        pronunciation: "마이 데스크 메익스 마이 룸 필 모어 컴포터블"
      }
    ]
  },
  {
    id: 75,
    word: "chair",
    meaning: "의자",
    pronunciation: "체어",
    sentence: "My chair is comfortable for long study time.",
    sentenceMeaning: "제 의자는 오래 공부하기에 편해요.",
    sentencePronunciation: "마이 체어 이즈 컴포터블 포 롱 스터디 타임",
    category: "집/동네",
    examples: [
      {
        sentence: "My chair is comfortable for long study time.",
        meaning: "제 의자는 오래 공부하기에 편해요.",
        pronunciation: "마이 체어 이즈 컴포터블 포 롱 스터디 타임"
      },
      {
        sentence: "I use my chair a lot when I stay home.",
        meaning: "저는 집에 있을 때 제 의자를 많이 써요.",
        pronunciation: "아이 유즈 마이 체어 어 랏 웬 아이 스테이 홈"
      },
      {
        sentence: "My chair makes my room feel more comfortable.",
        meaning: "제 의자는 방을 더 편하게 느끼게 해줘요.",
        pronunciation: "마이 체어 메익스 마이 룸 필 모어 컴포터블"
      }
    ]
  },
  {
    id: 76,
    word: "table",
    meaning: "탁자, 식탁",
    pronunciation: "테이블",
    sentence: "I eat dinner at the table with my family.",
    sentenceMeaning: "저는 가족과 식탁에서 저녁을 먹어요.",
    sentencePronunciation: "아이 잇 디너 앳 더 테이블 위드 마이 패밀리",
    category: "집/동네",
    examples: [
      {
        sentence: "I eat dinner at the table with my family.",
        meaning: "저는 가족과 식탁에서 저녁을 먹어요.",
        pronunciation: "아이 잇 디너 앳 더 테이블 위드 마이 패밀리"
      },
      {
        sentence: "I use my table a lot when I stay home.",
        meaning: "저는 집에 있을 때 제 탁자를 많이 써요.",
        pronunciation: "아이 유즈 마이 테이블 어 랏 웬 아이 스테이 홈"
      },
      {
        sentence: "My table makes my room feel more comfortable.",
        meaning: "제 탁자는 방을 더 편하게 느끼게 해줘요.",
        pronunciation: "마이 테이블 메익스 마이 룸 필 모어 컴포터블"
      }
    ]
  },
  {
    id: 77,
    word: "window",
    meaning: "창문",
    pronunciation: "윈도우",
    sentence: "I open the window every morning.",
    sentenceMeaning: "저는 매일 아침 창문을 열어요.",
    sentencePronunciation: "아이 오픈 더 윈도우 에브리 모닝",
    category: "집/동네",
    examples: [
      {
        sentence: "I open the window every morning, and I still do that.",
        meaning: "저는 매일 아침 창문을 열어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 오픈 더 윈도우 에브리 모닝 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I check the window before I leave the house.",
        meaning: "저는 집을 나가기 전에 창문을 확인해요.",
        pronunciation: "아이 체크 더 윈도우 비포 아이 리브 더 하우스"
      },
      {
        sentence: "The window stays open when fresh air feels nice.",
        meaning: "창문은 신선한 공기가 좋을 때 열려 있어요.",
        pronunciation: "더 윈도우 스테이즈 오픈 웬 프레시 에어 필즈 나이스"
      }
    ]
  },
  {
    id: 78,
    word: "door",
    meaning: "문",
    pronunciation: "도어",
    sentence: "I lock the door before I go out.",
    sentenceMeaning: "저는 외출 전에 문을 잠가요.",
    sentencePronunciation: "아이 락 더 도어 비포 아이 고 아웃",
    category: "집/동네",
    examples: [
      {
        sentence: "I lock the door before I go out.",
        meaning: "저는 외출 전에 문을 잠가요.",
        pronunciation: "아이 락 더 도어 비포 아이 고 아웃"
      },
      {
        sentence: "I check the door before I leave the house.",
        meaning: "저는 집을 나가기 전에 문을 확인해요.",
        pronunciation: "아이 체크 더 도어 비포 아이 리브 더 하우스"
      },
      {
        sentence: "The door stays open when fresh air feels nice.",
        meaning: "문은 신선한 공기가 좋을 때 열려 있어요.",
        pronunciation: "더 도어 스테이즈 오픈 웬 프레시 에어 필즈 나이스"
      }
    ]
  },
  {
    id: 79,
    word: "balcony",
    meaning: "발코니",
    pronunciation: "발코니",
    sentence: "I grow small plants on my balcony.",
    sentenceMeaning: "저는 발코니에서 작은 식물을 키워요.",
    sentencePronunciation: "아이 그로 스몰 플랜츠 온 마이 발코니",
    category: "집/동네",
    examples: [
      {
        sentence: "I grow small plants on my balcony.",
        meaning: "저는 발코니에서 작은 식물을 키워요.",
        pronunciation: "아이 그로 스몰 플랜츠 온 마이 발코니"
      },
      {
        sentence: "I stand on the balcony for fresh air sometimes.",
        meaning: "저는 가끔 신선한 공기를 마시려고 발코니에 서 있어요.",
        pronunciation: "아이 스탠드 온 더 발코니 포 프레시 에어 섬타임즈"
      },
      {
        sentence: "My balcony gets nice sunlight in the morning.",
        meaning: "제 발코니는 아침에 햇빛이 잘 들어요.",
        pronunciation: "마이 발코니 겟츠 나이스 선라이트 인 더 모닝"
      }
    ]
  },
  {
    id: 80,
    word: "elevator",
    meaning: "엘리베이터",
    pronunciation: "엘리베이터",
    sentence: "I take the elevator to my apartment.",
    sentenceMeaning: "저는 아파트까지 엘리베이터를 타요.",
    sentencePronunciation: "아이 테이크 디 엘리베이터 투 마이 어파트먼트",
    category: "집/동네",
    examples: [
      {
        sentence: "I take the elevator to my apartment.",
        meaning: "저는 아파트까지 엘리베이터를 타요.",
        pronunciation: "아이 테이크 디 엘리베이터 투 마이 어파트먼트"
      },
      {
        sentence: "I take the elevator when I carry heavy bags.",
        meaning: "저는 무거운 가방을 들 때 엘리베이터를 타요.",
        pronunciation: "아이 테이크 더 엘리베이터 웬 아이 캐리 헤비 백즈"
      },
      {
        sentence: "The elevator is very helpful in my building.",
        meaning: "엘리베이터는 우리 건물에서 아주 유용해요.",
        pronunciation: "더 엘리베이터 이즈 베리 헬프풀 인 마이 빌딩"
      }
    ]
  },
  {
    id: 81,
    word: "park",
    meaning: "공원",
    pronunciation: "파크",
    sentence: "I walk in the park near my house.",
    sentenceMeaning: "저는 집 근처 공원에서 걸어요.",
    sentencePronunciation: "아이 워크 인 더 파크 니어 마이 하우스",
    category: "집/동네",
    examples: [
      {
        sentence: "I walk in the park near my house.",
        meaning: "저는 집 근처 공원에서 걸어요.",
        pronunciation: "아이 워크 인 더 파크 니어 마이 하우스"
      },
      {
        sentence: "I often visit the park on quiet weekends.",
        meaning: "저는 조용한 주말에 공원을 자주 가요.",
        pronunciation: "아이 오픈 비지트 더 파크 온 콰이어트 위켄즈"
      },
      {
        sentence: "The park is easy to enjoy near my home.",
        meaning: "공원은 집 근처에서 편하게 즐기기 쉬워요.",
        pronunciation: "더 파크 이즈 이지 투 인조이 니어 마이 홈"
      }
    ]
  },
  {
    id: 82,
    word: "library",
    meaning: "도서관",
    pronunciation: "라이브러리",
    sentence: "I borrow books from the local library.",
    sentenceMeaning: "저는 동네 도서관에서 책을 빌려요.",
    sentencePronunciation: "아이 바로우 북스 프럼 더 로컬 라이브러리",
    category: "집/동네",
    examples: [
      {
        sentence: "I borrow books from the local library.",
        meaning: "저는 동네 도서관에서 책을 빌려요.",
        pronunciation: "아이 바로우 북스 프럼 더 로컬 라이브러리"
      },
      {
        sentence: "I often visit the library on quiet weekends.",
        meaning: "저는 조용한 주말에 도서관을 자주 가요.",
        pronunciation: "아이 오픈 비지트 더 라이브러리 온 콰이어트 위켄즈"
      },
      {
        sentence: "The library is easy to enjoy near my home.",
        meaning: "도서관은 집 근처에서 편하게 즐기기 쉬워요.",
        pronunciation: "더 라이브러리 이즈 이지 투 인조이 니어 마이 홈"
      }
    ]
  },
  {
    id: 83,
    word: "street",
    meaning: "거리",
    pronunciation: "스트리트",
    sentence: "The street near my house is quiet.",
    sentenceMeaning: "제 집 근처 거리는 조용해요.",
    sentencePronunciation: "더 스트리트 니어 마이 하우스 이즈 콰이어트",
    category: "집/동네",
    examples: [
      {
        sentence: "The street near my house is quiet.",
        meaning: "제 집 근처 거리는 조용해요.",
        pronunciation: "더 스트리트 니어 마이 하우스 이즈 콰이어트"
      },
      {
        sentence: "I walk along the street when the weather is nice.",
        meaning: "저는 날씨가 좋을 때 길을 따라 걸어요.",
        pronunciation: "아이 워크 얼롱 더 스트리트 웬 더 웨더 이즈 나이스"
      },
      {
        sentence: "The street gets busy near my home at noon.",
        meaning: "그 길은 점심 무렵 우리 집 근처에서 바빠져요.",
        pronunciation: "더 스트리트 겟츠 비지 니어 마이 홈 앳 눈"
      }
    ]
  },
  {
    id: 84,
    word: "market",
    meaning: "시장",
    pronunciation: "마켓",
    sentence: "I buy vegetables at the market.",
    sentenceMeaning: "저는 시장에서 채소를 사요.",
    sentencePronunciation: "아이 바이 베저터블즈 앳 더 마켓",
    category: "집/동네",
    examples: [
      {
        sentence: "I buy vegetables at the market, and I still do that.",
        meaning: "저는 시장에서 채소를 사요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 바이 베저터블즈 앳 더 마켓 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often visit the market on quiet weekends.",
        meaning: "저는 조용한 주말에 시장을 자주 가요.",
        pronunciation: "아이 오픈 비지트 더 마켓 온 콰이어트 위켄즈"
      },
      {
        sentence: "The market is easy to enjoy near my home.",
        meaning: "시장은 집 근처에서 편하게 즐기기 쉬워요.",
        pronunciation: "더 마켓 이즈 이지 투 인조이 니어 마이 홈"
      }
    ]
  },
  {
    id: 85,
    word: "lunch",
    meaning: "점심",
    pronunciation: "런치",
    sentence: "I usually eat lunch with my coworkers.",
    sentenceMeaning: "저는 보통 동료들과 점심을 먹어요.",
    sentencePronunciation: "아이 유주얼리 잇 런치 위드 마이 코워커즈",
    category: "음식",
    examples: [
      {
        sentence: "I usually eat lunch with my coworkers.",
        meaning: "저는 보통 동료들과 점심을 먹어요.",
        pronunciation: "아이 유주얼리 잇 런치 위드 마이 코워커즈"
      },
      {
        sentence: "I usually have lunch at home with my family.",
        meaning: "저는 보통 가족과 집에서 점심을 먹어요.",
        pronunciation: "아이 유주얼리 해브 런치 앳 홈 위드 마이 패밀리"
      },
      {
        sentence: "Lunch is one of my favorite parts of the day.",
        meaning: "점심은 제가 하루 중 좋아하는 시간 중 하나예요.",
        pronunciation: "런치 이즈 원 오브 마이 페이버릿 파츠 오브 더 데이"
      }
    ]
  },
  {
    id: 86,
    word: "snack",
    meaning: "간식",
    pronunciation: "스낵",
    sentence: "I eat a small snack in the afternoon.",
    sentenceMeaning: "저는 오후에 작은 간식을 먹어요.",
    sentencePronunciation: "아이 잇 어 스몰 스낵 인 디 애프터눈",
    category: "음식",
    examples: [
      {
        sentence: "I eat a small snack in the afternoon.",
        meaning: "저는 오후에 작은 간식을 먹어요.",
        pronunciation: "아이 잇 어 스몰 스낵 인 디 애프터눈"
      },
      {
        sentence: "I usually have snack at home with my family.",
        meaning: "저는 보통 가족과 집에서 간식을 먹어요.",
        pronunciation: "아이 유주얼리 해브 스낵 앳 홈 위드 마이 패밀리"
      },
      {
        sentence: "Snack is one of my favorite parts of the day.",
        meaning: "간식은 제가 하루 중 좋아하는 시간 중 하나예요.",
        pronunciation: "스낵 이즈 원 오브 마이 페이버릿 파츠 오브 더 데이"
      }
    ]
  },
  {
    id: 87,
    word: "rice",
    meaning: "밥, 쌀",
    pronunciation: "라이스",
    sentence: "I eat rice almost every day.",
    sentenceMeaning: "저는 거의 매일 밥을 먹어요.",
    sentencePronunciation: "아이 잇 라이스 올모스트 에브리 데이",
    category: "음식",
    examples: [
      {
        sentence: "I eat rice almost every day, and I still do that.",
        meaning: "저는 거의 매일 밥을 먹어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 잇 라이스 올모스트 에브리 데이 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often choose rice when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 밥을 자주 골라요.",
        pronunciation: "아이 오픈 추즈 라이스 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy rice at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 밥을 즐겨요.",
        pronunciation: "아이 인조이 라이스 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 88,
    word: "bread",
    meaning: "빵",
    pronunciation: "브레드",
    sentence: "I sometimes buy fresh bread in the morning.",
    sentenceMeaning: "저는 가끔 아침에 갓 만든 빵을 사요.",
    sentencePronunciation: "아이 섬타임즈 바이 프레시 브레드 인 더 모닝",
    category: "음식",
    examples: [
      {
        sentence: "I sometimes buy fresh bread in the morning.",
        meaning: "저는 가끔 아침에 갓 만든 빵을 사요.",
        pronunciation: "아이 섬타임즈 바이 프레시 브레드 인 더 모닝"
      },
      {
        sentence: "I often choose bread when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 빵을 자주 골라요.",
        pronunciation: "아이 오픈 추즈 브레드 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy bread at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 빵을 즐겨요.",
        pronunciation: "아이 인조이 브레드 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 89,
    word: "soup",
    meaning: "수프, 국",
    pronunciation: "수프",
    sentence: "I like hot soup on cold days.",
    sentenceMeaning: "저는 추운 날에 뜨거운 수프를 좋아해요.",
    sentencePronunciation: "아이 라이크 핫 수프 온 콜드 데이즈",
    category: "음식",
    examples: [
      {
        sentence: "I like hot soup on cold days.",
        meaning: "저는 추운 날에 뜨거운 수프를 좋아해요.",
        pronunciation: "아이 라이크 핫 수프 온 콜드 데이즈"
      },
      {
        sentence: "I often choose soup when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 수프를 자주 골라요.",
        pronunciation: "아이 오픈 추즈 수프 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy soup at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 수프를 즐겨요.",
        pronunciation: "아이 인조이 수프 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 90,
    word: "salad",
    meaning: "샐러드",
    pronunciation: "샐러드",
    sentence: "I eat salad when I want a light meal.",
    sentenceMeaning: "저는 가볍게 먹고 싶을 때 샐러드를 먹어요.",
    sentencePronunciation: "아이 잇 샐러드 웬 아이 원트 어 라이트 밀",
    category: "음식",
    examples: [
      {
        sentence: "I eat salad when I want a light meal.",
        meaning: "저는 가볍게 먹고 싶을 때 샐러드를 먹어요.",
        pronunciation: "아이 잇 샐러드 웬 아이 원트 어 라이트 밀"
      },
      {
        sentence: "I often choose salad when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 샐러드를 자주 골라요.",
        pronunciation: "아이 오픈 추즈 샐러드 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy salad at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 샐러드를 즐겨요.",
        pronunciation: "아이 인조이 샐러드 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 91,
    word: "noodle",
    meaning: "국수, 면",
    pronunciation: "누들",
    sentence: "I often eat noodle soup for lunch.",
    sentenceMeaning: "저는 점심으로 국수를 자주 먹어요.",
    sentencePronunciation: "아이 오픈 잇 누들 수프 포 런치",
    category: "음식",
    examples: [
      {
        sentence: "I often eat noodle soup for lunch.",
        meaning: "저는 점심으로 국수를 자주 먹어요.",
        pronunciation: "아이 오픈 잇 누들 수프 포 런치"
      },
      {
        sentence: "I often choose noodle when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 국수를 자주 골라요.",
        pronunciation: "아이 오픈 추즈 누들 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy noodle at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 국수를 즐겨요.",
        pronunciation: "아이 인조이 누들 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 92,
    word: "chicken",
    meaning: "치킨, 닭고기",
    pronunciation: "치킨",
    sentence: "I ordered chicken for dinner last night.",
    sentenceMeaning: "저는 어젯밤 저녁으로 치킨을 주문했어요.",
    sentencePronunciation: "아이 오더드 치킨 포 디너 라스트 나이트",
    category: "음식",
    examples: [
      {
        sentence: "I ordered chicken for dinner last night.",
        meaning: "저는 어젯밤 저녁으로 치킨을 주문했어요.",
        pronunciation: "아이 오더드 치킨 포 디너 라스트 나이트"
      },
      {
        sentence: "I often choose chicken when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 치킨을 자주 골라요.",
        pronunciation: "아이 오픈 추즈 치킨 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy chicken at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 치킨을 즐겨요.",
        pronunciation: "아이 인조이 치킨 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 93,
    word: "pizza",
    meaning: "피자",
    pronunciation: "피자",
    sentence: "I eat pizza when I meet my friends.",
    sentenceMeaning: "저는 친구들을 만나면 피자를 먹어요.",
    sentencePronunciation: "아이 잇 피자 웬 아이 밋 마이 프렌즈",
    category: "음식",
    examples: [
      {
        sentence: "I eat pizza when I meet my friends.",
        meaning: "저는 친구들을 만나면 피자를 먹어요.",
        pronunciation: "아이 잇 피자 웬 아이 밋 마이 프렌즈"
      },
      {
        sentence: "I often choose pizza when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 피자를 자주 골라요.",
        pronunciation: "아이 오픈 추즈 피자 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy pizza at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 피자를 즐겨요.",
        pronunciation: "아이 인조이 피자 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 94,
    word: "burger",
    meaning: "버거",
    pronunciation: "버거",
    sentence: "I sometimes have a burger on busy days.",
    sentenceMeaning: "저는 바쁜 날에 가끔 버거를 먹어요.",
    sentencePronunciation: "아이 섬타임즈 해브 어 버거 온 비지 데이즈",
    category: "음식",
    examples: [
      {
        sentence: "I sometimes have a burger on busy days.",
        meaning: "저는 바쁜 날에 가끔 버거를 먹어요.",
        pronunciation: "아이 섬타임즈 해브 어 버거 온 비지 데이즈"
      },
      {
        sentence: "I often choose burger when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 버거를 자주 골라요.",
        pronunciation: "아이 오픈 추즈 버거 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy burger at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 버거를 즐겨요.",
        pronunciation: "아이 인조이 버거 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 95,
    word: "fruit",
    meaning: "과일",
    pronunciation: "프루트",
    sentence: "I try to eat fruit every day.",
    sentenceMeaning: "저는 매일 과일을 먹으려고 해요.",
    sentencePronunciation: "아이 트라이 투 잇 프루트 에브리 데이",
    category: "음식",
    examples: [
      {
        sentence: "I try to eat fruit every day.",
        meaning: "저는 매일 과일을 먹으려고 해요.",
        pronunciation: "아이 트라이 투 잇 프루트 에브리 데이"
      },
      {
        sentence: "I often choose fruit when I want something simple.",
        meaning: "저는 간단한 것을 먹고 싶을 때 과일을 자주 골라요.",
        pronunciation: "아이 오픈 추즈 프루트 웬 아이 원트 썸씽 심플"
      },
      {
        sentence: "I enjoy fruit at home after a long day.",
        meaning: "저는 긴 하루 뒤 집에서 과일을 즐겨요.",
        pronunciation: "아이 인조이 프루트 앳 홈 애프터 어 롱 데이"
      }
    ]
  },
  {
    id: 96,
    word: "apple",
    meaning: "사과",
    pronunciation: "애플",
    sentence: "I usually take an apple to work.",
    sentenceMeaning: "저는 보통 사과 하나를 회사에 가져가요.",
    sentencePronunciation: "아이 유주얼리 테이크 언 애플 투 워크",
    category: "음식",
    examples: [
      {
        sentence: "I usually take an apple to work.",
        meaning: "저는 보통 사과 하나를 회사에 가져가요.",
        pronunciation: "아이 유주얼리 테이크 언 애플 투 워크"
      },
      {
        sentence: "I often eat apple after a light lunch.",
        meaning: "저는 가벼운 점심 뒤에 사과를 자주 먹어요.",
        pronunciation: "아이 오픈 잇 애플 애프터 어 라이트 런치"
      },
      {
        sentence: "Apple is easy to carry in my bag.",
        meaning: "사과는 가방에 넣고 다니기 쉬워요.",
        pronunciation: "애플 이즈 이지 투 캐리 인 마이 백"
      }
    ]
  },
  {
    id: 97,
    word: "banana",
    meaning: "바나나",
    pronunciation: "버내너",
    sentence: "I eat a banana after exercise.",
    sentenceMeaning: "저는 운동 후에 바나나를 먹어요.",
    sentencePronunciation: "아이 잇 어 버내너 애프터 엑서사이즈",
    category: "음식",
    examples: [
      {
        sentence: "I eat a banana after exercise, and I still do that.",
        meaning: "저는 운동 후에 바나나를 먹어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 잇 어 버내너 애프터 엑서사이즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I often eat banana after a light lunch.",
        meaning: "저는 가벼운 점심 뒤에 바나나를 자주 먹어요.",
        pronunciation: "아이 오픈 잇 버내너 애프터 어 라이트 런치"
      },
      {
        sentence: "Banana is easy to carry in my bag.",
        meaning: "바나나는 가방에 넣고 다니기 쉬워요.",
        pronunciation: "버내너 이즈 이지 투 캐리 인 마이 백"
      }
    ]
  },
  {
    id: 98,
    word: "water",
    meaning: "물",
    pronunciation: "워터",
    sentence: "I drink a lot of water every day.",
    sentenceMeaning: "저는 매일 물을 많이 마셔요.",
    sentencePronunciation: "아이 드링크 어 랏 오브 워터 에브리 데이",
    category: "음식",
    examples: [
      {
        sentence: "I drink a lot of water every day.",
        meaning: "저는 매일 물을 많이 마셔요.",
        pronunciation: "아이 드링크 어 랏 오브 워터 에브리 데이"
      },
      {
        sentence: "I usually drink water when I need a break.",
        meaning: "저는 쉬고 싶을 때 보통 물을 마셔요.",
        pronunciation: "아이 유주얼리 드링크 워터 웬 아이 니드 어 브레이크"
      },
      {
        sentence: "Water helps me relax on a busy afternoon.",
        meaning: "물은 바쁜 오후에 저를 편하게 해줘요.",
        pronunciation: "워터 헬프스 미 릴랙스 온 어 비지 애프터눈"
      }
    ]
  },
  {
    id: 99,
    word: "juice",
    meaning: "주스",
    pronunciation: "주스",
    sentence: "I like orange juice in the morning.",
    sentenceMeaning: "저는 아침에 오렌지주스를 좋아해요.",
    sentencePronunciation: "아이 라이크 오렌지 주스 인 더 모닝",
    category: "음식",
    examples: [
      {
        sentence: "I like orange juice in the morning.",
        meaning: "저는 아침에 오렌지주스를 좋아해요.",
        pronunciation: "아이 라이크 오렌지 주스 인 더 모닝"
      },
      {
        sentence: "I usually drink juice when I need a break.",
        meaning: "저는 쉬고 싶을 때 보통 주스를 마셔요.",
        pronunciation: "아이 유주얼리 드링크 주스 웬 아이 니드 어 브레이크"
      },
      {
        sentence: "Juice helps me relax on a busy afternoon.",
        meaning: "주스는 바쁜 오후에 저를 편하게 해줘요.",
        pronunciation: "주스 헬프스 미 릴랙스 온 어 비지 애프터눈"
      }
    ]
  },
  {
    id: 100,
    word: "dessert",
    meaning: "디저트",
    pronunciation: "디저트",
    sentence: "I enjoy dessert after dinner.",
    sentenceMeaning: "저는 저녁 후 디저트를 즐겨요.",
    sentencePronunciation: "아이 인조이 디저트 애프터 디너",
    category: "음식",
    examples: [
      {
        sentence: "I enjoy dessert after dinner, and I still do that.",
        meaning: "저는 저녁 후 디저트를 즐겨요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 인조이 디저트 애프터 디너 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I choose dessert when I want a sweet snack.",
        meaning: "저는 달콤한 간식을 원할 때 디저트를 골라요.",
        pronunciation: "아이 추즈 디저트 웬 아이 원트 어 스위트 스낵"
      },
      {
        sentence: "I enjoy dessert with coffee on quiet weekends.",
        meaning: "저는 조용한 주말에 커피와 함께 디저트를 즐겨요.",
        pronunciation: "아이 인조이 디저트 위드 커피 온 콰이어트 위켄즈"
      }
    ]
  },
  {
    id: 101,
    word: "meal",
    meaning: "식사",
    pronunciation: "밀",
    sentence: "I try not to skip a meal.",
    sentenceMeaning: "저는 식사를 거르지 않으려고 해요.",
    sentencePronunciation: "아이 트라이 낫 투 스킵 어 밀",
    category: "음식",
    examples: [
      {
        sentence: "I try not to skip a meal.",
        meaning: "저는 식사를 거르지 않으려고 해요.",
        pronunciation: "아이 트라이 낫 투 스킵 어 밀"
      },
      {
        sentence: "I usually have meal at home with my family.",
        meaning: "저는 보통 가족과 집에서 식사를 먹어요.",
        pronunciation: "아이 유주얼리 해브 밀 앳 홈 위드 마이 패밀리"
      },
      {
        sentence: "Meal is one of my favorite parts of the day.",
        meaning: "식사는 제가 하루 중 좋아하는 시간 중 하나예요.",
        pronunciation: "밀 이즈 원 오브 마이 페이버릿 파츠 오브 더 데이"
      }
    ]
  },
  {
    id: 102,
    word: "recipe",
    meaning: "레시피",
    pronunciation: "레서피",
    sentence: "I use a simple recipe when I cook.",
    sentenceMeaning: "저는 요리할 때 간단한 레시피를 써요.",
    sentencePronunciation: "아이 유즈 어 심플 레서피 웬 아이 쿡",
    category: "음식",
    examples: [
      {
        sentence: "I use a simple recipe when I cook.",
        meaning: "저는 요리할 때 간단한 레시피를 써요.",
        pronunciation: "아이 유즈 어 심플 레서피 웬 아이 쿡"
      },
      {
        sentence: "I read a new recipe before I cook dinner.",
        meaning: "저는 저녁을 만들기 전에 새로운 레시피를 읽어요.",
        pronunciation: "아이 리드 어 뉴 레서피 비포 아이 쿡 디너"
      },
      {
        sentence: "A simple recipe helps me cook at home.",
        meaning: "간단한 레시피는 집에서 요리할 때 도움이 돼요.",
        pronunciation: "어 심플 레서피 헬프스 미 쿡 앳 홈"
      }
    ]
  },
  {
    id: 103,
    word: "latte",
    meaning: "라테",
    pronunciation: "라테",
    sentence: "I usually order a hot latte.",
    sentenceMeaning: "저는 보통 따뜻한 라테를 주문해요.",
    sentencePronunciation: "아이 유주얼리 오더 어 핫 라테",
    category: "카페",
    examples: [
      {
        sentence: "I usually order a hot latte, and I still do that.",
        meaning: "저는 보통 따뜻한 라테를 주문해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 유주얼리 오더 어 핫 라테 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I usually order latte when I visit a cafe.",
        meaning: "저는 카페에 가면 보통 라테를 주문해요.",
        pronunciation: "아이 유주얼리 오더 라테 웬 아이 비지트 어 카페"
      },
      {
        sentence: "Latte tastes better when I sit by the window.",
        meaning: "라테는 창가에 앉아 있으면 더 맛있게 느껴져요.",
        pronunciation: "라테 테이스트 베러 웬 아이 싯 바이 더 윈도우"
      }
    ]
  },
  {
    id: 104,
    word: "tea",
    meaning: "차",
    pronunciation: "티",
    sentence: "I drink tea when I want to relax.",
    sentenceMeaning: "저는 쉬고 싶을 때 차를 마셔요.",
    sentencePronunciation: "아이 드링크 티 웬 아이 원트 투 릴랙스",
    category: "카페",
    examples: [
      {
        sentence: "I drink tea when I want to relax.",
        meaning: "저는 쉬고 싶을 때 차를 마셔요.",
        pronunciation: "아이 드링크 티 웬 아이 원트 투 릴랙스"
      },
      {
        sentence: "I usually order tea when I visit a cafe.",
        meaning: "저는 카페에 가면 보통 차를 주문해요.",
        pronunciation: "아이 유주얼리 오더 티 웬 아이 비지트 어 카페"
      },
      {
        sentence: "Tea tastes better when I sit by the window.",
        meaning: "차는 창가에 앉아 있으면 더 맛있게 느껴져요.",
        pronunciation: "티 테이스트 베러 웬 아이 싯 바이 더 윈도우"
      }
    ]
  },
  {
    id: 105,
    word: "cake",
    meaning: "케이크",
    pronunciation: "케이크",
    sentence: "I share cake with my friend at a cafe.",
    sentenceMeaning: "저는 카페에서 친구와 케이크를 나눠 먹어요.",
    sentencePronunciation: "아이 셰어 케이크 위드 마이 프렌드 앳 어 카페",
    category: "카페",
    examples: [
      {
        sentence: "I share cake with my friend at a cafe.",
        meaning: "저는 카페에서 친구와 케이크를 나눠 먹어요.",
        pronunciation: "아이 셰어 케이크 위드 마이 프렌드 앳 어 카페"
      },
      {
        sentence: "I choose cake when I want something sweet.",
        meaning: "저는 달콤한 것이 먹고 싶을 때 케이크를 골라요.",
        pronunciation: "아이 추즈 케이크 웬 아이 원트 썸씽 스위트"
      },
      {
        sentence: "Cake goes well with coffee in the afternoon.",
        meaning: "케이크는 오후에 커피와 잘 어울려요.",
        pronunciation: "케이크 고즈 웰 위드 커피 인 더 애프터눈"
      }
    ]
  },
  {
    id: 106,
    word: "cookie",
    meaning: "쿠키",
    pronunciation: "쿠키",
    sentence: "I buy a cookie with my coffee.",
    sentenceMeaning: "저는 커피와 함께 쿠키를 사요.",
    sentencePronunciation: "아이 바이 어 쿠키 위드 마이 커피",
    category: "카페",
    examples: [
      {
        sentence: "I buy a cookie with my coffee.",
        meaning: "저는 커피와 함께 쿠키를 사요.",
        pronunciation: "아이 바이 어 쿠키 위드 마이 커피"
      },
      {
        sentence: "I choose cookie when I want something sweet.",
        meaning: "저는 달콤한 것이 먹고 싶을 때 쿠키를 골라요.",
        pronunciation: "아이 추즈 쿠키 웬 아이 원트 썸씽 스위트"
      },
      {
        sentence: "Cookie goes well with coffee in the afternoon.",
        meaning: "쿠키는 오후에 커피와 잘 어울려요.",
        pronunciation: "쿠키 고즈 웰 위드 커피 인 더 애프터눈"
      }
    ]
  },
  {
    id: 107,
    word: "muffin",
    meaning: "머핀",
    pronunciation: "머핀",
    sentence: "I sometimes eat a muffin for breakfast.",
    sentenceMeaning: "저는 가끔 아침으로 머핀을 먹어요.",
    sentencePronunciation: "아이 섬타임즈 잇 어 머핀 포 브렉퍼스트",
    category: "카페",
    examples: [
      {
        sentence: "I sometimes eat a muffin for breakfast.",
        meaning: "저는 가끔 아침으로 머핀을 먹어요.",
        pronunciation: "아이 섬타임즈 잇 어 머핀 포 브렉퍼스트"
      },
      {
        sentence: "I choose muffin when I want something sweet.",
        meaning: "저는 달콤한 것이 먹고 싶을 때 머핀을 골라요.",
        pronunciation: "아이 추즈 머핀 웬 아이 원트 썸씽 스위트"
      },
      {
        sentence: "Muffin goes well with coffee in the afternoon.",
        meaning: "머핀은 오후에 커피와 잘 어울려요.",
        pronunciation: "머핀 고즈 웰 위드 커피 인 더 애프터눈"
      }
    ]
  },
  {
    id: 108,
    word: "barista",
    meaning: "바리스타",
    pronunciation: "바리스타",
    sentence: "I ask the barista for a less sweet drink.",
    sentenceMeaning: "저는 바리스타에게 덜 단 음료를 부탁해요.",
    sentencePronunciation: "아이 애스크 더 바리스타 포 어 레스 스위트 드링크",
    category: "카페",
    examples: [
      {
        sentence: "I ask the barista for a less sweet drink.",
        meaning: "저는 바리스타에게 덜 단 음료를 부탁해요.",
        pronunciation: "아이 애스크 더 바리스타 포 어 레스 스위트 드링크"
      },
      {
        sentence: "I ask the barista about new drinks sometimes.",
        meaning: "저는 가끔 바리스타에게 새로운 음료를 물어봐요.",
        pronunciation: "아이 애스크 더 바리스타 어바웃 뉴 드링크스 섬타임즈"
      },
      {
        sentence: "A friendly barista makes the cafe feel warm.",
        meaning: "친절한 바리스타는 카페를 더 따뜻하게 느끼게 해줘요.",
        pronunciation: "어 프렌들리 바리스타 메익스 더 카페 필 웜"
      }
    ]
  },
  {
    id: 109,
    word: "counter",
    meaning: "카운터",
    pronunciation: "카운터",
    sentence: "I pay at the counter first.",
    sentenceMeaning: "저는 먼저 카운터에서 계산해요.",
    sentencePronunciation: "아이 페이 앳 더 카운터 퍼스트",
    category: "카페",
    examples: [
      {
        sentence: "I pay at the counter first, and I still do that.",
        meaning: "저는 먼저 카운터에서 계산해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 페이 앳 더 카운터 퍼스트 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I wait near the counter after I order.",
        meaning: "저는 주문한 뒤 카운터 근처에서 기다려요.",
        pronunciation: "아이 웨이트 니어 더 카운터 애프터 아이 오더"
      },
      {
        sentence: "The counter gets busy during lunch time.",
        meaning: "카운터는 점심 시간에 바빠져요.",
        pronunciation: "더 카운터 겟츠 비지 듀링 런치 타임"
      }
    ]
  },
  {
    id: 110,
    word: "receipt",
    meaning: "영수증",
    pronunciation: "리싯",
    sentence: "I keep the receipt in my bag.",
    sentenceMeaning: "저는 영수증을 가방에 넣어 둬요.",
    sentencePronunciation: "아이 킵 더 리싯 인 마이 백",
    category: "카페",
    examples: [
      {
        sentence: "I keep the receipt in my bag.",
        meaning: "저는 영수증을 가방에 넣어 둬요.",
        pronunciation: "아이 킵 더 리싯 인 마이 백"
      },
      {
        sentence: "I keep the receipt in my wallet for a day.",
        meaning: "저는 영수증을 하루 정도 지갑에 넣어 둬요.",
        pronunciation: "아이 킵 더 리싯 인 마이 월렛 포 어 데이"
      },
      {
        sentence: "A small receipt is easy to lose in my bag.",
        meaning: "작은 영수증은 가방에서 잃어버리기 쉬워요.",
        pronunciation: "어 스몰 리싯 이즈 이지 투 루즈 인 마이 백"
      }
    ]
  },
  {
    id: 111,
    word: "cup",
    meaning: "컵",
    pronunciation: "컵",
    sentence: "I hold the warm cup with both hands.",
    sentenceMeaning: "저는 따뜻한 컵을 두 손으로 잡아요.",
    sentencePronunciation: "아이 홀드 더 웜 컵 위드 보스 핸즈",
    category: "카페",
    examples: [
      {
        sentence: "I hold the warm cup with both hands.",
        meaning: "저는 따뜻한 컵을 두 손으로 잡아요.",
        pronunciation: "아이 홀드 더 웜 컵 위드 보스 핸즈"
      },
      {
        sentence: "I hold my cup with both hands in winter.",
        meaning: "저는 겨울에 컵을 두 손으로 잡아요.",
        pronunciation: "아이 홀드 마이 컵 위드 보우스 핸즈 인 윈터"
      },
      {
        sentence: "My cup stays warm for a long time.",
        meaning: "제 컵은 오랫동안 따뜻함을 유지해요.",
        pronunciation: "마이 컵 스테이즈 웜 포 어 롱 타임"
      }
    ]
  },
  {
    id: 112,
    word: "straw",
    meaning: "빨대",
    pronunciation: "스트로",
    sentence: "I do not use a straw very often.",
    sentenceMeaning: "저는 빨대를 자주 쓰지 않아요.",
    sentencePronunciation: "아이 두 낫 유즈 어 스트로 베리 오픈",
    category: "카페",
    examples: [
      {
        sentence: "I do not use a straw very often.",
        meaning: "저는 빨대를 자주 쓰지 않아요.",
        pronunciation: "아이 두 낫 유즈 어 스트로 베리 오픈"
      },
      {
        sentence: "I use a straw for cold drinks sometimes.",
        meaning: "저는 가끔 차가운 음료를 마실 때 빨대를 써요.",
        pronunciation: "아이 유즈 어 스트로 포 콜드 드링크스 섬타임즈"
      },
      {
        sentence: "A straw is useful when I walk outside.",
        meaning: "빨대는 밖을 걸을 때 유용해요.",
        pronunciation: "어 스트로 이즈 유스풀 웬 아이 워크 아웃사이드"
      }
    ]
  },
  {
    id: 113,
    word: "ice",
    meaning: "얼음",
    pronunciation: "아이스",
    sentence: "I like a lot of ice in my drink.",
    sentenceMeaning: "저는 음료에 얼음이 많은 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 어 랏 오브 아이스 인 마이 드링크",
    category: "카페",
    examples: [
      {
        sentence: "I like a lot of ice in my drink.",
        meaning: "저는 음료에 얼음이 많은 걸 좋아해요.",
        pronunciation: "아이 라이크 어 랏 오브 아이스 인 마이 드링크"
      },
      {
        sentence: "I like extra ice in my drink on hot days.",
        meaning: "저는 더운 날 음료에 얼음을 많이 넣는 걸 좋아해요.",
        pronunciation: "아이 라이크 엑스트라 아이스 인 마이 드링크 온 핫 데이즈"
      },
      {
        sentence: "Ice makes my drink feel colder and fresher.",
        meaning: "얼음은 음료를 더 차갑고 상쾌하게 느끼게 해줘요.",
        pronunciation: "아이스 메익스 마이 드링크 필 콜더 앤 프레셔"
      }
    ]
  },
  {
    id: 114,
    word: "sugar",
    meaning: "설탕",
    pronunciation: "슈거",
    sentence: "I do not add much sugar to coffee.",
    sentenceMeaning: "저는 커피에 설탕을 많이 넣지 않아요.",
    sentencePronunciation: "아이 두 낫 애드 머치 슈거 투 커피",
    category: "카페",
    examples: [
      {
        sentence: "I do not add much sugar to coffee.",
        meaning: "저는 커피에 설탕을 많이 넣지 않아요.",
        pronunciation: "아이 두 낫 애드 머치 슈거 투 커피"
      },
      {
        sentence: "I add sugar when my coffee tastes too strong.",
        meaning: "저는 커피 맛이 너무 강할 때 설탕을 넣어요.",
        pronunciation: "아이 애드 슈거 웬 마이 커피 테이스트 투 스트롱"
      },
      {
        sentence: "A little sugar changes the taste very quickly.",
        meaning: "조금의 설탕은 맛을 아주 빨리 바꿔요.",
        pronunciation: "어 리틀 슈거 체인지즈 더 테이스트 베리 퀵클리"
      }
    ]
  },
  {
    id: 115,
    word: "syrup",
    meaning: "시럽",
    pronunciation: "시럽",
    sentence: "I ask for extra syrup in my latte.",
    sentenceMeaning: "저는 라테에 시럽을 더 넣어 달라고 해요.",
    sentencePronunciation: "아이 애스크 포 엑스트라 시럽 인 마이 라테",
    category: "카페",
    examples: [
      {
        sentence: "I ask for extra syrup in my latte.",
        meaning: "저는 라테에 시럽을 더 넣어 달라고 해요.",
        pronunciation: "아이 애스크 포 엑스트라 시럽 인 마이 라테"
      },
      {
        sentence: "I use syrup when I want a sweeter latte.",
        meaning: "저는 더 달콤한 라테를 원할 때 시럽을 넣어요.",
        pronunciation: "아이 유즈 시럽 웬 아이 원트 어 스위터 라테"
      },
      {
        sentence: "Syrup adds a soft sweet taste to drinks.",
        meaning: "시럽은 음료에 부드럽고 달콤한 맛을 더해요.",
        pronunciation: "시럽 애즈 어 소프트 스위트 테이스트 투 드링크스"
      }
    ]
  },
  {
    id: 116,
    word: "mug",
    meaning: "머그컵",
    pronunciation: "머그",
    sentence: "I like using a big mug at home.",
    sentenceMeaning: "저는 집에서 큰 머그컵을 쓰는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 유징 어 빅 머그 앳 홈",
    category: "카페",
    examples: [
      {
        sentence: "I like using a big mug at home.",
        meaning: "저는 집에서 큰 머그컵을 쓰는 걸 좋아해요.",
        pronunciation: "아이 라이크 유징 어 빅 머그 앳 홈"
      },
      {
        sentence: "I use my mug for tea at home.",
        meaning: "저는 집에서 차를 마실 때 머그잔을 써요.",
        pronunciation: "아이 유즈 마이 머그 포 티 앳 홈"
      },
      {
        sentence: "My mug is simple and easy to wash.",
        meaning: "제 머그잔은 단순하고 씻기 쉬워요.",
        pronunciation: "마이 머그 이즈 심플 앤 이지 투 워시"
      }
    ]
  },
  {
    id: 117,
    word: "order",
    meaning: "주문, 주문하다",
    pronunciation: "오더",
    sentence: "I order the same drink every time.",
    sentenceMeaning: "저는 매번 같은 음료를 주문해요.",
    sentencePronunciation: "아이 오더 더 세임 드링크 에브리 타임",
    category: "카페",
    examples: [
      {
        sentence: "I order the same drink every time.",
        meaning: "저는 매번 같은 음료를 주문해요.",
        pronunciation: "아이 오더 더 세임 드링크 에브리 타임"
      },
      {
        sentence: "I check my order before I leave the cafe.",
        meaning: "저는 카페를 떠나기 전에 주문 내용을 확인해요.",
        pronunciation: "아이 체크 마이 오더 비포 아이 리브 더 카페"
      },
      {
        sentence: "My order is usually simple and easy to remember.",
        meaning: "제 주문은 보통 단순하고 기억하기 쉬워요.",
        pronunciation: "마이 오더 이즈 유주얼리 심플 앤 이지 투 리멤버"
      }
    ]
  },
  {
    id: 118,
    word: "seat",
    meaning: "자리",
    pronunciation: "시트",
    sentence: "I choose a window seat when the cafe is quiet.",
    sentenceMeaning: "저는 카페가 조용할 때 창가 자리를 골라요.",
    sentencePronunciation: "아이 추즈 어 윈도우 시트 웬 더 카페 이즈 콰이어트",
    category: "카페",
    examples: [
      {
        sentence: "I choose a window seat when the cafe is quiet.",
        meaning: "저는 카페가 조용할 때 창가 자리를 골라요.",
        pronunciation: "아이 추즈 어 윈도우 시트 웬 더 카페 이즈 콰이어트"
      },
      {
        sentence: "I look for a quiet seat near the window.",
        meaning: "저는 창가 근처의 조용한 자리를 찾아요.",
        pronunciation: "아이 룩 포 어 콰이어트 시트 니어 더 윈도우"
      },
      {
        sentence: "A good seat helps me relax with coffee.",
        meaning: "좋은 자리는 커피와 함께 편하게 쉬게 도와줘요.",
        pronunciation: "어 굿 시트 헬프스 미 릴랙스 위드 커피"
      }
    ]
  },
  {
    id: 119,
    word: "takeout",
    meaning: "테이크아웃",
    pronunciation: "테이크아웃",
    sentence: "I get takeout coffee on busy mornings.",
    sentenceMeaning: "저는 바쁜 아침에 테이크아웃 커피를 사요.",
    sentencePronunciation: "아이 겟 테이크아웃 커피 온 비지 모닝즈",
    category: "카페",
    examples: [
      {
        sentence: "I get takeout coffee on busy mornings.",
        meaning: "저는 바쁜 아침에 테이크아웃 커피를 사요.",
        pronunciation: "아이 겟 테이크아웃 커피 온 비지 모닝즈"
      },
      {
        sentence: "I choose takeout when the cafe is very full.",
        meaning: "저는 카페가 많이 붐비면 포장을 선택해요.",
        pronunciation: "아이 추즈 테이크아웃 웬 더 카페 이즈 베리 풀"
      },
      {
        sentence: "Takeout is useful on busy work mornings.",
        meaning: "포장은 바쁜 출근 아침에 유용해요.",
        pronunciation: "테이크아웃 이즈 유스풀 온 비지 워크 모닝즈"
      }
    ]
  },
  {
    id: 120,
    word: "napkin",
    meaning: "냅킨",
    pronunciation: "냅킨",
    sentence: "I always take an extra napkin.",
    sentenceMeaning: "저는 항상 냅킨을 하나 더 챙겨요.",
    sentencePronunciation: "아이 올웨이즈 테이크 언 엑스트라 냅킨",
    category: "카페",
    examples: [
      {
        sentence: "I always take an extra napkin, and I still do that.",
        meaning: "저는 항상 냅킨을 하나 더 챙겨요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 올웨이즈 테이크 언 엑스트라 냅킨 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I keep a napkin on the table while eating.",
        meaning: "저는 먹는 동안 테이블 위에 냅킨을 둬요.",
        pronunciation: "아이 킵 어 냅킨 온 더 테이블 와일 이팅"
      },
      {
        sentence: "An extra napkin is useful for messy food.",
        meaning: "여분의 냅킨은 지저분한 음식을 먹을 때 유용해요.",
        pronunciation: "언 엑스트라 냅킨 이즈 유스풀 포 메시 푸드"
      }
    ]
  },
  {
    id: 121,
    word: "mall",
    meaning: "쇼핑몰",
    pronunciation: "몰",
    sentence: "I go to the mall on rainy days.",
    sentenceMeaning: "저는 비 오는 날 쇼핑몰에 가요.",
    sentencePronunciation: "아이 고 투 더 몰 온 레이니 데이즈",
    category: "쇼핑",
    examples: [
      {
        sentence: "I go to the mall on rainy days.",
        meaning: "저는 비 오는 날 쇼핑몰에 가요.",
        pronunciation: "아이 고 투 더 몰 온 레이니 데이즈"
      },
      {
        sentence: "I go to the mall when I need many things.",
        meaning: "저는 여러 가지가 필요할 때 쇼핑몰에 가요.",
        pronunciation: "아이 고 투 더 몰 웬 아이 니드 매니 띵즈"
      },
      {
        sentence: "The mall is useful on rainy weekend afternoons.",
        meaning: "쇼핑몰은 비 오는 주말 오후에 유용해요.",
        pronunciation: "더 몰 이즈 유스풀 온 레이니 위켄드 애프터눈즈"
      }
    ]
  },
  {
    id: 122,
    word: "store",
    meaning: "가게, 상점",
    pronunciation: "스토어",
    sentence: "I visit this store when I need basics.",
    sentenceMeaning: "저는 기본 물건이 필요할 때 이 가게에 가요.",
    sentencePronunciation: "아이 비지트 디스 스토어 웬 아이 니드 베이직스",
    category: "쇼핑",
    examples: [
      {
        sentence: "I visit this store when I need basics.",
        meaning: "저는 기본 물건이 필요할 때 이 가게에 가요.",
        pronunciation: "아이 비지트 디스 스토어 웬 아이 니드 베이직스"
      },
      {
        sentence: "I visit the store after work for small items.",
        meaning: "저는 작은 물건을 사려고 퇴근 후 가게에 가요.",
        pronunciation: "아이 비지트 더 스토어 애프터 워크 포 스몰 아이템즈"
      },
      {
        sentence: "The store near my home is easy to use.",
        meaning: "집 근처 가게는 이용하기 쉬워요.",
        pronunciation: "더 스토어 니어 마이 홈 이즈 이지 투 유즈"
      }
    ]
  },
  {
    id: 123,
    word: "sale",
    meaning: "세일",
    pronunciation: "세일",
    sentence: "I wait for a big sale before I shop.",
    sentenceMeaning: "저는 쇼핑 전에 큰 세일을 기다려요.",
    sentencePronunciation: "아이 웨이트 포 어 빅 세일 비포 아이 샵",
    category: "쇼핑",
    examples: [
      {
        sentence: "I wait for a big sale before I shop.",
        meaning: "저는 쇼핑 전에 큰 세일을 기다려요.",
        pronunciation: "아이 웨이트 포 어 빅 세일 비포 아이 샵"
      },
      {
        sentence: "I wait for a sale before I buy shoes.",
        meaning: "저는 신발을 사기 전에 세일을 기다려요.",
        pronunciation: "아이 웨이트 포 어 세일 비포 아이 바이 슈즈"
      },
      {
        sentence: "A big sale makes shopping much more fun.",
        meaning: "큰 세일은 쇼핑을 훨씬 더 재미있게 해줘요.",
        pronunciation: "어 빅 세일 메익스 쇼핑 머치 모어 펀"
      }
    ]
  },
  {
    id: 124,
    word: "price",
    meaning: "가격",
    pronunciation: "프라이스",
    sentence: "I check the price before I buy anything.",
    sentenceMeaning: "저는 무엇이든 사기 전에 가격을 확인해요.",
    sentencePronunciation: "아이 체크 더 프라이스 비포 아이 바이 애니씽",
    category: "쇼핑",
    examples: [
      {
        sentence: "I check the price before I buy anything.",
        meaning: "저는 무엇이든 사기 전에 가격을 확인해요.",
        pronunciation: "아이 체크 더 프라이스 비포 아이 바이 애니씽"
      },
      {
        sentence: "I check the price before I pick one.",
        meaning: "저는 하나를 고르기 전에 가격을 확인해요.",
        pronunciation: "아이 체크 더 프라이스 비포 아이 픽 원"
      },
      {
        sentence: "A fair price helps me decide much faster.",
        meaning: "적당한 가격은 더 빨리 결정하게 도와줘요.",
        pronunciation: "어 페어 프라이스 헬프스 미 디사이드 머치 패스터"
      }
    ]
  },
  {
    id: 125,
    word: "size",
    meaning: "사이즈",
    pronunciation: "사이즈",
    sentence: "I always look for my size first.",
    sentenceMeaning: "저는 항상 먼저 제 사이즈를 봐요.",
    sentencePronunciation: "아이 올웨이즈 룩 포 마이 사이즈 퍼스트",
    category: "쇼핑",
    examples: [
      {
        sentence: "I always look for my size first.",
        meaning: "저는 항상 먼저 제 사이즈를 봐요.",
        pronunciation: "아이 올웨이즈 룩 포 마이 사이즈 퍼스트"
      },
      {
        sentence: "I check the size before I buy new clothes.",
        meaning: "저는 새 옷을 사기 전에 사이즈를 확인해요.",
        pronunciation: "아이 체크 더 사이즈 비포 아이 바이 뉴 클로즈"
      },
      {
        sentence: "The right size makes shopping much easier for me.",
        meaning: "맞는 사이즈는 저에게 쇼핑을 더 쉽게 해줘요.",
        pronunciation: "더 라이트 사이즈 메익스 쇼핑 머치 이지어 포 미"
      }
    ]
  },
  {
    id: 126,
    word: "color",
    meaning: "색깔",
    pronunciation: "컬러",
    sentence: "I prefer calm colors like blue and gray.",
    sentenceMeaning: "저는 파랑과 회색 같은 차분한 색을 좋아해요.",
    sentencePronunciation: "아이 프리퍼 캄 컬러스 라이크 블루 앤 그레이",
    category: "쇼핑",
    examples: [
      {
        sentence: "I prefer calm colors like blue and gray.",
        meaning: "저는 파랑과 회색 같은 차분한 색을 좋아해요.",
        pronunciation: "아이 프리퍼 캄 컬러스 라이크 블루 앤 그레이"
      },
      {
        sentence: "I check the color before I buy new clothes.",
        meaning: "저는 새 옷을 사기 전에 색깔을 확인해요.",
        pronunciation: "아이 체크 더 컬러 비포 아이 바이 뉴 클로즈"
      },
      {
        sentence: "The right color makes shopping much easier for me.",
        meaning: "맞는 색깔은 저에게 쇼핑을 더 쉽게 해줘요.",
        pronunciation: "더 라이트 컬러 메익스 쇼핑 머치 이지어 포 미"
      }
    ]
  },
  {
    id: 127,
    word: "fitting room",
    meaning: "피팅룸",
    pronunciation: "피팅 룸",
    sentence: "I try clothes on in the fitting room.",
    sentenceMeaning: "저는 피팅룸에서 옷을 입어 봐요.",
    sentencePronunciation: "아이 트라이 클로즈 온 인 더 피팅 룸",
    category: "쇼핑",
    examples: [
      {
        sentence: "I try clothes on in the fitting room.",
        meaning: "저는 피팅룸에서 옷을 입어 봐요.",
        pronunciation: "아이 트라이 클로즈 온 인 더 피팅 룸"
      },
      {
        sentence: "I use the fitting room before I buy clothes.",
        meaning: "저는 옷을 사기 전에 탈의실을 이용해요.",
        pronunciation: "아이 유즈 더 피팅 룸 비포 아이 바이 클로즈"
      },
      {
        sentence: "A clean fitting room makes shopping easier.",
        meaning: "깨끗한 탈의실은 쇼핑을 더 편하게 해줘요.",
        pronunciation: "어 클린 피팅 룸 메익스 쇼핑 이지어"
      }
    ]
  },
  {
    id: 128,
    word: "card",
    meaning: "카드",
    pronunciation: "카드",
    sentence: "I usually pay by card.",
    sentenceMeaning: "저는 보통 카드로 계산해요.",
    sentencePronunciation: "아이 유주얼리 페이 바이 카드",
    category: "쇼핑",
    examples: [
      {
        sentence: "I usually pay by card, and I still do that.",
        meaning: "저는 보통 카드로 계산해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 유주얼리 페이 바이 카드 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I keep my card with me when I go shopping.",
        meaning: "저는 쇼핑하러 갈 때 제 카드를 챙겨요.",
        pronunciation: "아이 킵 마이 카드 위드 미 웬 아이 고 쇼핑"
      },
      {
        sentence: "My card is one thing I always check first.",
        meaning: "제 카드는 제가 항상 먼저 확인하는 물건 중 하나예요.",
        pronunciation: "마이 카드 이즈 원 띵 아이 올웨이즈 체크 퍼스트"
      }
    ]
  },
  {
    id: 129,
    word: "wallet",
    meaning: "지갑",
    pronunciation: "월릿",
    sentence: "I keep some cash in my wallet.",
    sentenceMeaning: "저는 지갑에 약간의 현금을 넣어 둬요.",
    sentencePronunciation: "아이 킵 섬 캐시 인 마이 월릿",
    category: "쇼핑",
    examples: [
      {
        sentence: "I keep some cash in my wallet.",
        meaning: "저는 지갑에 약간의 현금을 넣어 둬요.",
        pronunciation: "아이 킵 섬 캐시 인 마이 월릿"
      },
      {
        sentence: "I keep my wallet with me when I go shopping.",
        meaning: "저는 쇼핑하러 갈 때 제 지갑을 챙겨요.",
        pronunciation: "아이 킵 마이 월릿 위드 미 웬 아이 고 쇼핑"
      },
      {
        sentence: "My wallet is one thing I always check first.",
        meaning: "제 지갑은 제가 항상 먼저 확인하는 물건 중 하나예요.",
        pronunciation: "마이 월릿 이즈 원 띵 아이 올웨이즈 체크 퍼스트"
      }
    ]
  },
  {
    id: 130,
    word: "bag",
    meaning: "가방",
    pronunciation: "백",
    sentence: "I carry a shopping bag in my backpack.",
    sentenceMeaning: "저는 백팩에 쇼핑백을 넣고 다녀요.",
    sentencePronunciation: "아이 캐리 어 쇼핑 백 인 마이 백팩",
    category: "쇼핑",
    examples: [
      {
        sentence: "I carry a shopping bag in my backpack.",
        meaning: "저는 백팩에 쇼핑백을 넣고 다녀요.",
        pronunciation: "아이 캐리 어 쇼핑 백 인 마이 백팩"
      },
      {
        sentence: "I keep my bag with me when I go shopping.",
        meaning: "저는 쇼핑하러 갈 때 제 가방을 챙겨요.",
        pronunciation: "아이 킵 마이 백 위드 미 웬 아이 고 쇼핑"
      },
      {
        sentence: "My bag is one thing I always check first.",
        meaning: "제 가방은 제가 항상 먼저 확인하는 물건 중 하나예요.",
        pronunciation: "마이 백 이즈 원 띵 아이 올웨이즈 체크 퍼스트"
      }
    ]
  },
  {
    id: 131,
    word: "shoes",
    meaning: "신발",
    pronunciation: "슈즈",
    sentence: "I buy new shoes about once a year.",
    sentenceMeaning: "저는 1년에 한 번쯤 새 신발을 사요.",
    sentencePronunciation: "아이 바이 뉴 슈즈 어바웃 원스 어 이어",
    category: "쇼핑",
    examples: [
      {
        sentence: "I buy new shoes about once a year.",
        meaning: "저는 1년에 한 번쯤 새 신발을 사요.",
        pronunciation: "아이 바이 뉴 슈즈 어바웃 원스 어 이어"
      },
      {
        sentence: "I choose shoes that feel simple and comfortable.",
        meaning: "저는 단순하고 편한 신발을 골라요.",
        pronunciation: "아이 추즈 슈즈 댓 필 심플 앤 컴포터블"
      },
      {
        sentence: "Good shoes help me feel ready for the day.",
        meaning: "좋은 신발은 하루를 시작할 준비가 되게 해줘요.",
        pronunciation: "굿 슈즈 헬프 미 필 레디 포 더 데이"
      }
    ]
  },
  {
    id: 132,
    word: "shirt",
    meaning: "셔츠",
    pronunciation: "셔츠",
    sentence: "I bought a simple shirt last weekend.",
    sentenceMeaning: "저는 지난 주말에 심플한 셔츠를 샀어요.",
    sentencePronunciation: "아이 보트 어 심플 셔츠 라스트 위켄드",
    category: "쇼핑",
    examples: [
      {
        sentence: "I bought a simple shirt last weekend.",
        meaning: "저는 지난 주말에 심플한 셔츠를 샀어요.",
        pronunciation: "아이 보트 어 심플 셔츠 라스트 위켄드"
      },
      {
        sentence: "I choose shirt that feel simple and comfortable.",
        meaning: "저는 단순하고 편한 셔츠를 골라요.",
        pronunciation: "아이 추즈 셔츠 댓 필 심플 앤 컴포터블"
      },
      {
        sentence: "Good shirt help me feel ready for the day.",
        meaning: "좋은 셔츠는 하루를 시작할 준비가 되게 해줘요.",
        pronunciation: "굿 셔츠 헬프 미 필 레디 포 더 데이"
      }
    ]
  },
  {
    id: 133,
    word: "pants",
    meaning: "바지",
    pronunciation: "팬츠",
    sentence: "I like comfortable pants for work.",
    sentenceMeaning: "저는 일할 때 편한 바지를 좋아해요.",
    sentencePronunciation: "아이 라이크 컴포터블 팬츠 포 워크",
    category: "쇼핑",
    examples: [
      {
        sentence: "I like comfortable pants for work, and I still do that.",
        meaning: "저는 일할 때 편한 바지를 좋아해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 라이크 컴포터블 팬츠 포 워크 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I choose pants that feel simple and comfortable.",
        meaning: "저는 단순하고 편한 바지를 골라요.",
        pronunciation: "아이 추즈 팬츠 댓 필 심플 앤 컴포터블"
      },
      {
        sentence: "Good pants help me feel ready for the day.",
        meaning: "좋은 바지는 하루를 시작할 준비가 되게 해줘요.",
        pronunciation: "굿 팬츠 헬프 미 필 레디 포 더 데이"
      }
    ]
  },
  {
    id: 134,
    word: "skirt",
    meaning: "치마",
    pronunciation: "스커트",
    sentence: "I sometimes wear a long skirt in spring.",
    sentenceMeaning: "저는 봄에 가끔 긴 치마를 입어요.",
    sentencePronunciation: "아이 섬타임즈 웨어 어 롱 스커트 인 스프링",
    category: "쇼핑",
    examples: [
      {
        sentence: "I sometimes wear a long skirt in spring.",
        meaning: "저는 봄에 가끔 긴 치마를 입어요.",
        pronunciation: "아이 섬타임즈 웨어 어 롱 스커트 인 스프링"
      },
      {
        sentence: "I choose skirt that feel simple and comfortable.",
        meaning: "저는 단순하고 편한 치마를 골라요.",
        pronunciation: "아이 추즈 스커트 댓 필 심플 앤 컴포터블"
      },
      {
        sentence: "Good skirt help me feel ready for the day.",
        meaning: "좋은 치마는 하루를 시작할 준비가 되게 해줘요.",
        pronunciation: "굿 스커트 헬프 미 필 레디 포 더 데이"
      }
    ]
  },
  {
    id: 135,
    word: "coupon",
    meaning: "쿠폰",
    pronunciation: "쿠폰",
    sentence: "I use a coupon when I shop online.",
    sentenceMeaning: "저는 온라인 쇼핑할 때 쿠폰을 써요.",
    sentencePronunciation: "아이 유즈 어 쿠폰 웬 아이 샵 온라인",
    category: "쇼핑",
    examples: [
      {
        sentence: "I use a coupon when I shop online.",
        meaning: "저는 온라인 쇼핑할 때 쿠폰을 써요.",
        pronunciation: "아이 유즈 어 쿠폰 웬 아이 샵 온라인"
      },
      {
        sentence: "I use a coupon when I shop online.",
        meaning: "저는 온라인 쇼핑할 때 쿠폰을 써요.",
        pronunciation: "아이 유즈 어 쿠폰 웬 아이 샵 온라인"
      },
      {
        sentence: "A coupon helps me save a little money.",
        meaning: "쿠폰은 돈을 조금 아끼게 도와줘요.",
        pronunciation: "어 쿠폰 헬프스 미 세이브 어 리틀 머니"
      }
    ]
  },
  {
    id: 136,
    word: "brand",
    meaning: "브랜드",
    pronunciation: "브랜드",
    sentence: "I do not care much about brand names.",
    sentenceMeaning: "저는 브랜드를 많이 따지지 않아요.",
    sentencePronunciation: "아이 두 낫 케어 머치 어바웃 브랜드 네임즈",
    category: "쇼핑",
    examples: [
      {
        sentence: "I do not care much about brand names.",
        meaning: "저는 브랜드를 많이 따지지 않아요.",
        pronunciation: "아이 두 낫 케어 머치 어바웃 브랜드 네임즈"
      },
      {
        sentence: "I compare the brand before I buy something.",
        meaning: "저는 물건을 사기 전에 브랜드를 비교해요.",
        pronunciation: "아이 컴페어 더 브랜드 비포 아이 바이 썸씽"
      },
      {
        sentence: "A familiar brand feels safer to choose.",
        meaning: "익숙한 브랜드는 더 안심하고 고르게 해줘요.",
        pronunciation: "어 퍼밀리어 브랜드 필즈 세이퍼 투 추즈"
      }
    ]
  },
  {
    id: 137,
    word: "online",
    meaning: "온라인",
    pronunciation: "온라인",
    sentence: "I buy household items online.",
    sentenceMeaning: "저는 생활용품을 온라인으로 사요.",
    sentencePronunciation: "아이 바이 하우스홀드 아이템즈 온라인",
    category: "쇼핑",
    examples: [
      {
        sentence: "I buy household items online, and I still do that.",
        meaning: "저는 생활용품을 온라인으로 사요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 바이 하우스홀드 아이템즈 온라인 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I shop online when I stay home at night.",
        meaning: "저는 밤에 집에 있을 때 온라인 쇼핑을 해요.",
        pronunciation: "아이 샵 온라인 웬 아이 스테이 홈 앳 나이트"
      },
      {
        sentence: "Online shopping is easy on busy weekdays.",
        meaning: "온라인 쇼핑은 바쁜 평일에 쉬워요.",
        pronunciation: "온라인 쇼핑 이즈 이지 온 비지 위크데이즈"
      }
    ]
  },
  {
    id: 138,
    word: "package",
    meaning: "택배, 꾸러미",
    pronunciation: "패키지",
    sentence: "I open the package as soon as it arrives.",
    sentenceMeaning: "저는 택배가 오면 바로 열어 봐요.",
    sentencePronunciation: "아이 오픈 더 패키지 애즈 순 애즈 잇 어라이브즈",
    category: "쇼핑",
    examples: [
      {
        sentence: "I open the package as soon as it arrives.",
        meaning: "저는 택배가 오면 바로 열어 봐요.",
        pronunciation: "아이 오픈 더 패키지 애즈 순 애즈 잇 어라이브즈"
      },
      {
        sentence: "I check the package as soon as it arrives.",
        meaning: "저는 택배가 도착하자마자 확인해요.",
        pronunciation: "아이 체크 더 패키지 애즈 순 애즈 잇 어라이브즈"
      },
      {
        sentence: "A small package is easy to carry upstairs.",
        meaning: "작은 택배는 위층으로 들고 가기 쉬워요.",
        pronunciation: "어 스몰 패키지 이즈 이지 투 캐리 업스테어즈"
      }
    ]
  },
  {
    id: 139,
    word: "airport",
    meaning: "공항",
    pronunciation: "에어포트",
    sentence: "I arrive at the airport early.",
    sentenceMeaning: "저는 공항에 일찍 도착해요.",
    sentencePronunciation: "아이 어라이브 앳 디 에어포트 얼리",
    category: "여행",
    examples: [
      {
        sentence: "I arrive at the airport early, and I still do that.",
        meaning: "저는 공항에 일찍 도착해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 어라이브 앳 디 에어포트 얼리 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I like the airport because the view feels calm.",
        meaning: "저는 공항을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 에어포트 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the airport when I travel.",
        meaning: "저는 여행할 때 공항 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 에어포트 웬 아이 트래블"
      }
    ]
  },
  {
    id: 140,
    word: "airplane",
    meaning: "비행기",
    pronunciation: "에어플레인",
    sentence: "I like looking outside on the airplane.",
    sentenceMeaning: "저는 비행기에서 바깥을 보는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 루킹 아웃사이드 온 디 에어플레인",
    category: "여행",
    examples: [
      {
        sentence: "I like looking outside on the airplane.",
        meaning: "저는 비행기에서 바깥을 보는 걸 좋아해요.",
        pronunciation: "아이 라이크 루킹 아웃사이드 온 디 에어플레인"
      },
      {
        sentence: "I feel excited when I get on an airplane.",
        meaning: "저는 비행기에 타면 설레요.",
        pronunciation: "아이 필 익사이티드 웬 아이 겟 온 언 에어플레인"
      },
      {
        sentence: "The airplane ride feels long on early mornings.",
        meaning: "비행기 이동은 이른 아침에 길게 느껴져요.",
        pronunciation: "더 에어플레인 라이드 필즈 롱 온 얼리 모닝즈"
      }
    ]
  },
  {
    id: 141,
    word: "ticket",
    meaning: "티켓",
    pronunciation: "티켓",
    sentence: "I check my ticket before I leave home.",
    sentenceMeaning: "저는 집을 나서기 전에 티켓을 확인해요.",
    sentencePronunciation: "아이 체크 마이 티켓 비포 아이 리브 홈",
    category: "여행",
    examples: [
      {
        sentence: "I check my ticket before I leave home.",
        meaning: "저는 집을 나서기 전에 티켓을 확인해요.",
        pronunciation: "아이 체크 마이 티켓 비포 아이 리브 홈"
      },
      {
        sentence: "I check my ticket before I leave for the airport.",
        meaning: "저는 공항에 가기 전에 제 티켓을 확인해요.",
        pronunciation: "아이 체크 마이 티켓 비포 아이 리브 포 더 에어포트"
      },
      {
        sentence: "My ticket stays in one safe pocket during trips.",
        meaning: "제 티켓은 여행 중 안전한 주머니 하나에 들어 있어요.",
        pronunciation: "마이 티켓 스테이즈 인 원 세이프 파켓 듀링 트립스"
      }
    ]
  },
  {
    id: 142,
    word: "passport",
    meaning: "여권",
    pronunciation: "패스포트",
    sentence: "I keep my passport in a safe place.",
    sentenceMeaning: "저는 여권을 안전한 곳에 둬요.",
    sentencePronunciation: "아이 킵 마이 패스포트 인 어 세이프 플레이스",
    category: "여행",
    examples: [
      {
        sentence: "I keep my passport in a safe place.",
        meaning: "저는 여권을 안전한 곳에 둬요.",
        pronunciation: "아이 킵 마이 패스포트 인 어 세이프 플레이스"
      },
      {
        sentence: "I check my passport before I leave for the airport.",
        meaning: "저는 공항에 가기 전에 제 여권을 확인해요.",
        pronunciation: "아이 체크 마이 패스포트 비포 아이 리브 포 더 에어포트"
      },
      {
        sentence: "My passport stays in one safe pocket during trips.",
        meaning: "제 여권은 여행 중 안전한 주머니 하나에 들어 있어요.",
        pronunciation: "마이 패스포트 스테이즈 인 원 세이프 파켓 듀링 트립스"
      }
    ]
  },
  {
    id: 143,
    word: "suitcase",
    meaning: "여행 가방",
    pronunciation: "수트케이스",
    sentence: "I pack my suitcase the night before.",
    sentenceMeaning: "저는 전날 밤에 여행 가방을 싸요.",
    sentencePronunciation: "아이 팩 마이 수트케이스 더 나이트 비포",
    category: "여행",
    examples: [
      {
        sentence: "I pack my suitcase the night before.",
        meaning: "저는 전날 밤에 여행 가방을 싸요.",
        pronunciation: "아이 팩 마이 수트케이스 더 나이트 비포"
      },
      {
        sentence: "I check my suitcase before I leave for the airport.",
        meaning: "저는 공항에 가기 전에 제 여행 가방을 확인해요.",
        pronunciation: "아이 체크 마이 수트케이스 비포 아이 리브 포 더 에어포트"
      },
      {
        sentence: "My suitcase stays in one safe pocket during trips.",
        meaning: "제 여행 가방은 여행 중 안전한 주머니 하나에 들어 있어요.",
        pronunciation: "마이 수트케이스 스테이즈 인 원 세이프 파켓 듀링 트립스"
      }
    ]
  },
  {
    id: 144,
    word: "map",
    meaning: "지도",
    pronunciation: "맵",
    sentence: "I use a map when I visit a new city.",
    sentenceMeaning: "저는 새로운 도시에 가면 지도를 써요.",
    sentencePronunciation: "아이 유즈 어 맵 웬 아이 비지트 어 뉴 시티",
    category: "여행",
    examples: [
      {
        sentence: "I use a map when I visit a new city.",
        meaning: "저는 새로운 도시에 가면 지도를 써요.",
        pronunciation: "아이 유즈 어 맵 웬 아이 비지트 어 뉴 시티"
      },
      {
        sentence: "I check my map before I leave for the airport.",
        meaning: "저는 공항에 가기 전에 제 지도를 확인해요.",
        pronunciation: "아이 체크 마이 맵 비포 아이 리브 포 더 에어포트"
      },
      {
        sentence: "My map stays in one safe pocket during trips.",
        meaning: "제 지도는 여행 중 안전한 주머니 하나에 들어 있어요.",
        pronunciation: "마이 맵 스테이즈 인 원 세이프 파켓 듀링 트립스"
      }
    ]
  },
  {
    id: 145,
    word: "tour",
    meaning: "투어",
    pronunciation: "투어",
    sentence: "I joined a city tour on my last trip.",
    sentenceMeaning: "저는 지난 여행에서 시티 투어에 참가했어요.",
    sentencePronunciation: "아이 조인드 어 시티 투어 온 마이 라스트 트립",
    category: "여행",
    examples: [
      {
        sentence: "I joined a city tour on my last trip.",
        meaning: "저는 지난 여행에서 시티 투어에 참가했어요.",
        pronunciation: "아이 조인드 어 시티 투어 온 마이 라스트 트립"
      },
      {
        sentence: "I join a short tour when I visit a new city.",
        meaning: "저는 새로운 도시에 가면 짧은 투어에 참여해요.",
        pronunciation: "아이 조인 어 쇼트 투어 웬 아이 비지트 어 뉴 시티"
      },
      {
        sentence: "A simple tour helps me see many places quickly.",
        meaning: "간단한 투어는 많은 곳을 빨리 보게 도와줘요.",
        pronunciation: "어 심플 투어 헬프스 미 시 매니 플레이시즈 퀵클리"
      }
    ]
  },
  {
    id: 146,
    word: "guide",
    meaning: "가이드",
    pronunciation: "가이드",
    sentence: "I listened to the guide very carefully.",
    sentenceMeaning: "저는 가이드의 설명을 아주 주의 깊게 들었어요.",
    sentencePronunciation: "아이 리슨드 투 더 가이드 베리 케어풀리",
    category: "여행",
    examples: [
      {
        sentence: "I listened to the guide very carefully.",
        meaning: "저는 가이드의 설명을 아주 주의 깊게 들었어요.",
        pronunciation: "아이 리슨드 투 더 가이드 베리 케어풀리"
      },
      {
        sentence: "I read the guide before I start my city tour.",
        meaning: "저는 시내 투어를 시작하기 전에 가이드를 읽어요.",
        pronunciation: "아이 리드 더 가이드 비포 아이 스타트 마이 시티 투어"
      },
      {
        sentence: "A good guide makes my trip easy and fun.",
        meaning: "좋은 가이드는 여행을 쉽고 재미있게 만들어 줘요.",
        pronunciation: "어 굿 가이드 메익스 마이 트립 이지 앤 펀"
      }
    ]
  },
  {
    id: 147,
    word: "picture",
    meaning: "사진",
    pronunciation: "픽처",
    sentence: "I take many pictures when I travel.",
    sentenceMeaning: "저는 여행할 때 사진을 많이 찍어요.",
    sentencePronunciation: "아이 테이크 매니 픽처즈 웬 아이 트래블",
    category: "여행",
    examples: [
      {
        sentence: "I take many pictures when I travel.",
        meaning: "저는 여행할 때 사진을 많이 찍어요.",
        pronunciation: "아이 테이크 매니 픽처즈 웬 아이 트래블"
      },
      {
        sentence: "I take a picture when I see a nice view.",
        meaning: "저는 멋진 풍경을 보면 사진을 찍어요.",
        pronunciation: "아이 테이크 어 픽처 웬 아이 시 어 나이스 뷰"
      },
      {
        sentence: "A good picture helps me remember the trip longer.",
        meaning: "좋은 사진은 여행을 더 오래 기억하게 해줘요.",
        pronunciation: "어 굿 픽처 헬프스 미 리멤버 더 트립 롱거"
      }
    ]
  },
  {
    id: 148,
    word: "mountain",
    meaning: "산",
    pronunciation: "마운틴",
    sentence: "I want to see a mountain view on vacation.",
    sentenceMeaning: "저는 휴가 때 산 전망을 보고 싶어요.",
    sentencePronunciation: "아이 원트 투 씨 어 마운틴 뷰 온 베이케이션",
    category: "여행",
    examples: [
      {
        sentence: "I want to see a mountain view on vacation.",
        meaning: "저는 휴가 때 산 전망을 보고 싶어요.",
        pronunciation: "아이 원트 투 씨 어 마운틴 뷰 온 베이케이션"
      },
      {
        sentence: "I like the mountain because the view feels calm.",
        meaning: "저는 산을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 마운틴 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the mountain when I travel.",
        meaning: "저는 여행할 때 산 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 마운틴 웬 아이 트래블"
      }
    ]
  },
  {
    id: 149,
    word: "island",
    meaning: "섬",
    pronunciation: "아일랜드",
    sentence: "I dream of visiting a quiet island.",
    sentenceMeaning: "저는 조용한 섬을 방문하는 꿈을 꿔요.",
    sentencePronunciation: "아이 드림 오브 비지팅 어 콰이어트 아일랜드",
    category: "여행",
    examples: [
      {
        sentence: "I dream of visiting a quiet island.",
        meaning: "저는 조용한 섬을 방문하는 꿈을 꿔요.",
        pronunciation: "아이 드림 오브 비지팅 어 콰이어트 아일랜드"
      },
      {
        sentence: "I like the island because the view feels calm.",
        meaning: "저는 섬을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 아일랜드 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the island when I travel.",
        meaning: "저는 여행할 때 섬 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 아일랜드 웬 아이 트래블"
      }
    ]
  },
  {
    id: 150,
    word: "river",
    meaning: "강",
    pronunciation: "리버",
    sentence: "I walked along the river in the evening.",
    sentenceMeaning: "저는 저녁에 강을 따라 걸었어요.",
    sentencePronunciation: "아이 워크트 얼롱 더 리버 인 디 이브닝",
    category: "여행",
    examples: [
      {
        sentence: "I walked along the river in the evening.",
        meaning: "저는 저녁에 강을 따라 걸었어요.",
        pronunciation: "아이 워크트 얼롱 더 리버 인 디 이브닝"
      },
      {
        sentence: "I like the river because the view feels calm.",
        meaning: "저는 강을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 리버 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the river when I travel.",
        meaning: "저는 여행할 때 강 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 리버 웬 아이 트래블"
      }
    ]
  },
  {
    id: 151,
    word: "museum",
    meaning: "박물관",
    pronunciation: "뮤지엄",
    sentence: "I like going to a museum on trips.",
    sentenceMeaning: "저는 여행 가면 박물관에 가는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 고잉 투 어 뮤지엄 온 트립스",
    category: "여행",
    examples: [
      {
        sentence: "I like going to a museum on trips.",
        meaning: "저는 여행 가면 박물관에 가는 걸 좋아해요.",
        pronunciation: "아이 라이크 고잉 투 어 뮤지엄 온 트립스"
      },
      {
        sentence: "I like the museum because the view feels calm.",
        meaning: "저는 박물관을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 뮤지엄 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the museum when I travel.",
        meaning: "저는 여행할 때 박물관 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 뮤지엄 웬 아이 트래블"
      }
    ]
  },
  {
    id: 152,
    word: "temple",
    meaning: "사원, 절",
    pronunciation: "템플",
    sentence: "I visited an old temple last year.",
    sentenceMeaning: "저는 작년에 오래된 사원을 방문했어요.",
    sentencePronunciation: "아이 비지티드 언 올드 템플 라스트 이어",
    category: "여행",
    examples: [
      {
        sentence: "I visited an old temple last year.",
        meaning: "저는 작년에 오래된 사원을 방문했어요.",
        pronunciation: "아이 비지티드 언 올드 템플 라스트 이어"
      },
      {
        sentence: "I like the temple because the view feels calm.",
        meaning: "저는 사원을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 템플 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the temple when I travel.",
        meaning: "저는 여행할 때 사원 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 템플 웬 아이 트래블"
      }
    ]
  },
  {
    id: 153,
    word: "reservation",
    meaning: "예약",
    pronunciation: "레저베이션",
    sentence: "I made a hotel reservation online.",
    sentenceMeaning: "저는 호텔 예약을 온라인으로 했어요.",
    sentencePronunciation: "아이 메이드 어 호텔 레저베이션 온라인",
    category: "여행",
    examples: [
      {
        sentence: "I made a hotel reservation online, and I still do that.",
        meaning: "저는 호텔 예약을 온라인으로 했어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 메이드 어 호텔 레저베이션 온라인 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I check my reservation before I leave for the airport.",
        meaning: "저는 공항에 가기 전에 제 예약을 확인해요.",
        pronunciation: "아이 체크 마이 레저베이션 비포 아이 리브 포 더 에어포트"
      },
      {
        sentence: "My reservation stays in one safe pocket during trips.",
        meaning: "제 예약은 여행 중 안전한 주머니 하나에 들어 있어요.",
        pronunciation: "마이 레저베이션 스테이즈 인 원 세이프 파켓 듀링 트립스"
      }
    ]
  },
  {
    id: 154,
    word: "luggage",
    meaning: "짐",
    pronunciation: "러기지",
    sentence: "I keep my luggage simple and light.",
    sentenceMeaning: "저는 짐을 간단하고 가볍게 챙겨요.",
    sentencePronunciation: "아이 킵 마이 러기지 심플 앤 라이트",
    category: "여행",
    examples: [
      {
        sentence: "I keep my luggage simple and light.",
        meaning: "저는 짐을 간단하고 가볍게 챙겨요.",
        pronunciation: "아이 킵 마이 러기지 심플 앤 라이트"
      },
      {
        sentence: "I check my luggage before I leave for the airport.",
        meaning: "저는 공항에 가기 전에 제 짐을 확인해요.",
        pronunciation: "아이 체크 마이 러기지 비포 아이 리브 포 더 에어포트"
      },
      {
        sentence: "My luggage stays in one safe pocket during trips.",
        meaning: "제 짐은 여행 중 안전한 주머니 하나에 들어 있어요.",
        pronunciation: "마이 러기지 스테이즈 인 원 세이프 파켓 듀링 트립스"
      }
    ]
  },
  {
    id: 155,
    word: "flight",
    meaning: "비행편",
    pronunciation: "플라이트",
    sentence: "My flight was early in the morning.",
    sentenceMeaning: "제 비행편은 아침 일찍이었어요.",
    sentencePronunciation: "마이 플라이트 워즈 얼리 인 더 모닝",
    category: "여행",
    examples: [
      {
        sentence: "My flight was early in the morning.",
        meaning: "제 비행편은 아침 일찍이었어요.",
        pronunciation: "마이 플라이트 워즈 얼리 인 더 모닝"
      },
      {
        sentence: "I check my flight time the night before travel.",
        meaning: "저는 여행 전날 밤에 비행 시간을 확인해요.",
        pronunciation: "아이 체크 마이 플라이트 타임 더 나이트 비포 트래블"
      },
      {
        sentence: "A morning flight helps me arrive earlier.",
        meaning: "아침 비행은 더 일찍 도착하게 도와줘요.",
        pronunciation: "어 모닝 플라이트 헬프스 미 어라이브 얼리어"
      }
    ]
  },
  {
    id: 156,
    word: "view",
    meaning: "풍경, 전망",
    pronunciation: "뷰",
    sentence: "I loved the view from my hotel room.",
    sentenceMeaning: "저는 호텔 방에서 본 전망이 정말 좋았어요.",
    sentencePronunciation: "아이 러브드 더 뷰 프럼 마이 호텔 룸",
    category: "여행",
    examples: [
      {
        sentence: "I loved the view from my hotel room.",
        meaning: "저는 호텔 방에서 본 전망이 정말 좋았어요.",
        pronunciation: "아이 러브드 더 뷰 프럼 마이 호텔 룸"
      },
      {
        sentence: "I like the view because the view feels calm.",
        meaning: "저는 풍경을 풍경이 차분해서 좋아해요.",
        pronunciation: "아이 라이크 더 뷰 비커즈 더 뷰 필즈 캄"
      },
      {
        sentence: "I take pictures near the view when I travel.",
        meaning: "저는 여행할 때 풍경 근처에서 사진을 찍어요.",
        pronunciation: "아이 테이크 픽처즈 니어 더 뷰 웬 아이 트래블"
      }
    ]
  },
  {
    id: 157,
    word: "drama",
    meaning: "드라마",
    pronunciation: "드라마",
    sentence: "I watch drama series after dinner.",
    sentenceMeaning: "저는 저녁 후에 드라마 시리즈를 봐요.",
    sentencePronunciation: "아이 와치 드라마 시리즈 애프터 디너",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I watch drama series after dinner, and I still do that.",
        meaning: "저는 저녁 후에 드라마 시리즈를 봐요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 와치 드라마 시리즈 애프터 디너 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy drama after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 드라마를 즐겨요.",
        pronunciation: "아이 인조이 드라마 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good drama helps me relax after a busy day.",
        meaning: "좋은 드라마는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 드라마 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 158,
    word: "comedy",
    meaning: "코미디",
    pronunciation: "코미디",
    sentence: "I enjoy comedy because it makes me laugh.",
    sentenceMeaning: "저는 코미디가 웃음을 줘서 좋아해요.",
    sentencePronunciation: "아이 인조이 코미디 비커즈 잇 메익스 미 래프",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I enjoy comedy because it makes me laugh.",
        meaning: "저는 코미디가 웃음을 줘서 좋아해요.",
        pronunciation: "아이 인조이 코미디 비커즈 잇 메익스 미 래프"
      },
      {
        sentence: "I enjoy comedy after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 코미디를 즐겨요.",
        pronunciation: "아이 인조이 코미디 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good comedy helps me relax after a busy day.",
        meaning: "좋은 코미디는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 코미디 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 159,
    word: "action",
    meaning: "액션",
    pronunciation: "액션",
    sentence: "I like action movies on weekends.",
    sentenceMeaning: "저는 주말에 액션 영화를 좋아해요.",
    sentencePronunciation: "아이 라이크 액션 무비즈 온 위켄즈",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I like action movies on weekends, and I still do that.",
        meaning: "저는 주말에 액션 영화를 좋아해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 라이크 액션 무비즈 온 위켄즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy action after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 액션 영화를 즐겨요.",
        pronunciation: "아이 인조이 액션 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good action helps me relax after a busy day.",
        meaning: "좋은 액션 영화는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 액션 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 160,
    word: "scene",
    meaning: "장면",
    pronunciation: "신",
    sentence: "I remember one scene very well.",
    sentenceMeaning: "저는 한 장면을 아주 잘 기억해요.",
    sentencePronunciation: "아이 리멤버 원 신 베리 웰",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I remember one scene very well, and I still do that.",
        meaning: "저는 한 장면을 아주 잘 기억해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 리멤버 원 신 베리 웰 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy scene after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 장면을 즐겨요.",
        pronunciation: "아이 인조이 신 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good scene helps me relax after a busy day.",
        meaning: "좋은 장면은 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 신 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 161,
    word: "ending",
    meaning: "결말",
    pronunciation: "엔딩",
    sentence: "I liked the ending of the movie.",
    sentenceMeaning: "저는 그 영화의 결말이 좋았어요.",
    sentencePronunciation: "아이 라이크드 디 엔딩 오브 더 무비",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I liked the ending of the movie.",
        meaning: "저는 그 영화의 결말이 좋았어요.",
        pronunciation: "아이 라이크드 디 엔딩 오브 더 무비"
      },
      {
        sentence: "I enjoy ending after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 결말을 즐겨요.",
        pronunciation: "아이 인조이 엔딩 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good ending helps me relax after a busy day.",
        meaning: "좋은 결말은 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 엔딩 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 162,
    word: "story",
    meaning: "이야기",
    pronunciation: "스토리",
    sentence: "The story was simple and easy to follow.",
    sentenceMeaning: "이야기가 단순하고 따라가기 쉬웠어요.",
    sentencePronunciation: "더 스토리 워즈 심플 앤 이지 투 팔로",
    category: "영화/드라마",
    examples: [
      {
        sentence: "The story was simple and easy to follow.",
        meaning: "이야기가 단순하고 따라가기 쉬웠어요.",
        pronunciation: "더 스토리 워즈 심플 앤 이지 투 팔로"
      },
      {
        sentence: "I enjoy story after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 이야기를 즐겨요.",
        pronunciation: "아이 인조이 스토리 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good story helps me relax after a busy day.",
        meaning: "좋은 이야기는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 스토리 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 163,
    word: "character",
    meaning: "캐릭터",
    pronunciation: "캐릭터",
    sentence: "I liked the main character a lot.",
    sentenceMeaning: "저는 주인공 캐릭터가 많이 좋았어요.",
    sentencePronunciation: "아이 라이크드 더 메인 캐릭터 어 랏",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I liked the main character a lot.",
        meaning: "저는 주인공 캐릭터가 많이 좋았어요.",
        pronunciation: "아이 라이크드 더 메인 캐릭터 어 랏"
      },
      {
        sentence: "I enjoy character after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 캐릭터를 즐겨요.",
        pronunciation: "아이 인조이 캐릭터 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good character helps me relax after a busy day.",
        meaning: "좋은 캐릭터는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 캐릭터 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 164,
    word: "actress",
    meaning: "여배우",
    pronunciation: "액트리스",
    sentence: "My favorite actress has a warm smile.",
    sentenceMeaning: "제가 좋아하는 여배우는 따뜻한 미소가 있어요.",
    sentencePronunciation: "마이 페이버릿 액트리스 해즈 어 웜 스마일",
    category: "영화/드라마",
    examples: [
      {
        sentence: "My favorite actress has a warm smile.",
        meaning: "제가 좋아하는 여배우는 따뜻한 미소가 있어요.",
        pronunciation: "마이 페이버릿 액트리스 해즈 어 웜 스마일"
      },
      {
        sentence: "I like this actress because the acting feels natural.",
        meaning: "저는 이 여배우를 연기가 자연스러워서 좋아해요.",
        pronunciation: "아이 라이크 디스 액트리스 비커즈 더 액팅 필즈 내추럴"
      },
      {
        sentence: "A good actress can change the whole story.",
        meaning: "좋은 여배우는 이야기 전체를 바꿀 수 있어요.",
        pronunciation: "어 굿 액트리스 캔 체인지 더 홀 스토리"
      }
    ]
  },
  {
    id: 165,
    word: "episode",
    meaning: "에피소드",
    pronunciation: "에피소드",
    sentence: "I watched two episodes last night.",
    sentenceMeaning: "저는 어젯밤에 두 편을 봤어요.",
    sentencePronunciation: "아이 와치드 투 에피소드즈 라스트 나이트",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I watched two episodes last night, and I still do that.",
        meaning: "저는 어젯밤에 두 편을 봤어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 와치드 투 에피소드즈 라스트 나이트 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy episode after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 에피소드를 즐겨요.",
        pronunciation: "아이 인조이 에피소드 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good episode helps me relax after a busy day.",
        meaning: "좋은 에피소드는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 에피소드 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 166,
    word: "channel",
    meaning: "채널",
    pronunciation: "채널",
    sentence: "I changed the channel after the show ended.",
    sentenceMeaning: "저는 프로그램이 끝난 뒤 채널을 바꿨어요.",
    sentencePronunciation: "아이 체인지드 더 채널 애프터 더 쇼 엔디드",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I changed the channel after the show ended.",
        meaning: "저는 프로그램이 끝난 뒤 채널을 바꿨어요.",
        pronunciation: "아이 체인지드 더 채널 애프터 더 쇼 엔디드"
      },
      {
        sentence: "I enjoy channel after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 채널을 즐겨요.",
        pronunciation: "아이 인조이 채널 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good channel helps me relax after a busy day.",
        meaning: "좋은 채널은 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 채널 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 167,
    word: "screen",
    meaning: "스크린",
    pronunciation: "스크린",
    sentence: "I like watching movies on a big screen.",
    sentenceMeaning: "저는 큰 스크린으로 영화를 보는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 와칭 무비즈 온 어 빅 스크린",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I like watching movies on a big screen.",
        meaning: "저는 큰 스크린으로 영화를 보는 걸 좋아해요.",
        pronunciation: "아이 라이크 와칭 무비즈 온 어 빅 스크린"
      },
      {
        sentence: "I enjoy screen after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 스크린을 즐겨요.",
        pronunciation: "아이 인조이 스크린 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good screen helps me relax after a busy day.",
        meaning: "좋은 스크린은 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 스크린 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 168,
    word: "popcorn",
    meaning: "팝콘",
    pronunciation: "팝콘",
    sentence: "I always buy popcorn at the theater.",
    sentenceMeaning: "저는 극장에서 항상 팝콘을 사요.",
    sentencePronunciation: "아이 올웨이즈 바이 팝콘 앳 더 시어터",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I always buy popcorn at the theater.",
        meaning: "저는 극장에서 항상 팝콘을 사요.",
        pronunciation: "아이 올웨이즈 바이 팝콘 앳 더 시어터"
      },
      {
        sentence: "I buy popcorn when I watch movies at theaters.",
        meaning: "저는 영화관에서 영화를 볼 때 팝콘을 사요.",
        pronunciation: "아이 바이 팝콘 웬 아이 와치 무비즈 앳 시어터즈"
      },
      {
        sentence: "Warm popcorn makes movie time feel more fun.",
        meaning: "따뜻한 팝콘은 영화 시간을 더 재미있게 해줘요.",
        pronunciation: "웜 팝콘 메익스 무비 타임 필 모어 펀"
      }
    ]
  },
  {
    id: 169,
    word: "subtitle",
    meaning: "자막",
    pronunciation: "섭타이틀",
    sentence: "I use English subtitles sometimes.",
    sentenceMeaning: "저는 가끔 영어 자막을 켜요.",
    sentencePronunciation: "아이 유즈 잉글리시 섭타이틀즈 섬타임즈",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I use English subtitles sometimes, and I still do that.",
        meaning: "저는 가끔 영어 자막을 켜요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 유즈 잉글리시 섭타이틀즈 섬타임즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy subtitle after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 자막을 즐겨요.",
        pronunciation: "아이 인조이 섭타이틀 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good subtitle helps me relax after a busy day.",
        meaning: "좋은 자막은 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 섭타이틀 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 170,
    word: "theater",
    meaning: "극장",
    pronunciation: "시어터",
    sentence: "I went to the theater with my friend.",
    sentenceMeaning: "저는 친구와 극장에 갔어요.",
    sentencePronunciation: "아이 웬트 투 더 시어터 위드 마이 프렌드",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I went to the theater with my friend.",
        meaning: "저는 친구와 극장에 갔어요.",
        pronunciation: "아이 웬트 투 더 시어터 위드 마이 프렌드"
      },
      {
        sentence: "I go to the theater when a new movie opens.",
        meaning: "저는 새 영화가 개봉하면 극장에 가요.",
        pronunciation: "아이 고 투 더 시어터 웬 어 뉴 무비 오픈즈"
      },
      {
        sentence: "The theater feels special on a quiet night.",
        meaning: "극장은 조용한 밤에 특별하게 느껴져요.",
        pronunciation: "더 시어터 필즈 스페셜 온 어 콰이어트 나이트"
      }
    ]
  },
  {
    id: 171,
    word: "trailer",
    meaning: "예고편",
    pronunciation: "트레일러",
    sentence: "I saw the trailer before the movie came out.",
    sentenceMeaning: "저는 영화 개봉 전에 예고편을 봤어요.",
    sentencePronunciation: "아이 소 더 트레일러 비포 더 무비 케임 아웃",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I saw the trailer before the movie came out.",
        meaning: "저는 영화 개봉 전에 예고편을 봤어요.",
        pronunciation: "아이 소 더 트레일러 비포 더 무비 케임 아웃"
      },
      {
        sentence: "I enjoy trailer after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 예고편을 즐겨요.",
        pronunciation: "아이 인조이 트레일러 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good trailer helps me relax after a busy day.",
        meaning: "좋은 예고편은 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 트레일러 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 172,
    word: "series",
    meaning: "시리즈",
    pronunciation: "시리즈",
    sentence: "I started a new series this week.",
    sentenceMeaning: "저는 이번 주에 새 시리즈를 시작했어요.",
    sentencePronunciation: "아이 스타티드 어 뉴 시리즈 디스 위크",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I started a new series this week.",
        meaning: "저는 이번 주에 새 시리즈를 시작했어요.",
        pronunciation: "아이 스타티드 어 뉴 시리즈 디스 위크"
      },
      {
        sentence: "I enjoy series after dinner on quiet weekends.",
        meaning: "저는 조용한 주말 저녁 뒤에 시리즈를 즐겨요.",
        pronunciation: "아이 인조이 시리즈 애프터 디너 온 콰이어트 위켄즈"
      },
      {
        sentence: "Good series helps me relax after a busy day.",
        meaning: "좋은 시리즈는 바쁜 하루 뒤에 저를 편하게 해줘요.",
        pronunciation: "굿 시리즈 헬프스 미 릴랙스 애프터 어 비지 데이"
      }
    ]
  },
  {
    id: 173,
    word: "director",
    meaning: "감독",
    pronunciation: "디렉터",
    sentence: "I like movies by this director.",
    sentenceMeaning: "저는 이 감독의 영화를 좋아해요.",
    sentencePronunciation: "아이 라이크 무비즈 바이 디스 디렉터",
    category: "영화/드라마",
    examples: [
      {
        sentence: "I like movies by this director, and I still do that.",
        meaning: "저는 이 감독의 영화를 좋아해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 라이크 무비즈 바이 디스 디렉터 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I like this director because the acting feels natural.",
        meaning: "저는 이 감독을 연기가 자연스러워서 좋아해요.",
        pronunciation: "아이 라이크 디스 디렉터 비커즈 더 액팅 필즈 내추럴"
      },
      {
        sentence: "A good director can change the whole story.",
        meaning: "좋은 감독은 이야기 전체를 바꿀 수 있어요.",
        pronunciation: "어 굿 디렉터 캔 체인지 더 홀 스토리"
      }
    ]
  },
  {
    id: 174,
    word: "star",
    meaning: "스타, 유명 배우",
    pronunciation: "스타",
    sentence: "The movie star was very popular.",
    sentenceMeaning: "그 영화배우는 아주 인기가 많았어요.",
    sentencePronunciation: "더 무비 스타 워즈 베리 파퓰러",
    category: "영화/드라마",
    examples: [
      {
        sentence: "The movie star was very popular, and I still like it.",
        meaning: "그 영화배우는 아주 인기가 많았어요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "더 무비 스타 워즈 베리 파퓰러 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I like this star because the acting feels natural.",
        meaning: "저는 이 스타를 연기가 자연스러워서 좋아해요.",
        pronunciation: "아이 라이크 디스 스타 비커즈 더 액팅 필즈 내추럴"
      },
      {
        sentence: "A good star can change the whole story.",
        meaning: "좋은 스타는 이야기 전체를 바꿀 수 있어요.",
        pronunciation: "어 굿 스타 캔 체인지 더 홀 스토리"
      }
    ]
  },
  {
    id: 175,
    word: "music",
    meaning: "음악",
    pronunciation: "뮤직",
    sentence: "I listen to music on my way home.",
    sentenceMeaning: "저는 집에 가는 길에 음악을 들어요.",
    sentencePronunciation: "아이 리슨 투 뮤직 온 마이 웨이 홈",
    category: "취미",
    examples: [
      {
        sentence: "I listen to music on my way home.",
        meaning: "저는 집에 가는 길에 음악을 들어요.",
        pronunciation: "아이 리슨 투 뮤직 온 마이 웨이 홈"
      },
      {
        sentence: "I enjoy music in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 음악을 즐겨요.",
        pronunciation: "아이 인조이 뮤직 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Music helps me relax and forget stress.",
        meaning: "음악은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "뮤직 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 176,
    word: "song",
    meaning: "노래",
    pronunciation: "송",
    sentence: "This song makes me feel relaxed.",
    sentenceMeaning: "이 노래는 저를 편안하게 해 줘요.",
    sentencePronunciation: "디스 송 메익스 미 필 릴랙스트",
    category: "취미",
    examples: [
      {
        sentence: "This song makes me feel relaxed, and I still like it.",
        meaning: "이 노래는 저를 편안하게 해 줘요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "디스 송 메익스 미 필 릴랙스트 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I enjoy song in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 노래를 즐겨요.",
        pronunciation: "아이 인조이 송 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Song helps me relax and forget stress.",
        meaning: "노래는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "송 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 177,
    word: "piano",
    meaning: "피아노",
    pronunciation: "피아노",
    sentence: "I learned piano when I was young.",
    sentenceMeaning: "저는 어릴 때 피아노를 배웠어요.",
    sentencePronunciation: "아이 런드 피아노 웬 아이 워즈 영",
    category: "취미",
    examples: [
      {
        sentence: "I learned piano when I was young.",
        meaning: "저는 어릴 때 피아노를 배웠어요.",
        pronunciation: "아이 런드 피아노 웬 아이 워즈 영"
      },
      {
        sentence: "I play the piano when I want to relax.",
        meaning: "저는 쉬고 싶을 때 피아노를 쳐요.",
        pronunciation: "아이 플레이 더 피아노 웬 아이 원트 투 릴랙스"
      },
      {
        sentence: "The piano sound makes my room feel calm.",
        meaning: "피아노 소리는 방을 차분하게 느끼게 해줘요.",
        pronunciation: "더 피아노 사운드 메익스 마이 룸 필 캄"
      }
    ]
  },
  {
    id: 178,
    word: "drawing",
    meaning: "그림 그리기",
    pronunciation: "드로잉",
    sentence: "I enjoy drawing in my free time.",
    sentenceMeaning: "저는 자유 시간에 그림 그리기를 즐겨요.",
    sentencePronunciation: "아이 인조이 드로잉 인 마이 프리 타임",
    category: "취미",
    examples: [
      {
        sentence: "I enjoy drawing in my free time.",
        meaning: "저는 자유 시간에 그림 그리기를 즐겨요.",
        pronunciation: "아이 인조이 드로잉 인 마이 프리 타임"
      },
      {
        sentence: "I enjoy drawing in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 그림 그리기를 즐겨요.",
        pronunciation: "아이 인조이 드로잉 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Drawing helps me relax and forget stress.",
        meaning: "그림 그리기는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "드로잉 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 179,
    word: "reading",
    meaning: "독서",
    pronunciation: "리딩",
    sentence: "I do some reading before bed.",
    sentenceMeaning: "저는 자기 전에 조금 읽어요.",
    sentencePronunciation: "아이 두 섬 리딩 비포 베드",
    category: "취미",
    examples: [
      {
        sentence: "I do some reading before bed, and I still do that.",
        meaning: "저는 자기 전에 조금 읽어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 두 섬 리딩 비포 베드 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy reading in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 독서를 즐겨요.",
        pronunciation: "아이 인조이 리딩 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Reading helps me relax and forget stress.",
        meaning: "독서는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "리딩 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 180,
    word: "book",
    meaning: "책",
    pronunciation: "북",
    sentence: "I bought a new book yesterday.",
    sentenceMeaning: "저는 어제 새 책을 샀어요.",
    sentencePronunciation: "아이 보트 어 뉴 북 예스터데이",
    category: "취미",
    examples: [
      {
        sentence: "I bought a new book yesterday, and I still do that.",
        meaning: "저는 어제 새 책을 샀어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 보트 어 뉴 북 예스터데이 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I read a book before I go to bed.",
        meaning: "저는 잠자리에 들기 전에 책을 읽어요.",
        pronunciation: "아이 리드 어 북 비포 아이 고 투 베드"
      },
      {
        sentence: "A good book makes my evening feel quiet.",
        meaning: "좋은 책은 저녁 시간을 조용하게 느끼게 해줘요.",
        pronunciation: "어 굿 북 메익스 마이 이브닝 필 콰이어트"
      }
    ]
  },
  {
    id: 181,
    word: "game",
    meaning: "게임",
    pronunciation: "게임",
    sentence: "I play simple games on my phone.",
    sentenceMeaning: "저는 휴대폰으로 간단한 게임을 해요.",
    sentencePronunciation: "아이 플레이 심플 게임즈 온 마이 폰",
    category: "취미",
    examples: [
      {
        sentence: "I play simple games on my phone.",
        meaning: "저는 휴대폰으로 간단한 게임을 해요.",
        pronunciation: "아이 플레이 심플 게임즈 온 마이 폰"
      },
      {
        sentence: "I enjoy game in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 게임을 즐겨요.",
        pronunciation: "아이 인조이 게임 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Game helps me relax and forget stress.",
        meaning: "게임은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "게임 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 182,
    word: "puzzle",
    meaning: "퍼즐",
    pronunciation: "퍼즐",
    sentence: "I like doing a puzzle on quiet nights.",
    sentenceMeaning: "저는 조용한 밤에 퍼즐 하는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 두잉 어 퍼즐 온 콰이어트 나이츠",
    category: "취미",
    examples: [
      {
        sentence: "I like doing a puzzle on quiet nights.",
        meaning: "저는 조용한 밤에 퍼즐 하는 걸 좋아해요.",
        pronunciation: "아이 라이크 두잉 어 퍼즐 온 콰이어트 나이츠"
      },
      {
        sentence: "I enjoy puzzle in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 퍼즐을 즐겨요.",
        pronunciation: "아이 인조이 퍼즐 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Puzzle helps me relax and forget stress.",
        meaning: "퍼즐은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "퍼즐 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 183,
    word: "dance",
    meaning: "춤",
    pronunciation: "댄스",
    sentence: "I watch dance videos for fun.",
    sentenceMeaning: "저는 재미로 춤 영상을 봐요.",
    sentencePronunciation: "아이 와치 댄스 비디오즈 포 펀",
    category: "취미",
    examples: [
      {
        sentence: "I watch dance videos for fun, and I still do that.",
        meaning: "저는 재미로 춤 영상을 봐요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 와치 댄스 비디오즈 포 펀 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy dance in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 춤을 즐겨요.",
        pronunciation: "아이 인조이 댄스 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Dance helps me relax and forget stress.",
        meaning: "춤은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "댄스 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 184,
    word: "diary",
    meaning: "일기",
    pronunciation: "다이어리",
    sentence: "I write a short diary every night.",
    sentenceMeaning: "저는 매일 밤 짧은 일기를 써요.",
    sentencePronunciation: "아이 라이트 어 쇼트 다이어리 에브리 나이트",
    category: "취미",
    examples: [
      {
        sentence: "I write a short diary every night.",
        meaning: "저는 매일 밤 짧은 일기를 써요.",
        pronunciation: "아이 라이트 어 쇼트 다이어리 에브리 나이트"
      },
      {
        sentence: "I write in my diary before I sleep.",
        meaning: "저는 잠들기 전에 일기에 글을 써요.",
        pronunciation: "아이 라이트 인 마이 다이어리 비포 아이 슬립"
      },
      {
        sentence: "My diary helps me remember small daily moments.",
        meaning: "제 일기는 작은 일상 순간을 기억하게 도와줘요.",
        pronunciation: "마이 다이어리 헬프스 미 리멤버 스몰 데일리 모먼츠"
      }
    ]
  },
  {
    id: 185,
    word: "painting",
    meaning: "그림 그리기, 페인팅",
    pronunciation: "페인팅",
    sentence: "I tried painting at home last month.",
    sentenceMeaning: "저는 지난달 집에서 그림 그리기를 해 봤어요.",
    sentencePronunciation: "아이 트라이드 페인팅 앳 홈 라스트 먼스",
    category: "취미",
    examples: [
      {
        sentence: "I tried painting at home last month.",
        meaning: "저는 지난달 집에서 그림 그리기를 해 봤어요.",
        pronunciation: "아이 트라이드 페인팅 앳 홈 라스트 먼스"
      },
      {
        sentence: "I enjoy painting in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 그림 그리기를 즐겨요.",
        pronunciation: "아이 인조이 페인팅 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Painting helps me relax and forget stress.",
        meaning: "그림 그리기는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "페인팅 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 186,
    word: "camera",
    meaning: "카메라",
    pronunciation: "캐머라",
    sentence: "I carry my camera on trips.",
    sentenceMeaning: "저는 여행할 때 카메라를 가져가요.",
    sentencePronunciation: "아이 캐리 마이 캐머라 온 트립스",
    category: "취미",
    examples: [
      {
        sentence: "I carry my camera on trips, and I still do that.",
        meaning: "저는 여행할 때 카메라를 가져가요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 캐리 마이 캐머라 온 트립스 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I carry my camera when I travel outside town.",
        meaning: "저는 도시 밖으로 나갈 때 카메라를 챙겨요.",
        pronunciation: "아이 캐리 마이 캐머라 웬 아이 트래블 아웃사이드 타운"
      },
      {
        sentence: "My camera helps me save special travel moments.",
        meaning: "제 카메라는 특별한 여행 순간을 남기게 도와줘요.",
        pronunciation: "마이 캐머라 헬프스 미 세이브 스페셜 트래블 모먼츠"
      }
    ]
  },
  {
    id: 187,
    word: "baking",
    meaning: "굽기, 베이킹",
    pronunciation: "베이킹",
    sentence: "I enjoy baking cookies on weekends.",
    sentenceMeaning: "저는 주말에 쿠키 굽는 걸 즐겨요.",
    sentencePronunciation: "아이 인조이 베이킹 쿠키즈 온 위켄즈",
    category: "취미",
    examples: [
      {
        sentence: "I enjoy baking cookies on weekends, and I still do that.",
        meaning: "저는 주말에 쿠키 굽는 걸 즐겨요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 인조이 베이킹 쿠키즈 온 위켄즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy baking in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 굽기를 즐겨요.",
        pronunciation: "아이 인조이 베이킹 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Baking helps me relax and forget stress.",
        meaning: "굽기는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "베이킹 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 188,
    word: "knitting",
    meaning: "뜨개질",
    pronunciation: "니팅",
    sentence: "I learned knitting from my mother.",
    sentenceMeaning: "저는 어머니께 뜨개질을 배웠어요.",
    sentencePronunciation: "아이 런드 니팅 프럼 마이 마더",
    category: "취미",
    examples: [
      {
        sentence: "I learned knitting from my mother, and I still do that.",
        meaning: "저는 어머니께 뜨개질을 배웠어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 런드 니팅 프럼 마이 마더 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy knitting in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 뜨개질을 즐겨요.",
        pronunciation: "아이 인조이 니팅 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Knitting helps me relax and forget stress.",
        meaning: "뜨개질은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "니팅 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 189,
    word: "collection",
    meaning: "수집품, 컬렉션",
    pronunciation: "컬렉션",
    sentence: "I have a small postcard collection.",
    sentenceMeaning: "저는 작은 엽서 수집이 있어요.",
    sentencePronunciation: "아이 해브 어 스몰 포스트카드 컬렉션",
    category: "취미",
    examples: [
      {
        sentence: "I have a small postcard collection, and I still do that.",
        meaning: "저는 작은 엽서 수집이 있어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 해브 어 스몰 포스트카드 컬렉션 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy collection in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 수집품을 즐겨요.",
        pronunciation: "아이 인조이 컬렉션 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Collection helps me relax and forget stress.",
        meaning: "수집품은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "컬렉션 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 190,
    word: "comic",
    meaning: "만화",
    pronunciation: "코믹",
    sentence: "I still read comic books sometimes.",
    sentenceMeaning: "저는 아직도 가끔 만화책을 읽어요.",
    sentencePronunciation: "아이 스틸 리드 코믹 북스 섬타임즈",
    category: "취미",
    examples: [
      {
        sentence: "I still read comic books sometimes, and I still do that.",
        meaning: "저는 아직도 가끔 만화책을 읽어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 스틸 리드 코믹 북스 섬타임즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I read a comic when I want light fun.",
        meaning: "저는 가벼운 재미가 필요할 때 만화를 읽어요.",
        pronunciation: "아이 리드 어 코믹 웬 아이 원트 라이트 펀"
      },
      {
        sentence: "A comic is easy to enjoy before bed.",
        meaning: "만화는 자기 전에 편하게 즐기기 쉬워요.",
        pronunciation: "어 코믹 이즈 이지 투 인조이 비포 베드"
      }
    ]
  },
  {
    id: 191,
    word: "video",
    meaning: "영상",
    pronunciation: "비디오",
    sentence: "I make short videos as a hobby.",
    sentenceMeaning: "저는 취미로 짧은 영상을 만들어요.",
    sentencePronunciation: "아이 메이크 쇼트 비디오즈 애즈 어 하비",
    category: "취미",
    examples: [
      {
        sentence: "I make short videos as a hobby.",
        meaning: "저는 취미로 짧은 영상을 만들어요.",
        pronunciation: "아이 메이크 쇼트 비디오즈 애즈 어 하비"
      },
      {
        sentence: "I enjoy video in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 영상을 즐겨요.",
        pronunciation: "아이 인조이 비디오 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Video helps me relax and forget stress.",
        meaning: "영상은 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "비디오 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 192,
    word: "podcast",
    meaning: "팟캐스트",
    pronunciation: "팟캐스트",
    sentence: "I listen to a podcast while walking.",
    sentenceMeaning: "저는 걸으면서 팟캐스트를 들어요.",
    sentencePronunciation: "아이 리슨 투 어 팟캐스트 와일 워킹",
    category: "취미",
    examples: [
      {
        sentence: "I listen to a podcast while walking.",
        meaning: "저는 걸으면서 팟캐스트를 들어요.",
        pronunciation: "아이 리슨 투 어 팟캐스트 와일 워킹"
      },
      {
        sentence: "I enjoy podcast in my free time after work.",
        meaning: "저는 퇴근 후 자유 시간에 팟캐스트를 즐겨요.",
        pronunciation: "아이 인조이 팟캐스트 인 마이 프리 타임 애프터 워크"
      },
      {
        sentence: "Podcast helps me relax and forget stress.",
        meaning: "팟캐스트는 긴장을 풀고 스트레스를 잊게 도와줘요.",
        pronunciation: "팟캐스트 헬프스 미 릴랙스 앤 포겟 스트레스"
      }
    ]
  },
  {
    id: 193,
    word: "yoga",
    meaning: "요가",
    pronunciation: "요가",
    sentence: "I do yoga at home in the morning.",
    sentenceMeaning: "저는 아침에 집에서 요가를 해요.",
    sentencePronunciation: "아이 두 요가 앳 홈 인 더 모닝",
    category: "운동",
    examples: [
      {
        sentence: "I do yoga at home in the morning.",
        meaning: "저는 아침에 집에서 요가를 해요.",
        pronunciation: "아이 두 요가 앳 홈 인 더 모닝"
      },
      {
        sentence: "I enjoy yoga after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 요가를 즐겨요.",
        pronunciation: "아이 인조이 요가 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Yoga helps me feel lighter and more active.",
        meaning: "요가는 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "요가 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 194,
    word: "running",
    meaning: "달리기",
    pronunciation: "러닝",
    sentence: "I enjoy running in the park.",
    sentenceMeaning: "저는 공원에서 달리기를 즐겨요.",
    sentencePronunciation: "아이 인조이 러닝 인 더 파크",
    category: "운동",
    examples: [
      {
        sentence: "I enjoy running in the park, and I still do that.",
        meaning: "저는 공원에서 달리기를 즐겨요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 인조이 러닝 인 더 파크 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy running after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 달리기를 즐겨요.",
        pronunciation: "아이 인조이 러닝 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Running helps me feel lighter and more active.",
        meaning: "달리기는 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "러닝 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 195,
    word: "walking",
    meaning: "걷기",
    pronunciation: "워킹",
    sentence: "I do a lot of walking on weekends.",
    sentenceMeaning: "저는 주말에 많이 걸어요.",
    sentencePronunciation: "아이 두 어 랏 오브 워킹 온 위켄즈",
    category: "운동",
    examples: [
      {
        sentence: "I do a lot of walking on weekends.",
        meaning: "저는 주말에 많이 걸어요.",
        pronunciation: "아이 두 어 랏 오브 워킹 온 위켄즈"
      },
      {
        sentence: "I enjoy walking after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 걷기를 즐겨요.",
        pronunciation: "아이 인조이 워킹 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Walking helps me feel lighter and more active.",
        meaning: "걷기는 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "워킹 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 196,
    word: "stretching",
    meaning: "스트레칭",
    pronunciation: "스트레칭",
    sentence: "I start with stretching before exercise.",
    sentenceMeaning: "저는 운동 전에 스트레칭부터 해요.",
    sentencePronunciation: "아이 스타트 위드 스트레칭 비포 엑서사이즈",
    category: "운동",
    examples: [
      {
        sentence: "I start with stretching before exercise, and I still do that.",
        meaning: "저는 운동 전에 스트레칭부터 해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 스타트 위드 스트레칭 비포 엑서사이즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy stretching after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 스트레칭을 즐겨요.",
        pronunciation: "아이 인조이 스트레칭 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Stretching helps me feel lighter and more active.",
        meaning: "스트레칭은 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "스트레칭 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 197,
    word: "soccer",
    meaning: "축구",
    pronunciation: "사커",
    sentence: "I played soccer with my friends in school.",
    sentenceMeaning: "저는 학교 다닐 때 친구들과 축구했어요.",
    sentencePronunciation: "아이 플레이드 사커 위드 마이 프렌즈 인 스쿨",
    category: "운동",
    examples: [
      {
        sentence: "I played soccer with my friends in school.",
        meaning: "저는 학교 다닐 때 친구들과 축구했어요.",
        pronunciation: "아이 플레이드 사커 위드 마이 프렌즈 인 스쿨"
      },
      {
        sentence: "I enjoy soccer after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 축구를 즐겨요.",
        pronunciation: "아이 인조이 사커 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Soccer helps me feel lighter and more active.",
        meaning: "축구는 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "사커 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 198,
    word: "baseball",
    meaning: "야구",
    pronunciation: "베이스볼",
    sentence: "I sometimes watch baseball with my father.",
    sentenceMeaning: "저는 가끔 아버지와 야구를 봐요.",
    sentencePronunciation: "아이 섬타임즈 와치 베이스볼 위드 마이 파더",
    category: "운동",
    examples: [
      {
        sentence: "I sometimes watch baseball with my father.",
        meaning: "저는 가끔 아버지와 야구를 봐요.",
        pronunciation: "아이 섬타임즈 와치 베이스볼 위드 마이 파더"
      },
      {
        sentence: "I enjoy baseball after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 야구를 즐겨요.",
        pronunciation: "아이 인조이 베이스볼 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Baseball helps me feel lighter and more active.",
        meaning: "야구는 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "베이스볼 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 199,
    word: "tennis",
    meaning: "테니스",
    pronunciation: "테니스",
    sentence: "I want to learn tennis this year.",
    sentenceMeaning: "저는 올해 테니스를 배우고 싶어요.",
    sentencePronunciation: "아이 원트 투 런 테니스 디스 이어",
    category: "운동",
    examples: [
      {
        sentence: "I want to learn tennis this year.",
        meaning: "저는 올해 테니스를 배우고 싶어요.",
        pronunciation: "아이 원트 투 런 테니스 디스 이어"
      },
      {
        sentence: "I enjoy tennis after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 테니스를 즐겨요.",
        pronunciation: "아이 인조이 테니스 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Tennis helps me feel lighter and more active.",
        meaning: "테니스는 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "테니스 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 200,
    word: "badminton",
    meaning: "배드민턴",
    pronunciation: "배드민턴",
    sentence: "I play badminton at a nearby gym.",
    sentenceMeaning: "저는 근처 체육관에서 배드민턴을 쳐요.",
    sentencePronunciation: "아이 플레이 배드민턴 앳 어 니어바이 짐",
    category: "운동",
    examples: [
      {
        sentence: "I play badminton at a nearby gym.",
        meaning: "저는 근처 체육관에서 배드민턴을 쳐요.",
        pronunciation: "아이 플레이 배드민턴 앳 어 니어바이 짐"
      },
      {
        sentence: "I enjoy badminton after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 배드민턴을 즐겨요.",
        pronunciation: "아이 인조이 배드민턴 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Badminton helps me feel lighter and more active.",
        meaning: "배드민턴은 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "배드민턴 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 201,
    word: "bicycle",
    meaning: "자전거",
    pronunciation: "바이시클",
    sentence: "I ride my bicycle along the river.",
    sentenceMeaning: "저는 강을 따라 자전거를 타요.",
    sentencePronunciation: "아이 라이드 마이 바이시클 얼롱 더 리버",
    category: "운동",
    examples: [
      {
        sentence: "I ride my bicycle along the river.",
        meaning: "저는 강을 따라 자전거를 타요.",
        pronunciation: "아이 라이드 마이 바이시클 얼롱 더 리버"
      },
      {
        sentence: "I ride my bicycle when the weather feels nice.",
        meaning: "저는 날씨가 좋으면 자전거를 타요.",
        pronunciation: "아이 라이드 마이 바이시클 웬 더 웨더 필즈 나이스"
      },
      {
        sentence: "My bicycle helps me enjoy short trips outside.",
        meaning: "제 자전거는 밖에서 짧은 이동을 즐기게 해줘요.",
        pronunciation: "마이 바이시클 헬프스 미 인조이 쇼트 트립스 아웃사이드"
      }
    ]
  },
  {
    id: 202,
    word: "hiking",
    meaning: "등산, 하이킹",
    pronunciation: "하이킹",
    sentence: "I go hiking in the fall.",
    sentenceMeaning: "저는 가을에 등산을 가요.",
    sentencePronunciation: "아이 고 하이킹 인 더 폴",
    category: "운동",
    examples: [
      {
        sentence: "I go hiking in the fall, and I still do that.",
        meaning: "저는 가을에 등산을 가요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 고 하이킹 인 더 폴 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy hiking after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 등산을 즐겨요.",
        pronunciation: "아이 인조이 하이킹 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Hiking helps me feel lighter and more active.",
        meaning: "등산은 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "하이킹 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 203,
    word: "trainer",
    meaning: "트레이너",
    pronunciation: "트레이너",
    sentence: "My trainer showed me a simple routine.",
    sentenceMeaning: "제 트레이너는 제게 간단한 루틴을 알려 줬어요.",
    sentencePronunciation: "마이 트레이너 쇼드 미 어 심플 루틴",
    category: "운동",
    examples: [
      {
        sentence: "My trainer showed me a simple routine.",
        meaning: "제 트레이너는 제게 간단한 루틴을 알려 줬어요.",
        pronunciation: "마이 트레이너 쇼드 미 어 심플 루틴"
      },
      {
        sentence: "I ask my trainer when I need simple advice.",
        meaning: "저는 간단한 조언이 필요할 때 트레이너에게 물어봐요.",
        pronunciation: "아이 애스크 마이 트레이너 웬 아이 니드 심플 어드바이스"
      },
      {
        sentence: "A good trainer helps me use my time well.",
        meaning: "좋은 트레이너는 시간을 잘 쓰게 도와줘요.",
        pronunciation: "어 굿 트레이너 헬프스 미 유즈 마이 타임 웰"
      }
    ]
  },
  {
    id: 204,
    word: "locker",
    meaning: "사물함",
    pronunciation: "로커",
    sentence: "I put my bag in a locker at the gym.",
    sentenceMeaning: "저는 체육관 사물함에 가방을 넣어요.",
    sentencePronunciation: "아이 풋 마이 백 인 어 로커 앳 더 짐",
    category: "운동",
    examples: [
      {
        sentence: "I put my bag in a locker at the gym.",
        meaning: "저는 체육관 사물함에 가방을 넣어요.",
        pronunciation: "아이 풋 마이 백 인 어 로커 앳 더 짐"
      },
      {
        sentence: "I keep my towel in the locker at the gym.",
        meaning: "저는 헬스장 락커에 수건을 넣어 둬요.",
        pronunciation: "아이 킵 마이 타월 인 더 로커 앳 더 짐"
      },
      {
        sentence: "The locker keeps my things safe during exercise.",
        meaning: "락커는 운동하는 동안 제 물건을 안전하게 보관해 줘요.",
        pronunciation: "더 로커 킵스 마이 띵즈 세이프 듀링 엑서사이즈"
      }
    ]
  },
  {
    id: 205,
    word: "towel",
    meaning: "수건",
    pronunciation: "타월",
    sentence: "I always bring a towel to the gym.",
    sentenceMeaning: "저는 항상 체육관에 수건을 가져가요.",
    sentencePronunciation: "아이 올웨이즈 브링 어 타월 투 더 짐",
    category: "운동",
    examples: [
      {
        sentence: "I always bring a towel to the gym.",
        meaning: "저는 항상 체육관에 수건을 가져가요.",
        pronunciation: "아이 올웨이즈 브링 어 타월 투 더 짐"
      },
      {
        sentence: "I bring a towel when I work out indoors.",
        meaning: "저는 실내 운동할 때 수건을 가져가요.",
        pronunciation: "아이 브링 어 타월 웬 아이 워크 아웃 인도어즈"
      },
      {
        sentence: "A clean towel feels nice after hard exercise.",
        meaning: "깨끗한 수건은 힘든 운동 뒤에 기분 좋게 느껴져요.",
        pronunciation: "어 클린 타월 필즈 나이스 애프터 하드 엑서사이즈"
      }
    ]
  },
  {
    id: 206,
    word: "match",
    meaning: "경기",
    pronunciation: "매치",
    sentence: "I watched a soccer match last night.",
    sentenceMeaning: "저는 어젯밤 축구 경기를 봤어요.",
    sentencePronunciation: "아이 와치드 어 사커 매치 라스트 나이트",
    category: "운동",
    examples: [
      {
        sentence: "I watched a soccer match last night.",
        meaning: "저는 어젯밤 축구 경기를 봤어요.",
        pronunciation: "아이 와치드 어 사커 매치 라스트 나이트"
      },
      {
        sentence: "I watch a match with my friends on weekends.",
        meaning: "저는 주말에 친구들과 경기를 봐요.",
        pronunciation: "아이 와치 어 매치 위드 마이 프렌즈 온 위켄즈"
      },
      {
        sentence: "A close match keeps me focused until the end.",
        meaning: "팽팽한 경기는 끝까지 집중하게 해줘요.",
        pronunciation: "어 클로즈 매치 킵스 미 포커스트 언틸 더 엔드"
      }
    ]
  },
  {
    id: 207,
    word: "score",
    meaning: "점수",
    pronunciation: "스코어",
    sentence: "I check the score after the game.",
    sentenceMeaning: "저는 경기 후에 점수를 확인해요.",
    sentencePronunciation: "아이 체크 더 스코어 애프터 더 게임",
    category: "운동",
    examples: [
      {
        sentence: "I check the score after the game.",
        meaning: "저는 경기 후에 점수를 확인해요.",
        pronunciation: "아이 체크 더 스코어 애프터 더 게임"
      },
      {
        sentence: "I check the score during the game sometimes.",
        meaning: "저는 경기 중에 가끔 점수를 확인해요.",
        pronunciation: "아이 체크 더 스코어 듀링 더 게임 섬타임즈"
      },
      {
        sentence: "The score changes quickly in exciting matches.",
        meaning: "점수는 흥미로운 경기에서 빨리 바뀌어요.",
        pronunciation: "더 스코어 체인지즈 퀵클리 인 익사이팅 매치즈"
      }
    ]
  },
  {
    id: 208,
    word: "practice",
    meaning: "연습",
    pronunciation: "프랙티스",
    sentence: "I need more practice to get better.",
    sentenceMeaning: "저는 더 잘하려면 연습이 더 필요해요.",
    sentencePronunciation: "아이 니드 모어 프랙티스 투 겟 베터",
    category: "운동",
    examples: [
      {
        sentence: "I need more practice to get better.",
        meaning: "저는 더 잘하려면 연습이 더 필요해요.",
        pronunciation: "아이 니드 모어 프랙티스 투 겟 베터"
      },
      {
        sentence: "I enjoy practice after work a few times weekly.",
        meaning: "저는 일주일에 몇 번 퇴근 후 연습을 즐겨요.",
        pronunciation: "아이 인조이 프랙티스 애프터 워크 어 퓨 타임즈 위클리"
      },
      {
        sentence: "Practice helps me feel lighter and more active.",
        meaning: "연습은 저를 더 가볍고 활기차게 느끼게 해줘요.",
        pronunciation: "프랙티스 헬프스 미 필 라이터 앤 모어 액티브"
      }
    ]
  },
  {
    id: 209,
    word: "muscle",
    meaning: "근육",
    pronunciation: "머슬",
    sentence: "I do simple exercise to build muscle.",
    sentenceMeaning: "저는 근육을 기르려고 간단한 운동을 해요.",
    sentencePronunciation: "아이 두 심플 엑서사이즈 투 빌드 머슬",
    category: "운동",
    examples: [
      {
        sentence: "I do simple exercise to build muscle.",
        meaning: "저는 근육을 기르려고 간단한 운동을 해요.",
        pronunciation: "아이 두 심플 엑서사이즈 투 빌드 머슬"
      },
      {
        sentence: "I stretch when my muscle feels tight after exercise.",
        meaning: "저는 운동 뒤에 근육이 뻣뻣하면 스트레칭해요.",
        pronunciation: "아이 스트레치 웬 마이 머슬 필즈 타이트 애프터 엑서사이즈"
      },
      {
        sentence: "Strong muscle helps me move more easily.",
        meaning: "강한 근육은 더 쉽게 움직이게 도와줘요.",
        pronunciation: "스트롱 머슬 헬프스 미 무브 모어 이지리"
      }
    ]
  },
  {
    id: 210,
    word: "fitness",
    meaning: "체력 관리, 피트니스",
    pronunciation: "피트니스",
    sentence: "Fitness is important in my daily life.",
    sentenceMeaning: "체력 관리는 제 일상에서 중요해요.",
    sentencePronunciation: "피트니스 이즈 임포턴트 인 마이 데일리 라이프",
    category: "운동",
    examples: [
      {
        sentence: "Fitness is important in my daily life.",
        meaning: "체력 관리는 제 일상에서 중요해요.",
        pronunciation: "피트니스 이즈 임포턴트 인 마이 데일리 라이프"
      },
      {
        sentence: "I care more about fitness than losing weight.",
        meaning: "저는 체중 감량보다 체력을 더 중요하게 생각해요.",
        pronunciation: "아이 케어 모어 어바웃 피트니스 댄 루징 웨이트"
      },
      {
        sentence: "Good fitness helps me feel active all week.",
        meaning: "좋은 체력은 일주일 내내 활기차게 느끼게 해줘요.",
        pronunciation: "굿 피트니스 헬프스 미 필 액티브 올 위크"
      }
    ]
  },
  {
    id: 211,
    word: "alarm",
    meaning: "알람",
    pronunciation: "얼람",
    sentence: "My alarm rings at seven every morning.",
    sentenceMeaning: "제 알람은 매일 아침 7시에 울려요.",
    sentencePronunciation: "마이 얼람 링즈 앳 세븐 에브리 모닝",
    category: "일상 루틴",
    examples: [
      {
        sentence: "My alarm rings at seven every morning.",
        meaning: "제 알람은 매일 아침 7시에 울려요.",
        pronunciation: "마이 얼람 링즈 앳 세븐 에브리 모닝"
      },
      {
        sentence: "I set my alarm before I go to bed.",
        meaning: "저는 잠자리에 들기 전에 알람을 맞춰요.",
        pronunciation: "아이 셋 마이 얼람 비포 아이 고 투 베드"
      },
      {
        sentence: "My alarm wakes me up at the same time.",
        meaning: "제 알람은 저를 항상 같은 시간에 깨워요.",
        pronunciation: "마이 얼람 웨익스 미 업 앳 더 세임 타임"
      }
    ]
  },
  {
    id: 212,
    word: "shower",
    meaning: "샤워",
    pronunciation: "샤워",
    sentence: "I take a quick shower before breakfast.",
    sentenceMeaning: "저는 아침 식사 전에 빨리 샤워해요.",
    sentencePronunciation: "아이 테이크 어 퀵 샤워 비포 브렉퍼스트",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I take a quick shower before breakfast.",
        meaning: "저는 아침 식사 전에 빨리 샤워해요.",
        pronunciation: "아이 테이크 어 퀵 샤워 비포 브렉퍼스트"
      },
      {
        sentence: "I take a quick shower before I leave home.",
        meaning: "저는 집을 나가기 전에 빨리 샤워해요.",
        pronunciation: "아이 테이크 어 퀵 샤워 비포 아이 리브 홈"
      },
      {
        sentence: "A warm shower helps me start the day well.",
        meaning: "따뜻한 샤워는 하루를 잘 시작하게 도와줘요.",
        pronunciation: "어 웜 샤워 헬프스 미 스타트 더 데이 웰"
      }
    ]
  },
  {
    id: 213,
    word: "soap",
    meaning: "비누",
    pronunciation: "솝",
    sentence: "I like soap with a fresh smell.",
    sentenceMeaning: "저는 상쾌한 향의 비누를 좋아해요.",
    sentencePronunciation: "아이 라이크 솝 위드 어 프레시 스멜",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I like soap with a fresh smell.",
        meaning: "저는 상쾌한 향의 비누를 좋아해요.",
        pronunciation: "아이 라이크 솝 위드 어 프레시 스멜"
      },
      {
        sentence: "I use my soap in the bathroom every morning.",
        meaning: "저는 매일 아침 욕실에서 제 비누를 사용해요.",
        pronunciation: "아이 유즈 마이 솝 인 더 배스룸 에브리 모닝"
      },
      {
        sentence: "My soap is part of my morning routine.",
        meaning: "비누는 제 아침 루틴의 일부예요.",
        pronunciation: "마이 솝 이즈 파트 오브 마이 모닝 루틴"
      }
    ]
  },
  {
    id: 214,
    word: "toothbrush",
    meaning: "칫솔",
    pronunciation: "투스브러시",
    sentence: "I keep my toothbrush in a cup.",
    sentenceMeaning: "저는 칫솔을 컵에 넣어 둬요.",
    sentencePronunciation: "아이 킵 마이 투스브러시 인 어 컵",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I keep my toothbrush in a cup.",
        meaning: "저는 칫솔을 컵에 넣어 둬요.",
        pronunciation: "아이 킵 마이 투스브러시 인 어 컵"
      },
      {
        sentence: "I use my toothbrush in the bathroom every morning.",
        meaning: "저는 매일 아침 욕실에서 제 칫솔을 사용해요.",
        pronunciation: "아이 유즈 마이 투스브러시 인 더 배스룸 에브리 모닝"
      },
      {
        sentence: "My toothbrush is part of my morning routine.",
        meaning: "칫솔은 제 아침 루틴의 일부예요.",
        pronunciation: "마이 투스브러시 이즈 파트 오브 마이 모닝 루틴"
      }
    ]
  },
  {
    id: 215,
    word: "toothpaste",
    meaning: "치약",
    pronunciation: "투스페이스트",
    sentence: "I buy toothpaste at the store near my house.",
    sentenceMeaning: "저는 집 근처 가게에서 치약을 사요.",
    sentencePronunciation: "아이 바이 투스페이스트 앳 더 스토어 니어 마이 하우스",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I buy toothpaste at the store near my house.",
        meaning: "저는 집 근처 가게에서 치약을 사요.",
        pronunciation: "아이 바이 투스페이스트 앳 더 스토어 니어 마이 하우스"
      },
      {
        sentence: "I use my toothpaste in the bathroom every morning.",
        meaning: "저는 매일 아침 욕실에서 제 치약을 사용해요.",
        pronunciation: "아이 유즈 마이 투스페이스트 인 더 배스룸 에브리 모닝"
      },
      {
        sentence: "My toothpaste is part of my morning routine.",
        meaning: "치약은 제 아침 루틴의 일부예요.",
        pronunciation: "마이 투스페이스트 이즈 파트 오브 마이 모닝 루틴"
      }
    ]
  },
  {
    id: 216,
    word: "mirror",
    meaning: "거울",
    pronunciation: "미러",
    sentence: "I look in the mirror before I leave home.",
    sentenceMeaning: "저는 집을 나서기 전에 거울을 봐요.",
    sentencePronunciation: "아이 룩 인 더 미러 비포 아이 리브 홈",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I look in the mirror before I leave home.",
        meaning: "저는 집을 나서기 전에 거울을 봐요.",
        pronunciation: "아이 룩 인 더 미러 비포 아이 리브 홈"
      },
      {
        sentence: "I use my mirror in the bathroom every morning.",
        meaning: "저는 매일 아침 욕실에서 제 거울을 사용해요.",
        pronunciation: "아이 유즈 마이 미러 인 더 배스룸 에브리 모닝"
      },
      {
        sentence: "My mirror is part of my morning routine.",
        meaning: "거울은 제 아침 루틴의 일부예요.",
        pronunciation: "마이 미러 이즈 파트 오브 마이 모닝 루틴"
      }
    ]
  },
  {
    id: 217,
    word: "clothes",
    meaning: "옷",
    pronunciation: "클로즈",
    sentence: "I choose my clothes the night before.",
    sentenceMeaning: "저는 전날 밤에 입을 옷을 골라요.",
    sentencePronunciation: "아이 추즈 마이 클로즈 더 나이트 비포",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I choose my clothes the night before.",
        meaning: "저는 전날 밤에 입을 옷을 골라요.",
        pronunciation: "아이 추즈 마이 클로즈 더 나이트 비포"
      },
      {
        sentence: "I choose clean clothes before I leave for work.",
        meaning: "저는 출근하기 전에 깨끗한 옷을 골라요.",
        pronunciation: "아이 추즈 클린 클로즈 비포 아이 리브 포 워크"
      },
      {
        sentence: "My clothes feel light and comfortable all day.",
        meaning: "제 옷은 하루 종일 가볍고 편하게 느껴져요.",
        pronunciation: "마이 클로즈 필 라이트 앤 컴포터블 올 데이"
      }
    ]
  },
  {
    id: 218,
    word: "laundry",
    meaning: "빨래",
    pronunciation: "런드리",
    sentence: "I do laundry on Sunday mornings.",
    sentenceMeaning: "저는 일요일 아침에 빨래를 해요.",
    sentencePronunciation: "아이 두 런드리 온 선데이 모닝즈",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I do laundry on Sunday mornings, and I still do that.",
        meaning: "저는 일요일 아침에 빨래를 해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 두 런드리 온 선데이 모닝즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I do laundry on quiet weekend mornings at home.",
        meaning: "저는 조용한 주말 아침에 집에서 빨래해요.",
        pronunciation: "아이 두 런드리 온 콰이어트 위켄드 모닝즈 앳 홈"
      },
      {
        sentence: "Fresh laundry makes my room smell clean again.",
        meaning: "갓 한 빨래는 제 방을 다시 깨끗하게 느끼게 해요.",
        pronunciation: "프레시 런드리 메익스 마이 룸 스멜 클린 어게인"
      }
    ]
  },
  {
    id: 219,
    word: "calendar",
    meaning: "달력",
    pronunciation: "캘린더",
    sentence: "I write my plans on a calendar.",
    sentenceMeaning: "저는 달력에 계획을 적어요.",
    sentencePronunciation: "아이 라이트 마이 플랜즈 온 어 캘린더",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I write my plans on a calendar.",
        meaning: "저는 달력에 계획을 적어요.",
        pronunciation: "아이 라이트 마이 플랜즈 온 어 캘린더"
      },
      {
        sentence: "I use my calendar at home and at work.",
        meaning: "저는 집과 직장에서 제 달력을 사용해요.",
        pronunciation: "아이 유즈 마이 캘린더 앳 홈 앤 앳 워크"
      },
      {
        sentence: "My calendar helps me manage my busy day.",
        meaning: "제 달력은 바쁜 하루를 관리하는 데 도움이 돼요.",
        pronunciation: "마이 캘린더 헬프스 미 매니지 마이 비지 데이"
      }
    ]
  },
  {
    id: 220,
    word: "notebook",
    meaning: "공책, 노트",
    pronunciation: "노트북",
    sentence: "I carry a notebook in my bag.",
    sentenceMeaning: "저는 가방에 노트를 넣고 다녀요.",
    sentencePronunciation: "아이 캐리 어 노트북 인 마이 백",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I carry a notebook in my bag.",
        meaning: "저는 가방에 노트를 넣고 다녀요.",
        pronunciation: "아이 캐리 어 노트북 인 마이 백"
      },
      {
        sentence: "I use my notebook at home and at work.",
        meaning: "저는 집과 직장에서 제 공책을 사용해요.",
        pronunciation: "아이 유즈 마이 노트북 앳 홈 앤 앳 워크"
      },
      {
        sentence: "My notebook helps me manage my busy day.",
        meaning: "제 공책은 바쁜 하루를 관리하는 데 도움이 돼요.",
        pronunciation: "마이 노트북 헬프스 미 매니지 마이 비지 데이"
      }
    ]
  },
  {
    id: 221,
    word: "phone",
    meaning: "휴대폰",
    pronunciation: "폰",
    sentence: "I check my phone after I wake up.",
    sentenceMeaning: "저는 일어나고 나서 휴대폰을 확인해요.",
    sentencePronunciation: "아이 체크 마이 폰 애프터 아이 웨이크 업",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I check my phone after I wake up.",
        meaning: "저는 일어나고 나서 휴대폰을 확인해요.",
        pronunciation: "아이 체크 마이 폰 애프터 아이 웨이크 업"
      },
      {
        sentence: "I use my phone at home and at work.",
        meaning: "저는 집과 직장에서 제 휴대폰을 사용해요.",
        pronunciation: "아이 유즈 마이 폰 앳 홈 앤 앳 워크"
      },
      {
        sentence: "My phone helps me manage my busy day.",
        meaning: "제 휴대폰은 바쁜 하루를 관리하는 데 도움이 돼요.",
        pronunciation: "마이 폰 헬프스 미 매니지 마이 비지 데이"
      }
    ]
  },
  {
    id: 222,
    word: "charger",
    meaning: "충전기",
    pronunciation: "차저",
    sentence: "I keep my charger on my desk.",
    sentenceMeaning: "저는 충전기를 책상 위에 둬요.",
    sentencePronunciation: "아이 킵 마이 차저 온 마이 데스크",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I keep my charger on my desk.",
        meaning: "저는 충전기를 책상 위에 둬요.",
        pronunciation: "아이 킵 마이 차저 온 마이 데스크"
      },
      {
        sentence: "I keep my charger in my bag every day.",
        meaning: "저는 매일 충전기를 가방에 넣고 다녀요.",
        pronunciation: "아이 킵 마이 차저 인 마이 백 에브리 데이"
      },
      {
        sentence: "My charger helps me use my phone longer.",
        meaning: "제 충전기는 휴대폰을 더 오래 쓰게 도와줘요.",
        pronunciation: "마이 차저 헬프스 미 유즈 마이 폰 롱거"
      }
    ]
  },
  {
    id: 223,
    word: "clock",
    meaning: "시계",
    pronunciation: "클락",
    sentence: "I look at the clock many times in the morning.",
    sentenceMeaning: "저는 아침에 시계를 여러 번 봐요.",
    sentencePronunciation: "아이 룩 앳 더 클락 매니 타임즈 인 더 모닝",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I look at the clock many times in the morning.",
        meaning: "저는 아침에 시계를 여러 번 봐요.",
        pronunciation: "아이 룩 앳 더 클락 매니 타임즈 인 더 모닝"
      },
      {
        sentence: "I check the clock when I get ready for work.",
        meaning: "저는 출근 준비를 할 때 시계를 확인해요.",
        pronunciation: "아이 체크 더 클락 웬 아이 겟 레디 포 워크"
      },
      {
        sentence: "The clock is easy to see from my bed.",
        meaning: "그 시계는 제 침대에서 보기 쉬워요.",
        pronunciation: "더 클락 이즈 이지 투 시 프럼 마이 베드"
      }
    ]
  },
  {
    id: 224,
    word: "sleep",
    meaning: "잠",
    pronunciation: "슬립",
    sentence: "I need enough sleep to feel good.",
    sentenceMeaning: "저는 컨디션이 좋으려면 충분한 잠이 필요해요.",
    sentencePronunciation: "아이 니드 이너프 슬립 투 필 굿",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I need enough sleep to feel good.",
        meaning: "저는 컨디션이 좋으려면 충분한 잠이 필요해요.",
        pronunciation: "아이 니드 이너프 슬립 투 필 굿"
      },
      {
        sentence: "Good sleep helps me feel fresh the next day.",
        meaning: "좋은 수면은 다음 날 상쾌하게 느끼게 해줘요.",
        pronunciation: "굿 슬립 헬프스 미 필 프레시 더 넥스트 데이"
      },
      {
        sentence: "I need enough sleep during busy work weeks.",
        meaning: "저는 바쁜 근무 주간에 충분한 수면이 필요해요.",
        pronunciation: "아이 니드 이너프 슬립 듀링 비지 워크 위크스"
      }
    ]
  },
  {
    id: 225,
    word: "bedtime",
    meaning: "취침 시간",
    pronunciation: "베드타임",
    sentence: "My bedtime is usually around midnight.",
    sentenceMeaning: "제 취침 시간은 보통 자정쯤이에요.",
    sentencePronunciation: "마이 베드타임 이즈 유주얼리 어라운드 미드나이트",
    category: "일상 루틴",
    examples: [
      {
        sentence: "My bedtime is usually around midnight, and I still like it.",
        meaning: "제 취침 시간은 보통 자정쯤이에요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 베드타임 이즈 유주얼리 어라운드 미드나이트 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "My bedtime is usually the same on weekdays.",
        meaning: "제 취침 시간은 평일에 보통 같아요.",
        pronunciation: "마이 베드타임 이즈 유주얼리 더 세임 온 위크데이즈"
      },
      {
        sentence: "A regular bedtime helps me wake up early.",
        meaning: "규칙적인 취침 시간은 일찍 일어나게 도와줘요.",
        pronunciation: "어 레귤러 베드타임 헬프스 미 웨이크 업 얼리"
      }
    ]
  },
  {
    id: 226,
    word: "nap",
    meaning: "낮잠",
    pronunciation: "냅",
    sentence: "I take a short nap on weekends.",
    sentenceMeaning: "저는 주말에 짧게 낮잠을 자요.",
    sentencePronunciation: "아이 테이크 어 쇼트 냅 온 위켄즈",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I take a short nap on weekends.",
        meaning: "저는 주말에 짧게 낮잠을 자요.",
        pronunciation: "아이 테이크 어 쇼트 냅 온 위켄즈"
      },
      {
        sentence: "I take a short nap when I feel tired.",
        meaning: "저는 피곤할 때 짧게 낮잠을 가져요.",
        pronunciation: "아이 테이크 어 쇼트 냅 웬 아이 필 타이어드"
      },
      {
        sentence: "A little nap helps me feel better again.",
        meaning: "조금의 낮잠은 저를 다시 더 편하게 해줘요.",
        pronunciation: "어 리틀 냅 헬프스 미 필 베러 어게인"
      }
    ]
  },
  {
    id: 227,
    word: "habit",
    meaning: "습관",
    pronunciation: "해빗",
    sentence: "Drinking water is a healthy habit.",
    sentenceMeaning: "물 마시기는 건강한 습관이에요.",
    sentencePronunciation: "드링킹 워터 이즈 어 헬시 해빗",
    category: "일상 루틴",
    examples: [
      {
        sentence: "Drinking water is a healthy habit, and I still like it.",
        meaning: "물 마시기는 건강한 습관이에요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "드링킹 워터 이즈 어 헬시 해빗 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I keep a simple habit even on busy weekdays.",
        meaning: "저는 바쁜 평일에도 간단한 습관을 유지해요.",
        pronunciation: "아이 킵 어 심플 해빗 이븐 온 비지 위크데이즈"
      },
      {
        sentence: "My habit helps me manage my day better.",
        meaning: "제 습관은 하루를 더 잘 보내게 도와줘요.",
        pronunciation: "마이 해빗 헬프스 미 매니지 마이 데이 베러"
      }
    ]
  },
  {
    id: 228,
    word: "cleaning",
    meaning: "청소",
    pronunciation: "클리닝",
    sentence: "I do some cleaning after breakfast.",
    sentenceMeaning: "저는 아침 식사 후에 조금 청소해요.",
    sentencePronunciation: "아이 두 섬 클리닝 애프터 브렉퍼스트",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I do some cleaning after breakfast, and I still do that.",
        meaning: "저는 아침 식사 후에 조금 청소해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 두 섬 클리닝 애프터 브렉퍼스트 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I do some cleaning after breakfast on weekends.",
        meaning: "저는 주말에 아침을 먹은 뒤 청소를 조금 해요.",
        pronunciation: "아이 두 섬 클리닝 애프터 브렉퍼스트 온 위켄즈"
      },
      {
        sentence: "Cleaning helps my home feel fresh and neat.",
        meaning: "청소는 집을 상쾌하고 깔끔하게 느끼게 해줘요.",
        pronunciation: "클리닝 헬프스 마이 홈 필 프레시 앤 니트"
      }
    ]
  },
  {
    id: 229,
    word: "rest",
    meaning: "휴식",
    pronunciation: "레스트",
    sentence: "I take a good rest after work.",
    sentenceMeaning: "저는 퇴근 후에 푹 쉬어요.",
    sentencePronunciation: "아이 테이크 어 굿 레스트 애프터 워크",
    category: "일상 루틴",
    examples: [
      {
        sentence: "I take a good rest after work.",
        meaning: "저는 퇴근 후에 푹 쉬어요.",
        pronunciation: "아이 테이크 어 굿 레스트 애프터 워크"
      },
      {
        sentence: "I take a short rest when I feel tired.",
        meaning: "저는 피곤할 때 짧게 휴식을 가져요.",
        pronunciation: "아이 테이크 어 쇼트 레스트 웬 아이 필 타이어드"
      },
      {
        sentence: "A little rest helps me feel better again.",
        meaning: "조금의 휴식은 저를 다시 더 편하게 해줘요.",
        pronunciation: "어 리틀 레스트 헬프스 미 필 베러 어게인"
      }
    ]
  },
  {
    id: 230,
    word: "taxi",
    meaning: "택시",
    pronunciation: "택시",
    sentence: "I take a taxi when I am in a hurry.",
    sentenceMeaning: "저는 급할 때 택시를 타요.",
    sentencePronunciation: "아이 테이크 어 택시 웬 아이 앰 인 어 허리",
    category: "교통",
    examples: [
      {
        sentence: "I take a taxi when I am in a hurry.",
        meaning: "저는 급할 때 택시를 타요.",
        pronunciation: "아이 테이크 어 택시 웬 아이 앰 인 어 허리"
      },
      {
        sentence: "I use the taxi when I do not drive.",
        meaning: "저는 운전하지 않을 때 택시를 이용해요.",
        pronunciation: "아이 유즈 더 택시 웬 아이 두 낫 드라이브"
      },
      {
        sentence: "The taxi is useful on busy weekday mornings.",
        meaning: "택시는 바쁜 평일 아침에 유용해요.",
        pronunciation: "더 택시 이즈 유스풀 온 비지 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 231,
    word: "car",
    meaning: "자동차",
    pronunciation: "카",
    sentence: "I use my car for long trips.",
    sentenceMeaning: "저는 긴 여행에 제 차를 써요.",
    sentencePronunciation: "아이 유즈 마이 카 포 롱 트립스",
    category: "교통",
    examples: [
      {
        sentence: "I use my car for long trips.",
        meaning: "저는 긴 여행에 제 차를 써요.",
        pronunciation: "아이 유즈 마이 카 포 롱 트립스"
      },
      {
        sentence: "I use the car when I do not drive.",
        meaning: "저는 운전하지 않을 때 자동차를 이용해요.",
        pronunciation: "아이 유즈 더 카 웬 아이 두 낫 드라이브"
      },
      {
        sentence: "The car is useful on busy weekday mornings.",
        meaning: "자동차는 바쁜 평일 아침에 유용해요.",
        pronunciation: "더 카 이즈 유스풀 온 비지 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 232,
    word: "train",
    meaning: "기차",
    pronunciation: "트레인",
    sentence: "I take the train to visit my hometown.",
    sentenceMeaning: "저는 고향에 갈 때 기차를 타요.",
    sentencePronunciation: "아이 테이크 더 트레인 투 비지트 마이 홈타운",
    category: "교통",
    examples: [
      {
        sentence: "I take the train to visit my hometown.",
        meaning: "저는 고향에 갈 때 기차를 타요.",
        pronunciation: "아이 테이크 더 트레인 투 비지트 마이 홈타운"
      },
      {
        sentence: "I use the train when I do not drive.",
        meaning: "저는 운전하지 않을 때 기차를 이용해요.",
        pronunciation: "아이 유즈 더 트레인 웬 아이 두 낫 드라이브"
      },
      {
        sentence: "The train is useful on busy weekday mornings.",
        meaning: "기차는 바쁜 평일 아침에 유용해요.",
        pronunciation: "더 트레인 이즈 유스풀 온 비지 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 233,
    word: "station",
    meaning: "역",
    pronunciation: "스테이션",
    sentence: "The station is close to my office.",
    sentenceMeaning: "역은 제 사무실에서 가까워요.",
    sentencePronunciation: "더 스테이션 이즈 클로스 투 마이 오피스",
    category: "교통",
    examples: [
      {
        sentence: "The station is close to my office.",
        meaning: "역은 제 사무실에서 가까워요.",
        pronunciation: "더 스테이션 이즈 클로스 투 마이 오피스"
      },
      {
        sentence: "I wait at the station when I take the train.",
        meaning: "저는 기차를 탈 때 역에서 기다려요.",
        pronunciation: "아이 웨이트 앳 더 스테이션 웬 아이 테이크 더 트레인"
      },
      {
        sentence: "The station gets crowded during rush hour.",
        meaning: "역은 출퇴근 시간에 붐벼요.",
        pronunciation: "더 스테이션 겟츠 크라우디드 듀링 러시 아워"
      }
    ]
  },
  {
    id: 234,
    word: "platform",
    meaning: "플랫폼",
    pronunciation: "플랫폼",
    sentence: "I wait on the platform every morning.",
    sentenceMeaning: "저는 매일 아침 플랫폼에서 기다려요.",
    sentencePronunciation: "아이 웨이트 온 더 플랫폼 에브리 모닝",
    category: "교통",
    examples: [
      {
        sentence: "I wait on the platform every morning.",
        meaning: "저는 매일 아침 플랫폼에서 기다려요.",
        pronunciation: "아이 웨이트 온 더 플랫폼 에브리 모닝"
      },
      {
        sentence: "I stand on the platform a few minutes early.",
        meaning: "저는 몇 분 일찍 승강장에 서 있어요.",
        pronunciation: "아이 스탠드 온 더 플랫폼 어 퓨 미닛츠 얼리"
      },
      {
        sentence: "The platform feels crowded after work sometimes.",
        meaning: "승강장은 퇴근 후 가끔 붐비게 느껴져요.",
        pronunciation: "더 플랫폼 필즈 크라우디드 애프터 워크 섬타임즈"
      }
    ]
  },
  {
    id: 235,
    word: "transfer",
    meaning: "환승",
    pronunciation: "트랜스퍼",
    sentence: "I need one transfer on my way to work.",
    sentenceMeaning: "저는 출근길에 한 번 갈아타야 해요.",
    sentencePronunciation: "아이 니드 원 트랜스퍼 온 마이 웨이 투 워크",
    category: "교통",
    examples: [
      {
        sentence: "I need one transfer on my way to work.",
        meaning: "저는 출근길에 한 번 갈아타야 해요.",
        pronunciation: "아이 니드 원 트랜스퍼 온 마이 웨이 투 워크"
      },
      {
        sentence: "I make one transfer on my way to work.",
        meaning: "저는 출근길에 한 번 환승해요.",
        pronunciation: "아이 메이크 원 트랜스퍼 온 마이 웨이 투 워크"
      },
      {
        sentence: "A short transfer saves me time every morning.",
        meaning: "짧은 환승은 매일 아침 시간을 아껴 줘요.",
        pronunciation: "어 쇼트 트랜스퍼 세이브즈 미 타임 에브리 모닝"
      }
    ]
  },
  {
    id: 236,
    word: "road",
    meaning: "길, 도로",
    pronunciation: "로드",
    sentence: "This road is busy in the evening.",
    sentenceMeaning: "이 길은 저녁에 바빠요.",
    sentencePronunciation: "디스 로드 이즈 비지 인 디 이브닝",
    category: "교통",
    examples: [
      {
        sentence: "This road is busy in the evening.",
        meaning: "이 길은 저녁에 바빠요.",
        pronunciation: "디스 로드 이즈 비지 인 디 이브닝"
      },
      {
        sentence: "I check the road before I drive at night.",
        meaning: "저는 밤에 운전하기 전에 길 상황을 확인해요.",
        pronunciation: "아이 체크 더 로드 비포 아이 드라이브 앳 나이트"
      },
      {
        sentence: "This road gets quiet after the evening rush.",
        meaning: "이 길은 저녁 혼잡 시간이 지나면 조용해져요.",
        pronunciation: "디스 로드 겟츠 콰이어트 애프터 더 이브닝 러시"
      }
    ]
  },
  {
    id: 237,
    word: "crosswalk",
    meaning: "횡단보도",
    pronunciation: "크로스워크",
    sentence: "I always use the crosswalk.",
    sentenceMeaning: "저는 항상 횡단보도를 이용해요.",
    sentencePronunciation: "아이 올웨이즈 유즈 더 크로스워크",
    category: "교통",
    examples: [
      {
        sentence: "I always use the crosswalk, and I still do that.",
        meaning: "저는 항상 횡단보도를 이용해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 올웨이즈 유즈 더 크로스워크 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I use the crosswalk near my office every day.",
        meaning: "저는 매일 회사 근처 횡단보도를 이용해요.",
        pronunciation: "아이 유즈 더 크로스워크 니어 마이 오피스 에브리 데이"
      },
      {
        sentence: "The crosswalk feels safer when the signal changes.",
        meaning: "신호가 바뀌면 횡단보도가 더 안전하게 느껴져요.",
        pronunciation: "더 크로스워크 필즈 세이퍼 웬 더 시그널 체인지즈"
      }
    ]
  },
  {
    id: 238,
    word: "signal",
    meaning: "신호",
    pronunciation: "시그널",
    sentence: "I wait for the signal before I cross.",
    sentenceMeaning: "저는 건너기 전에 신호를 기다려요.",
    sentencePronunciation: "아이 웨이트 포 더 시그널 비포 아이 크로스",
    category: "교통",
    examples: [
      {
        sentence: "I wait for the signal before I cross.",
        meaning: "저는 건너기 전에 신호를 기다려요.",
        pronunciation: "아이 웨이트 포 더 시그널 비포 아이 크로스"
      },
      {
        sentence: "I wait for the signal before I cross the road.",
        meaning: "저는 길을 건너기 전에 신호를 기다려요.",
        pronunciation: "아이 웨이트 포 더 시그널 비포 아이 크로스 더 로드"
      },
      {
        sentence: "The signal changes quickly at this busy street.",
        meaning: "이 바쁜 길에서는 신호가 빨리 바뀌어요.",
        pronunciation: "더 시그널 체인지즈 퀵클리 앳 디스 비지 스트리트"
      }
    ]
  },
  {
    id: 239,
    word: "parking",
    meaning: "주차",
    pronunciation: "파킹",
    sentence: "Parking is hard near my office.",
    sentenceMeaning: "제 사무실 근처는 주차가 어려워요.",
    sentencePronunciation: "파킹 이즈 하드 니어 마이 오피스",
    category: "교통",
    examples: [
      {
        sentence: "Parking is hard near my office, and I still like it.",
        meaning: "제 사무실 근처는 주차가 어려워요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "파킹 이즈 하드 니어 마이 오피스 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I look for parking before I visit the mall.",
        meaning: "저는 쇼핑몰에 가기 전에 주차 공간을 찾아요.",
        pronunciation: "아이 룩 포 파킹 비포 아이 비지트 더 몰"
      },
      {
        sentence: "Parking is easier on weekday mornings than weekends.",
        meaning: "주차는 주말보다 평일 아침에 더 쉬워요.",
        pronunciation: "파킹 이즈 이지어 온 위크데이 모닝즈 댄 위켄즈"
      }
    ]
  },
  {
    id: 240,
    word: "driver",
    meaning: "운전기사, 운전자",
    pronunciation: "드라이버",
    sentence: "The driver was kind and careful.",
    sentenceMeaning: "운전기사는 친절하고 조심스러웠어요.",
    sentencePronunciation: "더 드라이버 워즈 카인드 앤 케어풀",
    category: "교통",
    examples: [
      {
        sentence: "The driver was kind and careful, and I still like it.",
        meaning: "운전기사는 친절하고 조심스러웠어요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "더 드라이버 워즈 카인드 앤 케어풀 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I talk to the driver when I take a taxi.",
        meaning: "저는 택시를 탈 때 기사님과 이야기해요.",
        pronunciation: "아이 톡 투 더 드라이버 웬 아이 테이크 어 택시"
      },
      {
        sentence: "A careful driver makes me feel safe on roads.",
        meaning: "신중한 운전자는 길에서 안전하게 느끼게 해줘요.",
        pronunciation: "어 케어풀 드라이버 메익스 미 필 세이프 온 로즈"
      }
    ]
  },
  {
    id: 241,
    word: "highway",
    meaning: "고속도로",
    pronunciation: "하이웨이",
    sentence: "We used the highway during our trip.",
    sentenceMeaning: "우리는 여행 중에 고속도로를 이용했어요.",
    sentencePronunciation: "위 유즈드 더 하이웨이 듀링 아워 트립",
    category: "교통",
    examples: [
      {
        sentence: "We used the highway during our trip.",
        meaning: "우리는 여행 중에 고속도로를 이용했어요.",
        pronunciation: "위 유즈드 더 하이웨이 듀링 아워 트립"
      },
      {
        sentence: "I use the highway when I visit my hometown.",
        meaning: "저는 고향에 갈 때 고속도로를 이용해요.",
        pronunciation: "아이 유즈 더 하이웨이 웬 아이 비지트 마이 홈타운"
      },
      {
        sentence: "The highway feels faster early in the morning.",
        meaning: "고속도로는 이른 아침에 더 빠르게 느껴져요.",
        pronunciation: "더 하이웨이 필즈 패스터 얼리 인 더 모닝"
      }
    ]
  },
  {
    id: 242,
    word: "seatbelt",
    meaning: "안전벨트",
    pronunciation: "시트벨트",
    sentence: "I always wear my seatbelt in the car.",
    sentenceMeaning: "저는 차에서 항상 안전벨트를 매요.",
    sentencePronunciation: "아이 올웨이즈 웨어 마이 시트벨트 인 더 카",
    category: "교통",
    examples: [
      {
        sentence: "I always wear my seatbelt in the car.",
        meaning: "저는 차에서 항상 안전벨트를 매요.",
        pronunciation: "아이 올웨이즈 웨어 마이 시트벨트 인 더 카"
      },
      {
        sentence: "I check my seatbelt before the car starts moving.",
        meaning: "저는 차가 출발하기 전에 안전벨트를 확인해요.",
        pronunciation: "아이 체크 마이 시트벨트 비포 더 카 스타츠 무빙"
      },
      {
        sentence: "A seatbelt is important on every single trip.",
        meaning: "안전벨트는 모든 이동에서 중요해요.",
        pronunciation: "어 시트벨트 이즈 임포턴트 온 에브리 싱글 트립"
      }
    ]
  },
  {
    id: 243,
    word: "bridge",
    meaning: "다리, 교량",
    pronunciation: "브리지",
    sentence: "I cross a bridge on my way home.",
    sentenceMeaning: "저는 집에 가는 길에 다리를 건너요.",
    sentencePronunciation: "아이 크로스 어 브리지 온 마이 웨이 홈",
    category: "교통",
    examples: [
      {
        sentence: "I cross a bridge on my way home.",
        meaning: "저는 집에 가는 길에 다리를 건너요.",
        pronunciation: "아이 크로스 어 브리지 온 마이 웨이 홈"
      },
      {
        sentence: "I cross the bridge when I go downtown.",
        meaning: "저는 시내에 갈 때 다리를 건너요.",
        pronunciation: "아이 크로스 더 브리지 웬 아이 고 다운타운"
      },
      {
        sentence: "The bridge looks nice when the sun goes down.",
        meaning: "다리는 해가 질 때 멋지게 보여요.",
        pronunciation: "더 브리지 룩스 나이스 웬 더 선 고즈 다운"
      }
    ]
  },
  {
    id: 244,
    word: "sidewalk",
    meaning: "인도",
    pronunciation: "사이드워크",
    sentence: "The sidewalk near my house is wide.",
    sentenceMeaning: "제 집 근처 인도는 넓어요.",
    sentencePronunciation: "더 사이드워크 니어 마이 하우스 이즈 와이드",
    category: "교통",
    examples: [
      {
        sentence: "The sidewalk near my house is wide.",
        meaning: "제 집 근처 인도는 넓어요.",
        pronunciation: "더 사이드워크 니어 마이 하우스 이즈 와이드"
      },
      {
        sentence: "I walk on the sidewalk when I go outside.",
        meaning: "저는 밖에 나가면 인도를 걸어요.",
        pronunciation: "아이 워크 온 더 사이드워크 웬 아이 고 아웃사이드"
      },
      {
        sentence: "The sidewalk near my home is wide and clean.",
        meaning: "우리 집 근처 인도는 넓고 깨끗해요.",
        pronunciation: "더 사이드워크 니어 마이 홈 이즈 와이드 앤 클린"
      }
    ]
  },
  {
    id: 245,
    word: "lane",
    meaning: "차선",
    pronunciation: "레인",
    sentence: "I stayed in the right lane.",
    sentenceMeaning: "저는 오른쪽 차선을 이용했어요.",
    sentencePronunciation: "아이 스테이드 인 더 라이트 레인",
    category: "교통",
    examples: [
      {
        sentence: "I stayed in the right lane, and I still do that.",
        meaning: "저는 오른쪽 차선을 이용했어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 스테이드 인 더 라이트 레인 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I stay in my lane when the road gets busy.",
        meaning: "저는 길이 복잡해지면 제 차선을 지켜요.",
        pronunciation: "아이 스테이 인 마이 레인 웬 더 로드 겟츠 비지"
      },
      {
        sentence: "The right lane moves faster on this road.",
        meaning: "이 길에서는 오른쪽 차선이 더 빨리 움직여요.",
        pronunciation: "더 라이트 레인 무브즈 패스터 온 디스 로드"
      }
    ]
  },
  {
    id: 246,
    word: "scooter",
    meaning: "스쿠터",
    pronunciation: "스쿠터",
    sentence: "I sometimes see scooters near the station.",
    sentenceMeaning: "저는 역 근처에서 가끔 스쿠터를 봐요.",
    sentencePronunciation: "아이 섬타임즈 씨 스쿠터즈 니어 더 스테이션",
    category: "교통",
    examples: [
      {
        sentence: "I sometimes see scooters near the station.",
        meaning: "저는 역 근처에서 가끔 스쿠터를 봐요.",
        pronunciation: "아이 섬타임즈 씨 스쿠터즈 니어 더 스테이션"
      },
      {
        sentence: "I use the scooter when I do not drive.",
        meaning: "저는 운전하지 않을 때 스쿠터를 이용해요.",
        pronunciation: "아이 유즈 더 스쿠터 웬 아이 두 낫 드라이브"
      },
      {
        sentence: "The scooter is useful on busy weekday mornings.",
        meaning: "스쿠터는 바쁜 평일 아침에 유용해요.",
        pronunciation: "더 스쿠터 이즈 유스풀 온 비지 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 247,
    word: "sunny",
    meaning: "맑은",
    pronunciation: "서니",
    sentence: "I feel happy on sunny days.",
    sentenceMeaning: "저는 맑은 날에 기분이 좋아요.",
    sentencePronunciation: "아이 필 해피 온 서니 데이즈",
    category: "날씨",
    examples: [
      {
        sentence: "I feel happy on sunny days, and I still do that.",
        meaning: "저는 맑은 날에 기분이 좋아요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 필 해피 온 서니 데이즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I like sunny days because they feel comfortable.",
        meaning: "저는 맑은 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 서니 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Sunny weather changes my mood very quickly.",
        meaning: "맑은 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "서니 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 248,
    word: "rainy",
    meaning: "비 오는",
    pronunciation: "레이니",
    sentence: "I stay home more on rainy days.",
    sentenceMeaning: "저는 비 오는 날에 집에 더 많이 있어요.",
    sentencePronunciation: "아이 스테이 홈 모어 온 레이니 데이즈",
    category: "날씨",
    examples: [
      {
        sentence: "I stay home more on rainy days.",
        meaning: "저는 비 오는 날에 집에 더 많이 있어요.",
        pronunciation: "아이 스테이 홈 모어 온 레이니 데이즈"
      },
      {
        sentence: "I like rainy days because they feel comfortable.",
        meaning: "저는 비 오는 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 레이니 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Rainy weather changes my mood very quickly.",
        meaning: "비 오는 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "레이니 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 249,
    word: "cloudy",
    meaning: "흐린",
    pronunciation: "클라우디",
    sentence: "Cloudy weather makes me sleepy.",
    sentenceMeaning: "흐린 날씨는 저를 졸리게 해요.",
    sentencePronunciation: "클라우디 웨더 메익스 미 슬리피",
    category: "날씨",
    examples: [
      {
        sentence: "Cloudy weather makes me sleepy, and I still like it.",
        meaning: "흐린 날씨는 저를 졸리게 해요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "클라우디 웨더 메익스 미 슬리피 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I like cloudy days because they feel comfortable.",
        meaning: "저는 흐린 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 클라우디 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Cloudy weather changes my mood very quickly.",
        meaning: "흐린 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "클라우디 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 250,
    word: "windy",
    meaning: "바람 부는",
    pronunciation: "윈디",
    sentence: "It was windy, so I wore a jacket.",
    sentenceMeaning: "바람이 많이 불어서 재킷을 입었어요.",
    sentencePronunciation: "잇 워즈 윈디 소 아이 워 어 재킷",
    category: "날씨",
    examples: [
      {
        sentence: "It was windy, so I wore a jacket.",
        meaning: "바람이 많이 불어서 재킷을 입었어요.",
        pronunciation: "잇 워즈 윈디 소 아이 워 어 재킷"
      },
      {
        sentence: "I like windy days because they feel comfortable.",
        meaning: "저는 바람 부는 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 윈디 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Windy weather changes my mood very quickly.",
        meaning: "바람 부는 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "윈디 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 251,
    word: "snowy",
    meaning: "눈 오는",
    pronunciation: "스노위",
    sentence: "I like the quiet feeling of snowy mornings.",
    sentenceMeaning: "저는 눈 오는 아침의 조용한 느낌을 좋아해요.",
    sentencePronunciation: "아이 라이크 더 콰이어트 필링 오브 스노위 모닝즈",
    category: "날씨",
    examples: [
      {
        sentence: "I like the quiet feeling of snowy mornings.",
        meaning: "저는 눈 오는 아침의 조용한 느낌을 좋아해요.",
        pronunciation: "아이 라이크 더 콰이어트 필링 오브 스노위 모닝즈"
      },
      {
        sentence: "I like snowy days because they feel comfortable.",
        meaning: "저는 눈 오는 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 스노위 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Snowy weather changes my mood very quickly.",
        meaning: "눈 오는 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "스노위 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 252,
    word: "hot",
    meaning: "더운",
    pronunciation: "핫",
    sentence: "I drink cold water on hot days.",
    sentenceMeaning: "저는 더운 날에 찬물을 마셔요.",
    sentencePronunciation: "아이 드링크 콜드 워터 온 핫 데이즈",
    category: "날씨",
    examples: [
      {
        sentence: "I drink cold water on hot days.",
        meaning: "저는 더운 날에 찬물을 마셔요.",
        pronunciation: "아이 드링크 콜드 워터 온 핫 데이즈"
      },
      {
        sentence: "I like hot days because they feel comfortable.",
        meaning: "저는 더운 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 핫 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Hot weather changes my mood very quickly.",
        meaning: "더운 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "핫 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 253,
    word: "cold",
    meaning: "추운, 차가운",
    pronunciation: "콜드",
    sentence: "My hands get cold in winter.",
    sentenceMeaning: "제 손은 겨울에 차가워져요.",
    sentencePronunciation: "마이 핸즈 겟 콜드 인 윈터",
    category: "날씨",
    examples: [
      {
        sentence: "My hands get cold in winter, and I still like it.",
        meaning: "제 손은 겨울에 차가워져요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "마이 핸즈 겟 콜드 인 윈터 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I like cold days because they feel comfortable.",
        meaning: "저는 추운 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 콜드 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Cold weather changes my mood very quickly.",
        meaning: "추운 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "콜드 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 254,
    word: "warm",
    meaning: "따뜻한",
    pronunciation: "웜",
    sentence: "I like warm weather in spring.",
    sentenceMeaning: "저는 봄의 따뜻한 날씨를 좋아해요.",
    sentencePronunciation: "아이 라이크 웜 웨더 인 스프링",
    category: "날씨",
    examples: [
      {
        sentence: "I like warm weather in spring, and I still do that.",
        meaning: "저는 봄의 따뜻한 날씨를 좋아해요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 라이크 웜 웨더 인 스프링 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I like warm days because they feel comfortable.",
        meaning: "저는 따뜻한 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 웜 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Warm weather changes my mood very quickly.",
        meaning: "따뜻한 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "웜 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 255,
    word: "cool",
    meaning: "선선한",
    pronunciation: "쿨",
    sentence: "A cool evening walk feels great.",
    sentenceMeaning: "선선한 저녁 산책은 정말 좋아요.",
    sentencePronunciation: "어 쿨 이브닝 워크 필즈 그레이트",
    category: "날씨",
    examples: [
      {
        sentence: "A cool evening walk feels great, and I still like it.",
        meaning: "선선한 저녁 산책은 정말 좋아요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "어 쿨 이브닝 워크 필즈 그레이트 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I like cool days because they feel comfortable.",
        meaning: "저는 선선한 날이 편하게 느껴져서 좋아해요.",
        pronunciation: "아이 라이크 쿨 데이즈 비커즈 데이 필 컴포터블"
      },
      {
        sentence: "Cool weather changes my mood very quickly.",
        meaning: "선선한 날씨는 제 기분을 아주 빨리 바꿔요.",
        pronunciation: "쿨 웨더 체인지즈 마이 무드 베리 퀵클리"
      }
    ]
  },
  {
    id: 256,
    word: "season",
    meaning: "계절",
    pronunciation: "시즌",
    sentence: "Spring is my favorite season.",
    sentenceMeaning: "봄은 제가 가장 좋아하는 계절이에요.",
    sentencePronunciation: "스프링 이즈 마이 페이버릿 시즌",
    category: "날씨",
    examples: [
      {
        sentence: "Spring is my favorite season, and I still like it.",
        meaning: "봄은 제가 가장 좋아하는 계절이에요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "스프링 이즈 마이 페이버릿 시즌 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "Each season changes the clothes that I wear.",
        meaning: "계절마다 제가 입는 옷이 달라져요.",
        pronunciation: "이치 시즌 체인지즈 더 클로즈 댓 아이 웨어"
      },
      {
        sentence: "My favorite season feels calm and comfortable.",
        meaning: "제가 가장 좋아하는 계절은 차분하고 편하게 느껴져요.",
        pronunciation: "마이 페이버릿 시즌 필즈 캄 앤 컴포터블"
      }
    ]
  },
  {
    id: 257,
    word: "spring",
    meaning: "봄",
    pronunciation: "스프링",
    sentence: "I like spring because it is not too hot.",
    sentenceMeaning: "저는 봄이 너무 덥지 않아서 좋아요.",
    sentencePronunciation: "아이 라이크 스프링 비커즈 잇 이즈 낫 투 핫",
    category: "날씨",
    examples: [
      {
        sentence: "I like spring because it is not too hot.",
        meaning: "저는 봄이 너무 덥지 않아서 좋아요.",
        pronunciation: "아이 라이크 스프링 비커즈 잇 이즈 낫 투 핫"
      },
      {
        sentence: "I like spring because the air feels soft.",
        meaning: "저는 공기가 부드럽게 느껴져서 봄을 좋아해요.",
        pronunciation: "아이 라이크 스프링 비커즈 더 에어 필즈 소프트"
      },
      {
        sentence: "Spring makes walking outside much more enjoyable.",
        meaning: "봄은 밖에서 걷는 일을 훨씬 더 즐겁게 해줘요.",
        pronunciation: "스프링 메익스 워킹 아웃사이드 머치 모어 인조이어블"
      }
    ]
  },
  {
    id: 258,
    word: "summer",
    meaning: "여름",
    pronunciation: "서머",
    sentence: "I go to the beach in summer.",
    sentenceMeaning: "저는 여름에 해변에 가요.",
    sentencePronunciation: "아이 고 투 더 비치 인 서머",
    category: "날씨",
    examples: [
      {
        sentence: "I go to the beach in summer.",
        meaning: "저는 여름에 해변에 가요.",
        pronunciation: "아이 고 투 더 비치 인 서머"
      },
      {
        sentence: "I stay indoors more often during the summer.",
        meaning: "저는 여름에는 실내에 더 자주 있어요.",
        pronunciation: "아이 스테이 인도어즈 모어 오픈 듀링 더 서머"
      },
      {
        sentence: "Summer feels better when I have cold drinks.",
        meaning: "여름은 차가운 음료가 있으면 더 좋게 느껴져요.",
        pronunciation: "서머 필즈 베러 웬 아이 해브 콜드 드링크스"
      }
    ]
  },
  {
    id: 259,
    word: "autumn",
    meaning: "가을",
    pronunciation: "오텀",
    sentence: "I like autumn because the air is fresh.",
    sentenceMeaning: "저는 가을이 공기가 상쾌해서 좋아요.",
    sentencePronunciation: "아이 라이크 오텀 비커즈 디 에어 이즈 프레시",
    category: "날씨",
    examples: [
      {
        sentence: "I like autumn because the air is fresh.",
        meaning: "저는 가을이 공기가 상쾌해서 좋아요.",
        pronunciation: "아이 라이크 오텀 비커즈 디 에어 이즈 프레시"
      },
      {
        sentence: "I like autumn because the air feels clear.",
        meaning: "저는 공기가 맑게 느껴져서 가을을 좋아해요.",
        pronunciation: "아이 라이크 오텀 비커즈 더 에어 필즈 클리어"
      },
      {
        sentence: "Autumn is great for quiet walks near home.",
        meaning: "가을은 집 근처에서 조용히 걷기에 좋아요.",
        pronunciation: "오텀 이즈 그레이트 포 콰이어트 웍스 니어 홈"
      }
    ]
  },
  {
    id: 260,
    word: "winter",
    meaning: "겨울",
    pronunciation: "윈터",
    sentence: "I stay indoors more in winter.",
    sentenceMeaning: "저는 겨울에 실내에 더 많이 있어요.",
    sentencePronunciation: "아이 스테이 인도어즈 모어 인 윈터",
    category: "날씨",
    examples: [
      {
        sentence: "I stay indoors more in winter, and I still do that.",
        meaning: "저는 겨울에 실내에 더 많이 있어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 스테이 인도어즈 모어 인 윈터 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I stay indoors more often during the winter.",
        meaning: "저는 겨울에는 실내에 더 자주 있어요.",
        pronunciation: "아이 스테이 인도어즈 모어 오픈 듀링 더 윈터"
      },
      {
        sentence: "Winter feels better with warm food at home.",
        meaning: "겨울은 집에서 따뜻한 음식과 함께 더 좋아요.",
        pronunciation: "윈터 필즈 베러 위드 웜 푸드 앳 홈"
      }
    ]
  },
  {
    id: 261,
    word: "umbrella",
    meaning: "우산",
    pronunciation: "엄브렐러",
    sentence: "I keep an umbrella in my bag.",
    sentenceMeaning: "저는 가방에 우산을 넣어 둬요.",
    sentencePronunciation: "아이 킵 언 엄브렐러 인 마이 백",
    category: "날씨",
    examples: [
      {
        sentence: "I keep an umbrella in my bag.",
        meaning: "저는 가방에 우산을 넣어 둬요.",
        pronunciation: "아이 킵 언 엄브렐러 인 마이 백"
      },
      {
        sentence: "I carry an umbrella when the sky looks dark.",
        meaning: "저는 하늘이 어두워 보이면 우산을 챙겨요.",
        pronunciation: "아이 캐리 언 엄브렐러 웬 더 스카이 룩스 다크"
      },
      {
        sentence: "My umbrella stays in my bag during summer.",
        meaning: "제 우산은 여름 동안 가방에 들어 있어요.",
        pronunciation: "마이 엄브렐러 스테이즈 인 마이 백 듀링 서머"
      }
    ]
  },
  {
    id: 262,
    word: "temperature",
    meaning: "기온",
    pronunciation: "템퍼러처",
    sentence: "The temperature dropped a lot today.",
    sentenceMeaning: "오늘 기온이 많이 떨어졌어요.",
    sentencePronunciation: "더 템퍼러처 드랍트 어 랏 투데이",
    category: "날씨",
    examples: [
      {
        sentence: "The temperature dropped a lot today, and I still like it.",
        meaning: "오늘 기온이 많이 떨어졌어요 그리고 저는 지금도 그게 좋아요.",
        pronunciation: "더 템퍼러처 드랍트 어 랏 투데이 앤 아이 스틸 라이크 잇"
      },
      {
        sentence: "I check the temperature before I choose my clothes.",
        meaning: "저는 옷을 고르기 전에 기온을 확인해요.",
        pronunciation: "아이 체크 더 템퍼러처 비포 아이 추즈 마이 클로즈"
      },
      {
        sentence: "A low temperature makes me stay indoors longer.",
        meaning: "낮은 기온은 실내에 더 오래 머물게 해요.",
        pronunciation: "어 로우 템퍼러처 메익스 미 스테이 인도어즈 롱거"
      }
    ]
  },
  {
    id: 263,
    word: "sunshine",
    meaning: "햇살",
    pronunciation: "선샤인",
    sentence: "I enjoy warm sunshine in the morning.",
    sentenceMeaning: "저는 아침의 따뜻한 햇살을 즐겨요.",
    sentencePronunciation: "아이 인조이 웜 선샤인 인 더 모닝",
    category: "날씨",
    examples: [
      {
        sentence: "I enjoy warm sunshine in the morning.",
        meaning: "저는 아침의 따뜻한 햇살을 즐겨요.",
        pronunciation: "아이 인조이 웜 선샤인 인 더 모닝"
      },
      {
        sentence: "A little sunshine makes my room feel brighter.",
        meaning: "약간의 햇살은 제 방을 더 밝게 느끼게 해줘요.",
        pronunciation: "어 리틀 선샤인 메익스 마이 룸 필 브라이터"
      },
      {
        sentence: "I enjoy sunshine when I sit near the window.",
        meaning: "저는 창가에 앉아 있을 때 햇살을 즐겨요.",
        pronunciation: "아이 인조이 선샤인 웬 아이 싯 니어 더 윈도우"
      }
    ]
  },
  {
    id: 264,
    word: "forecast",
    meaning: "예보",
    pronunciation: "포어캐스트",
    sentence: "I check the weather forecast every day.",
    sentenceMeaning: "저는 매일 일기예보를 확인해요.",
    sentencePronunciation: "아이 체크 더 웨더 포어캐스트 에브리 데이",
    category: "날씨",
    examples: [
      {
        sentence: "I check the weather forecast every day.",
        meaning: "저는 매일 일기예보를 확인해요.",
        pronunciation: "아이 체크 더 웨더 포어캐스트 에브리 데이"
      },
      {
        sentence: "I check the forecast before I plan my weekend.",
        meaning: "저는 주말 계획을 세우기 전에 일기예보를 확인해요.",
        pronunciation: "아이 체크 더 포어캐스트 비포 아이 플랜 마이 위켄드"
      },
      {
        sentence: "The forecast helps me choose the right clothes.",
        meaning: "일기예보는 알맞은 옷을 고르게 도와줘요.",
        pronunciation: "더 포어캐스트 헬프스 미 추즈 더 라이트 클로즈"
      }
    ]
  },
  {
    id: 265,
    word: "hospital",
    meaning: "병원",
    pronunciation: "하스피털",
    sentence: "I went to the hospital for a checkup.",
    sentenceMeaning: "저는 검진 때문에 병원에 갔어요.",
    sentencePronunciation: "아이 웬트 투 더 하스피털 포 어 체크업",
    category: "건강",
    examples: [
      {
        sentence: "I went to the hospital for a checkup.",
        meaning: "저는 검진 때문에 병원에 갔어요.",
        pronunciation: "아이 웬트 투 더 하스피털 포 어 체크업"
      },
      {
        sentence: "I go to the hospital when my pain gets worse.",
        meaning: "저는 통증이 심해지면 병원에 가요.",
        pronunciation: "아이 고 투 더 하스피털 웬 마이 페인 겟츠 워스"
      },
      {
        sentence: "The hospital near my home is easy to reach.",
        meaning: "집 근처 병원은 가기 쉬워요.",
        pronunciation: "더 하스피털 니어 마이 홈 이즈 이지 투 리치"
      }
    ]
  },
  {
    id: 266,
    word: "clinic",
    meaning: "의원, 클리닉",
    pronunciation: "클리닉",
    sentence: "I visit a clinic when I catch a cold.",
    sentenceMeaning: "저는 감기에 걸리면 병원에 가요.",
    sentencePronunciation: "아이 비지트 어 클리닉 웬 아이 캐치 어 콜드",
    category: "건강",
    examples: [
      {
        sentence: "I visit a clinic when I catch a cold.",
        meaning: "저는 감기에 걸리면 병원에 가요.",
        pronunciation: "아이 비지트 어 클리닉 웬 아이 캐치 어 콜드"
      },
      {
        sentence: "I visit a clinic for small health problems.",
        meaning: "저는 작은 건강 문제로 클리닉에 가요.",
        pronunciation: "아이 비지트 어 클리닉 포 스몰 헬스 프라블럼즈"
      },
      {
        sentence: "The clinic opens early on weekday mornings.",
        meaning: "그 클리닉은 평일 아침에 일찍 열어요.",
        pronunciation: "더 클리닉 오픈즈 얼리 온 위크데이 모닝즈"
      }
    ]
  },
  {
    id: 267,
    word: "nurse",
    meaning: "간호사",
    pronunciation: "너스",
    sentence: "The nurse was very kind to me.",
    sentenceMeaning: "간호사는 저에게 매우 친절했어요.",
    sentencePronunciation: "더 너스 워즈 베리 카인드 투 미",
    category: "건강",
    examples: [
      {
        sentence: "The nurse was very kind to me.",
        meaning: "간호사는 저에게 매우 친절했어요.",
        pronunciation: "더 너스 워즈 베리 카인드 투 미"
      },
      {
        sentence: "The nurse speaks in a calm and kind voice.",
        meaning: "간호사는 차분하고 친절한 목소리로 말해요.",
        pronunciation: "더 너스 스픽스 인 어 캄 앤 카인드 보이스"
      },
      {
        sentence: "A helpful nurse makes me feel less worried.",
        meaning: "도움이 되는 간호사는 덜 걱정되게 해줘요.",
        pronunciation: "어 헬프풀 너스 메익스 미 필 레스 워리드"
      }
    ]
  },
  {
    id: 268,
    word: "headache",
    meaning: "두통",
    pronunciation: "헤드에이크",
    sentence: "I get a headache when I do not sleep well.",
    sentenceMeaning: "저는 잠을 잘 못 자면 두통이 와요.",
    sentencePronunciation: "아이 겟 어 헤드에이크 웬 아이 두 낫 슬립 웰",
    category: "건강",
    examples: [
      {
        sentence: "I get a headache when I do not sleep well.",
        meaning: "저는 잠을 잘 못 자면 두통이 와요.",
        pronunciation: "아이 겟 어 헤드에이크 웬 아이 두 낫 슬립 웰"
      },
      {
        sentence: "I rest at home when my headache feels worse.",
        meaning: "저는 두통은 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 헤드에이크 필즈 워스"
      },
      {
        sentence: "A small headache can change my whole day.",
        meaning: "작은 두통은 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 헤드에이크 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 269,
    word: "fever",
    meaning: "열",
    pronunciation: "피버",
    sentence: "I stayed home because I had a fever.",
    sentenceMeaning: "저는 열이 있어서 집에 있었어요.",
    sentencePronunciation: "아이 스테이드 홈 비커즈 아이 해드 어 피버",
    category: "건강",
    examples: [
      {
        sentence: "I stayed home because I had a fever.",
        meaning: "저는 열이 있어서 집에 있었어요.",
        pronunciation: "아이 스테이드 홈 비커즈 아이 해드 어 피버"
      },
      {
        sentence: "I rest at home when my fever feels worse.",
        meaning: "저는 열은 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 피버 필즈 워스"
      },
      {
        sentence: "A small fever can change my whole day.",
        meaning: "작은 열은 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 피버 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 270,
    word: "cough",
    meaning: "기침",
    pronunciation: "코프",
    sentence: "My cough got better after a few days.",
    sentenceMeaning: "제 기침은 며칠 뒤 좋아졌어요.",
    sentencePronunciation: "마이 코프 갓 베터 애프터 어 퓨 데이즈",
    category: "건강",
    examples: [
      {
        sentence: "My cough got better after a few days.",
        meaning: "제 기침은 며칠 뒤 좋아졌어요.",
        pronunciation: "마이 코프 갓 베터 애프터 어 퓨 데이즈"
      },
      {
        sentence: "I rest at home when my cough feels worse.",
        meaning: "저는 기침은 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 코프 필즈 워스"
      },
      {
        sentence: "A small cough can change my whole day.",
        meaning: "작은 기침은 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 코프 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 271,
    word: "allergy",
    meaning: "알레르기",
    pronunciation: "앨러지",
    sentence: "I have a small allergy to dust.",
    sentenceMeaning: "저는 먼지에 약한 알레르기가 있어요.",
    sentencePronunciation: "아이 해브 어 스몰 앨러지 투 더스트",
    category: "건강",
    examples: [
      {
        sentence: "I have a small allergy to dust.",
        meaning: "저는 먼지에 약한 알레르기가 있어요.",
        pronunciation: "아이 해브 어 스몰 앨러지 투 더스트"
      },
      {
        sentence: "I rest at home when my allergy feels worse.",
        meaning: "저는 알레르기는 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 앨러지 필즈 워스"
      },
      {
        sentence: "A small allergy can change my whole day.",
        meaning: "작은 알레르기는 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 앨러지 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 272,
    word: "mask",
    meaning: "마스크",
    pronunciation: "마스크",
    sentence: "I wear a mask when I have a cold.",
    sentenceMeaning: "저는 감기에 걸리면 마스크를 써요.",
    sentencePronunciation: "아이 웨어 어 마스크 웬 아이 해브 어 콜드",
    category: "건강",
    examples: [
      {
        sentence: "I wear a mask when I have a cold.",
        meaning: "저는 감기에 걸리면 마스크를 써요.",
        pronunciation: "아이 웨어 어 마스크 웬 아이 해브 어 콜드"
      },
      {
        sentence: "I wear a mask when the air feels dusty.",
        meaning: "저는 공기가 먼지 많게 느껴질 때 마스크를 써요.",
        pronunciation: "아이 웨어 어 마스크 웬 더 에어 필즈 더스티"
      },
      {
        sentence: "A clean mask helps me feel more comfortable.",
        meaning: "깨끗한 마스크는 더 편하게 느끼게 해줘요.",
        pronunciation: "어 클린 마스크 헬프스 미 필 모어 컴포터블"
      }
    ]
  },
  {
    id: 273,
    word: "vitamin",
    meaning: "비타민",
    pronunciation: "바이터민",
    sentence: "I take a vitamin every morning.",
    sentenceMeaning: "저는 매일 아침 비타민을 먹어요.",
    sentencePronunciation: "아이 테이크 어 바이터민 에브리 모닝",
    category: "건강",
    examples: [
      {
        sentence: "I take a vitamin every morning, and I still do that.",
        meaning: "저는 매일 아침 비타민을 먹어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 테이크 어 바이터민 에브리 모닝 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I take a vitamin with water every morning.",
        meaning: "저는 매일 아침 물과 함께 비타민을 먹어요.",
        pronunciation: "아이 테이크 어 바이터민 위드 워터 에브리 모닝"
      },
      {
        sentence: "A daily vitamin is part of my health routine.",
        meaning: "매일 먹는 비타민은 제 건강 루틴의 일부예요.",
        pronunciation: "어 데일리 바이터민 이즈 파트 오브 마이 헬스 루틴"
      }
    ]
  },
  {
    id: 274,
    word: "dentist",
    meaning: "치과의사",
    pronunciation: "덴티스트",
    sentence: "I see the dentist twice a year.",
    sentenceMeaning: "저는 1년에 두 번 치과에 가요.",
    sentencePronunciation: "아이 씨 더 덴티스트 트와이스 어 이어",
    category: "건강",
    examples: [
      {
        sentence: "I see the dentist twice a year.",
        meaning: "저는 1년에 두 번 치과에 가요.",
        pronunciation: "아이 씨 더 덴티스트 트와이스 어 이어"
      },
      {
        sentence: "I go to the dentist twice a year.",
        meaning: "저는 일 년에 두 번 치과에 가요.",
        pronunciation: "아이 고 투 더 덴티스트 트와이스 어 이어"
      },
      {
        sentence: "The dentist tells me how to care for teeth.",
        meaning: "치과 의사는 이를 관리하는 방법을 알려줘요.",
        pronunciation: "더 덴티스트 텔즈 미 하우 투 케어 포 티스"
      }
    ]
  },
  {
    id: 275,
    word: "toothache",
    meaning: "치통",
    pronunciation: "투스에이크",
    sentence: "I had a toothache last weekend.",
    sentenceMeaning: "저는 지난 주말에 치통이 있었어요.",
    sentencePronunciation: "아이 해드 어 투스에이크 라스트 위켄드",
    category: "건강",
    examples: [
      {
        sentence: "I had a toothache last weekend, and I still do that.",
        meaning: "저는 지난 주말에 치통이 있었어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 해드 어 투스에이크 라스트 위켄드 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I rest at home when my toothache feels worse.",
        meaning: "저는 치통은 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 투스에이크 필즈 워스"
      },
      {
        sentence: "A small toothache can change my whole day.",
        meaning: "작은 치통은 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 투스에이크 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 276,
    word: "pain",
    meaning: "통증",
    pronunciation: "페인",
    sentence: "I felt some pain in my back.",
    sentenceMeaning: "저는 허리에 약간의 통증을 느꼈어요.",
    sentencePronunciation: "아이 펠트 섬 페인 인 마이 백",
    category: "건강",
    examples: [
      {
        sentence: "I felt some pain in my back.",
        meaning: "저는 허리에 약간의 통증을 느꼈어요.",
        pronunciation: "아이 펠트 섬 페인 인 마이 백"
      },
      {
        sentence: "I rest at home when my pain feels worse.",
        meaning: "저는 통증은 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 페인 필즈 워스"
      },
      {
        sentence: "A small pain can change my whole day.",
        meaning: "작은 통증은 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 페인 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 277,
    word: "diet",
    meaning: "식단, 다이어트",
    pronunciation: "다이어트",
    sentence: "I try to keep a healthy diet.",
    sentenceMeaning: "저는 건강한 식단을 유지하려고 해요.",
    sentencePronunciation: "아이 트라이 투 킵 어 헬시 다이어트",
    category: "건강",
    examples: [
      {
        sentence: "I try to keep a healthy diet.",
        meaning: "저는 건강한 식단을 유지하려고 해요.",
        pronunciation: "아이 트라이 투 킵 어 헬시 다이어트"
      },
      {
        sentence: "I keep a simple diet during busy work weeks.",
        meaning: "저는 바쁜 근무 주간에 간단한 식단을 유지해요.",
        pronunciation: "아이 킵 어 심플 다이어트 듀링 비지 워크 위크스"
      },
      {
        sentence: "A healthy diet helps me feel lighter every day.",
        meaning: "건강한 식단은 매일 더 가볍게 느끼게 해줘요.",
        pronunciation: "어 헬시 다이어트 헬프스 미 필 라이터 에브리 데이"
      }
    ]
  },
  {
    id: 278,
    word: "checkup",
    meaning: "검진",
    pronunciation: "체크업",
    sentence: "I get a yearly health checkup.",
    sentenceMeaning: "저는 매년 건강검진을 받아요.",
    sentencePronunciation: "아이 겟 어 이어리 헬스 체크업",
    category: "건강",
    examples: [
      {
        sentence: "I get a yearly health checkup, and I still do that.",
        meaning: "저는 매년 건강검진을 받아요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 겟 어 이어리 헬스 체크업 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I get a checkup once a year for health.",
        meaning: "저는 건강을 위해 일 년에 한 번 검진을 받아요.",
        pronunciation: "아이 겟 어 체크업 원스 어 이어 포 헬스"
      },
      {
        sentence: "A regular checkup helps me worry a little less.",
        meaning: "정기 검진은 걱정을 조금 덜게 해줘요.",
        pronunciation: "어 레귤러 체크업 헬프스 미 워리 어 리틀 레스"
      }
    ]
  },
  {
    id: 279,
    word: "appointment",
    meaning: "예약",
    pronunciation: "어포인트먼트",
    sentence: "I made a doctor appointment online.",
    sentenceMeaning: "저는 온라인으로 진료 예약을 했어요.",
    sentencePronunciation: "아이 메이드 어 닥터 어포인트먼트 온라인",
    category: "건강",
    examples: [
      {
        sentence: "I made a doctor appointment online, and I still do that.",
        meaning: "저는 온라인으로 진료 예약을 했어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 메이드 어 닥터 어포인트먼트 온라인 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I check my appointment time the night before.",
        meaning: "저는 전날 밤에 예약 시간을 확인해요.",
        pronunciation: "아이 체크 마이 어포인트먼트 타임 더 나이트 비포"
      },
      {
        sentence: "A clear appointment time makes the day easier.",
        meaning: "분명한 예약 시간은 하루를 더 편하게 해줘요.",
        pronunciation: "어 클리어 어포인트먼트 타임 메익스 더 데이 이지어"
      }
    ]
  },
  {
    id: 280,
    word: "stress",
    meaning: "스트레스",
    pronunciation: "스트레스",
    sentence: "I feel stress when I am too busy.",
    sentenceMeaning: "저는 너무 바쁠 때 스트레스를 느껴요.",
    sentencePronunciation: "아이 필 스트레스 웬 아이 앰 투 비지",
    category: "건강",
    examples: [
      {
        sentence: "I feel stress when I am too busy.",
        meaning: "저는 너무 바쁠 때 스트레스를 느껴요.",
        pronunciation: "아이 필 스트레스 웬 아이 앰 투 비지"
      },
      {
        sentence: "I rest at home when my stress feels worse.",
        meaning: "저는 스트레스는 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 스트레스 필즈 워스"
      },
      {
        sentence: "A small stress can change my whole day.",
        meaning: "작은 스트레스는 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 스트레스 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 281,
    word: "symptom",
    meaning: "증상",
    pronunciation: "심프텀",
    sentence: "My main symptom was a sore throat.",
    sentenceMeaning: "제 주요 증상은 목 아픔이었어요.",
    sentencePronunciation: "마이 메인 심프텀 워즈 어 소어 쓰로트",
    category: "건강",
    examples: [
      {
        sentence: "My main symptom was a sore throat.",
        meaning: "제 주요 증상은 목 아픔이었어요.",
        pronunciation: "마이 메인 심프텀 워즈 어 소어 쓰로트"
      },
      {
        sentence: "I rest at home when my symptom feels worse.",
        meaning: "저는 증상은 심해지면 집에서 쉬어요.",
        pronunciation: "아이 레스트 앳 홈 웬 마이 심프텀 필즈 워스"
      },
      {
        sentence: "A small symptom can change my whole day.",
        meaning: "작은 증상은 하루 전체에 영향을 줄 수 있어요.",
        pronunciation: "어 스몰 심프텀 캔 체인지 마이 홀 데이"
      }
    ]
  },
  {
    id: 282,
    word: "recovery",
    meaning: "회복",
    pronunciation: "리커버리",
    sentence: "My recovery was faster than I expected.",
    sentenceMeaning: "제 회복은 생각보다 빨랐어요.",
    sentencePronunciation: "마이 리커버리 워즈 패스터 댄 아이 익스펙티드",
    category: "건강",
    examples: [
      {
        sentence: "My recovery was faster than I expected.",
        meaning: "제 회복은 생각보다 빨랐어요.",
        pronunciation: "마이 리커버리 워즈 패스터 댄 아이 익스펙티드"
      },
      {
        sentence: "My recovery feels faster when I sleep well.",
        meaning: "회복은 잠을 잘 자면 더 빨리 느껴져요.",
        pronunciation: "마이 리커버리 필즈 패스터 웬 아이 슬립 웰"
      },
      {
        sentence: "Good recovery helps me return to normal life.",
        meaning: "좋은 회복은 일상으로 돌아가게 도와줘요.",
        pronunciation: "굿 리커버리 헬프스 미 리턴 투 노멀 라이프"
      }
    ]
  },
  {
    id: 283,
    word: "resort",
    meaning: "리조트",
    pronunciation: "리조트",
    sentence: "I want to stay at a quiet resort.",
    sentenceMeaning: "저는 조용한 리조트에 머물고 싶어요.",
    sentencePronunciation: "아이 원트 투 스테이 앳 어 콰이어트 리조트",
    category: "휴가",
    examples: [
      {
        sentence: "I want to stay at a quiet resort.",
        meaning: "저는 조용한 리조트에 머물고 싶어요.",
        pronunciation: "아이 원트 투 스테이 앳 어 콰이어트 리조트"
      },
      {
        sentence: "I enjoy the resort when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 리조트를 즐겨요.",
        pronunciation: "아이 인조이 더 리조트 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The resort makes my vacation feel more special.",
        meaning: "리조트는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 리조트 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 284,
    word: "camping",
    meaning: "캠핑",
    pronunciation: "캠핑",
    sentence: "I went camping with my friends last summer.",
    sentenceMeaning: "저는 지난여름 친구들과 캠핑을 갔어요.",
    sentencePronunciation: "아이 웬트 캠핑 위드 마이 프렌즈 라스트 서머",
    category: "휴가",
    examples: [
      {
        sentence: "I went camping with my friends last summer.",
        meaning: "저는 지난여름 친구들과 캠핑을 갔어요.",
        pronunciation: "아이 웬트 캠핑 위드 마이 프렌즈 라스트 서머"
      },
      {
        sentence: "I enjoy camping when the weather stays warm.",
        meaning: "저는 날씨가 따뜻할 때 캠핑을 즐겨요.",
        pronunciation: "아이 인조이 캠핑 웬 더 웨더 스테이즈 웜"
      },
      {
        sentence: "Camping helps me spend quiet time outside.",
        meaning: "캠핑은 밖에서 조용한 시간을 보내게 해줘요.",
        pronunciation: "캠핑 헬프스 미 스펜드 콰이어트 타임 아웃사이드"
      }
    ]
  },
  {
    id: 285,
    word: "campfire",
    meaning: "캠프파이어",
    pronunciation: "캠프파이어",
    sentence: "I sat by the campfire at night.",
    sentenceMeaning: "저는 밤에 캠프파이어 옆에 앉아 있었어요.",
    sentencePronunciation: "아이 샛 바이 더 캠프파이어 앳 나이트",
    category: "휴가",
    examples: [
      {
        sentence: "I sat by the campfire at night.",
        meaning: "저는 밤에 캠프파이어 옆에 앉아 있었어요.",
        pronunciation: "아이 샛 바이 더 캠프파이어 앳 나이트"
      },
      {
        sentence: "I sit near the campfire after dinner at night.",
        meaning: "저는 밤에 저녁을 먹고 모닥불 근처에 앉아요.",
        pronunciation: "아이 싯 니어 더 캠프파이어 애프터 디너 앳 나이트"
      },
      {
        sentence: "A campfire makes the evening feel warm and calm.",
        meaning: "모닥불은 저녁을 따뜻하고 차분하게 느끼게 해줘요.",
        pronunciation: "어 캠프파이어 메익스 더 이브닝 필 웜 앤 캄"
      }
    ]
  },
  {
    id: 286,
    word: "pool",
    meaning: "수영장",
    pronunciation: "풀",
    sentence: "I spent hours in the hotel pool.",
    sentenceMeaning: "저는 호텔 수영장에서 몇 시간을 보냈어요.",
    sentencePronunciation: "아이 스펜트 아워즈 인 더 호텔 풀",
    category: "휴가",
    examples: [
      {
        sentence: "I spent hours in the hotel pool.",
        meaning: "저는 호텔 수영장에서 몇 시간을 보냈어요.",
        pronunciation: "아이 스펜트 아워즈 인 더 호텔 풀"
      },
      {
        sentence: "I enjoy the pool when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 수영장을 즐겨요.",
        pronunciation: "아이 인조이 더 풀 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The pool makes my vacation feel more special.",
        meaning: "수영장은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 풀 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 287,
    word: "ocean",
    meaning: "바다",
    pronunciation: "오션",
    sentence: "I love looking at the ocean on vacation.",
    sentenceMeaning: "저는 휴가 때 바다를 보는 걸 좋아해요.",
    sentencePronunciation: "아이 러브 루킹 앳 디 오션 온 베이케이션",
    category: "휴가",
    examples: [
      {
        sentence: "I love looking at the ocean on vacation.",
        meaning: "저는 휴가 때 바다를 보는 걸 좋아해요.",
        pronunciation: "아이 러브 루킹 앳 디 오션 온 베이케이션"
      },
      {
        sentence: "I enjoy the ocean when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 바다를 즐겨요.",
        pronunciation: "아이 인조이 더 오션 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The ocean makes my vacation feel more special.",
        meaning: "바다는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 오션 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 288,
    word: "sunrise",
    meaning: "일출",
    pronunciation: "선라이즈",
    sentence: "I woke up early to see the sunrise.",
    sentenceMeaning: "저는 일출을 보려고 일찍 일어났어요.",
    sentencePronunciation: "아이 워크 업 얼리 투 씨 더 선라이즈",
    category: "휴가",
    examples: [
      {
        sentence: "I woke up early to see the sunrise.",
        meaning: "저는 일출을 보려고 일찍 일어났어요.",
        pronunciation: "아이 워크 업 얼리 투 씨 더 선라이즈"
      },
      {
        sentence: "I enjoy the sunrise when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 일출을 즐겨요.",
        pronunciation: "아이 인조이 더 선라이즈 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The sunrise makes my vacation feel more special.",
        meaning: "일출은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 선라이즈 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 289,
    word: "sunset",
    meaning: "노을, 일몰",
    pronunciation: "선셋",
    sentence: "I took pictures of the sunset.",
    sentenceMeaning: "저는 노을 사진을 찍었어요.",
    sentencePronunciation: "아이 툭 픽처즈 오브 더 선셋",
    category: "휴가",
    examples: [
      {
        sentence: "I took pictures of the sunset, and I still do that.",
        meaning: "저는 노을 사진을 찍었어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 툭 픽처즈 오브 더 선셋 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy the sunset when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 노을을 즐겨요.",
        pronunciation: "아이 인조이 더 선셋 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The sunset makes my vacation feel more special.",
        meaning: "노을은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 선셋 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 290,
    word: "souvenir",
    meaning: "기념품",
    pronunciation: "수버니어",
    sentence: "I bought a souvenir for my family.",
    sentenceMeaning: "저는 가족을 위해 기념품을 샀어요.",
    sentencePronunciation: "아이 보트 어 수버니어 포 마이 패밀리",
    category: "휴가",
    examples: [
      {
        sentence: "I bought a souvenir for my family.",
        meaning: "저는 가족을 위해 기념품을 샀어요.",
        pronunciation: "아이 보트 어 수버니어 포 마이 패밀리"
      },
      {
        sentence: "I buy a souvenir before I come back home.",
        meaning: "저는 집에 돌아오기 전에 기념품을 사요.",
        pronunciation: "아이 바이 어 수버니어 비포 아이 컴 백 홈"
      },
      {
        sentence: "A small souvenir helps me remember the trip.",
        meaning: "작은 기념품은 여행을 기억하게 도와줘요.",
        pronunciation: "어 스몰 수버니어 헬프스 미 리멤버 더 트립"
      }
    ]
  },
  {
    id: 291,
    word: "festival",
    meaning: "축제",
    pronunciation: "페스티벌",
    sentence: "I visited a local festival on my trip.",
    sentenceMeaning: "저는 여행 중에 지역 축제를 갔어요.",
    sentencePronunciation: "아이 비지티드 어 로컬 페스티벌 온 마이 트립",
    category: "휴가",
    examples: [
      {
        sentence: "I visited a local festival on my trip.",
        meaning: "저는 여행 중에 지역 축제를 갔어요.",
        pronunciation: "아이 비지티드 어 로컬 페스티벌 온 마이 트립"
      },
      {
        sentence: "I enjoy the festival when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 축제를 즐겨요.",
        pronunciation: "아이 인조이 더 페스티벌 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The festival makes my vacation feel more special.",
        meaning: "축제는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 페스티벌 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 292,
    word: "picnic",
    meaning: "피크닉",
    pronunciation: "피크닉",
    sentence: "I had a picnic in the park during vacation.",
    sentenceMeaning: "저는 휴가 동안 공원에서 피크닉을 했어요.",
    sentencePronunciation: "아이 해드 어 피크닉 인 더 파크 듀링 베이케이션",
    category: "휴가",
    examples: [
      {
        sentence: "I had a picnic in the park during vacation.",
        meaning: "저는 휴가 동안 공원에서 피크닉을 했어요.",
        pronunciation: "아이 해드 어 피크닉 인 더 파크 듀링 베이케이션"
      },
      {
        sentence: "I enjoy the picnic when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 피크닉을 즐겨요.",
        pronunciation: "아이 인조이 더 피크닉 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The picnic makes my vacation feel more special.",
        meaning: "피크닉은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 피크닉 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 293,
    word: "barbecue",
    meaning: "바비큐",
    pronunciation: "바비큐",
    sentence: "We had a barbecue by the beach.",
    sentenceMeaning: "우리는 해변 옆에서 바비큐를 했어요.",
    sentencePronunciation: "위 해드 어 바비큐 바이 더 비치",
    category: "휴가",
    examples: [
      {
        sentence: "We had a barbecue by the beach.",
        meaning: "우리는 해변 옆에서 바비큐를 했어요.",
        pronunciation: "위 해드 어 바비큐 바이 더 비치"
      },
      {
        sentence: "I enjoy the barbecue when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 바비큐를 즐겨요.",
        pronunciation: "아이 인조이 더 바비큐 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The barbecue makes my vacation feel more special.",
        meaning: "바비큐는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 바비큐 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 294,
    word: "cabin",
    meaning: "오두막",
    pronunciation: "캐빈",
    sentence: "I stayed in a small cabin in the mountains.",
    sentenceMeaning: "저는 산속의 작은 오두막에 머물렀어요.",
    sentencePronunciation: "아이 스테이드 인 어 스몰 캐빈 인 더 마운틴즈",
    category: "휴가",
    examples: [
      {
        sentence: "I stayed in a small cabin in the mountains.",
        meaning: "저는 산속의 작은 오두막에 머물렀어요.",
        pronunciation: "아이 스테이드 인 어 스몰 캐빈 인 더 마운틴즈"
      },
      {
        sentence: "I enjoy the cabin when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 오두막을 즐겨요.",
        pronunciation: "아이 인조이 더 캐빈 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The cabin makes my vacation feel more special.",
        meaning: "오두막은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 캐빈 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 295,
    word: "tent",
    meaning: "텐트",
    pronunciation: "텐트",
    sentence: "I slept in a tent for one night.",
    sentenceMeaning: "저는 하룻밤 텐트에서 잤어요.",
    sentencePronunciation: "아이 슬েপ্ট 인 어 텐트 포 원 나이트",
    category: "휴가",
    examples: [
      {
        sentence: "I slept in a tent for one night.",
        meaning: "저는 하룻밤 텐트에서 잤어요.",
        pronunciation: "아이 슬েপ্ট 인 어 텐트 포 원 나이트"
      },
      {
        sentence: "I enjoy the tent when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 텐트를 즐겨요.",
        pronunciation: "아이 인조이 더 텐트 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The tent makes my vacation feel more special.",
        meaning: "텐트는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 텐트 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 296,
    word: "theme park",
    meaning: "테마파크",
    pronunciation: "테마 파크",
    sentence: "I rode many attractions at the theme park.",
    sentenceMeaning: "저는 테마파크에서 놀이기구를 많이 탔어요.",
    sentencePronunciation: "아이 로드 매니 어트랙션즈 앳 더 테마 파크",
    category: "휴가",
    examples: [
      {
        sentence: "I rode many attractions at the theme park.",
        meaning: "저는 테마파크에서 놀이기구를 많이 탔어요.",
        pronunciation: "아이 로드 매니 어트랙션즈 앳 더 테마 파크"
      },
      {
        sentence: "I enjoy the theme park when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 테마파크를 즐겨요.",
        pronunciation: "아이 인조이 더 테마 파크 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The theme park makes my vacation feel more special.",
        meaning: "테마파크는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 테마 파크 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 297,
    word: "fireworks",
    meaning: "불꽃놀이",
    pronunciation: "파이어웍스",
    sentence: "I watched fireworks with my friends.",
    sentenceMeaning: "저는 친구들과 불꽃놀이를 봤어요.",
    sentencePronunciation: "아이 와치드 파이어웍스 위드 마이 프렌즈",
    category: "휴가",
    examples: [
      {
        sentence: "I watched fireworks with my friends, and I still do that.",
        meaning: "저는 친구들과 불꽃놀이를 봤어요 그리고 저는 지금도 그렇게 해요.",
        pronunciation: "아이 와치드 파이어웍스 위드 마이 프렌즈 앤 아이 스틸 두 댓"
      },
      {
        sentence: "I enjoy the fireworks when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 불꽃놀이를 즐겨요.",
        pronunciation: "아이 인조이 더 파이어웍스 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The fireworks makes my vacation feel more special.",
        meaning: "불꽃놀이는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 파이어웍스 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 298,
    word: "hammock",
    meaning: "해먹",
    pronunciation: "해먹",
    sentence: "I rested in a hammock by the beach.",
    sentenceMeaning: "저는 해변 옆 해먹에서 쉬었어요.",
    sentencePronunciation: "아이 레스티드 인 어 해먹 바이 더 비치",
    category: "휴가",
    examples: [
      {
        sentence: "I rested in a hammock by the beach.",
        meaning: "저는 해변 옆 해먹에서 쉬었어요.",
        pronunciation: "아이 레스티드 인 어 해먹 바이 더 비치"
      },
      {
        sentence: "I enjoy the hammock when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 해먹을 즐겨요.",
        pronunciation: "아이 인조이 더 해먹 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The hammock makes my vacation feel more special.",
        meaning: "해먹은 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 해먹 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 299,
    word: "sand",
    meaning: "모래",
    pronunciation: "샌드",
    sentence: "I got sand in my shoes at the beach.",
    sentenceMeaning: "저는 해변에서 신발에 모래가 들어갔어요.",
    sentencePronunciation: "아이 갓 샌드 인 마이 슈즈 앳 더 비치",
    category: "휴가",
    examples: [
      {
        sentence: "I got sand in my shoes at the beach.",
        meaning: "저는 해변에서 신발에 모래가 들어갔어요.",
        pronunciation: "아이 갓 샌드 인 마이 슈즈 앳 더 비치"
      },
      {
        sentence: "I enjoy the sand when I take a short break.",
        meaning: "저는 짧게 쉬러 갈 때 모래를 즐겨요.",
        pronunciation: "아이 인조이 더 샌드 웬 아이 테이크 어 쇼트 브레이크"
      },
      {
        sentence: "The sand makes my vacation feel more special.",
        meaning: "모래는 휴가를 더 특별하게 느끼게 해줘요.",
        pronunciation: "더 샌드 메익스 마이 베이케이션 필 모어 스페셜"
      }
    ]
  },
  {
    id: 300,
    word: "postcard",
    meaning: "엽서",
    pronunciation: "포스트카드",
    sentence: "I sent a postcard to my parents.",
    sentenceMeaning: "저는 부모님께 엽서를 보냈어요.",
    sentencePronunciation: "아이 센트 어 포스트카드 투 마이 페어런츠",
    category: "휴가",
    examples: [
      {
        sentence: "I sent a postcard to my parents.",
        meaning: "저는 부모님께 엽서를 보냈어요.",
        pronunciation: "아이 센트 어 포스트카드 투 마이 페어런츠"
      },
      {
        sentence: "I send a postcard when I travel to new places.",
        meaning: "저는 새로운 곳으로 여행 가면 엽서를 보내요.",
        pronunciation: "아이 센드 어 포스트카드 웬 아이 트래블 투 뉴 플레이시즈"
      },
      {
        sentence: "A postcard is simple but feels very special.",
        meaning: "엽서는 단순하지만 아주 특별하게 느껴져요.",
        pronunciation: "어 포스트카드 이즈 심플 벗 필즈 베리 스페셜"
      }
    ]
  }
];
