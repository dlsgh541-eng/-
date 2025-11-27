export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export type Category = '전체' | '주거 공간' | '상업 공간' | '전시 공간' | '디자이너 프로필';

export interface AdminControlsProps {
  onUpload: () => void;
  onDelete: () => void;
  onManage: () => void;
}