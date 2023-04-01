import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import SideCart from './component/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './component/Question/Question';
function App() {
  const [readTime,setReadTime] = useState(0);
  
  const handelReadTime = (time) =>{
    const prevoiusTime = JSON.parse(localStorage.getItem("readTime"));
    if(prevoiusTime){
      const total = prevoiusTime + time;
      localStorage.setItem("readTime",total)
      setReadTime(total);
    }
    else{
      localStorage.setItem("readTime",time);
      setReadTime(time)
    }
  };
   const [Title,setTitle] = useState([]);
 const handelBlog = (title) =>{
     setTitle(title);

     const newTitle = Title.find(pd => pd === title);
     if(newTitle){
      toast("You Have Already Bookmarked This Blog")
      const newTitle = [...Title,title]
      setTitle(newTitle);
     }
     else{
      console.log('nay')
      const newTitle = [...Title,title]
     setTitle(newTitle);
     }


  }

     
  return (
      
      <div className='container'>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <hr />
        <div className="home-container col-md-8">
          <Home handelReadTime={handelReadTime}
           handelBlog={handelBlog}
          ></Home>
        </div>
        <div className="sideCart col-md-4 mb-4">
          <SideCart ReadTime={readTime}
          Title={Title}></SideCart>
          <ToastContainer></ToastContainer>
        </div>
      </div>
      <div className="header  m-auto mb-5">
        <Question></Question>
      </div>
    </div>
    
  
  )
}

export default App


