import React, { Component } from 'react';

class Football extends Component {
    shoot = (text) =>
    {
        alert(text);
    }
    render() {
        return (
            <div>
                <button onClick={this.shoot.bind(this, '슛!!!!!!!!!!')}>쏘세요!</button>
            </div>
        );
    }
}

export default Football;