import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../sections/GalleryGrid";
import DroneSection from "../sections/DroneSection";
import VirtualTour from "../sections/VirtualTour";
import BeforeAfter from "../sections/BeforeAfter";
import Walkthrough from "../sections/Walkthrough";
import SpotlightTestimonial from "../sections/SpotlightTestimonial";
import Awards from "../sections/Awards";
import CtaBanner from "../sections/CtaBanner";
import { ctaGallery } from "../data/content";

export default function Gallery() {
  return (
    <PageLayout>
      <PageHeader
        label="Gallery"
        title="A look around the project"
        desc="Photos, films, and immersive tours of Binary Project 4 at Chambenahalli."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85"
      />
      <GalleryGrid />
      <DroneSection />
      <VirtualTour />
      <BeforeAfter />
      <Walkthrough />
      <SpotlightTestimonial />
      <Awards />
      <CtaBanner {...ctaGallery} />
    </PageLayout>
  );
}
