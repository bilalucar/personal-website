import { EXPERIENCES } from '@constants/experience';
import { Suspense } from 'react';
import { Section } from '@components/section';
import NotFound from '@app/(with-header)/is-deneyimi/[id]/not-found';
import { Tag } from '@components/tag';

export default async function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const experience = EXPERIENCES.find((item) => item.url.endsWith(id));

  if (!experience) {
    return NotFound();
  }

  return (
    <main className='flex flex-col m-5 md:m-10 lg:m-20 gap-20 items-center'>
      <Suspense>
        {experience.sections.map((section, index) => (
          <Section title={section.companyName} img={section.img.src} key={index}>
            {section.content}
          </Section>
        ))}

        <Section title=''>
          <div className='flex flex-wrap gap-2'>
            {experience.skills.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </Section>
      </Suspense>
    </main>
  );
}
