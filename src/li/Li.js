import React, { Component } from 'react';
import './Li.css';

export default class Li extends Component {

	render() {
		return (
			<li>{this.props.person.name}</li>
		);
	}
}
