import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container, styles.pad, styles.search}>
          <Text style={styles.action}>Cancel</Text>
          <Text style={styles.action}>Search</Text>
        </View>
        <ScrollView style={styles.container, styles.pad}>
          <Text style={styles.title}>Veggie News</Text>
          <View style={styles.promotion}>
            <Image source={
              require('../assets/images/carls_jr.jpg')} style={styles.image}
              resizeMode='contain'
            />
          </View>
          <View style={styles.promotion}>
            <Image source={
              require('../assets/images/just_mayo.jpg')} style={styles.image}
              resizeMode='contain'
            />
          </View>
          <View style={styles.promotion}>
            <Image source={
              require('../assets/images/impossible_burger.png')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const GREEN = '#3e8914';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pad: {
    padding: 10,
  },
  search: {
    backgroundColor: GREEN,
    paddingTop: 15
  },
  action: {
    color: '#fff',
    fontSize: 11
  },
  title: {
    textAlign: 'center',
    color: GREEN,
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  promotion: {
    backgroundColor: GREEN,
    height: 100,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    flex:1,
    height: undefined,
    width: undefined,
  }
});
