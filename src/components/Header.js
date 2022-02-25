import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useDispatch } from 'react-redux'
import { logout } from '../redux-helpers/userSlice'
import { clearData } from '../redux-helpers/dataSlice'

export default function Header({user}) {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearData())
    }
    
    return (
        <div className='header'>
            <div className='d-flex'>
                <h3>Hi {user}!</h3>
                <p className='mx-5'> | </p>
                <Link to='/' className='link'> Home </Link>
            </div>
            <button className='logout__button' onClick={handleLogout}>Logout</button>
        </div>
    )
}
