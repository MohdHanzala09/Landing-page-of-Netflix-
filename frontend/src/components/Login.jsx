import { useState, useEffect, useRef } from 'react'
import Header from './Header.jsx'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useUpStore } from '../store/store.js'
const Login = () => {
  const updateEmail = useUpStore((state) => state.updateEmail)
  const changeBtn = useUpStore((state) => state.changebtn)
  const submitbtn = useUpStore((state) => state.submitbtn)
  const changeSubmitbtn = useUpStore((state) => state.changeSubmitbtn)
  const naviagte = useNavigate()

  useEffect(() => {

  }, [])


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    changeSubmitbtn()
    try {
      const res = await axios.post("http://localhost:3000/login", data, {
        headers: {
          "Content-type": "application/json"
        },
        withCredentials: true
      })
      console.log(res.data)
      if (res.status === 201) {
        toast.success("Login successfully")
        naviagte("/browse")
      }
      updateEmail(res.data.emailID)
      changeBtn()
    } catch (error) {
      toast.error(error.message || "user not defined")
      console.log(error)
    }finally{
      changeSubmitbtn()
    }
  }
  return (
    <div>
      <Header />
      <div>
        <img className='object-cover w-full h-screen' src="https://th.bing.com/th/id/R.0dba6984bc25e1a4bef688e5385a3eab?rik=2R9WBO2%2fzxbS3w&riu=http%3a%2f%2fisquad.tv%2fwp-content%2fuploads%2f2018%2f08%2fNetflix-Background-1260x709.jpg&ehk=xOzMkKSOme9KyZJoOAEkZMknboNY4J3hlFEQzGue8kE%3d&risl=&pid=ImgRaw&r=0" alt="banner" />
      </div>
      <div className='flex flex-col justify-center align-middle rounded-2xl absolute top-60 shadow-2xl right-150 w-70 h-100 bg-black opacity-90'>
        <h1 className='text-white relative text-2xl bottom-7 left-5'>Login</h1>
        <form className='flex flex-col gap-5 mt-2 w-2xs items-center' onSubmit={handleSubmit(onSubmit)}>
          <input className='border-white bg-gray-200 rounded-2xl p-3 outline-gray-600' placeholder='email'  {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
          <input className='border-white bg-gray-200 rounded-2xl p-3 outline-gray-600' type='password' placeholder='password' {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
          <button type='submit' className='bg-red-500 text-white w-48 font-bold rounded-2xl h-10 mt-6 hover:cursor-pointer'>{submitbtn?"...Loading":"Login"}</button>
        </form>
        <h2 className='text-white ml-3 mt-5'>don't have account? <Link to='/' className='text-red-900 hover:cursor-pointer'>Signup</Link></h2>
      </div>
    </div>
  )
}

export default Login
