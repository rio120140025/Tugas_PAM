import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.menu} source={require('./assets/menu-burger.png')} /> 
      <Image style={styles.user} source={require('./assets/user.png')} /> 
      <Text style={styles.label}>
        Hiling.id
      </Text>
      <View style={styles.forms}>
        <Text style={styles.labelform}>
          Lokasi Keberangkatan
        </Text>
        <Image style={styles.plane} source={require('./assets/plane.png')} />
        <TextInput style={styles.formd}>
          Masukan Lokasi Keberangkatan
        </TextInput>
        <Text style={styles.labelform}>
          Lokasi Tujuan
        </Text>
        <Image style={styles.plane1} source={require('./assets/plane.png')} />
        <TextInput style={styles.formd}>
          Masukan Lokasi Tujuan
        </TextInput>
        <Text style={styles.labelform}>
          Tanggal Keberangkatan
        </Text>
        <Image style={styles.calendar} source={require('./assets/calendar.png')} />
        <TextInput style={styles.formd}>
          Masukan Tanggal Keberangkatan
        </TextInput>
        <Button 
        title='Cari'
        onPress={() => navigation.navigate('Choose')}
        />
      </View>
      <Text style={{textAlign:'center', fontWeight: 'bold', color: 'grey', fontSize: 15, marginTop: 220}}>
        Copyright Rio Prasetyo - 120140025
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
function ChooseFlight({navigation}) {
  return (
    <View style={styles.containerdua}>
      <Image style={styles.menu} source={require('./assets/arrow-left.png')} /> 
      <Image style={styles.user} source={require('./assets/user.png')} /> 
      <Text style={styles.labeldua}>
        Hiling.id
      </Text>
      <Text style={styles.labeltiga}>
        Hasil Pencarian Penerbangan
      </Text>
      <Text style={styles.labeltiga}>
        Waktu Perjalanan
      </Text>
      <View style={styles.forms}>
        <Text style={styles.labelempat}>
          (L.Keberangkatan) - (L.Tujuan)
        </Text>
        <Text style={styles.labelform}>
          Elang
        </Text>
        <Text style={styles.labellima}>
          (Tanggal Keberangkatan)
        </Text>
      </View>
      <View style={styles.forms}>
        <Text style={styles.labelempat}>
          (L.Keberangkatan) - (L.Tujuan)
        </Text>
        <Text style={styles.labelform}>
          Tapis Air
        </Text>
        <Text style={styles.labellima}>
          (Tanggal Keberangkatan)
        </Text>
      </View>
      <View style={styles.forms}>
        <Text style={styles.labelempat}>
          (L.Keberangkatan) - (L.Tujuan)
        </Text>
        <Text style={styles.labelform}>
          Majapahit Air
        </Text>
        <Text style={styles.labellima}>
          (Tanggal Keberangkatan)
        </Text>
      </View>
      <Text style={{textAlign:'center', fontWeight: 'bold', color: 'grey', fontSize: 15, marginTop: 50}}>
        Copyright Rio Prasetyo - 120140025
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Choose" component={ChooseFlight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#86B257',
    borderRadius: 15,
    flex: 0.55,
  },
  containerdua: {
    backgroundColor: '#86B257',
    borderRadius: 15,
    flex: 0.17,
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 75,
  },
  labeldua: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  labeltiga: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'light',
    color: 'white',
  },
  labelempat: {
    textAlign: 'left',
    fontSize: 10,
    fontWeight: 'light',
    color: 'grey',
  },
  labellima: {
    textAlign: 'right',
    fontSize: 13,
    fontWeight: 'light',
    color: 'blue',
    marginTop: -21,
  },
  labelform: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  forms: {
    backgroundColor: '#EAEAEA',
    padding: 15,
    marginHorizontal: 40,
    marginTop: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  formd: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 30,
    borderWidth: 1,
    borderRadius: 7,
    textAlign: 'left',
    padding: 5,
    borderColor: 'grey',
    color:'grey',
  },
  menu: {
    height : 28,
    width: 28,
    position: 'absolute',
    marginTop: 40,
    marginLeft: 24,
  },
  user: {
    height : 28,
    width: 28,
    position: 'absolute',
    marginTop: 40,
    marginLeft: 305,
  },
  plane: {
    height : 28,
    width: 28,
    position: 'absolute',
    marginTop: 47.5,
    marginLeft: 13,
  },
  plane1: {
    height : 28,
    width: 28,
    position: 'absolute',
    marginTop: 135,
    marginLeft: 13,
  },
  calendar: {
    height : 25,
    width: 25,
    position: 'absolute',
    marginTop: 222.5,
    marginLeft: 13,
  },
});