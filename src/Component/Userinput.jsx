import React from 'react'
import "./Userinput.css"
const Userinput = () => {
  return (
    <div className='type'>
      {/* returning of input tag to be showen inside App component */}
      <input type="text"  className='test'/>
    </div>
  )
}

export default Userinput

