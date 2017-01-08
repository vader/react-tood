var React = require('react');

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let todo = this.refs.todoItem.value;
    console.log(todo)
    if(todo && todo.length > 0) {
      this.props.onAddTodo(todo);
      this.refs.todoItem.value = '';
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoItem" placeholder="Add todo item"/>
          <button>Add</button>
        </form>
      </div>
    )
  }


}

module.exports = TodoAddForm;