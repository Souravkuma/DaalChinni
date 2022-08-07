import React from 'react'

function Navbar() {
  return (
   
    <div className="navbar" style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
       <h1>Daal Chini</h1>
       <div className="searchBar">
       <input type="text" placeholder='Search' />
       <button>Search</button>
       </div>
       </div>
      
    
  )
}

export default Navbar
