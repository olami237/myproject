import React from 'react'
import "./Useroutput.css"
const Useroutput = (probs) => {
  return (
    <div className='letters'>
      <p className='text'>{probs.partOne}</p>
      <p className='text'>{probs.partTwo}</p>
      <p className='text'>{probs.part3}</p>
    </div>
  )
}

export default Useroutput
