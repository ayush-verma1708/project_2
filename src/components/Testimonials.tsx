import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "He evaluates the needs in a professional manner and creates wonderous digital content.",
      author: "Mrinali Srivastava",
      role: "HR of Study Room"
    },
    {
      text: "I've never met a web developer who truly cares about their clients' success like Ayush does.",
      author: "Vaishali",
      role: "CEO of The Meraki Store"
    },
    {
      text: "His capacity to swiftly grasp new concepts and adapt to evolving challenges is truly commendable.",
      author: "Rishab Chillar",
      role: "CEO of Prospeer"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#112240]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0a192f] p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-6xl text-teal-300 opacity-50">"</div>
              <div className="relative">
                <p className="text-gray-400 mb-4">{testimonial.text}</p>
                <div>
                  <p className="text-teal-300 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}