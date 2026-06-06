'use client';

import { motion } from 'motion/react';
import { Search, User, Heart, ShoppingCart, Menu, X, Diamond } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sarees', href: '/shop?category=Sarees' },
    { name: 'Jewelry', href: '/shop?category=Jewelry' },
    { name: 'New Arrivals', href: '/shop' },
    { name: 'Collections', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const headerBgClass = isScrolled || !isHome 
    ? 'bg-cream-light/95 backdrop-blur-md shadow-sm py-4' 
    : 'bg-transparent py-6';
    
  const textClass = isScrolled || !isHome ? 'text-burgundy-dark' : 'text-cream-light';
  const logoTextClass = isScrolled || !isHome ? 'text-burgundy' : 'text-cream-light';
  const logoSubTextClass = isScrolled || !isHome ? 'text-burgundy-dark/70' : 'text-cream-light/80';
  const iconClass = isScrolled || !isHome ? 'text-burgundy' : 'text-cream-light';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Diamond className={`w-8 h-8 transition-colors duration-300 text-gold`} />
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-bold tracking-widest leading-none ${logoTextClass}`}>
                INDIRA
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase mt-1 ${logoSubTextClass}`}>
                Sarees & Jewels
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${textClass}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center gap-6">
            {[Search, User, Heart, ShoppingCart].map((Icon, idx) => (
              <button key={idx} className={`hover:text-gold transition-colors ${iconClass}`}>
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden hover:text-gold transition-colors ${iconClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden absolute top-full left-0 w-full bg-cream-light border-t border-gold/20 shadow-lg"
        >
          <div className="py-4 px-4 flex flex-col gap-4 text-burgundy-dark">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-medium hover:text-gold transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 pt-4 border-t border-gold/20">
               {[Search, User, Heart, ShoppingCart].map((Icon, idx) => (
                <button key={idx} className="hover:text-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
