import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO } from '../actions/types';

function Todos(){

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    
    const deleteTodo = (id) => {
      dispatch(DELETE_TODO(id));
    };

    if(!todos || todos.length === 0){
      return(
        <h3>No Todos left</h3>
      );
    }
    return(
      <ul>
        {
          todos.map(todo => (
            <li onClick={() => deleteTodo(todo.id)} >{todo.label}</li>
          ))
        }
      </ul>
    );
  };


  export default Todos;