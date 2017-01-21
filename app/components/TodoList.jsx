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
    if(todoList.length ===0 ){
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    return todoList.map((todo) => {
      return <TodoItem onToggle={this.props.onToggle} key={todo.id} {...todo}/>
    });
  }

}

module.exports = TodoList;