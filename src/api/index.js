import axios from 'axios';

export const getPlaceData = async ( type, sw, ne ) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lat,
                  tr_longitude: ne.lat,
                },
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
                }
        });    
        
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const hetWeatherData = async (lat, lng) => { 
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: { lon: lng, lat: lat },
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-key': '10d5438734mshe5eab6dd6a4ce40p1ad4a3jsneeb183b9770c'
      }
    });

    return data;
    catch (error) {
      console.log(error)
    }
  }
}