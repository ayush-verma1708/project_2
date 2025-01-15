import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    window.location.href = `mailto:verma.ayushh1708@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Mail size={40} className="text-teal-300 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-[#112240] rounded border border-gray-700 text-gray-100 focus:border-teal-300 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-[#112240] rounded border border-gray-700 text-gray-100 focus:border-teal-300 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 bg-[#112240] rounded border border-gray-700 text-gray-100 focus:border-teal-300 focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-transparent border-2 border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}