import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      {/* Projects will be developed in a later stage */}
      <section
        id="projects"
        className="scroll-mt-16 min-h-screen border-t border-[#303030] px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <span className="text-xs tracking-[0.2em] text-neutral-500">
            01 / SELECTED WORK
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
            Projects
          </h2>
        </div>
      </section>

      <About />

      <Contact />
    </main>
  );
}