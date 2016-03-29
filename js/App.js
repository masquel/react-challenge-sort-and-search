import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app container-fluid">
        <SearchBar />
        <ToolBar />
        <div className="row">
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList />
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser />
          </div>
        </div>
      </div>
    );
  }
}
