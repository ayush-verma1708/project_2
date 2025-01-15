import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      overlayRef.current,
      { opacity: 1 },
      {
        opacity: theme === 'light' ? 0.3 : 0.7,
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    // Typing animation
    if (textRef.current) {
      const text = 'I build things for the web.';
      textRef.current.textContent = ''; // Clear previous content

      const chars = text.split('');
      let i = 0;

      const typeText = setInterval(() => {
        if (i < chars.length) {
          textRef.current.textContent += chars[i];
          i++;
        } else {
          clearInterval(typeText); // Stop typing when finished
        }
      }, 100);

      // Cleanup on unmount to prevent memory leaks
      return () => clearInterval(typeText);
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        gsap.to(containerRef.current, {
          y: scrolled * 0.4,
          duration: 0.5,
          ease: 'none',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]); // Only run on initial render and when `theme` changes

  return (
    <section className='relative min-h-screen overflow-hidden pt-20'>
      <div
        ref={containerRef}
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        ref={overlayRef}
        className='absolute inset-0 z-1 bg-black opacity-70'
      />

      <div className='relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4'>
        <div className='max-w-7xl mx-auto w-full'>
          <div className='space-y-6 md:space-y-8'>
            <h2 className='text-teal-600 dark:text-teal-300 text-lg md:text-xl opacity-0 animate-fadeIn'>
              Hi, my name is
            </h2>
            <h1 className='text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 opacity-0 animate-slideUp animation-delay-300'>
              Ayush Verma.
            </h1>
            <h3
              ref={textRef}
              className='text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-400 min-h-[4rem]'
            />
            <p className='max-w-xl text-gray-700 dark:text-gray-300 text-lg md:text-xl opacity-0 animate-slideUp animation-delay-500'>
              I'm a software developer specializing in the MERN stack with
              experience in system design. Currently, I'm focused on building
              scalable web applications.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn animation-delay-700'>
              <a
                href='/blogs'
                className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 rounded-md hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-all duration-300 transform hover:translate-y-[-2px]'
              >
                Read Blogs <ArrowRight size={20} />
              </a>
              <a
                href='tel:8743960234'
                className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 dark:bg-teal-300 text-white dark:text-gray-900 rounded-md hover:bg-teal-700 dark:hover:bg-teal-400 transition-all duration-300 transform hover:translate-y-[-2px]'
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { gsap } from 'gsap';
// import { useTheme } from '../context/ThemeContext';

// export default function Hero() {
//   const { theme } = useTheme();
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Initial animations
//     gsap.fromTo(overlayRef.current,
//       { opacity: 1 },
//       { opacity: theme === 'light' ? 0.3 : 0.7, duration: 1.5, ease: "power2.out" }
//     );

//     // Typing animation
//     if (textRef.current) {
//       const text = "I build things for the web.";
//       // Clear the text content before starting the typing effect
//       textRef.current.textContent = "";

//       const chars = text.split('');
//       let i = 0;

//       const typeText = setInterval(() => {
//         if (i < chars.length) {
//           textRef.current.textContent += chars[i];
//           i++;
//         } else {
//           clearInterval(typeText); // Stop typing when finished
//         }
//       }, 100);

//       // Cleanup on unmount to prevent any issues if component re-renders
//       return () => clearInterval(typeText);
//     }
//   }, []); // The empty dependency array ensures this runs once after the first render

//     // Parallax effect
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const scrolled = window.scrollY;
//         gsap.to(containerRef.current, {
//           y: scrolled * 0.4,
//           duration: 0.5,
//           ease: "none"
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [theme]);

//   return (
//     <section className="relative min-h-screen overflow-hidden pt-20">
//       <div
//         ref={containerRef}
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
//       <div
//         ref={overlayRef}
//         className="absolute inset-0 z-1 bg-black opacity-70"
//       />

//       <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="space-y-6 md:space-y-8">
//             <h2 className="text-teal-600 dark:text-teal-300 text-lg md:text-xl opacity-0 animate-fadeIn">
//               Hi, my name is
//             </h2>
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 opacity-0 animate-slideUp animation-delay-300">
//               Ayush Verma.
//             </h1>
//             <h3
//               ref={textRef}
//               className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-400 min-h-[4rem]"
//             />
//             <p className="max-w-xl text-gray-700 dark:text-gray-300 text-lg md:text-xl opacity-0 animate-slideUp animation-delay-500">
//               I'm a software developer specializing in the MERN stack with experience in system design.
//               Currently, I'm focused on building scalable web applications.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn animation-delay-700">
//               <a
//                 href="#projects"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 rounded-md hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-all duration-300 transform hover:translate-y-[-2px]"
//               >
//                 View Projects <ArrowRight size={20} />
//               </a>
//               <a
//                 href="tel:8743960234"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 dark:bg-teal-300 text-white dark:text-gray-900 rounded-md hover:bg-teal-700 dark:hover:bg-teal-400 transition-all duration-300 transform hover:translate-y-[-2px]"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
