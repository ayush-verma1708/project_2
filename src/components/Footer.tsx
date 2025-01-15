import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-50 dark:bg-[#0a192f] text-gray-600 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex space-x-6 mb-4 md:mb-0'>
            <a
              href='https://github.com/ayush-verma1708'
              className='text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-300 transition-colors'
            >
              <Github size={20} />
            </a>
            <a
              href='https://www.linkedin.com/in/ayush-verma-/'
              className='text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-300 transition-colors'
            >
              <Linkedin size={20} />
            </a>
            <a
              href='mailto:verma.ayushh1708@gmail.com'
              className='text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-300 transition-colors'
            >
              <Mail size={20} />
            </a>
            <a
              href='tel:8743960234'
              className='text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-300 transition-colors'
            >
              <Phone size={20} />
            </a>
          </div>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            © 2025 Ayush Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
