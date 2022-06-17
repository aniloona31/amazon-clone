import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../Context/StateProvider';

function Navbar() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='navbar'>
            <div className='logo' onClick={() => navigate('/')}>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' style={{ marginLeft: 20, marginRight: 20, marginTop: 18, height: 30, width: 90 }} />
            </div>
            <div className='search-bar'>
                <input type='text' className='search-input' placeholder="search" />
                <SearchIcon className='search-icon' />
            </div>
            <div className='options'>
                <div onClick={() => navigate('/login')} className='option'>
                    {user ?
                        <div>
                            <p className='option-small'>Hello,</p>
                            <p className='option-big'>{user.username}</p>
                        </div>
                        :
                        <div>
                            <p className='option-small'>Hello,</p>
                            <p className='option-big'>Sign in</p>
                        </div>
                    }   
                </div>
                <div className='option'>
                    <p className='option-small'>Return</p>
                    <p className='option-big'>& Orders</p>
                </div>
                <div className='option'>
                    <p className='option-small'>Your</p>
                    <p className='option-big'>Prime</p>
                </div>
                <div onClick={() => navigate('/checkout')} className='cart'>
                    <span><ShoppingCartIcon /></span>
                    <span>{basket.length}</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar