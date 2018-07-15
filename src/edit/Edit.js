import React, { Component } from 'react';
import './Edit.css';
import { LocalStorageService } from '../services/';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFavChange = this.handleFavChange.bind(this);
        this.state = {favorite: false};
    }

    id = '';

    _isFavorite = false;
    set isFavorite(val) {
        if (this.id !== undefined) {
            this.pushToStorage(this.id, {favorite: val});
            this.setState({favorite: val});
        }
        this._isFavorite = val;
    }
    get isFavorite() {
        return this._isFavorite;
    }

    storage = new LocalStorageService();

    pageData = {
        title: 'Редактирование друга'
    };

    handleFavChange() {
        this.isFavorite = !this.isFavorite;
    }

    onTitleChange = () => {
        this.props.onTitleChange(this.pageData);
    };

    componentDidMount() {
        this.onTitleChange();
        this.storage.setValue('selected', this.props.selected);
        if (this.props.selected !== undefined && this.props.selected !== null) {
            this.id = this.props.selected._id;
            const friendData = this.readFromStorage(this.id);
            this.isFavorite = friendData.favorite !== undefined ? friendData.favorite : false;
        }
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.props.onChange(e.target.value);
    }

    readFromStorage(id) {
        const friend = this.storage.getValue(id);
        if (friend === undefined) {
            return {};
        }
        if (friend.favorite === undefined) {
            return {};
        }
        return (friend);
    }

    pushToStorage(id, value) {
        this.storage.setValue(id, value);
    }

    render() {
        const selected = this.props.selected !== null;
        const name = (this.props.selected !== undefined) && selected ? this.props.selected.name : null;
        const id = (this.props.selected !== undefined) && selected ? this.props.selected._id : null;
        const gender = (this.props.selected !== undefined) && selected ? this.props.selected.gender : null;
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
                                <span>{id}</span>
                            </div>
                        </div>
                        <div className="friend-card__row">
                            <div className="friend-card__cell friend-card__cell_width-40 friend-card__cell_ta-right">
                                <label htmlFor="friend-card__name">Имя:</label>
                            </div>
                            <div className="friend-card__cell friend-card__cell_width-60">
                                <input
                                    id="friend-card__name"
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="friend-card__row">
                            <div className="friend-card__cell friend-card__cell_width-45 friend-card__cell_ta-right">
                                <div className="checkbox_fav checkbox_fav-right">
                                    <input id="friend-card__favorite"
                                        onChange={this.handleFavChange}
                                        type="checkbox"
                                        checked={this.isFavorite}
                                    />
                                    <label htmlFor="friend-card__favorite">
                                        <i className="fa fa-heart"/>
                                    </label>
                                </div>
                            </div>
                            <div className="friend-card__cell friend-card__cell_width-55">
                                {
                                    gender === 'female' ?
                                        <label htmlFor="friend-card__favorite">избранная</label> :
                                        <label htmlFor="friend-card__favorite">избранный</label>
                                }
                            </div>
                        </div>
                    </div>
                    : 'Nobody is selected yet.'
                }
            </div>
        );
    }
}

export default Edit;