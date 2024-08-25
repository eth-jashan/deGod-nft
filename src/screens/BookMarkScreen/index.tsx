import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../theme/colors';
import Header from '../../components/Common/Header';
import NFTCard from '../../components/HomeScreenComponent/NFTCard';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getPaginatedNFTList} from '../../store/actions/nft';

// interface ScreenProps {
//   // Define your props here
// }

const HomeScreen = ({navigation}) => {
  const bookmarkList = useSelector(state => state.bookmark.bookmarkList);
  console.log('bookmarkList....', bookmarkList);
  return (
    <View style={styles.container}>
      <Header isLogo={true} isProfile={true} />
      {bookmarkList?.length > 0 ? (
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={bookmarkList}
          renderItem={({item, index}) => <NFTCard data={item} />}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
