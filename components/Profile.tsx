import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-50">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Avatar / Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 relative">
               <img 
                 src="https://picsum.photos/seed/designer/600/800" 
                 alt="Designer" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl font-light text-zen-dark mb-2">김이준</h2>
              <p className="text-zen-sky font-medium tracking-wide uppercase text-sm">공간 디자이너 & 건축가</p>
            </div>

            <div className="prose prose-stone prose-sm md:prose-base text-gray-500 font-light leading-loose break-keep">
              <p>
                저의 작업은 '비움'과 '채움', '침묵'과 '소리' 사이의 섬세한 균형을 탐구합니다.
                공간은 단순히 인간의 활동을 담는 그릇이 아니라, 우리의 일상적인 의식에 능동적으로 참여하는 존재라고 믿습니다.
              </p>
              <p>
                10년 이상의 주거 건축 및 체험형 전시 디자인 경험을 바탕으로, 불필요한 것을 덜어내고 본질만을 남기는 젠(Zen) 철학에 뿌리를 둔 디자인을 추구합니다.
              </p>
              <p>
                빛과 그림자가 벽 위에 시간의 흐름을 그려내고, 머무는 이가 숨 쉴 수 있는 공간을 만드는 것이 저의 목표입니다.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100 flex gap-12">
               <div>
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">위치</h4>
                 <p className="text-sm text-zen-dark">서울, 대한민국</p>
               </div>
               <div>
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">연락처</h4>
                 <p className="text-sm text-zen-dark">yijun.kim@spatial-zen.design</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};