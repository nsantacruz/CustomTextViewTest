import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CustomTextView from './CustomTextView';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <CustomTextView
          style={{
            color: 'red',
            width: 100,
            height: 100,
            backgroundColor: 'pink'
          }}
          text="This text is <b>black</b>, not <i>red</i>"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
