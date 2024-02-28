import './detailsCard.css'
import { useNavigate } from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux'
import { deletePost,fetchData } from '../../Redux/slicer'
const Card = ({data})=>{
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const handleUpdateClick=()=>{
        navigate('/CreatePostPage',{state:{data}})
    }
    const handleDelete =async()=>{
        dispatch(deletePost( data?.id))
    }
    return(
        <>
        <div class="card postCard">
        <div class="card-body cardDetails">
            <h5 class="card-title cardDetails">{data?.title}</h5>
            
            <p class="card-text">{data?.body}</p>
            {data?.userId==2 &&
            <div>
                
            
            <button type="button" class="btn btn-primary btn-posn btn1" onClick={()=>handleUpdateClick()}>Update</button>
            <button type="button" class="btn btn-danger btn2" onClick={()=>handleDelete()}>Delete</button>
        
            </div>
            }
        </div>
        </div>
        </>
    )
}

export default Card