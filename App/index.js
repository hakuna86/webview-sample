/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <WebView source={{ uri: 'http://m.woorix.com/' }} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
