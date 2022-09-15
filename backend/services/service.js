const axios = require('axios');
const qs = require('qs');
require('dotenv').config();



const getAuth = async () => {
    const client_id = '7e57268103844409a57ffda1313b72a2';
    const client_secret = '576c2c17aea44058a1a4129276bb3521';
    const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    console.log(response.data.access_token);   
    return response.data.access_token;
    
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}

const getTracksService = async (albumName) => {
    //request token using getAuth() function
    const access_token = await getAuth(); 
    const api_url = `https://api.spotify.com/v1/search?q=${albumName}&type=track`;
    try{
      const response = await axios.get(api_url, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      return response.data;
    }catch(error){
      console.log(error);
    }  
  };
  
  exports.getTracksService = getTracksService;