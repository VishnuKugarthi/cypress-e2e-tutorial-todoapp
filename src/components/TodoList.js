import React from 'react';

const TodoItem = (props) => {
  // {
  //   console.log('props22 ---- ', props);
  // }
  return (
    <li className={props.isComplete ? 'completed' : null}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={props.isComplete}
          onChange={() => {}}
        />
        <label>{props.name}</label>
        <button className='destroy' />
      </div>
    </li>
  );
};

const TodoList = (props) => {
  // console.log('props ---- ', props);

  return (
    <ul className='todo-list'>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
