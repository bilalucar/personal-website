import { Section } from '@components/section';
import { Tag } from '@components/tag';

export const Skill = () => {
  return (
    <Section title='Yeteneklerim'>
      <div>
        <h4 className='text-xl font-semibold mb-2'>Front-end Development</h4>
        <p>
          Güncel teknolojileri kullanarak geliştirme yapıyorum ve en basit yöntemle karmaşık problemleri çözmeye
          çalışıyorum. Güncel teknolojileri deniyorum ve diğer teknolojilerle arasındaki performans ve kullanım
          farklarıyla ilgileniyorum. Temiz kod yazmayı seviyorum. Bir projenin düzenli yürümesi için Agile
          yaklaşımlarının uygulanması taraftarıyım.
        </p>
      </div>

      <div>
        <p className='font-bold mb-2'>Yeteneklerim</p>
        <div className='flex flex-wrap gap-2'>
          {[
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS',
            'Angular',
            'React',
            'NextJS',
            'GraphQL',
            'jQuery',
            'WordPress',
            'PHP',
            'JSP',
            'MySQL',
            'Git'
          ].map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <div>
        <p className='font-bold mb-2'>Kullandığım Yazılımlar</p>
        <div className='flex flex-wrap gap-2'>
          {[
            'MacOS',
            'Webstorm',
            'Google Chrome',
            'Postman',
            'Safari',
            'Apple Mail',
            'Notion',
            'Teams',
            'Slack',
            'Telegram',
            'WhatsApp',
            'Youtube Music',
            'Figma',
            'GitHub',
            'GitLab',
            'Zsh'
          ].map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </Section>
  );
};
