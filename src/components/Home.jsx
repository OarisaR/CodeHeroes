import React from 'react';

import { Hero } from './Hero';
import { FeatureGrid } from './FeatureGrid';
import { SupportedBy } from './SupportedBy';
import { Footer } from './Footer';
import { CodeWarrior } from './CodeWarrior';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SupportedBy />
      <FeatureGrid />
      <CodeWarrior />
      <Footer />
    </div>
  );
};