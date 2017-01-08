var React = require('react');
var TodoList = require('TodoList');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
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
      ]
    }
  }

  render() {
    let { todo } = this.state;
    return (<TodoList todoList={todo}/>);
  }
}

module.exports = TodoApp;