import React from 'react';
import ClassNames from 'classnames';


import { Block, Btn, Card, Image, Text, List, Divider, ListItem, Icon,Input, Menu} from 'react-essence';

class OnebrandFooters extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>Footers</Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-background-grey-800 flexBox'}>
                <Block className={'brick brick-3 e-margin-top-50 e-margin-bottom-50'}>
                    <Block className={'logo flexBox e-v-center e-margin-bottom-25'}>
                      <Block className={'disc e-background-grey-300 e-text-white flexBox e-v-end e-h-center'}>
                        <Text type={'strong'} className={'one'}>1</Text>
                      </Block>
                      <Text className={'fullName'}>
                        <Text type={'strong'} className={'e-text-grey-300'}>1</Text>
                        <Text type={'strong'} className={'e-text-white'}>brand</Text>
                      </Text>
                    </Block>{/* end .logo*/}
                  <Block>
                    <Text type={'p'} className={'e-text-grey-700 e-body1'}>
                      Nick Parker 2015.
                      All rights reserved.
                    </Text>
                    <Text type={'p'} className={'e-text-grey-700 e-body1'}>
                      Welcome to lamUIKit Shop.
                      Here you can a lot of quatity t-shirts,headwear and accessories
                    </Text>
                  </Block>
                </Block>
                <Block className={'brick brick-3 e-margin-top-50 e-margin-bottom-50'}>
                  <Block className={'e-margin-bottom-25'}>
                    <Text type={'strong'} className={'e-text-white e-body2'}>CATEGORIES</Text>
                  </Block>
                  <List className={'e-no-style'}>
                    <ListItem>
                      <Text type={'strong'} className={'e-text-grey-700 e-body2'}>WOMAN</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'strong'} className={'e-text-grey-700 e-body2'}>MAN</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'strong'} className={'e-text-grey-700 e-body2'}>KID</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'strong'} className={'e-text-grey-700 e-body2'}>ACCESORIES</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'strong'} className={'e-text-grey-700 e-body2'}>E-BOOKS</Text>
                    </ListItem>
                  </List>
                </Block>
                <Block className={'brick brick-3 e-margin-top-50 e-margin-bottom-50'}>
                  <Block className={'e-margin-bottom-25'}>
                    <Text type={'strong'} className={'e-text-white e-margin-bottom-25 e-body2'}>TAG CLOUD</Text>
                  </Block>
                </Block>
                <Block className={'brick brick-3 e-margin-top-50 e-margin-bottom-50'}>
                  <Block className={'e-margin-bottom-25'}>
                    <Text type={'strong'} className={'e-text-white e-margin-bottom-25 e-body2'}>SUBSCRIBE</Text>
                    <Block className={'flexBox e-margin-top-25 e-margin-bottom-25'}>
                      <Input type={'email'} name={'label'} label={'Email input'} className={'emailInput e-background-grey-600'}/>
                      <Btn label={'>'} ripple={false} type={'warning'} className={'flat emailButton'} />
                    </Block>
                    <Block>
                      <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                      <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                      <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                    </Block>
                  </Block>
                </Block>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 spaceBetween flexBox e-background-grey-800 e-v-center'}>
              <Block className={'brick brick-3 logo flexBox e-v-center e-margin-bottom-25'}>
                <Block className={'disc e-background-grey-300 e-text-white flexBox e-v-end e-h-center'}>
                  <Text type={'strong'} className={'one'}>1</Text>
                </Block>
                <Text className={'fullName'}>
                  <Text type={'strong'} className={'e-text-grey-300'}>1</Text>
                  <Text type={'strong'} className={'e-text-white'}>brand</Text>
                </Text>
              </Block>{/* end .logo*/}
              <Block className={'brick brick-6 e-h-center'}>
                <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                <Icon name={"action-favorite"} className={"e-text-grey-100"} />
              </Block>
              <Block className={'brick brick-3 flexBox justEnd'}>
                <Text type={'p'} className={'e-text-grey-700 e-body1'}>
                  Nick Parker 2015.
                  All rights reserved.
                </Text>
              </Block>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-background-grey-800 flexBox flexColumn alignItemsCenter '}>
              <Block className={'logo flexBox e-v-center e-margin-bottom-25 e-margin-top-25'}>
                <Block className={'disc e-background-grey-300 e-text-white flexBox e-v-end e-h-center'}>
                  <Text type={'strong'} className={'one'}>1</Text>
                </Block>
              </Block>{/* end .logo*/}
              <List type={'inline'} className={'e-text-grey-700 e-body1 e-margin-bottom-25'}>
                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>about</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>blog</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>shop</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>services</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>contacts</Text>
                </ListItem>

              </List>
              <Block className={'e-margin-bottom-25'}>
                <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                <Icon name={"action-favorite"} className={"e-text-grey-100"} />
              </Block>
              <Text type={'p'} className={'e-text-grey-700 e-body1 e-margin-bottom-50'}>
                Nick Parker 2015.
                All rights reserved.
              </Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-background-grey-800 flexBox flexColumn alignItemsCenter'}>
              <Block className={'flexBox spaceBetween alignItemsCenter e-margin-top-25 e-margin-bottom-25 fullWidth'}>
                <Block className={'brick brick-3 logo flexBox e-v-center'}>
                  <Block className={'disc e-background-grey-300 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-grey-300'}>1</Text>
                    <Text type={'strong'} className={'e-text-white'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'brick brick-6 e-h-center'}>
                  <List type={'inline'} className={'e-text-grey-700 e-body1 spaceBetween'}>
                    <ListItem>
                      <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>about</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>blog</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>shop</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>services</Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>contacts</Text>
                    </ListItem>

                  </List>
                </Block>
                <Block className={'brick brick-3 flexBox justEnd'}>
                  <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                  <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                  <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                </Block>
              </Block>
              <Divider/>
              <Block className={'e-margin-top-25 e-margin-bottom-25 flexBox'}>
                <Text type={'strong'} className={'e-body1 e-text-white subscribeSpan'}>SUBSCRIBE NOW</Text>
                <Block className={'flexBox'}>
                  <Input type={'email'} name={'label'} label={'Email input'} className={'emailInput e-background-grey-600'}/>
                  <Btn label={'>'} ripple={false} type={'warning'} className={'flat emailButton'} />
                </Block>
              </Block>
              <Text type={'p'} className={'e-text-grey-700 e-body1 e-margin-bottom-50'}>
                Nick Parker 2015.
                All rights reserved.
              </Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-background-grey-800 flexBox flexColumn alignItemsCenter'}>
              <Block className={'flexBox spaceBetween alignItemsCenter e-margin-top-25 e-margin-bottom-25 fullWidth'}>
                <Block className={'brick brick-3'}>
                  <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                  <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                  <Icon name={"action-favorite"} className={"e-text-grey-100"} />
                </Block>
                <Block className={'brick brick-3 logo flexBox e-v-center e-h-center'}>
                  <Block className={'disc e-background-grey-300 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-grey-300'}>1</Text>
                    <Text type={'strong'} className={'e-text-white'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'brick brick-3'}>

                </Block>
              </Block>
              <Divider/>
                <List type={'inline'} className={'e-text-grey-700 e-body1 e-margin-top-50 e-margin-bottom-50'}>
                  <ListItem>
                    <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>about</Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>blog</Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>shop</Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>services</Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>contacts</Text>
                  </ListItem>

                </List>
              <Text type={'p'} className={'e-text-grey-700 e-body1 e-margin-bottom-50'}>
                Nick Parker 2015.
                All rights reserved.
              </Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-background-grey-300 flexBox flexColumn alignItemsCenter '}>
              <Block className={'brick brick-3 logo flexBox e-v-center e-h-center e-margin-bottom-25 e-margin-top-25'}>
                <Block className={'disc e-background-grey-700 e-text-white flexBox e-v-end e-h-center'}>
                  <Text type={'strong'} className={'one'}>1</Text>
                </Block>
                <Text className={'fullName'}>
                  <Text type={'strong'} className={'e-text-grey-700'}>1</Text>
                  <Text type={'strong'} className={'e-text-white'}>brand</Text>
                </Text>
              </Block>{/* end .logo*/}
              <List type={'inline'} className={'e-text-grey-700 e-body1 e-margin-bottom-25'}>
                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>about</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>blog</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>shop</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>services</Text>
                </ListItem>

                <ListItem>
                  <Text type={'strong'} className={'e-text-uppercase marginLeftRight'}>contacts</Text>
                </ListItem>

              </List>
              <Block className={'e-margin-bottom-25'}>
                <Icon name={"action-favorite"} className={"e-text-grey-700"} />
                <Icon name={"action-favorite"} className={"e-text-grey-700"} />
                <Icon name={"action-favorite"} className={"e-text-grey-700"} />
              </Block>
              <Text type={'p'} className={'e-text-grey-700 e-body1 e-margin-bottom-50'}>
                Nick Parker 2015.
                All rights reserved.
              </Text>
            </Block>
          </Block>{/* end .e-row */}

        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandFooters;
