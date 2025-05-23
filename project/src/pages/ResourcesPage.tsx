import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources';
import { ResourceItem } from '../types';

const ResourcesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredResources: ResourceItem[] = filter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === filter);
  
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
            Movement <span className="text-red-500">Resources</span>
          </motion.h1>
          
          <p className="text-neutral-300 max-w-3xl mx-auto text-center mb-12 text-lg">
            Knowledge is power. Access our collection of guides, toolkits, and educational materials to strengthen your activism and organizing efforts.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full border transition-colors ${
                filter === 'all' 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'border-neutral-600 text-neutral-300 hover:border-white hover:text-white'
              }`}
            >
              All Resources
            </button>
            <button 
              onClick={() => setFilter('rights')}
              className={`px-4 py-2 rounded-full border transition-colors ${
                filter === 'rights' 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'border-neutral-600 text-neutral-300 hover:border-white hover:text-white'
              }`}
            >
              Know Your Rights
            </button>
            <button 
              onClick={() => setFilter('mutual-aid')}
              className={`px-4 py-2 rounded-full border transition-colors ${
                filter === 'mutual-aid' 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'border-neutral-600 text-neutral-300 hover:border-white hover:text-white'
              }`}
            >
              Mutual Aid
            </button>
            <button 
              onClick={() => setFilter('zines')}
              className={`px-4 py-2 rounded-full border transition-colors ${
                filter === 'zines' 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'border-neutral-600 text-neutral-300 hover:border-white hover:text-white'
              }`}
            >
              Zines
            </button>
            <button 
              onClick={() => setFilter('security')}
              className={`px-4 py-2 rounded-full border transition-colors ${
                filter === 'security' 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'border-neutral-600 text-neutral-300 hover:border-white hover:text-white'
              }`}
            >
              Security Tools
            </button>
            <button 
              onClick={() => setFilter('organize')}
              className={`px-4 py-2 rounded-full border transition-colors ${
                filter === 'organize' 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'border-neutral-600 text-neutral-300 hover:border-white hover:text-white'
              }`}
            >
              How to Organize
            </button>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-12 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filteredResources.map((resource, index) => (
              <motion.div 
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-300 text-lg">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Resource Request Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Need a Specific Resource?</h2>
            <p className="text-neutral-300 mb-8">
              If you're looking for information on a specific topic that isn't covered in our resource library, let us know and we'll work to create or find what you need.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Request a Resource
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;