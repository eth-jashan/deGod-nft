import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Common/Header';
import {colors} from '../../theme/colors';
import NFTCard from '../../components/HomeScreenComponent/NFTCard';
import TraitCard from '../../components/HomeScreenComponent/TraitCard';

interface ScreenProps {
  // Define your props here
}

const NFTDetailScreen: React.FC<ScreenProps> = ({route, navigation}) => {
  const {nftInfo} = route.params;
  console.log('nftInfo', JSON.stringify(nftInfo));
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        canGoBack
        onGoBackPress={() => navigation.navigate('Home')}
        isLogo={false}
      />
      <NFTCard data={nftInfo} />
      <View style={{padding: 16, paddingBottom: 0}}>
        <Text style={[styles.tokenIdStyle, {color: colors.dedGodBlue}]}>
          Token ID #{nftInfo?.nft_data?.token_id}
        </Text>
        <Text style={[styles.headerTitle, {marginTop: 12}]}>
          About {nftInfo?.nft_data?.external_data?.name}
        </Text>
        <Text style={styles.descriptionStyle}>
          {nftInfo?.nft_data?.external_data?.description}
        </Text>
        <Text style={[styles.headerTitle, {marginTop: 12}]}>NFT Traits</Text>
      </View>

      {nftInfo?.nft_data?.external_data?.attributes?.length > 0 ? (
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={nftInfo?.nft_data?.external_data?.attributes}
          contentContainerStyle={{paddingLeft: 12}}
          horizontal
          renderItem={({item, index}) => <TraitCard data={item} />}
        />
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerTitle: {fontWeight: '700', color: colors.white, fontSize: 24},
  tokenIdStyle: {fontWeight: 'bold', color: colors.white, fontSize: 22},
  descriptionStyle: {fontWeight: '200', color: colors.white, fontSize: 22},
});

export default NFTDetailScreen;
