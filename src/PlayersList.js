import React from 'react';
import Card from './Card';

const PlayersList = ({ players }) => {
    return (
        <div>
            {
                    players.map((player, i) => {
                        return (
                            <Card 
                                key={i}
                                number={players[i].number}
                                name={players[i].name}
                                position={players[i].position}
                                image={players[i].image}
                                />
                        );
                })
            }
        </div>
    );
}



export default PlayersList;