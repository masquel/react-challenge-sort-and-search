import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


const App = React.createClass({
  getInitialState() {
    return {
      data: [],
      filteredData: [],
      filterText: '',
      sortBy: '',
      sortOrder: '',
      activeUser: ''
    }
  },

  loadData(){
    $.ajax({
      url: './data.json',
      success: function(response){
        this.setState(
          {
            data: response,
            filteredData: response
          }
        );
        this.setState({activeUser: this.state.data[0]});
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
    },function(){
      this.updateData()
    });
  },

  handleUserSortSelect(sortBy,sortOrder){
    this.setState({
      sortBy: sortBy,
      sortOrder: sortOrder
    },function(){
      this.updateData()
    });
  },

  handleActiveUser(id){
    this.setState({
      activeUser: this.state.data[id]
    })
  },

  updateData(){
    var UsersData = [];
    // Филтрация данных
    this.state.data.forEach(function(userData){
      if(userData.name.indexOf(this.state.filterText) === -1) return;
      UsersData.push(userData);
    }.bind(this));

    // Сортируем по имени
    if(this.state.sortBy === 'name'){
      UsersData.sort(function(fobj, sobj){
        var fname = fobj.name.toLowerCase();
        var sname = sobj.name.toLowerCase();
        if(this.state.sortOrder === 'asc'){
          if(fname < sname) return -1;
          if(fname > sname) return 1; 
        }else{
          if(fname < sname) return 1;
          if(fname > sname) return -1;
        }
        return 0; 
      }.bind(this));
    }
    // Сортируем по возрасту
    if(this.state.sortBy === 'age'){
      UsersData.sort(function(fobj, sobj){
        if(this.state.sortOrder === 'asc'){
          return fobj.age - sobj.age;
        }else{
          return sobj.age - fobj.age;
        }
      }.bind(this));
    }
    // Записываем обработанные данные для отправки на UserList
    this.setState({filteredData:UsersData});

    // Первый в списке становится активных после всех манипуляций
    if(UsersData.length > 0){
      this.handleActiveUser(UsersData[0].id);
    }else{
      this.handleActiveUser();
    }
  },
  render() {
    return (
      <div className="app container-fluid">
        <header className="navbar-static-top">
          <SearchBar 
            filterText = {this.state.filterText} 
            onUserInput = {this.handleUserInput}
          />
          <ToolBar
            onUserSortSelect = {this.handleUserSortSelect}
          />
        </header>
        <div className="row">
          <div className="col-sm-7 col-md-8 col-lg-9">
            <UserList 
              data={this.state.filteredData} 
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
