import React, { Component } from 'react';
import Li from '../li/Li.js';
import './Favorites.css';
import { LocalStorageService } from '../services/';

class Favorites extends Component {

    pageData = {
    	title: 'Избранные'
	};

    storage = new LocalStorageService();

    onTitleChange = () => {
		this.props.onTitleChange(this.pageData);
	};

    componentDidMount() {
    	this.onTitleChange();
	}

    checkIfFavorite(person) {
    	if (person === undefined) { return false; }
    	let id = person._id;
    	let data = this.storage.getValue(id);
    	if (data === undefined) { return false; }
    	if (data.favorite === undefined) { return false; }
    	if (data.favorite === true) { return true; }
	}

	render() {
		return (
			<ul className="friends-list">
                {
                    this.props.persons.length > 0 ?
					(this.props.persons.map((obj, i) => {
						if (this.checkIfFavorite(obj)) {
                            return <Li
                                key={this.props.persons[i]._id}
                                person={this.props.persons[i]}
                                onClick={() => this.props.onClick(this.props.persons[i]._id)}
                            />
						}
					})) :
                'Loading favorites.'}
            </ul>
		);
	}
}

export default Favorites;
