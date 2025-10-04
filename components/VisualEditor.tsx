import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface VisualEditorProps {
  query: string
  variables: any
  data: any
  children: (data: any) => React.ReactNode
}

export default function VisualEditor({ query, variables, data, children }: VisualEditorProps) {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  })

  return <>{children(tinaData)}</>
}

// Block components for visual editing
export function HeroBlock({ block }: { block: any }) {
  return (
    <section className="hero" style={{
      backgroundImage: `linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(42, 42, 42, 0.2) 100%), url(/wp-content/uploads/2025/06/DriftwellPlumbing-scaled.jpg)`
    }}>
      <div className="container">
        <div className="hero-content">
          <h1>{block.heroTitle}</h1>
          <p>{block.subtitle}</p>
          
          <div className="hero-buttons">
            {block.ctaText && block.ctaLink && (
              <a href={block.ctaLink} className="btn btn-primary">{block.ctaText}</a>
            )}
            <a href="tel:(250) 986 7329" className="btn btn-secondary">Emergency Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesBlock({ block }: { block: any }) {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">{block.servicesTitle}</h2>
        
        <div className="services-grid">
          {block.services?.map((service: any, index: number) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.serviceTitle}</h3>
              <p>{service.description}</p>
              {service.features && service.features.length > 0 && (
                <ul className="service-sub-list">
                  {service.features.map((feature: any, featureIndex: number) => (
                    <li key={featureIndex}>{feature.feature}</li>
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

export function TextBlock({ block }: { block: any }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{block.textTitle}</h2>
            <div className="prose-content">
              <div dangerouslySetInnerHTML={{ __html: block.content }} />
            </div>
          </div>
          <div className="about-image">
            <img src="/wp-content/uploads/2025/06/AboutDriftwell.jpg" alt="Serving Kelowna & the Okanagan" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactFormBlock({ block }: { block: any }) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">{block.formTitle}</h2>
        {block.subtitle && (
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#ccc' }}>{block.subtitle}</p>
        )}
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
  )
}

export function CtaBlock({ block }: { block: any }) {
  return (
    <section className="cta-section" style={{ padding: '3rem 0', background: 'linear-gradient(135deg, #29d1d1, #1fa1a1)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{block.ctaTitle}</h2>
        {block.subtitle && (
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>{block.subtitle}</p>
        )}
        {block.buttonText && block.buttonLink && (
          <a href={block.buttonLink} style={{ 
            display: 'inline-block', 
            padding: '1rem 2rem', 
            background: 'white', 
            color: '#29d1d1', 
            textDecoration: 'none', 
            borderRadius: '8px', 
            fontWeight: '600' 
          }}>
            {block.buttonText}
          </a>
        )}
      </div>
    </section>
  )
}
