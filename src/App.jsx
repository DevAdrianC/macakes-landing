import Hero from "./components/Hero/Hero";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Footer from "./components/Footer/Footer";
import FrostingDivider from "./components/shared/FrostingDivider";

function App() {
  return (
    <div className="min-h-screen bg-rose-pale">
      <main>
        <Hero />

        <FrostingDivider color="var(--color-cream)" />
        <ReviewSection />

        <FrostingDivider color="var(--color-rose-pale)" />
        <ContactSection />

        <FrostingDivider color="var(--color-cream)" flip />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
