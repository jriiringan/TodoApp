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
        dispatch(searchEntity(result.results));
        console.log(listing.items[0]);
    }

    const onNavDetails = () => {
        // TO PREVENT MULTIPLE NAV
        if(route.name !== 'Details'){
            props.navigation.navigate('Details');
        }
    };

    const renderItem = ({ item }) => (
        <ArtItem artistName={item.artistName}/>
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
                        style={selfStyle.listContainer}
                        data={listing.items}
                        renderItem={renderItem}
                        keyExtractor={item => item?.trackId}
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
     }
 });

 