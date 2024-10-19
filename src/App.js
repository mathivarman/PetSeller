import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import PetList from './PetList';
import FeaturedBanner from './FeaturedBanner';
import ProductList from './ProductList';
import AdoptionBanner from './AdoptionBanner';
import PetKnowledgeCards from './PetKnowledgeCards';
import PetSellersSection from './PetSellersSection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PetList />
      <FeaturedBanner />
      <ProductList />
      <PetSellersSection />
      <PetKnowledgeCards />
      <Footer />
    </div>
  );
}

export default App;
