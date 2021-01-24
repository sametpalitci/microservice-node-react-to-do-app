import React, { useState } from 'react'
import axios from 'axios';

const TodoCreate = () => {
    const [todoText, setTodoText] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/todos',{
            todoText
        });
        setTodoText('')
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Todo"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoCreate
