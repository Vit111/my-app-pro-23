import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
        this.onChange = this.onChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    createTask(){
        this.props.onCreate(this.state.value)
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <div className='form'>
                <input type="text" className='input' placeholder='Write a text' onChange={this.onChange}/>
                <button type='button' className='button' onClick={this.createTask}>ADD</button>
            </div>
        )
    }
}


export default Input;