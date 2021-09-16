import React, { createRef } from 'react'
import './itemAddform.css'
export default class ItemAddform extends React.Component {
    state = {
        label: '',
        valid: false
    }
    inputOnChange = (e) => {
            this.setState({
                label: e.target.value
            })
            if (e.target.value === "") {
                this.setState({
                    valid: false
                })
            } else {
                this.setState({
                    valid: true
                })
            }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({
            label: ""
        })
    }
    render () {
        const notValid = "form_valid"
        const valid = "form_valid" + " active"
        const { addItem } = this.props
        return (
            <div className="form">
            <span className={this.state.valid ? notValid : valid}>Заполните поле</span>
            <form action="#" onSubmit={this.onSubmit}>
            <input value={this.state.label} type="text" onChange={this.inputOnChange} placeholder="Новое дело" className="todolist_new" />
            <button className="todolist_new_button">добавить новое дело</button>
            </form>
            </div>
        )
    }
}