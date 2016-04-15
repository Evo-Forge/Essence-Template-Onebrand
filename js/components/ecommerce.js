import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Card, CardHeader, CardContent, CardFooter, Image, Text, Divider, Menu, List, ListItem, Icon, Input, Slider, Switch } from 'react-essence';

class OnebrandEcommerce extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>E-Ecommerce</Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'e-background-white cardContainer'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-7'}>
                    <Block>
                      <Btn label={'new'} ripple={true} type={'default'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                    </Block>
                    <Block className={'mainProductImage addPadding15'}>
                      <Image src={'../assets/img/cap1.jpg'} className={'e-img-rsp'} />
                    </Block>
                    <Block className={'productThumbs flexBox'}>
                        <Image src={'../assets/img/cap2.jpg'} height={'100px'} className={'e-img-rsp addMargin15'} />
                        <Image src={'../assets/img/cap3.jpg'} height={'100px'} className={'e-img-rsp addMargin15'} />
                        <Image src={'../assets/img/cap4.jpg'} height={'100px'} className={'e-img-rsp addMargin15'} />
                    </Block>
                  </Block>
                  <Block className={'brick brick-5 flexBox flexColumn'}>
                    <Text type={'p'} className={'e-display-1 e-text-black'}>Larus Green Snapback</Text>
                    <Text type={'sub'} className={'e-text-grey-500'}>
                      <Text type={'em'}>Headwear &amp; Accesories</Text>
                    </Text>
                    <Divider classes={'thin e-background-grey-300'} />
                    <List type={'inline'}>
                      <ListItem>
                        <Text className={'e-button e-text-orange-400'}>description</Text>
                      </ListItem>
                      <ListItem>
                        <Text className={'e-button'}>sizing</Text>
                      </ListItem>
                      <ListItem>
                        <Text className={'e-button'}>delivery</Text>
                      </ListItem>
                    </List>
                    <Text type={'p'} className={'e-text-grey-500 e-body1'}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Block className={'alignEnd flexBox e-v-center'}>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-lime-900'}/>
                      <Btn icon={'action-done'} ripple={true} type={'fab'} className={'fab-mini e-background-lime-700 e-text-white'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-grey-600'}/>
                    </Block>
                    <Block className={'alignEnd'}>
                      <Btn label={'XS'} ripple={true} type={'fab'} className={'fab-mini e-background-white e-text-grey-500'}/>
                      <Btn label={'S'} ripple={true} type={'fab'} className={'fab-mini e-background-white e-text-grey-500'}/>
                      <Btn label={'M'} ripple={true} type={'fab'} className={'fab-mini e-background-white e-text-grey-500'}/>
                      <Btn label={'L'} ripple={true} type={'fab'} className={'fab-mini e-background-white e-text-grey-500'}/>
                      <Btn label={'XL'} ripple={true} type={'fab'} className={'fab-mini e-background-white e-text-grey-500'}/>
                      <Btn label={'XXL'} ripple={true} type={'fab'} className={'fab-mini e-background-white e-text-grey-500'}/>
                    </Block>
                    <Block className={'alignEnd'}>
                      <Btn label={'-'} ripple={true} type={'fab'} className={'fab-mini e-background-grey-200 e-text-grey-900'}/>
                      <Text className={'e-text-grey-500'}> 1 </Text>
                      <Btn label={'+'} ripple={true} type={'fab'} className={'fab-mini e-background-grey-200 e-text-grey-900'}/>
                    </Block>
                    <Block className={'flexBox fullWidth spaceBetween e-v-center'}>
                      <Text type={'p'} className={'e-text-grey-900 e-display-1 flexBox e-v-center'}>
                        <Icon name={"editor-attach-money"} />
                        <Text>18</Text>
                      </Text>
                      <Block className={'flexBox e-v-center'}>
                        <Btn icon={'action-favorite-outline'} ripple={true} type={'fab'} className={'fab-mini e-btn-fab-mini e-background-grey-200 e-text-grey-900'}/>
                        <Btn label={'add to cart'} ripple={true} type={'default'} className={'raised e-background-orange-400 e-text-white e-body1'} />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'e-background-white cardContainer'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-7'}>
                    <Block className={'mainProductImage addPadding15'}>
                      <Image src={'../assets/img/cap1.jpg'} className={'e-img-rsp'} />
                    </Block>
                  </Block>

                  <Block className={'brick brick-5 flexBox flexColumn e-v-center'}>
                    <Text type={'p'} className={'e-text-grey-500 e-body1'}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing
                      Lorem Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                  </Block>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandEcommerce;
