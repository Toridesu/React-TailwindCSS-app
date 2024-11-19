import { Menu, X } from 'lucide-react';

export const MobileMenuButton = ({isMenuOpen, toggleMenu}:{isMenuOpen: boolean; toggleMenu:() => void;}) => (
    <button
      className="relative ml-auto rounded p-2 text-gray-50 hover:bg-teal-600 md:hidden"
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
      aria-controls="primary-navigation"
      aria-label="メインメニュー"
    >
      <div className="relative h-6 w-6">
        <Menu
          size={24}
          className={`absolute transition-all duration-200 ${isMenuOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
        <X
          size={24}
          className={`absolute transition-all duration-200 ${isMenuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0'}`}
        />
      </div>
    </button>

);


