import React from 'react';
import ClassNames from 'classnames';


import { Block, Btn, Card, Image, Text, List, ListItem, Icon, Menu} from 'react-essence';

class OnebrandHeaders extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>Headers</Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer addRelative'}>
                <Image src={'../assets/img/capmodel1.jpg'} className={'e-img-rsp'} />
                <Block className={'layer'}>
                  <Text type={'h1'} className={'hugeText e-text-grey-900'}>LARUS</Text>
                </Block>{/* end a .layer*/}
                <Block className={'layer flexBox flexColumn spaceBetween'}>
                  <Block className={'flexBox spaceBetween'}>
                    <Block className={'logo flexBox e-v-center'}>
                      <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                        <Text type={'strong'} className={'one'}>1</Text>
                      </Block>
                      <Text className={'fullName'}>
                        <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                        <Text type={'strong'} className={'e-text-white'}>brand</Text>
                      </Text>
                    </Block>{/* end .logo*/}

                    <Menu type={'cover'} icon={'navigation-menu'} className={'e-text-center e-text-white'}>
                      <Text className={'e-text-grey-900'}>First Option</Text>
                      <Text className={'e-text-grey-900'}>Second Option</Text>
                      <Text className={'e-text-grey-900'}>Third Option</Text>
                    </Menu>
                  </Block>

                  <Block className={'flexBox flexColumn alignItemsStart'}>
                    <Text type={'h1'} className={'e-no-margin e-text-white largeText'}>Larus.</Text>
                    <Text type={'h1'} className={'e-no-margin largeText'}>
                      <Text className={'e-text-orange-400'}>Express</Text>
                      <Text className={'e-text-white'}>Yourself</Text>
                    </Text>
                    <Text type={'em'} className={'e-text-white'}>Small brand with rich idea</Text>
                    <Btn label={'KNOW MORE'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn white e-margin-top-25'} />
                  </Block>
                </Block>{/* end a .layer*/}
              </Block>{/*end first .headerContainer*/}
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer addRelative'}>
                <Image src={'../assets/img/capmodel1.jpg'} className={'e-img-rsp'} />
                <Block className={'layerTransparent e-background-orange-400'}></Block>
                  <Block className={'layer'}>
                    <Text type={'h1'} className={'hugeText e-text-grey-900'}>Streetv</Text>
                  </Block>{/* end a .layer*/}
                  <Block className={'layer flexBox flexColumn spaceBetween'}>
                    <Block className={'flexBox spaceBetween'}>
                      <Block className={'logo flexBox e-v-center'}>
                        <Block className={'disc e-background-grey-900 e-text-white flexBox e-v-end e-h-center'}>
                          <Text type={'strong'} className={'one'}>1</Text>
                        </Block>
                        <Text className={'fullName'}>
                          <Text type={'strong'} className={'e-text-grey-900'}>1</Text>
                          <Text type={'strong'} className={'e-text-white'}>brand</Text>
                        </Text>
                      </Block>{/* end .logo*/}
                      <Menu type={'cover'} icon={'navigation-menu'} className={'e-text-center e-text-white'}>
                        <Text className={'e-text-grey-900'}>First Option</Text>
                        <Text className={'e-text-grey-900'}>Second Option</Text>
                        <Text className={'e-text-grey-900'}>Third Option</Text>
                      </Menu>
                    </Block>

                    <Block className={'flexBox flexColumn alignItemsStart'}>
                      <Text type={'h1'} className={'e-no-margin e-text-white largeText'}>Awesome.</Text>
                      <Text type={'h1'} className={'e-no-margin largeText'}>
                        <Text className={'e-text-grey-900'}>Must Have</Text>
                        <Text className={'e-text-white'}>Snapback</Text>
                      </Text>
                      <Text type={'em'} className={'e-text-white'}>Small brand with rich idea</Text>
                      <Btn label={'KNOW MORE'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn white e-margin-top-25'} />
                    </Block>
                  </Block>{/* end a .layer*/}
              </Block>{/*end second .headerContainer*/}
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer addRelative'}>
                <Image src={'../assets/img/capmodel1.jpg'} className={'e-img-rsp'} />
                <Block className={'layer e-background-grey-700'}>
                  <Text type={'h1'} className={'hugeText e-text-black'}>Awesome</Text>
                </Block>{/* end a .layer*/}
                <Block className={'layer flexBox flexColumn spaceBetween alignItemsCenter'}>
                  <Block className={'flexBox flexColumn alignItemsCenter'}>
                    <Block className={'logo flexBox e-v-center'}>
                      <Block className={'disc large e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                        <Text type={'strong'} className={'one'}>1</Text>
                      </Block>
                    </Block>{/* end .logo*/}

                    <List type={'inline'} className={'e-margin-top-25 e-text-white'}>
                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>Woman</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase e-text-orange-400'}>Man</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>Kids</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>Accessories</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>E-Books</Text>
                      </ListItem>
                    </List>
                  </Block>

                  <Block className={'flexBox flexColumn alignItemsCenter'}>
                    <Text type={'h1'} className={'e-no-margin largeText'}>
                      <Text className={'e-text-white'}>We</Text>
                      <Text className={'e-text-orange-400'}> know</Text>
                      <Text className={'e-text-white'}>, what you want</Text>
                    </Text>
                    <Text className={'e-text-white e-margin-top-25'}>High quality headwear and accessories from Russia</Text>
                  </Block>

                  <Block>
                    <Btn icon={'hardware-mouse'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon e-margin-top-25 e-headline'} />
                  </Block>
                </Block>{/* end a .layer*/}
              </Block>{/*end third .headerContainer*/}
            </Block>
          </Block>{/* end .e-row */}



          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer addRelative'}>
                <Image src={'../assets/img/couch.jpg'} className={'e-img-rsp'} />

                <Block className={'layer flexBox flexColumn spaceBetween alignItemsCenter'}>
                  <Block className={'flexBox alignItemsCenter'}>
                    <Block className={'logo flexBox e-v-center'}>
                      <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                        <Text type={'strong'} className={'one'}>1</Text>
                      </Block>
                      <Text className={'fullName'}>
                        <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                        <Text type={'strong'} className={'e-text-white'}>brand</Text>
                      </Text>
                    </Block>{/* end .logo*/}
                  </Block>

                  <Block className={'flexBox alignItemsCenter'}>
                    <Text type={'h1'} className={'e-no-margin largeText'}>
                      <Text className={'e-text-white'}>Awesome</Text>
                      <Text className={'e-text-orange-400'}> Summer</Text>
                    </Text>
                  </Block>

                  <Block>
                    <Btn label={'KNOW MORE'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn white marginLeftRight'} />
                    <Btn label={'SHOP NOW'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn e-background-orange-400 marginLeftRight'} />
                  </Block>
                </Block>{/* end a .layer*/}
              </Block>{/*end fourth .headerContainer*/}
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer addRelative'}>
                <Image src={'../assets/img/capmodel1.jpg'} className={'e-img-rsp'} />
                <Block className={'layer e-no-padding'}>
                  <Block className={'e-background-grey-800 e-text-white addPadding15 flexBox spaceBetween e-v-center'}>
                    <Btn label={'SIGN IN'} ripple={true} type={'flat'} className={'e-text-white btn-icon no-min-size'} />
                    <Block className={'logo flexBox e-v-center'}>
                      <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                        <Text type={'strong'} className={'one'}>1</Text>
                      </Block>
                      <Text className={'fullName'}>
                        <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                        <Text type={'strong'} className={'e-text-white'}>brand</Text>
                        <Text type={'em'} className={'e-text-white'}>shop</Text>
                      </Text>
                    </Block>{/* end .logo*/}
                    <Block className={'flexBox e-v-center'}>
                      <Btn icon={'action-shopping-cart'} ripple={true} type={'flat'} className={'e-text-white btn-icon no-min-size'} />
                      <Btn label={'CART'} ripple={true} type={'flat'} className={'e-text-white btn-icon no-min-size'} />
                    </Block>
                  </Block>{/* top*/}

                  <Block className={'e-background-grey-700 e-text-white addPadding15 flexBox e-v-center e-h-center'}>
                    <List type={'inline'} className={'e-text-white'}>
                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>Woman</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase e-text-orange-400'}>Man</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>Kids</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>Accessories</Text>
                      </ListItem>

                      <ListItem>
                        <Text type={'strong'} className={'e-text-uppercase'}>E-Books</Text>
                      </ListItem>
                    </List>
                  </Block>{/* top*/}

                  <Block className={'middleText flexBox flexColumn justCenter alignItemsCenter'}>
                    <Text type={'h1'} className={'e-no-margin largeText'}>
                      <Text className={'e-text-white'}>Grunge</Text>
                      <Text className={'e-text-orange-400'}> print</Text>
                      <Text className={'e-text-white'}> T-shirts</Text>
                    </Text>
                    <Text className={'e-text-white'}>High quality headwear and accessories from Russia</Text>
                    <Block className={'e-margin-top-25'}>
                      <Btn label={'KNOW MORE'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn white marginLeftRight'} />
                      <Btn label={'SHOP NOW'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn e-background-orange-400 marginLeftRight'} />
                    </Block>
                  </Block>
                </Block>{/* end a .layer*/}
              </Block>{/*end fifth .headerContainer*/}
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer'}>
                <Image src={'../assets/img/couch.jpg'} className={'e-img-rsp'} />
                <Block className={'layer'}>
                  <Block className={'transparentCard e-text-white'}>
                    <Block className={'flexBox flexColumn addPadding15 borderBottom'}>
                      <Text>Larus Camo</Text>
                      <Text>Patch Snapback</Text>
                      <Text type={'em'} className={'e-body1 e-text-white'}>Headwear &amp; Accessories</Text>
                    </Block>
                    <Block className={'flexBox'}>
                      <Block className={'addPadding15 flexBox e-v-center e-h-center price'}>
                        <Text>&#36;18</Text>
                      </Block>
                      <Block className={'e-background-orange-400 rndBtn fullWidth flexBox flexColumn'}>
                        <Btn type='button' label={'add to cart'} ripple={true} className={'flat e-background-orange-400 e-text-white'} />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>{/*end sixth .headerContainer*/}
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Block className={'headerContainer'}>
                <Image src={'../assets/img/capmodel1.jpg'} className={'e-img-rsp'} />
                <Block className={'layer e-no-padding flexBox flexColumn spaceBetween'}>
                  <Block>
                    <Block className={'flexBox spaceBetween addPadding15 e-background-white e-v-center borderBottom'}>
                      <Block className={'logo flexBox e-v-center'}>
                        <Block className={'disc e-background-orange-400 e-text-grey-900 flexBox e-v-end e-h-center'}>
                          <Text type={'strong'} className={'one'}>1</Text>
                        </Block>
                        <Text className={'fullName'}>
                          <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                          <Text type={'strong'} className={'e-text-grey-900'}>brand</Text>
                          <Text type={'em'} className={'e-text-grey-900'}>magazine</Text>
                        </Text>
                      </Block>{/* end .logo*/}

                      <List type={'inline'} className={'e-text-grey-700'}>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-uppercase'}>about</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'} className={'e-text-uppercase e-text-blue-400'}>blog</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'} className={'e-text-uppercase'}>services</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'} className={'e-text-uppercase'}>contacts</Text>
                        </ListItem>

                        <ListItem>
                          <Btn icon={'action-search'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon e-headline'}/>
                        </ListItem>
                      </List>
                    </Block>{/* top menu*/}

                    <Block className={'addPadding15 e-background-white'}>
                      <List type={'inline'} className={'e-text-grey-700'}>
                        <ListItem>
                          <Text type={'strong'}>History</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'}>Music</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'}>Nature</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'}>Lifestyle</Text>
                        </ListItem>

                        <ListItem>
                          <Text type={'strong'}>Adventure</Text>
                        </ListItem>
                      </List>
                    </Block>{/* second menu*/}
                  </Block>{/* top menus */}

                  <Block className={'flexBox spaceBetween e-v-center'}>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab'} className={'fab e-text-grey-900 btn-icon sliderBtn'} />
                    </Block>
                    <Block className={'flexBox flexColumn justCenter alignItemsCenter'}>
                      <Text type={'h1'} className={'e-no-margin largeText'}>
                        <Text className={'e-text-grey-900'}>New</Text>
                        <Text className={'e-text-orange-400'}> collection</Text>
                        <Text className={'e-text-grey-900'}> 2015</Text>
                      </Text>
                      <Text type={'em'} className={'e-text-grey-900'}>High quality headwear and accessories from Russia</Text>
                      <Block className={'e-margin-top-25'}>
                        <Btn label={'KNOW MORE'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn white marginLeftRight'} />
                        <Btn label={'SHOP NOW'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn e-background-orange-400 marginLeftRight'} />
                      </Block>
                    </Block>{/* text and buttons */}
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} type={'fab'} className={'fab e-text-grey-900 btn-icon sliderBtn'} />
                    </Block>
                  </Block>

                  <Block className={'e-row e-background-white'}>
                    <Block className={'brick brick-3 e-background-white addPadding15'}>
                      <Text type={'h1'} className={'e-headline e-text-orange-400 e-no-margin'}>
                        New collection 2015.
                      </Text>
                      <Text type={'h1'} className={'e-headline e-text-orange-400 e-no-margin'}>
                        Is out now!
                      </Text>
                      <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </Text>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                    </Block>

                    <Block className={'brick brick-3 e-background-white addPadding15'}>
                      <Text type={'h1'} className={'e-headline e-text-grey-900 e-no-margin'}>
                        New collection 2015.
                      </Text>
                      <Text type={'h1'} className={'e-headline e-text-grey-900 e-no-margin'}>
                        Is out now!
                      </Text>
                      <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </Text>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                    </Block>

                    <Block className={'brick brick-3 e-background-white addPadding15'}>
                      <Text type={'h1'} className={'e-headline e-text-grey-900 e-no-margin'}>
                        New collection 2015.
                      </Text>
                      <Text type={'h1'} className={'e-headline e-text-grey-900 e-no-margin'}>
                        Is out now!
                      </Text>
                      <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </Text>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                    </Block>

                    <Block className={'brick brick-3 e-background-white addPadding15'}>
                      <Text type={'h1'} className={'e-headline e-text-grey-900 e-no-margin'}>
                        New collection 2015.
                      </Text>
                      <Text type={'h1'} className={'e-headline e-text-grey-900 e-no-margin'}>
                        Is out now!
                      </Text>
                      <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </Text>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                    </Block>
                  </Block>
                </Block>{/* end a .layer*/}
              </Block>{/* end seventh .headerContainer*/}
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 flexBox'}>
              <Block className={'headerContainer addRelative left'}>
                <Image src={'../assets/img/capmodel1.jpg'} className={'e-img-rsp'} />
                <Block className={'layer'}>
                  <Text type={'h1'} className={'hugeText e-text-grey-900'}>LARUS</Text>
                </Block>{/* end a .layer*/}
                <Block className={'layer flexBox flexColumn spaceBetween'}>
                  <Block>
                    <Block className={'logo flexBox e-v-center'}>
                      <Block className={'disc e-background-orange-400 e-text-white flexBox e-v-end e-h-center'}>
                        <Text type={'strong'} className={'one'}>1</Text>
                      </Block>
                      <Text className={'fullName'}>
                        <Text type={'strong'} className={'e-text-orange-400'}>1</Text>
                        <Text type={'strong'} className={'e-text-white'}>brand</Text>
                      </Text>
                    </Block>{/* end .logo*/}
                  </Block>

                  <Block className={'flexBox flexColumn alignItemsStart'}>
                    <Text type={'h1'} className={'e-no-margin e-text-white largeText'}>Larus.</Text>
                    <Text type={'h1'} className={'e-no-margin largeText'}>
                      <Text className={'e-text-orange-400'}>Express</Text>
                      <Text className={'e-text-white'}>Yourself</Text>
                    </Text>
                    <Text type={'em'} className={'e-text-white'}>Small brand with rich idea</Text>
                    <Btn label={'KNOW MORE'} ripple={true} type={'flat'} className={'e-text-white addRadius50 btn-icon headerBtn white e-margin-top-25'} />
                  </Block>
                </Block>{/* end a .layer*/}
              </Block>{/*end left .headerContainer*/}
              <Block className={'headerContainer right e-background-grey-700 addPadding50 flexBox flexColumn justCenter'}>
                <Block className={'absoluteBtn right'}>
                  <Btn ripple={true} type={'flat'} icon={'navigation-close'} className={'e-text-white btn-icon no-min-size e-headline'} />
                </Block>
                <List className={'e-no-style'}>
                  <ListItem className={'addPadding15'}>
                    <Text type={'strong'} className={'e-text-white e-button'}>About</Text>
                  </ListItem>
                  <ListItem className={'addPadding15'}>
                    <Text type={'strong'} className={'e-text-orange-400 e-button'}>Blog</Text>
                  </ListItem>
                  <ListItem className={'addPadding15'}>
                    <Text type={'strong'} className={'e-text-white e-button'}>Services</Text>
                  </ListItem>
                  <ListItem className={'addPadding15'}>
                    <Text type={'strong'} className={'e-text-white e-button'}>Contacts</Text>
                  </ListItem>
                </List>

                <List type={'inline'}>
                  <ListItem className={'e-text-white addCursor'}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </ListItem>
                  <ListItem className={'e-text-white addCursor'}>
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </ListItem>
                  <ListItem className={'e-text-white addCursor'}>
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </ListItem>
                </List>
              </Block>{/* end eight .headerContainer*/}
            </Block>
          </Block>{/* end .e-row */}


        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandHeaders;
