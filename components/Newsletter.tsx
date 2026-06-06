'use client';

import { motion } from 'motion/react';

export function Newsletter() {
  return (
    <section className="py-24 bg-burgundy relative overflow-hidden">
      {/* Background traditional pattern motif */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Join The Indira Family</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-light mb-8">Subscribe To Our Newsletter</h2>
            <p className="text-cream-light/80 font-sans tracking-wide mb-10 max-w-lg mx-auto">
              Be the first to know about our new collections, exclusive offers, and behind-the-scenes stories of Indian craftsmanship.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full sm:w-2/3 bg-transparent border-b border-gold/50 py-3 px-4 text-cream-light placeholder-cream-light/50 focus:outline-none focus:border-gold transition-colors font-sans"
                required
              />
              <button 
                type="submit"
                className="bg-gold text-burgundy-dark hover:bg-cream-light hover:text-burgundy px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
