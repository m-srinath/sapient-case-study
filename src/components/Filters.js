import React, { Component } from 'react';
import { Services } from '../utility/services';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }
    componentDidMount() {
        let res = Services.callApi({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/character'
        }).then(res => {
            console.log('res', res.results)
            this.setState((prevState, props) => {
                return {
                    characters: res.results
                }
            })
        })
        
    }
    render() {
        let { characters } = this.state
        return (
            <div>
        
                    {characters && characters.map((item, index) => {
                        
                    return (
                        <li key = {index}>{item.name}</li>
                    )
                    })}
            
            </div>
             
        )
    }
}