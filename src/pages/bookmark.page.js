import React, { useState } from 'react';
import {
SafeAreaView,
ScrollView,
StyleSheet,
View,
TouchableOpacity,
FlatList
} from 'react-native';

import {useRoute} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar, Text, Badge, ListItem } from 'react-native-elements';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import NoResult from '../components/NoResult'; 
import { fetchGet } from '../network/service';
import {ArtItem} from '../components/ArtItem';
import { searchEntity } from '../redux/handler';
import { cleanCollection } from '../helper/utils';
import { FONTSIZE } from '../styles/size';

import {ENTITIES} from '../settings/config';

export default function BookmarkPage(props){
    const route = useRoute();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const listing = useSelector(state => state.listing);
    const [noResultFound, setNoResult] = useState(false);

  

    const onNavDetails = (item) => {

        // TO PREVENT MULTIPLE NAV
        if(route.name !== 'Details'){
            props.navigation.navigate('Details', {item: item});
        }
    };


    const renderItem = ({ item }) => (
        <ArtItem 
        artistName={item.artistName} 
        artworkUrl={item.artworkUrl100}
        collectionName={item.collectionName}
        collectionPrice={item.collectionPrice}
        releaseDate={item.releaseDate}
        longDescription={item.longDescription}
        isBookmarked={true}
        showLongDescription={false}
        onPress={()=> onNavDetails(item)}
        shortDescription={item.shortDescription || ''} />
    );

    const onAddFilter = (item) => {
        setFilter(item);
    }

    return (
        <View style={{ flex: 1 }}>
            <Grid>
            <Section>
                <Block xsSize="1/1" lgSize="3/4" xlSize="3/4">
                    
                    {listing.bookmarks.length > 0 ? (<FlatList
                        numColumns={1}  
                        initialNumToRender={50}
                        style={selfStyle.listContainer}
                        contentContainerStyle={selfStyle.listContentContainer}
                        data={listing.bookmarks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item?.collectionId}${item?.trackId || ''}${item?.collectionArtistId || ''}`}
                    />) : <View style={selfStyle.noresult}><NoResult/></View>}           
                </Block>
            </Section>
            </Grid>
        </View>
    );
 };
 
 const selfStyle = StyleSheet.create({
     search:{
        fontFamily: 'Lato'
     },
     listContainer:{
         width: '100%'
     },
     listContentContainer: {
         width: '100%'
     },
     noresult: {
         alignItems: 'center',
         justifyContent: 'center',
         height: '100%'
     }
 });

 