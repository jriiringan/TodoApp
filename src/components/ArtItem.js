import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
// import { Card, Button, Icon } from 'react-native-elements';

import { Text, ListItem, Avatar } from 'react-native-elements';

export const ArtItem = ({
  artistName, collectionPrice,trackPrice, artworkUrl100
}) =>{
  return (
      <React.Fragment>
      <ListItem bottomDivider>
        <Avatar source={{uri: artworkUrl100}} />
          <ListItem.Title>{artistName}</ListItem.Title>
          <ListItem.Subtitle>{trackPrice}</ListItem.Subtitle>
          <ListItem.Subtitle>{collectionPrice}</ListItem.Subtitle>
        </ListItem>
      </React.Fragment>
  );
};

const selfStyle = StyleSheet.create({
  
});

