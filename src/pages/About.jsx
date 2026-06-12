import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import AboutProject from "../sections/AboutProject";
import Highlights from "../sections/Highlights";
import Stats from "../sections/Stats";
import Location from "../sections/Location";
import Contact from "../sections/Contact";

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        label="About"
        title="The story behind Binary"
        desc="One in-house project, built end-to-end with a focus on low-density, ultra-luxury living on Sarjapur Road."
      />
      <AboutProject />
      <Stats />
      <Highlights />
      <Location />
      <Contact />
    </PageLayout>
  );
}
