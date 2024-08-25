import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import BookmarkScreen from '../screens/BookMarkScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NFTDetailScreen from '../screens/NFTDetailScreen';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeTabNavigator() {
  const bookmarkList = useSelector(x => x.bookmark.bookmarkList);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          return (
            <View style={{position: 'relative'}}>
              <Icon name={iconName} size={size} color={color} />
              {route.name === 'Bookmark' ? (
                bookmarkList.length ? (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 12,
                      backgroundColor: 'red',
                      position: 'absolute',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}></View>
                ) : null
              ) : null}
            </View>
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: 'black', borderColor: 'black'},
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
    </Tab.Navigator>
  );
}
function MainTabNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTab" component={HomeTabNavigator} />
      <Stack.Screen name="NFTDetail" component={NFTDetailScreen} />
    </Stack.Navigator>
  );
}
export default MainTabNavigator;
