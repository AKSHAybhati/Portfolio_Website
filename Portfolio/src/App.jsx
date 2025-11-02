import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-200 max-w-full overflow-x-hidden">
      <Navbar />
      <main className="px-6 sm:px-12 md:px-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
