import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListButton from '../Button/ListButton';

import { removeFavouriteTrack } from '../../data/actions/tracks.action';
import { getTrackInfo } from '../../data/fetch/getTrackInfo.fetch';
import { getSimilarTracks } from '../../data/fetch/getSimilarTracks.fetch';

import './FavouriteList.scss';

class FavouriteList extends Component {
    render() {
        const { favouriteTracks, removeFavouriteTrack } = this.props;

        return (
            favouriteTracks.length > 0 && (
                <div className="list">
                    <div className="listHeader">
                        <div className="name">Name</div>
                        <div className="artist">Artist</div>
                    </div>
                    <div className="listBody">
                        {favouriteTracks.map((data, index) => (
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
                                    label="Remove"
                                    type="button"
                                    onClick={() =>
                                        removeFavouriteTrack(data.mbid)
                                    }
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
    favouriteTracks: state.tracksReducer.favouriteTracks,
});

const mapDispatchToProps = (dispatch) => ({
    removeFavouriteTrack: (mbid) => dispatch(removeFavouriteTrack(mbid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList);
