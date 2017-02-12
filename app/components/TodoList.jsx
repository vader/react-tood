var React = require('react');
let {connect} = require('react-redux');
import TodoItem from 'TodoItem';
let TodoApi = require('TodoApi');

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
    let {todos, searchText, showCompleted} = this.props;
    let filterTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    if(filterTodos.length === 0 ){
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    return filterTodos.map((todo) => {
      return <TodoItem key={todo.id} {...todo}/>
    });
  }

}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);