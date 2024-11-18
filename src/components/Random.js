import {  useState, useEffect } from 'react';

async function get_random_image(){
    try {
        const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1";
        const resp = await fetch(url);
        const json = await resp.json;
        return json;   
    } catch (error) {
        console.log(error);
    }
    return 0;
}

function Random(){

    const generate = () => {
        const image = get_random_image().then((r) =>{
            return r;
        });
        console.log(image);
    }

    useEffect(generate, []);

    return(
        <>

        </>
    )
}

export default Random;