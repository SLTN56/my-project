import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-anteli-secondary">Anteli</h3>
          <p className="text-gray-300">
            Streaming live events and connecting audiences with remarkable performances.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Live Events
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-300">
            <p>Email: support@anteli.com</p>
            <p>Phone: +254 (0) 700 000 000</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a 
                href="https://twitter.com/anteli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.604-1.562 4.92 4.92 0 00-4.92 4.918c0 .385.045.76.127 1.122A13.975 13.975 0 011.67 3.149 4.93 4.93 0 003.162 7.13a4.924 4.924 0 01-2.23-.616v.062A4.926 4.926 0 004.92 11.98a4.997 4.997 0 01-2.212.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.056 0 14-7.5 14-14 0-.21-.005-.422-.014-.632A9.936 9.936 0 0024 4.557z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/anteli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Anteli. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;