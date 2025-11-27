import React from 'react';
import { Key, User, Upload, FolderCog, Lock } from 'lucide-react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
  isAdmin: boolean;
  onOpenAdmin: () => void;
  onLogoutAdmin: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeCategory, 
  setActiveCategory, 
  isAdmin, 
  onOpenAdmin,
  onLogoutAdmin
}) => {
  return (
    <aside className="w-full md:w-64 h-auto md:h-screen fixed left-0 top-0 bg-zen-bg border-r border-stone-200 flex flex-col justify-between z-40 transition-colors duration-300">
      
      {/* Top Section: Brand & Nav */}
      <div className="p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-light tracking-wide text-zen-dark">SPATIAL<span className="text-zen-sky">.</span></h1>
          <p className="text-xs text-gray-400 mt-1 tracking-widest uppercase">공간 디자인 포트폴리오</p>
        </div>

        <nav className="space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-white shadow-sm text-zen-dark font-medium translate-x-1' 
                  : 'text-gray-500 hover:text-zen-sky hover:bg-white/50'
              }`}
            >
              {cat}
            </button>
          ))}

          <div className="pt-4 mt-4 border-t border-stone-200">
            <button
              onClick={() => setActiveCategory('디자이너 프로필')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === '디자이너 프로필'
                  ? 'bg-white shadow-sm text-zen-dark font-medium translate-x-1'
                  : 'text-gray-500 hover:text-zen-sky hover:bg-white/50'
              }`}
            >
              <User size={18} />
              <span>디자이너 프로필</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Admin Controls Section (Conditional) */}
      <div className="px-8 pb-4 space-y-2">
        {isAdmin && (
           <div className="mb-6 p-4 bg-white/60 rounded-2xl border border-stone-100 animate-fade-in-up shadow-sm">
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">관리자 도구</div>
             <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-zen-sky py-2 w-full transition-colors">
               <Upload size={16} /> 파일 업로드
             </button>
             {/* Delete button removed as per requirements */}
             <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-zen-sky py-2 w-full transition-colors">
               <FolderCog size={16} /> 카테고리 관리
             </button>
           </div>
        )}
      </div>

      {/* Bottom Footer Area */}
      <div className="p-8 border-t border-stone-200 flex items-center justify-between">
        <span className="text-xs text-gray-400">© 2024</span>
        
        {isAdmin ? (
            <button 
              onClick={onLogoutAdmin}
              className="p-2 rounded-full text-zen-sky bg-white shadow-sm hover:bg-red-50 hover:text-red-400 transition-colors"
              title="관리자 모드 종료"
            >
              <Lock size={16} />
            </button>
        ) : (
            <button 
              onClick={onOpenAdmin}
              className="p-2 rounded-full text-gray-400 hover:text-zen-sky hover:bg-white transition-colors"
              title="관리자 로그인"
            >
              <Key size={16} />
            </button>
        )}
      </div>
    </aside>
  );
};