const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const getSimilarTracks = (artistName, trackName) => {
    const url = `${API_URL}track.getsimilar&artist=${artistName}&track=${trackName}&api_key=${API_TOKEN}&format=json`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.similartracks);
            return data.similartracks;
        })
        .catch((error) => console.log(error));
};
