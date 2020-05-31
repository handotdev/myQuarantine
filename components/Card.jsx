import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card() {
  return (
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