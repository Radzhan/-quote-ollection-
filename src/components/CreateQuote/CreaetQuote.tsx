import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { Request } from '../../types';
import BodyQuote from '../BodyQuote/BodyQuote';

const CreaetQuote = () => {
    const [quote, setQuote] = useState<Request[]>([]);
    const {name} = useParams();

    const getCategory = useCallback(async () => {

        let request = await axiosApi.get(`/quotes.json?orderBy="category"&equalTo="${name}"`);
        if (name === 'all'){
            request = await axiosApi.get(`/quotes.json`);
        }

        if (request.data !== null){
            const setPosts = Object.keys(request.data).map(key => {
                const post = request.data[key];
                post.id = key;
    
                return post;
            });
    
            setQuote(setPosts);
        }
    }, [name]);

    useEffect(() => {
        getCategory().catch(console.error);
    } ,[getCategory]);

    const newQuotes = quote.map(quote => {
        return <BodyQuote key={quote.id} text={quote.text} author={quote.author} id={quote.id}/>
    })

    return (
        quote.length !== 0 ? <div>
            {newQuotes}
        </div> : <div>this category has no quotes</div>
    );
};

export default CreaetQuote;