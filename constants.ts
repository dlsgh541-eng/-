import { PortfolioItem } from './types';

export const MOCK_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "고요한 파빌리온",
    category: "상업 공간",
    description: "자연 채광과 노출 콘크리트를 활용하여 설계된 명상과 휴식의 공간입니다.",
    imageUrl: "https://picsum.photos/seed/arch1/800/600"
  },
  {
    id: 2,
    title: "어반 로프트 402",
    category: "주거 공간",
    description: "도심 속 오래된 창고를 미니멀한 주거 공간으로 재해석한 프로젝트입니다.",
    imageUrl: "https://picsum.photos/seed/interior1/800/600"
  },
  {
    id: 3,
    title: "플럭스 갤러리 전시",
    category: "전시 공간",
    description: "현대 미술 설치를 위한 인터랙티브 공간 디자인 및 동선 계획.",
    imageUrl: "https://picsum.photos/seed/exhibit1/800/600"
  },
  {
    id: 4,
    title: "아주르 커피 하우스",
    category: "상업 공간",
    description: "물속에 있는 듯한 몽환적인 느낌을 주는 스페셜티 커피 전문점.",
    imageUrl: "https://picsum.photos/seed/coffee/800/600"
  },
  {
    id: 5,
    title: "글래스 하우스",
    category: "주거 공간",
    description: "숲의 경관과 자연스럽게 어우러지는 투명하고 개방적인 주말 주택.",
    imageUrl: "https://picsum.photos/seed/glass/800/600"
  },
  {
    id: 6,
    title: "시간의 구조",
    category: "전시 공간",
    description: "패션 위크 이벤트를 위한 일시적 팝업 스토어 및 구조물 디자인.",
    imageUrl: "https://picsum.photos/seed/fashion/800/600"
  },
  {
    id: 7,
    title: "노르딕 도서관",
    category: "상업 공간",
    description: "따뜻한 목재 톤과 뛰어난 음향 설계를 갖춘 공공 독서 공간.",
    imageUrl: "https://picsum.photos/seed/library/800/600"
  },
  {
    id: 8,
    title: "여백과 질량",
    category: "전시 공간",
    description: "실험적인 조각 공원 레이아웃 및 관람객 경험 디자인.",
    imageUrl: "https://picsum.photos/seed/void/800/600"
  }
];

export const CATEGORIES = ['전체', '주거 공간', '상업 공간', '전시 공간'];