import React from "react";
import AlbumsList from './albumsList';
import AlbumCard from './albums/albumCard';

const App = () => (
  <>
    <AlbumCard {...AlbumsList} />
  </>
);

export default App;
