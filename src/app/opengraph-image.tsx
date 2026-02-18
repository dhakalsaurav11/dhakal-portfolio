import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Saurav Dhakal - Systems Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f8fafc', // slate-50
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Your "Logo" */}
          <div style={{ fontSize: 60, fontWeight: 'bold', color: '#0f172a', marginBottom: 20 }}>
            Saurav Dhakal
          </div>
          <div style={{ fontSize: 30, color: '#64748b', letterSpacing: '-0.02em' }}>
            Systems Engineer & Digital Architect
          </div>
          
          {/* A visual badge */}
          <div style={{ 
            marginTop: 40, 
            padding: '10px 30px', 
            background: '#0f172a', 
            color: 'white', 
            borderRadius: 50,
            fontSize: 24 
          }}>
            Available for Q2 Projects
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}