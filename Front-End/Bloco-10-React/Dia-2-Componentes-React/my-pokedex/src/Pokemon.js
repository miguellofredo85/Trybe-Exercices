import React from "react";
import PropTypes from 'prop-types'

class Pokemon extends React.Component{
    render(){
        const { pokemon: {name, type, averageWeight, image} } = this.props;
        return(
            <div className="pokemon">
                <div>
                <div>{ name }</div>
                <div>{ type }</div>
                <div>{`Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</div>
                </div>  
                <img  src={ image } alt={ name } />
            </div>
        );
    }
}

Pokemon.propTypes = {
     pokemon: PropTypes.shape ({
         name: PropTypes.string,
         type: PropTypes.string,
         averageWeight: PropTypes.shape({
             value: PropTypes.number,
             measurementUnit: PropTypes.string,
         }),
         image: PropTypes.string
     }).isRequired,
 };

export default Pokemon