import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import DeveloperIntro from "../sections/DeveloperIntro";
import MissionVision from "../sections/MissionVision";
import Team from "../sections/Team";
import Milestones from "../sections/Milestones";
import Location from "../sections/Location";
import PastProjects from "../sections/PastProjects";
import Partners from "../sections/Partners";

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        label="About Binary"
        title="One developer. One project at a time."
        desc="The team, philosophy, and track record behind Binary Project 4 on Sarjapur Road."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
      />
      <DeveloperIntro />
      <MissionVision />
      <Team />
      <Milestones />
      <Location />
      <PastProjects />
      <Partners />
    </PageLayout>
  );
}
