import React from 'react';
import SongContainer from './SongContainer';

const AlbumInfo = ({ title, artist, genres, songs }) => {
    return (
      <div>
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <ul>{genres.map(genre => <li>{genre}</li>)}</ul>
        <SongContainer songs={songs} />
      </div>
    );
}

export default AlbumInfo;