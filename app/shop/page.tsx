import { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShopClient } from './ShopClient';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-32 pb-24">
        <Suspense fallback={<div className="flex justify-center py-20 text-burgundy"><div className="animate-spin h-8 w-8 border-4 border-gold border-t-transparent rounded-full" /></div>}>
          <ShopClient />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
