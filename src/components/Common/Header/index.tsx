import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../theme/colors';

interface CompProps {
  isLogo: boolean;
  canGoBack?: boolean;
  isProfile?: boolean;
  onGoBackPress?: () => void;
  // Define your props here
}

const Header: React.FC<CompProps> = props => {
  return (
    <View style={styles.container}>
      {props?.canGoBack ? (
        <Icon
          onPress={() => {
            // if (props?.onGoBackPress) {
            console.log('Done');
            props?.onGoBackPress();
            // }
          }}
          name={'arrow-back'}
          size={24}
          color={colors.white}
        />
      ) : null}
      {props.isLogo ? (
        <Image
          source={require('../../../../assets/logo/deGodLogo.png')}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
      ) : null}
      {props.isProfile ? (
        <Image
          source={require('../../../../assets/logo/palceholder-avatar.jpg')}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 40,
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
