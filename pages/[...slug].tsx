import { useTina } from 'tinacms/dist/react'
import Head from 'next/head'
import Link from 'next/link'

// Import the client dynamically to avoid build issues
let client: any = null
if (typeof window === 'undefined') {
  try {
    client = require('../tina/__generated__/client').default
  } catch (e) {
    // Client not available during build
  }
}

export default function DynamicPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  if (!data.page) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  const page = data.page

  return (
    <>
      <Head>
        <title>{page.seo?.metaTitle || page.title}</title>
        <meta name="description" content={page.seo?.metaDescription || page.description} />
        {page.seo?.ogImage && <meta property="og:image" content={page.seo.ogImage} />}
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
                <Link href="/blog" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Blog
                </Link>
                <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Edit Site
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Blocks */}
        {page.blocks?.map((block: any, index: number) => {
          // Handle the new block structure
          if (block.hero) {
            return (
              <section key={index} className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    {block.hero.image && (
                      <div className="mb-8">
                        <img
                          src={block.hero.image}
                          alt={block.hero.title}
                          className="w-full h-64 object-cover rounded-lg mx-auto"
                        />
                      </div>
                    )}
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                      {block.hero.title}
                    </h1>
                    {block.hero.subtitle && (
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        {block.hero.subtitle}
                      </p>
                    )}
                    {block.hero.ctaText && block.hero.ctaLink && (
                      <a
                        href={block.hero.ctaLink}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {block.hero.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </section>
            )
          }
          
          if (block.textBlock) {
            return (
              <section key={index} className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="prose prose-lg max-w-none">
                    {block.textBlock.title && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">{block.textBlock.title}</h2>
                    )}
                    <div className="prose-content">
                      <div dangerouslySetInnerHTML={{ __html: block.textBlock.content || '' }} />
                    </div>
                  </div>
                </div>
              </section>
            )
          }
          
          if (block.services) {
            return (
              <section key={index} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">{block.services.title}</h2>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {block.services.services?.map((service: any, serviceIndex: number) => (
                      <div key={serviceIndex} className="bg-white p-6 rounded-lg shadow-md">
                        {service.icon && (
                          <div className="text-4xl mb-4">{service.icon}</div>
                        )}
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        {service.features && service.features.length > 0 && (
                          <ul className="text-gray-600 space-y-2">
                            {service.features.map((feature: any, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>{feature.feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )
          }
          
          if (block.imageWithText) {
            return (
              <section key={index} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`grid gap-8 lg:grid-cols-2 ${block.imageWithText.imagePosition === 'right' ? 'lg:grid-flow-col' : ''}`}>
                    <div className="prose prose-lg">
                      {block.imageWithText.title && (
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{block.imageWithText.title}</h2>
                      )}
                      <div className="prose-content">
                        <div dangerouslySetInnerHTML={{ __html: block.imageWithText.content || '' }} />
                      </div>
                    </div>
                    {block.imageWithText.image && (
                      <div className="order-first lg:order-last">
                        <img
                          src={block.imageWithText.image}
                          alt={block.imageWithText.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )
          }
          
          if (block.contactForm) {
            return (
              <section key={index} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">{block.contactForm.title}</h2>
                  {block.contactForm.subtitle && (
                    <p className="text-center text-gray-600 mb-8">{block.contactForm.subtitle}</p>
                  )}
                  <div className="max-w-2xl mx-auto">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            )
          }
          
          if (block.cta) {
            return (
              <section key={index} className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-extrabold text-white mb-4">{block.cta.title}</h2>
                  {block.cta.subtitle && (
                    <p className="text-xl text-blue-100 mb-8">{block.cta.subtitle}</p>
                  )}
                  {block.cta.buttonText && block.cta.buttonLink && (
                    <a
                      href={block.cta.buttonLink}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                    >
                      {block.cta.buttonText}
                    </a>
                  )}
                </div>
              </section>
            )
          }
          
          return null
        })}

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

export const getStaticPaths = async () => {
  try {
    if (!client) {
      return {
        paths: [],
        fallback: 'blocking',
      }
    }
    
    const pagesListData = await client.queries.pageConnection()
    
    const paths = pagesListData.data.pageConnection.edges?.map((page: any) => {
      if (!page?.node?.slug) return null
      return { params: { slug: [page.node.slug] } }
    }).filter(Boolean) || []

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    // During build, if Tina CMS is not available, return empty paths
    // Pages will be generated on-demand with fallback: 'blocking'
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug[0]
  
  try {
    if (!client) {
      return {
        notFound: true,
      }
    }
    
    const pageData = await client.queries.page({
      relativePath: `${slug}.md`,
    })

    return {
      props: {
        ...pageData,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
