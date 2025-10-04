import Head from 'next/head'
import Link from 'next/link'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../tina/__generated__/client'
import VisualEditor, { HeroBlock, ServicesBlock, TextBlock, ContactFormBlock, CtaBlock } from '../components/VisualEditor'

export default function Home(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <>
      <Head>
        <title>{data.page?.seo?.metaTitle || data.page?.title || 'Driftwell Plumbing'}</title>
        <meta name="description" content={data.page?.seo?.metaDescription || data.page?.description || 'Trusted Plumbing in Kelowna & the Okanagan'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="driftwell-site">
        {/* Header */}
        <header className="site-header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Link href="/" className="logo-link" aria-label="Driftwell Plumbing - Home">
                  <div className="logo-svg logo-white">
                    <svg width="902" height="379" viewBox="0 0 902 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M556.196 255.902C564.5 278.999 541.763 285.497 541.763 285.497L498.886 286.359L513.343 302.442H699.72C724.082 294.22 712.821 269.948 712.821 269.948L575.466 100.401H428.582L556.196 255.902Z" fill="white"></path>
                      <path d="M742.233 255.902C750.529 278.999 727.801 285.497 727.801 285.497L684.923 286.359L699.38 302.442H885.757C910.12 294.22 898.858 269.948 898.858 269.948L761.503 100.401H614.619L742.233 255.902Z" fill="white"></path>
                      <path d="M159.224 146.945C150.92 123.847 173.656 117.35 173.656 117.35L216.534 116.487L202.077 100.404H15.7001C-8.66272 108.627 2.59873 132.899 2.59873 132.899L139.954 302.445H286.838L159.224 146.945Z" fill="white"></path>
                      <path d="M113.796 -0.000553491L261.936 0.0733729L577.512 378.102L429.429 378.102L113.796 -0.000553491Z" fill="#5AC0A6"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              
              <nav className="main-nav">
                <Link href="/admin" className="cta-button">
                  Edit Site
                </Link>
              </nav>
              
              <a href="tel:2509867329" className="cta-button">
                Call Now: (250) 986 7329
              </a>
            </div>
          </div>
        </header>

        <main className="main-content">
          <VisualEditor 
            query={props.query}
            variables={props.variables}
            data={props.data}
          >
            {(data) => (
              <>
                {data.page?.blocks?.map((block: any, index: number) => {
                  if (block.hero) {
                    return <HeroBlock key={index} block={block.hero} />
                  }
                  if (block.services) {
                    return <ServicesBlock key={index} block={block.services} />
                  }
                  if (block.textBlock) {
                    return <TextBlock key={index} block={block.textBlock} />
                  }
                  if (block.contactForm) {
                    return <ContactFormBlock key={index} block={block.contactForm} />
                  }
                  if (block.cta) {
                    return <CtaBlock key={index} block={block.cta} />
                  }
                  return null
                })}
              </>
            )}
          </VisualEditor>
        </main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section footer-logo">
                <div className="footer-brand">
                  <Link href="/" className="logo-link footer-logo-link" aria-label="Driftwell Plumbing - Home">
                    <div className="logo-svg logo-white">
                      <svg width="902" height="379" viewBox="0 0 902 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M556.196 255.902C564.5 278.999 541.763 285.497 541.763 285.497L498.886 286.359L513.343 302.442H699.72C724.082 294.22 712.821 269.948 712.821 269.948L575.466 100.401H428.582L556.196 255.902Z" fill="white"></path>
                        <path d="M742.233 255.902C750.529 278.999 727.801 285.497 727.801 285.497L684.923 286.359L699.38 302.442H885.757C910.12 294.22 898.858 269.948 898.858 269.948L761.503 100.401H614.619L742.233 255.902Z" fill="white"></path>
                        <path d="M159.224 146.945C150.92 123.847 173.656 117.35 173.656 117.35L216.534 116.487L202.077 100.404H15.7001C-8.66272 108.627 2.59873 132.899 2.59873 132.899L139.954 302.445H286.838L159.224 146.945Z" fill="white"></path>
                        <path d="M113.796 -0.000553491L261.936 0.0733729L577.512 378.102L429.429 378.102L113.796 -0.000553491Z" fill="#5AC0A6"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <p className="footer-tagline">Professional plumbing, installation & repair services you can trust.</p>
              </div>
              
              <div className="footer-section footer-hours">
                <h3 className="footer-title">Regular Service Hours</h3>
                <div className="hours-info">
                  <div className="regular-hours">
                    <p className="days">Monday - Friday</p>
                    <p className="times">07:30 AM - 04:00 PM</p>
                  </div>
                  <div className="emergency-info">
                    <p>Available for after hours and emergencies by request.</p>
                  </div>
                </div>
              </div>
              
              <div className="footer-section footer-contact">
                <h3 className="footer-title">Get In Touch</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div className="contact-details">
                      <a href="tel:2509867329" className="contact-link">
                        (250) 986 7329
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div className="contact-details">
                      <a href="mailto:info@driftwellcontracting.com" className="contact-link">
                        info@driftwellcontracting.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-blurb">
                  <p>If you have any questions, feel free to call us.</p>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>&copy; 2025 Driftwell Contracting. All rights reserved.</p>
                <p className="footer-credentials">Licensed & Insured Plumbing Services</p>
              </div>
              <div className="footer-emergency">
                <p className="emergency-text">
                  <span className="emergency-label">24/7 Emergency Service:</span>
                  <a href="tel:2509867329" className="emergency-phone">
                    (250) 986 7329
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}



export const getStaticProps = async () => {
  let data = {}
  let query = {}
  let variables = {}

  try {
    const res = await client.queries.page({ relativePath: 'homepage.md' })
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  }
}
