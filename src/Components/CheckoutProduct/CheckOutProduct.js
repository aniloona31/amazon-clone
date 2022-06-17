import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import './CheckoutProduct.css'

function CheckOutProduct({ item , total, setTotal}) {

    const [state,dispatch] = useStateValue();

    const removeFromCart = () =>{
        setTotal(total-item.price);
        dispatch({
            type : "REMOVE_FROM_BASKET",
            payload : item.id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct-image' src={item.image} />
            <div className='item-info'>
                <p className='item-title'>{item.title}</p>
                <p className='item-price'>
                    <small>₹</small>
                    <strong>{item.price}</strong>
                </p>
                <div className='item-rating'>
                    {
                        Array(item.rating)
                            .fill()
                            .map(() => {
                                return (
                                    <p>&#11088;</p>
                                )
                            })
                    }
                </div>
                <button onClick={removeFromCart}>remove from cart</button>
                
            </div>
            
        </div>
    )
}

export default CheckOutProduct