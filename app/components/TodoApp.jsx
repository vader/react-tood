var React = require('react');
let uuid = require('node-uuid');
let moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

let TodoSearch = require('TodoSearch');
let TodoApi = require('TodoApi');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      todo: TodoApi.getTodos(),
      showCompleted: false,
      searchText: '',
    }
  }

  uuid() {
    return uuid.v4()
  }

  componentDidUpdate() {
    TodoApi.setTodos(this.state.todo);
  }

  handleAddTodo(text) {
    this.setState({
        todo: [
          ...this.state.todo,
          {
            id: uuid(),
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined,
          }
        ]
      }
    );
  }

  handleSearch(showCompleted, text) {
    console.log(`checkbox=${showCompleted} for text=${text}`);
    this.setState({
      showCompleted: showCompleted,
      searchText: text.toLowerCase(),
    });
  }

  render() {
    let { todo, showCompleted, searchText } = this.state;
    let filteredTodos = TodoApi.filterTodos(todo, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TodoApp;