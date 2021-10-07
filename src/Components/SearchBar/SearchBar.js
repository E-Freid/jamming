import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    render(){
        return (
            <div class="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }

    search(){
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e){
        this.setState({term: e.target.value});
    }
}