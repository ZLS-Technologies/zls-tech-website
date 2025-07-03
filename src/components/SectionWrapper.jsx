export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="max-w-4xl mx-auto py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="prose dark:prose-invert">{children}</div>
    </section>
  );
}
