import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import PoemSection from "./components/PoemSection";
// import Storytelling from "./components/Storytelling";
import Summary from "./components/Summary";
import WhyIChoseIt from "./components/WhyIChoseIt";
import ModernConnection from "./components/ModernConnection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen overflow-hidden">
      {/* Literary background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        {/* Decorative book icons scattered throughout */}
        <div className="absolute top-20 left-10 text-9xl text-amber-500 rotate-12">
          📖
        </div>
        <div className="absolute top-40 right-20 text-7xl text-amber-600 -rotate-6">
          ✒️
        </div>
        <div className="absolute bottom-40 left-1/4 text-8xl text-amber-400 rotate-45">
          📜
        </div>
        <div className="absolute top-1/3 right-1/3 text-6xl text-amber-700 -rotate-12">
          🪶
        </div>
        <div className="absolute bottom-20 right-10 text-9xl text-amber-500 rotate-6">
          📚
        </div>
        <div className="absolute top-2/3 left-20 text-7xl text-amber-600 -rotate-45">
          🖋️
        </div>
        <div className="absolute top-1/2 right-1/4 text-8xl text-amber-400 rotate-12">
          📖
        </div>
      </div>

      {/* Subtle paper texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Navigation />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="poem">
          <PoemSection />
        </section>

        {/* <section id="story">
          <Storytelling />
        </section> */}

        <section id="summary">
          <Summary />
        </section>

        <section id="reflection">
          <WhyIChoseIt />
        </section>

        <section id="modern">
          <ModernConnection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
