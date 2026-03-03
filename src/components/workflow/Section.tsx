export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
