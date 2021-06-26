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

export const ArtItem = ({
  isBookmarked,
  artistName, collectionName, collectionPrice, releaseDate, trackPrice, artworkUrl, shortDescription
}) =>{
  return (
      <React.Fragment>
     <ListItem bottomDivider >
      <Avatar title={collectionName} source={{ uri: artworkUrl }}/>
      <ListItem.Content>
        <ListItem.Title>{collectionName}</ListItem.Title>
        <ListItem.Subtitle>{artistName}</ListItem.Subtitle>
        <ListItem.Subtitle>Collection Price:{collectionPrice || 'N/A'}</ListItem.Subtitle>
        <ListItem.Subtitle>Track Price:{trackPrice || 'N/A'}</ListItem.Subtitle>
        {shortDescription !== '' && <ListItem.Subtitle>{shortDescription}</ListItem.Subtitle>}
      </ListItem.Content>
      <React.Fragment>
      {isBookmarked === true && (<MaterialCommunityIcons name="bookmark" color={COLOR.black} size={20} />)}
      </React.Fragment>

      <ListItem.Chevron />
    </ListItem>
      </React.Fragment>
  );
};

const selfStyle = StyleSheet.create({
  container: {

  }
});

