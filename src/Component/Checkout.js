import React from 'react'
import "./CartDetails.css"
import "./Checkout.css"

export default function Checkout() {
  return (
    <div className='checkout'>
      <div className="head">
      <i class="fa-solid fa-arrow-left-long"></i>
      <strong>Checkout</strong>
      </div>
      <div className="pickUp">
      <span>PICK UP</span>
      <hr />
      Test <br />
      Daalchini Office Noida U.P. <br />
      <span>Order Expires within 30 mins</span>
      </div>

      <div className="CartDetails">
      <span>Cart Details</span>
      <hr />
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
      <div className="payment">
      <button>Select Payment</button></div>
    </div>
  )
}
