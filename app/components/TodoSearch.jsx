var React = require('react');

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    let search = this.refs.searchText.value;
    if (search !== 'undefined' && search) {
      this.props.onSearch(search);
    } else {
      this.refs.searchText.focus();
    }
  }

  handleSearch() {
    let search = this.refs.searchText.value;
    let showCompleted = this.refs.showCompleted.checked;
    if (search !== 'undefined' && search) {
      this.props.onSearch(showCompleted, search);
    } else {
      this.refs.searchText.focus();
    }
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref="searchText" placeholder="Search"
                 onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" 
                   onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }


}

module.exports = TodoSearch;