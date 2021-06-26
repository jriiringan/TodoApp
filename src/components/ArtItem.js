import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
// import { Card, Button, Icon } from 'react-native-elements';

import { Text, ListItem, Image, Avatar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOR from '../styles/color';

export const SimpleItem = ({
  isBookmarked,
  hideChevron = false,
  onPress,
  showLongDescription,
  longDescription,
  searchBy,
  currency,
  artistName, collectionName, collectionPrice, releaseDate, trackPrice, artworkUrl, shortDescription
}) =>{
  const onPressItem = () =>{
    if(onPress){
      onPress();
    }
  }
  return (
    <React.Fragment>
      <ListItem bottomDivider onPress={()=> {onPressItem()}} >
        <Avatar title={collectionName} source={{ uri: artworkUrl }}/>
        <ListItem.Content>
          {collectionName && <ListItem.Title>{collectionName}</ListItem.Title>}
          {artistName && <ListItem.Subtitle>{artistName}</ListItem.Subtitle>}
          {collectionPrice && <ListItem.Subtitle>Collection Price:{collectionPrice || 'N/A'} {currency}</ListItem.Subtitle>}
          {trackPrice && <ListItem.Subtitle>Track Price:{trackPrice || 'N/A'} {currency}</ListItem.Subtitle>}
          {shortDescription !== '' && !showLongDescription && <ListItem.Subtitle>{shortDescription}</ListItem.Subtitle>}
          {showLongDescription && <ListItem.Subtitle>Description: {longDescription || shortDescription}</ListItem.Subtitle>}
          {searchBy && searchBy !== '' && <ListItem.Subtitle>Search By Keywords: {searchBy}</ListItem.Subtitle>}
        </ListItem.Content>
        <React.Fragment>
        {isBookmarked === true && (<MaterialCommunityIcons name="bookmark" color={COLOR.black} size={20} />)}
        </React.Fragment>

        {!hideChevron && <ListItem.Chevron />}
      </ListItem>
    </React.Fragment>
  );
};

const selfStyle = StyleSheet.create({
  container: {

  }
});
export const ArtItem = React.memo(SimpleItem);

