import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
  let ingredientsSummary = Object.keys(props.ingredients)
  .map((igKey) => {
    return <li><span style={{textTransform:'capatalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
  });
  return(

    <Aux>
      <h3> Your Order </h3>
      <p> Your burger contains</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total price: {props.price}</strong></p>
      <p>Continue to checkout</p>
    <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
  <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;
