import React from 'react'
import "./CartDetails.css"

function CartDetails() {
  return (
    <div className='CartDetails'>
    
    <div className='Cart'>
      <strong>Cart Details</strong>
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div className="cartTable">
    <div className='tableHeading'>
    <span className='row1'> Items</span>
    <span className='row2'> Quantity</span>
    <span className='row3'>Amount</span>
    </div>
    <div className='items'>
    <span className='row1'>Hakka Noodles</span>
    <span className='row2'><button>-</button>1<button>+</button></span>
    <span className='row3'>Rs.1</span>
    </div>
    </div>
    <hr />
    <div className="totalValue">
    <span>Total</span>
    <span>Rs.1</span>
    </div>

    </div>
  )
}

export default CartDetails
