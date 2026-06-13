import PageLayout from "../components/PageLayout";
import Hero from "../sections/Hero";
import AboutProject from "../sections/AboutProject";
import Stats from "../sections/Stats";
import Amenities from "../sections/Amenities";
import Highlights from "../sections/Highlights";
import MasterPlan from "../sections/MasterPlan";
import FloorPlans from "../sections/FloorPlans";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import WhatWeDo from "../sections/WhatWeDo";
import Showcase from "../sections/Showcase";
import ServicePillars from "../sections/ServicePillars";
import Hero1 from "../sections/Hero1";

export default function Home() {
  return (
    <PageLayout>
      <Hero1/>
      <AboutProject />
      {/* <Stats /> */}
      <Amenities />
      <Showcase />
      {/* <ServicePillars /> */}
      <WhatWeDo />
      <Highlights />
      <MasterPlan />
      <FloorPlans />
      <Process />
      <Testimonials />
      <Contact />
    </PageLayout>
  );
}
