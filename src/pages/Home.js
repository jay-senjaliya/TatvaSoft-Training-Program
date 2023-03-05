import React, { Component } from 'react'
import Title from '../component/Title'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Title title='Title1' />
                <Title title='Title2' />
                <Title title='Title3' />
            </div>
        )
    }
}
