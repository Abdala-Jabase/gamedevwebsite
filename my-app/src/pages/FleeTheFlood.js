import React from 'react';
import './FleeTheFlood.css';

function GameDescription() {
    return (
        <div className='background'>
            <h2>Flee the Flood</h2>
            <p className='description'>
                Embark on an epic adventure in <span className='highlight'>Flee the Flood</span>! As a brave explorer, you find yourself trapped on a mysterious island overtaken by a catastrophic flood. Your only hope of survival is to navigate through perilous waters, treacherous terrains, and cunning obstacles.
            </p>
            <p className='description'>
                Immerse yourself in an immersive gameplay experience where every decision counts. Solve mind-bending puzzles, uncover hidden treasures, and unravel the secrets of the island as you race against time to reach safety before the flood engulfs everything.
            </p>
            <p className='description'>
                With stunning visuals, gripping storyline, and dynamic gameplay, <span className='highlight'>Flee the Flood</span> will keep you on the edge of your seat. Will you conquer the challenges that lie ahead and escape the island's watery grip? <span className='highlight'>Play now and find out!</span>
            </p>
            <div className='button-container'>
                <a href='https://play.google.com/store/apps/details?id=com.aj.appdevelopmentgroup.fleetheflood' className='button' target='_blank' rel='noopener noreferrer'>Start Your Adventure</a>
            </div>
        </div>
    );
}

export default GameDescription;
