var React = require('react');
let uuid = require('node-uuid');
let moment = require('moment');

var TodoList = require('TodoList');
var TodoAddForm = require('TodoAddForm');
let TodoSearch = require('TodoSearch');
let TodoApi = require('TodoApi');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      todo: TodoApi.getTodos(),
      showCompleted: false,
      searchText: '',
    }
  }

  uuid() {
    return uuid.v4()
  }

  handleToggle(id) {
    // alert(id);
    var updatedTodos = this.state.todo.map( (todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = (todo.completed) ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({
      todo: updatedTodos
    })

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
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todoList={filteredTodos} onToggle={this.handleToggle}/>
        <TodoAddForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

module.exports = TodoApp;