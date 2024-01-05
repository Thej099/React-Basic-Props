import React from 'react'

const Greet = (props) => {
    return (
        <div>
            <h3>Hello {props.firstName} a.k.a {props.fullName}</h3>
        </div>
    )
}

export default Greet
