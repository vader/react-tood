var React = require('react');
var moment = require('moment');

class TodoItem extends React.Component {
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
    let { text, id, completed, createdAt, completedAt } = this.props;
    let renderDate = () => {
      let message = completed ? ' Completed ' : ' Created ';
      let timestamp = completed ? completedAt : createdAt;

      return (
        message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
      );
    };
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

module.exports = TodoItem;
