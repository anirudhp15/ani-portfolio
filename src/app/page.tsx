import Hero from "@/components/home/hero/Hero";
import Blurb from "@/components/home/hero/Blurb";
import LatestProjects from "@/components/home/projects/LatestProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Blurb />
      <LatestProjects />
    </main>
  );
}
