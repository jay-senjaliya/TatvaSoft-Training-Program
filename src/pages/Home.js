import React, { Component } from 'react'
import Title from '../component/Title'

export default class Home extends Component {
    constructor() {
        super();
        this.state = { title: 'Title using state', description: 'this is a description using state' }
        // this.setState(
        // title = 'Title using state',
        // discription = 'this is a description using state'
        // )
        console.log(this.state.title);
    }

    render() {
        return (
            <div>
                <Title title={this.state.title} description={this.state.description} />
                <Title title={this.state.title} description={this.state.description} />
                <Title title={this.state.title} description={this.state.description} />
            </div>
        )
    }
}
