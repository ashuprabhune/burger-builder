import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
    totalprice : 4
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
        price={this.state.totalprice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
