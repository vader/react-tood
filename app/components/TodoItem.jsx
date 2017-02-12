var React = require('react');
var moment = require('moment');
let {connect} = require('react-redux');
let actions = require('actions');

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    console.log('clicked');
  }

  render() {
    return (
      this.renderTodo()
    )
  }

  renderTodo() {
    let { text, id, completed, createdAt, completedAt, dispatch } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';

    let renderDate = () => {
      let message = completed ? ' Completed ' : ' Created ';
      let timestamp = completed ? completedAt : createdAt;

      return (
        message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
      );
    };
    return (
      <div className={todoClassName} onClick={() => {
         dispatch(actions.toggleTodo(id))
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}

export default connect()(TodoItem);
