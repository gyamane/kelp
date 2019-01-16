import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export class SearchResult extends React.Component {
  render() {
    return (
      <TouchableOpacity style={this.props.styles.result}>
        <Text style = {this.props.styles.subtitle}
        onPress={ () => navigate('RestaurantScreen')}>{this.props.name}</Text>
        <Image source={
              require('../assets/images/yelp_ratings.jpg')}
              style={this.props.styles.image}
              resizeMode='contain'
              onPress={ () => navigate('RestaurantScreen')}
          />
        <Text style = {this.props.styles.normal}
          onPress={ () => navigate('RestaurantScreen')}>
          {this.props.address}</Text>
        <Text style = {this.props.styles.items}
          onPress={ () => navigate('RestaurantScreen')}>
          {this.props.num_items} items</Text>
        <View style={this.props.styles.line}/>
      </TouchableOpacity>
    )
  }
}
