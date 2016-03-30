import React, {Component} from 'react';

const ToolBar = React.createClass({
	getInitialState(){
		return {
			orderAlpha: "asc",
			orderNumber: "asc"
		}
	},
	handleSortAlpha(){
		this.props.onUserSortSelect(
			'name',
			this.state.orderAlpha
		);
		this.setState({
			orderAlpha: (this.state.orderAlpha == 'asc') ? 'desc' : 'asc'
		})
	},
	handleSortDigit(){
		this.props.onUserSortSelect(
			'age',
			this.state.orderNumber
		);
		this.setState({
			orderNumber: (this.state.orderNumber === 'asc') ? 'desc' : 'asc' 
		})
	},
	render(){
		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="toolbar">
						<button className="btn btn-default" onClick={this.handleSortAlpha}>
							<i className={"icon fa fa-sort-alpha-" + this.state.orderAlpha}></i>
							{' '}
							Сортировать по имени
						</button>
						<button className="btn btn-default" onClick={this.handleSortDigit}>
							<i className={"icon fa fa-sort-numeric-" + this.state.orderNumber}></i>
							{' '}
							Сортировать по возрасту
						</button>
					</div>
				</div>
			</div>
		)
	}
})


export default ToolBar;