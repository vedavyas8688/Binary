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

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <AboutProject />
      <Stats />
      <Amenities />
      {/* <WhatWeDo /> */}
      <Highlights />
      <MasterPlan />
      <FloorPlans />
      <Process />
      <Testimonials />
      <Contact />
    </PageLayout>
  );
}
