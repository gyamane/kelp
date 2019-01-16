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
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cancelBtn}>Cancel</Text>
            <Text style={styles.searchBtn}>Search</Text>
          </View>
        </View>
        <ScrollView style={styles.container, styles.pad}>
          <Text style={styles.title}>Search Results</Text>

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
        </ScrollView>
        <Button
          title="Go to back to home screen"
          onPress={() => navigate('Home')}
        />
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
    paddingTop: 30
  },
  cancelBtn: {
    color: '#fff',
    fontSize: 10,
    flex: 1
  },
  searchBtn: {
    color: '#fff',
    fontSize: 10,
    flex: 1,
    alignSelf: 'flex-end'
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
    height: 150,
    marginTop: 5,
    marginBottom: 5
  },
  subtitle: {
    textAlign: 'left',
    color: BLACK,
    fontSize: 20,
    margin: 10,
    fontWeight: 'normal'
  },
  normal: {
    textAlign: 'left',
    color: BLACK,
    fontSize: 12,
    margin: 10,
    fontWeight: 'normal'
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
