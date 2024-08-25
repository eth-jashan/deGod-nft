import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface CompProps {
  isLogo: boolean;
  isProfile?: boolean;
  // Define your props here
}

const Header: React.FC<CompProps> = props => {
  return (
    <View style={styles.container}>
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
