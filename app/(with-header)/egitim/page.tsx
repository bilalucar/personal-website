import { Section } from '@components/section';
import Link from 'next/link';
import { EDUCATION } from '@constants/education';

export default function Education() {
  return (
    <main className='flex flex-col m-5 md:m-10 lg:m-20 gap-20 items-center'>
      {EDUCATION.map((item, index) => (
        <Section title={item.name} img={item.img.src} key={index}>
          <div className='flex flex-col gap-4'>
            <p>
              <b>
                {item.name} {item.date}
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
