import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Modules } from './components/Modules';
import { AgeGroup } from './components/AgeGroup';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Problem />
      <Solution />
      <Modules />
      <AgeGroup />
      <CTA />
      <Footer />
    </div>
  );
}