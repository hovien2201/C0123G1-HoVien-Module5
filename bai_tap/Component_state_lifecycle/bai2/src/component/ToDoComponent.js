import React from 'react';
import './style.css';
export class ToDoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            todoList: []
        }
    }
    saveInputTitle(value) {
        this.setState({
            title: value
        })
    }
    addTodo() {
        this.setState({
            todoList: [this.state.title, ...this.state.todoList],
            title: ''

        })
    }

    render() {
        return (

            <>
                <div className='div'>
                    <h1>Todo list</h1>
                    <input value={this.state.title} onChange={(eveten) => this.saveInputTitle(eveten.target.value)}></input>
                    <button onClick={() => this.addTodo()}>Add</button>
                    <ul>
                        {this.state.todoList.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            </>

        )
    }
}
export default ToDoComponent;