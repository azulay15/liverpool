import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            type='search' 
            placeholder='search player' 
            className='pa3 ba b--red bg-lightest-red'
            onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;