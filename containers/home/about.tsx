import { Section } from '@components/section';

export const About = () => {
  return (
    <Section title='Hakkımda'>
      <p>
        İlkokul&apos;da babamın eve bilgisayar almasıyla birlikte büyüklerin her bayram sorduğu o standart soru olan
        &#34;Büyüyünce ne olmak istiyorsun?&#34; sorusuna yanıt bulmuştum. Bilgisayar başında saatlerce vakit geçirip
        sıkılmadan ücretsiz web siteleri açıp hazır HTML kodlarını yapıştırarak kendimce web sitesi tasarlıyordum.
      </p>

      <p>
        Lisede biraz daha ilerletip WordPress, Blogger gibi platformlarla çalıştım. HTML, CSS, JavaScript ve PHP ile
        hazır tasarımlar ve kodlar üzerinden değişiklikler yaparak öğrenmeye devam ettim.
      </p>

      <p>
        Üniversiteyi Süleyman Demirel Üniversitesi, Bilgisayar Mühendisliği bölümünde okudum. Burada farklı programlama
        dilleri ve teknolojilerle çalıştım. Üniversite okurken sektörle alakalı farklı eğitimlere ve etkinliklere
        katılmaya özen gösterdim.
      </p>

      <p>
        Üniversiteye devam ederken Isparta&apos;da TEKNOVOL adında bir dijital ajansta part-time olarak çalıştım.
        TEKNOVOL&apos;de WordPress başta olmak üzere HTML, CSS, JS, SEO alanlarında çalıştım. Çalışmalarımdan
        öğrendiklerimi bu ajansın bir projesi olan{' '}
        <a
          href='https://webmaster.kitchen/author/bilal'
          className='hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          webmaster.kitchen
        </a>{' '}
        &apos;de makale olarak yazdım. Web ile ilgili konularda aylık toplantıların yapıldığı, yeni teknolojilerin
        konuşulduğu Webmaster Meetup&apos;lar düzenledik. Aktif olarak organizatör görevi üstlendim.
      </p>

      <p>
        Üniversite bittikten sonra staj yaptığım yer olan Testinium&apos;da çalışmaya başladım. Angular, React, Webpack,
        SCSS, ES6 gibi teknolojilerle çalıştım. Testinium, Loadium, Oobeya gibi SaaS ürünlerinin geliştirilmesinde etkin
        rol oynadım.
      </p>

      <p>
        Testinium&apos;da yaklaşık 2 yıl çalıştıktan sonra GittiGidiyor ile e-ticaret sektörüne geçtim.
        GittiGidiyor&apos;da Next.js, React, GraphQL, Styled Components, Jest, Storybook gibi teknolojilerle tanıştım.
        Bunun dışında Docker, Kubernetes gibi konularda temel bilgi sahibi oldum.
      </p>

      <p>
        Ardından sahibinden.com&apos;da Sr. Front-end Developer rolünde çalıştım. Ödeme takımı projeleri başta olmak
        üzere farklı takımların projelerine destek sağladım. Özellikle ödeme süreçlerinin geliştirilmesi ve
        güçlendirilmesi üzerine çalıştım. Ödeme takımında, bir dizi ödeme sayfasında Masterpass entegrasyonlarını
        başarıyla gerçekleştirdim. Ayrıca, Sanal Pos, İyzico, Asseco gibi önemli ödeme entegrasyonları konusunda derin
        bir uzmanlık kazandım.
      </p>

      <p>Şu an Letgo&apos;da Sr. Front-end Engineer rolünde çalışıyorum.</p>
    </Section>
  );
};
