import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === '1234') {
      onSuccess();
      onClose();
      setInput('');
      setError(false);
    } else {
      setError(true);
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 relative transform transition-all scale-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-lg font-medium text-zen-text mb-4 text-center">관리자 비밀번호 입력</h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            autoFocus
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="••••"
            className={`w-full p-3 rounded-xl border outline-none text-center tracking-widest text-lg transition-colors ${
              error ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-zen-sky bg-gray-50'
            }`}
          />
          {error && <p className="text-red-400 text-xs text-center">비밀번호가 올바르지 않습니다</p>}
          
          <button 
            type="submit"
            className="w-full bg-zen-soft text-white font-medium py-2 rounded-xl hover:bg-zen-sky transition-colors duration-300"
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
};