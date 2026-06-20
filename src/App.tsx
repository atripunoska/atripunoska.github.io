import { SideRail } from './components/layout/SideRail';
import { Topbar } from './components/layout/Topbar';
import { Skills } from './components/sections/Skills';
import { Work } from './components/sections/Work';

function App() {
  return (
    <div className='bg-bg text-fg min-h-screen font-sans'>
      <Topbar />
      <SideRail />

      <main id='top' className='pt-24'>
        <section id='top' className='h-screen flex items-center justify-center'>
          Intro
        </section>
        <Work />
        <Skills />
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
