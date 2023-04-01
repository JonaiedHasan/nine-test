import React from 'react';
import './Blog.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Blog = ({blog,handelReadTime,handelBlog}) => {
    const{Coverpicture,authorpicture,authorname,title,readtime}=blog
    return (
        <div className="blog-card p-2 mb-2   w-100 col-md-6 p-0">
        <div className="blog-poster w-100 m-auto mb-3">
          <img className="w-100 rounded" src={Coverpicture} alt="" />
        </div>
        <div className='d-flex justify-content-between p-2'>
            <div className='d-flex gap-3'>
                <div className='author-info'>
                    <img className='rounded-circle' src={authorpicture}alt="" />
                </div>
                <div>
                    <h4 className='fw-bold'>{authorname}</h4>
                    <p>Mar 14 (4 Days ago)</p>
                </div>
            </div>
            <div>
              <p>{readtime} min read &nbsp;
               <FontAwesomeIcon icon={faBookmark}  onClick={()=>{handelBlog(title)}}/>
              </p>
            </div>
        </div>
        <h2 className='fw-bold'>{title}</h2>
        <div className="timeAndRating d-flex gap-4 ">
        <p>#beginners</p>
        <p>#programming</p>
      </div>
        <a onClick={()=>{ handelReadTime(readtime)}} href="##">Mark as read</a>
        <hr className='mt-4' />
      </div>
    );
};

export default Blog;