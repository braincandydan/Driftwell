import Head from 'next/head'
import Link from 'next/link'
import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'

export default function BlogIndex(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const posts = data.postConnection?.edges || []

  return (
    <>
      <Head>
        <title>Blog - Driftwell</title>
        <meta name="description" content="Read our latest blog posts" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-900">Driftwell</span>
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Blog
                </Link>
                <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Edit Site
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Blog</h1>
            <p className="mt-4 text-lg text-gray-600">
              Thoughts, insights, and updates from our team
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts yet.</p>
              <Link
                href="/admin"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create your first post
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {posts.map((post: any) => (
                <article key={post.node.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {post.node.coverImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        className="w-full h-48 object-cover"
                        src={post.node.coverImage}
                        alt={post.node.title}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <time dateTime={post.node.date}>
                        {new Date(post.node.date).toLocaleDateString()}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.node.author}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link href={`/blog/${post.node._sys.filename}`}>
                        <a className="hover:text-blue-600">
                          {post.node.title}
                        </a>
                      </Link>
                    </h2>
                    {post.node.excerpt && (
                      <p className="text-gray-600 mb-4">{post.node.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <Link href={`/blog/${post.node._sys.filename}`}>
                        <a className="text-blue-600 hover:text-blue-800 font-medium">
                          Read more →
                        </a>
                      </Link>
                      {post.node.tags && post.node.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.node.tags.map((tag: any, index: number) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">© 2024 Driftwell. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  let postsListData: any = {
    data: { postConnection: { edges: [] } },
    query: '',
    variables: {},
  }

  try {
    postsListData = await client.queries.postConnection()
  } catch (error) {
    // During build, if Tina CMS is not available, return empty posts
    console.log('Tina CMS not available during build, returning empty posts')
  }

  return {
    props: {
      ...postsListData,
    },
  }
}
