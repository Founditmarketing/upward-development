import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { sortedPosts, blogCategories, formatDate } from '../data/blogPosts';
import useSeo from '../hooks/useSeo';

const ALL = 'All Posts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  useSeo({
    title: 'Blog | Upward Development — Lake Charles, LA',
    description:
      'Practical advice on dirt work, land clearing, steel buildings, storm-ready construction and Louisiana land from the Upward Development team in Lake Charles, LA.',
    path: '/blog',
    image: '/services-bg.jpg',
  });

  const [featured, ...rest] = sortedPosts;
  const visible =
    activeCategory === ALL ? rest : sortedPosts.filter(p => p.category === activeCategory);

  return (
    <div className="pt-[70px]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '45vh' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/services-bg.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg mb-4">BLOG</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Straight talk on dirt, steel and building in Southwest Louisiana.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ─────────────────────────────────────────── */}
      {activeCategory === ALL && featured && (
        <section className="bg-white">
          <div className="flex flex-col md:flex-row" style={{ minHeight: '420px' }}>
            <Link to={`/blog/${featured.slug}`} className="w-full md:w-1/2 overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: '420px' }}
              />
            </Link>
            <div className="w-full md:w-1/2 flex items-center px-8 sm:px-10 lg:px-16 py-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1">
                    Latest
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  <Link to={`/blog/${featured.slug}`} className="hover:text-primary transition-colors">
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  </span>
                  <span>{featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FILTER + GRID ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="w-10 h-0.5 bg-gray-800 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {activeCategory === ALL ? 'More Articles' : activeCategory}
          </h2>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[ALL, ...blogCategories].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-black'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="text-gray-500">No posts in this category yet — check back soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map(post => (
                <article key={post.slug} className="bg-white border border-gray-100 flex flex-col group">
                  <Link to={`/blog/${post.slug}`} className="overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────── */}
      <section className="py-12 bg-white text-center border-t border-gray-200">
        <p className="text-lg text-gray-700 mb-4 font-medium">
          Have Questions? &nbsp; Call or text &nbsp;
          <a href="tel:3184527653" className="text-primary font-bold hover:underline">318-452-7653</a>
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors">
          Click to Inquire Now <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
