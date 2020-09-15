import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'},
  {label:'Bacon', type:'bacon'},
  {label:'Veggie', type:'veggie'}
];
const buildControls = (props) => {
  return(
    <div className={classes.BuildControls}>

      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added = {() => props.ingredientadded(ctrl.type)}
          removed = {() => props.ingredientremoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}/>
      ))}
      <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
    </div>
  );
}

export default buildControls;
