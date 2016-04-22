import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Card, CardHeader, CardContent, CardFooter, Image, Text, Divider, Menu, List, ListItem, Icon, Input, Slider, Switch } from 'react-essence';

class DropMenu extends React.Component {
  render() {
    return (
      <ul className={'acordeonMenu'}>
        <li>
          <input type='checkbox' name='button1' id='button1'></input>
          <label htmlFor='button1' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>women</span>
            <Icon name={"hardware-keyboard-arrow-left"} />
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu A1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu A2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu A3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>

        <li className={'menuBtn'}>
          <input type='checkbox' name='button2' id='button2'></input>
          <label htmlFor='button2' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>men</span>
            <Icon name={"hardware-keyboard-arrow-left"} />
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>Jackets</li>
            <li className={'addPadding15 e-text-capitalize'}>Headwear</li>
            <li className={'addPadding15 e-text-capitalize'}>T-Shirts</li>
            <li className={'addPadding15 e-text-capitalize'}>Shoes</li>
            <li className={'addPadding15 e-text-capitalize'}>Gloves</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>
        <li>
          <input type='checkbox' name='button3' id='button3'></input>
          <label htmlFor='button3' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>kids</span>
            <Icon name={"hardware-keyboard-arrow-left"} />
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu B1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu B2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu B3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>
        <li>
          <input type='checkbox' name='button4' id='button4'></input>
          <label htmlFor='button4' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>accesories</span>
            <Icon name={"hardware-keyboard-arrow-left"} />
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu C1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu C2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu C3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>
        <li>
          <input type='checkbox' name='button5' id='button5'></input>
          <label htmlFor='button5' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>e-books</span>
            <Icon name={"hardware-keyboard-arrow-left"} />
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu D1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu D2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu D3</li>
          </ul>
        </li>
      </ul>
    );
  }
}

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
                      <Btn label={'new'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                    </Block>
                    <Block className={'mainProductImage addPadding50'}>
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
                    <Divider classes={'thin e-background-grey-300'} />
                    <Block className={'alignEnd flexBox e-v-center'}>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-lime-900'}/>
                      <Btn icon={'action-done'} ripple={true} type={'fab'} className={'fab-mini e-background-lime-700 e-text-white fab-icon addWhite'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-grey-600'}/>
                    </Block>
                    <Block className={'alignEnd'}>
                      <Btn label={'XS'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'S'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'M'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'L'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'XL'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'XXL'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                    </Block>
                    <Block className={'alignEnd'}>
                      <Btn label={'-'} ripple={true} type={'fab'} className={'fab-mini e-background-grey-200 e-text-grey-900'}/>
                      <Text className={'e-text-grey-500'}> 1 </Text>
                      <Btn label={'+'} ripple={true} type={'fab'} className={'fab-mini e-background-grey-200 e-text-grey-900'}/>
                    </Block>
                    <Block className={'flexBox fullWidth spaceBetween e-v-center'}>
                      <Text type={'p'} className={'e-text-grey-900 e-display-1 flexBox e-v-center e-no-margin'}>
                        <Icon name={"editor-attach-money"} />
                        <Text>18</Text>
                      </Text>
                      <Block className={'flexBox e-v-center'}>
                        <Btn icon={'action-favorite-outline'} ripple={true} type={'fab'} className={'fab-mini e-btn-fab-mini e-background-grey-200 e-text-orange-400 fab-icon'}/>
                        <Btn label={'add to cart'} ripple={true} type={'raised'} className={'raised e-background-orange-400 e-text-white e-body1 addRadius50'} />
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
                    <Block className={'mainProductImage addPadding50'}>
                      <Image src={'../assets/img/cap4.jpg'} className={'e-img-rsp'} />
                    </Block>
                  </Block>

                  <Block className={'brick brick-5 flexBox flexColumn justCenter addPadding50'}>
                    <Text type={'p'} className={'e-text-orange-400 e-button'}>AMAZING QUALITY</Text>
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

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'e-background-white cardContainer'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-5 flexBox flexColumn justCenter addPadding50'}>
                    <Text type={'p'} className={'e-text-orange-400 e-button'}>AMAZING QUALITY</Text>
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

                  <Block className={'brick brick-7'}>
                    <Block className={'mainProductImage addPadding50'}>
                      <Image src={'../assets/img/cap3.jpg'} className={'e-img-rsp'} />
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-3'}>
              <Card className={'cardContainer e-background-white'}>
                <DropMenu />
              </Card>
            </Block>{/* end .brick-3*/}

            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-white flexBox'}>
                <Block className={'addPadding15 addRelative flexBox flexColumn spaceBetween flexGrowThis'}>
                  <Block>
                    <Block>
                      <Btn label={'new'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50 addWhite'} />
                    </Block>
                    <Image src={'../assets/img/cap1.jpg'} className={'e-img-rsp'} />
                  </Block>

                  <Block>
                    <Text type={'h1'} className={'e-text-grey-900'}>
                      Larus Camo Snapback
                    </Text>
                    <Text type={'em'} className={'e-text-grey-500'}>
                      Headwear &amp; Accessories
                    </Text>
                    <Block className={"e-text-orange-500 e-display-1 flexBox e-v-center"}>
                      <Icon name={"editor-attach-money"} />
                      <Text>18</Text>
                    </Block>
                  </Block>

                  <Btn type={'button'} ripple={'true'} className={'fab e-btn-fab e-text-white e-background-orange-400 fab-icon addWhite addToCartFab'} icon={'action-add-shopping-cart'} />
                </Block>
              </Card>
            </Block>{/* end .brick-3*/}

            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-white addRelative flexGrowThis flexBox'}>
                <Block className={'flexBox flexColumn spaceBetween flexGrowThis'}>
                  <Block className={'addPadding15'}>
                    <Block>
                      <Btn label={'exclusive'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                    </Block>
                    <Image src={'../assets/img/camo_shirt.jpg'} height={'200px'} className={'e-img-rsp'} />
                  </Block>
                  <Block className={'e-background-orange-400 addPadding15'}>
                    <Text type={'h1'} className={'e-text-white e-no-margin e-headline'}>
                      Larus Green T-Shirt
                    </Text>
                    <Text type={'em'} className={'e-text-white'}>
                      Headwear &amp; Accessories
                    </Text>
                    <Block className={"e-text-white e-display-1 flexBox e-v-center"}>
                      <Icon name={"editor-attach-money"} />
                      <Text>18</Text>
                    </Block>
                    <Btn type={'button'} ripple={'true'} className={'fab e-btn-fab e-text-orange-400 e-background-white fab-icon addToCartFab'} icon={'action-add-shopping-cart'} />
                  </Block>
                </Block>
              </Card>
            </Block>{/* end .brick-3*/}

            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-white flexGrowThis flexBox flexColumn'}>
                <Block className={'addPadding15 flexGrowThis flexBox flexColumn spaceBetween'}>
                  <Image src={'../assets/img/camo_shirt.jpg'} className={'e-img-rsp'} />
                  <Block>
                    <Text type={'h1'} className={'e-text-grey-900 e-no-margin'}>
                      Larus Camo
                    </Text>
                    <Text type={'h1'} className={'e-text-grey-900 e-no-margin'}>
                      Panama Hat
                    </Text>
                    <Text type={'em'} className={'e-text-grey-500'}>
                      Headwear &amp; Accessories
                    </Text>
                  </Block>
                </Block>
                <Block className={'flexBox spaceBetween'}>
                  <Block className={"e-text-grey-900 e-display-1 flexBox e-v-center e-background-grey-300 price e-h-center"}>
                    <Icon name={"editor-attach-money"} />
                    <Text>18</Text>
                  </Block>
                  <Block className={'e-background-orange-400 addToCartLink flexBox e-h-center'}>
                    <Text type={'a'} className={'e-button e-text-white'}>add to cart</Text>
                  </Block>
                </Block>
              </Card>
            </Block>{/* end .brick-3*/}
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-3 e-no-padding'}>
              <Block className={'e-row'}>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white'}>
                    <Block className={'addPadding15'}>
                      <Text type={'strong'}>
                        <Text type={'p'} className={'e-button e-text-grey-700 e-no-margin'}>Colors</Text>
                      </Text>
                    </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                    <Block className={'flexBox colorsContainer justCenter e-margin-bottom-25 e-margin-top-25'}>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-light-green-900 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-lime-700 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-yellow-900 e-text-white fab-icon'}/>
                      <Btn icon={'action-done'} ripple={true} type={'fab'} className={'fab-mini e-background-yellow-700 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-orange-900 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-orange-700 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-brown-900 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-brown-700 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-light-green-900 e-text-white fab-icon'}/>
                      <Btn ripple={true} type={'fab'} className={'fab-mini e-background-light-green-700 e-text-white fab-icon'}/>
                    </Block>
                  </Card>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white'}>
                    <Block className={'addPadding15'}>
                      <Text type={'strong'}>
                        <Text type={'p'} className={'e-button e-text-grey-700 e-no-margin'}>sizes</Text>
                      </Text>
                    </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                    <Block className={'flexBox colorsContainer justCenter e-margin-bottom-25 e-margin-top-25'}>
                      <Btn label={'XS'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'S'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'M'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'L'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'XL'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                      <Btn label={'XXL'} ripple={true} type={'flat'} className={'e-text-grey-700 btn-icon addMargin15'}/>
                    </Block>
                  </Card>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white e-padding-bottom-25'}>
                    <Block className={'addPadding15'}>
                      <Text type={'strong'}>
                        <Text type={'p'} className={'e-button e-text-grey-700 e-no-margin'}>Price</Text>
                      </Text>
                    </Block>
                    <Slider discrete={true} step={1} start={20}/>
                  </Card>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white addPadding15'}>
                    <Block className={'flexBox justEnd'}>
                      <Btn ripple={true} type={'flat'} icon={'navigation-close'} className={'e-text-grey-500 btn-icon no-min-size'} />
                    </Block>
                    <Text type={'h1'} className={'e-text-center e-text-grey-900'}>
                      Larus Green Snapback
                    </Text>
                    <Text type={'p'} className={'e-button e-text-grey-500 e-text-center'}>
                      added to your cart
                    </Text>
                  </Card>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white flexBox e-v-center'}>
                    <Icon name={"action-shopping-basket"} className={"e-text-grey-500 addMargin15 e-display-1"} />
                    <Text type={'strong'}>
                      <Text type={'p'} className={'e-text-grey-500 e-button addMargin15'}>
                        your cart is empty
                      </Text>
                    </Text>
                  </Card>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-orange-400 e-text flexBox e-v-center'}>
                    <Icon name={"action-shopping-basket"} className={"e-text-white addMargin15 e-display-1"} />
                    <Text type={'strong'}>
                      <Text type={'p'} className={'e-text-white e-button addMargin15'}>
                        3 items in your cart
                      </Text>
                    </Text>
                  </Card>
                </Block>
              </Block>
            </Block>
            <Block className={'brick brick-6 e-no-padding'}>
              <Block className={'e-row'}>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white'}>
                    <Block className={'imgContainer addRelative'}>
                      <Image src={'../assets/img/cap3.jpg'} />
                      <Btn label={'exclusive'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50 absoluteBtn'} />
                    </Block>
                    <Block className={'e-row'}>
                      <Block className={'brick brick-5 addPadding15'}>
                        <Text type={'h1'} className={'e-text-grey-900'}>Larus Green Snapback</Text>
                        <Text type={'em'} className={'e-text-grey-500'}>Headwear &amp; Accesories</Text>
                      </Block>
                      <Block className={'brick brick-7 flexBox flexColumn e-v-end e-margin-bottom-25'}>
                        <Block className={'raised addPadding15 fullWidth e-no-padding e-no-margin doubleBtn addRadius50'}>
                          <Btn label={'$18'} ripple={true} type={'default'} className={'flat e-no-margin strechBtn left e-background-grey-100 e-text-grey-900'} />
                          <Btn label={'Add to cart'} ripple={true} type={'default'} className={'flat e-no-margin strechBtn right e-background-orange-400 e-text-white'} />
                        </Block>
                      </Block>
                    </Block>
                  </Card>
                </Block>
              </Block>
              <Block className={'e-row'}>
                <Block className={'brick brick-6'}>
                  <Card className={'cardContainer e-background-white'}>
                    <Block className={'imgContainer addRelative newArivals'}>
                      <Image src={'../assets/img/cap3.jpg'} />
                      <Btn label={'new arivals'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50 absoluteBtn'} />
                      <Text type={'h1'} className={'e-text-grey-900 addPadding15'}>
                        Summer Collection Larus green Snapback
                      </Text>
                    </Block>
                    <Block className={'e-background-orange-400 addToCartLink flexBox e-h-center fullWidth'}>
                      <Btn type='button' label={'add to cart'} ripple={true} className={'flat e-background-orange-400 e-text-white e-no-margin alignStrech fullWidth addPadding15'} />
                    </Block>
                  </Card>
                </Block>
                <Block className={'brick brick-6'}>
                  <Card className={'cardContainer e-background-white flexBox flexColumn alignItemsCenter'}>
                    <Btn label={'exclusive'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50 e-margin-top-25 e-margin-bottom-25'} />
                    <Image src={'../assets/img/cap1.jpg'} width={'33%'} />
                    <Text type={'h1'} className={'e-text-grey-900 e-text-center'}>Larus Camo Snapback</Text>
                    <Text type={'em'} className={'e-text-grey-500'}>Headwear &amp; Accessories</Text>

                    <Block className={'flexBox spaceBetween alignStrech e-margin-top-25'}>
                      <Block className={"e-text-grey-900 e-display-1 flexBox e-v-center e-background-grey-300 price e-h-center"}>
                        <Icon name={"editor-attach-money"} />
                        <Text>18</Text>
                      </Block>
                      <Block className={'e-background-orange-400 addToCartLink flexBox e-h-center'}>
                        <Btn type='button' label={'add to cart'} ripple={true} className={'flat e-background-orange-400 e-text-white e-no-margin alignStrech fullWidth addPadding15'} />
                      </Block>
                    </Block>
                  </Card>
                </Block>
              </Block>
            </Block>
            <Block className={'brick brick-3 e-no-padding'}>
              <Block className={'e-row'}>
                <Block className={'brick brick-12 e-no-padding'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-4'}>
                      <Card className={'cardContainer e-background-white smallCartCard flexBox'}>
                        <Block className={'left flexBox e-v-center e-h-center e-background-grey-300'}>
                          <Icon name={"action-shopping-basket"} className={"e-text-white"} />
                        </Block>
                        <Block className={'right flexBox e-v-center e-h-center e-text-grey-500'}>
                          {/* add class .active to either .left or .right element to make the background orange */}
                          <Text type={'strong'}>3</Text>
                        </Block>
                      </Card>
                    </Block>
                    <Block className={'brick brick-4'}>
                      <Card className={'cardContainer e-background-white smallCartCard flexBox'}>
                        <Block className={'left flexBox e-v-center e-h-center e-background-grey-300 active'}>
                          <Icon name={"action-shopping-basket"} className={"e-text-white"} />
                        </Block>
                        <Block className={'right flexBox e-v-center e-h-center e-text-grey-500'}>
                          {/* add class .active to either .left or .right element to make the background orange */}
                          <Text type={'strong'}>3</Text>
                        </Block>
                      </Card>
                    </Block>
                    <Block className={'brick brick-4'}>
                      <Card className={'cardContainer e-background-white smallCartCard flexBox'}>
                        <Block className={'left flexBox e-v-center e-h-center e-background-grey-300'}>
                          <Icon name={"action-shopping-basket"} className={"e-text-white"} />
                        </Block>
                        <Block className={'right flexBox e-v-center e-h-center e-text-grey-500 active'}>
                          {/* add class .active to either .left or .right element to make the background orange */}
                          <Text type={'strong'}>3</Text>
                        </Block>
                      </Card>
                    </Block>
                  </Block>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white cartItemsView flexBox flexColumn'}>
                    <Block className={'item flexBox e-v-center spaceBetween addPadding15'}>
                      <Block>
                        <Image src='../assets/img/cap1.jpg' width={'100px'} className={'e-img-rsp'} />
                      </Block>
                      <Block className={'flexBox flexColumn addPadding15'}>
                        <Text type={'strong'}>Larus Wrath Snapback</Text>
                        <Text type={'strong'} className={'flexBox e-v-center'}>
                          <Icon name={"editor-attach-money"} />
                          <Text>54</Text>
                        </Text>
                      </Block>
                      <Icon name={"navigation-close"} className={"e-text-grey-500"} />
                    </Block>
                    <Block className={'item flexBox e-v-center spaceBetween addPadding15'}>
                      <Block>
                        <Image src='../assets/img/cap1.jpg' width={'100px'} className={'e-img-rsp'} />
                      </Block>
                      <Block className={'flexBox flexColumn addPadding15'}>
                        <Text type={'strong'}>Larus Wrath Snapback</Text>
                        <Text type={'strong'} className={'flexBox e-v-center'}>
                          <Icon name={"editor-attach-money"} />
                          <Text>54</Text>
                        </Text>
                      </Block>
                      <Icon name={"navigation-close"} className={"e-text-grey-500"} />
                    </Block>
                    <Block className={'item flexBox e-v-center spaceBetween addPadding15'}>
                      <Block>
                        <Image src='../assets/img/cap1.jpg' width={'100px'} className={'e-img-rsp'} />
                      </Block>
                      <Block className={'flexBox flexColumn addPadding15'}>
                        <Text type={'strong'}>Larus Wrath Snapback</Text>
                        <Text type={'strong'} className={'flexBox e-v-center'}>
                          <Icon name={"editor-attach-money"} />
                          <Text>54</Text>
                        </Text>
                      </Block>
                      <Icon name={"navigation-close"} className={"e-text-grey-500"} />
                    </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                    <Block className={'item e-text-grey-900 flexBox spaceBetween addPadding15'}>
                      <Text className={'e-text-uppercase'}>total:</Text>
                      <Text type={'strong'} className={'flexBox e-v-center'}>
                        <Icon name={"editor-attach-money"} />
                        <Text>54</Text>
                      </Text>
                    </Block>
                    <Block className={'item flexBox flexColumn e-background-orange-400'}>
                      <Btn type='button' label={'add to cart'} ripple={true} className={'flat e-background-orange-400 e-text-white e-no-margin alignStrech addPadding15'} />
                    </Block>
                  </Card>
                </Block>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white addPadding15'}>
                    <Text type={'strong'}>
                      <Text type={'p'} className={'e-text-grey-900 e-button'}>Recently Viewed</Text>
                    </Text>
                    <Image src={'../assets/img/cap4.jpg'} className={'e-img-rsp'} />
                    <Text type={'h1'} className={'e-text-grey-900'}>Larus Camo Snapback</Text>
                    <Block className={'flexBox spaceBetween'}>
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'e-text-grey-500 btn-icon no-min-size'} />
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-grey-500 btn-icon no-min-size'} />
                    </Block>
                  </Card>
                </Block>
              </Block>
            </Block>
          </Block> {/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-white'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-3 flexGrowThis flexBox flexColumn justEnd removeBottomMargin addPadding15'}>
                    <Text type={'h1'} className={'e-text-orange-400 e-display-3 e-no-margin'}>
                      <Text type={'strong'}>
                        Sale
                      </Text>
                    </Text>
                  </Block>

                  <Block className={'brick brick-3 flexGrowThis e-no-padding removeBottomMargin'}>
                    <Block className={'item e-background-grey-100'}>
                      <Block className={'imgContainer smallItem addRelative'}>
                        <Image src={'../assets/img/cap3.jpg'} />
                      </Block>
                      <Block className={'e-row'}>
                        <Block className={'brick brick-8 addPadding15 '}>
                          <Text type={'h1'} className={'e-text-grey-900 e-headline'}>Larus Green Snapback</Text>
                          <Text type={'p'}>
                            <Text type={'strong'}>
                              <Text className={'e-text-grey-900 striked addRelative'}>$18 </Text>
                              <Text className={'e-text-orange-400'}> $10</Text>
                            </Text>
                          </Text>
                        </Block>
                        <Block className={'brick brick-4 flexBox flexColumn e-v-end e-margin-bottom-25'}>
                          <Btn type={'button'} ripple={'true'} className={'fab e-btn-fab e-text-white e-background-orange-400 fab-icon e-no-margin'} icon={'action-add-shopping-cart'} />
                        </Block>
                      </Block>
                    </Block>
                  </Block>

                  <Block className={'brick brick-3 flexGrowThis e-no-padding removeBottomMargin'}>
                    <Block className={'item e-background-grey-100'}>
                      <Block className={'imgContainer smallItem addRelative'}>
                        <Image src={'../assets/img/cap3.jpg'} />
                      </Block>
                      <Block className={'e-row'}>
                        <Block className={'brick brick-8 addPadding15 '}>
                          <Text type={'h1'} className={'e-text-grey-900 e-headline'}>Larus Green Snapback</Text>
                          <Text type={'p'}>
                            <Text type={'strong'}>
                              <Text className={'e-text-grey-900 striked addRelative'}>$18 </Text>
                              <Text className={'e-text-orange-400'}> $10</Text>
                            </Text>
                          </Text>
                        </Block>
                        <Block className={'brick brick-4 flexBox flexColumn e-v-end e-margin-bottom-25'}>
                          <Btn type={'button'} ripple={'true'} className={'fab e-btn-fab e-text-white e-background-orange-400 fab-icon e-no-margin'} icon={'action-add-shopping-cart'} />
                        </Block>
                      </Block>
                    </Block>
                  </Block>

                  <Block className={'brick brick-3 flexGrowThis e-no-padding removeBottomMargin'}>
                    <Block className={'item e-background-grey-100'}>
                      <Block className={'imgContainer smallItem addRelative'}>
                        <Image src={'../assets/img/cap3.jpg'} />
                      </Block>
                      <Block className={'e-row'}>
                        <Block className={'brick brick-8 addPadding15 '}>
                          <Text type={'h1'} className={'e-text-grey-900 e-headline'}>Larus Green Snapback</Text>
                          <Text type={'p'}>
                            <Text type={'strong'}>
                              <Text className={'e-text-grey-900 striked addRelative'}>$18 </Text>
                              <Text className={'e-text-orange-400'}> $10</Text>
                            </Text>
                          </Text>
                        </Block>
                        <Block className={'brick brick-4 flexBox flexColumn e-v-end e-margin-bottom-25'}>
                          <Btn type={'button'} ripple={'true'} className={'fab e-btn-fab e-text-white e-background-orange-400 fab-icon e-no-margin'} icon={'action-add-shopping-cart'} />
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-white addRelative cardHeading'}>
                <Text type={'h1'} className={'e-text-grey-300 e-no-margin e-no-padding bgText'}>exclusive</Text>
                <Text type={'strong'} className={'normalText'}>
                  <Text type={'a'} className={'e-button e-text-orange-400'}>view all products</Text>
                </Text>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-grey-300 addRelative cardHeading'}>
                <Text type={'h1'} className={'e-text-white e-no-margin e-no-padding bgText'}>exclusive</Text>
                <Text type={'strong'} className={'normalText'}>
                  <Text type={'a'} className={'e-button e-text-orange-400'}>view all products</Text>
                </Text>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-orange-400 addRelative cardHeading'}>
                <Text type={'h1'} className={'e-text-orange-500 e-no-margin e-no-padding bgText'}>exclusive</Text>
                <Text type={'strong'} className={'normalText'}>
                  <Text type={'a'} className={'e-button e-text-white'}>view all products</Text>
                </Text>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-orange-500 addRelative cardHeading'}>
                <Text type={'h1'} className={'e-text-orange-400 e-no-margin e-no-padding bgText'}>exclusive</Text>
                <Text type={'strong'} className={'normalText'}>
                  <Text type={'a'} className={'e-button e-text-white'}>view all products</Text>
                </Text>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-orange-500 addRelative cardHeading'}>
                <Text type={'strong'} className={'normalText'}>
                  <Text type={'a'} className={'e-button e-text-white'}>Buy now for &#36;18</Text>
                </Text>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12 e-no-padding'}>
              <Card className={'cardContainer e-background-white'}>
                <Block className={'fullWidth flexBox spaceBetween e-v-center cardHeading addPadding15'}>
                  <Text type={'strong'}>
                    <Text type={'p'} className={'e-text-grey-700 e-button e-no-margin'}>prev</Text>
                  </Text>
                  <Text type={'strong'}>
                    <Text type={'p'} className={'e-text-grey-700 e-button e-no-margin'}>to catalog</Text>
                  </Text>
                  <Text type={'strong'}>
                    <Text type={'p'} className={'e-text-grey-700 e-button e-no-margin'}>next</Text>
                  </Text>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row*/}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'cardContainer e-background-white addPadding15'}>
                <Block className={'fullWidth flexBox spaceBetween e-v-center'}>
                  <Text type={'strong'}>
                    <Text type={'p'} className={'e-text-grey-700 e-button e-no-margin'}>prev</Text>
                  </Text>
                  <Text type={'strong'}>
                    <Text type={'p'} className={'e-text-grey-700 e-button e-no-margin'}>to catalog</Text>
                  </Text>
                  <Text type={'strong'}>
                    <Text type={'p'} className={'e-text-grey-700 e-button e-no-margin'}>next</Text>
                  </Text>
                </Block>

                <Block className={'e-row'}>
                  <Block className={'brick brick-3 flexBox e-v-center'}>
                    <Image src={'../assets/img/cap3.jpg'} width={'100px'} />
                    <Block className={'addPadding15'}>
                      <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                        Larus Green Snapback
                      </Text>
                      <Text className={'e-text-orange-400'}>
                        $18
                      </Text>
                    </Block>
                  </Block>
                  <Block className={'brick brick-3 flexBox e-v-center'}>
                    <Image src={'../assets/img/cap3.jpg'} width={'100px'} />
                    <Block className={'addPadding15'}>
                      <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                        Larus Green Snapback
                      </Text>
                      <Text className={'e-text-orange-400'}>
                        $18
                      </Text>
                    </Block>
                  </Block>
                  <Block className={'brick brick-3 flexBox e-v-center'}>
                    <Image src={'../assets/img/cap3.jpg'} width={'100px'} />
                    <Block className={'addPadding15'}>
                      <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                        Larus Green Snapback
                      </Text>
                      <Text className={'e-text-orange-400'}>
                        $18
                      </Text>
                    </Block>
                  </Block>
                  <Block className={'brick brick-3 flexBox e-v-center'}>
                    <Image src={'../assets/img/cap3.jpg'} width={'100px'} />
                    <Block className={'addPadding15'}>
                      <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                        Larus Green Snapback
                      </Text>
                      <Text className={'e-text-orange-400'}>
                        <Text type={'strong'}>
                          $18
                        </Text>
                      </Text>
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
          </Block>

        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandEcommerce;
