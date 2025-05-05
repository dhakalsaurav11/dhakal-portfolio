import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compile } from "xdm";
import rehypeHighlight from "rehype-highlight";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fileContents = fs.readFileSync(path.join(postsDirectory, file), "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
    };
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) throw new Error(`Post not found: ${slug}`);

  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

  const compiled = await compile(content, {
    outputFormat: "function-body",
    rehypePlugins: [() => rehypeHighlight],
  });

  return {
    code: String(compiled.value),
    data,
  };
}
