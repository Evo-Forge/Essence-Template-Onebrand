import React from 'react';
import ClassNames from 'classnames';


import { Block, Btn, Card, Chip, Divider, Image, Input, Tab, Text, List, ListItem, Icon} from 'react-essence';

var ChipLarus = {
  name: 'ChipLarus',
  text: [<strong className={'e-text-grey-900'}>Larus</strong>],
  deletable: false
}
var ChipUI = {
  name: 'ChipUI',
  text: [<strong className={'e-text-grey-900'}>UI</strong>],
  deletable: false
}
var ChipBlog = {
  name: 'ChipBlog',
  text: [<strong className={'e-text-grey-900'}>Blog</strong>],
  deletable: false
}
var ChipInspiration = {
  name: 'ChipInspiration',
  text: [<strong className={'e-text-grey-900'}>Inspiration</strong>],
  deletable: false
}
var ChipUX = {
  name: 'ChipUX',
  text: [<strong className={'e-text-grey-900'}>UX</strong>],
  deletable: false
}
var ChipBrand = {
  name: 'ChipBrand',
  text: [<strong className={'e-text-grey-900'}>Brand</strong>],
  deletable: false
}
var tabs = {
 'header': [
   { 'context': (<Text className={'e-text-grey-900 e-body2'}>latest</Text>) },
   { 'context': (<Text className={'e-text-grey-900 e-body2'}>popular</Text>) },
   { 'context': (<Text className={'e-text-grey-900 e-body2'}>most discussed</Text>) }
  ],
  'rows': [
   (<Block className={'e-row'}>
     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

   </Block>),
   (<Block className={'e-row'}>
     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

   </Block>),
   (<Block className={'e-row'}>
     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

     <Block className={'brick brick-4 addPadding15'}>
       <Text className={'e-headline e-text-grey-900'}>
         Awesome collaboration with Jack Daniels
       </Text>

       <Text type={'p'} className={'e-body1 e-text-grey-900'}>
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
         <ListItem className={'flexBox alignItemsCenter'}>
           <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
           <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
         </ListItem>
       </List>
     </Block>

   </Block>)
 ]
};

class DropMenuBlog extends React.Component {
  render() {
    return (
      <ul className={'acordeonMenu'}>
        <li>
          <input type='checkbox' name='button1' id='button1b'></input>
          <label htmlFor='button1b' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>brand news</span>
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu A1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu A2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu A3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>

        <li className={'menuBtn'}>
          <input type='checkbox' name='button2' id='button2b'></input>
          <label htmlFor='button2b' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>history</span>
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
          <input type='checkbox' name='button3' id='button3b'></input>
          <label htmlFor='button3b' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>music</span>
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu B1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu B2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu B3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>
        <li>
          <input type='checkbox' name='button4' id='button4b'></input>
          <label htmlFor='button4b' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>nature</span>
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu C1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu C2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu C3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>
        <li>
          <input type='checkbox' name='button5' id='button5b'></input>
          <label htmlFor='button5b' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>lifestyle</span>
          </label>
          <ul className={'e-body2'}>
            <li className={'addPadding15 e-text-capitalize'}>submenu D1</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu D2</li>
            <li className={'addPadding15 e-text-capitalize'}>submenu D3</li>
          </ul>
          <Divider classes={'thin e-background-grey-300'} />
        </li>
        <li>
          <input type='checkbox' name='button6' id='button6b'></input>
          <label htmlFor='button6b' className={'e-text-grey-700 addPadding15'}>
            <span className={'e-button'}>adventure</span>
          </label>
        </li>
      </ul>
    );
  }
}

