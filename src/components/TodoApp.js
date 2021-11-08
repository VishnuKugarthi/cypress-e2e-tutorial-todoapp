import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentValue: '',
    };

    this.handleTodo = this.handleTodo.bind(this);
  }
  handleTodo(e) {
    this.setState({ currentValue: e.target.value });
  }

  render() {
    return (
      <Router>
        <div>
          <header className='header'>
            <h1>todos</h1>
            <TodoForm
              currentValue={this.state.currentValue}
              handleTodo={this.handleTodo}
            />
          </header>
          <section className='main'>
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
