'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedWorkSection } from '@/components/sections/featured-work-section';
import { InsightsSection } from '@/components/sections/insights-section';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturedWorkSection />
      <InsightsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
