import { useEffect, useState, } from "react";
import '../../Pages/HomePage.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const NavBar = ({selecteTab})=>{
    const [selectedoption,setSelectedOption] = useState()
    useEffect(()=>{
        setSelectedOption(selecteTab)
    },[])

    
    return(
        <>
         <nav className="nav nav-pills flex-column flex-sm-row navbar-details">
                <Link 
                    className={`flex-sm-fill text-sm-center nav-link ${selecteTab == 1 ? 'navBackColor' : ''}`} 
                    to={'/'}
                >
                     My Posts 
                </Link>
                <Link 
                    className={`flex-sm-fill text-sm-center nav-link ${selecteTab == 2 ? 'navBackColor' : ''}`}
                 to={'/AllPosts'}
                 
                >
                    All Posts
                </Link>
                <Link
                    className={`flex-sm-fill text-sm-center nav-link ${selecteTab == 3 ? 'navBackColor' : ''}`} 
                
                    to={'/CreatePostPage'}
            
                    
                >
                    Create / Update Post
                </Link>
                
            </nav>
        </>
    )
}
export default NavBar