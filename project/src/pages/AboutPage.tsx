import React from 'react';
import { motion } from 'framer-motion';
import ValueCard from '../components/ValueCard';
import { coreValues } from '../data/values';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            About <span className="text-red-500">We Rise</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Origin</h2>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                We Rise began in 2025 when a diverse group of activists, community organizers, and concerned citizens came together in response to the growing influence of corporate money in politics and the erosion of democratic institutions.
              </p>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                What started as local meetings in community centers and living rooms quickly grew into a coordinated network of people committed to building a movement that could effectively challenge entrenched power and create meaningful change.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Today, We Rise continues to grow as more people recognize that real change requires collective action and a commitment to fighting for a system that truly represents the people.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="People in a community meeting" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Who We Are Section */}
      <section className="py-20 bg-neutral-900 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-neutral-800 p-8 md:p-12 rounded-lg">
              <div className="absolute -top-6 -left-6 text-6xl text-red-600 opacity-30">"</div>
              <div className="absolute -bottom-6 -right-6 text-6xl text-red-600 opacity-30">"</div>
              
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-4xl font-bold text-white mb-6 text-center italic"
              >
                We are the many, not the few. We are not waiting—we are rising.
              </motion.h2>
              
              <p className="text-neutral-300 text-center max-w-3xl mx-auto">
                We Rise is not a brand or a single voice. We are a collective force—fluid, fierce, and fueled by those who refuse to be silent. Our strength is in our diversity, and our power lies in what we build together.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our Structure</h3>
                <p className="text-neutral-300 mb-4">
                  We Rise operates as a horizontally organized network of local chapters. We don't have traditional hierarchies or central leadership—instead, we practice shared decision-making and distributed responsibility.
                </p>
                <p className="text-neutral-300">
                  This structure allows us to be nimble, responsive to local needs, and resistant to co-optation or suppression.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
                <p className="text-neutral-300 mb-4">
                  We believe in utilizing a diversity of tactics to achieve our goals, from community organizing and education to direct action and civil disobedience.
                </p>
                <p className="text-neutral-300">
                  While our methods may vary, our commitment to nonviolence, collective liberation, and building people power remains constant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;