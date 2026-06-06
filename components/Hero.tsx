'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background with decorative traditional patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #5A0015 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-gold"></span>
              <span className="text-gold font-sans tracking-[0.2em] uppercase text-sm font-semibold">Heritage Collection</span>
              <span className="hidden lg:block h-[1px] w-12 bg-gold"></span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-burgundy font-bold leading-tight mb-6">
              Timeless Indian <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-light">Elegance</span> & Luxury
            </h1>
            
            <p className="text-burgundy-dark/80 text-lg md:text-xl font-sans max-w-xl mb-10 leading-relaxed font-light">
              Premium Sarees • Temple Jewelry • Jhumkas • Heritage Collection
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-burgundy text-cream-light font-sans uppercase tracking-widest text-sm hover:bg-burgundy-light transition-colors shadow-lg shadow-burgundy/20"
            >
              Explore Collection
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative lg:h-[800px] flex justify-center items-center"
          >
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-gold/40 rounded-t-full scale-95 origin-bottom"></div>
            <div className="absolute inset-4 border border-burgundy/20 rounded-t-full scale-95 origin-bottom"></div>
            
            <div className="relative w-full max-w-md aspect-[3/4] lg:aspect-auto lg:h-[90%] rounded-t-full overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/indian-bride-jewelry-saree-2/800/1200" 
                alt="Beautiful Indian woman in Banarasi Saree and Gold Jewelry"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 bg-cream-light p-6 shadow-xl rounded-none border border-gold/20 backdrop-blur-sm"
            >
              <p className="font-serif text-burgundy text-xl">Handcrafted</p>
              <p className="text-gold text-sm tracking-widest uppercase mt-1">Perfection</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
