import React from 'react';
import { PortfolioItem } from '../types';
import { Edit3, Trash2 } from 'lucide-react';

interface GalleryProps {
  items: PortfolioItem[];
  isAdmin?: boolean;
  onUpdateTitle?: (id: number, newTitle: string) => void;
  onDelete?: (id: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ items, isAdmin, onUpdateTitle, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="group relative bg-zen-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1"
        >
          {/* Image Container */}
          <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Gradient on Hover (only if not editing) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {isAdmin && (
              <>
                {/* Delete Button (Top Left) */}
                {onDelete && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(item.id);
                    }}
                    className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-red-500 hover:bg-red-50 hover:text-red-600 shadow-sm transition-colors z-20 cursor-pointer"
                    title="삭제"
                  >
                    <Trash2 size={14} />
                  </button>
                )}

                {/* Edit Icon (Top Right) - Purely visual indicator that edit is available */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-zen-text shadow-sm z-10 pointer-events-none">
                  <Edit3 size={14} />
                </div>
              </>
            )}
          </div>

          {/* Text Content */}
          <div className="p-6">
             <span className="inline-block px-3 py-1 rounded-full bg-zen-bg text-xs font-bold text-gray-500 mb-3 tracking-wide uppercase">
               {item.category}
             </span>
            
            {isAdmin && onUpdateTitle ? (
              <div className="mb-2 relative">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => onUpdateTitle(item.id, e.target.value)}
                  className="w-full bg-zen-bg/50 border-b-2 border-zen-soft focus:border-zen-sky outline-none px-1 py-1 text-lg font-medium text-zen-dark transition-colors"
                  placeholder="제목 입력..."
                />
                <p className="text-[10px] text-zen-sky mt-1 font-medium uppercase tracking-wider">제목 수정 중</p>
              </div>
            ) : (
              <h3 className="text-lg font-medium text-zen-dark mb-2 group-hover:text-zen-sky transition-colors">
                {item.title}
              </h3>
            )}

            <p className="text-sm text-zen-text/70 font-light leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};