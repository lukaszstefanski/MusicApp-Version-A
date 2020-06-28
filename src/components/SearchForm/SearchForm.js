import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../Input';
import SubmitButton from '../Button/SubmitButton';
import ResetButton from '../Button/ResetButton';

import {
    fetchTrack,
    resetFetchedTracks,
} from '../../data/actions/tracks.action';

import './SearchForm.scss';

class SearchForm extends Component {
    constructor() {
        super();
        this.inputFieldRef = React.createRef();
    }

    fetchDataOnClick = (event) => {
        const { fetchTrack } = this.props;
        const searchFieldValue = this.inputFieldRef.current.value;

        event.preventDefault();
        return fetchTrack(searchFieldValue);
    };

    render() {
        const { resetFetchedTracks } = this.props;

        return (
            <form className="searchForm">
                <Input
                    ref={this.inputFieldRef}
                    type="text"
                    placeholder={`Provide track or artist name`}
                    className="input"
                />
                <SubmitButton
                    label="Search"
                    type="submit"
                    onClick={(event) => this.fetchDataOnClick(event)}
                />
                <ResetButton
                    label="Reset"
                    type="reset"
                    onClick={() => resetFetchedTracks()}
                />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTrack: (trackName) => dispatch(fetchTrack(trackName)),
    resetFetchedTracks: () => dispatch(resetFetchedTracks()),
});

export default connect(null, mapDispatchToProps)(SearchForm);
