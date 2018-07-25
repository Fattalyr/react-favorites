import React, { Component } from 'react';
import './Li.css';
import { Link } from 'react-router-dom';
import { Stars } from '../stars/Stars.js';

export default class Li extends Component {

	render() {
        let name = this.props.person.name;
        let id = this.props.person._id;
		return (
			<li
				onClick={this.props.onClick}
			>
                <span className="friend-name">
					<Link to={{ pathname: '/edit/' + id }}>{name}</Link>
				</span>
                <Stars person={{id}} />
			</li>
		);
	}
}
