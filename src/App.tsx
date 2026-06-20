import { SideRail } from './components/layout/SideRail';
import { Topbar } from './components/layout/Topbar';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='bg-bg text-fg min-h-screen font-sans'>
      <Topbar />
      <SideRail />

      <main id='top' className='pt-24'>
        <section id='top' className='h-screen flex items-center justify-center'>
          Intro
        </section>
        <section
          id='work'
          className='h-screen flex items-center justify-center'
        >
          Work
        </section>
        <section
          id='skills'
          className='h-screen flex items-center justify-center'
        >
          Skills
        </section>
        <section
          id='experience'
          className='h-screen flex items-center justify-center'
        >
          Experience
        </section>
        <section
          id='contact'
          className='h-screen flex items-center justify-center'
        >
          Contact
        </section>
      </main>
    </div>
  );
}

export default App;
