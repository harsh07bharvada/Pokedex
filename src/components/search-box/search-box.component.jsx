import React from 'react';

export const SearchBox=({placeholder,handleChange}) =>{
    return(
        <div>
            <input className="rounded-lg text-sm font-bold text-gray-500 placeholder-gray-500::placeholder bg-gray-800 h-10 px-10 " type="search"
                placeholder={placeholder}
                onChange={handleChange}
            ></input>
        </div>
    )
}