'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const images = [
  'https://picsum.photos/seed/insta-1/600/600',
  'https://picsum.photos/seed/insta-2/600/600',
  'https://picsum.photos/seed/insta-3/600/600',
  'https://picsum.photos/seed/insta-4/600/600',
  'https://picsum.photos/seed/insta-5/600/600',
  'https://picsum.photos/seed/insta-6/600/600',
];

export function InstagramGallery() {
  return (
    <section className="py-24 bg-cream-light overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-serif text-4xl text-burgundy mb-4">Follow Us On Instagram</h2>
        <a href="#" className="inline-flex items-center gap-2 text-burgundy-light hover:text-gold transition-colors font-sans tracking-wide">
          <Instagram className="w-5 h-5" />
          @indira.sarees.jewels
        </a>
      </div>

      <div className="flex w-full">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative flex-1 aspect-square md:aspect-[4/5] overflow-hidden group cursor-pointer"
          >
            <Image 
              src={img}
              alt={`Instagram Gallery Image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
