import React, { Component } from 'react';

const SearchBar = () => {
	return (
		<div className="row">
			<div className="col-sm-12">
				<div className="form-group searchbar">
					<input type="text" placeholder="Поиск..." className="form-control"/>
				</div>
			</div>
		</div>
	)
}

export default SearchBar;