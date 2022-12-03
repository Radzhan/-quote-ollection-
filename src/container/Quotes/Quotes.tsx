import React from 'react';
import { Outlet } from 'react-router-dom';
import Saidbar from '../../components/Saidbar/Saidbar';

const Quotes = () => {
    const arrayWithCategoty = [
        { title: 'All', id: 'all' },
        { title: 'Star Wars', id: 'star-wars' },
        { title: 'Motivational', id: 'motivational' },
        { title: 'Famouse people', id: 'famouse-people' },
        { title: 'Saying', id: 'saying' },
        { title: 'Humour', id: 'humour' },
    ];

    const createSaidbar = arrayWithCategoty.map(obj => {
        return <Saidbar key={obj.id} to={obj.id}>{obj.title}</Saidbar>;
    })

    return (
        <div className='d-flex justify-content-around'>
            <div >
                {createSaidbar}
            </div>
            <Outlet />
        </div>
    );
};

export default Quotes;