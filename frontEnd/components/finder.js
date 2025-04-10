import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export default function Finder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Add your search logic here
  };

  return (
    <View style={finderStyles.containerPrincipal}>
      <View style={[
        finderStyles.containerInput, 
        isFocused && { borderColor: "gray" }
      ]}>
        <Image 
          style={finderStyles.imageLupa}
          source={require('../assets/icons/find.png')}
        />  

        <TextInput
          style={finderStyles.input}
          placeholder="Find for food or restaurant..."
          value={searchQuery}
          onChangeText={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          selectionColor="gray" // Set text cursor color to gray
        />
      </View>

      <View style={finderStyles.imageContainer}>
        <Image 
          style={finderStyles.imageFilter}
          source={require('../assets/icons/Settings.png')}
        />
      </View>
    </View>
  );
}

const finderStyles = StyleSheet.create({
  containerPrincipal: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  containerInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width:"75%",
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    padding: 30,
    borderColor: "#e0e0e0",
    backgroundColor: "#fff",
  },  
  input: {
    width: "100%",
    height: 50,
    fontFamily: "Montserrat_400Regular",
  },
  imageLupa: {
    marginRight: 7,
  },

  imageContainer: {
    width: 60, 
    height: 90, 
  },
  imageFilter: {
    width: '100%',
    height: '100%',
  },
});