import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { MessageSquare, Shield, Instagram } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            Contact <span className="text-red-500">Us</span>
          </motion.h1>
          
          <p className="text-neutral-300 max-w-3xl mx-auto text-center mb-12 text-lg">
            Have questions, ideas, or feedback? We want to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </section>
      
      {/* Contact Methods */}
      <section className="py-12 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={28} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Message</h3>
              <p className="text-neutral-300 mb-4">
                For encrypted communication, contact us via Signal or ProtonMail.
              </p>
              <a href="mailto:contact@werise.org" className="text-red-500 hover:text-red-400 font-medium">
                contact@werise.org
              </a>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Form</h3>
              <p className="text-neutral-300 mb-4">
                Use our encrypted contact form below for general inquiries.
              </p>
              <a href="#contact-form" className="text-red-500 hover:text-red-400 font-medium">
                Go to Form
              </a>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram size={28} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Social Media</h3>
              <p className="text-neutral-300 mb-4">
                Follow us on social media for updates and direct messages.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-red-500 hover:text-red-400">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-red-500 hover:text-red-400">
                  <span className="sr-only">Discord</span>
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-neutral-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-neutral-300 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-neutral-300 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-neutral-300 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="media">Media Request</option>
                        <option value="chapter">Start a Local Chapter</option>
                        <option value="event">Event Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-neutral-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      ></textarea>
                    </div>
                    
                    <div className="text-neutral-300 text-sm mb-6 bg-neutral-900 p-4 rounded-lg">
                      <p className="flex items-start">
                        <Shield size={16} className="mr-2 mt-1 flex-shrink-0 text-red-500" />
                        This form uses end-to-end encryption. Your message cannot be read by third parties.
                      </p>
                    </div>
                    
                    <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-600/20 text-green-500 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <Button variant="secondary" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Upcoming Public Events</h2>
          
          <div className="max-w-5xl mx-auto bg-neutral-900 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-neutral-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold text-lg">Community Organizing Workshop</h3>
                  <p className="text-neutral-400">July 15, 2025 • 6:00 PM</p>
                </div>
                <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-sm">Public</span>
              </div>
              <p className="text-neutral-300 mt-3">
                Central Community Center, 123 Main St, Springfield
              </p>
            </div>
            
            <div className="p-6 border-b border-neutral-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold text-lg">Democracy Reform Town Hall</h3>
                  <p className="text-neutral-400">July 22, 2025 • 7:30 PM</p>
                </div>
                <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-sm">Public</span>
              </div>
              <p className="text-neutral-300 mt-3">
                Public Library Auditorium, 500 Park Ave, Springfield
              </p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold text-lg">National Day of Action Prep Meeting</h3>
                  <p className="text-neutral-400">July 29, 2025 • 6:30 PM</p>
                </div>
                <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-sm">Public</span>
              </div>
              <p className="text-neutral-300 mt-3">
                Union Hall, 789 Worker Ave, Springfield
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;