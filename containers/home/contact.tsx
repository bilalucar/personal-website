import { Section } from '@components/section';

export const Contact = () => {
  return (
    <Section title='İletişim'>
      <p>
        Sizlerle iletişim halinde olmayı, projelerinize katkı sağlamayı ve işbirliği yapmayı çok önemsiyorum. Aşağıdaki
        kanalları kullanarak projeleriniz hakkında bilgi alabilir, fikirlerinizi paylaşabilir veya işbirliği önerisinde
        bulunabilirsiniz.
      </p>
      <p>
        <a href='mailto:ucarbilal@outlook.com'>ucarbilal@outlook.com</a>
      </p>
      <p>
        <a href='tel:+905398651530' className='bold'>
          +90 539 865 1530
        </a>
      </p>
      <p>Mezitli/MERSİN</p>
    </Section>
  );
};
