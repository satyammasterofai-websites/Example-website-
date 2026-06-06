'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Red Banarasi Silk Saree', price: '₹45,000', image: 'https://picsum.photos/seed/banarasi/600/800', isNew: true },
  { id: 2, name: 'Gold Temple Jhumka', price: '₹85,000', image: 'https://picsum.photos/seed/jhumka/600/800', isNew: false },
  { id: 3, name: 'Royal Kanjivaram Saree', price: '₹62,000', image: 'https://picsum.photos/seed/kanjivaram/600/800', isNew: true },
  { id: 4, name: 'Lakshmi Heritage Necklace', price: '₹2,15,000', image: 'https://picsum.photos/seed/necklace/600/800', isNew: false },
  { id: 5, name: 'Antique Kundan Set', price: '₹1,50,000', image: 'https://picsum.photos/seed/kundan/600/800', isNew: true }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-gold uppercase tracking-widest text-sm mb-3">Timeless Craftsmanship</span>
          <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-6">Our Best Sellers</h2>
          <div className="h-[2px] w-24 bg-gold"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-cream-light border border-black/5">
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-burgundy text-cream-light text-xs uppercase tracking-wider px-3 py-1">
                    New
                  </div>
                )}
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-cream-light text-burgundy hover:bg-gold hover:text-white px-6 py-3 uppercase tracking-widest text-xs font-semibold transition-colors translate-y-4 group-hover:translate-y-0 duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="text-center mt-auto">
                <h3 className="font-serif text-lg text-burgundy-dark mb-2">{product.name}</h3>
                <p className="font-sans text-burgundy-light font-medium tracking-wide">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream-light transition-colors uppercase tracking-widest text-sm"
          >
            View All Best Sellers
          </motion.button>
        </div>
      </div>
    </section>
  );
}
