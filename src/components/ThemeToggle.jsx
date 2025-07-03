export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
