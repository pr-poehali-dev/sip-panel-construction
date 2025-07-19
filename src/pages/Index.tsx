import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CalculatorSection from '@/components/CalculatorSection';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-muted">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <ProjectsSection />
      <CalculatorSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
};

export default Index;