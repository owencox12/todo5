import React from 'react'
import './SearchPanel.css'
import SearchPanelItem from './SearchPanel-item/SearchPanel-item';
export default class SearchPanel extends React.Component {

    state = {
        term: ''
    }
    searchOnChange = (e) => {
        const term = e.target.value
        this.setState({
            term: term
        })
        this.props.searchOnChange(term)
    }
    render () {
        const { term, filter, onFilterChange } = this.props
        return (
            <div className="search-panel">
            <input className="search-panel-input" value={this.state.term} onChange={this.searchOnChange} type="text" placeholder="поиск"/>
            <SearchPanelItem onFilterChange={onFilterChange} filter={filter}/>
            </div>
        )
    }
}