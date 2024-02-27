import { useEffect, useState } from 'react'
import './CreatePosts.css'
import { createPost,updatePost } from '../Redux/slicer'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import NavBar from '../Components/Navbar/NavBar'
import { useNavigate } from 'react-router-dom'
const CreatePostPage = ()=>{
    const navigate = useNavigate()
    const dispatch  = useDispatch()
    const location = useLocation()
    const updateData = location?.state?.data
    const [title,setTitle] = useState()
    const [desc,setDesc] = useState()
    useEffect(()=>{
        if(updateData){
            setTitle(updateData?.title)
            setDesc(updateData?.body)
        }
        else{
            setTitle('')
            setDesc('')
        }
    },[updateData])
    

    const handleCreateClick=async()=>{
        if (title.length > 0 && desc.length>0){
        updateData ? await dispatch(updatePost({ title, body: desc, userId: 2 ,id:updateData.id})) :
        await dispatch(createPost({ title, body: desc, userId: 2 }));
        
        navigate('/')

        }
        else{
            return
        }
    }
   
    return (
        <>
        <NavBar selecteTab={3}/>
        <div class="input-group mt-4 create-post-page">
        <input value={title}  class="form-control createTextbox"  placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}></input>
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)}  class="form-control createTextbox" rows="3" placeholder='Enter Description'></textarea>
        <div className='btn-container'>
        <button type="button" class="btn btn-success btn1 createBtn" onClick={()=>handleCreateClick()}>{updateData ? 'Update' : 'Create'}</button> 
        </div>
        </div>
        </>
    )
}
export default CreatePostPage