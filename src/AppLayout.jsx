import AboutSection from "./features/about/AboutSection";
import IntroductionSection from "./features/Introduction/IntroductionSection";
import ProjectsSection from "./features/Projects/ProjectsSection";
import FooterSection from "./features/footer/FooterSection";
import HeaderSection from "./features/header/HeaderSection";
import MobileHeader from "./features/header/MobileHeader";

function AppLayout() {
  return (
    <>
      <MobileHeader />
      <main className="mt-36 h-max max-w-[640px] sm:mx-auto md:max-w-[770px] lg:max-w-[1024px] xl:max-w-[1280px] ">
        <HeaderSection />
        <IntroductionSection />
        <ProjectsSection />
        <AboutSection />
        <FooterSection />
      </main>
    </>
  );
}
export default AppLayout;
