import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h1>{post.title}</h1>
          </Link>
          <Mdx code={post.description} />
          {post.description && <Mdx code={post.description} />}
        </article>
      ))}
    </div>
  )
}
