import Plasma from '@/components/Plasma'
import React from 'react'

function AboutPage() {
  return (
      <div className="pt-20 bg-[#060010]">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Plasma 
        color="#7a6ca7"
        speed={0.6}
        direction="forward"
        scale={1}
        opacity={0.8}
        mouseInteractive={true}
      />
    </div> 
        </div>
  )
}

export default AboutPage