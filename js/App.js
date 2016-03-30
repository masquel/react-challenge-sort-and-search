import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


const App = React.createClass({
  getInitialState() {
    return {
      data: [],
      dataTemp: [],
      filterText: '',
      sortBy: '',
      order: '',
      activeUser: ''
    }
  },

  loadData(){
    $.ajax({
      url: './data.json',
      success: function(response){
        this.setState({data: response});
        this.setState({activeUser: this.state.data[0]});
      }.bind(this),
      error: function(err,status,xhr){
        console.error(err);
      }.bind(this)
    })
  },
  
  componentWillMount(){
    this.loadData();
  },

  handleUserInput(filterText){
    this.setState({
      filterText: filterText
    })
  },

  handleUserSortSelect(sortBy,sortOrder){
    this.setState({
      sortBy: sortBy,
      sortOrder: sortOrder
    })
  },

  handleActiveUser(id){
    this.setState({
      activeUser: this.state.data[id]
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
          onUserSortSelect = {this.handleUserSortSelect}
        />
        <div className="row">
          <div className="col-sm-7 col-md-8 col-lg-9">
            <UserList 
              data={this.state.data} 
              filterText={this.state.filterText} 
              sortBy={this.state.sortBy} 
              order={this.state.sortOrder}
              onUserSelected={this.handleActiveUser}
            />
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            <ActiveUser data={this.state.activeUser}/>
          </div>
        </div>
      </div>
    );
  }
});

export default App;
