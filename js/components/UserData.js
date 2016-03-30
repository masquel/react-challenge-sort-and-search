import React, {Component} from 'react';

const UserData = React.createClass({
	render(){
		return (
			<tr>
				<td><img className="user-image" src={"images/" + this.props.data.image + ".svg"} alt={this.props.data.image}/></td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
				<td>8 {this.props.data.phone}</td>
			</tr>
		)
	}
})

export default UserData;