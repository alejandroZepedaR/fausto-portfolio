export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <header className="font-bold text-2xl md:text-4xl text-center py-5 border-b border-secondary mb-4">
      {title}
    </header>
  );
};
