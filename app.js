import { animals } from './animals';
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 

const container = document.getElementById('app'); //create container to reference HTML element 'app' 

const root = createRoot(container); //create root as reference point 

const title = ''; 

function displayFact(e) {
  const selectedAnimal = e.target.alt; //get name of animal 
  const index = Math.floor(Math.random() * animals[selectedAnimal].facts.length); //generate between 0 - 2 
  const funFact = animals[selectedAnimal].facts[index]; 
  document.getElementById('fact').innerHTML = funFact; 
} 

const images = []; //array of images 

for (const animal in animals){
  const image = (
      <img 
        onClick={displayFact}
        key={animal}
        className='animal' 
        alt={animal}
        src={animals[animal].image}
        ariaLabel={animal}
        role='button' />
    );
  images.push(image);
}; 



const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>; 

const animalFacts = (
  <div>
    <h1>{title == '' && 'Click an animal for a fun fact' }</h1>
    {background}
    <p id='fact'></p>
    <div className='animals'>{images}</div>
  </div>
  ); 


root.render(animalFacts); 
