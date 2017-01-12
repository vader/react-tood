var React = require('react');
var TodoList = require('TodoList');
var TodoAddForm = require('TodoAddForm');
let TodoSearch = require('TodoSearch');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      todo: [
        {
          id: 1,
          text: "Walk the dog"
        }, {
          id: 2,
          text: "Feed the cat"
        }, {
          id: 3,
          text: "Fly the fish"
        }, {
          id: 4,
          text: "Play with parrot"
        }, {
          id: 5,
          text: "Swim with dolphin"
        }, {
          id: 6,
          text: "Sail away after saying goodbye to this cruel world"
        },
      ],
      showCompleted: false,
      searchText: '',
    }
  }

  handleAddTodo(text) {
    alert('Handled click in TodoApp: ' + text);
  }

  handleSearch(showCompleted, text) {
    console.log(`checkbox=${showCompleted} for text=${text}`);
    this.setState({
      showCompleted: showCompleted,
      searchText: text.toLowerCase(),
    });
  }

  render() {
    let { todo } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todoList={todo}/>
        <TodoAddForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

module.exports = TodoApp;