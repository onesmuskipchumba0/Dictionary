import { Image, StyleSheet, Platform, View, Text, Alert } from 'react-native';
import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import Dictionary from '../../components/Dictionary'
export default function HomeScreen() {
  return (
    <View style={{
      justifyContent:'center',
      flex:1,
      alignItems:'center'
    }}>
      <Dictionary word='lovely' />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
