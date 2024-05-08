import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
const Search = ({ selectedTag }) => {
  const tags = [
    {
      id: 4,
      tagName: "All"
    },
    {
      id: 0,
      tagName: "React"
    },
    {
      id: 1,
      tagName: "Crypto"
    },
    {
      id: 2,
      tagName: "Angular"
    },
    {
      id: 3,
      tagName: "Motoko"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <div className='flex justify-center mt-8 flex-col px-[70px] md:px-[150px]'>
      {/* <img className='rounded-2xl' src="https://a2ede-rqaaa-aaaal-ai6sq-cai.raw.icp0.io/uploads/Blockchain_Literacy_Inititive_5000_x_3000_px_3.5000.3000.png" alt="jjjj" /> */}

      <div className='bg-white shadow-lg flex items-center p-3 rounded-lg mt-[-20px] mx-[25%]'>
        <IoSearchOutline className='text-gray-400 text-[20px]' />
        <input type="text" placeholder='Search' className='outline-none ml-2' />
      </div>
      <div className='flex gap-10 justify-center mt-5'>
        {
          tags.map((item, index) => (
            <ul key={item.id} onClick={() => { setActiveIndex(index); selectedTag(item.tagName) }}
              className={`${activeIndex === index ?
                "bg-red-500 text-white" : null} p-1  rounded-sm md:rounded-lg cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border=red-500 transition-all duration-100 ease-in-out`}>
              <li>{item.tagName}</li>
            </ul>

          ))
        }
      </div>





    </div>
  )
}

export default Search
