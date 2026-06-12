import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import FloorPlans from "../sections/FloorPlans";
import Process from "../sections/Process";
import Faq from "../sections/Faq";
import Contact from "../sections/Contact";

export default function Services() {
  return (
    <PageLayout>
      <PageHeader
        label="Services"
        title="From first visit to final keys"
        desc="Floor plans, transparent pricing, and a simple four-step buying process."
      />
      <FloorPlans />
      <Process />
      <Faq />
      <Contact />
    </PageLayout>
  );
}
