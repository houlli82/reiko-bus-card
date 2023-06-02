import { StyleSheet, View } from 'react-native';
import Head from "expo-router/head";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Bottom from "./Components/Bottom/Bottom";

export default function App() {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="My App description" />
      </Head>
      <View style={styles.container}>
        <Header />
        <About />
        <Contact />
        <Bottom />
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
