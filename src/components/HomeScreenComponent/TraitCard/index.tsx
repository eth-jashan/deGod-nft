import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';

interface CompProps {
  // Define your props here
  data: any;
}

const TraitCard: React.FC<CompProps> = props => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.nameText}>{props?.data?.trait_type}</Text>
        <Text style={styles.ownerText}>{props?.data?.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    width: 200,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginRight: 12,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  nameText: {fontSize: 18, color: 'white', fontWeight: '200'},
  ownerText: {fontSize: 18, color: 'white', fontWeight: 'bold'},
});

export default TraitCard;
