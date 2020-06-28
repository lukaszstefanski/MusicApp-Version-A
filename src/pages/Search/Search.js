import React, { Component } from 'react';

import SearchForm from '../../components/SearchForm';
import List from '../../components/List';

import './Search.scss';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <div>
                    <h1>Search for track or artist</h1>
                    <SearchForm />
                </div>
                <List />
            </div>
        );
    }
}

export default Search;
