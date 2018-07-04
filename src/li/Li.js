import React, { Component } from 'react';
import './Li.css';

export default class Li extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
			<li
				onClick={this.props.onClick}
			>
				{this.props.person.name}
			</li>
		);
	}
}
