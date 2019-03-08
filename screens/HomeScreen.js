import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dietSelection:'vegan',
      veganFontWeight: 'normal',
      vegetarianFontWeight: 'normal'
    }
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* SEARCH SECTION ON THE TOP */}
        <View style={styles.search}>
          {/* CANCEL BUTTON AND SEARCH BUTTON */}
          <View style={{flex: 1, flexDirection: 'row',
          marginBottom: 10}}>
            <TouchableOpacity style={{flex: 1}}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}}
              onPress={() => navigate('SearchResults')}>
              <Text style={styles.searchBtn}>Search</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 3}}>
            <View style={styles.searchBar}>
              <Image source={require('../assets/images/search.png')}
                style={styles.icon} resizeMode='contain' />
              <TextInput
                style={styles.searchBarText}
                placeholder="Food, Food Type (Italian, American...), etc."
                onChangeText={(text) => this.setState({text})}
              />
            </View>
            <View style={styles.searchBar}>
              <Image source={require('../assets/images/location_icon.png')}
                style={styles.icon} resizeMode='contain' />
              <TextInput
                style={styles.searchBarText}
                placeholder="Location"
                onChangeText={(text) => this.setState({text})}
              />
            </View>
            <View style={styles.searchBar}>
              <Text style={styles.dietSelectionText}>Diet Selection:</Text>
              <Text
                onPress={this.veganSelection}
                style={{flex: 1, fontSize: 15, marginTop: 5, textAlign: 'center', fontWeight: this.state.veganFontWeight}}>Vegan</Text>
              <Text
                onPress={this.vegetarianSelection}
                style={{flex: 1, fontSize: 15, marginTop: 5, textAlign: 'center', fontWeight: this.state.vegetarianFontWeight}}>Vegetarian</Text>
            </View>
          </View>
        </View>

        {/* NEWS SECTION ON BOTTOM */}
        <ScrollView style={styles.veggieNews, styles.pad}>
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

  veganSelection = () => {
    this.setState({dietSelection: 'vegan'})
    this.setState({veganFontWeight: 'bold'})
    this.setState({vegetarianFontWeight: 'normal'})
  }

  vegetarianSelection = () => {
    this.setState({dietSelection: 'vegetarian'})
    this.setState({veganFontWeight: 'normal'})
    this.setState({vegetarianFontWeight: 'bold'})
  }
}

const GREEN = '#3e8914';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pad: {
    padding: 15,
    paddingTop: 0
  },
  search: {
    backgroundColor: GREEN,
    padding: 10,
    paddingTop: 30,
    flex: 1
  },
  cancelBtn: {
    marginTop: 20,
    marginLeft: 10,
    color: '#fff',
    fontSize: 17,
  },
  searchBtn: {
    marginTop: 20,
    marginRight: 10,
    color: '#fff',
    fontSize: 17,
    textAlign: 'right'
  },
  searchBar: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop: 2.5,
    marginBottom: 2.5,
    padding: 5,
    flexDirection: 'row'
  },
  icon: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 5
  },
  searchBarText: {
    flex: 8,
    fontSize: 15,
  },
  title: {
    textAlign: 'center',
    color: GREEN,
    fontSize: 25,
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
  },
  veggieNews: {
    color: '#fff',
    flex: 1
  },
  dietSelectionText: {
    flex: 1,
    padding: 5,
    fontSize: 15,
    marginLeft: 8
  }
});
