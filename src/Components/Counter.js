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
        this.state.value++;
        this.update();
    }

    down (){
        this.state.value--;
        this.update();
    }

    update(){
        this.setState(() => {
            return {value: this.state.value};
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
