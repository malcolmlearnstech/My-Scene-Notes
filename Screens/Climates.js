// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function Climates({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>Pick Your Current Climate</Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate('Winter');
          }}
        >
          Winter
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate('Spring');
          }}
        >
          Spring
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate('Summer');
          }}
        >
          Summer
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate('Fall');
          }}
        >
          Fall
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Georgia-Italic',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Georgia-Italic',
    textAlign: 'center',
    paddingTop: 100,
  },
});
