import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TimerScreen from './TimerScreen';


function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here, such as validating credentials
    // Once the login is successful, setLoggedIn(true);
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <TimerScreen />;
  }

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 4,
    borderColor: 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>My Timer</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.firstTextMiddle}>
            להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder="הקלד אימייל"
            placeholderTextColor="#888888"
            textAlign="right"
          />
          <TextInput
            style={styles.inputField}
            placeholder="מספר טלפון"
            placeholderTextColor="#888888"
            keyboardType="numeric"
            textAlign="right"
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={handleLogin}>
            <View style={styles.buttonBackground}>
              <Image source={require('./assets/login-button-arrow.png')} style={styles.arrowImage} />
            </View>
          </TouchableOpacity>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>צריך עזרה?</Text>
            <Text style={styles.footerText}>יצירת קשר עם התמיכה</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: windowHeight * 0.1,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    flex: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  middleContainer: {
    width: '100%',
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontFamily: 'arial',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  firstTextMiddle: {
    width: '60%',
  },
  inputField: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  footerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 3,
    alignContent: 'flex-end',
  },
  footerText: {
    width: '100%',
    marginTop: 5,
  },
  buttonWrapper: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  buttonBackground: {
    backgroundColor: 'purple',
    padding: 20,
  },
  arrowImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  footerTextContainer: {
    alignItems: 'center',
  },
});

export default App;
