import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getUserData } from '../redux-helpers/dataSlice'
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
    let { id } = useParams()
    let navigate = useNavigate();
    const [user, setUser] = useState({})
    const data = useSelector(getUserData)

    useEffect(() => {
        if (data == null){
            navigate('/')
        }
        else{
            console.log('data', data)
            data.data.forEach(element => {
                if (element.login.uuid == id){
                    setUser(element)
                }
            });
        }
    }, [data])
    
    
    return (
        <div className='userDetails'>
            {user.name && <>
                <h2>
                    User details
                </h2>
                <div className='user__details'>
                    <img src={user.picture.large} />
                    <h4>
                        Name: {user.name.title}. {user.name.first} {user.name.last}
                    </h4>
                    <h4>
                        Gender: {user.gender}
                    </h4>
                    <h4>
                        Email: {user.email}
                    </h4>
                    <h4>
                        Age: {user.dob.age}
                    </h4>
                    <h4>
                        Phone: {user.phone}
                    </h4>
                </div>
            </>}
        </div>
    )
}
