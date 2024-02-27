import { useEffect, useState } from "react"
import Card from "../Components/Card/Card"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../Redux/slicer"
import NavBar from "../Components/Navbar/NavBar"

const AllPosts=()=>{
    const data = useSelector(state=>state.crud.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    },[])

    return (
        <>
        <NavBar selecteTab={2}/>
         <div className='picksParentContainer p-4'>
        <div className='bookGridarent wrapCards'>
        {data?.length >0 && data?.map(post => (
                    <Card key={post.id} data = {post} body={post.body} />
                ))}
    </div>
    </div>
        </>
    )
}


export default AllPosts