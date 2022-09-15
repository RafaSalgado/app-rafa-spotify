import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './AlbumItem.css';

const AlbumItem = props => {
  const { isLoading } = useHttpClient();
  return (
    <React.Fragment>     
      <li className="album-item">
        <Card className="album-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="album-item__image">
            <img src={props.images[0].url} alt={props.title} />
          </div>
          <div className="album-item__info">
            <h2>{props.type}</h2>
            <h3>{props.name}</h3>
            <p> <b> lanzamiento: </b> {props.date}</p>
            <p> <b> canciones: </b>{props.tracks}</p>
            <p> <b> artista: </b>{props.artist}</p>
          </div>        
        </Card>
      </li>
    </React.Fragment>
  );
};

export default AlbumItem;
