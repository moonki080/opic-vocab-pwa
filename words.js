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
    category: "일상 루틴"
  },
  {
    id: 2,
    word: "breakfast",
    meaning: "아침 식사",
    pronunciation: "브렉퍼스트",
    sentence: "I usually eat breakfast at home before work.",
    sentenceMeaning: "저는 보통 출근 전에 집에서 아침을 먹어요.",
    sentencePronunciation: "아이 유주얼리 잇 브렉퍼스트 앳 홈 비포 워크",
    category: "음식"
  },
  {
    id: 3,
    word: "apartment",
    meaning: "아파트, 집",
    pronunciation: "어파트먼트",
    sentence: "I live in a small apartment near the subway station.",
    sentenceMeaning: "저는 지하철역 근처의 작은 아파트에 살아요.",
    sentencePronunciation: "아이 리브 인 어 스몰 어파트먼트 니어 더 서브웨이 스테이션",
    category: "집/동네"
  },
  {
    id: 4,
    word: "neighborhood",
    meaning: "동네, 근처 지역",
    pronunciation: "네이버후드",
    sentence: "My neighborhood is quiet and nice.",
    sentenceMeaning: "제 동네는 조용하고 좋아요.",
    sentencePronunciation: "마이 네이버후드 이즈 콰이어트 앤 나이스",
    category: "집/동네"
  },
  {
    id: 5,
    word: "family",
    meaning: "가족",
    pronunciation: "패밀리",
    sentence: "I spend a lot of time with my family on weekends.",
    sentenceMeaning: "저는 주말에 가족과 많은 시간을 보내요.",
    sentencePronunciation: "아이 스펜드 어 랏 오브 타임 위드 마이 패밀리 온 위켄즈",
    category: "가족/친구"
  },
  {
    id: 6,
    word: "friend",
    meaning: "친구",
    pronunciation: "프렌드",
    sentence: "I often meet my close friend for dinner.",
    sentenceMeaning: "저는 자주 친한 친구를 만나서 저녁을 먹어요.",
    sentencePronunciation: "아이 오픈 밋 마이 클로스 프렌드 포 디너",
    category: "가족/친구"
  },
  {
    id: 7,
    word: "coffee",
    meaning: "커피",
    pronunciation: "커피",
    sentence: "I drink coffee when I feel sleepy in the afternoon.",
    sentenceMeaning: "저는 오후에 졸릴 때 커피를 마셔요.",
    sentencePronunciation: "아이 드링크 커피 웬 아이 필 슬리피 인 디 애프터눈",
    category: "카페"
  },
  {
    id: 8,
    word: "menu",
    meaning: "메뉴",
    pronunciation: "메뉴",
    sentence: "I look at the menu for a few minutes before I order.",
    sentenceMeaning: "저는 주문하기 전에 몇 분 동안 메뉴를 봐요.",
    sentencePronunciation: "아이 룩 앳 더 메뉴 포 어 퓨 미닛츠 비포 아이 오더",
    category: "카페"
  },
  {
    id: 9,
    word: "discount",
    meaning: "할인",
    pronunciation: "디스카운트",
    sentence: "I buy clothes when there is a big discount.",
    sentenceMeaning: "저는 큰 할인이 있을 때 옷을 사요.",
    sentencePronunciation: "아이 바이 클로즈 웬 데어 이즈 어 빅 디스카운트",
    category: "쇼핑"
  },
  {
    id: 10,
    word: "cashier",
    meaning: "계산원",
    pronunciation: "캐시어",
    sentence: "The cashier was very kind to me at the store.",
    sentenceMeaning: "가게에서 계산원이 저에게 매우 친절했어요.",
    sentencePronunciation: "더 캐시어 워즈 베리 카인드 투 미 앳 더 스토어",
    category: "쇼핑"
  },
  {
    id: 11,
    word: "movie",
    meaning: "영화",
    pronunciation: "무비",
    sentence: "I watched a funny movie with my sister last night.",
    sentenceMeaning: "저는 어젯밤에 여동생과 재미있는 영화를 봤어요.",
    sentencePronunciation: "아이 와치드 어 퍼니 무비 위드 마이 시스터 라스트 나이트",
    category: "영화/드라마"
  },
  {
    id: 12,
    word: "actor",
    meaning: "배우",
    pronunciation: "액터",
    sentence: "My favorite actor is in many funny movies.",
    sentenceMeaning: "제가 좋아하는 배우는 재미있는 영화에 많이 나와요.",
    sentencePronunciation: "마이 페이버릿 액터 이즈 인 매니 퍼니 무비즈",
    category: "영화/드라마"
  },
  {
    id: 13,
    word: "trip",
    meaning: "여행",
    pronunciation: "트립",
    sentence: "I want to take a short trip during the holiday.",
    sentenceMeaning: "저는 휴일 동안 짧은 여행을 가고 싶어요.",
    sentencePronunciation: "아이 원트 투 테이크 어 쇼트 트립 듀링 더 할러데이",
    category: "여행"
  },
  {
    id: 14,
    word: "hotel",
    meaning: "호텔",
    pronunciation: "호텔",
    sentence: "The hotel was clean and close to the beach.",
    sentenceMeaning: "그 호텔은 깨끗했고 해변과 가까웠어요.",
    sentencePronunciation: "더 호텔 워즈 클린 앤 클로스 투 더 비치",
    category: "여행"
  },
  {
    id: 15,
    word: "exercise",
    meaning: "운동",
    pronunciation: "엑서사이즈",
    sentence: "I do light exercise after work three times a week.",
    sentenceMeaning: "저는 일주일에 세 번 퇴근 후 가벼운 운동을 해요.",
    sentencePronunciation: "아이 두 라이트 엑서사이즈 애프터 워크 쓰리 타임즈 어 위크",
    category: "운동"
  },
  {
    id: 16,
    word: "gym",
    meaning: "헬스장",
    pronunciation: "짐",
    sentence: "I go to the gym to stay healthy.",
    sentenceMeaning: "저는 건강을 위해 헬스장에 가요.",
    sentencePronunciation: "아이 고 투 더 짐 투 스테이 헬시",
    category: "운동"
  },
  {
    id: 17,
    word: "bus",
    meaning: "버스",
    pronunciation: "버스",
    sentence: "I take the bus to work when it rains.",
    sentenceMeaning: "저는 비가 오면 버스를 타고 출근해요.",
    sentencePronunciation: "아이 테이크 더 버스 투 워크 웬 잇 레인즈",
    category: "교통"
  },
  {
    id: 18,
    word: "subway",
    meaning: "지하철",
    pronunciation: "서브웨이",
    sentence: "The subway is fast and easy to use in my city.",
    sentenceMeaning: "제 도시에서는 지하철이 빠르고 이용하기 쉬워요.",
    sentencePronunciation: "더 서브웨이 이즈 패스트 앤 이지 투 유즈 인 마이 시티",
    category: "교통"
  },
  {
    id: 19,
    word: "weather",
    meaning: "날씨",
    pronunciation: "웨더",
    sentence: "The weather is nice today, so I want to go outside.",
    sentenceMeaning: "오늘 날씨가 좋아서 밖에 나가고 싶어요.",
    sentencePronunciation: "더 웨더 이즈 나이스 투데이 소 아이 원트 투 고 아웃사이드",
    category: "날씨"
  },
  {
    id: 20,
    word: "jacket",
    meaning: "재킷, 겉옷",
    pronunciation: "재킷",
    sentence: "I wear a light jacket in spring.",
    sentenceMeaning: "저는 봄에 가벼운 재킷을 입어요.",
    sentencePronunciation: "아이 웨어 어 라이트 재킷 인 스프링",
    category: "날씨"
  },
  {
    id: 21,
    word: "hobby",
    meaning: "취미",
    pronunciation: "하비",
    sentence: "My hobby is taking pictures of everyday life.",
    sentenceMeaning: "제 취미는 일상의 사진을 찍는 거예요.",
    sentencePronunciation: "마이 하비 이즈 테이킹 픽처즈 오브 에브리데이 라이프",
    category: "취미"
  },
  {
    id: 22,
    word: "guitar",
    meaning: "기타",
    pronunciation: "기타",
    sentence: "I practice the guitar for a short time at night.",
    sentenceMeaning: "저는 밤에 잠깐 기타를 연습해요.",
    sentencePronunciation: "아이 프랙티스 더 기타 포 어 쇼트 타임 앳 나이트",
    category: "취미"
  },
  {
    id: 23,
    word: "vacation",
    meaning: "휴가",
    pronunciation: "베이케이션",
    sentence: "I usually plan my vacation with my family.",
    sentenceMeaning: "저는 보통 가족과 함께 휴가 계획을 세워요.",
    sentencePronunciation: "아이 유주얼리 플랜 마이 베이케이션 위드 마이 패밀리",
    category: "휴가"
  },
  {
    id: 24,
    word: "beach",
    meaning: "해변",
    pronunciation: "비치",
    sentence: "I like walking on the beach in the evening.",
    sentenceMeaning: "저는 저녁에 해변을 걷는 것을 좋아해요.",
    sentencePronunciation: "아이 라이크 워킹 온 더 비치 인 디 이브닝",
    category: "휴가"
  },
  {
    id: 25,
    word: "doctor",
    meaning: "의사",
    pronunciation: "닥터",
    sentence: "I went to the doctor because I had a bad cold.",
    sentenceMeaning: "저는 심한 감기에 걸려서 병원에 갔어요.",
    sentencePronunciation: "아이 웬트 투 더 닥터 비커즈 아이 해드 어 배드 콜드",
    category: "건강"
  },
  {
    id: 26,
    word: "medicine",
    meaning: "약",
    pronunciation: "메디슨",
    sentence: "I took some medicine and got better the next day.",
    sentenceMeaning: "저는 약을 먹고 다음 날 좋아졌어요.",
    sentencePronunciation: "아이 툭 섬 메디슨 앤 갓 베러 더 넥스트 데이",
    category: "건강"
  },
  {
    id: 27,
    word: "kitchen",
    meaning: "주방",
    pronunciation: "키친",
    sentence: "The kitchen in my house is small but comfortable.",
    sentenceMeaning: "우리 집 주방은 작지만 편안해요.",
    sentencePronunciation: "더 키친 인 마이 하우스 이즈 스몰 벗 컴포터블",
    category: "집/동네"
  },
  {
    id: 28,
    word: "dinner",
    meaning: "저녁 식사",
    pronunciation: "디너",
    sentence: "I usually have dinner with my family at home.",
    sentenceMeaning: "저는 보통 집에서 가족과 저녁을 먹어요.",
    sentencePronunciation: "아이 유주얼리 해브 디너 위드 마이 패밀리 앳 홈",
    category: "음식"
  },
  {
    id: 29,
    word: "traffic",
    meaning: "교통 상황, 차량 흐름",
    pronunciation: "트래픽",
    sentence: "There is heavy traffic near my house in the morning.",
    sentenceMeaning: "아침에는 우리 집 근처에 교통 체증이 심해요.",
    sentencePronunciation: "데어 이즈 헤비 트래픽 니어 마이 하우스 인 더 모닝",
    category: "교통"
  },
  {
    id: 30,
    word: "weekend",
    meaning: "주말",
    pronunciation: "위켄드",
    sentence: "I like to rest at home and watch videos on the weekend.",
    sentenceMeaning: "저는 주말에 집에서 쉬고 영상을 보는 것을 좋아해요.",
    sentencePronunciation: "아이 라이크 투 레스트 앳 홈 앤 와치 비디오즈 온 더 위켄드",
    category: "자기소개"
  },
  {
    id: 31,
    word: "name",
    meaning: "이름",
    pronunciation: "네임",
    sentence: "I tell people my name first.",
    sentenceMeaning: "저는 먼저 제 이름을 말해요.",
    sentencePronunciation: "아이 텔 피플 마이 네임 퍼스트",
    category: "자기소개"
  },
  {
    id: 32,
    word: "age",
    meaning: "나이",
    pronunciation: "에이지",
    sentence: "I do not talk about my age much.",
    sentenceMeaning: "저는 제 나이를 많이 말하지 않아요.",
    sentencePronunciation: "아이 두 낫 톡 어바웃 마이 에이지 머치",
    category: "자기소개"
  },
  {
    id: 33,
    word: "hometown",
    meaning: "고향",
    pronunciation: "홈타운",
    sentence: "My hometown is a quiet city.",
    sentenceMeaning: "제 고향은 조용한 도시예요.",
    sentencePronunciation: "마이 홈타운 이즈 어 콰이어트 시티",
    category: "자기소개"
  },
  {
    id: 34,
    word: "birthday",
    meaning: "생일",
    pronunciation: "벌스데이",
    sentence: "My birthday is in May.",
    sentenceMeaning: "제 생일은 5월이에요.",
    sentencePronunciation: "마이 벌스데이 이즈 인 메이",
    category: "자기소개"
  },
  {
    id: 35,
    word: "job",
    meaning: "직업, 일",
    pronunciation: "잡",
    sentence: "I like talking about my job in English.",
    sentenceMeaning: "저는 제 일을 영어로 말하는 것을 좋아해요.",
    sentencePronunciation: "아이 라이크 토킹 어바웃 마이 잡 인 잉글리시",
    category: "자기소개"
  },
  {
    id: 36,
    word: "company",
    meaning: "회사",
    pronunciation: "컴퍼니",
    sentence: "My company is close to my house.",
    sentenceMeaning: "제 회사는 집에서 가까워요.",
    sentencePronunciation: "마이 컴퍼니 이즈 클로스 투 마이 하우스",
    category: "자기소개"
  },
  {
    id: 37,
    word: "office",
    meaning: "사무실",
    pronunciation: "오피스",
    sentence: "My office is not far from the station.",
    sentenceMeaning: "제 사무실은 역에서 멀지 않아요.",
    sentencePronunciation: "마이 오피스 이즈 낫 파 프럼 더 스테이션",
    category: "자기소개"
  },
  {
    id: 38,
    word: "student",
    meaning: "학생",
    pronunciation: "스튜던트",
    sentence: "I was a busy student in college.",
    sentenceMeaning: "저는 대학 때 바쁜 학생이었어요.",
    sentencePronunciation: "아이 워즈 어 비지 스튜던트 인 칼리지",
    category: "자기소개"
  },
  {
    id: 39,
    word: "major",
    meaning: "전공",
    pronunciation: "메이저",
    sentence: "My major was business.",
    sentenceMeaning: "제 전공은 경영학이었어요.",
    sentencePronunciation: "마이 메이저 워즈 비즈니스",
    category: "자기소개"
  },
  {
    id: 40,
    word: "class",
    meaning: "수업, 반",
    pronunciation: "클래스",
    sentence: "I enjoyed my English class in school.",
    sentenceMeaning: "저는 학교에서 영어 수업을 즐겼어요.",
    sentencePronunciation: "아이 인조이드 마이 잉글리시 클래스 인 스쿨",
    category: "자기소개"
  },
  {
    id: 41,
    word: "dream",
    meaning: "꿈",
    pronunciation: "드림",
    sentence: "My dream is to travel more.",
    sentenceMeaning: "제 꿈은 더 많이 여행하는 거예요.",
    sentencePronunciation: "마이 드림 이즈 투 트래블 모어",
    category: "자기소개"
  },
  {
    id: 42,
    word: "goal",
    meaning: "목표",
    pronunciation: "골",
    sentence: "My goal is to speak English better.",
    sentenceMeaning: "제 목표는 영어를 더 잘 말하는 거예요.",
    sentencePronunciation: "마이 골 이즈 투 스피크 잉글리시 베터",
    category: "자기소개"
  },
  {
    id: 43,
    word: "plan",
    meaning: "계획",
    pronunciation: "플랜",
    sentence: "I have a simple plan for this year.",
    sentenceMeaning: "저는 올해를 위한 간단한 계획이 있어요.",
    sentencePronunciation: "아이 해브 어 심플 플랜 포 디스 이어",
    category: "자기소개"
  },
  {
    id: 44,
    word: "personality",
    meaning: "성격",
    pronunciation: "퍼스낼러티",
    sentence: "My personality is calm and friendly.",
    sentenceMeaning: "제 성격은 차분하고 친근해요.",
    sentencePronunciation: "마이 퍼스낼러티 이즈 캄 앤 프렌들리",
    category: "자기소개"
  },
  {
    id: 45,
    word: "nickname",
    meaning: "별명",
    pronunciation: "닉네임",
    sentence: "My nickname is easy to remember.",
    sentenceMeaning: "제 별명은 기억하기 쉬워요.",
    sentencePronunciation: "마이 닉네임 이즈 이지 투 리멤버",
    category: "자기소개"
  },
  {
    id: 46,
    word: "address",
    meaning: "주소",
    pronunciation: "어드레스",
    sentence: "My address is easy to find.",
    sentenceMeaning: "제 주소는 찾기 쉬워요.",
    sentencePronunciation: "마이 어드레스 이즈 이지 투 파인드",
    category: "자기소개"
  },
  {
    id: 47,
    word: "married",
    meaning: "결혼한",
    pronunciation: "메리드",
    sentence: "I am married and live with my spouse.",
    sentenceMeaning: "저는 결혼했고 배우자와 살아요.",
    sentencePronunciation: "아이 앰 메리드 앤 리브 위드 마이 스파우스",
    category: "자기소개"
  },
  {
    id: 48,
    word: "single",
    meaning: "싱글, 미혼",
    pronunciation: "싱글",
    sentence: "I am single and enjoy my free time.",
    sentenceMeaning: "저는 싱글이고 자유 시간을 즐겨요.",
    sentencePronunciation: "아이 앰 싱글 앤 인조이 마이 프리 타임",
    category: "자기소개"
  },
  {
    id: 49,
    word: "career",
    meaning: "경력, 커리어",
    pronunciation: "커리어",
    sentence: "My career started at a small company.",
    sentenceMeaning: "제 커리어는 작은 회사에서 시작됐어요.",
    sentencePronunciation: "마이 커리어 스타티드 앳 어 스몰 컴퍼니",
    category: "자기소개"
  },
  {
    id: 50,
    word: "parents",
    meaning: "부모님",
    pronunciation: "페어런츠",
    sentence: "I visit my parents on weekends.",
    sentenceMeaning: "저는 주말마다 부모님을 뵈어요.",
    sentencePronunciation: "아이 비지트 마이 페어런츠 온 위켄즈",
    category: "가족/친구"
  },
  {
    id: 51,
    word: "mother",
    meaning: "어머니",
    pronunciation: "마더",
    sentence: "I often cook with my mother.",
    sentenceMeaning: "저는 자주 어머니와 요리해요.",
    sentencePronunciation: "아이 오픈 쿡 위드 마이 마더",
    category: "가족/친구"
  },
  {
    id: 52,
    word: "father",
    meaning: "아버지",
    pronunciation: "파더",
    sentence: "I talk with my father after dinner.",
    sentenceMeaning: "저는 저녁 후에 아버지와 이야기해요.",
    sentencePronunciation: "아이 톡 위드 마이 파더 애프터 디너",
    category: "가족/친구"
  },
  {
    id: 53,
    word: "brother",
    meaning: "형제, 남자 형제",
    pronunciation: "브라더",
    sentence: "I watch movies with my brother.",
    sentenceMeaning: "저는 형제와 영화를 봐요.",
    sentencePronunciation: "아이 와치 무비즈 위드 마이 브라더",
    category: "가족/친구"
  },
  {
    id: 54,
    word: "sister",
    meaning: "자매, 여자 형제",
    pronunciation: "시스터",
    sentence: "I usually shop with my sister.",
    sentenceMeaning: "저는 보통 자매와 쇼핑해요.",
    sentencePronunciation: "아이 유주얼리 샵 위드 마이 시스터",
    category: "가족/친구"
  },
  {
    id: 55,
    word: "cousin",
    meaning: "사촌",
    pronunciation: "커즌",
    sentence: "I met my cousin last month.",
    sentenceMeaning: "저는 지난달에 사촌을 만났어요.",
    sentencePronunciation: "아이 멧 마이 커즌 라스트 먼스",
    category: "가족/친구"
  },
  {
    id: 56,
    word: "uncle",
    meaning: "삼촌, 외삼촌",
    pronunciation: "엉클",
    sentence: "I sometimes call my uncle on holidays.",
    sentenceMeaning: "저는 휴일에 가끔 삼촌께 전화해요.",
    sentencePronunciation: "아이 섬타임즈 콜 마이 엉클 온 할러데이즈",
    category: "가족/친구"
  },
  {
    id: 57,
    word: "aunt",
    meaning: "이모, 고모, 숙모",
    pronunciation: "앤트",
    sentence: "My aunt makes delicious food.",
    sentenceMeaning: "우리 이모는 맛있는 음식을 만들어요.",
    sentencePronunciation: "마이 앤트 메익스 딜리셔스 푸드",
    category: "가족/친구"
  },
  {
    id: 58,
    word: "grandparents",
    meaning: "조부모님",
    pronunciation: "그랜드페어런츠",
    sentence: "I miss my grandparents a lot.",
    sentenceMeaning: "저는 조부모님이 많이 보고 싶어요.",
    sentencePronunciation: "아이 미스 마이 그랜드페어런츠 어 랏",
    category: "가족/친구"
  },
  {
    id: 59,
    word: "husband",
    meaning: "남편",
    pronunciation: "허즈번드",
    sentence: "I drink coffee with my husband.",
    sentenceMeaning: "저는 남편과 커피를 마셔요.",
    sentencePronunciation: "아이 드링크 커피 위드 마이 허즈번드",
    category: "가족/친구"
  },
  {
    id: 60,
    word: "wife",
    meaning: "아내",
    pronunciation: "와이프",
    sentence: "I go for walks with my wife.",
    sentenceMeaning: "저는 아내와 산책해요.",
    sentencePronunciation: "아이 고 포 웍스 위드 마이 와이프",
    category: "가족/친구"
  },
  {
    id: 61,
    word: "son",
    meaning: "아들",
    pronunciation: "선",
    sentence: "My son likes playing outside.",
    sentenceMeaning: "제 아들은 밖에서 노는 것을 좋아해요.",
    sentencePronunciation: "마이 선 라이크스 플레이잉 아웃사이드",
    category: "가족/친구"
  },
  {
    id: 62,
    word: "daughter",
    meaning: "딸",
    pronunciation: "도터",
    sentence: "My daughter loves reading books.",
    sentenceMeaning: "제 딸은 책 읽는 것을 좋아해요.",
    sentencePronunciation: "마이 도터 러브즈 리딩 북스",
    category: "가족/친구"
  },
  {
    id: 63,
    word: "classmate",
    meaning: "동창, 급우",
    pronunciation: "클래스메이트",
    sentence: "I still meet an old classmate sometimes.",
    sentenceMeaning: "저는 아직도 옛 동창을 가끔 만나요.",
    sentencePronunciation: "아이 스틸 밋 언 올드 클래스메이트 섬타임즈",
    category: "가족/친구"
  },
  {
    id: 64,
    word: "roommate",
    meaning: "룸메이트",
    pronunciation: "룸메이트",
    sentence: "My roommate keeps the room clean.",
    sentenceMeaning: "제 룸메이트는 방을 깨끗하게 유지해요.",
    sentencePronunciation: "마이 룸메이트 킵스 더 룸 클린",
    category: "가족/친구"
  },
  {
    id: 65,
    word: "neighbor",
    meaning: "이웃",
    pronunciation: "네이버",
    sentence: "My neighbor is very friendly.",
    sentenceMeaning: "제 이웃은 아주 친절해요.",
    sentencePronunciation: "마이 네이버 이즈 베리 프렌들리",
    category: "가족/친구"
  },
  {
    id: 66,
    word: "call",
    meaning: "전화, 전화하다",
    pronunciation: "콜",
    sentence: "I call my family every evening.",
    sentenceMeaning: "저는 매일 저녁 가족에게 전화해요.",
    sentencePronunciation: "아이 콜 마이 패밀리 에브리 이브닝",
    category: "가족/친구"
  },
  {
    id: 67,
    word: "message",
    meaning: "메시지",
    pronunciation: "메시지",
    sentence: "I send a message to my friend every day.",
    sentenceMeaning: "저는 매일 친구에게 메시지를 보내요.",
    sentencePronunciation: "아이 샌드 어 메시지 투 마이 프렌드 에브리 데이",
    category: "가족/친구"
  },
  {
    id: 68,
    word: "house",
    meaning: "집",
    pronunciation: "하우스",
    sentence: "My house is small but cozy.",
    sentenceMeaning: "우리 집은 작지만 아늑해요.",
    sentencePronunciation: "마이 하우스 이즈 스몰 벗 코지",
    category: "집/동네"
  },
  {
    id: 69,
    word: "room",
    meaning: "방",
    pronunciation: "룸",
    sentence: "I clean my room every weekend.",
    sentenceMeaning: "저는 주말마다 방을 청소해요.",
    sentencePronunciation: "아이 클린 마이 룸 에브리 위켄드",
    category: "집/동네"
  },
  {
    id: 70,
    word: "bedroom",
    meaning: "침실",
    pronunciation: "베드룸",
    sentence: "My bedroom is very quiet at night.",
    sentenceMeaning: "제 침실은 밤에 아주 조용해요.",
    sentencePronunciation: "마이 베드룸 이즈 베리 콰이어트 앳 나이트",
    category: "집/동네"
  },
  {
    id: 71,
    word: "bathroom",
    meaning: "욕실",
    pronunciation: "배스룸",
    sentence: "I keep my bathroom clean and dry.",
    sentenceMeaning: "저는 욕실을 깨끗하고 건조하게 유지해요.",
    sentencePronunciation: "아이 킵 마이 배스룸 클린 앤 드라이",
    category: "집/동네"
  },
  {
    id: 72,
    word: "living room",
    meaning: "거실",
    pronunciation: "리빙 룸",
    sentence: "I relax in the living room after work.",
    sentenceMeaning: "저는 퇴근 후 거실에서 쉬어요.",
    sentencePronunciation: "아이 릴랙스 인 더 리빙 룸 애프터 워크",
    category: "집/동네"
  },
  {
    id: 73,
    word: "sofa",
    meaning: "소파",
    pronunciation: "소파",
    sentence: "I usually sit on the sofa and watch TV.",
    sentenceMeaning: "저는 보통 소파에 앉아 TV를 봐요.",
    sentencePronunciation: "아이 유주얼리 싯 온 더 소파 앤 와치 티비",
    category: "집/동네"
  },
  {
    id: 74,
    word: "desk",
    meaning: "책상",
    pronunciation: "데스크",
    sentence: "I study English at my desk.",
    sentenceMeaning: "저는 책상에서 영어 공부를 해요.",
    sentencePronunciation: "아이 스터디 잉글리시 앳 마이 데스크",
    category: "집/동네"
  },
  {
    id: 75,
    word: "chair",
    meaning: "의자",
    pronunciation: "체어",
    sentence: "My chair is comfortable for long study time.",
    sentenceMeaning: "제 의자는 오래 공부하기에 편해요.",
    sentencePronunciation: "마이 체어 이즈 컴포터블 포 롱 스터디 타임",
    category: "집/동네"
  },
  {
    id: 76,
    word: "table",
    meaning: "탁자, 식탁",
    pronunciation: "테이블",
    sentence: "I eat dinner at the table with my family.",
    sentenceMeaning: "저는 가족과 식탁에서 저녁을 먹어요.",
    sentencePronunciation: "아이 잇 디너 앳 더 테이블 위드 마이 패밀리",
    category: "집/동네"
  },
  {
    id: 77,
    word: "window",
    meaning: "창문",
    pronunciation: "윈도우",
    sentence: "I open the window every morning.",
    sentenceMeaning: "저는 매일 아침 창문을 열어요.",
    sentencePronunciation: "아이 오픈 더 윈도우 에브리 모닝",
    category: "집/동네"
  },
  {
    id: 78,
    word: "door",
    meaning: "문",
    pronunciation: "도어",
    sentence: "I lock the door before I go out.",
    sentenceMeaning: "저는 외출 전에 문을 잠가요.",
    sentencePronunciation: "아이 락 더 도어 비포 아이 고 아웃",
    category: "집/동네"
  },
  {
    id: 79,
    word: "balcony",
    meaning: "발코니",
    pronunciation: "발코니",
    sentence: "I grow small plants on my balcony.",
    sentenceMeaning: "저는 발코니에서 작은 식물을 키워요.",
    sentencePronunciation: "아이 그로 스몰 플랜츠 온 마이 발코니",
    category: "집/동네"
  },
  {
    id: 80,
    word: "elevator",
    meaning: "엘리베이터",
    pronunciation: "엘리베이터",
    sentence: "I take the elevator to my apartment.",
    sentenceMeaning: "저는 아파트까지 엘리베이터를 타요.",
    sentencePronunciation: "아이 테이크 디 엘리베이터 투 마이 어파트먼트",
    category: "집/동네"
  },
  {
    id: 81,
    word: "park",
    meaning: "공원",
    pronunciation: "파크",
    sentence: "I walk in the park near my house.",
    sentenceMeaning: "저는 집 근처 공원에서 걸어요.",
    sentencePronunciation: "아이 워크 인 더 파크 니어 마이 하우스",
    category: "집/동네"
  },
  {
    id: 82,
    word: "library",
    meaning: "도서관",
    pronunciation: "라이브러리",
    sentence: "I borrow books from the local library.",
    sentenceMeaning: "저는 동네 도서관에서 책을 빌려요.",
    sentencePronunciation: "아이 바로우 북스 프럼 더 로컬 라이브러리",
    category: "집/동네"
  },
  {
    id: 83,
    word: "street",
    meaning: "거리",
    pronunciation: "스트리트",
    sentence: "The street near my house is quiet.",
    sentenceMeaning: "제 집 근처 거리는 조용해요.",
    sentencePronunciation: "더 스트리트 니어 마이 하우스 이즈 콰이어트",
    category: "집/동네"
  },
  {
    id: 84,
    word: "market",
    meaning: "시장",
    pronunciation: "마켓",
    sentence: "I buy vegetables at the market.",
    sentenceMeaning: "저는 시장에서 채소를 사요.",
    sentencePronunciation: "아이 바이 베저터블즈 앳 더 마켓",
    category: "집/동네"
  },
  {
    id: 85,
    word: "lunch",
    meaning: "점심",
    pronunciation: "런치",
    sentence: "I usually eat lunch with my coworkers.",
    sentenceMeaning: "저는 보통 동료들과 점심을 먹어요.",
    sentencePronunciation: "아이 유주얼리 잇 런치 위드 마이 코워커즈",
    category: "음식"
  },
  {
    id: 86,
    word: "snack",
    meaning: "간식",
    pronunciation: "스낵",
    sentence: "I eat a small snack in the afternoon.",
    sentenceMeaning: "저는 오후에 작은 간식을 먹어요.",
    sentencePronunciation: "아이 잇 어 스몰 스낵 인 디 애프터눈",
    category: "음식"
  },
  {
    id: 87,
    word: "rice",
    meaning: "밥, 쌀",
    pronunciation: "라이스",
    sentence: "I eat rice almost every day.",
    sentenceMeaning: "저는 거의 매일 밥을 먹어요.",
    sentencePronunciation: "아이 잇 라이스 올모스트 에브리 데이",
    category: "음식"
  },
  {
    id: 88,
    word: "bread",
    meaning: "빵",
    pronunciation: "브레드",
    sentence: "I sometimes buy fresh bread in the morning.",
    sentenceMeaning: "저는 가끔 아침에 갓 만든 빵을 사요.",
    sentencePronunciation: "아이 섬타임즈 바이 프레시 브레드 인 더 모닝",
    category: "음식"
  },
  {
    id: 89,
    word: "soup",
    meaning: "수프, 국",
    pronunciation: "수프",
    sentence: "I like hot soup on cold days.",
    sentenceMeaning: "저는 추운 날에 뜨거운 수프를 좋아해요.",
    sentencePronunciation: "아이 라이크 핫 수프 온 콜드 데이즈",
    category: "음식"
  },
  {
    id: 90,
    word: "salad",
    meaning: "샐러드",
    pronunciation: "샐러드",
    sentence: "I eat salad when I want a light meal.",
    sentenceMeaning: "저는 가볍게 먹고 싶을 때 샐러드를 먹어요.",
    sentencePronunciation: "아이 잇 샐러드 웬 아이 원트 어 라이트 밀",
    category: "음식"
  },
  {
    id: 91,
    word: "noodle",
    meaning: "국수, 면",
    pronunciation: "누들",
    sentence: "I often eat noodle soup for lunch.",
    sentenceMeaning: "저는 점심으로 국수를 자주 먹어요.",
    sentencePronunciation: "아이 오픈 잇 누들 수프 포 런치",
    category: "음식"
  },
  {
    id: 92,
    word: "chicken",
    meaning: "치킨, 닭고기",
    pronunciation: "치킨",
    sentence: "I ordered chicken for dinner last night.",
    sentenceMeaning: "저는 어젯밤 저녁으로 치킨을 주문했어요.",
    sentencePronunciation: "아이 오더드 치킨 포 디너 라스트 나이트",
    category: "음식"
  },
  {
    id: 93,
    word: "pizza",
    meaning: "피자",
    pronunciation: "피자",
    sentence: "I eat pizza when I meet my friends.",
    sentenceMeaning: "저는 친구들을 만나면 피자를 먹어요.",
    sentencePronunciation: "아이 잇 피자 웬 아이 밋 마이 프렌즈",
    category: "음식"
  },
  {
    id: 94,
    word: "burger",
    meaning: "버거",
    pronunciation: "버거",
    sentence: "I sometimes have a burger on busy days.",
    sentenceMeaning: "저는 바쁜 날에 가끔 버거를 먹어요.",
    sentencePronunciation: "아이 섬타임즈 해브 어 버거 온 비지 데이즈",
    category: "음식"
  },
  {
    id: 95,
    word: "fruit",
    meaning: "과일",
    pronunciation: "프루트",
    sentence: "I try to eat fruit every day.",
    sentenceMeaning: "저는 매일 과일을 먹으려고 해요.",
    sentencePronunciation: "아이 트라이 투 잇 프루트 에브리 데이",
    category: "음식"
  },
  {
    id: 96,
    word: "apple",
    meaning: "사과",
    pronunciation: "애플",
    sentence: "I usually take an apple to work.",
    sentenceMeaning: "저는 보통 사과 하나를 회사에 가져가요.",
    sentencePronunciation: "아이 유주얼리 테이크 언 애플 투 워크",
    category: "음식"
  },
  {
    id: 97,
    word: "banana",
    meaning: "바나나",
    pronunciation: "버내너",
    sentence: "I eat a banana after exercise.",
    sentenceMeaning: "저는 운동 후에 바나나를 먹어요.",
    sentencePronunciation: "아이 잇 어 버내너 애프터 엑서사이즈",
    category: "음식"
  },
  {
    id: 98,
    word: "water",
    meaning: "물",
    pronunciation: "워터",
    sentence: "I drink a lot of water every day.",
    sentenceMeaning: "저는 매일 물을 많이 마셔요.",
    sentencePronunciation: "아이 드링크 어 랏 오브 워터 에브리 데이",
    category: "음식"
  },
  {
    id: 99,
    word: "juice",
    meaning: "주스",
    pronunciation: "주스",
    sentence: "I like orange juice in the morning.",
    sentenceMeaning: "저는 아침에 오렌지주스를 좋아해요.",
    sentencePronunciation: "아이 라이크 오렌지 주스 인 더 모닝",
    category: "음식"
  },
  {
    id: 100,
    word: "dessert",
    meaning: "디저트",
    pronunciation: "디저트",
    sentence: "I enjoy dessert after dinner.",
    sentenceMeaning: "저는 저녁 후 디저트를 즐겨요.",
    sentencePronunciation: "아이 인조이 디저트 애프터 디너",
    category: "음식"
  },
  {
    id: 101,
    word: "meal",
    meaning: "식사",
    pronunciation: "밀",
    sentence: "I try not to skip a meal.",
    sentenceMeaning: "저는 식사를 거르지 않으려고 해요.",
    sentencePronunciation: "아이 트라이 낫 투 스킵 어 밀",
    category: "음식"
  },
  {
    id: 102,
    word: "recipe",
    meaning: "레시피",
    pronunciation: "레서피",
    sentence: "I use a simple recipe when I cook.",
    sentenceMeaning: "저는 요리할 때 간단한 레시피를 써요.",
    sentencePronunciation: "아이 유즈 어 심플 레서피 웬 아이 쿡",
    category: "음식"
  },
  {
    id: 103,
    word: "latte",
    meaning: "라테",
    pronunciation: "라테",
    sentence: "I usually order a hot latte.",
    sentenceMeaning: "저는 보통 따뜻한 라테를 주문해요.",
    sentencePronunciation: "아이 유주얼리 오더 어 핫 라테",
    category: "카페"
  },
  {
    id: 104,
    word: "tea",
    meaning: "차",
    pronunciation: "티",
    sentence: "I drink tea when I want to relax.",
    sentenceMeaning: "저는 쉬고 싶을 때 차를 마셔요.",
    sentencePronunciation: "아이 드링크 티 웬 아이 원트 투 릴랙스",
    category: "카페"
  },
  {
    id: 105,
    word: "cake",
    meaning: "케이크",
    pronunciation: "케이크",
    sentence: "I share cake with my friend at a cafe.",
    sentenceMeaning: "저는 카페에서 친구와 케이크를 나눠 먹어요.",
    sentencePronunciation: "아이 셰어 케이크 위드 마이 프렌드 앳 어 카페",
    category: "카페"
  },
  {
    id: 106,
    word: "cookie",
    meaning: "쿠키",
    pronunciation: "쿠키",
    sentence: "I buy a cookie with my coffee.",
    sentenceMeaning: "저는 커피와 함께 쿠키를 사요.",
    sentencePronunciation: "아이 바이 어 쿠키 위드 마이 커피",
    category: "카페"
  },
  {
    id: 107,
    word: "muffin",
    meaning: "머핀",
    pronunciation: "머핀",
    sentence: "I sometimes eat a muffin for breakfast.",
    sentenceMeaning: "저는 가끔 아침으로 머핀을 먹어요.",
    sentencePronunciation: "아이 섬타임즈 잇 어 머핀 포 브렉퍼스트",
    category: "카페"
  },
  {
    id: 108,
    word: "barista",
    meaning: "바리스타",
    pronunciation: "바리스타",
    sentence: "I ask the barista for a less sweet drink.",
    sentenceMeaning: "저는 바리스타에게 덜 단 음료를 부탁해요.",
    sentencePronunciation: "아이 애스크 더 바리스타 포 어 레스 스위트 드링크",
    category: "카페"
  },
  {
    id: 109,
    word: "counter",
    meaning: "카운터",
    pronunciation: "카운터",
    sentence: "I pay at the counter first.",
    sentenceMeaning: "저는 먼저 카운터에서 계산해요.",
    sentencePronunciation: "아이 페이 앳 더 카운터 퍼스트",
    category: "카페"
  },
  {
    id: 110,
    word: "receipt",
    meaning: "영수증",
    pronunciation: "리싯",
    sentence: "I keep the receipt in my bag.",
    sentenceMeaning: "저는 영수증을 가방에 넣어 둬요.",
    sentencePronunciation: "아이 킵 더 리싯 인 마이 백",
    category: "카페"
  },
  {
    id: 111,
    word: "cup",
    meaning: "컵",
    pronunciation: "컵",
    sentence: "I hold the warm cup with both hands.",
    sentenceMeaning: "저는 따뜻한 컵을 두 손으로 잡아요.",
    sentencePronunciation: "아이 홀드 더 웜 컵 위드 보스 핸즈",
    category: "카페"
  },
  {
    id: 112,
    word: "straw",
    meaning: "빨대",
    pronunciation: "스트로",
    sentence: "I do not use a straw very often.",
    sentenceMeaning: "저는 빨대를 자주 쓰지 않아요.",
    sentencePronunciation: "아이 두 낫 유즈 어 스트로 베리 오픈",
    category: "카페"
  },
  {
    id: 113,
    word: "ice",
    meaning: "얼음",
    pronunciation: "아이스",
    sentence: "I like a lot of ice in my drink.",
    sentenceMeaning: "저는 음료에 얼음이 많은 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 어 랏 오브 아이스 인 마이 드링크",
    category: "카페"
  },
  {
    id: 114,
    word: "sugar",
    meaning: "설탕",
    pronunciation: "슈거",
    sentence: "I do not add much sugar to coffee.",
    sentenceMeaning: "저는 커피에 설탕을 많이 넣지 않아요.",
    sentencePronunciation: "아이 두 낫 애드 머치 슈거 투 커피",
    category: "카페"
  },
  {
    id: 115,
    word: "syrup",
    meaning: "시럽",
    pronunciation: "시럽",
    sentence: "I ask for extra syrup in my latte.",
    sentenceMeaning: "저는 라테에 시럽을 더 넣어 달라고 해요.",
    sentencePronunciation: "아이 애스크 포 엑스트라 시럽 인 마이 라테",
    category: "카페"
  },
  {
    id: 116,
    word: "mug",
    meaning: "머그컵",
    pronunciation: "머그",
    sentence: "I like using a big mug at home.",
    sentenceMeaning: "저는 집에서 큰 머그컵을 쓰는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 유징 어 빅 머그 앳 홈",
    category: "카페"
  },
  {
    id: 117,
    word: "order",
    meaning: "주문, 주문하다",
    pronunciation: "오더",
    sentence: "I order the same drink every time.",
    sentenceMeaning: "저는 매번 같은 음료를 주문해요.",
    sentencePronunciation: "아이 오더 더 세임 드링크 에브리 타임",
    category: "카페"
  },
  {
    id: 118,
    word: "seat",
    meaning: "자리",
    pronunciation: "시트",
    sentence: "I choose a window seat when the cafe is quiet.",
    sentenceMeaning: "저는 카페가 조용할 때 창가 자리를 골라요.",
    sentencePronunciation: "아이 추즈 어 윈도우 시트 웬 더 카페 이즈 콰이어트",
    category: "카페"
  },
  {
    id: 119,
    word: "takeout",
    meaning: "테이크아웃",
    pronunciation: "테이크아웃",
    sentence: "I get takeout coffee on busy mornings.",
    sentenceMeaning: "저는 바쁜 아침에 테이크아웃 커피를 사요.",
    sentencePronunciation: "아이 겟 테이크아웃 커피 온 비지 모닝즈",
    category: "카페"
  },
  {
    id: 120,
    word: "napkin",
    meaning: "냅킨",
    pronunciation: "냅킨",
    sentence: "I always take an extra napkin.",
    sentenceMeaning: "저는 항상 냅킨을 하나 더 챙겨요.",
    sentencePronunciation: "아이 올웨이즈 테이크 언 엑스트라 냅킨",
    category: "카페"
  },
  {
    id: 121,
    word: "mall",
    meaning: "쇼핑몰",
    pronunciation: "몰",
    sentence: "I go to the mall on rainy days.",
    sentenceMeaning: "저는 비 오는 날 쇼핑몰에 가요.",
    sentencePronunciation: "아이 고 투 더 몰 온 레이니 데이즈",
    category: "쇼핑"
  },
  {
    id: 122,
    word: "store",
    meaning: "가게, 상점",
    pronunciation: "스토어",
    sentence: "I visit this store when I need basics.",
    sentenceMeaning: "저는 기본 물건이 필요할 때 이 가게에 가요.",
    sentencePronunciation: "아이 비지트 디스 스토어 웬 아이 니드 베이직스",
    category: "쇼핑"
  },
  {
    id: 123,
    word: "sale",
    meaning: "세일",
    pronunciation: "세일",
    sentence: "I wait for a big sale before I shop.",
    sentenceMeaning: "저는 쇼핑 전에 큰 세일을 기다려요.",
    sentencePronunciation: "아이 웨이트 포 어 빅 세일 비포 아이 샵",
    category: "쇼핑"
  },
  {
    id: 124,
    word: "price",
    meaning: "가격",
    pronunciation: "프라이스",
    sentence: "I check the price before I buy anything.",
    sentenceMeaning: "저는 무엇이든 사기 전에 가격을 확인해요.",
    sentencePronunciation: "아이 체크 더 프라이스 비포 아이 바이 애니씽",
    category: "쇼핑"
  },
  {
    id: 125,
    word: "size",
    meaning: "사이즈",
    pronunciation: "사이즈",
    sentence: "I always look for my size first.",
    sentenceMeaning: "저는 항상 먼저 제 사이즈를 봐요.",
    sentencePronunciation: "아이 올웨이즈 룩 포 마이 사이즈 퍼스트",
    category: "쇼핑"
  },
  {
    id: 126,
    word: "color",
    meaning: "색깔",
    pronunciation: "컬러",
    sentence: "I prefer calm colors like blue and gray.",
    sentenceMeaning: "저는 파랑과 회색 같은 차분한 색을 좋아해요.",
    sentencePronunciation: "아이 프리퍼 캄 컬러스 라이크 블루 앤 그레이",
    category: "쇼핑"
  },
  {
    id: 127,
    word: "fitting room",
    meaning: "피팅룸",
    pronunciation: "피팅 룸",
    sentence: "I try clothes on in the fitting room.",
    sentenceMeaning: "저는 피팅룸에서 옷을 입어 봐요.",
    sentencePronunciation: "아이 트라이 클로즈 온 인 더 피팅 룸",
    category: "쇼핑"
  },
  {
    id: 128,
    word: "card",
    meaning: "카드",
    pronunciation: "카드",
    sentence: "I usually pay by card.",
    sentenceMeaning: "저는 보통 카드로 계산해요.",
    sentencePronunciation: "아이 유주얼리 페이 바이 카드",
    category: "쇼핑"
  },
  {
    id: 129,
    word: "wallet",
    meaning: "지갑",
    pronunciation: "월릿",
    sentence: "I keep some cash in my wallet.",
    sentenceMeaning: "저는 지갑에 약간의 현금을 넣어 둬요.",
    sentencePronunciation: "아이 킵 섬 캐시 인 마이 월릿",
    category: "쇼핑"
  },
  {
    id: 130,
    word: "bag",
    meaning: "가방",
    pronunciation: "백",
    sentence: "I carry a shopping bag in my backpack.",
    sentenceMeaning: "저는 백팩에 쇼핑백을 넣고 다녀요.",
    sentencePronunciation: "아이 캐리 어 쇼핑 백 인 마이 백팩",
    category: "쇼핑"
  },
  {
    id: 131,
    word: "shoes",
    meaning: "신발",
    pronunciation: "슈즈",
    sentence: "I buy new shoes about once a year.",
    sentenceMeaning: "저는 1년에 한 번쯤 새 신발을 사요.",
    sentencePronunciation: "아이 바이 뉴 슈즈 어바웃 원스 어 이어",
    category: "쇼핑"
  },
  {
    id: 132,
    word: "shirt",
    meaning: "셔츠",
    pronunciation: "셔츠",
    sentence: "I bought a simple shirt last weekend.",
    sentenceMeaning: "저는 지난 주말에 심플한 셔츠를 샀어요.",
    sentencePronunciation: "아이 보트 어 심플 셔츠 라스트 위켄드",
    category: "쇼핑"
  },
  {
    id: 133,
    word: "pants",
    meaning: "바지",
    pronunciation: "팬츠",
    sentence: "I like comfortable pants for work.",
    sentenceMeaning: "저는 일할 때 편한 바지를 좋아해요.",
    sentencePronunciation: "아이 라이크 컴포터블 팬츠 포 워크",
    category: "쇼핑"
  },
  {
    id: 134,
    word: "skirt",
    meaning: "치마",
    pronunciation: "스커트",
    sentence: "I sometimes wear a long skirt in spring.",
    sentenceMeaning: "저는 봄에 가끔 긴 치마를 입어요.",
    sentencePronunciation: "아이 섬타임즈 웨어 어 롱 스커트 인 스프링",
    category: "쇼핑"
  },
  {
    id: 135,
    word: "coupon",
    meaning: "쿠폰",
    pronunciation: "쿠폰",
    sentence: "I use a coupon when I shop online.",
    sentenceMeaning: "저는 온라인 쇼핑할 때 쿠폰을 써요.",
    sentencePronunciation: "아이 유즈 어 쿠폰 웬 아이 샵 온라인",
    category: "쇼핑"
  },
  {
    id: 136,
    word: "brand",
    meaning: "브랜드",
    pronunciation: "브랜드",
    sentence: "I do not care much about brand names.",
    sentenceMeaning: "저는 브랜드를 많이 따지지 않아요.",
    sentencePronunciation: "아이 두 낫 케어 머치 어바웃 브랜드 네임즈",
    category: "쇼핑"
  },
  {
    id: 137,
    word: "online",
    meaning: "온라인",
    pronunciation: "온라인",
    sentence: "I buy household items online.",
    sentenceMeaning: "저는 생활용품을 온라인으로 사요.",
    sentencePronunciation: "아이 바이 하우스홀드 아이템즈 온라인",
    category: "쇼핑"
  },
  {
    id: 138,
    word: "package",
    meaning: "택배, 꾸러미",
    pronunciation: "패키지",
    sentence: "I open the package as soon as it arrives.",
    sentenceMeaning: "저는 택배가 오면 바로 열어 봐요.",
    sentencePronunciation: "아이 오픈 더 패키지 애즈 순 애즈 잇 어라이브즈",
    category: "쇼핑"
  },
  {
    id: 139,
    word: "airport",
    meaning: "공항",
    pronunciation: "에어포트",
    sentence: "I arrive at the airport early.",
    sentenceMeaning: "저는 공항에 일찍 도착해요.",
    sentencePronunciation: "아이 어라이브 앳 디 에어포트 얼리",
    category: "여행"
  },
  {
    id: 140,
    word: "airplane",
    meaning: "비행기",
    pronunciation: "에어플레인",
    sentence: "I like looking outside on the airplane.",
    sentenceMeaning: "저는 비행기에서 바깥을 보는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 루킹 아웃사이드 온 디 에어플레인",
    category: "여행"
  },
  {
    id: 141,
    word: "ticket",
    meaning: "티켓",
    pronunciation: "티켓",
    sentence: "I check my ticket before I leave home.",
    sentenceMeaning: "저는 집을 나서기 전에 티켓을 확인해요.",
    sentencePronunciation: "아이 체크 마이 티켓 비포 아이 리브 홈",
    category: "여행"
  },
  {
    id: 142,
    word: "passport",
    meaning: "여권",
    pronunciation: "패스포트",
    sentence: "I keep my passport in a safe place.",
    sentenceMeaning: "저는 여권을 안전한 곳에 둬요.",
    sentencePronunciation: "아이 킵 마이 패스포트 인 어 세이프 플레이스",
    category: "여행"
  },
  {
    id: 143,
    word: "suitcase",
    meaning: "여행 가방",
    pronunciation: "수트케이스",
    sentence: "I pack my suitcase the night before.",
    sentenceMeaning: "저는 전날 밤에 여행 가방을 싸요.",
    sentencePronunciation: "아이 팩 마이 수트케이스 더 나이트 비포",
    category: "여행"
  },
  {
    id: 144,
    word: "map",
    meaning: "지도",
    pronunciation: "맵",
    sentence: "I use a map when I visit a new city.",
    sentenceMeaning: "저는 새로운 도시에 가면 지도를 써요.",
    sentencePronunciation: "아이 유즈 어 맵 웬 아이 비지트 어 뉴 시티",
    category: "여행"
  },
  {
    id: 145,
    word: "tour",
    meaning: "투어",
    pronunciation: "투어",
    sentence: "I joined a city tour on my last trip.",
    sentenceMeaning: "저는 지난 여행에서 시티 투어에 참가했어요.",
    sentencePronunciation: "아이 조인드 어 시티 투어 온 마이 라스트 트립",
    category: "여행"
  },
  {
    id: 146,
    word: "guide",
    meaning: "가이드",
    pronunciation: "가이드",
    sentence: "I listened to the guide very carefully.",
    sentenceMeaning: "저는 가이드의 설명을 아주 주의 깊게 들었어요.",
    sentencePronunciation: "아이 리슨드 투 더 가이드 베리 케어풀리",
    category: "여행"
  },
  {
    id: 147,
    word: "picture",
    meaning: "사진",
    pronunciation: "픽처",
    sentence: "I take many pictures when I travel.",
    sentenceMeaning: "저는 여행할 때 사진을 많이 찍어요.",
    sentencePronunciation: "아이 테이크 매니 픽처즈 웬 아이 트래블",
    category: "여행"
  },
  {
    id: 148,
    word: "mountain",
    meaning: "산",
    pronunciation: "마운틴",
    sentence: "I want to see a mountain view on vacation.",
    sentenceMeaning: "저는 휴가 때 산 전망을 보고 싶어요.",
    sentencePronunciation: "아이 원트 투 씨 어 마운틴 뷰 온 베이케이션",
    category: "여행"
  },
  {
    id: 149,
    word: "island",
    meaning: "섬",
    pronunciation: "아일랜드",
    sentence: "I dream of visiting a quiet island.",
    sentenceMeaning: "저는 조용한 섬을 방문하는 꿈을 꿔요.",
    sentencePronunciation: "아이 드림 오브 비지팅 어 콰이어트 아일랜드",
    category: "여행"
  },
  {
    id: 150,
    word: "river",
    meaning: "강",
    pronunciation: "리버",
    sentence: "I walked along the river in the evening.",
    sentenceMeaning: "저는 저녁에 강을 따라 걸었어요.",
    sentencePronunciation: "아이 워크트 얼롱 더 리버 인 디 이브닝",
    category: "여행"
  },
  {
    id: 151,
    word: "museum",
    meaning: "박물관",
    pronunciation: "뮤지엄",
    sentence: "I like going to a museum on trips.",
    sentenceMeaning: "저는 여행 가면 박물관에 가는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 고잉 투 어 뮤지엄 온 트립스",
    category: "여행"
  },
  {
    id: 152,
    word: "temple",
    meaning: "사원, 절",
    pronunciation: "템플",
    sentence: "I visited an old temple last year.",
    sentenceMeaning: "저는 작년에 오래된 사원을 방문했어요.",
    sentencePronunciation: "아이 비지티드 언 올드 템플 라스트 이어",
    category: "여행"
  },
  {
    id: 153,
    word: "reservation",
    meaning: "예약",
    pronunciation: "레저베이션",
    sentence: "I made a hotel reservation online.",
    sentenceMeaning: "저는 호텔 예약을 온라인으로 했어요.",
    sentencePronunciation: "아이 메이드 어 호텔 레저베이션 온라인",
    category: "여행"
  },
  {
    id: 154,
    word: "luggage",
    meaning: "짐",
    pronunciation: "러기지",
    sentence: "I keep my luggage simple and light.",
    sentenceMeaning: "저는 짐을 간단하고 가볍게 챙겨요.",
    sentencePronunciation: "아이 킵 마이 러기지 심플 앤 라이트",
    category: "여행"
  },
  {
    id: 155,
    word: "flight",
    meaning: "비행편",
    pronunciation: "플라이트",
    sentence: "My flight was early in the morning.",
    sentenceMeaning: "제 비행편은 아침 일찍이었어요.",
    sentencePronunciation: "마이 플라이트 워즈 얼리 인 더 모닝",
    category: "여행"
  },
  {
    id: 156,
    word: "view",
    meaning: "풍경, 전망",
    pronunciation: "뷰",
    sentence: "I loved the view from my hotel room.",
    sentenceMeaning: "저는 호텔 방에서 본 전망이 정말 좋았어요.",
    sentencePronunciation: "아이 러브드 더 뷰 프럼 마이 호텔 룸",
    category: "여행"
  },
  {
    id: 157,
    word: "drama",
    meaning: "드라마",
    pronunciation: "드라마",
    sentence: "I watch drama series after dinner.",
    sentenceMeaning: "저는 저녁 후에 드라마 시리즈를 봐요.",
    sentencePronunciation: "아이 와치 드라마 시리즈 애프터 디너",
    category: "영화/드라마"
  },
  {
    id: 158,
    word: "comedy",
    meaning: "코미디",
    pronunciation: "코미디",
    sentence: "I enjoy comedy because it makes me laugh.",
    sentenceMeaning: "저는 코미디가 웃음을 줘서 좋아해요.",
    sentencePronunciation: "아이 인조이 코미디 비커즈 잇 메익스 미 래프",
    category: "영화/드라마"
  },
  {
    id: 159,
    word: "action",
    meaning: "액션",
    pronunciation: "액션",
    sentence: "I like action movies on weekends.",
    sentenceMeaning: "저는 주말에 액션 영화를 좋아해요.",
    sentencePronunciation: "아이 라이크 액션 무비즈 온 위켄즈",
    category: "영화/드라마"
  },
  {
    id: 160,
    word: "scene",
    meaning: "장면",
    pronunciation: "신",
    sentence: "I remember one scene very well.",
    sentenceMeaning: "저는 한 장면을 아주 잘 기억해요.",
    sentencePronunciation: "아이 리멤버 원 신 베리 웰",
    category: "영화/드라마"
  },
  {
    id: 161,
    word: "ending",
    meaning: "결말",
    pronunciation: "엔딩",
    sentence: "I liked the ending of the movie.",
    sentenceMeaning: "저는 그 영화의 결말이 좋았어요.",
    sentencePronunciation: "아이 라이크드 디 엔딩 오브 더 무비",
    category: "영화/드라마"
  },
  {
    id: 162,
    word: "story",
    meaning: "이야기",
    pronunciation: "스토리",
    sentence: "The story was simple and easy to follow.",
    sentenceMeaning: "이야기가 단순하고 따라가기 쉬웠어요.",
    sentencePronunciation: "더 스토리 워즈 심플 앤 이지 투 팔로",
    category: "영화/드라마"
  },
  {
    id: 163,
    word: "character",
    meaning: "캐릭터",
    pronunciation: "캐릭터",
    sentence: "I liked the main character a lot.",
    sentenceMeaning: "저는 주인공 캐릭터가 많이 좋았어요.",
    sentencePronunciation: "아이 라이크드 더 메인 캐릭터 어 랏",
    category: "영화/드라마"
  },
  {
    id: 164,
    word: "actress",
    meaning: "여배우",
    pronunciation: "액트리스",
    sentence: "My favorite actress has a warm smile.",
    sentenceMeaning: "제가 좋아하는 여배우는 따뜻한 미소가 있어요.",
    sentencePronunciation: "마이 페이버릿 액트리스 해즈 어 웜 스마일",
    category: "영화/드라마"
  },
  {
    id: 165,
    word: "episode",
    meaning: "에피소드",
    pronunciation: "에피소드",
    sentence: "I watched two episodes last night.",
    sentenceMeaning: "저는 어젯밤에 두 편을 봤어요.",
    sentencePronunciation: "아이 와치드 투 에피소드즈 라스트 나이트",
    category: "영화/드라마"
  },
  {
    id: 166,
    word: "channel",
    meaning: "채널",
    pronunciation: "채널",
    sentence: "I changed the channel after the show ended.",
    sentenceMeaning: "저는 프로그램이 끝난 뒤 채널을 바꿨어요.",
    sentencePronunciation: "아이 체인지드 더 채널 애프터 더 쇼 엔디드",
    category: "영화/드라마"
  },
  {
    id: 167,
    word: "screen",
    meaning: "스크린",
    pronunciation: "스크린",
    sentence: "I like watching movies on a big screen.",
    sentenceMeaning: "저는 큰 스크린으로 영화를 보는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 와칭 무비즈 온 어 빅 스크린",
    category: "영화/드라마"
  },
  {
    id: 168,
    word: "popcorn",
    meaning: "팝콘",
    pronunciation: "팝콘",
    sentence: "I always buy popcorn at the theater.",
    sentenceMeaning: "저는 극장에서 항상 팝콘을 사요.",
    sentencePronunciation: "아이 올웨이즈 바이 팝콘 앳 더 시어터",
    category: "영화/드라마"
  },
  {
    id: 169,
    word: "subtitle",
    meaning: "자막",
    pronunciation: "섭타이틀",
    sentence: "I use English subtitles sometimes.",
    sentenceMeaning: "저는 가끔 영어 자막을 켜요.",
    sentencePronunciation: "아이 유즈 잉글리시 섭타이틀즈 섬타임즈",
    category: "영화/드라마"
  },
  {
    id: 170,
    word: "theater",
    meaning: "극장",
    pronunciation: "시어터",
    sentence: "I went to the theater with my friend.",
    sentenceMeaning: "저는 친구와 극장에 갔어요.",
    sentencePronunciation: "아이 웬트 투 더 시어터 위드 마이 프렌드",
    category: "영화/드라마"
  },
  {
    id: 171,
    word: "trailer",
    meaning: "예고편",
    pronunciation: "트레일러",
    sentence: "I saw the trailer before the movie came out.",
    sentenceMeaning: "저는 영화 개봉 전에 예고편을 봤어요.",
    sentencePronunciation: "아이 소 더 트레일러 비포 더 무비 케임 아웃",
    category: "영화/드라마"
  },
  {
    id: 172,
    word: "series",
    meaning: "시리즈",
    pronunciation: "시리즈",
    sentence: "I started a new series this week.",
    sentenceMeaning: "저는 이번 주에 새 시리즈를 시작했어요.",
    sentencePronunciation: "아이 스타티드 어 뉴 시리즈 디스 위크",
    category: "영화/드라마"
  },
  {
    id: 173,
    word: "director",
    meaning: "감독",
    pronunciation: "디렉터",
    sentence: "I like movies by this director.",
    sentenceMeaning: "저는 이 감독의 영화를 좋아해요.",
    sentencePronunciation: "아이 라이크 무비즈 바이 디스 디렉터",
    category: "영화/드라마"
  },
  {
    id: 174,
    word: "star",
    meaning: "스타, 유명 배우",
    pronunciation: "스타",
    sentence: "The movie star was very popular.",
    sentenceMeaning: "그 영화배우는 아주 인기가 많았어요.",
    sentencePronunciation: "더 무비 스타 워즈 베리 파퓰러",
    category: "영화/드라마"
  },
  {
    id: 175,
    word: "music",
    meaning: "음악",
    pronunciation: "뮤직",
    sentence: "I listen to music on my way home.",
    sentenceMeaning: "저는 집에 가는 길에 음악을 들어요.",
    sentencePronunciation: "아이 리슨 투 뮤직 온 마이 웨이 홈",
    category: "취미"
  },
  {
    id: 176,
    word: "song",
    meaning: "노래",
    pronunciation: "송",
    sentence: "This song makes me feel relaxed.",
    sentenceMeaning: "이 노래는 저를 편안하게 해 줘요.",
    sentencePronunciation: "디스 송 메익스 미 필 릴랙스트",
    category: "취미"
  },
  {
    id: 177,
    word: "piano",
    meaning: "피아노",
    pronunciation: "피아노",
    sentence: "I learned piano when I was young.",
    sentenceMeaning: "저는 어릴 때 피아노를 배웠어요.",
    sentencePronunciation: "아이 런드 피아노 웬 아이 워즈 영",
    category: "취미"
  },
  {
    id: 178,
    word: "drawing",
    meaning: "그림 그리기",
    pronunciation: "드로잉",
    sentence: "I enjoy drawing in my free time.",
    sentenceMeaning: "저는 자유 시간에 그림 그리기를 즐겨요.",
    sentencePronunciation: "아이 인조이 드로잉 인 마이 프리 타임",
    category: "취미"
  },
  {
    id: 179,
    word: "reading",
    meaning: "독서",
    pronunciation: "리딩",
    sentence: "I do some reading before bed.",
    sentenceMeaning: "저는 자기 전에 조금 읽어요.",
    sentencePronunciation: "아이 두 섬 리딩 비포 베드",
    category: "취미"
  },
  {
    id: 180,
    word: "book",
    meaning: "책",
    pronunciation: "북",
    sentence: "I bought a new book yesterday.",
    sentenceMeaning: "저는 어제 새 책을 샀어요.",
    sentencePronunciation: "아이 보트 어 뉴 북 예스터데이",
    category: "취미"
  },
  {
    id: 181,
    word: "game",
    meaning: "게임",
    pronunciation: "게임",
    sentence: "I play simple games on my phone.",
    sentenceMeaning: "저는 휴대폰으로 간단한 게임을 해요.",
    sentencePronunciation: "아이 플레이 심플 게임즈 온 마이 폰",
    category: "취미"
  },
  {
    id: 182,
    word: "puzzle",
    meaning: "퍼즐",
    pronunciation: "퍼즐",
    sentence: "I like doing a puzzle on quiet nights.",
    sentenceMeaning: "저는 조용한 밤에 퍼즐 하는 걸 좋아해요.",
    sentencePronunciation: "아이 라이크 두잉 어 퍼즐 온 콰이어트 나이츠",
    category: "취미"
  },
  {
    id: 183,
    word: "dance",
    meaning: "춤",
    pronunciation: "댄스",
    sentence: "I watch dance videos for fun.",
    sentenceMeaning: "저는 재미로 춤 영상을 봐요.",
    sentencePronunciation: "아이 와치 댄스 비디오즈 포 펀",
    category: "취미"
  },
  {
    id: 184,
    word: "diary",
    meaning: "일기",
    pronunciation: "다이어리",
    sentence: "I write a short diary every night.",
    sentenceMeaning: "저는 매일 밤 짧은 일기를 써요.",
    sentencePronunciation: "아이 라이트 어 쇼트 다이어리 에브리 나이트",
    category: "취미"
  },
  {
    id: 185,
    word: "painting",
    meaning: "그림 그리기, 페인팅",
    pronunciation: "페인팅",
    sentence: "I tried painting at home last month.",
    sentenceMeaning: "저는 지난달 집에서 그림 그리기를 해 봤어요.",
    sentencePronunciation: "아이 트라이드 페인팅 앳 홈 라스트 먼스",
    category: "취미"
  },
  {
    id: 186,
    word: "camera",
    meaning: "카메라",
    pronunciation: "캐머라",
    sentence: "I carry my camera on trips.",
    sentenceMeaning: "저는 여행할 때 카메라를 가져가요.",
    sentencePronunciation: "아이 캐리 마이 캐머라 온 트립스",
    category: "취미"
  },
  {
    id: 187,
    word: "baking",
    meaning: "굽기, 베이킹",
    pronunciation: "베이킹",
    sentence: "I enjoy baking cookies on weekends.",
    sentenceMeaning: "저는 주말에 쿠키 굽는 걸 즐겨요.",
    sentencePronunciation: "아이 인조이 베이킹 쿠키즈 온 위켄즈",
    category: "취미"
  },
  {
    id: 188,
    word: "knitting",
    meaning: "뜨개질",
    pronunciation: "니팅",
    sentence: "I learned knitting from my mother.",
    sentenceMeaning: "저는 어머니께 뜨개질을 배웠어요.",
    sentencePronunciation: "아이 런드 니팅 프럼 마이 마더",
    category: "취미"
  },
  {
    id: 189,
    word: "collection",
    meaning: "수집품, 컬렉션",
    pronunciation: "컬렉션",
    sentence: "I have a small postcard collection.",
    sentenceMeaning: "저는 작은 엽서 수집이 있어요.",
    sentencePronunciation: "아이 해브 어 스몰 포스트카드 컬렉션",
    category: "취미"
  },
  {
    id: 190,
    word: "comic",
    meaning: "만화",
    pronunciation: "코믹",
    sentence: "I still read comic books sometimes.",
    sentenceMeaning: "저는 아직도 가끔 만화책을 읽어요.",
    sentencePronunciation: "아이 스틸 리드 코믹 북스 섬타임즈",
    category: "취미"
  },
  {
    id: 191,
    word: "video",
    meaning: "영상",
    pronunciation: "비디오",
    sentence: "I make short videos as a hobby.",
    sentenceMeaning: "저는 취미로 짧은 영상을 만들어요.",
    sentencePronunciation: "아이 메이크 쇼트 비디오즈 애즈 어 하비",
    category: "취미"
  },
  {
    id: 192,
    word: "podcast",
    meaning: "팟캐스트",
    pronunciation: "팟캐스트",
    sentence: "I listen to a podcast while walking.",
    sentenceMeaning: "저는 걸으면서 팟캐스트를 들어요.",
    sentencePronunciation: "아이 리슨 투 어 팟캐스트 와일 워킹",
    category: "취미"
  },
  {
    id: 193,
    word: "yoga",
    meaning: "요가",
    pronunciation: "요가",
    sentence: "I do yoga at home in the morning.",
    sentenceMeaning: "저는 아침에 집에서 요가를 해요.",
    sentencePronunciation: "아이 두 요가 앳 홈 인 더 모닝",
    category: "운동"
  },
  {
    id: 194,
    word: "running",
    meaning: "달리기",
    pronunciation: "러닝",
    sentence: "I enjoy running in the park.",
    sentenceMeaning: "저는 공원에서 달리기를 즐겨요.",
    sentencePronunciation: "아이 인조이 러닝 인 더 파크",
    category: "운동"
  },
  {
    id: 195,
    word: "walking",
    meaning: "걷기",
    pronunciation: "워킹",
    sentence: "I do a lot of walking on weekends.",
    sentenceMeaning: "저는 주말에 많이 걸어요.",
    sentencePronunciation: "아이 두 어 랏 오브 워킹 온 위켄즈",
    category: "운동"
  },
  {
    id: 196,
    word: "stretching",
    meaning: "스트레칭",
    pronunciation: "스트레칭",
    sentence: "I start with stretching before exercise.",
    sentenceMeaning: "저는 운동 전에 스트레칭부터 해요.",
    sentencePronunciation: "아이 스타트 위드 스트레칭 비포 엑서사이즈",
    category: "운동"
  },
  {
    id: 197,
    word: "soccer",
    meaning: "축구",
    pronunciation: "사커",
    sentence: "I played soccer with my friends in school.",
    sentenceMeaning: "저는 학교 다닐 때 친구들과 축구했어요.",
    sentencePronunciation: "아이 플레이드 사커 위드 마이 프렌즈 인 스쿨",
    category: "운동"
  },
  {
    id: 198,
    word: "baseball",
    meaning: "야구",
    pronunciation: "베이스볼",
    sentence: "I sometimes watch baseball with my father.",
    sentenceMeaning: "저는 가끔 아버지와 야구를 봐요.",
    sentencePronunciation: "아이 섬타임즈 와치 베이스볼 위드 마이 파더",
    category: "운동"
  },
  {
    id: 199,
    word: "tennis",
    meaning: "테니스",
    pronunciation: "테니스",
    sentence: "I want to learn tennis this year.",
    sentenceMeaning: "저는 올해 테니스를 배우고 싶어요.",
    sentencePronunciation: "아이 원트 투 런 테니스 디스 이어",
    category: "운동"
  },
  {
    id: 200,
    word: "badminton",
    meaning: "배드민턴",
    pronunciation: "배드민턴",
    sentence: "I play badminton at a nearby gym.",
    sentenceMeaning: "저는 근처 체육관에서 배드민턴을 쳐요.",
    sentencePronunciation: "아이 플레이 배드민턴 앳 어 니어바이 짐",
    category: "운동"
  },
  {
    id: 201,
    word: "bicycle",
    meaning: "자전거",
    pronunciation: "바이시클",
    sentence: "I ride my bicycle along the river.",
    sentenceMeaning: "저는 강을 따라 자전거를 타요.",
    sentencePronunciation: "아이 라이드 마이 바이시클 얼롱 더 리버",
    category: "운동"
  },
  {
    id: 202,
    word: "hiking",
    meaning: "등산, 하이킹",
    pronunciation: "하이킹",
    sentence: "I go hiking in the fall.",
    sentenceMeaning: "저는 가을에 등산을 가요.",
    sentencePronunciation: "아이 고 하이킹 인 더 폴",
    category: "운동"
  },
  {
    id: 203,
    word: "trainer",
    meaning: "트레이너",
    pronunciation: "트레이너",
    sentence: "My trainer showed me a simple routine.",
    sentenceMeaning: "제 트레이너는 제게 간단한 루틴을 알려 줬어요.",
    sentencePronunciation: "마이 트레이너 쇼드 미 어 심플 루틴",
    category: "운동"
  },
  {
    id: 204,
    word: "locker",
    meaning: "사물함",
    pronunciation: "로커",
    sentence: "I put my bag in a locker at the gym.",
    sentenceMeaning: "저는 체육관 사물함에 가방을 넣어요.",
    sentencePronunciation: "아이 풋 마이 백 인 어 로커 앳 더 짐",
    category: "운동"
  },
  {
    id: 205,
    word: "towel",
    meaning: "수건",
    pronunciation: "타월",
    sentence: "I always bring a towel to the gym.",
    sentenceMeaning: "저는 항상 체육관에 수건을 가져가요.",
    sentencePronunciation: "아이 올웨이즈 브링 어 타월 투 더 짐",
    category: "운동"
  },
  {
    id: 206,
    word: "match",
    meaning: "경기",
    pronunciation: "매치",
    sentence: "I watched a soccer match last night.",
    sentenceMeaning: "저는 어젯밤 축구 경기를 봤어요.",
    sentencePronunciation: "아이 와치드 어 사커 매치 라스트 나이트",
    category: "운동"
  },
  {
    id: 207,
    word: "score",
    meaning: "점수",
    pronunciation: "스코어",
    sentence: "I check the score after the game.",
    sentenceMeaning: "저는 경기 후에 점수를 확인해요.",
    sentencePronunciation: "아이 체크 더 스코어 애프터 더 게임",
    category: "운동"
  },
  {
    id: 208,
    word: "practice",
    meaning: "연습",
    pronunciation: "프랙티스",
    sentence: "I need more practice to get better.",
    sentenceMeaning: "저는 더 잘하려면 연습이 더 필요해요.",
    sentencePronunciation: "아이 니드 모어 프랙티스 투 겟 베터",
    category: "운동"
  },
  {
    id: 209,
    word: "muscle",
    meaning: "근육",
    pronunciation: "머슬",
    sentence: "I do simple exercise to build muscle.",
    sentenceMeaning: "저는 근육을 기르려고 간단한 운동을 해요.",
    sentencePronunciation: "아이 두 심플 엑서사이즈 투 빌드 머슬",
    category: "운동"
  },
  {
    id: 210,
    word: "fitness",
    meaning: "체력 관리, 피트니스",
    pronunciation: "피트니스",
    sentence: "Fitness is important in my daily life.",
    sentenceMeaning: "체력 관리는 제 일상에서 중요해요.",
    sentencePronunciation: "피트니스 이즈 임포턴트 인 마이 데일리 라이프",
    category: "운동"
  },
  {
    id: 211,
    word: "alarm",
    meaning: "알람",
    pronunciation: "얼람",
    sentence: "My alarm rings at seven every morning.",
    sentenceMeaning: "제 알람은 매일 아침 7시에 울려요.",
    sentencePronunciation: "마이 얼람 링즈 앳 세븐 에브리 모닝",
    category: "일상 루틴"
  },
  {
    id: 212,
    word: "shower",
    meaning: "샤워",
    pronunciation: "샤워",
    sentence: "I take a quick shower before breakfast.",
    sentenceMeaning: "저는 아침 식사 전에 빨리 샤워해요.",
    sentencePronunciation: "아이 테이크 어 퀵 샤워 비포 브렉퍼스트",
    category: "일상 루틴"
  },
  {
    id: 213,
    word: "soap",
    meaning: "비누",
    pronunciation: "솝",
    sentence: "I like soap with a fresh smell.",
    sentenceMeaning: "저는 상쾌한 향의 비누를 좋아해요.",
    sentencePronunciation: "아이 라이크 솝 위드 어 프레시 스멜",
    category: "일상 루틴"
  },
  {
    id: 214,
    word: "toothbrush",
    meaning: "칫솔",
    pronunciation: "투스브러시",
    sentence: "I keep my toothbrush in a cup.",
    sentenceMeaning: "저는 칫솔을 컵에 넣어 둬요.",
    sentencePronunciation: "아이 킵 마이 투스브러시 인 어 컵",
    category: "일상 루틴"
  },
  {
    id: 215,
    word: "toothpaste",
    meaning: "치약",
    pronunciation: "투스페이스트",
    sentence: "I buy toothpaste at the store near my house.",
    sentenceMeaning: "저는 집 근처 가게에서 치약을 사요.",
    sentencePronunciation: "아이 바이 투스페이스트 앳 더 스토어 니어 마이 하우스",
    category: "일상 루틴"
  },
  {
    id: 216,
    word: "mirror",
    meaning: "거울",
    pronunciation: "미러",
    sentence: "I look in the mirror before I leave home.",
    sentenceMeaning: "저는 집을 나서기 전에 거울을 봐요.",
    sentencePronunciation: "아이 룩 인 더 미러 비포 아이 리브 홈",
    category: "일상 루틴"
  },
  {
    id: 217,
    word: "clothes",
    meaning: "옷",
    pronunciation: "클로즈",
    sentence: "I choose my clothes the night before.",
    sentenceMeaning: "저는 전날 밤에 입을 옷을 골라요.",
    sentencePronunciation: "아이 추즈 마이 클로즈 더 나이트 비포",
    category: "일상 루틴"
  },
  {
    id: 218,
    word: "laundry",
    meaning: "빨래",
    pronunciation: "런드리",
    sentence: "I do laundry on Sunday mornings.",
    sentenceMeaning: "저는 일요일 아침에 빨래를 해요.",
    sentencePronunciation: "아이 두 런드리 온 선데이 모닝즈",
    category: "일상 루틴"
  },
  {
    id: 219,
    word: "calendar",
    meaning: "달력",
    pronunciation: "캘린더",
    sentence: "I write my plans on a calendar.",
    sentenceMeaning: "저는 달력에 계획을 적어요.",
    sentencePronunciation: "아이 라이트 마이 플랜즈 온 어 캘린더",
    category: "일상 루틴"
  },
  {
    id: 220,
    word: "notebook",
    meaning: "공책, 노트",
    pronunciation: "노트북",
    sentence: "I carry a notebook in my bag.",
    sentenceMeaning: "저는 가방에 노트를 넣고 다녀요.",
    sentencePronunciation: "아이 캐리 어 노트북 인 마이 백",
    category: "일상 루틴"
  },
  {
    id: 221,
    word: "phone",
    meaning: "휴대폰",
    pronunciation: "폰",
    sentence: "I check my phone after I wake up.",
    sentenceMeaning: "저는 일어나고 나서 휴대폰을 확인해요.",
    sentencePronunciation: "아이 체크 마이 폰 애프터 아이 웨이크 업",
    category: "일상 루틴"
  },
  {
    id: 222,
    word: "charger",
    meaning: "충전기",
    pronunciation: "차저",
    sentence: "I keep my charger on my desk.",
    sentenceMeaning: "저는 충전기를 책상 위에 둬요.",
    sentencePronunciation: "아이 킵 마이 차저 온 마이 데스크",
    category: "일상 루틴"
  },
  {
    id: 223,
    word: "clock",
    meaning: "시계",
    pronunciation: "클락",
    sentence: "I look at the clock many times in the morning.",
    sentenceMeaning: "저는 아침에 시계를 여러 번 봐요.",
    sentencePronunciation: "아이 룩 앳 더 클락 매니 타임즈 인 더 모닝",
    category: "일상 루틴"
  },
  {
    id: 224,
    word: "sleep",
    meaning: "잠",
    pronunciation: "슬립",
    sentence: "I need enough sleep to feel good.",
    sentenceMeaning: "저는 컨디션이 좋으려면 충분한 잠이 필요해요.",
    sentencePronunciation: "아이 니드 이너프 슬립 투 필 굿",
    category: "일상 루틴"
  },
  {
    id: 225,
    word: "bedtime",
    meaning: "취침 시간",
    pronunciation: "베드타임",
    sentence: "My bedtime is usually around midnight.",
    sentenceMeaning: "제 취침 시간은 보통 자정쯤이에요.",
    sentencePronunciation: "마이 베드타임 이즈 유주얼리 어라운드 미드나이트",
    category: "일상 루틴"
  },
  {
    id: 226,
    word: "nap",
    meaning: "낮잠",
    pronunciation: "냅",
    sentence: "I take a short nap on weekends.",
    sentenceMeaning: "저는 주말에 짧게 낮잠을 자요.",
    sentencePronunciation: "아이 테이크 어 쇼트 냅 온 위켄즈",
    category: "일상 루틴"
  },
  {
    id: 227,
    word: "habit",
    meaning: "습관",
    pronunciation: "해빗",
    sentence: "Drinking water is a healthy habit.",
    sentenceMeaning: "물 마시기는 건강한 습관이에요.",
    sentencePronunciation: "드링킹 워터 이즈 어 헬시 해빗",
    category: "일상 루틴"
  },
  {
    id: 228,
    word: "cleaning",
    meaning: "청소",
    pronunciation: "클리닝",
    sentence: "I do some cleaning after breakfast.",
    sentenceMeaning: "저는 아침 식사 후에 조금 청소해요.",
    sentencePronunciation: "아이 두 섬 클리닝 애프터 브렉퍼스트",
    category: "일상 루틴"
  },
  {
    id: 229,
    word: "rest",
    meaning: "휴식",
    pronunciation: "레스트",
    sentence: "I take a good rest after work.",
    sentenceMeaning: "저는 퇴근 후에 푹 쉬어요.",
    sentencePronunciation: "아이 테이크 어 굿 레스트 애프터 워크",
    category: "일상 루틴"
  },
  {
    id: 230,
    word: "taxi",
    meaning: "택시",
    pronunciation: "택시",
    sentence: "I take a taxi when I am in a hurry.",
    sentenceMeaning: "저는 급할 때 택시를 타요.",
    sentencePronunciation: "아이 테이크 어 택시 웬 아이 앰 인 어 허리",
    category: "교통"
  },
  {
    id: 231,
    word: "car",
    meaning: "자동차",
    pronunciation: "카",
    sentence: "I use my car for long trips.",
    sentenceMeaning: "저는 긴 여행에 제 차를 써요.",
    sentencePronunciation: "아이 유즈 마이 카 포 롱 트립스",
    category: "교통"
  },
  {
    id: 232,
    word: "train",
    meaning: "기차",
    pronunciation: "트레인",
    sentence: "I take the train to visit my hometown.",
    sentenceMeaning: "저는 고향에 갈 때 기차를 타요.",
    sentencePronunciation: "아이 테이크 더 트레인 투 비지트 마이 홈타운",
    category: "교통"
  },
  {
    id: 233,
    word: "station",
    meaning: "역",
    pronunciation: "스테이션",
    sentence: "The station is close to my office.",
    sentenceMeaning: "역은 제 사무실에서 가까워요.",
    sentencePronunciation: "더 스테이션 이즈 클로스 투 마이 오피스",
    category: "교통"
  },
  {
    id: 234,
    word: "platform",
    meaning: "플랫폼",
    pronunciation: "플랫폼",
    sentence: "I wait on the platform every morning.",
    sentenceMeaning: "저는 매일 아침 플랫폼에서 기다려요.",
    sentencePronunciation: "아이 웨이트 온 더 플랫폼 에브리 모닝",
    category: "교통"
  },
  {
    id: 235,
    word: "transfer",
    meaning: "환승",
    pronunciation: "트랜스퍼",
    sentence: "I need one transfer on my way to work.",
    sentenceMeaning: "저는 출근길에 한 번 갈아타야 해요.",
    sentencePronunciation: "아이 니드 원 트랜스퍼 온 마이 웨이 투 워크",
    category: "교통"
  },
  {
    id: 236,
    word: "road",
    meaning: "길, 도로",
    pronunciation: "로드",
    sentence: "This road is busy in the evening.",
    sentenceMeaning: "이 길은 저녁에 바빠요.",
    sentencePronunciation: "디스 로드 이즈 비지 인 디 이브닝",
    category: "교통"
  },
  {
    id: 237,
    word: "crosswalk",
    meaning: "횡단보도",
    pronunciation: "크로스워크",
    sentence: "I always use the crosswalk.",
    sentenceMeaning: "저는 항상 횡단보도를 이용해요.",
    sentencePronunciation: "아이 올웨이즈 유즈 더 크로스워크",
    category: "교통"
  },
  {
    id: 238,
    word: "signal",
    meaning: "신호",
    pronunciation: "시그널",
    sentence: "I wait for the signal before I cross.",
    sentenceMeaning: "저는 건너기 전에 신호를 기다려요.",
    sentencePronunciation: "아이 웨이트 포 더 시그널 비포 아이 크로스",
    category: "교통"
  },
  {
    id: 239,
    word: "parking",
    meaning: "주차",
    pronunciation: "파킹",
    sentence: "Parking is hard near my office.",
    sentenceMeaning: "제 사무실 근처는 주차가 어려워요.",
    sentencePronunciation: "파킹 이즈 하드 니어 마이 오피스",
    category: "교통"
  },
  {
    id: 240,
    word: "driver",
    meaning: "운전기사, 운전자",
    pronunciation: "드라이버",
    sentence: "The driver was kind and careful.",
    sentenceMeaning: "운전기사는 친절하고 조심스러웠어요.",
    sentencePronunciation: "더 드라이버 워즈 카인드 앤 케어풀",
    category: "교통"
  },
  {
    id: 241,
    word: "highway",
    meaning: "고속도로",
    pronunciation: "하이웨이",
    sentence: "We used the highway during our trip.",
    sentenceMeaning: "우리는 여행 중에 고속도로를 이용했어요.",
    sentencePronunciation: "위 유즈드 더 하이웨이 듀링 아워 트립",
    category: "교통"
  },
  {
    id: 242,
    word: "seatbelt",
    meaning: "안전벨트",
    pronunciation: "시트벨트",
    sentence: "I always wear my seatbelt in the car.",
    sentenceMeaning: "저는 차에서 항상 안전벨트를 매요.",
    sentencePronunciation: "아이 올웨이즈 웨어 마이 시트벨트 인 더 카",
    category: "교통"
  },
  {
    id: 243,
    word: "bridge",
    meaning: "다리, 교량",
    pronunciation: "브리지",
    sentence: "I cross a bridge on my way home.",
    sentenceMeaning: "저는 집에 가는 길에 다리를 건너요.",
    sentencePronunciation: "아이 크로스 어 브리지 온 마이 웨이 홈",
    category: "교통"
  },
  {
    id: 244,
    word: "sidewalk",
    meaning: "인도",
    pronunciation: "사이드워크",
    sentence: "The sidewalk near my house is wide.",
    sentenceMeaning: "제 집 근처 인도는 넓어요.",
    sentencePronunciation: "더 사이드워크 니어 마이 하우스 이즈 와이드",
    category: "교통"
  },
  {
    id: 245,
    word: "lane",
    meaning: "차선",
    pronunciation: "레인",
    sentence: "I stayed in the right lane.",
    sentenceMeaning: "저는 오른쪽 차선을 이용했어요.",
    sentencePronunciation: "아이 스테이드 인 더 라이트 레인",
    category: "교통"
  },
  {
    id: 246,
    word: "scooter",
    meaning: "스쿠터",
    pronunciation: "스쿠터",
    sentence: "I sometimes see scooters near the station.",
    sentenceMeaning: "저는 역 근처에서 가끔 스쿠터를 봐요.",
    sentencePronunciation: "아이 섬타임즈 씨 스쿠터즈 니어 더 스테이션",
    category: "교통"
  },
  {
    id: 247,
    word: "sunny",
    meaning: "맑은",
    pronunciation: "서니",
    sentence: "I feel happy on sunny days.",
    sentenceMeaning: "저는 맑은 날에 기분이 좋아요.",
    sentencePronunciation: "아이 필 해피 온 서니 데이즈",
    category: "날씨"
  },
  {
    id: 248,
    word: "rainy",
    meaning: "비 오는",
    pronunciation: "레이니",
    sentence: "I stay home more on rainy days.",
    sentenceMeaning: "저는 비 오는 날에 집에 더 많이 있어요.",
    sentencePronunciation: "아이 스테이 홈 모어 온 레이니 데이즈",
    category: "날씨"
  },
  {
    id: 249,
    word: "cloudy",
    meaning: "흐린",
    pronunciation: "클라우디",
    sentence: "Cloudy weather makes me sleepy.",
    sentenceMeaning: "흐린 날씨는 저를 졸리게 해요.",
    sentencePronunciation: "클라우디 웨더 메익스 미 슬리피",
    category: "날씨"
  },
  {
    id: 250,
    word: "windy",
    meaning: "바람 부는",
    pronunciation: "윈디",
    sentence: "It was windy, so I wore a jacket.",
    sentenceMeaning: "바람이 많이 불어서 재킷을 입었어요.",
    sentencePronunciation: "잇 워즈 윈디 소 아이 워 어 재킷",
    category: "날씨"
  },
  {
    id: 251,
    word: "snowy",
    meaning: "눈 오는",
    pronunciation: "스노위",
    sentence: "I like the quiet feeling of snowy mornings.",
    sentenceMeaning: "저는 눈 오는 아침의 조용한 느낌을 좋아해요.",
    sentencePronunciation: "아이 라이크 더 콰이어트 필링 오브 스노위 모닝즈",
    category: "날씨"
  },
  {
    id: 252,
    word: "hot",
    meaning: "더운",
    pronunciation: "핫",
    sentence: "I drink cold water on hot days.",
    sentenceMeaning: "저는 더운 날에 찬물을 마셔요.",
    sentencePronunciation: "아이 드링크 콜드 워터 온 핫 데이즈",
    category: "날씨"
  },
  {
    id: 253,
    word: "cold",
    meaning: "추운, 차가운",
    pronunciation: "콜드",
    sentence: "My hands get cold in winter.",
    sentenceMeaning: "제 손은 겨울에 차가워져요.",
    sentencePronunciation: "마이 핸즈 겟 콜드 인 윈터",
    category: "날씨"
  },
  {
    id: 254,
    word: "warm",
    meaning: "따뜻한",
    pronunciation: "웜",
    sentence: "I like warm weather in spring.",
    sentenceMeaning: "저는 봄의 따뜻한 날씨를 좋아해요.",
    sentencePronunciation: "아이 라이크 웜 웨더 인 스프링",
    category: "날씨"
  },
  {
    id: 255,
    word: "cool",
    meaning: "선선한",
    pronunciation: "쿨",
    sentence: "A cool evening walk feels great.",
    sentenceMeaning: "선선한 저녁 산책은 정말 좋아요.",
    sentencePronunciation: "어 쿨 이브닝 워크 필즈 그레이트",
    category: "날씨"
  },
  {
    id: 256,
    word: "season",
    meaning: "계절",
    pronunciation: "시즌",
    sentence: "Spring is my favorite season.",
    sentenceMeaning: "봄은 제가 가장 좋아하는 계절이에요.",
    sentencePronunciation: "스프링 이즈 마이 페이버릿 시즌",
    category: "날씨"
  },
  {
    id: 257,
    word: "spring",
    meaning: "봄",
    pronunciation: "스프링",
    sentence: "I like spring because it is not too hot.",
    sentenceMeaning: "저는 봄이 너무 덥지 않아서 좋아요.",
    sentencePronunciation: "아이 라이크 스프링 비커즈 잇 이즈 낫 투 핫",
    category: "날씨"
  },
  {
    id: 258,
    word: "summer",
    meaning: "여름",
    pronunciation: "서머",
    sentence: "I go to the beach in summer.",
    sentenceMeaning: "저는 여름에 해변에 가요.",
    sentencePronunciation: "아이 고 투 더 비치 인 서머",
    category: "날씨"
  },
  {
    id: 259,
    word: "autumn",
    meaning: "가을",
    pronunciation: "오텀",
    sentence: "I like autumn because the air is fresh.",
    sentenceMeaning: "저는 가을이 공기가 상쾌해서 좋아요.",
    sentencePronunciation: "아이 라이크 오텀 비커즈 디 에어 이즈 프레시",
    category: "날씨"
  },
  {
    id: 260,
    word: "winter",
    meaning: "겨울",
    pronunciation: "윈터",
    sentence: "I stay indoors more in winter.",
    sentenceMeaning: "저는 겨울에 실내에 더 많이 있어요.",
    sentencePronunciation: "아이 스테이 인도어즈 모어 인 윈터",
    category: "날씨"
  },
  {
    id: 261,
    word: "umbrella",
    meaning: "우산",
    pronunciation: "엄브렐러",
    sentence: "I keep an umbrella in my bag.",
    sentenceMeaning: "저는 가방에 우산을 넣어 둬요.",
    sentencePronunciation: "아이 킵 언 엄브렐러 인 마이 백",
    category: "날씨"
  },
  {
    id: 262,
    word: "temperature",
    meaning: "기온",
    pronunciation: "템퍼러처",
    sentence: "The temperature dropped a lot today.",
    sentenceMeaning: "오늘 기온이 많이 떨어졌어요.",
    sentencePronunciation: "더 템퍼러처 드랍트 어 랏 투데이",
    category: "날씨"
  },
  {
    id: 263,
    word: "sunshine",
    meaning: "햇살",
    pronunciation: "선샤인",
    sentence: "I enjoy warm sunshine in the morning.",
    sentenceMeaning: "저는 아침의 따뜻한 햇살을 즐겨요.",
    sentencePronunciation: "아이 인조이 웜 선샤인 인 더 모닝",
    category: "날씨"
  },
  {
    id: 264,
    word: "forecast",
    meaning: "예보",
    pronunciation: "포어캐스트",
    sentence: "I check the weather forecast every day.",
    sentenceMeaning: "저는 매일 일기예보를 확인해요.",
    sentencePronunciation: "아이 체크 더 웨더 포어캐스트 에브리 데이",
    category: "날씨"
  },
  {
    id: 265,
    word: "hospital",
    meaning: "병원",
    pronunciation: "하스피털",
    sentence: "I went to the hospital for a checkup.",
    sentenceMeaning: "저는 검진 때문에 병원에 갔어요.",
    sentencePronunciation: "아이 웬트 투 더 하스피털 포 어 체크업",
    category: "건강"
  },
  {
    id: 266,
    word: "clinic",
    meaning: "의원, 클리닉",
    pronunciation: "클리닉",
    sentence: "I visit a clinic when I catch a cold.",
    sentenceMeaning: "저는 감기에 걸리면 병원에 가요.",
    sentencePronunciation: "아이 비지트 어 클리닉 웬 아이 캐치 어 콜드",
    category: "건강"
  },
  {
    id: 267,
    word: "nurse",
    meaning: "간호사",
    pronunciation: "너스",
    sentence: "The nurse was very kind to me.",
    sentenceMeaning: "간호사는 저에게 매우 친절했어요.",
    sentencePronunciation: "더 너스 워즈 베리 카인드 투 미",
    category: "건강"
  },
  {
    id: 268,
    word: "headache",
    meaning: "두통",
    pronunciation: "헤드에이크",
    sentence: "I get a headache when I do not sleep well.",
    sentenceMeaning: "저는 잠을 잘 못 자면 두통이 와요.",
    sentencePronunciation: "아이 겟 어 헤드에이크 웬 아이 두 낫 슬립 웰",
    category: "건강"
  },
  {
    id: 269,
    word: "fever",
    meaning: "열",
    pronunciation: "피버",
    sentence: "I stayed home because I had a fever.",
    sentenceMeaning: "저는 열이 있어서 집에 있었어요.",
    sentencePronunciation: "아이 스테이드 홈 비커즈 아이 해드 어 피버",
    category: "건강"
  },
  {
    id: 270,
    word: "cough",
    meaning: "기침",
    pronunciation: "코프",
    sentence: "My cough got better after a few days.",
    sentenceMeaning: "제 기침은 며칠 뒤 좋아졌어요.",
    sentencePronunciation: "마이 코프 갓 베터 애프터 어 퓨 데이즈",
    category: "건강"
  },
  {
    id: 271,
    word: "allergy",
    meaning: "알레르기",
    pronunciation: "앨러지",
    sentence: "I have a small allergy to dust.",
    sentenceMeaning: "저는 먼지에 약한 알레르기가 있어요.",
    sentencePronunciation: "아이 해브 어 스몰 앨러지 투 더스트",
    category: "건강"
  },
  {
    id: 272,
    word: "mask",
    meaning: "마스크",
    pronunciation: "마스크",
    sentence: "I wear a mask when I have a cold.",
    sentenceMeaning: "저는 감기에 걸리면 마스크를 써요.",
    sentencePronunciation: "아이 웨어 어 마스크 웬 아이 해브 어 콜드",
    category: "건강"
  },
  {
    id: 273,
    word: "vitamin",
    meaning: "비타민",
    pronunciation: "바이터민",
    sentence: "I take a vitamin every morning.",
    sentenceMeaning: "저는 매일 아침 비타민을 먹어요.",
    sentencePronunciation: "아이 테이크 어 바이터민 에브리 모닝",
    category: "건강"
  },
  {
    id: 274,
    word: "dentist",
    meaning: "치과의사",
    pronunciation: "덴티스트",
    sentence: "I see the dentist twice a year.",
    sentenceMeaning: "저는 1년에 두 번 치과에 가요.",
    sentencePronunciation: "아이 씨 더 덴티스트 트와이스 어 이어",
    category: "건강"
  },
  {
    id: 275,
    word: "toothache",
    meaning: "치통",
    pronunciation: "투스에이크",
    sentence: "I had a toothache last weekend.",
    sentenceMeaning: "저는 지난 주말에 치통이 있었어요.",
    sentencePronunciation: "아이 해드 어 투스에이크 라스트 위켄드",
    category: "건강"
  },
  {
    id: 276,
    word: "pain",
    meaning: "통증",
    pronunciation: "페인",
    sentence: "I felt some pain in my back.",
    sentenceMeaning: "저는 허리에 약간의 통증을 느꼈어요.",
    sentencePronunciation: "아이 펠트 섬 페인 인 마이 백",
    category: "건강"
  },
  {
    id: 277,
    word: "diet",
    meaning: "식단, 다이어트",
    pronunciation: "다이어트",
    sentence: "I try to keep a healthy diet.",
    sentenceMeaning: "저는 건강한 식단을 유지하려고 해요.",
    sentencePronunciation: "아이 트라이 투 킵 어 헬시 다이어트",
    category: "건강"
  },
  {
    id: 278,
    word: "checkup",
    meaning: "검진",
    pronunciation: "체크업",
    sentence: "I get a yearly health checkup.",
    sentenceMeaning: "저는 매년 건강검진을 받아요.",
    sentencePronunciation: "아이 겟 어 이어리 헬스 체크업",
    category: "건강"
  },
  {
    id: 279,
    word: "appointment",
    meaning: "예약",
    pronunciation: "어포인트먼트",
    sentence: "I made a doctor appointment online.",
    sentenceMeaning: "저는 온라인으로 진료 예약을 했어요.",
    sentencePronunciation: "아이 메이드 어 닥터 어포인트먼트 온라인",
    category: "건강"
  },
  {
    id: 280,
    word: "stress",
    meaning: "스트레스",
    pronunciation: "스트레스",
    sentence: "I feel stress when I am too busy.",
    sentenceMeaning: "저는 너무 바쁠 때 스트레스를 느껴요.",
    sentencePronunciation: "아이 필 스트레스 웬 아이 앰 투 비지",
    category: "건강"
  },
  {
    id: 281,
    word: "symptom",
    meaning: "증상",
    pronunciation: "심프텀",
    sentence: "My main symptom was a sore throat.",
    sentenceMeaning: "제 주요 증상은 목 아픔이었어요.",
    sentencePronunciation: "마이 메인 심프텀 워즈 어 소어 쓰로트",
    category: "건강"
  },
  {
    id: 282,
    word: "recovery",
    meaning: "회복",
    pronunciation: "리커버리",
    sentence: "My recovery was faster than I expected.",
    sentenceMeaning: "제 회복은 생각보다 빨랐어요.",
    sentencePronunciation: "마이 리커버리 워즈 패스터 댄 아이 익스펙티드",
    category: "건강"
  },
  {
    id: 283,
    word: "resort",
    meaning: "리조트",
    pronunciation: "리조트",
    sentence: "I want to stay at a quiet resort.",
    sentenceMeaning: "저는 조용한 리조트에 머물고 싶어요.",
    sentencePronunciation: "아이 원트 투 스테이 앳 어 콰이어트 리조트",
    category: "휴가"
  },
  {
    id: 284,
    word: "camping",
    meaning: "캠핑",
    pronunciation: "캠핑",
    sentence: "I went camping with my friends last summer.",
    sentenceMeaning: "저는 지난여름 친구들과 캠핑을 갔어요.",
    sentencePronunciation: "아이 웬트 캠핑 위드 마이 프렌즈 라스트 서머",
    category: "휴가"
  },
  {
    id: 285,
    word: "campfire",
    meaning: "캠프파이어",
    pronunciation: "캠프파이어",
    sentence: "I sat by the campfire at night.",
    sentenceMeaning: "저는 밤에 캠프파이어 옆에 앉아 있었어요.",
    sentencePronunciation: "아이 샛 바이 더 캠프파이어 앳 나이트",
    category: "휴가"
  },
  {
    id: 286,
    word: "pool",
    meaning: "수영장",
    pronunciation: "풀",
    sentence: "I spent hours in the hotel pool.",
    sentenceMeaning: "저는 호텔 수영장에서 몇 시간을 보냈어요.",
    sentencePronunciation: "아이 스펜트 아워즈 인 더 호텔 풀",
    category: "휴가"
  },
  {
    id: 287,
    word: "ocean",
    meaning: "바다",
    pronunciation: "오션",
    sentence: "I love looking at the ocean on vacation.",
    sentenceMeaning: "저는 휴가 때 바다를 보는 걸 좋아해요.",
    sentencePronunciation: "아이 러브 루킹 앳 디 오션 온 베이케이션",
    category: "휴가"
  },
  {
    id: 288,
    word: "sunrise",
    meaning: "일출",
    pronunciation: "선라이즈",
    sentence: "I woke up early to see the sunrise.",
    sentenceMeaning: "저는 일출을 보려고 일찍 일어났어요.",
    sentencePronunciation: "아이 워크 업 얼리 투 씨 더 선라이즈",
    category: "휴가"
  },
  {
    id: 289,
    word: "sunset",
    meaning: "노을, 일몰",
    pronunciation: "선셋",
    sentence: "I took pictures of the sunset.",
    sentenceMeaning: "저는 노을 사진을 찍었어요.",
    sentencePronunciation: "아이 툭 픽처즈 오브 더 선셋",
    category: "휴가"
  },
  {
    id: 290,
    word: "souvenir",
    meaning: "기념품",
    pronunciation: "수버니어",
    sentence: "I bought a souvenir for my family.",
    sentenceMeaning: "저는 가족을 위해 기념품을 샀어요.",
    sentencePronunciation: "아이 보트 어 수버니어 포 마이 패밀리",
    category: "휴가"
  },
  {
    id: 291,
    word: "festival",
    meaning: "축제",
    pronunciation: "페스티벌",
    sentence: "I visited a local festival on my trip.",
    sentenceMeaning: "저는 여행 중에 지역 축제를 갔어요.",
    sentencePronunciation: "아이 비지티드 어 로컬 페스티벌 온 마이 트립",
    category: "휴가"
  },
  {
    id: 292,
    word: "picnic",
    meaning: "피크닉",
    pronunciation: "피크닉",
    sentence: "I had a picnic in the park during vacation.",
    sentenceMeaning: "저는 휴가 동안 공원에서 피크닉을 했어요.",
    sentencePronunciation: "아이 해드 어 피크닉 인 더 파크 듀링 베이케이션",
    category: "휴가"
  },
  {
    id: 293,
    word: "barbecue",
    meaning: "바비큐",
    pronunciation: "바비큐",
    sentence: "We had a barbecue by the beach.",
    sentenceMeaning: "우리는 해변 옆에서 바비큐를 했어요.",
    sentencePronunciation: "위 해드 어 바비큐 바이 더 비치",
    category: "휴가"
  },
  {
    id: 294,
    word: "cabin",
    meaning: "오두막",
    pronunciation: "캐빈",
    sentence: "I stayed in a small cabin in the mountains.",
    sentenceMeaning: "저는 산속의 작은 오두막에 머물렀어요.",
    sentencePronunciation: "아이 스테이드 인 어 스몰 캐빈 인 더 마운틴즈",
    category: "휴가"
  },
  {
    id: 295,
    word: "tent",
    meaning: "텐트",
    pronunciation: "텐트",
    sentence: "I slept in a tent for one night.",
    sentenceMeaning: "저는 하룻밤 텐트에서 잤어요.",
    sentencePronunciation: "아이 슬েপ্ট 인 어 텐트 포 원 나이트",
    category: "휴가"
  },
  {
    id: 296,
    word: "theme park",
    meaning: "테마파크",
    pronunciation: "테마 파크",
    sentence: "I rode many attractions at the theme park.",
    sentenceMeaning: "저는 테마파크에서 놀이기구를 많이 탔어요.",
    sentencePronunciation: "아이 로드 매니 어트랙션즈 앳 더 테마 파크",
    category: "휴가"
  },
  {
    id: 297,
    word: "fireworks",
    meaning: "불꽃놀이",
    pronunciation: "파이어웍스",
    sentence: "I watched fireworks with my friends.",
    sentenceMeaning: "저는 친구들과 불꽃놀이를 봤어요.",
    sentencePronunciation: "아이 와치드 파이어웍스 위드 마이 프렌즈",
    category: "휴가"
  },
  {
    id: 298,
    word: "hammock",
    meaning: "해먹",
    pronunciation: "해먹",
    sentence: "I rested in a hammock by the beach.",
    sentenceMeaning: "저는 해변 옆 해먹에서 쉬었어요.",
    sentencePronunciation: "아이 레스티드 인 어 해먹 바이 더 비치",
    category: "휴가"
  },
  {
    id: 299,
    word: "sand",
    meaning: "모래",
    pronunciation: "샌드",
    sentence: "I got sand in my shoes at the beach.",
    sentenceMeaning: "저는 해변에서 신발에 모래가 들어갔어요.",
    sentencePronunciation: "아이 갓 샌드 인 마이 슈즈 앳 더 비치",
    category: "휴가"
  },
  {
    id: 300,
    word: "postcard",
    meaning: "엽서",
    pronunciation: "포스트카드",
    sentence: "I sent a postcard to my parents.",
    sentenceMeaning: "저는 부모님께 엽서를 보냈어요.",
    sentencePronunciation: "아이 센트 어 포스트카드 투 마이 페어런츠",
    category: "휴가"
  }
];
