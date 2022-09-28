import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import FocusedStatusBar from '../FocusedStatusBar';
import colors from '../../assets/colours/Colors';
import {Headline, TextInput} from 'react-native-paper';

const dummy = [
  {
    number: 'JO0141831780',
    status: 'Order in search',
  },
  {
    number: 'JO0141831740',
    status: 'In delivery',
  },
  {
    number: 'JO0141832620',
    status: 'Order in your home',
  },
  {
    number: 'JO0141831780',
    status: 'Order in search',
  },
  {
    number: 'JO0141831740',
    status: 'In delivery',
  },
  {
    number: 'JO0141832620',
    status: 'Order in your home',
  },
  {
    number: 'JO0141831780',
    status: 'Order in search',
  },
  {
    number: 'JO0141831740',
    status: 'In delivery',
  },
  {
    number: 'JO0141832620',
    status: 'Order in your home',
  },
  {
    number: 'JO0141831780',
    status: 'Order in search',
  },
  {
    number: 'JO0141831740',
    status: 'In delivery',
  },
  {
    number: 'JO0141832620',
    status: 'Order in your home',
  },
];

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={colors.black} />
      <View style={styles.header}>
        <View>
          <Text style={{color: colors.neutral, marginBottom: 5}}>
            30 July, Sunday
          </Text>
          <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>
            Hi, Convyy!
          </Text>
        </View>
        <View style={styles.avatar} />
      </View>
      <View style={styles.top}>
        <Headline style={{color: 'white', width: '100%', fontSize: 20}}>
          Track your package!
        </Headline>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            marginBottom: 15,
            width: '100%',
          }}>
          Enter the receipt number that has been given by the officer
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your receipt number"
          left={<TextInput.Icon name="search-web" />}
        />
      </View>
      <View style={styles.middle}>
        <View style={styles.middleitem}>
          <Text style={{fontSize: 18}}>Single shipping</Text>
        </View>
        <View style={styles.middleitem}>
          <Text style={{fontSize: 18}}>Bulk shipping</Text>
        </View>
      </View>
      <Headline>Tracking history</Headline>
      <ScrollView style={{marginVertical: 5}}>
        <View style={{marginVertical: 15}}>
          {dummy.map(({number, status}, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.icon} />
              <View style={{flex: 1, marginHorizontal: 10}}>
                <Text style={{fontWeight: '600', marginBottom: 5}}>
                  {number}
                </Text>
                <Text style={{color: colors.neutral}}>{status}</Text>
              </View>
              <TouchableOpacity>
                <Text>Go</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <Text>Home</Text>
        <Text>Send</Text>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: colors.blue,
  },

  top: {
    backgroundColor: colors.blue,
    height: 180,
    width: '100%',
    marginVertical: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    borderRadius: 10,
  },

  middle: {
    height: 150,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },

  middleitem: {
    flex: 1,
    backgroundColor: colors.light,
    marginLeft: 5,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },

  icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 50,
  },

  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
