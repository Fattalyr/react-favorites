import React, { Component } from 'react';
import Li from '../li/Li.js';
import './List.css';

class List extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
			<ul className="friends-list">
                {this.props.persons.map((obj, i) => <Li
                    key={this.props.persons[i]._id}
                    person={this.props.persons[i]}
                    onClick={() => console.log(i)}
                />)}
            </ul>
		);
	}
}

export default List;
