import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import { tagData } from '../Components/ArticleData'
import {extractHashnodeData,myData} from "../Components/ArticleData"
tagData
const Articles = () => {
    const [postData, setPostData] = useState(null)
const [allArticles,setAllArticles] = useState(null)
    useEffect(() => {
        setAllArticles(extractHashnodeData(myData)[0])
        setAllArticles(extractHashnodeData(myData))
    }, [])

    console.log("all tags :",tagData());
    

    const filterPost =(tag)=>{
        // const results = articleData.filter((item)=> item.tag == tag)
        // setAllArticles(results)

    }


    return (
        <>
            <Search selectedTag={(tag)=>filterPost(tag)} tags={tagData()} />
            {postData && <IntroPost post={postData} />}
            {allArticles && <Blogs posts={allArticles} />}
        </>
    )
}

export default Articles

