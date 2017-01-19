var React = require('react');

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    console.log('clicked');
  }

  render() {
    return (
      this.renderTodo()
      )
  }

  renderTodo() {
    let { text, id, completed } = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
}

module.exports = TodoItem;
