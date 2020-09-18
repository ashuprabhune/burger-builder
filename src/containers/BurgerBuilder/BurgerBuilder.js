import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES={
  salad:0.5,
  cheese:0.4,
  meat:0,
  bacon:0.8,
  veggie:0.8
}
class BurgerBuilder extends Component{
  state = {
    ingredients : {
      salad : 0,
      meat : 0,
      cheese :0,
      bacon : 0,
      veggie:0
    },
    totalprice : 4,
    purchaseable: false
  }

  updatePurchaseableState(ingredients){

    const sum = Object.keys(ingredients)
                .map(igKey => {
                  return ingredients[igKey]
                })
                .reduce((sum,el) => {
                  return sum + el;
                },0);

    this.setState({purchaseable: sum > 0})
  }
  addIngredientHandler = (type) =>{
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount + 1;

      const updatedIngredients = {
        ...this.state.ingredients
      }

      updatedIngredients[type] = newCount;
      const additionalCost = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalprice + additionalCost;

      this.setState({
        ingredients : updatedIngredients,
        totalprice : newPrice
      });
      this.updatePurchaseableState(updatedIngredients);

  }

  removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0)
      return;
    const newCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = newCount;
    const newCost = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalprice - newCost;

    this.setState({
      ingredients : updatedIngredients,
      totalprice : newPrice
    });
    this.updatePurchaseableState(updatedIngredients);
  }

  render(){
    const disbaledInfo ={
      ...this.state.ingredients
    }

    for(let key in disbaledInfo){
      disbaledInfo[key] = disbaledInfo[key] <= 0;
    }
    return(
      <Aux>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          ingredientadded = {this.addIngredientHandler}
          ingredientremoved={this.removeIngredientHandler}
          disabled={disbaledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalprice}/>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
