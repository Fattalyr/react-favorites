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
        const selected = this.props.selected !== null;
        const name = (this.props.selected !== undefined) && selected ? this.props.selected.name : null;
        const id = (this.props.selected !== undefined) && selected ? this.props.selected._id : null;
		return (
            <div>
                {selected
                    ? <div className="friend-card">
                        <div className="friend-card__row">
                            <div className="friend-card__cell friend-card__cell_double friend-card__cell_ta-center">
                                <h2>{ name }</h2>
                            </div>
                        </div>
                        <div className="friend-card__row">
                            <div className="friend-card__cell friend-card__cell_width-40 friend-card__cell_ta-right">
                                <span>ID:</span>
                            </div>
                            <div className="friend-card__cell friend-card__cell_width-60">
                                <span>{ id }</span>
                            </div>
                        </div>
                        <div className="friend-card__row">
                            <div className="friend-card__cell friend-card__cell_width-40 friend-card__cell_ta-right">
                                <label for="friend-card__name">Имя:</label>
                            </div>
                            <div className="friend-card__cell friend-card__cell_width-60">
                                <input
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    : 'Nothing is selected yet.'
                }
            </div>
		);
	}
}

export default Edit;