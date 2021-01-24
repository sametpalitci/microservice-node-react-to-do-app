import React, { useEffect, useState } from 'react'
import axios from 'axios';
const TodoList = () => {
    const [todos, setTodos] = useState({});
    const dataFetch = async () => {
        const response = await axios.get('http://localhost:4002/events');
        setTodos(response.data);
    }
    useEffect(() => {
        dataFetch()
    }, []);

    const renderedPosts = Object.values(todos).map(todo => {
        return (
            <li key={todo.id}><p>{todo.todoText}</p></li>
        );
    });

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {renderedPosts}
            </ul>
        </div>
    )
}

export default TodoList
