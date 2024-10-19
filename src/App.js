import React from 'react';
import Navbar from './Component/Navbar';
import Banner1 from './Component/Banner1';
import PetList from './Component/PetList';
import Banner2 from './Component/Banner2';
import ProductList from './Component/ProductList';
import PetKnowledgeCards from './Component/PetKnowledgeCards';
import PetSellersSection from './Component/PetSellersSection';
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      <Navbar />
     
      <Banner1 />
      <PetList />
      <Banner2 />
      <ProductList />
      <PetSellersSection />
      <PetKnowledgeCards />
     
     
      <Footer />
    </div>
  );
}
export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Banner1 from './Banner1';
// import PetList from './PetList';
// import Banner2 from './Banner2';
// import ProductList from './ProductList';
// import PetKnowledgeCards from './PetKnowledgeCards';
// import PetSellersSection from './PetSellersSection';
// import Footer from './Footer';
// import PetFilter from './PetFilter'; // Import your PetFilter component

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Banner1 />
//               <PetList />
//               <Banner2 />
//               <ProductList />
//               <PetSellersSection />
//               <PetKnowledgeCards />
//             </>
//           } />
//           <Route path="/filter" element={<PetFilter />} /> {/* Add your PetFilter route */}
//           {/* Add more routes as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;









