import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ADD_TODO } from '../actions/types';

function TodoInput(){

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const handleChange = e => {
      setNewTodo(e.target.value);
    };

    const handleSubmit = e => {
      dispatch(ADD_TODO(newTodo))
    };

    return(
      <>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      </>
    );
  }

  export default TodoInput;