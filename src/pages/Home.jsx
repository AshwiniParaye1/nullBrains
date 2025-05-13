//src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
import ProductivitySection from "../sections/ProductivitySection";
import AutomatedTasksSection from "../sections/AutomatedTasksSection";
import FeaturesIntro from "../sections/FeaturesIntro";
import FeaturesGrid from "../sections/FeaturesGrid";
import Team from "../sections/Team";
import BlogGrid from "../sections/BlogGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <section id="home">
          <Hero />
        </section>
        <section>
          <TrustedBy />
        </section>
        <section>
          <ProductivitySection />
        </section>
        <section>
          <AutomatedTasksSection />
        </section>
        <section id="features">
          <FeaturesIntro />
          <FeaturesGrid />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="blog">
          <BlogGrid />
        </section>

        <Footer />
      </div>
    </>
  );
}
