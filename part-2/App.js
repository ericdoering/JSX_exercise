function App() {
    return (
        <div>
            <Tweet
            name="test" 
            username="tester" 
            date={new Date().toDateString()} 
            message="testing testing the test as it's testing" />
        </div>
    )
};