import ThemeToggle from './ThemeToggle';

export default function Navbar({ sections, theme, toggleTheme }) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-semibold">ZLS Technology</div>
        <ul className="hidden md:flex space-x-6">
          {sections.map(sec => (
            <li key={sec.id}>
              <a href={`#${sec.id}`} className="hover:text-primary-light dark:hover:text-primary-dark">
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <button className="md:hidden" onClick={() => {/* mobile menu logic */}}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
