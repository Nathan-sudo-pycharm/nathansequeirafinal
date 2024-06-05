import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import SkillsTab from "@/components/SkillsTab";
import TechStack from "@/components/TechStack";
import { Certifications } from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100  flex justify-center flex-col items-center overflow-clip  mz-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <TechStack />
        <SkillsTab />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
