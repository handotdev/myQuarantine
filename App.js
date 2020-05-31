import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.name}>Han Wang</Text>
    //   <Text style={styles.age}>Age: 20</Text>
    //   <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    //   <Image 
    //     style={styles.picture}
    //     source={require('./assets/hanwangpicture.png')}
    //   />
    //   <View style={styles.logoutButton}>
    //     <Text style={styles.logoutText}>Logout</Text>
    //   </View>
    // </View>
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <View style={styles.userCard}>
        <Image
          style={styles.profilePic}
          source={{uri: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp"}}
         />
         <View style={styles.textContainer}>
            <Text style={[styles.userText, styles.nameText]}>Colton Underwood <Text style={styles.nameTextBold}>23</Text></Text>
            <Text style={styles.userText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas.</Text>
         </View>
      </View>
      <View style={styles.userCard}>
        <Image
          style={styles.profilePic}
          source={{uri: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp"}}
         />
         <View style={styles.textContainer}>
            <Text style={[styles.userText, styles.nameText]}>Colton Underwood <Text style={styles.nameTextBold}>23</Text></Text>
            <Text style={styles.userText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas.</Text>
         </View>
      </View>
      <View style={styles.userCard}>
        <Image
          style={styles.profilePic}
          source={{uri: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp"}}
         />
         <View style={styles.textContainer}>
            <Text style={[styles.userText, styles.nameText]}>Colton Underwood <Text style={styles.nameTextBold}>23</Text></Text>
            <Text style={styles.userText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas.</Text>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36
  },

  userCard: {
    marginVertical: 8,
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#F9F9F9',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  textContainer: {
    marginLeft: 4,
    flex: 1,
    textAlign: 'right',
    // backgroundColor: '#333'
  },

  userText: {
    textAlign: 'right'
  },

  nameText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  nameTextBold: {
    color: '#FF6767'
  },

  bioText: {
    fontSize: 16,
    color: '#555'
  },

  // name: {
  //   marginTop: 60,
  //   fontSize: 32,
  //   color: '#333',
  //   fontWeight: 'bold'
  // },

  // age: {
  //   marginTop: 16,
  //   fontSize: 24,
  //   color: '#FF6767',
  //   fontWeight: 'bold'
  // },

  // bio: {
  //   marginTop: 12,
  //   fontSize: 16,
  //   color: '#555555'
  // },

  // picture: {
  //   marginTop: 4
  // },

  // logoutButton: {
  //   marginTop: 36,
  //   height: 38,
  //   width: '100%',
  //   backgroundColor: '#FF6767',
  //   borderRadius: 8,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },

  // logoutText: {
  //   fontSize: 24,
  //   color: '#FFF',
  //   fontWeight: 'bold'
  // }

  title: {
    marginTop: 60,
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold'
  },

  profilePic: {
    height: 88,
    width: 88,
    borderRadius: 44
  }
});