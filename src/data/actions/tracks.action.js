export const FETCH_TRACK = 'FETCH_TRACK';
export const RESET_FETCHED_TRACKS = 'RESET_FETCHED_TRACKS';
export const ADD_TRACK_TO_FAVOURITE = 'ADD_TRACK_TO_FAVOURITE';
export const GET_FAVOURITE_TRACKS = 'GET_FAVOURITE_TRACKS';
export const REMOVE_TRACK_FROM_FAVOURITE = 'REMOVE_TRACK_FROM_FAVOURITE';

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const fetchTrack = (trackName) => {
    const url = `${API_URL}track.search&track=${trackName}&api_key=${API_TOKEN}&format=json`;
    return (dispatch) => {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                return dispatch({
                    type: FETCH_TRACK,
                    payload: data.results.trackmatches.track,
                });
            })
            .catch((error) => console.log(error));
    };
};

export const resetFetchedTracks = () => ({
    type: RESET_FETCHED_TRACKS,
});

export const addTrackToFavourite = (track) => ({
    type: ADD_TRACK_TO_FAVOURITE,
    track,
});

export const getFavouriteTracks = () => ({
    type: GET_FAVOURITE_TRACKS,
});

export const removeFavouriteTrack = (mbid) => ({
    type: REMOVE_TRACK_FROM_FAVOURITE,
    mbid,
});
