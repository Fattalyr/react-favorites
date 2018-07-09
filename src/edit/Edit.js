import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.props.onChange(e.target.value);
    }

	render() {
        const name = this.props.selected.name;
		return (
			<input
                value={name}
                onChange={this.handleChange}
            />
		);
	}
}

export default Edit;