///Destructuring in function body

const DestructFunc = (props) => {
    const { firstName, fullName } = props
    return (
        <div>
            <h3>
                Hello {firstName} a.k.a {fullName}</h3>
        </div>
    )
}

export default DestructFunc