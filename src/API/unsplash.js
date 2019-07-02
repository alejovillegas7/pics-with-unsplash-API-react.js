import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4154224f90e492187f39d39984efaa22c59199af1ff5482066718774240f096b'
    }
});