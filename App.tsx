import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Gallery } from './components/Gallery';
import { Profile } from './components/Profile';
import { PasswordModal } from './components/PasswordModal';
import { MOCK_ITEMS } from './constants';
import { Category, PortfolioItem } from './types';

function App() {
  const [items, setItems] = useState<PortfolioItem[]>(MOCK_ITEMS);
  const [activeCategory, setActiveCategory] = useState<Category>('전체');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === '전체' || activeCategory === '디자이너 프로필') {
      return items;
    }
    return items.filter(item => item.category === activeCategory);
  }, [activeCategory, items]);

  const handleSuccessLogin = () => {
    setIsAdmin(true);
  };
  
  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleUpdateTitle = (id: number, newTitle: string) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  const handleDeleteItem = (id: number) => {
    // Immediately remove the item as requested
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-zen-bg font-sans text-zen-text selection:bg-zen-soft selection:text-white">
      
      <Sidebar 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isAdmin={isAdmin}
        onOpenAdmin={() => setIsModalOpen(true)}
        onLogoutAdmin={handleLogout}
      />

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen p-6 md:p-12 transition-all duration-300">
        
        {/* Header Title for Current View */}
        <header className="mb-10 md:mb-16 mt-16 md:mt-0 flex items-end justify-between">
           <div>
             <h2 className="text-3xl md:text-4xl font-light text-zen-dark tracking-tight">
               {activeCategory === '전체' ? '주요 작업' : activeCategory === '디자이너 프로필' ? '디자이너 소개' : `${activeCategory}`}
             </h2>
             <div className="h-1 w-12 bg-zen-soft mt-4 rounded-full"></div>
           </div>
           
           {isAdmin && activeCategory !== '디자이너 프로필' && (
             <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zen-sky opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-zen-sky"></span>
                </span>
                <span className="text-xs font-bold text-zen-dark uppercase tracking-wider">
                  관리자 모드
                </span>
             </div>
           )}
        </header>

        {activeCategory === '디자이너 프로필' ? (
          <Profile />
        ) : (
          <Gallery 
            items={filteredItems} 
            isAdmin={isAdmin}
            onUpdateTitle={handleUpdateTitle}
            onDelete={handleDeleteItem}
          />
        )}
      </main>

      <PasswordModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccessLogin}
      />
    </div>
  );
}

export default App;