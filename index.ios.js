/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class pooper extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: {
        latitude: 55.676098,
        longitude: 12.568337,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [{
        latlng: {
          latitude: 55.676098,
          longitude: 12.568337,
        },
        title: "Her bor noob",
        description: "Noob noobtzens hjem",
      }],
    
    initialPosition: 'unknown',
    lastPosition: 'unknown',
    
    };
  }


  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <MapView 
          style={styles.map} 
          region={this.state.region} 
        >
          {this.state.markers.map(marker => (
          <MapView.Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
          ))}
        </MapView>



        <Text style={styles.welcome}>
          Welcome to Pooper 💩😊!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Verdana',
    backgroundColor: 'transparent',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('pooper', () => pooper);
