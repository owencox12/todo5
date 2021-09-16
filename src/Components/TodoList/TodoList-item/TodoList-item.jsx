import React from 'react'
import './TodoList-item.css'

export default class TodoListItem extends React.Component {
    render () {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props
        const style = {
            fontWeight: important ? "bold" : "normal",
            color: important ? "steelblue" : "black"
        }

        let classNames = "todo-list-item"
        if (done) {
            classNames += " done"
        }
        console.log(classNames)
        return (
            <div>
            <div className="todo-list">
                <span onClick={onToggleDone} className={classNames} style={style}>{label}
                </span>
            <div className="todo-list-buttons">
            <button type="button" onClick={onDeleted} className="todo-list-button todo-list-button-trash">
                <i className="fa fa-trash-o" aria-hidden="true"/>
    
                </button>
                <button onClick={onToggleImportant} type="button" className="todo-list-button todo-list-button-exclamation">
                <i className="fa fa-exclamation"/>
                </button>
            </div>
            </div>
            </div>
        )
    }
}
