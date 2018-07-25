import React, { Component } from 'react';
import './Stars.css';
import { LocalStorageService } from '../services/';

export class Stars extends Component {

    constructor(props) {
        super(props);
        this.state = {stars: 0};
    }

    storage = new LocalStorageService();

    getStars(id) {
        if (id === undefined) { return 0; }
        let data = this.storage.getValue(id);
        if (data === undefined) { return 0; }
        if (data.stars === undefined) { return 0; }
        let stars = parseInt(data.stars, 10);
        if (stars.toString() !== 'NaN') {
            stars = (stars >= 0 && stars <= 5) ? stars : 0;
            this.setState({stars: stars});
            return stars;
        }
        console.log(id, stars);
        return 0;
    }

    setStars(stars) {
        let id = this.props.person.id;
        this.storage.setValue(id, {stars: stars});
        this.setState({stars: stars});
        console.log(this.props.person.id, stars);
    }

    componentDidMount() {
        this.getStars(this.props.person.id);
    }

    render() {
        let stars = this.state.stars;
        // console.log(this.props.person.id, stars);
        return (
            <span>
            {
                this.props.person !== undefined
                ? <span className="stars">
                    <i onClick={() => this.setStars(1)} className={(stars >= 1) ? 'fa fa-star gold' : 'fa fa-star '} />
                    <i onClick={() => this.setStars(2)} className={(stars >= 2) ? 'fa fa-star gold' : 'fa fa-star '} />
                    <i onClick={() => this.setStars(3)} className={(stars >= 3) ? 'fa fa-star gold' : 'fa fa-star '} />
                    <i onClick={() => this.setStars(4)} className={(stars >= 4) ? 'fa fa-star gold' : 'fa fa-star '} />
                    <i onClick={() => this.setStars(5)} className={(stars === 5) ? 'fa fa-star gold' : 'fa fa-star '} />
                </span> : ''
            }
            </span>
        );
    }

}