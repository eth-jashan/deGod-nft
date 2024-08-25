import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';
import deGodLogo from '../../../assets/logo/deGodLogo.png';
import Icon from 'react-native-vector-icons/AntDesign';

interface ScreenProps {
  // Define your props here
}

const WelcomeScreen: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{top: '20%'}}>
        <View style={[styles.iconTileWrapper, {marginBottom: 12}]}>
          <Image
            style={styles.icon}
            source={require('../../../assets/logo/deGodLogo.png')}
          />
        </View>
        <View style={styles.iconTileWrapper}>
          <Text style={styles.bigLightText}>Discover</Text>
          <Text style={styles.bigBoldText}> Rare</Text>
        </View>
        <View style={styles.iconTileWrapper}>
          <Text style={styles.bigBoldText}>Collections</Text>
          <Text style={styles.bigLightText}> Of</Text>
        </View>
        <View style={styles.iconTileWrapper}>
          <Text style={styles.bigBoldText}>DeGods</Text>
          <Text style={styles.bigBoldText}> NFTs</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainFlow')}
        style={styles.exploreBtn}>
        <Text style={styles.exploreBtnTxt}>Explore Now</Text>
        <Icon size={24} name="arrowright" color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.black,
    padding: 32,
  },
  bigLightText: {fontWeight: '200', color: colors.white, fontSize: 48},
  bigBoldText: {fontWeight: 'bold', color: colors.white, fontSize: 48},
  iconTileWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleStyle: {fontWeight: 'bold', color: colors.white, fontSize: 24},
  icon: {height: 70, width: 70},
  exploreBtn: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.dedGodBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreBtnTxt: {fontWeight: '500', color: colors.white, fontSize: 18},
});

export default WelcomeScreen;
