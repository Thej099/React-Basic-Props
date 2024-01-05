import React from 'react'
import PropTypes from 'prop-types'

function Login(props) {
    return (
        <div>
            <h3>Welcome to {props.name} you have been logged in for {props.time} minutes</h3>
            <p>Logged In : {props.isLoggedIn ? "Yes" : "No"}</p>
            {props.children}
        </div>
    )
}

Login.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number,
    isLoggedIn: PropTypes.bool
}

Login.defaultProps = {
    name: "Guest",
    time: 10,
    isLoggedIn: false
}

export default Login