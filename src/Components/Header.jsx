import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='flex p-3 justify-between items-center border text-white bg-gray-800 w-full'>
      <div className=' hidden sm:block bg-blue-300 p-2 rounded-tl-[60%] rounded-tr-[60%] rounded-lg text-black font-extrabold'>
        Sam-the-tutor
      </div>
      <ul className='flex p-2 gap-4 md:gap-14  justify-center items-center'>
        <li className='hover:font-bold cursor-pointer' onClick={() => navigate("/")}>Home</li>
        <li className='hover:font-bold cursor-pointer' onClick={() => navigate("/articles")}>Articles</li>
        <li className='hover:font-bold cursor-pointer' onClick={() => navigate("/projects")}>Projects</li>
        <div className='p-2 bg-red-500 rounded-full flex items-center text-white' onClick={() => window.open("https://www.youtube.com/channel/UCeDtGrgHtzLu-LW6CnHfa5Q", '_blank')}>
          Subscribe <IoLogoYoutube className='ml-3 md:text-[20px]' />
        </div>
      </ul>
    </div>
  )
}

export default Header
