export default function Admin() {
  // Redirect directly to the Tina CMS visual editor interface
  if (typeof window !== 'undefined') {
    window.location.href = '/admin/index.html#/~/'
  }
  
  return <div>Redirecting to Tina CMS visual editor...</div>
}
