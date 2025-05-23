import React from 'react';
import * as LucideIcons from 'lucide-react';
import { CoreValue } from '../types';
import { motion } from 'framer-motion';

interface ValueCardProps {
  value: CoreValue;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  const IconComponent = (LucideIcons as any)[value.icon.charAt(0).toUpperCase() + value.icon.slice(1)];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-neutral-800 rounded-lg p-6 transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex flex-col">
        <div className="mb-4 text-red-500">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-white text-lg font-bold mb-2">{value.title}</h3>
        <p className="text-neutral-300 text-sm">{value.description}</p>
      </div>
    </motion.div>
  );
};

export default ValueCard;