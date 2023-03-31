import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
           <div className='movie-container row'>
            {
                blogs.map(blog=> <Blog blog={blog}></Blog>)
                
            }
            
           </div>
        </div>
    );
};

export default Home;