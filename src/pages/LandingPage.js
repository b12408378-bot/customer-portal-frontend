// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import Footer from '../components/Footer';

// export default function LandingPage() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection /> {/* Default: Home → Discover content */}
//       <Footer />
//     </>
//   );
// }
import React from 'react';
// import Navbar from '../components/Navbar';
import InnerNavbar from '../components/InnerNavbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FeatureCard from "../components/FeatureCard";
import { Wifi, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <InnerNavbar />
      <HeroSection /> {/* Default: Home → Discover content */}

      {/* Add Feature Section here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <FeatureCard
          title="High-Speed Internet"
          description="Enjoy lightning-fast internet for all your devices."
          icon={Wifi}
        />
        <FeatureCard
          title="24/7 Support"
          description="Our customer service is available anytime."
          icon={Phone}
        />
      </div>

      <Footer />
    </>
  );
}
