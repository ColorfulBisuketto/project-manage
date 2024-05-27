import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { Mdx } from "@/components/mdx-components"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h1>{post.title}</h1>
          </Link>
          {post.description && <p> {post.description} </p>}
        </article>
      ))}
    </div>
  )
}
