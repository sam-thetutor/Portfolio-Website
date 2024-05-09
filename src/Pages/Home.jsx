import React from 'react'
import { useNavigate } from 'react-router-dom'
import Profilepic from "../assets/profile.jpg"
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full  grid grid-cols-1 p-2 md:p-4 md:gap-4'>
      <div className='gap-4 md:gap-12 justify-between md:px-16 items-center grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-between gap-1 md:gap-8'>
          <div className='flex flex-col gap-2' >
            <h2 className=' font-extrabold text-2xl md:text-6xl'>Hi</h2>
            <h2 className='font-extrabold text-2xl md:text-6xl'>I'm Samuel </h2>
            <h2 className='text-xl font-bold underline'>a Web3 Developer, and Technical Writer</h2>
            <span className='text-gray-400 text-xl'>
              As a Web3 developer, I am pioneering the decentralized future, crafting innovative blockchain-powered solutions that empower users and transform industries.
            </span>

          </div>

          <div className='flex w-full'>
            <div className='flex flex-col border-red-200 gap-1'>
              <h2 className='font-bold'>Skills</h2>
              <ul className='grid gap-1 items-center justify-center grid-cols-3 md:grid-cols-7'>
              <li className='border p-1 shadow-sm shadow-black'>JavaScript</li>
                <li className='border p-1 shadow-sm shadow-black'>React</li>
                <li className='border p-1 shadow-sm shadow-black'>TailwindCss</li>
                <li className='border p-1 shadow-sm shadow-black'>Solidity</li>
                <li className='border p-1 shadow-sm shadow-black'>Motoko</li>
                <li className='border p-1 shadow-sm shadow-black'>ICP</li>
                <li className='border p-1 shadow-sm shadow-black'>Celo</li>
              </ul>
            </div>
          </div>
         
          {/* <div className=' gap-4 flex'>
            <button className='border-black rounded-none px-4 hover:outline-none '>HIRE ME</button>
            <button className='bg-black text-white rounded-none' onClick={() => navigate("/projects")}>SEE MY PROJECTS</button>
          </div> */}
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Contact me</h2>
            <div className='flex  gap-6 text-lg'>
            <FaTwitter color="lightblue" className='cursor-pointer' size={25} onClick={()=>window.open('https://twitter.com/samthetutor2')} />
            <FaLinkedin size={25} />
            <BiLogoGmail size={25} />
            </div>
          </div>

        </div>
        <img className='object-cover rounded-lg rounded-bl-[50%]' src={Profilepic} alt="profile image" />
      </div>
    </div>




  )
}

export default Home
