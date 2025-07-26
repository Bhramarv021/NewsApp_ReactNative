import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import NavigationController from './src/navigation/Navigator';
import "react-native-gesture-handler";

function App() {
  return (
      <NavigationController />
  );
}

export default App;
