'use client';

import { motion } from 'motion/react';
import { Award, ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react';

const features = [
  { icon: Award, title: 'Premium Quality', desc: 'Handcrafted luxury products' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Worldwide shipping available' },
  { icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure checkout' },
  { icon: HeadphonesIcon, title: 'Customer Support', desc: '24/7 premium support' },
];

export function Features() {
  return (
    <section className="py-20 bg-burgundy border-y border-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={feat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                <feat.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-gold mb-2">{feat.title}</h3>
              <p className="text-cream-light/70 font-sans tracking-wide">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
