import React from 'react';
import ClassNames from 'classnames';


import { Block, Btn, Card, Input, Image, Text, List, ListItem, Icon, Menu} from 'react-essence';

class OnebrandNavigation extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>Navigation</Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox spaceBetween e-background-grey-800 e-v-center'}>
                <Block className={'logo flexBox e-v-center addPadding15'}>
                  <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                    <Text type={'strong'} className={'e-text-white'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'flexBox e-v-center'}>
                  <List type={'inline'} className={'navBar'}>
                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>about</Text>
                      </Text>
                    </ListItem>

                    <ListItem className={'active'}>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>blog</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>shop</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>services</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>contacts</Text>
                      </Text>
                    </ListItem>
                  </List>
                  <Block className={'addPadding15'}>
                    <Btn icon={'action-search'} ripple={true} type={'flat'} className={'e-text-white btn-icon'} />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox justEnd e-background-grey-800 e-v-center navContainer'}>
                <List type={'inline'} className={'navBar'}>
                  <ListItem>
                    <Text type={'a'} className={'e-button'}>
                      <Text type={'strong'}>about</Text>
                    </Text>
                  </ListItem>

                  <ListItem className={'active'}>
                    <Text type={'a'} className={'e-button'}>
                      <Text type={'strong'}>blog</Text>
                    </Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'a'} className={'e-button'}>
                      <Text type={'strong'}>shop</Text>
                    </Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'a'} className={'e-button'}>
                      <Text type={'strong'}>services</Text>
                    </Text>
                  </ListItem>

                  <ListItem>
                    <Text type={'a'} className={'e-button'}>
                      <Text type={'strong'}>contacts</Text>
                    </Text>
                  </ListItem>
                </List>
                <Block className={'alignStrech addPadding15 e-background-grey-700'}>
                  <Input classes={'e-text-grey-900 e-no-margin e-no-padding'} type={'text'} name={'label'} placeholder={'Search'}/>
                </Block>
                <Block className={'addPadding15'}>
                  <Btn icon={'action-search'} ripple={true} type={'flat'} className={'e-text-white btn-icon'} />
                </Block>
              </Block>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox spaceBetween e-background-white e-v-center borderBottom'}>
                <Block className={'logo flexBox e-v-center addPadding15'}>
                  <Block className={'disc e-background-orange-400 e-text-grey-900 flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                    <Text type={'strong'} className={'e-text-grey-900'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'flexBox e-v-center'}>
                  <List type={'inline'} className={'navBar darkScheme'}>
                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>about</Text>
                      </Text>
                    </ListItem>

                    <ListItem className={'active'}>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>blog</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>shop</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>services</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>contacts</Text>
                      </Text>
                    </ListItem>
                  </List>
                  <Block className={'addPadding15'}>
                    <Btn icon={'action-search'} ripple={true} type={'flat'} className={'e-text-grey-500 btn-icon'} />
                  </Block>
                </Block>
              </Block>
              <Block className={'e-background-white flexBox spaceBetween e-v-center'}>
                <Block className={'addPadding15'}>
                  <List type={'inline'}>
                    <ListItem>
                      <Text type={'a'} className={'e-body2 e-text-grey-700'}>
                        <Text type={'strong'}>Woman</Text>
                      </Text>
                    </ListItem>

                    <ListItem className={'active'}>
                      <Text type={'a'} className={'e-body2 e-text-grey-700'}>
                        <Text type={'strong'}>Man</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-body2 e-text-grey-700'}>
                        <Text type={'strong'}>Kids</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-body2 e-text-grey-700'}>
                        <Text type={'strong'}>Accessories</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-body2 e-text-grey-700'}>
                        <Text type={'strong'}>E-books</Text>
                      </Text>
                    </ListItem>
                  </List>
                </Block>
                <Block className={'marginLeftRight'}>
                  <Btn icon={'action-add-shopping-cart'} ripple={true} type={'flat'} className={'e-text-white e-background-orange-400 btn-icon addPadding15'} />
                  <Text type={'strong'} className={'e-text-grey-700 addPadding15'}>3</Text>
                </Block>
              </Block>
            </Block> {/* end .brick-12 */}
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox spaceBetween e-background-grey-800 e-v-center'}>
                <Btn label={'SIGN IN'} ripple={true} type={'flat'} className={'e-text-white btn-icon e-button marginLeftRight'} />
                <Block className={'logo flexBox e-v-center addPadding15'}>
                  <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                    <Text type={'strong'} className={'e-text-white'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'flexBox e-v-center marginLeftRight'}>
                  <Btn icon={'action-add-shopping-cart'} ripple={true} type={'flat'} className={'e-text-white btn-icon'} />
                  <Btn label={'CART'} ripple={true} type={'flat'} className={'e-text-white btn-icon e-button'} />
                </Block>
              </Block>
              <Block className={'e-background-grey-700 flexBox e-h-center e-v-center'}>
                <Block className={'addPadding15'}>
                  <List type={'inline'} className={'navBar'}>
                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>about</Text>
                      </Text>
                    </ListItem>

                    <ListItem className={'active'}>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>blog</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>shop</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>services</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>contacts</Text>
                      </Text>
                    </ListItem>
                  </List>
                </Block>

              </Block>
            </Block> {/* end .brick-12 */}
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox spaceBetween e-background-grey-800 e-v-center'}>
                <Block className={'logo flexBox e-v-center addPadding15'}>
                  <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                    <Text type={'strong'} className={'e-text-white'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'flexBox e-v-center marginLeftRight'}>
                  <Btn label={'SIGN IN'} ripple={true} type={'flat'} className={'e-text-white btn-icon e-button marginLeftRight'} />
                  <Btn icon={'action-add-shopping-cart'} ripple={true} type={'flat'} className={'e-text-white btn-icon'} />
                  <Btn label={'CART'} ripple={true} type={'flat'} className={'e-text-white btn-icon e-button'} />
                </Block>
              </Block>
              <Block className={'e-background-grey-700 flexBox e-h-center e-v-center'}>
                <Block className={'addPadding15'}>
                  <List type={'inline'} className={'navBar'}>
                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>about</Text>
                      </Text>
                    </ListItem>

                    <ListItem className={'active'}>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>blog</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>shop</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>services</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>contacts</Text>
                      </Text>
                    </ListItem>
                  </List>
                </Block>

              </Block>
            </Block> {/* end .brick-12 */}
          </Block>{/* end .e-row */}


          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox spaceBetween e-background-orange-400 e-v-center'}>
                <Block className={'logo flexBox e-v-center addPadding15'}>
                  <Block className={'disc e-background-grey-900 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                  <Text className={'fullName'}>
                    <Text type={'strong'} className={'e-text-grey-900'}>1</Text>
                    <Text type={'strong'} className={'e-text-white'}>brand</Text>
                  </Text>
                </Block>{/* end .logo*/}
                <Block className={'flexBox e-v-center'}>
                  <List type={'inline'} className={'navBar darkerScheme'}>
                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>about</Text>
                      </Text>
                    </ListItem>

                    <ListItem className={'active'}>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>blog</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>shop</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>services</Text>
                      </Text>
                    </ListItem>

                    <ListItem>
                      <Text type={'a'} className={'e-button'}>
                        <Text type={'strong'}>contacts</Text>
                      </Text>
                    </ListItem>
                  </List>
                  <Block className={'addPadding15'}>
                    <Btn icon={'action-search'} ripple={true} type={'flat'} className={'e-text-white btn-icon'} />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'flexBox spaceBetween e-background-grey-800 e-v-center'}>
                <Block className={'logo flexBox e-v-center addPadding15'}>
                  <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                    <Text type={'strong'} className={'one'}>1</Text>
                  </Block>
                </Block>{/* end .logo*/}
                <Block className={'marginLeftRight'}>
                  <Menu type={'cover'} icon={'navigation-menu'} className={'e-text-center e-text-white e-headline'}>
                    <Text className={'e-text-grey-900 e-button'}>About</Text>
                    <Text className={'e-text-grey-900 e-button'}>Blog</Text>
                    <Text className={'e-text-grey-900 e-button'}>Shop</Text>
                    <Text className={'e-text-grey-900 e-button'}>Services</Text>
                    <Text className={'e-text-grey-900 e-button'}>Contacts</Text>
                  </Menu>
                </Block>
              </Block>
            </Block>
          </Block>{/* end .e-row*/}


        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandNavigation;
