var React = require('react');
let {connect} = require('react-redux');
import TodoItem from 'TodoItem';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list">{this.renderTodos()}</div>
    )
  }

  renderTodos() {
    let {todos} = this.props;
    if(todos.length === 0 ){
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    return todos.map((todo) => {
      return <TodoItem key={todo.id} {...todo}/>
    });
  }

}

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList);