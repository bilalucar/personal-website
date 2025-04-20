import { PropsWithChildren } from 'react';

export default function WithHeaderLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col flex-1 bg-muted'>{children}</div>
    </div>
  );
}
