var React = require('react');
var TodoItem = require('TodoItem');

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list">{this.renderTodos()}</div>
    )
  }

  renderTodos() {
    let todoList = this.props.todoList;
    return todoList.map((todo) => {
      return <TodoItem key={todo.id} {...todo}/>
    });
  }

}

module.exports = TodoList;