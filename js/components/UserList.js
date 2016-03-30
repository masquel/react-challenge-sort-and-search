import React, {Component} from 'react';
import UserData from './UserData';


const UserList = React.createClass({
	getInitialState(){
		return{
			loaded: false
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
			UsersData.push(<UserData key={userData.id} data={userData} click={this.handleSelect} />);
		}.bind(this));

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