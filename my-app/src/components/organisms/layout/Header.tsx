import { useState } from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-teal-500 ${className}`}>
      <div className="flex items-center p-4 md:p-5">
        <a
          href="/"
          className="mr-8 text-lg text-gray-50 md:text-xl lg:text-2xl"
          aria-label="ホームページへ"
        >
          ユーザー管理アプリ
        </a>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={` ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full md:relative md:left-auto md:top-auto md:block md:w-auto`}
          aria-label="メインナビゲーション"
        >
          <div className="flex flex-col items-start p-4 md:flex-row md:items-center md:p-0">
            <a
              href="/users"
              className="w-full px-4 py-2 text-sm text-gray-50 hover:underline md:w-auto md:py-0"
            >
              ユーザ一覧
            </a>
            <a
              href="/settings"
              className="w-full px-4 py-2 text-sm text-gray-50 hover:underline md:w-auto md:py-0"
            >
              設定
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-50 p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label="メインメニュー"
          
        >
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
};
