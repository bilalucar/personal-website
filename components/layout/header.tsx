import Link from 'next/link';

const menuItems = [
  { text: 'Anasayfa', path: '/' },
  { text: 'İş Deneyimi', path: '/is-deneyimi' },
  { text: 'Eğitim', path: '/egitim' },
  // { text: 'Blog', path: '/blog' },
  { text: 'CV', path: '/files/bilal-ucar-cv.pdf' },
  { text: 'İletişim', path: '/#contact' }
];

export const Header = () => {
  return (
    <header className='bg-[#242526]'>
      <nav className='flex justify-center items-center h-[60px] w-full'>
        <ul className='flex items-center justify-center text-background'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className='p-4 text-white'
                target={item.path.endsWith('.pdf') ? '_blank' : '_self'}
                rel={item.path.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
