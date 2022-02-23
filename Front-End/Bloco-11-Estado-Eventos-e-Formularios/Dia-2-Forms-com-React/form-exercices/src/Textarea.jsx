import React from "react";
import Proptypes from 'prop-types';

class Textarea extends React.Component {
    render() {
        const { inputText, handleText } = this.props
        return (
            <label>
            Opinion:
            <textarea
            value={inputText}
            name="inputText"
            onChange={handleText}
            />
            {inputText > 100? 'ja falou demais' : ''};
            </label>
        )
    }
}

Textarea.propTypes = {
    inputText: Proptypes.string.isRequired,
    handleText: Proptypes.func.isRequired,
}

export default Textarea;
