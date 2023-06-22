import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function Spring() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Spring Fragrances</Text>

        <Text style={styles.text}>Mojave Ghost (by Byredo)</Text>
        <Image
          style={styles.image}
          source={require('../assets/mojaveghost_2.png')}
        />
        <Text style={styles.details}>
          Mojave Ghost is a woody composition inspired by the soulful beauty of
          the Mojave Desert. In this xeric wilderness, rare are the plants that
          dare to blossom. With a light and graceful character top notes of
          musky Ambrette combine with fresh Jamaican Nesberry.
        </Text>

        <Text style={styles.text}>Luna Rossa (by Prada)</Text>
        <Image
          style={styles.image}
          source={require('../assets/luna_rossa.png')}
        />
        <Text style={styles.details}>
          Evolved from the pursuit of excellence—dynamic, sportive, and
          energetic—Luna Rossa by Prada is a scent with a reverence for the
          natural world and a passion for innovation. A wave of aromatic
          freshness crashes through Luna Rossa, conveying strength and dynamic
          energy, while its signature is noble and sensual.
        </Text>

        <Text style={styles.text}>Y Eau de Parfum (by Yves Saint Laurent)</Text>
        <Image style={styles.image} source={require('../assets/yEDP_2.png')} />
        <Text style={styles.details}>
          YSL Y Eau de Parfum Spray is a bold and woody men's perfume embodied
          by the seductive Y signature scent with a twist. Infused with
          sophisticated and revitalizing notes of sage and geranium, this
          intense men's cologne embodies the passion of the Y man's unique
          strength and masculinity.
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
