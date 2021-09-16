import React from "react";
import TodoList from "./Components/TodoList/TodoList";
import AppHeader from "./Components/AppHeader/AppHeader";
import SearchPanel from "./Components/SearchPanel/SearchPanel";
import './App.css'
import ItemAddform from "./Components/itemAddform/itemAddfrom";

export default class App extends React.Component {
  maxId = 1;

  state = {
    todoList: [
      this.createStateElement("Выпить коффе"),
      this.createStateElement("Сделать зарядку"),
      this.createStateElement("Почитать книжку"),
      this.createStateElement("Поучить Англ.яз")
    ],
    term: '',
    filter: 'all'
}
  createStateElement (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({todoList}) => {
      const idx = todoList.findIndex((el) => el.id === id)
      const before = todoList.slice(0, idx)
      const after = todoList.slice(idx + 1)
      const newArray = [...before, ...after]
      console.log(newArray)
      return {
        todoList: newArray
      }
    })
  }


  addItem = (text) => {
    const newItem = this.createStateElement(text)
    if (text != '') {
      this.setState(({todoList}) => {
        const newArray = [
          ...todoList, newItem
        ]
        return {
          todoList: newArray
        }
      })
    } else {
      console.log("Введите вопрос!")
    }
  }

  onToggleBoolean (arr, item, id) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {
      ...oldItem, [item]: !oldItem[item]
    }
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoList }) => {
      return {
        todoList: this.onToggleBoolean(todoList, 'important', id)
      }
    })
  }


  onToggleDone = (id) => {
    this.setState(({ todoList }) => {
      return {
        todoList: this.onToggleBoolean(todoList, 'done', id)
      }
    })
  }

  searchToggle = (items, term) => {
    if (term.length === 0) {
      return items;
    }
   return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }
  searchOnChange = (term) => {
    this.setState({term})
  }
  onFilterChange = (filter) => {
    this.setState({filter})
  }
  filter(items, filter) {
    switch(filter) {
      case "all":
         return items;
      case "active":
         return items.filter((item) => !item.done);
      case "done": 
        return items.filter((item) => item.done);
    }
  }
  render () {
    const { todoList, term, filter } = this.state
    const visible = this.filter(this.searchToggle(todoList, term), filter)
    const counterDone = todoList.filter((el) => el.done).length
    const todoCount = todoList.length - counterDone
    return (
        <div className="App">
          <AppHeader title="Список дел" todo={todoCount} done={counterDone} />
          <SearchPanel onFilterChange={this.onFilterChange} filter={filter} searchOnChange={this.searchOnChange}/>
          <TodoList todos={visible}
          onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
          <ItemAddform  addItem={this.addItem}/>
        </div>
    );
  }
}