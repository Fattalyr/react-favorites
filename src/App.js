import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import List from './list/List.js';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            persons: []
        }
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
        return (
            <div className="outer">

                <div className="toppanel">

                </div>
                <div className="header">
                    <div className="header__logo"><img className="logo" src={logo} alt="" /></div>
                    <div className="header__header"><h1>React List Manager</h1></div>
                </div>
                {loading
                    ? 'Loading persons ...'
                    :  <List persons={this.state.persons} />
                }

            </div>
        );
    }
}

export default App;
