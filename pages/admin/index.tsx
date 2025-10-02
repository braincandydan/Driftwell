import { TinaEditProvider } from 'tinacms/dist/react'
import Head from 'next/head'

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Driftwell</title>
      </Head>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Driftwell Admin Panel</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          To access the full Tina CMS admin interface, you need to set up Tina Cloud.
        </p>
        
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quick Start:</h2>
          <ol style={{ lineHeight: '1.8' }}>
            <li>Visit <a href="https://tina.io/docs/r/what-is-tinacloud" target="_blank" rel="noopener" style={{ color: '#0066cc' }}>tina.io/docs/r/what-is-tinacloud</a></li>
            <li>Create a free Tina Cloud account</li>
            <li>Create a new project for your Driftwell site</li>
            <li>Get your <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>TINA_TOKEN</code> and <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>NEXT_PUBLIC_TINA_CLIENT_ID</code></li>
            <li>Add these as environment variables in Vercel</li>
            <li>Update the build command to <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>npm run build:tina</code></li>
          </ol>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>For Local Development:</h2>
          <p style={{ marginBottom: '1rem' }}>Run <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>npm run dev</code> locally to access the full admin interface at <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>/admin/index.html</code></p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Current Pages You Can Edit:</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li><a href="/" style={{ color: '#0066cc' }}>Homepage</a> - Edit via Tina visual editor (once configured)</li>
            <li><a href="/blog" style={{ color: '#0066cc' }}>Blog</a> - Manage blog posts</li>
            <li>Site Settings - Configure global site information</li>
          </ul>
          
          <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f9ff', borderRadius: '6px', border: '1px solid #0066cc' }}>
            <strong>Note:</strong> Your content is stored in the <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '3px' }}>/content</code> directory and committed to Git. You can edit these Markdown files directly if needed.
          </div>
        </div>
        
        <a 
          href="/" 
          style={{ 
            marginTop: '2rem', 
            padding: '0.75rem 1.5rem', 
            background: '#0066cc', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '6px',
            fontWeight: '500'
          }}
        >
          Back to Homepage
        </a>
      </div>
    </>
  )
}
