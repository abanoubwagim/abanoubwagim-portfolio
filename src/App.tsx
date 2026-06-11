import { useFadeIn } from './hooks/useFadeIn';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import ScrollToTop from './components/shared/ScrollToTop';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import References from './components/sections/References';
import Contact from './components/sections/Contact';

import { experience } from './data/experience';
import { training }   from './data/training';
import { leadership } from './data/leadership';
import { skills }     from './data/skills';

function ExperienceAndSkillsSection() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="fade-in-up bg-surface-container-low py-16 md:py-[120px] border-y border-outline-variant/30"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <Experience
              experience={experience}
              training={training}
              leadership={leadership}
            />
          </div>
          <div className="md:col-span-5">
            <Skills categories={skills} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <ExperienceAndSkillsSection />
        <Education />
        <References />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
