const { response } = require('express');
const {validationResult} = require('express-validator');
const HttpError = require('../models/http-error');
const service = require('../services/service');


const getAlbumByName = async(req, res, next) => {    
    const errors = validationResult(req);
    const albumId = req.params.album;
    if(!errors.isEmpty()){
        console.log(errors);       
    }
    const response = await service.getTracksService(albumId);
    const albums = response.tracks.items.map(a => a.album);
    const infoAlbums = albums.map(i => (
      {
        type: i.type,        
        name: i.name,
        artist: i.artists[0].name,
        date: i.release_date,
        tracks: i.total_tracks,
        images: i.images,
      }
    ))
    res.json({infoAlbums});
  };

exports.getAlbumByName = getAlbumByName;