import React from 'react';
import Aux from '../../hoc/Auxilliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <div> Layout SideBar Backdrop </div>
    <main className={ classes.Content }>
      {props.children}
    </main>
  </Aux>
)

export default layout
