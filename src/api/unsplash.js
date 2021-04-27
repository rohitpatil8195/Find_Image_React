//unsplash
import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 0dT_5kH5zXNC8VIXaBlnqUUF3OcoJYl5G4Ylecx12vo'
       } 
});