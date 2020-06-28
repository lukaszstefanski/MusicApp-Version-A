const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const getTrackInfo = (artistName, trackName) => {
    const url = `${API_URL}track.getInfo&api_key=${API_TOKEN}&artist=${artistName}&track=${trackName}&format=json`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.track);
            return data.track;
        })
        .catch((error) => console.log(error));
};
