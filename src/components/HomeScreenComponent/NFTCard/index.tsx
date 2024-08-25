import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import {colors} from '../../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';

import {
  addToBookmark,
  removeFromBookmark,
} from '../../../store/actions/bookmark';
import {useNavigation} from '@react-navigation/native';

interface CompProps {
  // Define your props here
  data: any;
}

const NFTCard: React.FC<CompProps> = props => {
  const bookmarkList = useSelector(x => x.bookmark.bookmarkList);
  const isBookmarked =
    bookmarkList.filter(
      x => x.nft_data?.token_id === props?.data?.nft_data?.token_id,
    ).length > 0
      ? true
      : false;

  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('NFTDetail', {nftInfo: props?.data})}
      style={styles.cardContainer}>
      <Image
        style={{width: '100%', height: 300}}
        source={{
          uri: props?.data?.nft_data?.external_data?.image_preview,
        }}
      />
      <Pressable
        onPress={() => {
          if (!isBookmarked) {
            dispatch(addToBookmark(props.data));
            // setBookmarked(!bookmarked);
          } else {
            dispatch(removeFromBookmark(props?.data?.nft_data?.token_id));
          }
        }}
        style={styles.bookMarkWrapper}>
        <Icon
          size={30}
          name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
          color={colors.white}
        />
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 20}}>
          <Text style={styles.nameText}>
            {props?.data?.nft_data?.external_data?.name}
          </Text>
          <Text style={styles.ownerText}>
            {props?.data?.nft_data?.current_owner?.slice(0, 5)}
            ...
            {props?.data?.nft_data?.current_owner?.slice(-5)}
          </Text>
        </View>
        <Icon size={24} name="ethereum" color={colors.white} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '88%',
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 12,
    alignSelf: 'center',
    position: 'relative',
  },
  imageContainer: {width: 300, height: 300},
  nameText: {fontSize: 18, color: 'white', fontWeight: '200'},
  ownerText: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  bookMarkWrapper: {position: 'absolute', right: 24, top: 24},
});

export default NFTCard;
