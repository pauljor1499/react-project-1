function FunctionEvent() {
    function handleClick() {
        console.log("Button is clicked");
    }

    return (
        <div>
            Functional Component
            <br />
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}
export default FunctionEvent;
