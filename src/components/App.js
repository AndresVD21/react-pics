import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';

export default class App extends Component {

    onSearchSubmit(term) {
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 92bee6faabab44172b6cbefae520dba660f675347e6419bbb129f5660efd2c0d'
            }
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}


