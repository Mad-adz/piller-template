import {
  AboutUs,
  FeaturedProperties,
  Hero,
  Projects,
  Testimonials,
  WhyChooseUs,
} from "../sections";

const Home = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <FeaturedProperties />
      <Projects />
      <Testimonials />
    </main>
  );
};

export default Home;
