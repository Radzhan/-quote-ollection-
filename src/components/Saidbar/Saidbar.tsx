import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props extends PropsWithChildren {
    to: string;
}

const Saidbar: React.FC<Props> = ({ to, children }) => {
    return (
        <ul className='d-flex align-items-start'>
            <li>
                <Link to={'/quote/' + to}>
                    {children}
                </Link>
            </li>
        </ul>
    );
};

export default Saidbar;