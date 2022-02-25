import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux-helpers/userSlice'
import './Login.css'
import { toast } from 'react-toastify';
import users from '../data/users.json'

const Login = () => {
    const [userData, setUserData] = useState({name: '', password: '', repassword: ''})

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userData.password != userData.repassword){
            toast.error('Both Passwords should match')
            return
        }
        let validUser = users.filter(each => (each.name == userData.name && each.password == userData.password))
        if (validUser.length > 0){
            toast.success('User logged in')
            dispatch(login({
                name: userData.name, password: userData.password, loggedIn: true
            }))
        } else{
            toast.error('User is not registered with us, please use guest credentials')
        }
    }

    const fillGuestCreds = () => {
        setUserData({
            name: users[2].name, password: users[2].password,
            repassword: users[2].password
        })
    }

    return (
        <div className='login__screen'>
            <form className='login__form' onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input type='name' placeholder='User name' value={userData.name} minLength={3} maxLength={8}
                    onChange={(e) => setUserData({...userData, name: e.target.value})} required />
                <input type='password' placeholder='Enter password' value={userData.password} minLength={4}
                    onChange={(e) => setUserData({...userData, password: e.target.value})} required />
                <input type='password' placeholder='Re-Enter password' value={userData.repassword} minLength={4}
                    onChange={(e) => setUserData({...userData, repassword: e.target.value})} required />
                <button className='button' type='submit'>Login</button>
            </form>
            <button className='button-outline' onClick={fillGuestCreds}>
                Fill Guest Credentials
            </button>
        </div>
    )
}

export default Login