import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import './Home.css'
import { useDispatch } from 'react-redux'
import { setUsersData } from '../redux-helpers/dataSlice'

export default function Home() {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://randomuser.me/api?results=10&seed=4a9591bdd9fae493`).then(res => {
      console.log('res.data', res.data)
      setData(res.data.results)
      dispatch(setUsersData({data: res.data.results}))
    }).catch(err => {
      console.log('err', err)
      toast.error(err.response.data.message)
    })
  }, [])
  
  return (
    <div className='home'>
      <h2>Users List</h2>

      <div className='usersContainer'>
        {data.length > 0 ?  data.map((each, index) => (
          <Link to={`/users/${each?.login?.uuid}`} className='userLink' key={index}>
              {each.name.title}. {each.name.first} {each.name.last}
          </Link> 
        )): <p> Loading ... </p>}
      </div>
    </div>
  )
}
