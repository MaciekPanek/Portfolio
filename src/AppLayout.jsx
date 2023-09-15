import AboutSection from "./features/About/AboutSection";
import IntroductionSection from "./features/Introduction/IntroductionSection";
import ProjectsSection from "./features/Projects/ProjectsSection";
import FooterSection from "./features/footer/FooterSection";
import HeaderSection from "./features/header/HeaderSection";
import MobileHeader from "./features/header/MobileHeader";

function AppLayout() {
  return (
    <>
      <HeaderSection />
      <MobileHeader />
      <main className="mt-36 h-max max-w-[640px] sm:mx-auto ">
        <IntroductionSection />
        <ProjectsSection />
        <AboutSection />
        <FooterSection />
      </main>
    </>
  );
}
export default AppLayout;
