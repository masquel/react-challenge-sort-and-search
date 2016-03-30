import React, {Component} from 'react';
const ActiveUser = React.createClass({
	getInitialState(){
		return{
			loaded: false
		}
	},
	componentDidMount(){
		this.setState({loaded: true})
	},
	render(){
		if(this.state.loaded && this.props.data){
			return (
				<div className="thumbnail active-user text-center">
					<img src={"images/" + this.props.data.image + ".svg"} alt={this.props.data.image}/>
					<div className="thumbnail-caption">
						<h3>{this.props.data.name}</h3>
						<table className="table user-info table-responsive">
							<tbody>
								<tr>
									<td>Возраст:</td>
									<td>{this.props.data.age}</td>
								</tr>
								<tr>
									<td>Любимое животное:</td>
									<td>{this.props.data.image}</td>
								</tr>
								<tr>
									<td>Телефон</td>
									<td>8 {this.props.data.phone}</td>
								</tr>
							</tbody>
						</table>
						<p>
							<b>Любимая фраза:</b>
							{' '}
							{this.props.data.phrase}
						</p>
					</div>
				</div>
			)
		}else{
			return (
				<h3>Данных нет.</h3>
			)
		}
	}
})

export default ActiveUser;