import { useMessages } from "next-intl";

/** Renders the Privacy or Terms copy from the message files. */
export default function LegalPage({
  namespace,
}: {
  namespace: "Privacy" | "Terms";
}) {
  const { title, updated, intro, sections } = useMessages()[namespace];

  return (
    <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:pt-40">
      <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
      <p className="text-base-content/60 mt-3">{updated}</p>
      <p className="text-base-content/85 mt-8 text-lg leading-relaxed">
        {intro}
      </p>

      {sections.map(({ heading, body, items }) => (
        <section key={heading} className="mt-12">
          <h2 className="text-2xl font-semibold">{heading}</h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">{body}</p>
          {items.length > 0 && (
            <ul className="text-base-content/80 mt-4 list-disc space-y-2 pl-6 leading-relaxed">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
