import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'exp.json',
    },
  };

  //contentContainerStyle={this.props.route.getContentContainerStyle()}

  render() {
    return (
      <ScrollView
        style={styles.container}
        >

        {/* Go ahead and delete ExpoConfigView and replace it with your
           * content, we just wanted to give you a quick view of your config */}
        <ExpoConfigView />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
