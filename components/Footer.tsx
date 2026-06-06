'use client';

import { Facebook, Twitter, Instagram, Diamond } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1A0006] text-cream-light pt-20 pb-10 border-t border-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start xl:pr-12">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Diamond className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest leading-none text-gold">
                  INDIRA
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1 text-cream-light/70">
                  Sarees & Jewels
                </span>
              </div>
            </Link>
            <p className="text-cream-light/60 font-sans leading-relaxed text-sm mb-8">
              A premium luxury Indian Saree and Jewelry boutique preserving timeless heritage and exquisite craftsmanship. Experience the royalty of India.
            </p>
            <div className="flex gap-4">
               {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-[#1A0006] hover:border-gold transition-all text-gold">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream-light/70 font-sans">
              {['Sarees', 'Jhumkas', 'Necklaces', 'Bridal Jewelry', 'New Arrivals'].map(link => (
                <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Information</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream-light/70 font-sans">
              {['About Us', 'Shipping Info', 'Payment Methods', 'FAQ', 'Contact Us'].map(link => (
                <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream-light/70 font-sans">
              {['Terms & Conditions', 'Privacy Policy', 'Returns & Exchanges'].map(link => (
                <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gold/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center flex flex-col items-center">
          <Diamond className="w-4 h-4 text-gold mb-4" />
          <p className="text-cream-light/50 text-xs font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} INDIRA Sarees & Jewels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
