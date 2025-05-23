import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Download, ExternalLink, Calendar } from 'lucide-react';

const MediaPage: React.FC = () => {
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
            Media & <span className="text-red-500">Press</span>
          </motion.h1>
          
          <p className="text-neutral-300 max-w-3xl mx-auto text-center mb-12 text-lg">
            Find our latest press releases, media coverage, and downloadable assets. For media inquiries, 
            please contact our press team directly.
          </p>
          
          <div className="text-center">
            <Button>Press Contact</Button>
          </div>
        </div>
      </section>
      
      {/* Press Releases */}
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Press Releases</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-900 rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex items-center text-red-500 text-sm font-bold mb-2">
                  <Calendar size={16} className="mr-2" />
                  JULY 1, 2025
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  We Rise Announces National Day of Action for Democracy Reform
                </h3>
                <p className="text-neutral-300 mb-4">
                  Thousands expected to mobilize in coordinated actions across the country demanding an end to corporate dominance in politics.
                </p>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-900 rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex items-center text-red-500 text-sm font-bold mb-2">
                  <Calendar size={16} className="mr-2" />
                  JUNE 15, 2025
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  We Rise Responds to Supreme Court Decision on Campaign Finance
                </h3>
                <p className="text-neutral-300 mb-4">
                  Activist organization condemns ruling that further entrenches the influence of wealthy donors in electoral politics.
                </p>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-red-500 text-sm font-bold mb-2">
                  <Calendar size={16} className="mr-2" />
                  MAY 22, 2025
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  We Rise Releases New Report on Corporate Lobbying Influence
                </h3>
                <p className="text-neutral-300 mb-4">
                  Research shows dramatic increase in corporate lobbying expenditures and correlating policy outcomes.
                </p>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="secondary">View All Press Releases</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Coverage */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Media Coverage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-neutral-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-neutral-400 text-sm mb-3">National Times • June 28, 2025</div>
                <h3 className="text-white text-lg font-bold mb-3">
                  Grassroots Movement "We Rise" Gains Momentum Nationwide
                </h3>
                <p className="text-neutral-300 text-sm mb-4">
                  The activist organization has seen explosive growth in recent months as frustration with corporate influence in politics reaches new heights.
                </p>
                <a href="#" className="text-red-500 hover:text-red-400 font-medium flex items-center">
                  Read Article
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="bg-neutral-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-neutral-400 text-sm mb-3">Democracy Now • June 15, 2025</div>
                <h3 className="text-white text-lg font-bold mb-3">
                  Interview: Inside the We Rise Movement
                </h3>
                <p className="text-neutral-300 text-sm mb-4">
                  We speak with organizers about their vision for democratic reform and the tactics they're using to build power from the ground up.
                </p>
                <a href="#" className="text-red-500 hover:text-red-400 font-medium flex items-center">
                  Watch Interview
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="bg-neutral-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-neutral-400 text-sm mb-3">The Progressive • May 30, 2025</div>
                <h3 className="text-white text-lg font-bold mb-3">
                  How We Rise is Redefining Grassroots Organizing
                </h3>
                <p className="text-neutral-300 text-sm mb-4">
                  The movement combines traditional organizing with digital activism to create a powerful new model for social change.
                </p>
                <a href="#" className="text-red-500 hover:text-red-400 font-medium flex items-center">
                  Read Article
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Assets */}
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Media Assets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">Logo Package</h3>
              <p className="text-neutral-300 mb-6">
                Download our logo in various formats and sizes for press use.
              </p>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download size={16} className="mr-2" />
                Download Logos
              </Button>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">Press Photos</h3>
              <p className="text-neutral-300 mb-6">
                High-resolution images from recent actions and events.
              </p>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download size={16} className="mr-2" />
                Download Photos
              </Button>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">Fact Sheet</h3>
              <p className="text-neutral-300 mb-6">
                Key facts and background information about We Rise.
              </p>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download size={16} className="mr-2" />
                Download Fact Sheet
              </Button>
            </div>
            
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">Media Kit</h3>
              <p className="text-neutral-300 mb-6">
                Complete media kit with all resources for journalists.
              </p>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download size={16} className="mr-2" />
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;