import React, { useState } from "react";
import ListItem from "./ListItem";

const Todo = () => {
    let [todo, setToDo] = useState("");
    let [todoList, setToDoList] = useState([]);

    const handleChange = (event) => {
        setToDo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setToDoList(tempList);
        setToDo("");
        console.log(todoList);
        // todoList.push(todo);
        // console.log(todoList);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <div>{todo}</div> */}
                <input type="text" value={todo} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            {todoList.map((item, index) => (
                <ListItem name={item} key={index}></ListItem>
            ))}
        </div>
    );
};

export default Todo;
