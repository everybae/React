import React, { Component } from 'react';

class MyForm extends Component {
    state = {
        name: '',
        age: null
    }

    dataSubmit = (e) =>
    {
        e.preventDefault();
        alert('당신이 제출한 이름은 : ' + this.state.name);
    }
    nameChange = (e) =>
    {
        let n = e.target.name;
        let v = e.target.value;
        this.setState({
            [n]: v
        });
    }
    render() {
        return (
            <form onSubmit={this.dataSubmit}>
                <h1>Hello {this.state.name}, 넌 {this.state.age}살 이구나.</h1>
                <p>Enter your name</p>
                <input 
                    type="text"
                    name='name'
                    onChange={this.nameChange}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.nameChange}
                />
                <button type = "submit">전송</button>
            </form>
        );
    }
}

export default MyForm;