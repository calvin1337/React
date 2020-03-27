import React, { Component } from "react"
import Button from "../../../components/UI/Button/Button";
import classes from "./contactData.module.css"
import axios from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";


class ContactData extends Component {
    state = {
        name:"",
        email: "",
        address: {
            street: "" ,
            postalCode: ""
        }, 
        loading:false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});
        const order = {
            ingredients : this.props.ingredients ,
            price: this.props.price ,
            customer:{
                name:"Calvin Donaldson",
                address:{
                    street: "Teststreet 1",
                    postCode: "AB42",
                    country: "Uk"
                },
                email: "test@test.com"
            },
            deliveryMethod:"fastest"
        }
        axios.post("https://react-my-burger-13a65.firebaseio.com/orders.json", order)
        .then( response => {
            this.setState({loading:false });
            this.props.history.push("/");
        })
        .catch( error => {
            this.setState({loading:false});
        });

    }

    render () {

        let form = (
                    <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
                );

        if(this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}


export default ContactData;