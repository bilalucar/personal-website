import Link from 'next/link';
import { Birthstone } from 'next/font/google';

const nextFont = Birthstone({
  weight: '400'
});

export default function WeddingInvitation() {
  return (
    <main className='flex justify-center items-center p-5 md:p-10 min-h-screen bg-[#fdfdf6]'>
      <section className='h-full rounded-3xl max-w-2xl w-full text-center'>
        <div className='flex flex-col justify-between w-full h-full bg-white px-12 py-20 md:p-24 rounded-xl shadow-md text-center relative border border-gray-200'>
          <div
            className='absolute top-0 right-0 w-24 md:w-36 h-24 md:h-36'
            style={{
              backgroundImage: 'url("/images/davetiye/img.png")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom left',
              backgroundSize: '317px, 245px'
            }}
          />

          <div className='max-w-72'>
            <h1 className={`${nextFont.className} text-left text-6xl text-[#767676]`}>Nurhan</h1>
            <div className='text-5xl text-[#9b9c84] font-serif my-2'>&</div>
            <h1 className={`${nextFont.className} text-right text-6xl text-[#767676]`}>Bilal</h1>
          </div>

          <p className='mt-6 text-gray-600 text-sm sm:text-base'>
            Sizleri bu özel ve mutlu günümüzde yanımızda görmekten mutluluk duyarız.
          </p>

          <p className='mt-4 text-[#9b9c84] font-semibold tracking-wider'>AHMED & UÇAR AİLELERİ</p>

          <div className='mt-6 flex items-center justify-center gap-6 text-[#767676]'>
            <div className='w-20 text-sm'>CUMARTESİ</div>
            <div className='w-20 text-center border-x border-gray-400 px-4'>
              <div className='text-xs text-gray-500'>MAYIS</div>
              <div className='text-3xl font-bold'>24</div>
              <div className='text-xs text-gray-500'>2025</div>
            </div>
            <div className='w-20 text-sm'>20.00</div>
          </div>

          <p className='mt-6 text-sm text-gray-600'>
            <Link
              href='https://maps.app.goo.gl/UJWFpM8kqn1JzZds6'
              target='_blank'
              className='underline underline-offset-4'
            >
              📍 Saloon Elisa, Toroslar/MERSİN
            </Link>
            <br />
            Düğünümüz mevlütlü olacaktır.
          </p>

          <div
            className='absolute bottom-0 left-0 w-24 md:w-36 h-24 md:h-36'
            style={{
              backgroundImage: 'url("/images/davetiye/img.png")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top right',
              backgroundSize: '317px, 245px'
            }}
          />
        </div>
      </section>
    </main>
  );
}
