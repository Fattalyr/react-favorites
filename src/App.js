import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import List from './list/List.js';
import Edit from './edit/Edit.js';
import './App.css';
import {
    Route,
    Switch,
    Redirect,
    NavLink,
    Link
} from 'react-router-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            persons: [],
            page: {title: 'Главная'},
            selected: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePageDataChange = this.handlePageDataChange.bind(this);
    }

    handlePageDataChange(data) {
        if (typeof(data) === 'object') {
            if (typeof(data.title) === 'string') {
                this.setState({page: data});
            }
        }
    }

    handleClick(id) {
        const person = this.state.persons.find((item) => item._id == id);
        if (person !== undefined) {
            this.setState({selected: person});
        }
        console.log(person.name + ' ' + person.gender + ' ' + person._id);
    }

    handleChange(e) {
        // this.setState({selected: e.target.value});
        // let person = this.state.persons.filter(item => item._id === e._id);
        let newSelected = Object.assign(this.state.selected, {name: e});
        let newFriendsList = this.state.persons.slice();
        let pos = newFriendsList.findIndex(item => item._id === this.state.selected._id);
        newFriendsList[pos].name = e;
        this.setState({selected: newSelected});
        this.setState({persons: newFriendsList});
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
                    <NavLink
                        activeClassName="active"
                        to="/list/"
                        className="button button_round"
                    >
                        <i className="fa fa-address-book" />
                    </NavLink>
                </div>
                <div className="header">
                    <div className="header__logo">
                        <Link to="/">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="header__header">
                        <h1>{this.state.page.title || 'React List Manager'}</h1>
                    </div>
                </div>

                <Switch>
                    <Redirect from="/" exact to="/list/" />
                    <Route
                        path='/edit/:id'
                        render={(props) => <Edit selected={this.state.selected} onChange={this.handleChange} onTitleChange={this.handlePageDataChange} {...props} />}
                    />
                    <Route
                        path='/list/'
                        render={(props) => <List persons={this.state.persons} selected={this.state.selected} onClick={this.handleClick} onTitleChange={this.handlePageDataChange} {...props} />}
                    />
                </Switch>

                {/*{loading*/}
                    {/*? 'Loading persons ...'*/}
                    {/*:  <List*/}
                        {/*persons={this.state.persons}*/}
                        {/*selected={this.state.selected}*/}
                        {/*onClick={this.handleClick}*/}
                       {/*/>*/}
                {/*}*/}

            </div>
        );
    }
}

export default App;
