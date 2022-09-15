import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './AlbumItem';
import Button from '../../shared/components/FormElements/Button';
import './AlbumList.css';

const AlbumList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(album => (
        <PlaceItem
          id={album.id}
          type={album.id}
          images={album.images}
          name={album.name}
          artist={album.artist}
          tracks={album.tracks}  
          date = {album.date}      
        />
      ))}
    </ul>
  );
};

export default AlbumList;
