import {
    FETCH_TRACK,
    RESET_FETCHED_TRACKS,
    ADD_TRACK_TO_FAVOURITE,
    GET_FAVOURITE_TRACKS,
    REMOVE_TRACK_FROM_FAVOURITE,
} from '../actions/tracks.action';

const TRACKS_INITIAL_STATE = {
    fetchedTracks: [],
    favouriteTracks: [],
};

const tracksReducer = (state = TRACKS_INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRACK:
            return {
                ...state,
                fetchedTracks: action.payload,
            };
        case RESET_FETCHED_TRACKS:
            return {
                ...state,
                fetchedTracks: [],
            };
        case ADD_TRACK_TO_FAVOURITE:
            return {
                ...state,
                favouriteTracks: [...state.favouriteTracks, action.track],
            };
        case GET_FAVOURITE_TRACKS:
            return state.favouriteTracks;
        case REMOVE_TRACK_FROM_FAVOURITE:
            return {
                ...state,
                favouriteTracks: state.favouriteTracks.filter(
                    (favouriteTrack) => favouriteTrack.mbid !== action.mbid
                ),
            };
        default:
            return state;
    }
};

export default tracksReducer;
