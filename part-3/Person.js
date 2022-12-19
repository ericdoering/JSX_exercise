function Person(props){
    let voteEligable = props.age >= 18 ? "You can vote!" : "You will have to wait.";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <h2>Bio</h2>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
            </ul>
            Hobbies:
            {hobbies}
            <ul>
            </ul>
            <p>{voteEligable}</p>
        </div>
    )
}