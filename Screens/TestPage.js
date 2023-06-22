// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function TestPage({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/MySceneNotes.png')}
      resizeMode="stretch"
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View>
          <Text
            style={styles.text}
            onPress={() => {
              navigation.navigate('Climates');
            }}
          >
            Let's Get Started
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Georgia-Italic',
    textAlign: 'center',
    paddingTop: 620,
    paddingRight: 5,
  },
});
