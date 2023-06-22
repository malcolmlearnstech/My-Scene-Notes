// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function Winter() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Winter Fragrances</Text>

        <Text style={styles.text}>
          'By The Fireplace' (by Maison Margiela Replica)
        </Text>
        <Image
          style={styles.image}
          source={require('../assets/ByTheFireplace.png')}
        />
        <Text style={styles.details}>
          This warm scent combines orange flower, clove oil, and chestnut atop a
          comforting vanilla fragrance to re-create the signature warmth and
          coziness of a crackling fire.
        </Text>

        <Text style={styles.text}>
          Stronger With You Absolutely (by Emporio Armani)
        </Text>
        <Image
          style={styles.image}
          source={require('../assets/strongerwithyouAB.png')}
        />
        <Text style={styles.details}>
          This powerful and sensual fragrance is boosted by an addictive new rum
          accord, while lavender, sustainably sourced in France, is irresistibly
          enhanced with liquorous and fruity facets. Warm vanilla, harvested in
          Madagascar, and smoky cedar wood, carefully extracted in Virginia,
          USA.
        </Text>

        <Text style={styles.text}>Ombre Leather (by Tom Ford)</Text>
        <Image
          style={styles.image}
          source={require('../assets/ombreleather.png')}
        />
        <Text style={styles.details}>
          The tactile sensuality of rich black leather, textured with addictive
          patchouli and vetiver envelops like a second skin. The perfume’s
          floral tones of jasmine sambac conjure wild desert beauty, while
          layers of amber and moss mimic the heat of rock and sand.
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
