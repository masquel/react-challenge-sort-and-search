import React, {Component} from 'react';
import UserData from './UserData';


const UserList = React.createClass({
	getInitialState(){
		return{
			loaded: false,
		}
	},
	componentDidMount(){
		this.setState({
			loaded: true
		});
	},
	componentDidUpdate(){
		
	},
	handleSelect(id){
		this.props.onUserSelected(id);
	},
	render(){
		var UsersData = [];
		this.props.data.forEach(function(userData){
			if(userData.name.indexOf(this.props.filterText) === -1) return;
			UsersData.push(<UserData key={userData.id} data={userData} click={this.handleSelect} />);
		}.bind(this));

	    if(this.props.sortBy === 'name'){
	      UsersData.sort(function(fobj, sobj){
	        let fname = fobj.props.data.name.toLowerCase();
	        let sname = sobj.props.data.name.toLowerCase();
	        if(this.props.order === 'asc'){
	          if(fname < sname) return -1;
	          if(fname > sname) return 1; 
	        }else{
	          if(fname < sname) return 1;
	          if(fname > sname) return -1;
	        }
	        return 0; 
	      }.bind(this));
	    }

	    if(this.props.sortBy === 'age'){
	      UsersData.sort(function(fobj, sobj){
	        if(this.props.order === 'asc'){
	          return fobj.props.data.age - sobj.props.data.age;
	        }else{
	          return sobj.props.data.age - fobj.props.data.age;
	        }
	      }.bind(this));
	    }

		if(this.state.loaded && (UsersData !== null || UsersData !== undefined) && UsersData.length > 0){
			
			return (
				<table className="table table-striped table-bordered user-list">
					<thead>
						<tr>
							<th>Изображение</th>
							<th>Имя</th>
							<th>Возраст</th>
							<th>Телефон</th>
						</tr>
					</thead>
					<tbody>
						{UsersData}
					</tbody>
				</table>
			)
		}else if(UsersData.length == 0){
			return(
				<p>Данные не найдены</p>
			)
		}else{
			return (
				<p>Загружаем данные...</p>
			)
		}
	}
})

export default UserList;