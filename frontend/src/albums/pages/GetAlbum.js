import React, {  useState } from 'react';
import AlbumList from '../components/AlbumList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import "bootstrap/dist/css/bootstrap.min.css"
import './album.css'

import { useHttpClient } from '../../shared/hooks/http-hook';


const GetAlbum = () => {
  const [loadedAlbums, setLoadedAlbums] = useState();
  const [search, setSearch] = useState('spinetta');
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
 

  const fetchPlaces = async () => {
      try {       
        const responseData = await sendRequest( `http://localhost:5000/api/search/${search}` );
        setLoadedAlbums(responseData.infoAlbums);
        console.log(responseData.infoAlbums)
      } catch (err) {
        console.error(err);
      }
    };
 
    const handleChange = e => {      
      fetchPlaces();
      setSearch(e.target.value);  
    }
  
  return (
      <>
        <ErrorModal error={error} onClear={clearError} />       
        <div>
            <input className='form-control input-search'
              placeholder='search your album'                      
              onChange={handleChange}/>            
        </div>                 

        {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
        )}
        {!isLoading && loadedAlbums && (
            <AlbumList items={loadedAlbums}  />
        )}
      </>
  );
};

export default GetAlbum;
