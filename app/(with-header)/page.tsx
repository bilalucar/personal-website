import { About } from '@containers/home/about';
import { Contact } from '@containers/home/contact';
import { Skill } from '@containers/home/skill';
import { Experience } from '@containers/home/experience';
import { Intro } from '@containers/home/intro';

export default function Home() {
  return (
    <main className='flex flex-col m-5 md:m-10 lg:m-20 gap-20 items-center'>
      <Intro />
      <Experience />
      <Skill />
      <About />
      <Contact />
    </main>
  );
}
