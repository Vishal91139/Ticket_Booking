import React from 'react'

const Card = (props) => {

  return (
    <>
    <div className='card bg-white m-7 inline-block text-black rounded'>
        <img className='h-72 w-56 max-w-none mb-2 object-fit' src={props.image} alt=''/>
        <h1 className='text-xl ml-1 leading-7 font-medium'>{props.movie_name}</h1>
        <h2 className='text-base ml-1 mb-2 font-semibold'>Rating: {props.rating}</h2>
        <div className='flex place-content-around mb-2'>
        <button className='p-1 px-4 font-semibold border-solid rounded-full hover:underline border-black border-2 '>Trailer</button>
        <button className='p-1 px-6 font-semibold border-solid rounded-full bg-orange-400 hover:bg-orange-500 hover:scale-105 '>Book</button>
        </div>
    </div>
    </>
  )
}

export default Card