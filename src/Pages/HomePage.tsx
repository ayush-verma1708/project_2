import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

export default function HomePage() {
  return (
    // <ThemeProvider>
    <div className='bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-gray-300 transition-colors duration-300'>
      {/* <Header /> */}
      <main className='overflow-hidden'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
    // </ThemeProvider>
  );
}
