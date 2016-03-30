import React, {Component} from 'react';
import UserData from './UserData';


const UserList = React.createClass({
	render(){
		var UsersData = [];
		this.props.data.forEach(function(userData){
			if(userData.name.indexOf(this.props.filterText) === -1)
				return;
			UsersData.push(<UserData key={userData.id} data={userData} />);
		}.bind(this));
		if(this.props.sortBy === 'name'){
			UsersData.sort(function(fobj, sobj){
				if(this.props.order === 'asc'){
					if(fobj.props.data.name.toLowerCase() < sobj.props.data.name.toLowerCase()) return -1;
					if(fobj.props.data.name.toLowerCase() > sobj.props.data.name.toLowerCase()) return 1;	
				}else{
					if(fobj.props.data.name.toLowerCase() < sobj.props.data.name.toLowerCase()) return 1;
					if(fobj.props.data.name.toLowerCase() > sobj.props.data.name.toLowerCase()) return -1;
				}
				return 0;	
			}.bind(this));
		}
		if(this.props.sortBy === 'age'){
			UsersData.sort(function(fobj, sobj){
				if(this.props.order === 'asc'){
					return fobj.props.data.age - sobj.props.data.age;
				}else{
					return sobj.props.data.age -fobj.props.data.age;
				}
			}.bind(this));
		}
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
	}
})

export default UserList;