import React from 'react';

import './Info.scss';

const Info = () => (
    <div className="info">
        <h1>Informations about application</h1>
        <p>
            Application allows user to find tracks and add it to favourite list.
            Also there is opportunity to find similar tracks or get more
            informations.
        </p>
        <p>
            There is also possiblity to find some statistics, for example top
            artists by country.
        </p>
        <p>
            Main technology which was used is Javascript (React). Unfortunately
            there is no any back-end.
        </p>
        <p>
            Application was created thanks to{' '}
            <a
                href="https://www.last.fm/pl/api/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Last.fm API
            </a>{' '}
            which is free to use for non commercial use.
        </p>
    </div>
);

export default Info;
