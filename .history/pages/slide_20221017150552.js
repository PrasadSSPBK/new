import React from 'react'

const Slide = () => {
  return (
    <div>
        <input type="range" min={0} max={10000} className="position" />
          <input type="range" min={0} max={10000} />

    </div>
  )
}

export default Slide 