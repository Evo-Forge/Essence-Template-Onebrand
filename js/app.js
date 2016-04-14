import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import OnebrandEcommerce from './components/ecommerce';

class Onebrand extends React.Component {
  render() {
    return(
      <Block>
        <OnebrandEcommerce />
      </Block>
    );
  }
}

ReactDOM.render(
 <Onebrand />,
 document.querySelector('.app')
);
