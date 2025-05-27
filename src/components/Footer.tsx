import React from 'react';
import { Scale } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide-react';

const year = new Date().getFullYear();

const Footer = () => (

  <footer className="bg-primary text-white py-6">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="">
          <img
            src="/RLF-croped.png"
            alt="Repchian Law Firm Logo"
            className="h-14 w-auto mb-4 bg-white p-1"
          />
          {/* <Scale className="h-8 w-8 text-secondary mr-2" /> */}
          {/* <span className="text-xl font-bold">Repchian Law Firm, APC</span> */}
          {/* Repchian Law Firm, APC © 2025 All Rights Reserved.  */}
          <p className="text-sm max-w-[260px]">Attorney Advertising. Past results do not guarantee future outcomes.</p> 
        </div>
        
        
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-blue-100 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded p-1" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-blue-100 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded p-1" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center space-x-4 mt-8 pb-4">
          <a href="#" className="text-blue-100 hover:text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-secondary rounded">Disclaimer</a>
          <a href="#" className="text-blue-100 hover:text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-secondary rounded">Accessibility</a>
          <a href="#" className="text-blue-100 hover:text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-secondary rounded">Privacy</a>
        </div>
      </div>
      <div className="border-t border-blue-600 mt-2 pt-8 text-center">
        <div className="text-center">
          <p className="text-sm text-blue-100">
            © {year} Repchian Law Firm, APC. All Rights Reserved.
          </p>
          <div className="mt-2 text-sm text-blue-100">
            Website Developed by{' '}
            <a
              href="https://www.citrusappslab.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-secondary transition-colors duration-200 "
            >
              Citrus Apps Lab
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
