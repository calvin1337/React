import React, { Component } from "react";

import Aux from "../../hoc/Aux"

import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Layout/BuildControls/BuildControls';

import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese:0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    state= {
        ingredients: null,
        totalPrice: 4,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    }


    componentDidMount (){
        axios.get("https://react-my-burger-13a65.firebaseio.com/ingredients.json")
        .then(response => {
            this.setState({ingredients:response.data})
        })
        .catch(error => {
            this.setState({error:true})
        });
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
       
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price=" + this.state.totalPrice);
        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: "/checkout",
            search: "?" + queryString
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

        let orderSummery = null;
        

        
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p>: <Spinner /> ;
        
        if(this.state.ingredients) {
            burger = ( 
            <Aux>
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
        orderSummery = <OrderSummery 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} 
                    price={this.state.totalPrice}
                    />
        }

        if (this.state.loading){
            orderSummery = <Spinner />
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Aux>
        );
    }
}


export default withErrorHandler(BurgerBuilder, axios);