import React from 'react';
import { Scale } from 'lucide-react';
import{ Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#hero" className="flex items-center space-x-2">
            <img
                src="/RLF-croped.png"
                alt="Repchian Law Firm Logo"
                className="h-14 w-auto bg-white p-1"
              />
          </a>
        </div>
      
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-primary hover:text-secondary transition-colors">About</a>
          <a href="#practice-areas" className="text-primary hover:text-secondary transition-colors">Practice Areas</a>
          <a href="#news" className="text-primary hover:text-secondary transition-colors">News</a>
          <a href="#contact" className="text-primary hover:text-secondary transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-surface shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#about" className="text-primary hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#practice-areas" className="text-primary hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Practice Areas</a>
              <a href="#news" className="text-primary hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>News</a>
              <a href="#contact" className="text-primary hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
    
  )
};

export default Header;