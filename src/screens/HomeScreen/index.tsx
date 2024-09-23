import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
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
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const nftList = useSelector(state => state.nft.list);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      dispatch(getPaginatedNFTList(pageNumber));
      setPageNumber(prev => prev + 1);
      setLoading(false);
    }, []),
  );
  return (
    <View style={styles.container}>
      <Header isLogo={true} isProfile={true} />
      {loading && nftList?.length === 0 ? (
        <ActivityIndicator size="large" color={'white'} />
      ) : null}
      {nftList?.length > 0 ? (
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={nftList}
          renderItem={({item, index}) => <NFTCard data={item} />}
          onEndReached={() => {
            if (nftList.length < 8943) {
              dispatch(getPaginatedNFTList(pageNumber));
              setPageNumber(prev => prev + 1);
            }
          }}
          onEndReachedThreshold={0.3}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.black,
  },
});

export default HomeScreen;
