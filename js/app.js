import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import OnebrandNavigation from './components/navigation';
import OnebrandBlog from './components/blog';
import OnebrandEcommerce from './components/ecommerce';
import OnebrandHeaders from './components/headers';
import OnebrandPost from './components/post';
import OnebrandFooters from './components/footers';
import OnebrandForms from './components/forms';

class Onebrand extends React.Component {
  render() {
    return(
      <Block>
        <OnebrandNavigation />
        <OnebrandBlog />
        <OnebrandEcommerce />
        <OnebrandHeaders />
        <OnebrandPost />
        <OnebrandFooters />
        <OnebrandForms />
      </Block>
    );
  }
}

ReactDOM.render(
 <Onebrand />,
 document.querySelector('.app')
);
