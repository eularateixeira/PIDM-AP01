import { Text, SafeAreaView, StyleSheet, SectionList, View } from 'react-native';

import Questao01 from './Questao01.jsx';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Questao01/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
});
