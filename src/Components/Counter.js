import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
    
        this.state = {
          value: 0
        }

        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up (){
        this.setState(() => {
            return {value: this.state.value + 1};
        });
    }

    down (){
        this.setState(() => {
            return {value: this.state.value - 1};
        });
    }

    render() {
        return (
            <div className="counter">
                <input readOnly value={this.state.value}/>
                <button onClick={() => this.up()}>Up</button>
                <button onClick={() => this.down()}>Down</button>
            </div>
        )
    }
}

export default Counter;
