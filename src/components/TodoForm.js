import React from 'react';

export default (props) => (
  <form onSubmit={props.SubmitTodo}>
    <input
      onChange={props.handleTodo}
      value={props.currentValue}
      type='text'
      autoFocus
      className='new-todo'
      placeholder='What needs to be done?'
    />
  </form>
);
