import React from 'react'
import ItemAddform from '../itemAddform/itemAddfrom';
import TodoListItem from '../TodoList/TodoList-item/TodoList-item';
import  "./TodoList.css"
export default class TodoList extends React.Component {
    render () {
        const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props
        const elements = todos.map((item) => {
            const { id , ...itemProps } = item
            return (
                <li key={id} className="list-group-item">
                <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id) }
                onToggleDone={() => onToggleDone(id) }
                />
                </li> 
            )
        })
        return (
            <div className="todolist">
            <ul className="list-group todo-list">
                {elements}
            </ul>
            </div>
        )
    }
}