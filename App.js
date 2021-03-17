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
        <View style={{flex: 1, flexDirection: "row", backgroundColor: 'pink'}}>
          <CustomTextView
            style={{
              color: 'red',
              flex: 1,
              padding: 100,
            }}
            text="This text is <b>black</b>, not <i>red</i>"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
