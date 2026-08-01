import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Calendar, User } from 'lucide-react';
import { getPostBySlug, sortedPosts, formatDate, type BlogBlock } from '../data/blogPosts';
import useSeo from '../hooks/useSeo';

function renderBlock(block: BlogBlock, key: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={key} className="text-2xl font-bold text-gray-900 mt-12 mb-4">{block.text}</h2>;
    case 'p':
      return <p key={key} className="text-gray-700 leading-relaxed mb-5">{block.text}</p>;
    case 'list':
      return (
        <ul key={key} className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
              <span className="text-primary font-bold shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote key={key} className="border-l-4 border-primary bg-gray-50 px-6 py-5 my-8">
          <p className="text-lg text-gray-800 font-medium leading-relaxed italic">{block.text}</p>
        </blockquote>
      );
    case 'image':
      return (
        <figure key={key} className="my-8">
          <img src={block.src} alt={block.alt} className="w-full object-cover" />
        </figure>
      );
  }
}

function NotFound() {
  useSeo({
    title: 'Post Not Found | Upward Development',
    description: 'The article you are looking for is not available.',
    path: '/blog',
  });

  return (
    <div className="pt-[70px]">
      <section className="max-w-3xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          That article does not exist or may have moved. Here is everything we have published.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </section>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return <Article post={post} />;
}

function Article({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  useSeo({
    title: `${post.title} | Upward Development`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });

  const related = sortedPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-[70px]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '55vh' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 py-14">
          <span className="inline-block bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1 mb-5">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-xl text-gray-800 leading-relaxed font-medium border-l-4 border-primary pl-5 mb-10">
            {post.excerpt}
          </p>

          {post.body.map(renderBlock)}

          <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
            <a href="tel:3184527653" className="text-sm font-bold text-primary hover:underline">
              Questions? Call or text 318-452-7653
            </a>
          </div>
        </div>
      </article>

      {/* ── RELATED ───────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="w-10 h-0.5 bg-gray-800 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map(r => (
                <article key={r.slug} className="bg-white border border-gray-100 flex flex-col group">
                  <Link to={`/blog/${r.slug}`} className="overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{r.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                      <Link to={`/blog/${r.slug}`} className="hover:text-primary transition-colors">{r.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{r.excerpt}</p>
                    <time dateTime={r.date} className="text-xs text-gray-500 pt-4 mt-4 border-t border-gray-100">
                      {formatDate(r.date)}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
