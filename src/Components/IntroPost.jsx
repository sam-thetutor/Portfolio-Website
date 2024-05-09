import React, { useEffect, useState } from 'react'

const IntroPost = ({post}) => {
  
console.log("post data 2:",post)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8' onClick={()=>window.open(post.linkToArticle, '_blank')}>
      <img className='rounded-2xl w-full h-full' src={post.image} alt="" />
      <div className='cursor-pointer'>
        <h4 className='text-red-500'>{post.tag}</h4>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.introductionContent}</h4>
      <div className=' flex mt-2 items-center'>
        <img src="https://a2ede-rqaaa-aaaal-ai6sq-cai.raw.icp0.io/uploads/Howard_Allen.1563.1563.png" className='w-[40px] rounded-full' alt="" />
        <div className='ml-2'>
          <h3 className='font-bold'>Sam-the-tutor</h3>
          <h3 className='text-gray-400'>{post.publishedAt}</h3>
        </div>
      </div>
      </div>
   </div>
  )
}

export default IntroPost
