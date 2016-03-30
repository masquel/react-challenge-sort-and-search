import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


const App = React.createClass({
  getInitialState() {
    return {
      data: [],
      filterText: '',
      sortBy: '',
      order: ''
    }
  },

  loadData(){
    $.ajax({
      url: './data.json',
      success: function(response){
        this.setState({data: response});
      }.bind(this),
      error: function(err,status,xhr){
        console.error(err);
      }.bind(this)
    })
  },
  componentDidMount(){
    this.loadData();
  },
  handleUserInput(filterText){
    this.setState({
      filterText: filterText
    })
  },
  handeUserSortSelect(sortBy,sortOrder){
    this.setState({
      sortBy: sortBy,
      sortOrder: sortOrder
    })
  },
  render() {
    return (
      <div className="app container-fluid">
        <SearchBar 
          filterText = {this.state.filterText} 
          onUserInput = {this.handleUserInput}
        />
        <ToolBar 
          onUserSortSelect = {this.handeUserSortSelect}
        />
        <div className="row">
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList data={this.state.data} filterText={this.state.filterText} sortBy={this.state.sortBy} order={this.state.sortOrder}/>
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser />
          </div>
        </div>
      </div>
    );
  }
});

export default App;
