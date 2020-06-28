import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListButton from '../Button/ListButton';

import { getTrackInfo } from '../../data/fetch/getTrackInfo.fetch';
import { getSimilarTracks } from '../../data/fetch/getSimilarTracks.fetch';
import { addTrackToFavourite } from '../../data/actions/tracks.action';

import './List.scss';

class List extends Component {
    render() {
        const { fetchedTracks, addTrackToFavourite } = this.props;
        return (
            fetchedTracks.length > 0 && (
                <div className="list">
                    <div className="listHeader">
                        <div className="name">Name</div>
                        <div className="artist">Artist</div>
                    </div>
                    <div className="listBody">
                        {fetchedTracks.map((data, index) => (
                            <div key={index} className="row">
                                {data.name && (
                                    <div className="name">{data.name}</div>
                                )}
                                {data.artist && (
                                    <div className="artist">{data.artist}</div>
                                )}
                                {data.url && (
                                    <a href={data.url} target="blank">
                                        <ListButton
                                            label="Open"
                                            type="button"
                                        />
                                    </a>
                                )}
                                <ListButton
                                    label="Info"
                                    type="button"
                                    onClick={() =>
                                        getTrackInfo(data.artist, data.name)
                                    }
                                />
                                <ListButton
                                    label="Similar"
                                    type="button"
                                    onClick={() =>
                                        getSimilarTracks(data.artist, data.name)
                                    }
                                />
                                <ListButton
                                    label="Add"
                                    type="button"
                                    onClick={() => addTrackToFavourite(data)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => ({
    fetchedTracks: state.tracksReducer.fetchedTracks,
});

const mapDispatchToProps = (dispatch) => ({
    addTrackToFavourite: (data) => dispatch(addTrackToFavourite(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
