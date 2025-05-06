"use server";

import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import * as runtime from "react/jsx-runtime";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content", "blog");
  const files = fs.readdirSync(blogDir);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

function compileMDX(code: string) {
  return new Function("require", "exports", "module", "React", "runtime", `${code}`)(
    require,
    {},
    {},
    runtime,
    runtime
  );
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { code, data } = await getPostBySlug(params.slug);
    const MDXContent = compileMDX(code);

    return (
      <div className="py-12 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-sm text-neutral-400">{data.date}</p>
        <article className="prose prose-invert max-w-none text-neutral-300">
          <MDXContent />
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}
