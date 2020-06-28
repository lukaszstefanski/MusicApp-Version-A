import React, { Component } from 'react';

import FavouriteList from '../../components/FavouriteList';

import './Favourite.scss';

class Favourite extends Component {
    render() {
        return (
            <div className="favourite">
                <h1>Favourite list</h1>
                <FavouriteList />
            </div>
        );
    }
}

export default Favourite;
