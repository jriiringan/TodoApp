import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
// import { Card, Button, Icon } from 'react-native-elements';

import { Text, ListItem, Image, Avatar } from 'react-native-elements';

export const ArtItem = ({
  artistName, collectionName, collectionPrice, releaseDate, trackPrice, artworkUrl, shortDescription
}) =>{
  return (
      <React.Fragment>
     <ListItem bottomDivider >
      <Avatar title={collectionName} source={{ uri: artworkUrl }}/>
      <ListItem.Content>
        <ListItem.Title>{collectionName}</ListItem.Title>
        <ListItem.Subtitle>{artistName}</ListItem.Subtitle>
        {shortDescription != '' && <ListItem.Subtitle>{shortDescription}</ListItem.Subtitle>}
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
      </React.Fragment>
  );
};

const selfStyle = StyleSheet.create({
  container: {

  }
});

