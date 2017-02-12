var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todo = this.refs.todoItem.value;
    let {dispatch} = this.props;
    if(todo && todo.length > 0) {
      dispatch(actions.addTodo(todo));
      this.refs.todoItem.value = '';
    } else {
      this.refs.todoItem.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoItem" placeholder="Add todo item"/>
          <button className="hollow button expanded">Add Todo</button>
        </form>
      </div>
    )
  }


}

export default connect()(AddTodo);