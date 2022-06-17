import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import './Product.css'

function Product({ id, title, image, price, rating }) {

    const [state,dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            payload : {
                id,
                title,
                price,
                image,
                rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {
                        Array(rating)
                            .fill()
                            .map(() => {
                                return (
                                    <p>&#11088;</p>
                                )
                            })
                    }
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product