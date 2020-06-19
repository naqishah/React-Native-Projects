import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {

        try{
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
            setErrorMessage('');
        
        } catch (err) {
            setErrorMessage('Ops something went wrong. Pleae try again later!!!');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage]; 
};

