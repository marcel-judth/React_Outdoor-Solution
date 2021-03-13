import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import LandingSection from '../components/LandingSection';
import OverviewSection from '../components/OverviewSection';
import ServicesSection from '../components/ServicesSection';
import ScrollTop from '../components/ScrollTop';

const Home = () => {
  return (
    <div className="home-page">
      <LandingSection />
      <ServicesSection id="services" />
      <OverviewSection />
      <ContactSection id="contact" />
      <ScrollTop />
    </div>
  );
};

export default Home;
