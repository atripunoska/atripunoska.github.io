import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='min-h-screen bg-bg text-fg flex items-center justify-center font-sans'>
      <button
        onClick={toggleTheme}
        className='px-4 py-2 rounded-default border border-line'
      >
        Current theme: {theme} — click to toggle
      </button>
    </div>
  );
}

export default App;
