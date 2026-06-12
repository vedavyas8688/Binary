import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import ServicesGrid from "../sections/ServicesGrid";
import ServiceDetails from "../sections/ServiceDetails";
import Offers from "../sections/Offers";
import Downloads from "../sections/Downloads";
import HowWeWork from "../sections/HowWeWork";
import Faq from "../sections/Faq";
import CtaBanner from "../sections/CtaBanner";
import { ctaServices } from "../data/content";

export default function Services() {
  return (
    <PageLayout>
      <PageHeader
        label="Services"
        title="From first visit to final keys"
        desc="Apartments, villas, plots, interiors, and full buyer support — everything under one roof."
      />
      <ServicesGrid />
      <ServiceDetails />
      <Offers />
      <Downloads />
      <HowWeWork />
      <Faq />
      <CtaBanner {...ctaServices} />
    </PageLayout>
  );
}
