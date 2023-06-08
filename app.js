import { animals } from './animals';
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 

const container = document.getElementById('app'); //create container to reference HTML element 'app' 

const root = createRoot(container); //create root as reference point 

const title = ''; 

//event handler 
function displayFact(e) {
  const selectedAnimal = e.target.alt; //get name of animal 
  const index = Math.floor(Math.random() * animals[selectedAnimal].facts.length); //generate between 0 - 2 
  
  //Assign the random fact with a const 
  const funFact = animals[selectedAnimal].facts[index];
  
  //Change the content of DOM object with id 'fact' 
  document.getElementById('fact').innerHTML = funFact; 
} 

const images = []; //array of images 

//for loop: add images of animals 
for (const animal in animals){
  const image = (
      <img 
        onClick={displayFact} //event listener 
        key={animal}
        className='animal' 
        alt={animal}
        src={animals[animal].image}
        ariaLabel={animal}
        role='button' />
    );
  images.push(image);
}; 


//Assign them each a constant so they can be changed easily later 

const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>; 

const animalFacts = (
  <div>
    <h1>{title == '' && 'Click an animal for a fun fact' }</h1>
    {background}
    <p id='fact'></p>
    <div className='animals'>{images}</div>
  </div>
  ); 

//render 'animalFacts' on page 'app' 
root.render(animalFacts); 
