import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './src/components/Home'

export default function App() {
  return (
    <ScrollView>
      <Home/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
