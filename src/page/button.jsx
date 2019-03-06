import React,{Component} from 'react';
import store from '../store.js';
import { addToCart }  from '../actions/cart-actions';

class tests extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            qty:"",
            price:"",
        }
    }
    add(){      
        store.dispatch(addToCart('iwatch', 1, 250)); 
    };
    handle(event,type) {
        this.setState({type:  event.target.value});
    };
    render(){
        return (
           <div>
               <input type="text" placeholder="name" value={this.state.name}  onChange={this.handle.bind(this,'name')} />
               <input type="text" placeholder="qty" value={this.state.qty} onChange={this.handle.bind(this,'qty')}  />
               <input type="text" placeholder="unitPrice" value={this.state.price} onChange={this.handle.bind(this,'price')}  />
                <button onClick={this.add.bind(this)}>add</button>
           </div>
        )
    }
}

export default tests;