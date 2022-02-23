import React from "react";
import PropTypes from 'prop-types'

class Email extends React.Component {
    render() {
        const { handleText, email} = this.props
        return (
            <div>
          <label>Email: 
          <input
          onChange={handleText}
          value={email}
          name="email"
          type="email" />
            { !email.match(/^\S+@\S+$/i)
              ? ' -email inválido- ' : ' -ok- ' }
          </label>
            </div>
         
        )
    }
}
Email.propTypes = {
    email: PropTypes.string.isRequired,
    handleText: PropTypes.func.isRequired,
}
export default Email