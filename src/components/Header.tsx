import { useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className='fixed w-full nav-blur z-50 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-4'>
        <a
          href='/'
          className='text-2xl font-bold text-teal-600 dark:text-teal-300'
        >
          AV.
        </a>

        <div className='flex items-center space-x-8'>
          <div className='hidden md:flex space-x-8'>
            {!isHomePage && (
              <a
                href='/'
                className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
              >
                Home
              </a>
            )}
            {isHomePage && (
              <>
                <a
                  href='#about'
                  className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
                >
                  About
                </a>
                <a
                  href='#experience'
                  className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
                >
                  Experience
                </a>
                <a
                  href='#projects'
                  className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
                >
                  Projects
                </a>
                <a
                  href='#contact'
                  className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
                >
                  Contact
                </a>
              </>
            )}
            <a
              href='/blogs'
              className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
            >
              Blogs
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

// import ThemeToggle from './ThemeToggle';

// export default function Header() {
//   return (
//     <nav className='fixed w-full nav-blur z-50 transition-colors duration-300'>
//       <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-4'>
//         <a
//           href='/'
//           className='text-2xl font-bold text-teal-600 dark:text-teal-300'
//         >
//           AV.
//         </a>

//         <div className='flex items-center space-x-8'>
//           <div className='hidden md:flex space-x-8'>
//             <a
//               href='/'
//               className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
//             >
//               Home
//             </a>
//             <a
//               href='#experience'
//               className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
//             >
//               Experience
//             </a>
//             <a
//               href='#projects'
//               className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
//             >
//               Projects
//             </a>
//             <a
//               href='#contact'
//               className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
//             >
//               Contact
//             </a>
//             <a
//               href='/blogs'
//               className='text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors'
//             >
//               Blogs
//             </a>{' '}
//             {/* Added link to Blogs */}
//           </div>
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// }
