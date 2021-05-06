import React from 'react';
import withRanking from '../hoc/withRanking';

const SongCard = ({ title, songLength, rank }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{songLength}</p>
        <p>Song Rank: {rank}</p>
      </div>
    )
}

export default withRanking(SongCard);