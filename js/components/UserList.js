import React, {Component} from 'react';
import UserData from './UserData';


const UserList = React.createClass({
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
	getInitialState(){
		return {
			data: []
		}
	},
	componentDidMount(){
		this.loadData();
	},
	render(){
		var UsersData = this.state.data.map(userData => <UserData key={userData.id} data={userData} />);
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