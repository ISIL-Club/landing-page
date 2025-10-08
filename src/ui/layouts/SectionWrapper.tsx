export const SectionWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <section id={id} className="section-wrapper">
      {children}
    </section>
  );
};
