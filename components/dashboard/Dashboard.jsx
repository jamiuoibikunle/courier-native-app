import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import FocusedStatusBar from '../FocusedStatusBar';
import colors from '../../assets/colours/Colors';
import {Headline, TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <View style={styles.avatar}>
          <Fontisto name="person" size={40} />
        </View>
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
          left={<TextInput.Icon icon="search1" color={colors.blue} />}
        />
      </View>
      <View style={styles.middle}>
        <View style={styles.middleitem}>
          <View style={styles.iconbg}>
            <FontAwesome5
              name="shipping-fast"
              style={{
                fontSize: 30,
                color: colors.blue,
              }}
            />
          </View>
          <Text style={{fontSize: 20, fontWeight: '500', marginTop: 10}}>
            Single shipping
          </Text>
        </View>
        <View style={styles.middleitem}>
          <View style={styles.iconbg}>
            <FontAwesome5
              name="mail-bulk"
              style={{
                fontSize: 30,
                color: colors.blue,
              }}
            />
          </View>
          <Text style={{fontSize: 20, fontWeight: '500', marginTop: 10}}>
            Bulk shipping
          </Text>
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
                <Ionicons name="chevron-forward" style={{fontSize: 20}} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <Entypo name="home" color={colors.blue} style={{fontSize: 20}} />
        <FontAwesome
          name="send"
          style={{
            backgroundColor: 'black',
            color: 'white',
            fontSize: 20,
            padding: 15,
            borderRadius: 30,
            marginHorizontal: 50,
          }}
        />
        <Ionicons
          name="settings"
          color={colors.neutral}
          style={{fontSize: 20}}
        />
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
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
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

  iconbg: {
    backgroundColor: 'white',
    width: 45,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Dashboard;
