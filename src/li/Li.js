import React, { Component } from 'react';
import './Li.css';

export default class Li extends Component {

    constructor(props) {
        super(props);
    }

	render() {
        let name = this.props.person.name;
		return (
			<li
				onClick={this.props.onClick}
			>
				{name}
			</li>
		);
	}
}
