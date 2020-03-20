import React, { Component } from "react";

import Aux from "../../hoc/Aux"

import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Layout/BuildControls/BuildControls';

import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";



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
        purchasing:false
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



    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        } 
        // {salad:true, meat:false, ...}
        
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummery 
                    ingredients={this.state.ingredients}/>
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