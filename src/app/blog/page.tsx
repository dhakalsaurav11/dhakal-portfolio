import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 && (
        <p className="text-neutral-400">No blog posts found.</p>
      )}
      {posts.map((post) => (
        <div key={post.slug} className="mb-6">
          <a href={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-400 hover:underline">
            {post.title}
          </a>
          <p className="text-sm text-neutral-400">{post.date}</p>
          <p className="text-neutral-300">{post.summary}</p>
        </div>
      ))}
    </div>
  );
}
