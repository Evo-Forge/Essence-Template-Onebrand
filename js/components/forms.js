import React from 'react';
import ClassNames from 'classnames';


import { Block, Btn, Card, Image, Text, List, ListItem, Icon, Menu} from 'react-essence';

class OnebrandForms extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>Forms</Text>
            </Block>
          </Block>{/* end .e-row */}


        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandForms;
