import React, { Component } from 'react';
import Li from '../li/Li.js';
import './Favorites.css';
import { LocalStorageService } from '../services/';

class Favorites extends Component {

    pageData = {
    	title: 'Избранные'
	};

    storage = new LocalStorageService();

    favorites = [];

    favoritesFilled = false;

    onTitleChange = () => {
		this.props.onTitleChange(this.pageData);
	};

    componentDidMount() {
    	this.onTitleChange();
        this.fillFavorites();
        console.log(this.favorites);
	}

    fillFavorites() {
    	let all = this.storage.getAll();
    	if (all === undefined) { return; }
    	if (this.props.persons.length === 0) { return; }
        for (const item in all) {
    		if (all.hasOwnProperty(item)) {
                if (all[item].favorite !== undefined) {
                	if (all[item].favorite === true) {
                        console.log(item, all[item].favorite);
                        const element = this.props.persons.find(el => el._id === item);
                        this.favorites.push(element);
					}
                }
			}
		}
        this.favoritesFilled = true;
	}

	render() {
		return (
			<ul className="friends-list">
                {
                	this.favoritesFilled && this.favorites.length > 0 ?
					(this.favorites.map((obj, i) =>
						<Li
                            key={this.favorites[i]._id}
                            person={this.favorites[i]}
                            onClick={() => this.props.onClick(this.favorites[i]._id)}
						/>
					)) :
                'Loading favorites.'}
            </ul>
		);
	}
}

export default Favorites;
