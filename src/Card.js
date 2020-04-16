import React from 'react';

const Card = ({ image, name, number, position }) => {
    return(
        <div className='bg-dark-red dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt={name} src={image} width='200' height='240' />
            <div>
                <h3>{name}</h3>
                <p>{position}</p>
                <p>{number}</p>
            </div>
        </div>
    );
}

export default Card;