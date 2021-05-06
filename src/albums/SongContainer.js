import React from 'react';
import SongCard from './SongCard';

const SongContainer = ({ songs }) => {
    return (
      <div>
        {songs.map(song => <SongCard {...song} />)}
      </div>
    );
}

export default SongContainer;