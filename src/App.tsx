import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/AboutSection';
import { PowerUnitSection } from './components/PowerUnitSection';
import { NewsSection } from './components/NewsSection';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <AboutSection />
      <PowerUnitSection />
      <NewsSection />
      <CareersSection />
      <Footer />
    </div>
  );
}
