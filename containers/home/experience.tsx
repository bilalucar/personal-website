import { Section } from '@components/section';
import Link from 'next/link';
import { EXPERIENCES } from '@constants/experience';

export const Experience = () => {
  return (
    <Section title='İş Deneyimi'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        {EXPERIENCES.map((item, index) => (
          <Link key={index} href={item.url}>
            <img src={item.img.src} alt={item.img.alt} className='rounded-lg object-contain w-full' />
          </Link>
        ))}
      </div>
    </Section>
  );
};
