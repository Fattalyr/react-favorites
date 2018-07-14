import React, { Component } from 'react';
import './Li.css';
import { Link } from 'react-router-dom';

export default class Li extends Component {

    constructor(props) {
        super(props);
    }

	render() {
        let name = this.props.person.name;
        let id = this.props.person._id;
		return (
			<li
				onClick={this.props.onClick}
			>
				<Link to={{ pathname: '/edit/' + id }}>{name}</Link>
			</li>
		);
	}
}
