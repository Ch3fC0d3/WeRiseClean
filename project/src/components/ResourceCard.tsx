import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  resource: ResourceItem;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const IconComponent = (LucideIcons as any)[resource.icon.charAt(0).toUpperCase() + resource.icon.slice(1)];
  
  return (
    <Link 
      to={resource.link}
      className="bg-neutral-800 rounded-lg p-6 transition-all duration-300 hover:bg-neutral-700 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-red-500">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-white text-lg font-bold mb-2">{resource.title}</h3>
        <p className="text-neutral-300 text-sm mb-4 flex-grow">{resource.description}</p>
        <div className="text-red-500 font-medium text-sm flex items-center">
          Access Resource
          <LucideIcons.ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;