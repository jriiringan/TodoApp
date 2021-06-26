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

export default function HomePage(props){
    const route = useRoute();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [expanded, setExpanded] = useState(false);
    const listing = useSelector(state => state.listing);
    const [selectedFilter, setFilter] = useState('');
    const [noResultFound, setNoResult] = useState(false);

    const onSearchText = (value) => {
        setSearchText(value);
    } 

    const onSubmitSearch = async () => {
        setNoResult(value => false);
        let params = {
            term: encodeURI(searchText),
            entity: ''
        };
        if(selectedFilter !== ''){
            params.entity = selectedFilter;
            if(selectedFilter == 'all') params.entity = '';
        }
        let result = await fetchGet(params);

        if(result.resultCount < 1){
            setNoResult(value => true);
        }
        let cleanResult = await cleanCollection(result.results, 'collectionId');
        dispatch(searchEntity(result.results));
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
        isBookmarked={true}
        shortDescription={item.shortDescription || ''} />
    );

    const onAddFilter = (item) => {
        setFilter(item);
    }

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
            <View style={selfStyle.badgeContainer}>
            <ListItem.Accordion
                style={{width: '100%'}}
                disabledStyle={true}
                content={
                    <>
                    <ListItem.Content>
                        <ListItem.Title>Select Filter</ListItem.Title>
                    </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
                >
                    <View style={selfStyle.filterContent}>
                        {ENTITIES.map((item,k) => <Badge
                        badgeStyle={selfStyle.badgeStyle}
                        textStyle={selfStyle.badgeText}
                        status={selectedFilter == item.key ? 'success': 'primary' } value={item.name}key={k} onPress={ () =>{onAddFilter(item.key)}} />)}
                    </View>
                    
            </ListItem.Accordion>
             
            </View>
            <Grid>
            <Section>
                <Block xsSize="1/1" lgSize="3/4" xlSize="3/4">
                    {noResultFound === true && <NoResult/>}
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
     },
     badgeContainer: {
         alignItems: 'flex-start',
         width: '100%'
     },
     badgeStyle: {
        alignItems: 'center',
        height: 30,
        paddingRight: 6,
        marginTop: 6,
        marginBottom: 6
     },
     badgeText: {

     },
     filterContent:{
         flexDirection: 'row',
         height: 100,
         width: '100%',
         flexWrap: 'wrap',
         paddingHorizontal: 6
     }
 });

 