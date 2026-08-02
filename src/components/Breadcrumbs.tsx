import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  /** Omit on the current page. */
  to?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <ol className="max-w-6xl mx-auto px-6 lg:px-8 py-3 flex flex-wrap items-center gap-1 text-xs">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {item.to && !last ? (
                <Link to={item.to} className="text-gray-500 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="w-3 h-3 text-gray-400" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
