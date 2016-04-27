import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import OnebrandBlog from './components/blog';
import OnebrandEcommerce from './components/ecommerce';
import OnebrandHeaders from './components/headers';
import OnebrandPost from './components/post';
import OnebrandFooters from './components/footers';

class Onebrand extends React.Component {
  render() {
    return(
      <Block>
        <OnebrandFooters />
        <OnebrandHeaders />
        <OnebrandPost />
        <OnebrandBlog />
        <OnebrandEcommerce />
      </Block>
    );
  }
}

ReactDOM.render(
 <Onebrand />,
 document.querySelector('.app')
);
