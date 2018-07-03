import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {

	render() {
		return (
			<li>{this.props.person.name}</li>
		);
	}
}

export default Edit;