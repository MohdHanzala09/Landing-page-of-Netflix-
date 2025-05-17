import React, { useContext } from "react"
import { memo } from "react"
import { useEffect, useState } from 'react'
import { useUpStore } from '../store/store.js'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const email = useUpStore((state) => state.email)
  const btn = useUpStore((state) => state.btn)
  const reset = useUpStore((state) => state.reset)
  const navigate = useNavigate()

  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:3000/logout")
      console.log(res)
      reset();
      toast.success("Logout Successfully")
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log("on useEffect")
  }, [])

  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex justify-between">
      <img className="w-56 ml-1 p-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
      <div className="flex items-center justify-between gap-2">
        {
          btn && (<><h1 className="mr-4 font-medium text-xl text-white">
            {email || "no data comming"}
          </h1>
            <button className="bg-red-700 text-white font-bold rounded-2xl p-2 mr-2 hover:cursor-pointer" onClick={logout}>Logout</button>
            <button className="bg-red-700 text-white font-bold rounded-2xl p-2 mr-2 hover:cursor-pointer">Search Movie</button></>)
        }
      </div>
    </div>
  )
}

export default memo(Header) 
