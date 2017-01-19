var React = require('react');

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todo = this.refs.todoItem.value;
    if(todo && todo.length > 0) {
      this.props.onAddTodo(todo);
      this.refs.todoItem.value = '';
    } else {
      this.refs.todoItem.focus();
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoItem" placeholder="Add todo item"/>
          <button className="hollow button expanded">Add Todo</button>
        </form>
      </div>
    )
  }


}

module.exports = TodoAddForm;