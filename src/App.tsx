import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blogs'; // Assuming Blogs is a new component

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className='bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-gray-300 transition-colors duration-300'>
          <Header />

          <main className='overflow-hidden'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Testimonials />
                    <Contact />
                  </>
                }
              />
              <Route path='/blogs' element={<Blogs />} />{' '}
              {/* Add route for Blogs page */}
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

// import { ThemeProvider } from './context/ThemeContext';
// import Hero from './components/Hero';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import Header from './components/Header';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <ThemeProvider>
//       <div className='bg-gray-50 dark:bg-[#0a192f] text-gray-900 dark:text-gray-300 transition-colors duration-300'>
//         <Header />

//         <main className='overflow-hidden'>
//           <Hero />
//           <About />
//           <Experience />
//           <Projects />
//           <Testimonials />
//           <Contact />
//         </main>

//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }
