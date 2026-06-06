'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Filter, X, ChevronDown, Check } from 'lucide-react';

const productsData = [
  // Sarees
  { id: 1, category: 'Sarees', name: 'Crimson Bridal Banarasi', price: 65000, material: 'Silk', occasion: 'Bridal', workType: 'Zari', image: 'https://picsum.photos/seed/s1/600/800' },
  { id: 2, category: 'Sarees', name: 'Emerald Silk Kanjivaram', price: 85000, material: 'Silk', occasion: 'Bridal', workType: 'Zari', image: 'https://picsum.photos/seed/s2/600/800' },
  { id: 3, category: 'Sarees', name: 'Yellow Festive Georgette', price: 15000, material: 'Georgette', occasion: 'Festive', workType: 'Embroidery', image: 'https://picsum.photos/seed/s3/600/800' },
  { id: 4, category: 'Sarees', name: 'Pastel Handwoven Cotton', price: 4500, material: 'Cotton', occasion: 'Casual', workType: 'Patchwork', image: 'https://picsum.photos/seed/s4/600/800' },
  { id: 5, category: 'Sarees', name: 'Navy Cocktail Chiffon', price: 12000, material: 'Chiffon', occasion: 'Festive', workType: 'Embellished', image: 'https://picsum.photos/seed/s5/600/800' },
  { id: 6, category: 'Sarees', name: 'Ruby Zari Embroidered', price: 35000, material: 'Silk', occasion: 'Festive', workType: 'Embroidery', image: 'https://picsum.photos/seed/s6/600/800' },
  { id: 13, category: 'Sarees', name: 'Midnight Blue Banarasi', price: 55000, material: 'Silk', occasion: 'Bridal', workType: 'Zari', image: 'https://picsum.photos/seed/s7/600/800' },
  { id: 14, category: 'Sarees', name: 'White Linen Saree', price: 8500, material: 'Linen', occasion: 'Casual', workType: 'Printed', image: 'https://picsum.photos/seed/s8/600/800' },
  
  // Jewelry
  { id: 7, category: 'Jewelry', name: 'Heritage Diamond Choker', price: 450000, type: 'Necklace', gemstone: 'Diamond', metal: 'Platinum', image: 'https://picsum.photos/seed/j1/600/800' },
  { id: 8, category: 'Jewelry', name: 'Temple Gold Jhumkas', price: 85000, type: 'Earrings', gemstone: 'None', metal: 'Gold', image: 'https://picsum.photos/seed/j2/600/800' },
  { id: 9, category: 'Jewelry', name: 'Emerald & Gold Bangles', price: 120000, type: 'Bangles', gemstone: 'Emerald', metal: 'Gold', image: 'https://picsum.photos/seed/j3/600/800' },
  { id: 10, category: 'Jewelry', name: 'Ruby Statement Ring', price: 65000, type: 'Rings', gemstone: 'Ruby', metal: 'Gold', image: 'https://picsum.photos/seed/j4/600/800' },
  { id: 11, category: 'Jewelry', name: 'Pearl Drop Earrings', price: 25000, type: 'Earrings', gemstone: 'Pearl', metal: 'Silver', image: 'https://picsum.photos/seed/j5/600/800' },
  { id: 12, category: 'Jewelry', name: 'Bridal Polki Necklace', price: 320000, type: 'Necklace', gemstone: 'Diamond', metal: 'Gold', image: 'https://picsum.photos/seed/j6/600/800' },
  { id: 15, category: 'Jewelry', name: 'Sapphire Silver Bangles', price: 50000, type: 'Bangles', gemstone: 'Sapphire', metal: 'Silver', image: 'https://picsum.photos/seed/j7/600/800' },
];

const categoryFilters: Record<string, Record<string, string[]>> = {
  Sarees: {
    material: ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Linen'],
    occasion: ['Bridal', 'Festive', 'Casual'],
    workType: ['Zari', 'Embroidery', 'Printed', 'Patchwork', 'Embellished'],
  },
  Jewelry: {
    type: ['Necklace', 'Earrings', 'Bangles', 'Rings'],
    gemstone: ['Diamond', 'Ruby', 'Emerald', 'Pearl', 'Sapphire', 'None'],
    metal: ['Gold', 'Silver', 'Platinum'],
  }
};

