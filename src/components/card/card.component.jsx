import React from 'react';
const images = require.context('../../../public/images/', true);

export const Card =(props)=>{

    
    const getIdFromURL = (url)=>{
       
        url = url.substring(0,url.length-1);
        let lastIndex = url.lastIndexOf("/");
        url = url.substring(lastIndex+1);
        return url;
    }
    return (

        <div className="card flex flex-col bg-white shadow-lg w-full md:w-1/5 h-56 m-4 rounded-md justify-center items-center hover:border-red-500"  key ={props.pokemon.name}>
            <div className="flex">
                <img className="h-32 w-32" src={images(`./`+getIdFromURL(props.pokemon.url)+`.svg`)} alt=""/>
            </div>
             
            <div className="flex font-semibold py-4 tracking-wide text-xl">{props.pokemon.name.toUpperCase()}</div>
        </div>
    );
}