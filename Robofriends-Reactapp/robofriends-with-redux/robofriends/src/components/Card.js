import React from 'react';

const Card=(props)=>{
    return(
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  alt='Robots' src={`https://robohash.org/${props.id}?size=150x150`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;

/*const Card=(props)=>{
    const {name,email,id}=props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  alt='Robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
*/

//OR

/*
const Card=({name,email,id})=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  alt='Robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
*/
//OR
