import React,{Component} from 'react';
import store from '../store.js';
import { connect } from 'react-redux';
import Button from './button'
import { deleteFromCart }  from '../actions/cart-actions';
class reduxs extends Component{
    // constructor(){
    //     super();
    //     this.state = {

    //     }
    // }
    del(i){
        store.dispatch(deleteFromCart(i)); 
    };
    render(){
        return (
            <div>
                <h4>Redux</h4>
                <table border="1">
                    <thead>
                        <tr>
                        <th>name</th>
                        <th>qty</th>
                        <th>unitPrice</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((item,index) =>
                            <tr key={index} >
                                <td>{item.product}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitCost}</td>
                                <td>
                                    <button onClick={this.del.bind(this,index)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Button></Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.shoppingCart.cart
    }
}

export default reduxs = connect(mapStateToProps)(reduxs)