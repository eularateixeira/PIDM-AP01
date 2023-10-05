import { Text, SafeAreaView, StyleSheet, SectionList, View } from 'react-native';

import { IconButton } from "react-native-paper"

// You can import supported modules from npm
import { Card } from 'react-native-paper';

const DATA = require('./data.json');

const Questao01 = () => {
  return (
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View>
          <View style={styles.item}>
            <View style={styles.itemrow}>
              <IconButton
              icon={item.type}
              color='#fff'
              size={20}
              onPress={() => console.log('Pressed')}
              mode='contained'
              />
              <Text style={styles.mytext}>{item.name}</Text>
              <Text style={styles.mytext}>R$ {item.value}</Text>
            </View>
            <Text style={styles.mytime}>{item.time}</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 8,
  },
  itemrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    color: 'white',
    fontSize: 24,
    backgroundColor: '#000000',
  },
  mytext: {
    fontSize: 20,
    color: 'white',
  },
  mytime: {
    color: 'white',
    fontSize: 12,
  }
});

export default Questao01;
