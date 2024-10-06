import Feature from "./(Components)/Feature/Feature";
import Hero from "./(Components)/Hero/Hero";
import Pricing from "./(Components)/Pricing/Pricing";
import Testimonials from "./(Components)/Testimonials/Testimonials";
import Workflow from "./(Components)/Workflow/Workflow";

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
