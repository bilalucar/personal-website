import { Section } from '@components/section';
import { EXPERIENCES } from '@constants/experience';
import Link from 'next/link';

export default function Experience() {
  return (
    <main className='flex flex-col m-5 md:m-10 lg:m-20 gap-20 items-center'>
      {EXPERIENCES.map((item, index) => (
        <Section title={item.companyName} img={item.img.src} key={index}>
          <div className='flex flex-col gap-4'>
            <p>
              <b>
                {item.position} {item.date}
              </b>
            </p>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
          {item.url && (
            <div className='flex justify-end'>
              <Link href={item.url}>Detaylar &gt;&gt;</Link>
            </div>
          )}
        </Section>
      ))}
    </main>
  );
}
