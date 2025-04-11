import { API_BASE_URL_2 } from '@env';
import { API_URL_NEW } from '@env';
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pressedItemCategory, setPressedItemCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);


  const fetchCategories = async () => {
    try {
      console.log('Fetching from:', `${API_BASE_URL_2}/products`); // Log the URL
      const response = await fetch(`${API_BASE_URL_2}/products`);
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handlePress = (category) => {
    setPressedItemCategory(category);
  };  

  const categorieItem = ({ item }) => (
    <TouchableOpacity
      style={item.product__Category === pressedItemCategory ? categorieStyles.categorieItemPressed : categorieStyles.categorieItem}
      key={item.product__Category}
      onPress={() => handlePress(item.product__Category)}
    >
      <Image
        style={categorieStyles.categorieImage}
        source={{ uri: item.product__Category_Image }}
      />
      <Text 
        style={item.product__Category === pressedItemCategory ? categorieStyles.categorieTextPressed : categorieStyles.categorieText} 
      >
        {item.product__Category}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size='large' color='#0000ff'/>;
  }
  
  return (
    <View style={categorieStyles.sliderContainer}> 
      <FlatList
        data={categories}
        renderItem={categorieItem}
        keyExtractor={item => item.product__Category}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={categorieStyles.Slider}
      />
    </View>
  );
}

const categorieStyles = StyleSheet.create({
  sliderContainer:{
    marginBottom: 20,
  },
  categorieItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    padding: 10,
    marginLeft: 20,
    borderColor: '#FE8000',
    borderWidth: 1, 
    borderRadius: 11,
    backgroundColor: '#fff',
  },
  categorieText: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  categorieItemPressed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE8000',
    paddingLeft: 10,
    paddingRight: 20,
    padding: 10,
    marginLeft: 20,
    borderColor: '#FE8000',
    borderWidth: .5, 
    borderRadius: 11,
  },
  categorieImage:{
    width: 25,
    height: 25,
    marginRight: 10,
  },
  categorieTextPressed: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#fff',
  }
});
