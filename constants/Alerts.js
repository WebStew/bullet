import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default {
  error: StyleSheet.create({
    container: {
      backgroundColor: Colors.errorBackground,
    },
    text: {
      color: Colors.errorText,
    },
  }),

  warning: StyleSheet.create({
    container: {
      backgroundColor: Colors.warningBackground,
    },
    text: {
      color: Colors.warningText,
    },
  }),
};
