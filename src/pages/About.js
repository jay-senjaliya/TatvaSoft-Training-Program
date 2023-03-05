import React, { Component } from 'react'
import Title from '../component/Title'

export default class About extends Component {
    render() {
        return (
            <div>
                <Title title='This Title is from About ' description='this is a description from about.js page which was rendered through app.js' />
            </div>
        )
    }
}
