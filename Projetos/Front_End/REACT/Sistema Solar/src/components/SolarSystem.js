import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="container">
          { planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetImage={ planet.image }
            planetName={ planet.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
