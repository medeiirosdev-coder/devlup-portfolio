import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
