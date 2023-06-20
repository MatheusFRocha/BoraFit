import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles.js';

export default function Sports() {
  return (
    <><TouchableOpacity style={styles.container}>
          <Image
              style={styles.imgSports}
              source={require('../../img/correr.jpg')} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.container}>
          <Image
              style={styles.imgSports}
              source={require('../../img/fut.jpg')} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.container}>
          <Image
              style={styles.imgSports}
              source={require('../../img/muscle.jpg')} />
      </TouchableOpacity>
      </>
    
  );
}