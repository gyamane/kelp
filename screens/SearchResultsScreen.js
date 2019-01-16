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
import { SearchResult } from '../components/SearchResult';

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
          <SearchResult styles = {styles}
                        name = '1. White Horse Tavern'
                        address = '25 Bridge St, Financial District'
                        num_items = '10'
                        />
          <SearchResult styles = {styles}
                        name = '2. Shake Shack'
                        address = '25 Bridge St, Financial District'
                        num_items = '20'
                        />
          <SearchResult styles = {styles}
                        name = '3. The Ainsworth - FiDi'
                        address = '25 Bridge St, Financial District'
                        num_items = '5'
                        />
          <SearchResult styles = {styles}
                        name = '3. The Ainsworth - FiDi'
                        address = '25 Bridge St, Financial District'
                        num_items = '5'
                        />
          <SearchResult styles = {styles}
                        name = '3. The Ainsworth - FiDi'
                        address = '25 Bridge St, Financial District'
                        num_items = '5'
                        />
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
  result: {
    backgroundColor: WHITE,
    height: undefined,
    margin: 10,
  },
  subtitle: {
    textAlign: 'left',
    color: BLACK,
    fontSize: 12,
    fontWeight: 'bold',
  },
  items: {
    color: BLACK,
    fontSize: 10,
    marginBottom: 10
  },
  normal: {
    textAlign: 'left',
    color: '#979797',
    fontSize: 10,
    marginBottom: 10
  },
  image: {
    height: 40,
    width: undefined,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
