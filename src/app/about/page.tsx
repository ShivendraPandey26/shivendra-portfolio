// pages/about.tsx
"use client";
import React from 'react';
import Layout from './layout';
import Heading from './components/Heading';
import MidSection from './components/MidSection';
import { CardHoverEffectDemo } from './components/Skills';
import Eduction from './components/Eduction';
import AchievementsAndInterests from './components/AchievementsAndInterests';

function About() {
  return (
    <Layout>
      <div>
        <Heading />
        <MidSection />
        {/* Skills */}
        <CardHoverEffectDemo />
        <Eduction />
        <AchievementsAndInterests />
      </div>
    </Layout>
  );
}

export default About;
