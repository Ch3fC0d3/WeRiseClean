import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">We Rise</h3>
            <p className="text-neutral-400 mb-4">
              Fighting for a just and truly democratic future through collective action.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-neutral-400 hover:text-white transition-colors">
                  Join
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-neutral-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources#rights" className="text-neutral-400 hover:text-white transition-colors">
                  Know Your Rights
                </Link>
              </li>
              <li>
                <Link to="/resources#mutual-aid" className="text-neutral-400 hover:text-white transition-colors">
                  Mutual Aid
                </Link>
              </li>
              <li>
                <Link to="/resources#security" className="text-neutral-400 hover:text-white transition-colors">
                  Security Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Data & Privacy</h3>
            <p className="text-neutral-400 mb-4">
              This site uses end-to-end encryption where possible. We never store sensitive information.
            </p>
            <div className="flex items-center text-neutral-400">
              <Shield size={16} className="mr-2" />
              <span className="text-sm">Secure Communication</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} We Rise. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-4 md:mt-0">
            In solidarity with all people fighting for justice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;