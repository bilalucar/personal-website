import { PropsWithChildren } from 'react';
import { Header } from '@components/layout/header';
import { Footer } from '@components/layout/footer';

export default function WithHeaderLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-col flex-1 bg-muted'>{children}</div>
      <Footer />
    </div>
  );
}
