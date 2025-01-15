import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'Pink Unicorn Algorithm Pvt. Ltd.',
      role: 'Software Developer',
      date: 'March 2023 - Present',
      points: [
        'Developed and deployed DPDPA Assessment software using MERN stack',
        'Built high-performance back-end handling 1,000+ daily data entries',
        'Leading Consent Manager development, improving GDPR compliance',
      ],
    },
    {
      company: 'Big Dreams Infoservices Pvt. Ltd',
      role: 'Software Engineer Intern',
      date: 'June 2022 - Aug 2022',
      points: [
        'Contributed to Lead Management System (LMS) development',
        'Implemented core functionalities for lead creation and tracking',
        'Assisted in database management and back-end integration',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-[#112240]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-12">Where I've Worked</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-teal-300">
              <div className="absolute w-4 h-4 bg-teal-300 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-100">{exp.role}</h3>
                <p className="text-teal-300">{exp.company}</p>
                <p className="text-gray-400">{exp.date}</p>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <span className="text-teal-300 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}