import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
// import Achievements from "./components/Achievements";
import About from "@/components/shared/About";
import Projects from "@/components/shared/Projects";
import Email from "@/components/shared/Email";
import Footer from "@/components/shared/Footer";

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
