function Tweet(props) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.username}</div>
            <div>{props.date}</div>
            <p>{props.message}</p>
        </div>
    )
};