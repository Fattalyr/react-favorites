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
        console.log(this.props);
        const selected = this.props.selected !== null;
        const name = (this.props.selected !== undefined) && selected ? this.props.selected.name : null;
		return (
            <div>
                {selected
                    ? <input
                        value={name}
                        onChange={this.handleChange}
                    /> : 'Nothing is selected yet.'
                }
            </div>
		);
	}
}

export default Edit;