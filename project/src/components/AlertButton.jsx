import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';

import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

const App = props => {
  const createTwoButtonAlert = props =>
    Alert.alert('안내창', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed!'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed!') },
    ]);

  return (
    <View style={styles.container}>
      <Button
      title={'팝업창 열기'}
      onPress={createTwoButtonAlert}
      style={text.buttonText_small}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;