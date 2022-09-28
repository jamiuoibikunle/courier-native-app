import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FocusedStatusBar from '../FocusedStatusBar';
import background from '../../assets/images/welcome.jpg';
import colors from '../../assets/colours/Colors';
import {Link} from 'react-router-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={colors.black} />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.bottom}>
          <View style={styles.wrapper}>
            <Text style={styles.header}>
              Best Package Delivery just for you
            </Text>
            <Text style={styles.desc}>
              More than just a simple interface. We provide the best service
              across Nigeria.
            </Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Link to="/dashboard" style={styles.link}>
                <Text style={{color: 'white'}}>Get Started</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  image: {
    height: '100%',
    width: '100%',
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  wrapper: {
    width: '80%',
    margin: 'auto',
  },

  header: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 35,
  },

  desc: {
    color: colors.neutral,
    textAlign: 'center',
    marginVertical: 25,
  },

  button: {
    height: 60,
    backgroundColor: colors.blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: 15,
  },

  link: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default Home;
