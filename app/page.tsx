import AboutMe from '@/app/components/AboutMe';
import AchievementSection from './components/Achievement';
import Banner from './components/Banner';
import BlogRedirect from './components/Blog';
import ExperienceSection from './components/Experience';
import ProjectSection from './components/Project';

export default function App() {
  return (
    <main className='flex flex-col px-8 xl:pl-24'>
      <Banner />
      <div className='flex flex-col gap-16 xl:gap-24 md:mr-16 xl:mr-32'>
        <AboutMe />
        <ExperienceSection />
        <AchievementSection />
        <ProjectSection />
        <BlogRedirect />
      </div>
    </main>
  );
}
