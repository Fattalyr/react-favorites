import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import List from './list/List.js';
import Edit from './edit/Edit.js';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            persons: [],
            selected: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        const person = this.state.persons.find((item) => item._id == id);
        if (person !== undefined) {
            this.setState({selected: person});
        }
        alert(person.name, person.sex, person._id);
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        alert('HandleChange works!');
    }

    componentWillMount() {

        let url = "http://localhost:3000/assets/generated.json";

        axios.get(url)
            .then((res) => {
                const persons = res.data;
                this.setState({persons});
                console.log('App ', this.state);
            })
            .catch(function (err) {
                console.error(err);
            });

    }
    render() {
        const loading = this.state.persons.length === 0;
        let selected = this.state.selected !== null;
        return (
            <div className="outer">

                <div className="toppanel">

                </div>
                <div className="header">
                    <div className="header__logo"><img className="logo" src={logo} alt="" /></div>
                    <div className="header__header"><h1>React List Manager</h1></div>
                </div>
                {selected
                    ? <Edit
                        selected={this.state.selected}
                        onChange={this.handleChange}
                    />
                    : 'Nothing is selected yet.'
                }

                {loading
                    ? 'Loading persons ...'
                    :  <List
                        persons={this.state.persons}
                        selected={this.state.selected}
                        onClick={this.handleClick}
                       />
                }

            </div>
        );
    }
}

export default App;
