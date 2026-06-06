import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Features } from '@/components/Features';
import { PromoBanners } from '@/components/PromoBanners';
import { InstagramGallery } from '@/components/InstagramGallery';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <PromoBanners />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
