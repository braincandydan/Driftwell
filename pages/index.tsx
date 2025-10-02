import Head from 'next/head'
import Link from 'next/link'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../tina/__generated__/client'

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
          {/* Hero Section */}
          <section className="hero" style={{
            backgroundImage: `linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(42, 42, 42, 0.2) 100%), url(/wp-content/uploads/2025/06/DriftwellPlumbing-scaled.jpg)`
          }}>
            <div className="container">
              <div className="hero-content">
                <h1>{data.page?.heroTitle || 'Driftwell Plumbing'}</h1>
                <p>{data.page?.heroSubtitle || 'Smart solutions for your commercial & residential projects.'}</p>
                
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">Get Smart Quote</a>
                  <a href="tel:(250) 986 7329" className="btn btn-secondary">Emergency Call</a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services" id="services">
            <div className="container">
              <h2 className="section-title">{data.page?.servicesTitle || 'Our Advanced Services'}</h2>
              
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🔧</div>
                  <h3>{data.page?.service1Title || 'Emergency Plumbing Services'}</h3>
                  <p>{data.page?.service1Description || 'Our team is available 24/7 to handle urgent plumbing issues, providing fast and dependable solutions to prevent property damage and restore your peace of mind.'}</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">🔧</div>
                  <h3>{data.page?.service2Title || 'Leak Repair'}</h3>
                  <p>{data.page?.service2Description || 'We use advanced technology to repair leaks in pipes, fixtures, and walls. Our services help prevent costly water damage and keep your plumbing system running efficiently.'}</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">🔧</div>
                  <h3>{data.page?.service3Title || 'Water Heater Services'}</h3>
                  <p>{data.page?.service3Description || 'Our experts install, repair, and maintain all types of water heaters, including tankless and traditional models. We ensure you have reliable hot water and address issues like inconsistent temperatures or system failures.'}</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="about" id="about">
            <div className="container">
              <div className="about-content">
                <div className="about-text">
                  <h2>{data.page?.aboutTitle || 'Serving Kelowna & the Okanagan'}</h2>
                  <div className="prose-content">
                    {data.page?.aboutContent ? (
                      <TinaMarkdown content={data.page.aboutContent} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: '<p>Driftwell Contracting is your licensed and insured plumbing company serving Kelowna and the Okanagan region. We deliver high-quality plumbing solutions for residential and commercial clients, offering fair pricing and honest service on every job.</p><p>Our experienced team handles everything from emergency repairs and leak detection to full bathroom and kitchen renovations, water heater services, and more. Contact us today for professional plumbing services you can trust in Kelowna and the Okanagan.</p>' }} />
                    )}
                  </div>
                </div>
                <div className="about-image">
                  <img src="/wp-content/uploads/2025/06/AboutDriftwell.jpg" alt="Serving Kelowna & the Okanagan" />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact" id="contact">
            <div className="container">
              <h2 className="section-title">{data.page?.contactTitle || 'Connect With Us'}</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Get In Touch</h3>
                  <div className="contact-item">
                    <i>📞</i>
                    <span>(250) 986 7329</span>
                  </div>
                  <div className="contact-item">
                    <i>✉️</i>
                    <span>info@driftwellcontracting.com</span>
                  </div>
                  <div className="contact-item">
                    <i>📍</i>
                    <span>Kelowna, BC</span>
                  </div>
                  <div className="contact-item">
                    <i>🕒</i>
                    <span>Mon-Fri: 7AM-6PM | Emergency: 24/7</span>
                  </div>
                </div>
                <div className="contact-form">
                  <h3>Request Smart Quote</h3>
                  <form method="post" action="https://formsubmit.co/info@driftwellcontracting.com">
                    <input type="hidden" name="_subject" value="New Quote Request - DRIFTWELL CONTRACTING" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="box" />
                    
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" name="name" required placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" required placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select id="service" name="service">
                        <option value="">Select a service</option>
                        <option value="Emergency Plumbing Services">Emergency Plumbing Services</option>
                        <option value="Leak Repair">Leak Repair</option>
                        <option value="Water Heater Services">Water Heater Services</option>
                        <option value="Toilet, Faucet & Fixture Services">Toilet, Faucet & Fixture Services</option>
                        <option value="Full Bathroom & Kitchen Renovations">Full Bathroom & Kitchen Renovations</option>
                        <option value="Commercial & Residential Plumbing">Commercial & Residential Plumbing</option>
                        <option value="emergency">Custom Service</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" placeholder="Describe your plumbing needs..."></textarea>
                    </div>
                    
                    <button type="submit" className="form-submit">Send Request</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
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
