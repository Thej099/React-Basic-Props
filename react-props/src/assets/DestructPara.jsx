///Destructing in parameter

const DestructFunc = ({ firstName, fullName }) => {
    return (
        <div>
            <h3>Hello {firstName} a.k.a {fullName}</h3>
        </div>
    )
}

export default DestructFunc