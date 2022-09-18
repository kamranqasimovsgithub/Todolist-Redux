import React, { useState } from 'react';
import './style.css';
import { connect  } from 'react-redux';
import { listAdd, mark, clear } from './actions';

const App = (props) => {

  const [text, setText] = useState('');
  console.log(props);

  return (

    <div className='App'>
      <h1>Todo List</h1>
      <div className='add-form'>
        <input 
          placeholder='Add something...' 
          value={text} 
          onChange = {e => setText(e.target.value)}
        />
        <button onClick={()=>
          {
            setText('');
            props.listAdd(text)}
          }>ADD</button>
      </div>
      <div className='list'>
        {props.list.map(item=>(
          <div onClick={()=>props.mark(item.id)} key = {item.id} className={item.completed ? "done" : ""}>
            {item.heading}
          </div>
        ))}
      </div>
      <button  onClick={()=>props.clear()} className='clear'>CLEAR</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    list: state.list
  };
}

export default connect(mapStateToProps,
  { listAdd, mark, clear })(App);