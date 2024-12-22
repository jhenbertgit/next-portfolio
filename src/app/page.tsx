import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Achievements from "./components/Achievements";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        {/* <Achievements /> */}
        <About />
        <Projects />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
