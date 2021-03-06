import React, { Component } from 'react';
import { Image } from 'react-native';


import DiscogsSearch from '../screens/DiscogsSearch';
import UserProfile from '../screens/UserProfile';
import UserCollections from '../screens/UserCollections';
import WantList from '../screens/WantList';
import {
  TabNavigator,
} from 'react-navigation';

const Nav = TabNavigator({
  Collection: {
    screen: UserCollections,
    navigationOptions: {
      header: null
    },
  },
  Wantlist: {
   screen: WantList
 },
  Profile: {
    screen: UserProfile
  },
  Search: {
    screen: DiscogsSearch
   },
  
},
  {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: false,
    style: {
      backgroundColor: '#1A1A1A'
    }
  },
});

export default Nav;
