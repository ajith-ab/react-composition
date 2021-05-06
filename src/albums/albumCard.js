import React from 'react';
import AlbumInfo from './albumInfo';
import withRanking from '../hoc/withRanking';

const AlbumCard = props => {
    return (
      <div className="card">
        <img src={props.albumCoverUrl} />
        <p>Album Rank: {props.rank}</p>
        <AlbumInfo {...props} />
      </div>
    );
}

export default withRanking(AlbumCard);