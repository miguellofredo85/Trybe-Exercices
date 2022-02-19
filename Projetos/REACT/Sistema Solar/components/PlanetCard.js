import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <div className="solar-system">
          <img
            className={ planetName }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
          <p data-testid="planet-name">{planetName}</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
