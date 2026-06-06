'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Sarees', image: 'https://picsum.photos/seed/sarees-cat/600/600' },
  { name: 'Jhumkas', image: 'https://picsum.photos/seed/jhumkas-cat/600/600' },
  { name: 'Necklaces', image: 'https://picsum.photos/seed/necklaces-cat/600/600' },
  { name: 'Jewelry Collection', image: 'https://picsum.photos/seed/jewelry-col-cat/600/600' }
];

export function Categories() {
  return (
    <section className="py-24 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-burgundy mb-4">Shop by Category</h2>
          <div className="h-[2px] w-24 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-gold transition-colors duration-500">
                <Image 
                  src={cat.image} 
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-burgundy-dark group-hover:text-gold transition-colors">{cat.name}</h3>
              <div className="flex items-center gap-2 mt-3 text-sm tracking-widest uppercase text-burgundy-light group-hover:text-gold transition-colors">
                <span>View Collection</span>
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
