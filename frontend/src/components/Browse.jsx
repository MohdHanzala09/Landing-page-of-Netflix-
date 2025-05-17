import {useEffect,useState} from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer.jsx'
import Moviecontainer from './Moviecontainer.jsx'
import {useUpStore} from '../store/store.js'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Browse = () => {
  const email = useUpStore((state) => state.email)
  const navigate = useNavigate()
  // const nowPlaying = async() => {
  //   await axios.get("http://____:__",mehtod)
  // }  
  useEffect(() => {
    if(!email){
      navigate('/login')
    }
  }, [])
  
  return (
      <div className='bg-black'>
        <Header/>
        <div>
          <Maincontainer/>
          <Moviecontainer/>
        </div>
      </div>
  )
}

export default Browse
