import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../Context/StateProvider'
import CheckOutProduct from '../CheckoutProduct/CheckOutProduct';
import Navbar from '../Navbar/Navbar'
import './Checkout.css'

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    const [total,setTotal] = useState();

    const totalMoney = () =>{
        let totalCost = 0;
        basket.forEach((item) => {
            totalCost += item.price
        })

        setTotal(totalCost);
    }

    useEffect(()=>{
        totalMoney();
    },[])

    return (
        <>
            <Navbar />
            <div className='checkout'>
                <div className='checkout-left'>
                    <img
                        className="checkout-ad"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt=""
                    />
                    {basket.length === 0 ?
                        <h2>There Are No Items In Cart</h2> :
                        <div>
                            <h2 className='checkout-title'>There are {basket.length} Items</h2>

                            {basket.map((item) => {
                                return (
                                    <CheckOutProduct total={total} setTotal={setTotal} item={item} />
                                )
                            })}
                        </div>
                    }
                </div>
                <div className='checkout-right'>
                    {basket.length > 0 ?
                        <div className='checkout-sum'>
                            <div className='checkout-subtotal'>
                                <p style={{marginRight:5}}>Subtotal ({basket.length} items) : </p>
                                <small>₹</small>
                                <strong>{total}</strong>
                            </div>
                            <div className='checkout-checkbox'>
                                <input style={{marginRight:5}} type='checkbox' />
                                <span>this order contains a gift</span>
                            </div>
                            <button>Proceed to Checkout</button>
                        </div>
                    : <></>}
                </div>
            </div>
        </>
    )
}

export default Checkout