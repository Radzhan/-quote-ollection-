import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    text:string;
    author: string;
    id: string;
    remove: MouseEventHandler;
}

const BodyQuote : React.FC<Props>= ({text, author, id, remove}) => {
    
    return (
        <div className="card">
            <div className="card-header">
                Quote
                <button className='btn btn-danger mx-3' onClick={remove}>delete</button>
                <Link to={'/quotes/' + id + '/edit'} className='btn btn-primary'>Edit</Link>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{text}</p>
                    <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
                </blockquote>
            </div>
        </div>
    );
};

export default BodyQuote;