import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { AreaSection } from '../data/serviceAreas';

/**
 * Renders one content block from a service-area page. The layout primitives are
 * shared with the rest of the site; the copy, headings, ordering and mix of
 * blocks come from each community's own data file.
 */
export function renderSection(section: AreaSection, key: number) {
  switch (section.type) {
    case 'prose':
      return (
        <section key={key} className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {section.heading && (
              <>
                <div className="w-10 h-0.5 bg-gray-800 mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
              </>
            )}
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 last:mb-0">{p}</p>
            ))}
          </div>
        </section>
      );

    case 'services':
      return (
        <section key={key} className="py-14 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            {section.intro && (
              <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">{section.intro}</p>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <article key={i} className="bg-white border border-gray-200 p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{item.body}</p>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-primary transition-colors self-start"
                  >
                    {item.linkLabel} <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      );

    case 'checklist':
      return (
        <section key={key} className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            {section.intro && <p className="text-gray-700 leading-relaxed mb-8">{section.intro}</p>}
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case 'process':
      return (
        <section key={key} className="py-14 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            {section.intro && <p className="text-gray-700 leading-relaxed mb-8">{section.intro}</p>}
            <ol className="space-y-6">
              {section.steps.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span
                    className="shrink-0 w-9 h-9 bg-primary text-black font-bold flex items-center justify-center text-sm"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case 'scenario':
      return (
        <section key={key} className="py-14 bg-gray-50 border-y border-gray-200">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              {section.label}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5">{p}</p>
            ))}
            {section.bullets && (
              <ul className="space-y-3 mt-6">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                    <span className="text-primary font-bold shrink-0" aria-hidden="true">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      );

    case 'testimonial':
      return (
        <section key={key} className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
            <blockquote className="border-l-4 border-primary bg-gray-50 px-6 py-6">
              <p className="text-lg text-gray-800 leading-relaxed italic mb-4">"{section.quote}"</p>
              <footer className="text-sm">
                <span className="font-bold text-gray-900">— {section.author}</span>
                {section.context && (
                  <span className="block text-gray-500 mt-1">{section.context}</span>
                )}
              </footer>
            </blockquote>
          </div>
        </section>
      );

    case 'faq':
      return (
        <section key={key} className="py-14 bg-gray-50 border-y border-gray-200">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{section.heading}</h2>
            <dl className="space-y-6">
              {section.items.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6">
                  <dt className="font-bold text-gray-900 mb-2">{item.q}</dt>
                  <dd className="text-gray-600 leading-relaxed text-sm">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      );

    case 'nearby':
      return (
        <section key={key} className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">{section.intro}</p>
            <ul className="space-y-2">
              {section.links.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
                  >
                    {l.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case 'image':
      return (
        <figure key={key} className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <img src={section.src} alt={section.alt} className="w-full object-cover" loading="lazy" />
          {section.caption && (
            <figcaption className="text-xs text-gray-500 mt-2">{section.caption}</figcaption>
          )}
        </figure>
      );
  }
}
