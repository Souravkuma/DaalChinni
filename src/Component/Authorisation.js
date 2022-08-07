import React from 'react'
import "./Authorisation.css"

function Authorisation() {
  return (
    <div className='Auth'>
    <div className='head'>
    <i class="fa-solid fa-arrow-left-long"></i>
    <strong>Login</strong>      
    </div>
    <div className="input">
    <input type="number" placeholder='Enter Your Phone Number' />
    </div>
    <div className="submit">
    <button>SUBMIT</button>
    </div>
    <a href="#"><ul>Will do it later</ul></a>
    </div>
  )
}

export default Authorisation
