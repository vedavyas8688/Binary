import PageLayout from "../components/PageLayout";
import Hero from "../sections/Hero";
import AboutProject from "../sections/AboutProject";
import Stats from "../sections/Stats";
import Highlights from "../sections/Highlights";
import Amenities from "../sections/Amenities";
import MasterPlan from "../sections/MasterPlan";
import Location from "../sections/Location";
import FloorPlans from "../sections/FloorPlans";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import Faq from "../sections/Faq";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <AboutProject />
      <Stats />
      <Highlights />
      <Amenities />
      <MasterPlan />
      <Location />
      <FloorPlans />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </PageLayout>
  );
}
