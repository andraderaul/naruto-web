import React from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';

import { teamsSlides, akatsukiSlides } from '../constants';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Slider title="Team 7" items={teamsSlides} />
      <Slider title="Akatsuki" items={akatsukiSlides} />
    </Layout>
  );
}
