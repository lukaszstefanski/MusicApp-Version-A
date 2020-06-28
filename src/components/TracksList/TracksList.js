import React from 'react';
import { connect } from 'react-redux';

const TracksList = ({ tracks }) => (
    <ul>
        {tracks.list.map((track, index) => (
            <li key={index}>{track}</li>
        ))}
    </ul>
);

const mapStateToProps = (state) => ({
    tracks: state.tracksReducer,
});

export default connect(mapStateToProps, {})(TracksList);
