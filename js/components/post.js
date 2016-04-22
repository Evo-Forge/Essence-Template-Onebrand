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

class OnebrandPost extends React.Component {
  render() {
    return (
      <Block className={'e-background-grey-900'}>
        <Block className={'e-container'}>

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Text type={'h1'} className={'e-text-white e-display-3 e-margin-top-25 e-margin-bottom-25 sectionTitle'}>Post</Text>
            </Block>
          </Block>{/* end .e-row */}

          <Block className={'e-row'}>
            <Block className={'brick brick-12'}>
              <Card className={'cardContainer e-background-white'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-12 addLatPadding50'}>
                    <Text type={'h1'} className={'e-text-grey-900 e-display-3'}>
                      <Text type={'strong'}>
                        <Text>Faces&amp;Laces. Special </Text>
                        <Text className={'e-text-orange-400'}>wrath</Text>
                        <Text> collection</Text>
                      </Text>
                    </Text>
                    <Block className={'addLatPadding50'}>
                      <List type={'inline'}>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'e-text-grey-500 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-500 e-body1'}>12</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-insert-comment'} className={'e-text-grey-500 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-500 e-body1'}>18</Text>
                        </ListItem>
                        <ListItem className={'flexBox alignItemsCenter'}>
                          <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-500 btn-icon no-min-size'} />
                          <Text type={'em'} className={'e-text-grey-500 e-body1'}>2 hours ago</Text>
                        </ListItem>
                      </List>
                    </Block>
                  </Block>
                </Block>{/* end .e-row */}

                <Block className={'addLatPadding50'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-10'}>
                      <Text type={'h1'} className={'e-headline e-text-grey-900'}>
                        <Text className={'e-text-orange-400'}>Sed</Text> ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </Text>

                      <Text type={'h1'} className={'e-text-grey-900'}>
                        Some facts about Faces&amp;Laces
                      </Text>

                      <Block className={'twoColText e-body1'}>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro <Text className={'e-text-orange-400'}>quisquam</Text> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Ut enim ad minima veniam, quis nostrum exercitationem ullam <Text className={'e-text-orange-400'}>corporis</Text> suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </Text>
                      </Block>
                    </Block>
                    <Block className={'brick brick-2'}>
                      <Block className={'flexBox e-v-center'}>
                        <Image src={'../assets/img/arnold-square.jpg'} width={'60px'} height={'60px'} className={'roundedImg addOrangeBorder e-shadow-2'} />
                        <Block className={'addPadding15'}>
                          <Text type={'em'} className={'e-body1 e-text-grey-500'}>by</Text>
                          <Text type={'p'} className={'e-body1 e-no-margin e-text-grey-500'}>Arnold</Text>
                          <Text type={'p'} className={'e-body1 e-no-margin e-text-grey-500'}>Schwartzenegger</Text>
                        </Block>
                      </Block>
                    </Block>
                  </Block>{/* end .e-row */}
                </Block>{/* end .addLatPadding50*/}

                <Block>
                  <Image src={'../assets/img/capshop.jpg'} className={'e-img-rsp'} />
                </Block>

                <Block className={'addLatPadding50'}>
                  <Text type={'p'} className={'e-text-grey-500 e-margin-top-25'}>
                    <Text type={'em'}>
                      Faces&amp;Laces 2015 conference. Photo by John Carpenter.
                    </Text>
                  </Text>

                  <Block className={'e-row'}>
                    <Block className={'brick brick-10'}>
                      <Text type={'h1'} className={'e-text-grey-900'}>
                        New brands on the conference
                      </Text>

                      <Block className={'twoColText e-body1'}>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro <Text className={'e-text-orange-400'}>quisquam</Text> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Ut enim ad minima veniam, quis nostrum exercitationem ullam <Text className={'e-text-orange-400'}>corporis</Text> suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </Text>
                      </Block>

                      <Block className={'quoteText e-margin-top-25 e-margin-bottom-25 e-body1'}>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          <Text type={'em'}>
                            Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                          </Text>
                        </Text>
                      </Block>

                      <Block className={'twoColText e-body1'}>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro <Text className={'e-text-orange-400'}>quisquam</Text> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Ut enim ad minima veniam, quis nostrum exercitationem ullam <Text className={'e-text-orange-400'}>corporis</Text> suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-900'}>
                          Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </Text>
                      </Block>

                      <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                        <Chip className={'e-background-white'} data={ChipLarus}/>
                        <Chip className={'e-background-white'} data={ChipUI}/>
                        <Chip className={'e-background-white'} data={ChipBlog}/>
                        <Chip className={'e-background-white'} data={ChipInspiration}/>
                        <Chip className={'e-background-white'} data={ChipUX}/>
                        <Chip className={'e-background-white'} data={ChipBrand}/>
                      </Block>

                      <Block>
                        <Btn label={'like'} ripple={true} type={'raised'} className={'raised e-text-grey-900 addRadius50'} />
                        <Btn label={'share'} ripple={true} type={'raised'} className={'raised e-text-white e-background-indigo-600 addRadius50'} />
                        <Btn label={'music'} ripple={true} type={'raised'} className={'raised e-text-white e-background-light-blue-A200 addRadius50'} />
                      </Block>

                      <Block className={'flexBox addPadding15 spaceBetween commentControl e-margin-top-25 e-margin-bottom-25'}>
                        <Text className={'e-text-grey-900 e-button'}>prev</Text>
                        <Text className={'e-text-grey-900 e-button'}>to main</Text>
                        <Text className={'e-text-grey-900 e-button'}>next</Text>
                      </Block>

                      <Block className={'flexBox spaceBetween'}>
                        <Text className={'e-button e-text-grey-900'}>comments (3)</Text>
                        <Btn ripple={true} type={'flat'} icon={'editor-mode-edit'} className={'e-headline e-text-grey-500 btn-icon no-min-size'} />
                      </Block>

                      <Divider classes={'thin e-background-grey-300'} />

                      <Block className={'flexBox e-v-center'}>
                        <Image src={'../assets/img/arnold-square.jpg'} width={'60px'} height={'60px'} className={'roundedImg e-shadow-2'} />
                        <Block className={'addPadding15'}>
                          <List type={'inline'}>
                            <ListItem className={'flexBox alignItemsCenter'}>
                              <Text className={'e-text-grey-500 e-body1'}>John Carpenter</Text>
                            </ListItem>

                            <ListItem className={'flexBox alignItemsCenter'}>
                              <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-500 btn-icon no-min-size'} />
                              <Text type={'em'} className={'e-text-grey-500 e-body1'}>June 21, 11:45 am</Text>
                            </ListItem>
                          </List>
                          <Text type={'p'} className={'e-body1 e-no-margin e-text-grey-500'}>As web designers our role is to design interactive experiences, so it's crezy that our tools focus on creating fixed states, and leave interaction and animation to the imagination</Text>
                          <Btn ripple={true} type={'flat'} icon={'content-reply'} className={'e-text-grey-500 btn-icon no-min-size'} />
                        </Block>
                      </Block>

                      <Divider classes={'thin e-background-grey-300'} />

                      <Block className={'flexBox e-v-center addLeftPadding50'}>
                        <Image src={'../assets/img/arnold-square.jpg'} width={'60px'} height={'60px'} className={'roundedImg e-shadow-2'} />
                        <Block className={'addPadding15'}>
                          <List type={'inline'}>
                            <ListItem className={'flexBox alignItemsCenter'}>
                              <Text className={'e-text-grey-500 e-body1'}>John Carpenter</Text>
                            </ListItem>

                            <ListItem className={'flexBox alignItemsCenter'}>
                              <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-500 btn-icon no-min-size'} />
                              <Text type={'em'} className={'e-text-grey-500 e-body1'}>June 21, 11:45 am</Text>
                            </ListItem>
                          </List>
                          <Text type={'p'} className={'e-body1 e-no-margin e-text-grey-500'}>As web designers our role is to design interactive experiences, so it's crezy that our tools focus on creating fixed states, and leave interaction and animation to the imagination</Text>
                          <Btn ripple={true} type={'flat'} icon={'content-reply'} className={'e-text-grey-500 btn-icon no-min-size'} />
                        </Block>
                      </Block>

                      <Divider classes={'thin e-background-grey-300'} />

                      <Block className={'flexBox e-v-center'}>
                        <Image src={'../assets/img/arnold-square.jpg'} width={'60px'} height={'60px'} className={'roundedImg e-shadow-2'} />
                        <Block className={'addPadding15'}>
                          <List type={'inline'}>
                            <ListItem className={'flexBox alignItemsCenter'}>
                              <Text className={'e-text-grey-500 e-body1'}>John Carpenter</Text>
                            </ListItem>

                            <ListItem className={'flexBox alignItemsCenter'}>
                              <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'e-text-grey-500 btn-icon no-min-size'} />
                              <Text type={'em'} className={'e-text-grey-500 e-body1'}>June 21, 11:45 am</Text>
                            </ListItem>
                          </List>
                          <Text type={'p'} className={'e-body1 e-no-margin e-text-grey-500'}>As web designers our role is to design interactive experiences, so it's crezy that our tools focus on creating fixed states, and leave interaction and animation to the imagination</Text>
                          <Btn ripple={true} type={'flat'} icon={'content-reply'} className={'e-text-grey-500 btn-icon no-min-size'} />
                        </Block>
                      </Block>

                      <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                        <Text className={'e-button e-text-grey-900'}>add comment</Text>
                        <Block className={'flexBox e-v-center'}>
                          <Image src={'../assets/img/arnold-square.jpg'} width={'60px'} height={'60px'} className={'roundedImg addOrangeBorder e-shadow-2'} />
                          <Block className={'addPadding15 e-margin-top-25 e-margin-bottom-25 fullWidth'}>
                            <Input type={'textarea'} name={'label'} rows={3} placeholder={'Write your comment here'} className={'fullWidth roundedCorners inputStyle addPadding15'} />
                          </Block>
                        </Block>
                      </Block>

                      <Block className={'flexBox justEnd'}>
                        <Btn label={'add'} ripple={true} type={'raised'} className={'raised e-text-white e-background-orange-400 addRadius50 e-margin-bottom-50'} />
                      </Block>
                    </Block>{/* end .brick-10*/}
                    <Block className={'brick brick-2'}></Block>

                  </Block>{/* end .e-row*/}
                </Block>{/* end .addLatPadding50*/}

              </Card>
            </Block>
          </Block>{/* end .e-row */}


        </Block>{/* end .e-container*/}
      </Block>
    );
  }
}

module.exports = OnebrandPost;
