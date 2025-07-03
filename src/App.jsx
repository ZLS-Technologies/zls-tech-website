import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SectionWrapper from './components/SectionWrapper';

function App() {
  const [theme, setTheme] = useState(
    localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.theme = theme;
  }, [theme]);

  const sections = [
    { id: 'home', title: 'Home', content: <h1 className="text-4xl font-bold">Welcome to ZLS Technology</h1> },
    { id: 'about', title: 'About', content: <p>We deliver cutting-edge tech solutions.</p> },
    { id: 'services', title: 'Services', content: <p>Web Development, Mobile Apps, Cloud & AI.</p> },
    { id: 'projects', title: 'Projects', content: <p>See our portfolio of successful deployments.</p> },
    { id: 'contact', title: 'Contact', content: <p>Get in touch at contact@zls-tech.com.</p> }
  ];

  return (
    <>
      <Navbar sections={sections} theme={theme} toggleTheme={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))} />
      <main className="space-y-20 my-10 px-6">
        {sections.map(sec => (
          <SectionWrapper key={sec.id} id={sec.id} title={sec.title}>
            {sec.content}
          </SectionWrapper>
        ))}
      </main>
      <footer className="text-center py-6 border-t dark:border-gray-700">
        © {new Date().getFullYear()} ZLS Technology
      </footer>
    </>
  );
}

export default App;
