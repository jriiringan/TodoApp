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

import { SearchBar } from 'react-native-elements';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { Text } from 'react-native-elements';

import NoResult from '../components/NoResult'; 
import { fetchGet } from '../network/service';
import {ArtItem} from '../components/ArtItem';
import { searchEntity } from '../redux/handler';
import { cleanCollection } from '../helper/utils';

export default function HomePage(props){
    const route = useRoute();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const listing = useSelector(state => state.listing);



    const onSearchText = (value) => {
        setSearchText(value);
    } 

    const onSubmitSearch = async () => {
        let result = await fetchGet({
            term: encodeURI(searchText)
        });
        let cleanResult = await cleanCollection(result.results, 'collectionId');
        dispatch(searchEntity(cleanResult));
    }

    const onNavDetails = () => {
        // TO PREVENT MULTIPLE NAV
        if(route.name !== 'Details'){
            props.navigation.navigate('Details');
        }
    };

    const renderItem = ({ item }) => (
        <ArtItem 
        artistName={item.artistName} 
        artworkUrl={item.artworkUrl100}
        collectionName={item.collectionName}
        collectionPrice={item.collectionPrice}
        releaseDate={item.releaseDate}
        shortDescription={item.shortDescription || ''} />
      );

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                placeholder="Search"
                lightTheme={true}
                onChangeText={onSearchText}
                onSubmitEditing={onSubmitSearch}
                value={searchText}
                inputStyle={selfStyle.search}
            />
            <Grid>
            <Section>
                <Block xsSize="1/1" lgSize="3/4" xlSize="3/4">
                    {/* <NoResult/> */}
                    <FlatList
                        numColumns={1}  
                        initialNumToRender={50}
                        style={selfStyle.listContainer}
                        contentContainerStyle={selfStyle.listContentContainer}
                        data={listing.items}
                        renderItem={renderItem}
                        keyExtractor={item => item?.collectionId}
                    />            
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
     }
 });

 