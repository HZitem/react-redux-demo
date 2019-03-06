import React, { Component } from 'react';
import store from '../store.js';
import { addToCart } from '../actions/cart-actions';

class tests extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            qty: "",
            price: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    add() {
        store.dispatch(addToCart(this.state.name, this.state.qty, this.state.price));
        this.setState({
            name: "",
            qty:"",
            price:""
        });
    };
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" placeholder="qty" name="qty" value={this.state.qty} onChange={this.handleChange} />
                <input type="text" placeholder="unitPrice" name="price" value={this.state.price} onChange={this.handleChange} />
                <button onClick={this.add.bind(this)}>add</button>
            </div>
        )
    }
}

export default tests;