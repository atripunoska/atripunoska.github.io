import { SideRail } from './components/layout/SideRail';
import { Topbar } from './components/layout/Topbar';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Work } from './components/sections/Work';

function App() {
  return (
    <div className='bg-bg text-fg min-h-screen font-sans'>
      <Topbar />
      <SideRail />

      <main className='pt-4'>
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
