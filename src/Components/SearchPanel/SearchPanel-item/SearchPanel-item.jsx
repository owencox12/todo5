import React from 'react'
import './SearchPanel-item.css'
export default class SearchPanelItem extends React.Component {
        buttons = [
            {option: "all", label:"Все"},
            {option: "active", label:"Активные"},
            {option: "done", label:"Выполненные"}
        ] 
    render () {
        const { filter, onFilterChange } = this.props
        const buttons = this.buttons.map(({option, label}) => {
            const isActive = filter === option
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type="button" onClick={() => onFilterChange(option)} key={option} className={`btn ${clazz}`}>{label}</button>
            )
        })
        return (
            <div>
                {buttons}
            </div>
        )
    }
}