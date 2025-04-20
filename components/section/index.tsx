export const Section = ({ title, img, children }: { title: string; img?: string; children: React.ReactNode }) => {
  return (
    <section className='max-w-6xl mx-auto'>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
          {img ? (
            <img className='rounded-lg object-contain w-full' src={img} alt={title} />
          ) : (
            <h3 className='text-2xl font-bold mb-4'>{title}</h3>
          )}
        </div>
        <div className='w-full md:w-2/3 space-y-6'>{children}</div>
      </div>
    </section>
  );
};
