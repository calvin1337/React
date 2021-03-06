import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux"

import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Layout/BuildControls/BuildControls';

import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";


class BurgerBuilder extends Component{

    state= {
        purchasing:false,
        
    }

    

    componentDidMount (){
        // axios.get("https://react-my-burger-13a65.firebaseio.com/ingredients.json")
        // .then(response => {
        //     this.setState({ingredients:response.data})
        // })
        // .catch(error => {
        //     this.setState({error:true})
        // });
        this.props.onInitIngredients();
    }



    updatePurchaseState (ingredients) {
        
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el; 
        }, 0)
        return sum > 0;
    }

    // addIngredientHandler = (type) => {

    //     const oldCount = this.state.ingredients[type];
    //     const updateCount = oldCount + 1;
    //     const updateIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngredients[type] = updateCount;

    //     const pricesAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + pricesAddition;
    //     this.setState({totalPrice: newPrice, ingredients: updateIngredients})
    //     this.updatePurchaseState(updateIngredients);
    // }

    // removeIngredientHandler = (type) => {

    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount <= 0){
    //         return;
    //     }

    //     const updateCount = oldCount - 1;
    //     const updateIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngredients[type] = updateCount;

    //     const pricesDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - pricesDeduction;
    //     this.setState({totalPrice: newPrice, ingredients: updateIngredients})
    //     this.updatePurchaseState(updateIngredients);
    // }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
      
        this.props.onInitPurchase();
        this.props.history.push("/checkout");
        // const queryParams = [];
        // for (let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push("price=" + this.state.totalPrice);
        // const queryString = queryParams.join("&");
        // this.props.history.push({
        //     pathname: "/checkout",
        //     search: "?" + queryString
        // });
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        } 
        // {salad:true, meat:false, ...}

        let orderSummery = null;
        

        
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p>: <Spinner /> ;
        
        if(this.props.ings) {
            burger = ( 
            <Aux>
        <Burger ingredients={this.props.ings}/>
        <BuildControls 
        ingredientAdded={this.props.onIngredientAdded}
        ingredientRemoved={this.props.onIngredientRemoved}
        disabled={disabledInfo}
        purchasable={this.updatePurchaseState(this.props.ings)}
        ordered={this.purchaseHandler}
        price={this.props.price}
        />
        </Aux>
        );
        orderSummery = <OrderSummery 
                    ingredients={this.props.ings}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} 
                    price={this.props.price}
                    />
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));