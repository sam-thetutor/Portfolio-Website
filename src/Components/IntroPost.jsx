import React, { useEffect, useState } from 'react'

const IntroPost = ({post}) => {
  
console.log("post data 2:",post)
  return (
    <div className='flex flex-wrap justify-evenly mt-8 w-full'>
    {
      post && post.map((post, index) => (
        <div 
          key={index} 
          className='flex flex-col w-full md:w-1/2 lg:w-1/3 p-4' 
          onClick={() => window.open(post.linkToArticle, '_blank')}
        >
          <img className='rounded-2xl w-full h-auto' src={post.image} alt="" />
          <div className='cursor-pointer mt-4'>
            <h4 className='text-red-500'>{post.tag}</h4>
            <h2 className='text-[23px] font-bold mt-2'>{post.title}</h2>
            <h4 className='line-clamp-6 text-gray-400 mt-2'>{post.introductionContent}</h4>
            <div className='flex mt-2 items-center'>
              <img src="https://a2ede-rqaaa-aaaal-ai6sq-cai.raw.icp0.io/uploads/Howard_Allen.1563.1563.png" className='w-[40px] rounded-full' alt="" />
              <div className='ml-2'>
                <h3 className='font-bold'>Sam-the-tutor</h3>
                <h3 className='text-gray-400'>{post.publishedAt}</h3>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>)
}

export default IntroPost
