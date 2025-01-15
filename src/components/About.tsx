export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express',
    'Docker',
    'AWS',
  ];

  return (
    <section id='about' className='py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-gray-100 mb-8'>About Me</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <p className='text-gray-400'>
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, specializing in the MERN stack. My expertise extends
              to system design and building scalable web applications.
            </p>
            <p className='text-gray-400'>
              Graduated with a B.Tech in Computer Science from Amity School of
              Engineering and Technology, I have actively contributed to
              developing real-world solutions throughout my academic journey.
            </p>
            <p className='text-gray-400'>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className='grid grid-cols-2 gap-2'>
              {skills.map((skill) => (
                <li
                  key={skill}
                  className='flex items-center gap-2 text-gray-400'
                >
                  <span className='text-teal-300'>▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className='relative group'>
            <div className='relative z-10'>
              <img
                src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80'
                alt='Profile'
                className='rounded-lg grayscale hover:grayscale-0 transition-all duration-300'
              />
            </div>
            <div className='absolute inset-0 border-2 border-teal-300 rounded-lg transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
