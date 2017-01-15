var React = require('react');
var TodoList = require('TodoList');
var TodoAddForm = require('TodoAddForm');
let TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      todo: [
        {
          id: uuid(),
          text: "Walk the dog"
        }, {
          id: uuid(),
          text: "Feed the cat"
        }, {
          id: uuid(),
          text: "Fly the fish"
        }, {
          id: uuid(),
          text: "Play with parrot"
        }, {
          id: uuid(),
          text: "Swim with dolphin"
        }, {
          id: uuid(),
          text: "Sail away after saying goodbye to this cruel world"
        },
      ],
      showCompleted: false,
      searchText: '',
    }
  }

  uuid(){
    return uuid.v4()
  }

  handleAddTodo(text) {
    this.setState({
        todo: [...this.state.todo,
          {
            id: uuid(),
            text: text
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