import React, { useState } from "react";
import { Text, TextInput, View, Image} from "react-native";
import finderStyles from "../componentStyles/finderStyles.js";

export default function Finder() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Add your search logic here
  };

  return (
    <View style={finderStyles.containerPrincipal}>

      <View style={finderStyles.containerInput}>
        <Image 
          style={finderStyles.imageLupa}
          source={require('../assets/icons/find.png')}
        />  

        <TextInput
          style={finderStyles.input}
          placeholder="Find for food or restaurant..."
          value={searchQuery}
          onChangeText={handleSearch}
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