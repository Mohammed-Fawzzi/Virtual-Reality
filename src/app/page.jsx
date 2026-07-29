import Feature from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import Workflow from "@/components/Workflow/Workflow";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Workflow />
      <Pricing />
      <Testimonials/>
    </div>
  );
}
