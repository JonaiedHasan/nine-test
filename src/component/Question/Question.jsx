import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import "./Question.css"
const Question = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div>
      <>
     <div className='question ps-4 border border-primary border-2  rounded p-2  mt-2 w-75 '>
     <h2 className='fw-bolder'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        1:What the difference between props and  state?
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
    <br />
      <>
     <div className='question ps-4 border border-primary border-2  rounded p-2  mt-1 w-75 '>
     <h2 className='fw-bolder'
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
      >
       2:How does useState work?
      </h2>
     </div>
      <Collapse in={open2}>
        <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
          <h4>
          useState is a React hook that can be used to update the state value .It returns an array with two values: the current state and a function to update it.When a component renders for the first time, useState initializes the state with the provided initial value. The initial value can be a primitive value such as a string, number or boolean, or it can be an object or an array. The function returned by useState can be called to update the state. When this function is called with a new state value, React will schedule a re-render of the component with the updated state value.
          </h4>
        </div>
      </Collapse>
    </>
    <br />
      <>
     <div className='question ps-4 border border-primary border-2  rounded p-2  mt-1 w-75 '>
     <h2 className='fw-bolder'
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3}
      >
       3:What is the Purpose of useEffect other than fetching data?
      </h2>
     </div>
      <Collapse in={open3}>
        <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
          <h4>
          The purpose of useEffect other than fetching data is manipulating the DOM,handling side effects in general.
          </h4>
        </div>
      </Collapse>
    </>
    <br />
      <>
     <div className='question  ps-4 border border-primary border-2  rounded p-2  mt-1 w-75 '>
     <h2 className='fw-bolder'
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4}
      >
       4.How Does React work?
      </h2>
     </div>
      <Collapse in={open4}>
        <div className='ans  border border-primary mt-1 rounded p-2' id="example-collapse-text">
          <h4>
          React is a JavaScript library for building user interfaces. It works by allowing developers to define components that represent parts of the UI, which can be composed together to build complex UIs. React automatically re-renders components and updates the DOM when a component's state changes. It also provides lifecycle methods to control component behavior, and can be used with other tools and frameworks to build full-featured applications.
          </h4>
        </div>
      </Collapse>
    </>
    
      
    </div>
  );
};

export default Question;


