export const Intro = () => {
  return (
    <section className='max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row md:items-start gap-6'>
        <div className='w-full md:w-1/3 flex justify-center md:justify-start'>
          <h1
            className='w-[200px] h-[200px] bg-no-repeat bg-top bg-[length:200px_200px] rounded-full indent-[-9999px]'
            style={{ backgroundImage: `url(/images/logo.jpg)` }}
          >
            Front-end, JavaScript Developer - Bilal Uçar
          </h1>
        </div>

        <div className='w-full md:w-2/3 space-y-4'>
          <p>Merhaba,</p>
          <p>
            Ben Bilal Uçar, bir front-end geliştiriciyim. HTML, CSS ve JavaScript gibi teknolojileri kullanarak,
            kullanıcıların etkileşimde bulunmaktan keyif aldığı ve işletmelerin hedeflerine ulaşmasına yardımcı olan web
            uygulamaları tasarlıyorum.
          </p>
        </div>
      </div>
    </section>
  );
};
