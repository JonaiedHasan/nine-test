import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import "./Question.css"
const Question = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <>
     <div className='question ps-4 border border-primary border-2  rounded p-2  mt-2 w-75 '>
     <h2 className='fw-bolder'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        1:What the difference between props and  state
      </h2>
     </div>
      <Collapse in={open}>
        <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
          <h4>
          Props are used to pass data from a parent component to child component. They are read-only, that's mean the child component cannot modify the props that it receives. Instead, the parent component is responsible for updating its own state and passing the updated data down to the child as props.
          <br /><br />

         State is used to manage data that is internal to a component. State is initialized and updated within the component itself, using the setState method. When state is updated, React will re-render the component with the updated data.state is mutable and can be changed within the component.
          </h4>
        </div>
      </Collapse>
    </>
    
    
      
    </div>
  );
};

export default Question;


