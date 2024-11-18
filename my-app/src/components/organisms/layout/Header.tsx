import { useState } from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-teal-500 ${className}`}>
      <div className="flex justify-between items-center p-4 md:p-5">
        <a 
          href="/" 
          className="mr-8 text-lg md:text-xl lg:text-2xl text-gray-50"
          aria-label="ホームページへ"
        >
          ユーザー管理アプリ
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label="メインメニュー"
        >
          <Menu size={24} />
        </button>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:block
            absolute md:relative
            top-full md:top-auto
            left-0 md:left-auto
            w-full md:w-auto
            bg-teal-500 md:bg-transparent
            border-t md:border-none
            border-teal-600
          `}
          aria-label="メインナビゲーション"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-0">
            <a
              href="/users"
              className="w-full md:w-auto px-4 py-2 md:py-0 text-gray-50 text-sm hover:underline"
            >
              ユーザ一覧
            </a>
            <a
              href="/settings"
              className="w-full md:w-auto px-4 py-2 md:py-0 text-gray-50 text-sm hover:underline"
            >
              設定
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};