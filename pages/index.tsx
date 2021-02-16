import Layout from '../components/Layout';
import Slider from '../components/Slider';
import PageTitle from '../components/PageTitle';

import { teamsSlides, akatsukiSlides } from '../constants';

export default function Home(): JSX.Element {
  return (
    <>
      <PageTitle title="Naruto Web" />
      <Layout>
        <Slider title="Team 7" items={teamsSlides} />
        <Slider title="Akatsuki" items={akatsukiSlides} />
      </Layout>
    </>
  );
}
