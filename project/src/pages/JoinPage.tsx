import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FormData } from '../types';

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    city: '',
    skills: '',
    solidarityAgreement: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    console.log('Form submitted:', formData);
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
            Ready to <span className="text-red-500">Rise?</span>
          </motion.h1>
          
          <p className="text-neutral-300 max-w-3xl mx-auto text-center mb-12 text-lg">
            Join our movement of people dedicated to building a more just and democratic society. 
            Together, we can create the change our communities need.
          </p>
        </div>
      </section>
      
      {/* Join Form Section */}
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Column */}
              <div className="hidden md:block relative">
                <img 
                  src="https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="People with raised fists" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center justify-center p-8">
                  <p className="text-white text-xl font-bold italic">
                    "Alone we can do so little; together we can do so much."
                  </p>
                </div>
              </div>
              
              {/* Form Column */}
              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Join We Rise</h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-neutral-300 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-neutral-300 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="city" className="block text-neutral-300 mb-1">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="skills" className="block text-neutral-300 mb-1">Skills / Interests</label>
                        <select
                          id="skills"
                          name="skills"
                          value={formData.skills}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">Select an option</option>
                          <option value="organizing">Community Organizing</option>
                          <option value="art">Art & Creative Resistance</option>
                          <option value="digital">Digital / Tech</option>
                          <option value="legal">Legal Support</option>
                          <option value="media">Media & Communications</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            name="solidarityAgreement"
                            checked={formData.solidarityAgreement}
                            onChange={handleCheckboxChange}
                            required
                            className="mt-1 mr-3"
                          />
                          <span className="text-neutral-300 text-sm">
                            I stand in solidarity with the mission and values of We Rise. I commit to treating all members with respect and dignity, regardless of background or identity.
                          </span>
                        </label>
                      </div>
                      
                      <Button type="submit" variant="primary" className="w-full">Join the Movement</Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="bg-green-600/20 text-green-500 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-2">Thank You for Joining!</h3>
                      <p>
                        We've received your information and will be in touch soon with next steps and local opportunities to get involved.
                      </p>
                    </div>
                    
                    <p className="text-neutral-300 mb-6">
                      In the meantime, you can download our organizing toolkit to get started.
                    </p>
                    
                    <Button variant="outline">Download Toolkit</Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alternative Ways to Join */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Other Ways to Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Attend a Meeting</h3>
              <p className="text-neutral-300 mb-4">
                Find a local chapter meeting in your area and connect with other members in person.
              </p>
              <a href="#" className="text-red-500 hover:text-red-400 font-medium">Find a Meeting →</a>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Join Online Community</h3>
              <p className="text-neutral-300 mb-4">
                Connect with fellow members through our secure messaging platforms and online forums.
              </p>
              <a href="#" className="text-red-500 hover:text-red-400 font-medium">Join Discord →</a>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Spread the Word</h3>
              <p className="text-neutral-300 mb-4">
                Download posters, social media graphics, and other materials to help spread our message.
              </p>
              <a href="#" className="text-red-500 hover:text-red-400 font-medium">Get Materials →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;