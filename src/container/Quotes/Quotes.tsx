import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Quotes = () => {
    const arrayWithCategoty = [
        { title: 'Star Wars', id: 'star-wars' },
        { title: 'Motivational', id: 'motivational' },
        { title: 'Famouse people', id: 'famouse-people' },
        { title: 'Saying', id: 'saying' },
        { title: 'Humour', id: 'humour' },
    ];

    const createSaidbar = arrayWithCategoty.map(obj => {
        return (
            <ul className='d-flex align-items-start' key={obj.id}>
                <li>
                    <Link key={obj.id} to={'/quote/' + obj.id}>
                        {obj.title}
                    </Link>
                </li>
            </ul>);
    })

    return (
        <div className='d-flex justify-content-around'>
            <div >
                <Link to={'/'}>All</Link>
                {createSaidbar}
            </div>
            <Outlet />
        </div>
    );
};

export default Quotes;