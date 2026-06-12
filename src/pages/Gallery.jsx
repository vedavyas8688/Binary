import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import Amenities from "../sections/Amenities";
import MasterPlan from "../sections/MasterPlan";
import Contact from "../sections/Contact";

export default function Gallery() {
  return (
    <PageLayout>
      <PageHeader
        label="Gallery"
        title="A look around the project"
        desc="Amenities, open spaces, and the master plan of Binary Project 4."
      />
      <Amenities />
      <MasterPlan />
      <Contact />
    </PageLayout>
  );
}
