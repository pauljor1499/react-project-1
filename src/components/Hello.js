const name = "Paul";

const displayMessage = () => {
    return "Paul";
};

function Hello() {
    return <h1>Hello World! {displayMessage() + name}</h1>;
}

export default Hello;
