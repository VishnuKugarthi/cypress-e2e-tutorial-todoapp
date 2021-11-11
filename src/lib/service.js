import axios from 'axios';

const SaveTodo = (todoItem) =>
  axios.post('http://localhost:3030/api/todos', todoItem);

export default SaveTodo;
