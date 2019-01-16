import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

export class SearchResult extends React.Component {
  render() {
    return (
      <View style={this.props.styles.result}>
        <Text style = {this.props.styles.subtitle}>{this.props.name}</Text>
        <Image source={
              require('../assets/images/yelp_ratings.jpg')}
              style={this.props.styles.image}
              resizeMode='contain'
          />
        <Text style = {this.props.styles.normal}>{this.props.address}</Text>
        <Text style = {this.props.styles.items}>{this.props.num_items} items</Text>
        <View style={this.props.styles.line}/>
      </View>
    )
  }
}
