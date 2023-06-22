import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function Summer() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Winter Fragrances</Text>

        <Text style={styles.text}>Dior Homme Cologne (by Christian Dior)</Text>
        <Image
          style={styles.image}
          source={require('../assets/diorhomme.png')}
        />
        <Text style={styles.details}>
          Dior Homme Cologne Pure and radical, the Cologne freshness is
          recreated with a Grapefruit Blossom base. Its enveloping trail
          reflects the casual charm of a timeless white dress shirt. Not
          ostentatious, but stylish. The elegance of simplicity with a skin
          scent, just for you.
        </Text>

        <Text style={styles.text}>Virgin Island Water (by Creed)</Text>
        <Image style={styles.image} source={require('../assets/VIWbyC.png')} />
        <Text style={styles.details}>
          Imagine a life aquatic, a sailing adventure in a bottle. Virgin Island
          Water captures the tropical splendor carried in the trade winds
          through Sir Francis Drake Channel in the Caribbean. Simultaneously
          fresh and warm, this uplifting scent radiates Jamaican lime and
          coconut, complementing men and women in warmer months and climes, or
          carrying an enticing bit of paradise with its wearer all year round.
        </Text>

        <Text style={styles.text}>212 for Men (by Carolina Herrera)</Text>
        <Image style={styles.image} source={require('../assets/212byCH.png')} />
        <Text style={styles.details}>
          In a boldly masculine silver container, this innovative woodsy scent
          compliments and intertwines with 212 for women. With the personality
          of sandalwood, the spirit of incense and the sensuality of gaiac, its
          character of cool gardenia is balanced by warm spices. It's subtle and
          unique!
        </Text>
      </ScrollView>
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
    fontFamily: 'Georgia-BoldItalic',
    textAlign: 'center',
    paddingTop: 100,
  },
  details: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Georgia',
    textAlign: 'center',
    paddingTop: 15,
  },
  image: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
