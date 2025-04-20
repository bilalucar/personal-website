import { Suspense } from 'react';
import { Section } from '@components/section';
import NotFound from '@app/(with-header)/is-deneyimi/[id]/not-found';
import { EDUCATION } from '@constants/education';

export default async function EducationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const experience = EDUCATION.find((item) => item.url.endsWith(id));

  if (!experience) {
    return NotFound();
  }

  return (
    <main className='flex flex-col m-5 md:m-10 lg:m-20 gap-20 items-center'>
      <Suspense>
        {experience.sections.map((section, index) => (
          <Section title={section.name} img={section?.img?.src} key={index}>
            {section.content}
          </Section>
        ))}
      </Suspense>
    </main>
  );
}
