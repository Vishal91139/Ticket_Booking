import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../public/stylesheets/HomePage.css'; 
import Card from './Card';


const HomePage = () => {

  const scrollContainerRef = useRef(null);
  
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left:-1500,
      behavior: 'smooth',
    })
  }

  const scrollRight  = () => {
    scrollContainerRef.current.scrollBy({
      left:1500,
      behavior: 'smooth',
    })
  }

  const recommended_movies = [
    {
      "name": "Pushpa 2: The Rule",
      "rating": 8.5,
      "image_url": "src/assets/Recommend_movies/Pushpa2.jpg"
    },
    {
      "name": "Jawan",
      "rating": 8.0,
      "image_url": "src/assets/Recommend_movies/Jawan.avif"
    },
    {
      "name": "Salaar",
      "rating": 8.4,
      "image_url": "src/assets/Recommend_movies/salaar.webp"
    },
    {
      "name": "O2",
      "rating": 8.0,
      "image_url": "src/assets/Recommend_movies/O2.jpeg"
    },
    {
      "name": "Amaran",
      "rating": 8.6,
      "image_url": "src/assets/Recommend_movies/Amaran.webp"
    },
    {
      "name": "RRR",
      "rating": 9.0,
      "image_url": "src/assets/Recommend_movies/RRR.jpg"
    },
    {
      "name": "Kantara",
      "rating": 8.2,
      "image_url": "src/assets/Recommend_movies/Kantara.jpg"
    },
    {
      "name": "Fighter",
      "rating": 6.2,
      "image_url": "src/assets/Recommend_movies/Fighter.avif"
    },
    {
      "name": "Hanu Man",
      "rating": 7.8,
      "image_url": "src/assets/Recommend_movies/Hanu_Man.jpg"
    },
    {
      "name": "Shakhahaari",
      "rating": 7.9,
      "image_url": "src/assets/Recommend_movies/Shakhahaari.jpg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Ticketify</h1>
        <p>Your one-stop platform to book movies, events, and more!</p>
        <button className="cta-button">Explore Now</button>
      </div>
      
      <div className='relative'>
      <div ref={scrollContainerRef}
       className='flex  overflow-x-auto whitespace-nowrap py-2 px-2 scrollbar-hide'>
        
        <div>
          <button onClick={scrollLeft}
          className='absolute left-19 top-44 bg-white w-12 h-12 rounded-full'>
            <img className='block ml-1 p-2 w-auto h-auto' src='src/assets/Icons/arrow_prev.png' width='auto' height='auto' alt=''/>
          </button>

          <button onClick={scrollRight}
          className='absolute right-2 top-44 bg-white w-12 h-12 rounded-full'>
            <img className='block mr-1 p-2 w-auto h-auto' src='src/assets/Icons/arrow_next.png' width='auto' height='auto' alt='' />
          </button>
        </div>

        {recommended_movies.map(function(elem,idx){
        return <Card key={idx} movie_name={elem.name} rating={elem.rating} image={elem.image_url} />
      })}
      </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Ticketify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
