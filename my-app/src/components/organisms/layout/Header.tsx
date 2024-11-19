import { useState } from 'react';
import { MobileMenuButton } from '../../atom/MobileMenuButton';
import { Navigation } from '../../molecule/Navigation';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニュー開閉時のスクロール制御
  const toggleMenu = () => {
    const body = document.body;
    if (!isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`relative bg-teal-500 ${className}`}>
      <div className="flex items-center p-4 md:p-5">
        <a
          href="/"
          className="mr-8 text-lg text-gray-50 md:text-xl lg:text-2xl"
          aria-label="ホームページへ"
        >
          ユーザー管理アプリ
        </a>

        {/* 背景オーバーレイ */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}

        <Navigation isMenuOpen={isMenuOpen} />
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};
