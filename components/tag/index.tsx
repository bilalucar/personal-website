export const Tag = ({ tag }: { tag: string }) => {
  return (
    <span key={tag} className='bg-foreground text-background px-3 py-1 rounded-full text-sm'>
      #{tag}
    </span>
  );
};
