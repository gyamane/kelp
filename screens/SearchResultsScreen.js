import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <View style={styles.searchBar}>
            <Image source={require('../assets/images/back_button.png')}
              style={styles.icon} resizeMode='contain'
              onPress={() => navigate('Home')} />
            <Text style={styles.searchBarText} onPress={() => navigate('Home')}>
              Burgers</Text>
            <Image source={require('../assets/images/plant_based_icon.png')}
                style={styles.icon} resizeMode='contain' />
            <Text style={styles.locationText}>
            Financial District, Manhattan, NY</Text>
          </View>
        </View>
        <ScrollView style={styles.container, styles.pad, {height: 500}}>
          <View style={styles.result}>
            <Text style = {styles.subtitle}>1. White Horse Tavern - Financial District</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.items}>10 items</Text>
            <View style={styles.line}/>
          </View>

          <View style={styles.result}>
            <Text style = {styles.subtitle}>2. Shake Shack</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.items}>20 items</Text>
            <View style={styles.line}/>
          </View>

          <View style={styles.result}>
            <Text style = {styles.subtitle}>3. The Ainsworth - FiDi</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.items}>10 items</Text>
            <View style={styles.line}/>
          </View>

          <View style={styles.result}>
            <Text style = {styles.subtitle}>4. Smashburger</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.items}>6 items</Text>
            <View style={styles.line}/>
          </View>
          <View style={styles.result}>
            <Text style = {styles.subtitle}>5. Bareburger</Text>
            <Image source={
              require('../assets/images/yelp_ratings.jpg')} style={styles.image}
              resizeMode='contain'
            />
            <Text style = {styles.normal}>25 Bridge St, Financial District</Text>
            <Text style = {styles.items}>6 items</Text>
            <View style={styles.line}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const GREEN = '#3e8914';
const BLACK = '#000000';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pad: {
    padding: 15,
  },
  search: {
    backgroundColor: GREEN,
    padding: 10,
    paddingTop: 30,
    height: undefined
  },
  searchBar: {
    height: 40,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop: 2.5,
    marginBottom: 2.5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    flex: 1,
    height: 20,
    width: undefined,
    paddingLeft: 10,
    paddingRight: 10
  },
  searchBarText: {
    fontSize: 8,
    paddingLeft: 10
  },
  locationText: {
    fontSize: 8,
    color: '#979797'
  },
  title: {
    textAlign: 'center',
    color: GREEN,
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold'
  },
  result: {
    backgroundColor: WHITE,
    height: undefined,
    marginTop: 5,
    marginBottom: 5
  },
  subtitle: {
    textAlign: 'left',
    color: BLACK,
    fontSize: 12,
    margin: 10,
    fontWeight: 'bold',
  },
  items: {
    color: BLACK,
    fontSize: 10,
    margin: 10
  },
  normal: {
    textAlign: 'left',
    color: '#979797',
    fontSize: 10,
    margin: 10
  },
  image: {
    flex:1,
    height: undefined,
    width: undefined,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
