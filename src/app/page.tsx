import AboutSection from "./components/about";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MissionStatement from "./components/Mission";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <MissionStatement />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}
