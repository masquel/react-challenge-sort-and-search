import React, {Component} from 'react';

const ToolBar = () => {
	return (
		<div className="row">
			<div className="col-sm-12">
				<div className="toolbar">
					<button className="btn btn-default">
						<i className="icon fa fa-sort-alpha-asc"></i>
						Сортировать по имени
					</button>
					<button className="btn btn-default">
						<i className="icon fa fa-sort-numeric-desc"></i>
						Сортировать по возрасту
					</button>
				</div>
			</div>
		</div>
	)
}


export default ToolBar;