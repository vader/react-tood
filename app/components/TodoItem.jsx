var React = require('react');

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.renderTodo()}</div>
    )
  }

  renderTodo() {
    let { text, id } = this.props;
    return (
      <div>{id}. {text}</div>
    )
  }
}

module.exports = TodoItem;
