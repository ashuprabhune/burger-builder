import React from 'react';
import Aux from '../../../hoc/Auxilliary';
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
      <p>Continue to checkout</p>
    </Aux>
  );
}

export default orderSummary;
