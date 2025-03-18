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
        <TextInput
          style={finderStyles.input}
          placeholder="Find for food or restaurant..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <Image 
        style={finderStyles.image}
        source={require('../assets/icons/Settings.png')}
      />
    </View>
    
  );
}