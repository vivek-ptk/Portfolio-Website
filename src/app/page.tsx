import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero_New';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import LeetCode from '@/components/LeetCode';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LeetCode />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
