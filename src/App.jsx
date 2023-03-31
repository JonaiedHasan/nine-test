import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import SideCart from './component/SideCart/SideCart';
function App() {
  const [count, setCount] = useState(0)

  return (
    
      
      
      
      
      <div className='container'>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <hr />
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="sideCart col-md-4 mb-4">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
      
      
      
      
     
    

  
  )
}

export default App
