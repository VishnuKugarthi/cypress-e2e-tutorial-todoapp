import axios from 'axios';

export const SaveTodo = (todoItem) =>
  axios.post('http://localhost:3030/api/todos', todoItem);

export const ListOfTodos = () => axios.get('http://localhost:3030/api/todos');

export const DeleteTodo = (itemId) =>
  axios.delete(`http://localhost:3030/api/todos${itemId}`);
