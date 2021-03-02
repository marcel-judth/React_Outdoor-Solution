import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import LandingSection from '../components/LandingSection';
import OverviewSection from '../components/OverviewSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <div className="home-page">
      <LandingSection />
      <ServicesSection id="services" />
      <OverviewSection />
      <ContactSection id="contact" />
    </div>
  );
};

export default Home;
