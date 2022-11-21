import AboutMe from "./components/AboutMe";
import Achievement from "./components/Achievement";
import Banner from "./components/Banner";
import ExperienceSection from "./components/Experience";
import Project from "./components/Project";

const HomePage = () => {
  return (
    <div className="flex flex-col px-8 xl:pl-24">
      <Banner />
      <div className="flex flex-col gap-24 xl:gap-32 md:mr-16 xl:mr-32">
        <AboutMe />
        <ExperienceSection />
        <Achievement />
        <Project />
      </div>
    </div>
  );
};

export default HomePage;
