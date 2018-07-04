import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

	render() {
        const name = this.props.selected.name;
		return (
			<input value={name} onChange={this.handleChange} />
		);
	}
}

export default Edit;