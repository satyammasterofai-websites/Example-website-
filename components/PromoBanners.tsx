'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function PromoBanners() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 h-[600px]">
          
          {/* Left Banner */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden group h-full"
          >
            <Image 
              src="https://picsum.photos/seed/saree-texture-banner/1000/1200"
              alt="Collection Sarees"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Exquisite Weaves</span>
              <h2 className="font-serif text-4xl md:text-5xl text-cream-light mb-8">Collection Sarees</h2>
              <button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-burgundy px-10 py-3 uppercase tracking-widest text-sm transition-colors">
                Discover
              </button>
            </div>
          </motion.div>

          {/* Right Banner */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden group h-full"
          >
            <Image 
              src="https://picsum.photos/seed/jewelry-banner/1000/1200"
              alt="Indian Jewelry Collection"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Royal Heritage</span>
              <h2 className="font-serif text-4xl md:text-5xl text-cream-light mb-8">Jewelry Collection</h2>
              <button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-burgundy px-10 py-3 uppercase tracking-widest text-sm transition-colors">
                Discover
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