export function ShopClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const queryCategory = searchParams.get('category');
  const [activeTab, setActiveTab] = useState(queryCategory === 'Jewelry' ? 'Jewelry' : 'Sarees');
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter States
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500000 });

  // Update active tab if URL changes
  useEffect(() => {
    if (queryCategory === 'Sarees' || queryCategory === 'Jewelry') {
      setActiveTab(queryCategory);
      // Reset filters when switching main category
      setSelectedFilters({});
      setPriceRange({ min: 0, max: 500000 });
    }
  }, [queryCategory]);

  const handleTabChange = (tab: string) => {
    router.push(`/shop?category=${tab}`, { scroll: false });
  };

  const toggleFilter = (filterSection: string, value: string) => {
    setSelectedFilters(prev => {
      const currentSection = prev[filterSection] || [];
      const isSelected = currentSection.includes(value);
      
      let newSection;
      if (isSelected) {
        newSection = currentSection.filter(v => v !== value);
      } else {
        newSection = [...currentSection, value];
      }
      
      return {
        ...prev,
        [filterSection]: newSection
      };
    });
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      if (p.category !== activeTab) return false;
      if (p.price < priceRange.min || p.price > priceRange.max) return false;
      
      // Check every active filter section
      for (const [section, values] of Object.entries(selectedFilters)) {
        if (values.length === 0) continue;
        
        // Match the product property against the filter values
        const productVal = p[section as keyof typeof p] as string;
        if (!values.includes(productVal)) {
          return false;
        }
      }
      return true;
    });
  }, [activeTab, priceRange, selectedFilters]);

  const filtersForCurrentCategory = categoryFilters[activeTab];

  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Category Tabs */}
      <div className="flex justify-center gap-8 mb-12 border-b border-gold/20">
        <button 
          onClick={() => handleTabChange('Sarees')}
          className={`pb-4 font-serif text-2xl md:text-3xl transition-colors relative ${activeTab === 'Sarees' ? 'text-burgundy' : 'text-burgundy/40 hover:text-burgundy/70'}`}
        >
          Sarees
          {activeTab === 'Sarees' && (
            <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
          )}
        </button>
        <button 
          onClick={() => handleTabChange('Jewelry')}
          className={`pb-4 font-serif text-2xl md:text-3xl transition-colors relative ${activeTab === 'Jewelry' ? 'text-burgundy' : 'text-burgundy/40 hover:text-burgundy/70'}`}
        >
          Jewelry
          {activeTab === 'Jewelry' && (
            <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <span className="font-sans text-sm text-burgundy-light font-semibold uppercase tracking-widest">{filteredProducts.length} Results</span>
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 border border-gold text-burgundy px-4 py-2 hover:bg-gold hover:text-white transition-colors uppercase tracking-widest text-xs"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside className={`fixed inset-0 z-50 lg:static lg:block lg:w-1/4 bg-cream-light lg:bg-transparent overflow-y-auto lg:overflow-visible transition-transform duration-300 ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6 lg:p-0 h-full lg:h-auto border-r border-transparent lg:border-gold/20 lg:pr-8">
            <div className="flex justify-between items-center lg:hidden mb-8">
              <h2 className="font-serif text-2xl text-burgundy">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-burgundy">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Price Filter */}
              <div>
                 <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-burgundy mb-4 flex justify-between">
                   Price Range
                 </h3>
                 <div className="flex flex-col gap-4">
                   <div className="flex justify-between items-center gap-4">
                     <div className="flex-1">
                       <label className="text-xs text-burgundy-light uppercase tracking-wider mb-1 block">Min (₹)</label>
                       <input 
                         type="number" 
                         value={priceRange.min}
                         onChange={(e) => setPriceRange(prev => ({...prev, min: Math.min(Number(e.target.value), prev.max)}))}
                         className="w-full bg-cream border border-gold/40 px-3 py-2 text-burgundy focus:outline-none focus:border-gold text-sm"
                       />
                     </div>
                     <span className="text-burgundy pt-5">-</span>
                     <div className="flex-1">
                       <label className="text-xs text-burgundy-light uppercase tracking-wider mb-1 block">Max (₹)</label>
                       <input 
                         type="number" 
                         value={priceRange.max}
                         onChange={(e) => setPriceRange(prev => ({...prev, max: Math.max(Number(e.target.value), prev.min)}))}
                         className="w-full bg-cream border border-gold/40 px-3 py-2 text-burgundy focus:outline-none focus:border-gold text-sm"
                       />
                     </div>
                   </div>
                   
                   {/* Max Price Visual Slider */}
                   <input 
                     type="range"
                     min={0}
                     max={500000}
                     step={5000}
                     value={priceRange.max}
                     onChange={(e) => setPriceRange(prev => ({...prev, max: Math.max(Number(e.target.value), prev.min)}))}
                     className="w-full h-1 bg-gold/30 rounded-lg appearance-none cursor-pointer accent-burgundy"
                   />
                 </div>
              </div>

              {/* Dynamic Filters */}
              {Object.entries(filtersForCurrentCategory).map(([filterSection, values]) => (
                <div key={filterSection} className="border-t border-gold/20 pt-6">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-burgundy mb-4 capitalize">
                    {filterSection.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-3">
                    {values.map(val => {
                       const isChecked = (selectedFilters[filterSection] || []).includes(val);
                       return (
                        <label key={val} className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${isChecked ? 'bg-burgundy border-burgundy' : 'border-gold/50 group-hover:border-burgundy mt-0'}`}>
                             {isChecked && <Check className="w-3 h-3 text-cream-light" />}
                          </div>
                          <span className={`text-sm font-sans tracking-wide ${isChecked ? 'text-burgundy font-medium' : 'text-burgundy-light'}`}>
                            {val}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 lg:hidden">
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-burgundy text-cream-light py-3 uppercase tracking-widest text-sm font-semibold"
                >
                  View Results
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-gold/20">
             <span className="font-sans text-sm text-burgundy-light font-medium uppercase tracking-widest">{filteredProducts.length} Results Found</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-burgundy/60 text-lg">No products found matching your filters.</p>
              <button 
                onClick={() => {
                  setSelectedFilters({});
                  setPriceRange({ min: 0, max: 500000 });
                }}
                className="mt-6 border-b border-gold text-burgundy uppercase tracking-widest text-sm pb-1"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-cream-light border border-black/5">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <button className="bg-cream-light text-burgundy hover:bg-gold hover:text-white px-6 py-3 uppercase tracking-widest text-xs font-semibold transition-colors translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <div className="text-center mt-auto">
                      <h3 className="font-serif text-lg text-burgundy-dark mb-2">{product.name}</h3>
                      <p className="font-sans text-burgundy-light font-medium tracking-wide">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
