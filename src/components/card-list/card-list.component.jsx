import React from 'react';
import { Card } from '../card/card.component.jsx';

export const CardList = (props)=>{
    
    return(
        <div className="flex justify-between flex-wrap w-full h-full p-4">
            {
                props.pokemons.map(
                    pokemon => (
                        <Card pokemon={pokemon}/>
                    )
                )
            }
        </div>
    );
}