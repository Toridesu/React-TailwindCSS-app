export const Navigation = ({ isMenuOpen }: { isMenuOpen: boolean }) => (
  <nav
    id="primary-navigation"
    className={`absolute left-0 top-full z-50 w-full bg-teal-500 shadow-lg transition-all duration-200 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'} md:pointer-events-auto md:relative md:left-auto md:top-auto md:block md:w-auto md:translate-y-0 md:bg-transparent md:opacity-100 md:shadow-none`}
    aria-label="メインナビゲーション"
  >
    <div className="flex flex-col items-start p-4 md:flex-row md:items-center md:p-0">
      <a
        href="/usermanagement"
        className="w-full rounded px-4 py-2 text-sm text-gray-50 transition-colors hover:bg-teal-600 hover:underline md:w-auto md:py-0 md:hover:bg-transparent"
      >
        ユーザ一覧
      </a>
      <a
        href="/setting"
        className="w-full rounded px-4 py-2 text-sm text-gray-50 transition-colors hover:bg-teal-600 hover:underline md:w-auto md:py-0 md:hover:bg-transparent"
      >
        設定
      </a>
    </div>
  </nav>
);