class OnebrandBlog extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>Blog</Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-6 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-white addRelative flexGrowThis flexBox'}>
                <Block className={'layer addPadding15 e-background-orange-400 flexGrowThis flexBox flexColumn spaceBetween'}>
                  <Block>
                    <Block>
                      <Btn label={'brand news'} ripple={true} type={'raised'} className={'raised e-text-grey-900 e-background-white addRadius50'} />
                    </Block>

                    <Text type={'h1'} className={'e-text-white addAfter'}>
                      Larus Summer 15 is out now
                    </Text>

                    <Text type={'p'} className={'e-text-white e-body1'}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </Text>

                    <List type={'inline'}>
                      <ListItem className={'flexBox alignItemsCenter'}>
                        <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-white btn-icon no-min-size'} />
                        <Text type={'em'} className={'e-text-white e-body1'}>12</Text>
                      </ListItem>
                      <ListItem className={'flexBox alignItemsCenter'}>
                        <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-white btn-icon no-min-size'} />
                        <Text type={'em'} className={'e-text-white e-body1'}>18</Text>
                      </ListItem>
                      <ListItem className={'flexBox alignItemsCenter'}>
                        <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-white btn-icon no-min-size'} />
                        <Text type={'em'} className={'e-text-white e-body1'}>2 hours ago</Text>
                      </ListItem>
                    </List>
                  </Block>

                  <Block className={'flexBox spaceBetween alignItemsCenter e-margin-top-25'}>
                    <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'e-text-white btn-icon no-min-size'} />
                    <Text className={'e-text-white e-button'}>read more</Text>
                    <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-white btn-icon no-min-size'} />
                  </Block>
                </Block>
              </Card>
            </Block>

            <Block className={'brick brick-6 e-no-padding'}>
              <Block className={'e-row'}>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white addPadding15'}>
                    <Block>
                      <Btn label={'history'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                    </Block>

                    <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                      The great history of creating and designing Larus fabric pattern
                    </Text>

                    <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </Text>

                    <Block className={'flexBox spaceBetween'}>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>18</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
                        </ListItem>
                      </List>
                      <Btn ripple={true} type={'flat'} label={'read more'} className={'e-text-orange-400 btn-icon e-button'} />
                    </Block>
                  </Card>
                </Block>
              </Block>
              <Block className={'e-row'}>
                <Block className={'brick brick-12 flexBox flexGrowThis'}>
                  <Card className={'cardContainer e-background-white addPadding15 flexGrowThis'}>
                    <Block>
                      <Btn label={'nature'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                    </Block>

                    <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                      We came to show you the perfect communication with nature
                    </Text>

                    <Block className={'flexBox justEnd'}>
                      <Btn ripple={true} type={'flat'} label={'read more'} className={'e-text-orange-400 btn-icon e-button'} />
                    </Block>
                  </Card>
                </Block>
              </Block>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'cardContainer e-background-white'}>
                <Block className={'flexBox spaceBetween'}>
                  <Tab data={tabs} classes={'e-background-white'} indicator={'e-background-grey-500'} />
                  {/*<Block className={'e-headline addPadding15'}>
                    <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'e-text-grey-900 btn-icon no-min-size'} />
                    <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-grey-900 btn-icon no-min-size'} />
                  </Block> */}
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-white addRelative flexGrowThis'}>
                <Block className={'absoluteBtn'}>
                  <Btn label={'lifestyle'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                </Block>
                <Image src={'../assets/img/lildicky.jpeg'} className={'e-img-rsp'} />
                <Block className={'addPadding15'}>
                  <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                    <Text type={'strong'}>Faces &amp; Laces. Special wrath collection</Text>
                  </Text>
                  <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
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
              </Card>
            </Block>

            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-orange-400 addRelative flexGrowThis flexBox flexColumn'}>
                <Block className={'absoluteBtn'}>
                  <Btn label={'history'} ripple={true} type={'raised'} className={'raised e-text-grey-900 e-background-white addRadius50'} />
                </Block>

                <Block className={'addPadding15 e-margin-top-50 flexBox flexColumn spaceBetween flexGrowThis'}>
                  <Text type={'h1'} className={'e-text-white e-headline'}>
                    <Text type={'strong'}>Faces &amp; Laces. Special wrath collection</Text>
                  </Text>
                  <Text type={'p'} className={'e-text-white e-body1'}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
                  </Text>
                  <List type={'inline'}>
                    <ListItem className={'flexBox alignItemsCenter'}>
                      <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-white btn-icon no-min-size'} />
                      <Text type={'em'} className={'e-text-white e-body1'}>12</Text>
                    </ListItem>
                    <ListItem className={'flexBox alignItemsCenter'}>
                      <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-white btn-icon no-min-size'} />
                      <Text type={'em'} className={'e-text-white e-body1'}>18</Text>
                    </ListItem>
                  </List>
                  <Block className={'flexBox e-v-center'}>
                    <Image src={'../assets/img/arnold-square.jpg'} width={'80px'} height={'80px'} className={'roundedImg addOrangeBorder'} />
                    <Block className={'addPadding15'}>
                      <Text type={'em'} className={'e-body1 e-text-white'}>by</Text>
                      <Text type={'p'} className={'e-body1 e-no-margin e-text-white'}>Arnold</Text>
                      <Text type={'p'} className={'e-body1 e-no-margin e-text-white'}>Schwartzenegger</Text>
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>

            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-grey-500 addRelative flexGrowThis flexBox flexColumn'}>
                <Block className={'absoluteBtn'}>
                  <Btn label={'music'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                </Block>

                <Block className={'addPadding15 e-margin-top-50 flexBox flexColumn spaceBetween flexGrowThis'}>
                  <Text type={'h1'} className={'e-text-white e-headline'}>
                    <Text type={'strong'}>Faces &amp; Laces. Special wrath collection</Text>
                  </Text>
                  <Text type={'p'} className={'e-text-white e-body1'}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
                  </Text>
                  <List type={'inline'}>
                    <ListItem className={'flexBox alignItemsCenter'}>
                      <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-white btn-icon no-min-size'} />
                      <Text type={'em'} className={'e-text-white e-body1'}>2 hours ago</Text>
                    </ListItem>
                  </List>
                  <Block className={'flexBox e-v-center'}>
                    <Image src={'../assets/img/arnold-square.jpg'} width={'80px'} height={'80px'} className={'roundedImg addGreyBorder'} />
                    <Block className={'addPadding15'}>
                      <Text type={'em'} className={'e-body1 e-text-white'}>by</Text>
                      <Text type={'p'} className={'e-body1 e-no-margin e-text-white'}>Arnold</Text>
                      <Text type={'p'} className={'e-body1 e-no-margin e-text-white'}>Schwartzenegger</Text>
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>

            <Block className={'brick brick-3 flexGrowThis flexBox'}>
              <Card className={'cardContainer eagleBg addRelative flexGrowThis flexBox flexColumn'}>
                <Block className={'absoluteBtn'}>
                  <Btn label={'history'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                </Block>

                <Block className={'addPadding15 e-margin-top-50 flexBox flexColumn justEnd flexGrowThis'}>
                  <Text type={'h1'} className={'e-text-white e-headline'}>
                    <Text type={'strong'}>Faces &amp; Laces. Special wrath collection</Text>
                  </Text>
                  <Text type={'p'} className={'e-text-white e-body1'}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sources
                  </Text>
                  <List type={'inline'}>
                    <ListItem className={'flexBox alignItemsCenter'}>
                      <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-orange-400 btn-icon no-min-size'} />
                      <Text type={'em'} className={'e-text-orange-400 e-body1'}>12</Text>
                    </ListItem>
                    <ListItem className={'flexBox alignItemsCenter'}>
                      <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-orange-400 btn-icon no-min-size'} />
                      <Text type={'em'} className={'e-text-orange-400 e-body1'}>18</Text>
                    </ListItem>
                  </List>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-9 flexGrowThis flexBox'}>
              <Card className={'cardContainer e-background-white flexGrowThis'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-5 e-no-padding removeBottomMargin addRelative'}>
                    <Block className={'absoluteBtn'}>
                      <Btn label={'music'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50'} />
                    </Block>
                    <Image src={'../assets/img/famous-people.jpg'} className={'e-img-rsp'} />
                  </Block>
                  <Block className={'brick brick-7 flexBox flexColumn spaceBetween'}>
                    <Block>
                      <Text type={'h1'} className={'e-text-grey-900 e-headline'}>
                        The great history of creating and designing Larus fabric pattern
                      </Text>

                      <Text type={'p'} className={'e-text-grey-900 e-body1'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                      </Text>
                    </Block>

                    <Block className={'flexBox spaceBetween'}>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>18</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-900 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-900 e-body1'}>2 hours ago</Text>
                        </ListItem>
                      </List>
                      <Btn ripple={true} type={'flat'} label={'read more'} className={'e-text-orange-400 btn-icon e-button'} />
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
            <Block className={'brick brick-3'}>
              <Card className={'cardContainer e-background-white'}>
                <DropMenuBlog />
              </Card>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-3 e-no-padding'}>
              <Block className={'e-row'}>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white'}>
                    <Block className={'addPadding15'}>
                      <Text className={'e-button'}>search</Text>
                    </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                    <Block className={'addPadding15'}>
                      <Input type={'text'} name={'label'} placeholder={'Type your request'} className={'roundedCorners inputStyle addPadding15'} />
                    </Block>
                  </Card>
                </Block>
              </Block>

              <Block className={'e-row'}>
                <Block className={'brick brick-12'}>
                  <Card className={'cardContainer e-background-white'}>
                    <Block className={'addPadding15'}>
                      <Text className={'e-button'}>tag cloud</Text>
                    </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                    <Block className={'addPadding15'}>
                      <Chip className={'e-background-white'} data={ChipLarus}/>
                      <Chip className={'e-background-white'} data={ChipUI}/>
                      <Chip className={'e-background-white'} data={ChipBlog}/>
                      <Chip className={'e-background-white'} data={ChipInspiration}/>
                      <Chip className={'e-background-white'} data={ChipUX}/>
                      <Chip className={'e-background-white'} data={ChipBrand}/>
                    </Block>
                  </Card>
                </Block>
              </Block>
            </Block>
            <Block className={'brick brick-3 flexBox'}>
              <Card className={'cardContainer e-background-white flexGrowThis'}>
                <Block className={'addPadding15'}>
                  <Text className={'e-button'}>latest articles</Text>
                </Block>
                <Divider classes={'thin e-background-grey-300'} />
                <Block className={'articleContainer'}>
                  <Block className={'articleList'}>
                    <Block className={'articleItem addPadding15'}>
                      <Text type={'h1'} className={'e-text-grey-900 e-headline e-no-margin'}>
                        Kravz: I like Larus. Its top quality brand with great ideal!
                      </Text>
                      <Text type={'em'} className={'e-text-grey-500 e-body1'}>
                        2 hours ago
                      </Text>
                    </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                      <Block className={'articleItem addPadding15'}>
                        <Text type={'h1'} className={'e-text-grey-900 e-headline e-no-margin'}>
                          Kravz: I like Larus. Its top quality brand with great ideal!
                        </Text>
                        <Text type={'em'} className={'e-text-grey-500 e-body1'}>
                          2 hours ago
                        </Text>
                      </Block>
                    <Divider classes={'thin e-background-grey-300'} />
                      <Block className={'articleItem addPadding15'}>
                        <Text type={'h1'} className={'e-text-grey-900 e-headline e-no-margin'}>
                          Kravz: I like Larus. Its top quality brand with great ideal!
                        </Text>
                        <Text type={'em'} className={'e-text-grey-500 e-body1'}>
                          2 hours ago
                        </Text>
                      </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
            <Block className={'brick brick-6 flexBox'}>
              <Card className={'cardContainer e-background-white flexGrowThis'}>
                <Block className={'addPadding15'}>
                  <Text className={'e-button'}>most discussed</Text>
                </Block>
                <Divider classes={'thin e-background-grey-300'} />
                <Block className={'e-row'}>
                  <Block className={'brick brick-6 e-no-padding e-no-margin'}>
                    <Image src={'../assets/img/musician.png'} className={'e-img-rsp'} />
                  </Block>
                  <Block className={'brick brick-6'}>
                    <Text type={'h1'} className={'e-headline e-text-grey-900'}>
                      My day ususally starts with T-Shirt and snapback.
                    </Text>
                    <List type={'inline'}>
                      <ListItem className={'flexBox alignItemsCenter'}>
                        <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-500 btn-icon no-min-size'} />
                        <Text type={'em'} className={'e-text-grey-500 e-body1'}>18</Text>
                      </ListItem>
                    </List>
                  </Block>
                </Block>
                <Block className={'e-row'}>
                  <Block className={'brick brick-12 flexBox e-v-center spaceBetween'}>
                    <Text type={'h1'} className={'e-text-grey-900 e-headline e-no-margin addPadding15'}>Show your Larus!</Text>
                    <Block className={'flexBox e-v-center'}>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-500 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-500 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-grey-500 btn-icon no-min-size e-headline addMargin15'} />
                    </Block>
                  </Block>
                  <Block className={'brick brick-12 flexBox e-v-center spaceBetween'}>
                    <Text type={'h1'} className={'e-text-grey-900 e-headline e-no-margin addPadding15'}>Create design for next collection</Text>
                    <Block className={'flexBox e-v-center'}>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-500 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-500 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-grey-500 btn-icon no-min-size e-headline addMargin15'} />
                    </Block>
                  </Block>
                  <Block className={'brick brick-12 flexBox e-v-center spaceBetween'}>
                    <Text type={'h1'} className={'e-text-grey-900 e-headline e-no-margin addPadding15'}>New snapback release</Text>
                    <Block className={'flexBox e-v-center'}>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-500 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-500 e-body1'}>18</Text>
                        </ListItem>
                      </List>
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-grey-500 btn-icon no-min-size e-headline addMargin15'} />
                    </Block>
                  </Block>
                </Block>
              </Card>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'cardContainer e-background-orange-400'}>
                <Block className={'flexBox spaceBetween e-v-center'}>
                  <Block className={'addPadding15 flexBox e-v-center'}>
                    <Text type={'p'} className={'e-text-white e-body1 e-no-margin'}>Larus Summer 15 collection is out now</Text>
                    <Text type={'p'} className={'e-display-1 e-text-white marginLeftRight'}>&middot;</Text>
                    <Text type={'p'} className={'e-text-white e-body1 e-no-margin'}>Create design for new collection</Text>
                    <Text type={'p'} className={'e-display-1 e-text-white marginLeftRight'}>&middot;</Text>
                    <Text type={'p'} className={'e-text-white e-body1 e-no-margin'}>Eagle with 5 stars. What is it?</Text>
                  </Block>
                  <Block className={'e-headline addPadding15'}>
                    <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'e-text-white btn-icon no-min-size'} />
                    <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'e-text-white btn-icon no-min-size'} />
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

module.exports = OnebrandBlog;
