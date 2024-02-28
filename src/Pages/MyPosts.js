import { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import './HomePage.css'
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../Redux/slicer"
import NavBar from '../Components/Navbar/NavBar';

const MyPosts = () => {

    const data = useSelector(state=>state.crud.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData(2))
    },[])

    return (
        <>
        <NavBar selecteTab={1}/>
        <div className='picksParentContainer p-4'>
        <div className='bookGridarent wrapCards'>
        {data?.length >0 && data?.map(post => (
                    <Card key={post.id} data = {post} pageName={'myPosts'}  />
                ))}
    </div>
    </div>
        </>
    )
};

export default MyPosts;
