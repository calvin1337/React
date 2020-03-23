import React, { Component } from "react";

import Aux from "../../hoc/Aux"

import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Layout/BuildControls/BuildControls';

import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner"

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese:0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    state= {
        ingredients: {

            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
        purchasable:false,
        purchasing:false,
        loading:false
    }

    updatePurchaseState (ingredients) {
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el; 
        }, 0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;

        const pricesAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + pricesAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }

        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;

        const pricesDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - pricesDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert("You continue!")
        this.setState({loading:true});
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
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
        axios.post("/orders.json", order)
        .then( response => {
            this.setState({loading:false, purchasing:false});
        })
        .catch( error => {
            this.setState({loading:false, purchasing:false});
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        } 
        // {salad:true, meat:false, ...}
        
        let orderSummery = <OrderSummery 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} 
                    price={this.state.totalPrice}
                    />

        if (this.state.loading){
            orderSummery = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}

                />
            </Aux>
        );
    }
}


export default BurgerBuilder