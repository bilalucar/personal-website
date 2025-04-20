import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center px-6 py-4' id='contact'>
      <div className='mb-2 md:mb-0 text-center md:text-left'>
        <a
          href='https://api.whatsapp.com/send/?phone=905398651530&type=phone_number&app_absent=0'
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          WhatsApp
        </a>
        <span className='mx-2'>•</span>
        <a href='https://github.com/bilalucar' target='_blank' rel='nofollow noopener noreferrer'>
          GitHub
        </a>
        <span className='mx-2'>•</span>
        <a href='https://www.linkedin.com/in/bilalucar' target='_blank' rel='nofollow noopener noreferrer'>
          LinkedIn
        </a>
      </div>

      <div className='text-center md:text-right'>
        © {new Date().getFullYear()} <Link href='/'>Bilal Uçar</Link>. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};
