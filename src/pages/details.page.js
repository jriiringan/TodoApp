import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Text, ListItem, Image, Button } from 'react-native-elements';
import {ArtItem} from '../components/ArtItem';
import { addBookmark, removeBookmark } from '../redux/handler';

export default function DetailsPage(props){
    let {item} = props.route?.params;
    const dispatch = useDispatch();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [indexOfBookmarked, setIndexOfBookmarked] = useState(0);
    const [buttonTitle, setButtonTitle] = useState('add');
    const listing = useSelector(state => state.listing);

    useEffect(()=>{
        const set = () => {
            let isBookmarked = false;
            let indexOfBookmarked = 0;
            if(listing.bookmarks.length > 0){
                listing.bookmarks?.map((book, k) => {if(`${book.collectionId}` == `${item.collectionId}`){
                    setIsBookmarked(true);
                    setIndexOfBookmarked(k);
                    setButtonTitle('remove');
                    return;
                }});
            }
        }
        set();
    }, [item]);
    const onPressAddToBookmark = () => {
        // REMOVE ON BOOKMARK
        if(isBookmarked){   
            dispatch(removeBookmark(indexOfBookmarked));
            setButtonTitle('add');
        }else{
            dispatch(addBookmark(item));
            setButtonTitle('remove');
        }
        setIsBookmarked(value => !value);
    }

    return (
        
        <View style={{ flex: 1 }}>
            <ArtItem 
            artistName={item.artistName} 
            artworkUrl={item.artworkUrl100}
            collectionName={item.collectionName}
            collectionPrice={item.collectionPrice}
            releaseDate={item.releaseDate}
            isBookmarked={isBookmarked}
            showLongDescription={true}
            searchBy={item.searchby}
            hideChevron={true}
            shortDescription={item.shortDescription || ''} />
            <Button  title={`${buttonTitle || 'add'} to Bookmark`}
            type="outline" onPress={onPressAddToBookmark} titleStyle={selfStyle.button}></Button>
        </View>
    );
};

const selfStyle = StyleSheet.create({
    button: {
        textTransform: 'capitalize'
    }
});

