import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ExternalLink } from 'lucide-react';

const ActionsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            Take <span className="text-red-500">Action</span>
          </motion.h1>
        </div>
      </section>
      
      <section className="bg-neutral-800 min-h-[calc(100vh-200px)] relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="flex flex-col items-center justify-center p-8 text-center h-[calc(100vh-200px)]">
            <h2 className="text-2xl font-bold text-white mb-4">Unable to load ActTogether.us</h2>
            <p className="text-neutral-300 mb-6">The content is temporarily unavailable. You can visit the website directly:</p>
            <a 
              href="https://www.acttogether.us" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="flex items-center">
                Visit ActTogether.us
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </a>
          </div>
        ) : (
          <iframe 
            src="https://www.acttogether.us" 
            className="w-full h-[calc(100vh-200px)] border-0"
            title="ActTogether.us"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        )}
      </section>
    </div>
  );
};

export default ActionsPage;