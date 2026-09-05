import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FBFBFA] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 border-b border-[#EAEAEA] pb-10 mb-10">
          <h1 className="font-serif text-4xl text-[#111111] tracking-[-0.03em]">
            Writing
          </h1>
          <p className="text-[#787774] text-lg">
            Notes on engineering, strategy, and building for the web.
          </p>
        </div>

        {posts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[#787774] text-sm">No posts published yet.</p>
          </div>
        )}

        <div className="divide-y divide-[#EAEAEA]">
          {posts.map((post) => (
            <article key={post.slug} className="py-6">
              <a
                href={`/blog/${post.slug}`}
                className="group block space-y-2"
              >
                <h2 className="text-lg font-semibold text-[#111111] group-hover:text-[#555555] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-xs font-mono text-[#787774]">{post.date}</p>
                {post.summary && (
                  <p className="text-sm text-[#787774] leading-relaxed">
                    {post.summary}
                  </p>
                )}
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
