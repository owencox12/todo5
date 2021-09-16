import React from 'react'
import "./AppHeader.css"
export default class AppHeader extends React.Component {
    render () {
        const { title, todo, done } = this.props
        return (
            <div className="app-header">
                        <h1>{title}</h1>
                        <span className="app-more">{todo} ещё нужно сделать, {done} сделано</span>
            </div>
        )
    }
}