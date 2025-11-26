import { Hero, Navigation, Footer } from './components/layout';
import { AboutSection, PowerUnitSection, NewsSection, CareersSection, PartnersSection } from './components/sections';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <AboutSection />
      <PowerUnitSection />
      <NewsSection />
      <CareersSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
