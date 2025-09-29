import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:bg-amber-600 px-4'>
            <a href={route.path}>{route.name}</a>
          </li>
    );
};

export default Link;