import { useEffect } from 'react'
import Head from 'next/head'

export default function Admin() {
  useEffect(() => {
    // Redirect to the Tina CMS admin interface
    window.location.href = '/admin/index.html'
  }, [])

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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Loading Tina CMS Admin...</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Redirecting to the admin interface...
        </p>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #0066cc',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  )
}
