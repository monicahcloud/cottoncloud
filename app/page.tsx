import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/hero/Hero";
import HeroContent from "@/components/hero/HeroContent";
import Navbar from "@/components/navbar/Navbar";
import TransitionSlide from "@/components/TransitionSlide";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative">
        <section className="relative">
          <div className="sticky top-0 h-screen">
            <HeroBackground />
          </div>

          <div className="relative z-10 -mt-[100vh]">
            <HeroContent />
          </div>
        </section>

        <TransitionSlide
          eyebrow="The Cotton Cloud Experience"
          title="Effortless Ownership. Elevated Hospitality."
          highlight="Elevated Hospitality."
          description="We manage every detail with care — from guest communication and reservations to cleaning, maintenance, owner support, and revenue strategy."
          tone="cloud"
          className="py-12"
        />

        <section id="about" className="relative z-30 scroll-mt-0">
          <About />
        </section>
      </main>
      <Footer />
    </>
  );
}
