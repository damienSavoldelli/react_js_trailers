import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      placeholder: 'Recherchez votre film...',
      intervalBeforeRequest : 1000,
      lockRequest:false,
    };
  }

  // Aro fx for binding
  handleChange = event => {
    this.setState({searchText: event.target.value});

    if (!this.state.lockRequest) {
      this.setState({lockRequest: true});

      setTimeout(function() {
        this.search()
      }.bind(this), this.state.intervalBeforeRequest)
    }
  }

  handleKeyPress = () =>{
    this.search()
  }

  // Aro fx for binding
  handleClickSearch = () => {
    this.search()
  }

  search() {
    this.props.callback(this.state.searchText);

    this.setState({lockRequest: false});
  }

  render() {
    const { placeholder, searchText } = this.state;
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input
            className="form-control input-lg"
            onChange={this.handleChange}
            placeholder={placeholder}
            onKeyPress={this.handleKeyPress}
          />      
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleClickSearch}>Go</button>
          </span>  
        </div>
        
      </div>
    );
  }
}

export default SearchBar;
