import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/people.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">We Rise.</span>
            <span className="block text-red-500 text-2xl md:text-3xl lg:text-4xl mt-2">Resist Injustice</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl">Seek Equality</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-lg md:text-xl max-w-2xl mb-8"
          >
            We Rise exists to dismantle oligarchic power and return control of government to the people. 
            Through collective action, creative resistance, and radical transparency, we fight for a just and truly democratic future.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/join">
              <Button size="lg">Join the Movement</Button>
            </Link>
            <Link to="/actions">
              <Button variant="outline" size="lg">Upcoming Action</Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: 12 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Mission Statement Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
              We believe in a future where power is distributed equitably, where corporate influence 
              over politics is eliminated, and where government serves the people rather than special interests. 
              We organize at the grassroots level to build collective power that can transform our democracy 
              and create a more just society.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-red-500 font-bold text-xl mb-2">People Powered</h3>
                <p className="text-neutral-300">Our strength comes from ordinary people uniting for extraordinary change.</p>
              </div>
              
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-red-500 font-bold text-xl mb-2">Direct Action</h3>
                <p className="text-neutral-300">We use creative, nonviolent resistance to challenge unjust systems.</p>
              </div>
              
              <div className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-red-500 font-bold text-xl mb-2">Real Democracy</h3>
                <p className="text-neutral-300">We envision governance that truly represents the will of the people.</p>
              </div>
            </div>
            
            <Link to="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Actions Section */}
      <section className="py-20 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Latest Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6174861/pexels-photo-6174861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="People protesting with signs" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-red-500 text-sm font-bold mb-2">JULY 15, 2025</div>
                <h3 className="text-white text-xl font-bold mb-2">National Day of Action</h3>
                <p className="text-neutral-300 mb-4">Join thousands across the country in coordinated protests demanding campaign finance reform.</p>
                <Link to="/actions/national-day" className="text-red-500 font-medium flex items-center">
                  Learn More
                  <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8851511/pexels-photo-8851511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Protest banner creation workshop" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-red-500 text-sm font-bold mb-2">ONGOING</div>
                <h3 className="text-white text-xl font-bold mb-2">Community Organizing Workshops</h3>
                <p className="text-neutral-300 mb-4">Weekly skill-building sessions to strengthen our collective organizing capacity.</p>
                <Link to="/actions/workshops" className="text-red-500 font-medium flex items-center">
                  Find a Workshop
                  <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/actions">
              <Button variant="secondary">View All Actions</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Action?</h2>
            <p className="text-white text-lg mb-10">
              Change doesn't happen without you. Join our movement and be part of building a more just and democratic future.
            </p>
            
            <Link to="/join">
              <Button variant="secondary" size="lg">Join We Rise Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;