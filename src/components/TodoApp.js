import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import { SaveTodo, ListOfTodos, DeleteTodo } from '../lib/service';

function TodoApp() {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     todos: [],
  //     currentValue: '',
  //   };

  //   this.handleTodo = this.handleTodo.bind(this);
  // }
  // handleTodo(e) {
  //   this.setState({ currentValue: e.target.value });
  // }

  // render() {

  const [todos, setTodos] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [showError, setShowError] = useState(false);

  function handleTodo(e) {
    setCurrentValue(e.target.value);
  }

  useEffect(() => {
    ListOfTodos()
      .then(({ data }) => {
        // console.log('data from ListOfTodos = ', data)
        setTodos(data);
      })
      .catch(() => {
        setShowError(true);
      });
  }, []);

  function SubmitTodo(e) {
    e.preventDefault();

    let i = 1;

    const newTodo = {
      name: currentValue,
      isCompleted: false,
      id: i,
    };

    // let response = SaveTodo(newTodo);

    // console.log('response === ', response.body);
    // setTodos(response.data);

    SaveTodo(newTodo)
      .then(({ data }) => {
        console.log('data === ', data);
        const item = [];
        item.push(data);
        setTodos(item);
        setCurrentValue('');
      })
      .catch((err) => {
        setShowError(true);
      });
  }

  // function DeleteTodo(id) {
  //   DeleteTodo(id).then(() => {})
  // }

  return (
    <Router>
      <div>
        <header className='header'>
          <h1>todos</h1>
          <div>
            {showError && <span className='error'>Something went wrong.</span>}
          </div>
          <TodoForm
            currentValue={currentValue}
            handleTodo={handleTodo}
            SubmitTodo={SubmitTodo}
          />
        </header>
        <section className='main'>
          <TodoList todos={todos} />
        </section>
        <Footer />
      </div>
    </Router>
  );
  // }
}
export default TodoApp;
